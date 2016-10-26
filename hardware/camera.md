---
title: Camera
description: "NativeScript Documentation: Camera"
position: 20
slug: camera
previous_url: /camera
---

# Camera

## Overview

Almost every mobile application needs the option to capture, save and share images. The NativeScript camera plugin was designed for the first two parts of the job (taking a picture and optionally saving to device storage).

### Installation

Navigate to project folder and run NativeScript-CLI command 
``` 
tns plugin add nativescript-camera.
``` 

Plugin could be added as a standard npm dependency running command 
``` 
npm install nativescript-camera --save 
``` 

> Note: the `--save` flag will add the plugin as dependency in your package.json file

### Requesting premissions

Newer API levels of Android and iOS versions are requiring explicit permissions in order the application
to have access to the camera and to be able to save photos to the device. Once the user has granted permissions the camera module can be used.

```
camera.requestPermissions();
```

> Note: Older versions won't be affected by the usage of the requestPermissions method.

### Using the camera module to take a picture

Using the camera module is relatively simple. 
However, there are some points that need a little bit more explanation.

In order to use the camera module, just require it, as shown in Example 1:

> Example 1: Require camera module in the application
``` JavaScript
var camera = require("nativescript-camera");
```
``` TypeScript
import * as camera from "nativescript-camera";
```

Then you are ready to use it:
> Example 2: How to take a picture and to recieve image asset
``` JavaScript
var imageModule = require("ui/image");
camera.takePicture()   
    .then(function (imageAsset) {
        console.log("Result is an image asset instance");
        var image = new imageModule.Image();
        image.src = imageAsset;
    }).catch(function (err) {
        console.log("Error -> " + err.message);
    });
```
``` TypeScript
import { Image } from "ui/image";
camera.takePicture({).
    then((imageAsset) => {
        console.log("Result is an image asset instance");
        var image = new Image();
        image.src = imageAsset;
    }).catch((err) => {
        console.log("Error -> " + err.message);
    });
```

The code in __Example 2__ will start the native platform camera application. After taking the picture and tapping the button `Save` (Android) or `use image` (iOS), the promise will resolve the `then` part and image asset will be set as `src` of the `ui/image` control.

### Using the options to take memory efficient picture

__Example 2__ shows how to take a picture using the NativeScript camera module. However, it takes a huge image (even mid-level devices has a 5MP camera, which results in a image 2580x2048, which in bitmap means approximately 15 MB). In many cases you don't need such a huge picture to show an image with 100x100 size, so taking a big picture is just a waste of memory. The camera takePicture() method accepts an optional parameter that could help in that case. With that optional parameter, you could set some properties like:

* __width__: The desired width of the picture (in device independent pixels).
* __height__: The desired height of the picture (in device independent pixels).
* __keepAspectRatio__: A boolean parameter that indicates if the aspect ratio should be kept.
* __saveToGallery__: A boolean parameter that indicates if the taken photo will be saved in "Photos" for Android and in "Camera Roll" in iOS

What does `device independent pixels` mean? The NativeScript layout mechanism uses device-independent pixels when measuring UI controls. This allows you to declare one layout and this layout will look similar to all devices (no matter the device's display resolution). In order to get a proper image quality for high resolution devices (like iPhone retina and Android Full HD), camera will return an image with bigger dimensions. For example, if we request an image that is 100x100, on iPhone 6 the actual image will be 200x200 (since its display density factor is 2 -> 100*2x100*2).
Setting the `keepAspectRatio` property could result in a different than requested width or height. The camera will return an image with the correct aspect ratio but generally only one (from width and height) will be the same as requested; the other value will be calculated in order to preserve the aspect of the original image.

__Example 3__ shows how to use the options parameter:
> Example 3: How to setup `width`, `height`, `keepAspectRatio` and `saveToGallery` properties for the camera module

``` JavaScript
var imageModule = require("ui/image");

var options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
camera.takePicture(options)   
    .then(function (imageAsset) {
        console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
        console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
        console.log("Photo saved in Photos/Gallery for Android or in Camera Roll for iOS");
    }).catch(function (err) {
        console.log("Error -> " + err.message);
    });
```
``` TypeScript
import { Image } from "ui/image";

var options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
camera.takePicture(options).
    then((imageAsset) => {
        console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
        console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
        console.log("Photo saved in Photos/Gallery for Android or in Camera Roll for iOS");
    }).catch((err) => {
        console.log("Error -> " + err.message);
    });
```

### Check if the device has available camera

The first thing that the developers should check if the device has an available camera.
The method isAvaiable will return true if the camera hardware is ready to use or false if otherwise.

```
var isAvailable = camera.isAvailable(); 
```

> Note: This method will return false when used in iOS simulator (as the simulator does not have camera hardware)