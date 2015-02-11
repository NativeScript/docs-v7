---
nav-title: "Image How-To"
title: "Image How-To"
description: "Examples for using Image"
---
# Image
Using an image requires the Image module to be loaded.
``` JavaScript
var ImageModule = require("ui/image");
```
Binding the image source property to a view-model property.
```XML
<Page>
  <Image source="{{ thumbnailImageSource }}" />
</Page>
```
### How to create an image and set its source.
``` JavaScript
var image = new ImageModule.Image();
image.source = ImageSourceModule.fromResource("logo");
```
### How to create an image and set its url.
``` JavaScript
var image = new ImageModule.Image();
image.url = "https://www.google.bg/images/srpr/logo11w.png";
```
### How to set image stretching.
``` JavaScript
var image = new ImageModule.Image();
image.source = ImageSourceModule.fromFile(imagePath);
// There are 4 modes of stretching none, fill, aspectFill, aspectFit
// The default value is aspectFit.
// Image stretch can be set by using ImageModule.stretch enum.
image.stretch = enumsModule.Stretch.aspectFit;
```
