---
title: Image Optimization Android
description: Performance techniques when using images in NativeScript
position: 65
slug: images-performance
---

# Android Image Optimization

One of the most common scenarios for modern mobile applications is to work with multiple images often in high definition formats.
It is essential for the mobile developer to handle memory related issues and optimize an application so it can process large data(e.g., a web request to that downloads hundreds of photos and alike).

In this article, we will take a look at how the `Image` module works in NativeScript and 
cover the techniques that will improve Android application performance.

* [Handling large images](#handling-large-images-and-avoiding-out-of-memory-exception)
* [Using `decodeHeight` and `decodeWidth` properties](#using-decodeheight-and-decodewidth-properties)
* [Using `loadMode` property](#using-loadmode-property)
* [Using `useCache` property](#using-usecache-property)

## Handling large images and avoiding Out Of Memory exception

In some cases when working with multiple large images on devices with low memory, an `Out Of Memory` exception can occur. To prevent that scenario, in NativeScript 2.5.x and above using the `src` property in Android will internally load the Bitmap in Java. Bitmap memory stays in Java world and reclaims once the Bitmap is no longer in use (e.g., there is no need for the Javascript object to be collected).This way Bitmap memory management is not an issue.

In contrast, when using `ImageSource` or Base64 encoded string, the Bitmap is transferred to Javascript, so it will be released when Javascript object reclaims. Javascript garbage collection happens less frequently than Java garbage collection which might lead to Out Of Memory.

> **Recommendation**: Use `src` property of your `Image` to set your images to avoid `Out Of Memory` related issues.

### Using `decodeHeight` and `decodeWidth` properties

As an additional feature for Android, NativeScript supports `decodeWidth` and `decodeHeight`. These properties will **downsample** your image so that it will take less memory. 
The goal is to avoid as much as possible out of memory exceptions caused by images being loaded into memory and at the same time display crispy images. 

> **Recommendation:** Use `decodeWidth` and `decodeHeight` only when working with large photos are there are `Out of Memory` exceptions issues. With NativeScript 3.x.x and above, image optimizations were implemented and in the common scenarios, you should not worry about hitting OOM. 

When working with the decode properties, the following considerations should be taken:

- The `decodeWidth` and `decodeHeight` properties accepts **DIP** (device independent pixels) as measurement units. This means that image decoding will happen concerning device DPI. 
Devices with higher pixel density displays will decode their images larger out of the box so that they appear crispy. You can still set the properties in px if you so choose.

- The `decodeWidth` and `decodeHeight` properties will now respect the `stretch` property value. If you set `stretch` to `aspectFill` or `aspectFit`, NativeScript will keep the aspect ratio while shrinking the image.

- When `decodeWidth` and `decodeHeight` values are **not** set, the images will be decoded with the size of the device screen. This is an optimization as in most cases you probably want to see the whole of the image on your device screen. Note that if you still want the image to be decoded in full size (if you want to be able to zoom it for example), you can manually set `decodeWidth` and `decodeHeight`.

- Image caching now takes into account the `decodeWidth` and `decodeHeight` values. Identical images with different decode property values will now be retrieved and saved separately in the cache. This results in better quality images - if you have a small version of the image in a master list and want to decode it with 100 x 100 DP, and then want to display it in 1000 x 1000 DP on the detail page, the detailed image will now not be blurry. This also means you can now control caching - using the same image with the same decode parameter values will still get the image from the cache.

> **Important**: The properties `decodeWidth`, `decodeHeight`  will work only for Android. Setting them for our iOS images will not change the application behaviour in any way.

### Using `loadMode` property

With [loadMode](http://docs.nativescript.org/api-reference/modules/_ui_image_.html#loadmode) set to `async`, the image will load asynchronously meaning the UI won't block by the decoding and preloading operations. The developers can use `loadMode` on both iOS and Android.

> **Tip**: Use `loadMode="async"` to prevent blocking of the UI while the image is loading.

```XML
<StackLayout>
    <Image src="{{ someExtremelyLargeImage }}" decodeWidth="400" decodeHeight="400" loadMode="async" />
    <Label text="With loadMode set to async the UI won't be blocked" textWrap="true" />
</StackLayout>
```

> **Important**: When the `src` value starts with `http` it will be loaded asynchronously no matter what value is set to `loadMode`.

### Using `useCache` property

The `Image` module will use internal memory and disk cache, so when loaded the module stores the images in the memory cache, and when they are not needed anymore, the `Image` module saves the images in the disk cache. This way the next time the application needs the same image NativeScript will load it from memory or the disk cache. Setting property `useCache` to `false` could be used to bypass image cache and load the image as it is on the first request to the specified URL.

> **Important**: The property `useCache` will work only for Android. Setting it for our iOS images will not change the application behaviour in any way.


**API Reference for** [Image Module](http://docs.nativescript.org/api-reference/modules/_ui_image_.html)

**NativeScript Core Examples**  [Cookbook](http://docs.nativescript.org/cookbook/ui/image)

**NativeScript Angular Examples**  [Code Samples](http://docs.nativescript.org/angular/code-samples/ui/image.html)


