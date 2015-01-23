---
nav-title: "Class camera"
title: "Class camera"
description: "Class camera"
---
# Module: "camera"

``` JavaScript
// To import the "camera" module:
var camera = require("camera");
```

Object | Description
------|------------
[Options](../camera/Options.md) | Camera options for capture an image. Currently not guaranteed to be used on Android

Namespace | Description
------|------------
[CameraPosition](../camera/CameraPosition/) | Specifies a camera position on a device.
[FlashMode](../camera/FlashMode/) | Specifies a camera flash mode.

##### Functions
 - **takePicture(** options? [_Options_](../camera/Options.md) **)** _Promise_...  
     Take a photo using the camera.
   - **options** - _(optional)_ - [_Options_](../camera/Options.md)
   - _**return**_ - _Promise_ of [_ImageSource_](../image-source/ImageSource.md)