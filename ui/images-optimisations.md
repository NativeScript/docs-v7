---
title: Image Optimization Android
description: Performance techniques when using images in NativeScript
position: 65
slug: images-performance
---

# Android Image Optimization

One of the most common scenarios for modern mobile applications is to work with multiple images often in high definition formats.
It is crucial for each mobile developer to handle memory related issues and optimize the application so it could handle large data (e.g. API call which will load hundreds of photos). 

In this article, we will take a look at how Image module works in NativeScript and 
cover the techniques that will improve Android application performance.

## Handling large images and avoiding Out Of Memory exception

In some cases when working with multiple large images on devices with low memory, an `Out Of Memory` exception can occur. To prevent that scenario, in NativeScript 2.5.x and above using the `src` property in Android will internally load the Bitmap in Java. Bitmap memory stays in Java world and reclaims once the Bitmap is no longer in use (e.g. there is no need for the Javascript object to be collected).This way Bitmap memory management is not an issue.

In contrast, when using `ImageSource` or Base64 encoded string, the Bitmap is transferred to Javascript, so it will be released when Javascript object reclaims. Javascript garbage collection happens less frequently than Java garbage collection which might lead to Out Of Memory.

> **Tip**: Use `src` property of your `Image` to set your images to avoid Out Of Memory related issues.

As an additional feature for Android, NativeScript supports `decodeWidth` and `decodeHeight`. These properties will downsample your image so that it will take less memory. With [loadMode](http://docs.nativescript.org/api-reference/modules/_ui_image_.html#loadmode) set to `async`, the image will load asynchronously meaning the UI won't block by the decoding and preloading operations. The developers can use `loadMode` on both iOS and Android.

> **Tip**: When working with large images, use `decodeWidth` and `decodeHeight` to downsample the image. Use `loadMode="async"` to prevent blocking of the UI while the image is loading.

```XML
<StackLayout>
    <Image src="{{ someExtremelyLargeImage }}" decodeWidth="400" decodeHeight="400" loadMode="async" />
    <Label text="With loadMode set to async the UI won't be blocked" textWrap="true" />
</StackLayout>
```

> **Important**: When the `src` value starts with `http` it will be loaded asynchronously no matter what value is set to `loadMode`.

The `Image` module will use internal memory and disk cache, so when loaded the module stores the images in the memory cache, and when they are not needed anymore, the `Image` module saves the images in the disk cache. This way the next time the application needs the same image NativeScript will load it from memory or the disk cache. Setting property `useCache` to `false` could be used to bypass image cache and load the image as it is on the first request to the specified URL.

> **Important**: The properties `decodeWidth`, `decodeHeight` and `useCache` will work only for Android. Setting them for our iOS images will not change the application behavour in any way.