---
nav-title: "Image How-To"
title: "How-To"
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
  <StackLayout>
     <!--Bind the image source property to view-model property -->
     {%raw%}<Image src="{{ thumbnailImageUrl }}" />{%endraw%}
     <!--Load form image from application -->
     <Image src="~/logo.png" stretch="none" / > 
     <!--Load form image resource -->
     <Image src="res://logo.png" stretch="none" / > 
     <!--Load form image URL-->
     <Image src="http://www.google.com/images/errors/logo_sm_2.png" stretch="none" /> 
  </StackLayout>
</Page>
```
### How to create an image and set its source.
``` JavaScript
var image = new ImageModule.Image();
image.imageSource = ImageSourceModule.fromResource("logo");
```
### How to create an image and set its src.
``` JavaScript
var image = new ImageModule.Image();
image.src = "https://www.google.bg/images/srpr/logo11w.png";
```
### How to create an image and set its src to file within the application.
``` JavaScript
var image = new ImageModule.Image();
image.src = "~/logo.png";
```
### How to set image stretching.
``` JavaScript
var image = new ImageModule.Image();
image.imageSource = ImageSourceModule.fromFile(imagePath);
// There are 4 modes of stretching none, fill, aspectFill, aspectFit
// The default value is aspectFit.
// Image stretch can be set by using ImageModule.stretch enum.
image.stretch = enumsModule.Stretch.aspectFit;
```
