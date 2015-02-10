---
nav-title: "camera How-To"
title: "camera How-To"
description: "Examples for using camera"
---
# Camera module
Using a camera requires the camera module.
``` JavaScript
var camera = require("camera");
```
### Taking a picture.
``` JavaScript
camera.takePicture().then(function (result) {
    // result is ImageSource
});
```
