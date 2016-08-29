---
title: Camera
description: "NativeScript Documentation: Camera"
position: 20
slug: camera
previous_url: /camera
---

#Camera

## Overview

Almost every mobile application needs an option to capture an image and then share it. The NativeScript camera module was designed for the first part of the job (taking a picture).

### Using the camera module to take a picture

Using the camera module is relatively simple. However, there are some points that need a little bit more explanation.

In order to use the camera module, just require it, as shown in Example 1:

> Example 1: Require camera module in the application
``` JavaScript
var cameraModule = require("camera");
```
``` TypeScript
import cameraModule = require("camera");
```

Then you are ready to use it:
> Example 2: How to take a picture and to recieve image source
``` JavaScript
var imageModule = require("ui/image");
cameraModule.takePicture().then(function(picture) {
	console.log("Result is an image source instance");
	var image = new imageModule.Image();
	image.imageSource = picture;
});
```
``` TypeScript
import imageModule = require("ui/image");
cameraModule.takePicture().then(picture => {
	console.log("Result is an image source instance");
	var image = new imageModule.Image();
	image.imageSource = picture;
});
```

The code in __Example 2__ will start the native platform camera application. After taking the picture and tapping the button `Save` (Android) or `use image` (iOS), the promise will resolve the `then` part and image source will be set as `imageSource` of the `ui/image` control.

> Note: Android specific &mdash; The Android native camera application actually uses a file to store the image and then anything (with granted access) could read the file and load the picture. By default, the NativeScript camera application uses an external files directory given by `Context.getExternalFilesDir(null)` to store a picture with name similar to `cameraPicture_ddmmyyyyHHMMSS.jpg`. The actual path to these files is `/sdcard/Android/data/applicationName/files/cameraPicture_ddmmyyyyHHMMSS.jpg`. Keep in mind that this file will not be deleted by the camera module automatically, so the developer must clear it out (if it is a critical manner). By default, this directory will be deleted when the application is uninstalled.

### Taking a memory efficient picture

__Example 2__ shows how to take a picture using the NativeScript camera module. However, it takes a huge image (even mid-level devices has a 5MP camera, which results in a image 2580x2048, which in bitmap means approximately 15 MB). In many cases you don't need such a huge picture to show an image with 100x100 size, so taking a big picture is just a waste of memory. The cameraModule takePicture() method accepts an optional parameter that could help in that case. With that optional parameter, you could set some properties like:

* width: The desired width of the picture (in device independent pixels).
* height: The desired height of the picture (in device independent pixels).
* keepAspectRatio: A boolean parameter that indicates if the aspect ratio should be kept.

What does `device independent pixels` mean? The NativeScript layout mechanism uses device independent pixels when measuring UI controls. This allows you to declare one layout and this layout will look similar to all devices (no matter the device's display resolution). In order to get a proper image quality for high resolution devices (like iPhone retina and Android Full HD), cameraModule will return an image with bigger dimensions. For example, if we request an image that is 100x100, on iPhone 6 the actual image will be 200x200 (since its display density factor is 2 -> 100*2x100*2).
Setting the `keepAspectRatio` property could result in a different than requested width or height. The cameraModule will return an image with the correct aspect ratio but generally only one (from width and height) will be the same as requested; the other value will be calculated in order to preserve the aspect of the original image.

__Example 3__ shows how to use the options parameter:
> Example 3: How to setup `width`, `height` and `keepAspectRatio` properties for the camera module

``` JavaScript
var imageModule = require("ui/image");
cameraModule.takePicture({width: 300, height: 300, keepAspectRatio: true}).then(function(picture) {
	console.log("Result is an image source instance");
	var image = new imageModule.Image();
	image.imageSource = picture;
});
```
``` TypeScript
import imageModule = require("ui/image");
cameraModule.takePicture({width: 300, height: 300, keepAspectRatio: true}).then(picture => {
	console.log("Result is an image source instance");
	var image = new imageModule.Image();
	image.imageSource = picture;
});
```
