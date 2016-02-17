---
nav-title: "image-source How-To"
title: "How-To"
description: "Examples for using image-source"
---
# Image source
Using the image source requires the image-source module.
``` JavaScript
var imageSource = require("image-source");
```
The pre-required `imageSource` module is used throughout the following code snippets.
We also use fs module defined as follows:
``` JavaScript
var fs = require("file-system");
```
## Loading and saving images
### Load image using resource name
This is similar to loading Bitmap from `R.drawable.logo` on Android or calling `[UIImage imageNamed@"logo"]` on iOS
``` JavaScript
var img = imageSource.fromResource("logo");
```
### Load image from URL
``` JavaScript
imageSource.fromUrl("https://www.google.com/images/errors/logo_sm_2.png")
    .then(function (res) {
    console.log("Image successfully loaded");
}, function (error) {
    console.log("Error loading image: " + error);
});
```
### Save image source to PNG or JPG file
``` JavaScript
var img = imageSource.fromFile(imagePath);
var folder = fs.knownFolders.documents();
var path = fs.path.join(folder.path, "Test.png");
var saved = img.saveToFile(path, enums.ImageFormat.png);
```
### Load image from a local file
``` JavaScript
var folder = fs.knownFolders.documents();
var path = fs.path.join(folder.path, "Test.png");
var img = imageSource.fromFile(path);
```
