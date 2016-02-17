---
nav-title: "Module camera"
title: "Module camera"
description: "Module camera"
---
# Module: "camera"

``` JavaScript
// To import the "camera" module:
var camera = require("camera");
```

Object | Description
------|------------
[CameraOptions](../camera/CameraOptions.md) | 

##### Functions
 - **takePicture(** options? [_CameraOptions_](../camera/CameraOptions.md) **)** _Promise_...  
     Take a photo using the camera.
   - **options** - _(optional)_ - [_CameraOptions_](../camera/CameraOptions.md)  
     - Optional parameter for setting different camera options.
   - _**return**_ - _Promise_ of [_ImageSource_](../image-source/ImageSource.md)