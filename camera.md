---
nav-title: "NativeScript Camera"
title: "App: Camera"
description: "NativeScript Documentation: Camera"
position: 10
---

#Camera

## Overview

Almost every mobile application need an option to capture an image and then share it. NativeScript camera module is dedicated for the first part of the job (taking picture).

### Using the camera module to take a picture

Using camera module is relative simple, however there are some points that need a little bit more explanation.

In order to use the camera module just require it like that:

``` JavaScript
var cameraModule = require("camera");
```
``` TypeScript
import cameraModule = require("camera");
```

Then we are ready to use it:

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

The above code will start the native platform camera application. After taking the picture and tapping the button `Save` (Android) or `use image` (iOS) the promise will resolve the `then` part and image source will be set as `imageSource` of the `ui/image` control.

> Note: Android specific - Android native camera application actually uses a file to store the image and then anybody (with granted access) could read the file and load the picture. By default NativeScript camera application uses a external files directory given by `Context.getExternalFilesDir(null)` to store a picture with name similar to `cameraPicture_ddmmyyyyHHMMSS.jpg`. The actual path to these files is `/sdcard/Android/data/applicationName/files/cameraPicture_ddmmyyyyHHMMSS.jpg`. Keep in mind that this file will not be deleted by camera module automatically, so developer must clear it out (if it is a critical manner). By default this directory will be deleted when the application is uninstalled.

### Taking a memory efficient picture

Previous example shows how to take a picture using the NativeScript camera module. However it takes a huge image (even mid-level devices has a 5MP camera which results in a image 2580x2048 which in bitmap means approximately 15 MB). In many cases we don't need such huge picture to show an image with 100x100 size, so taking a big picture is just a waste of memory. Camera module takePicture() method accepts an option parameter that could help in that case. With that option parameter we could set some properties like:

* width - The desired width of the picture (in device independent pixels).
* height - The desired height of the picture (in device independent pixels).
* keepAspectRatio - A boolean parameter that indicates if aspect ratio should be kept.

What `device independent pixels` means? NativeScript layout mechanism uses device independent pixels when measuring UI controls. This allows to declare one layout and this layout will look similar to all devices (no matter device display resolution). In order to get a proper image quality for high resolution devices (like iPhone retina and Android Full HD), camera module will return an image with bigger dimensions. For example if we request an image 100x100 on iPhone 6 actual image will be 200x200 (since its display density factor is 2 -> 100*2x100*2).
Setting `keepAspectRatio` property could result in a different than requested width or height. Camera module will return an image with correct aspect ratio but generally only one (from width and height) will be same as requested, the other value will be calculated in order to preserve the aspect of the original image.

Using the options parameter:

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
