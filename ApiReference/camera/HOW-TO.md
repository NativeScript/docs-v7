---
nav-title: "camera How-To"
title: "camera How-To"
description: "Examples for using camera"
---
# Camera module
``` JavaScript
var camera = require("camera");
```
### Takes picture.
``` JavaScript
camera.takePicture().then(function (result) {
    result is ImageSource
});
```
