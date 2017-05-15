---
title: Images in NativeScript - Performance techniques
description: Performance techniques when using images in NativeScript
position: 65
slug: images-performance
---

# Images and performance in mobile applicaitons

One of the most common scenarios for modern mobile applications is to work with multiple images often in high definition formats.
It is crucial for each mobile developer to handle memory related issues and optimise the applicaiton so it could handle large data (e.g. API call which will load hundreds of photos). 
In this article, we will take a look at how Image module works in NativeScript and 
cover the techniques that will improve our applicaiton performance.

# Images optimization techniques for Android

## Handling large images and avoiding OOM (Out of Memory) exception

Sometimes when working with multiple large images on devices with low memory we can get OOM exception. To prevent that scenario, in NativeScript 2.5.x and above using the `src` property in Android will internally load the bitmap in Java. This way Bitmap memory management is not an issue.

In contrast, if we use `ImageSource` instance and set it to `imageSource` property of `Image` 
or if we pass Base64 encoded string, we will load the bitmap in JavaScript which may cause OOM exception due to the synchronization of the garbage collectors (JavaScript and Java). 

> **Recommendation tip**: Use `src` property of your `Image` to set your images to avoid OOM related issues.

As an additional feature for Android, NativeScript supports `decodeWidth`, `decodeHeight` and `loadMode` properties. The first two will downsample your image so it will take less memory. With [loadMode](http://docs.nativescript.org/api-reference/modules/_ui_image_.html#loadmode) set to `async` the image will load asynchronously meaning UI won't be blocked by the decoding and preloading operations.

> **Recommendation tip**: When working with large images use `decodeWidth` and `decodeHeight` to downsample your image. Use `loadMode="async"` to prevent blocking of your UI while the image is loading.

```XML
<StackLayout>
    <Image src="{{ someExtremelyLargeImage }}" decodeWidth="400" decodeHeight="400" loadMode="async" />
    <Label text="With loadMode set to async the UI won't be blocked" textWrap="true" />
</StackLayout>
```

> **Important**: When the `src` value starts with `http` it will be loaded asynchronously no matter what value we have set to `loadMode`.

`Image` will use internal memory and disk cache, so images that are loaded are stored in the memory cache and if they are not needed anymore, they are saved in the disk cache. This way the next time we need the same image NativeScript will load it from memory or the disk cache.
Setting property `useCache` to `false` could be used to bypass image cache and load the image as it is on the first request to the specified URL.

> **Important**: The properties `decodeWidth`, `decodeHeight` and `useCache` will work only for Android. Setting them for our iOS images will not change the behavour in any way.