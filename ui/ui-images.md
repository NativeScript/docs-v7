---
nav-title: Working with Images in NativeScript
title: "Images"
description: How to work with images in NativeScritp application.
position: 6
---

# Working with Images
In this article we will look in the different ways to show images in a NativeScript application. 
Images are added to application either declaratively(XML) or with code(JS):

```XML
<Image src="~/logo.png" / > 
```
```JavaScript
var image = new imageModule.Image();
image.src = "~/logo.png";
dockLayout.addChild(image);
```

The prefix of the `src` value specify where the image will be loaded form. The possible options are:

* [From URL (`http://` or `https://` prefix)](#load-images-from-url)
* [From local file system (`~/` prefix)](#load-images-from-local-file-system)
* [From resource (`res://` prefix)](#load-images-from-resource)

You can also use the [image-source](./ApiReference/image-source/HOW-TO.html) module to create an image source and manually set it to the image:
```JavaScript
var image = new imageModule.Image();
var imageSource = imageSourceModule.fromResource("logo");
image.imageSource = imageSource;
```

You can also use the [image-source API](./ApiReference/image-source/ImageSource.html) to save and load images form base64 encoded string.

## Load Images from URL
Web images have `http://` or `https://` prefix. When such image is loaded, an asynchronous http request will be sent and the image will be shown if the request is successful.
```XML
<Image src="https://www.google.com/images/errors/logo_sm_2.png" / > 
```

You can manually create an [ImageSource instance from URL](./ApiReference/image-source/HOW-TO.html#load-image-from-url)

## Load Images from Local File System
Using the `~/` prefix you can load images relative to the `App` folder inside your project.

```XML
<Image src="~/images/logo.png" stretch ="none" / > 
```

You can manually create an [ImageSource instance from local file](./ApiReference/image-source/HOW-TO.html#load-image-from-a-local-file)

> Currently loading images form the file system does not respect file-name qualifiers as described [here](./navigation.html#supporting-multiple-screens). We have plans to implement that along with [density-specific qualifiers support.](https://github.com/NativeScript/NativeScript/issues/276).

## Load Images from Resource
Using the `res://` prefix you can load resource image. This is the suggested approach, as it uses the native methods for loading the best image for the current device screen density.

```XML
<Image src="res://logo" stretch ="none" / > 
```

You can manually create an [ImageSource instance from resource](./ApiReference/image-source/HOW-TO.html#load-image-using-resource-name)

> The file extension is not included when referencing resource images.

The actual resource images should be added to the `App_Resources` folder in you application and should follow the platform guidelines.

### Adding Android Resources
Android resources should be added to the corresponding `drawable-XXX` folders inside the `App_Resources\Android` folder in your app: 

![android resources](img/resources/android-resources.png "android resources")

The content of this directory will be copied inside the `platforms\android\res` when the app is prepared by the NativeScript CLI. More information about how drawable resources in android can be found [here](http://developer.android.com/guide/practices/screens_support.html#DesigningResources).

### Adding iOS Resources
IOS resources should be added inside the `App_Resources\ios` folder in your app. You can use `@1x`, `@2x` and `@3x` suffixes to target devices with a specific screen scale. Here is a list of devices that for each scale factor:

* **@1x** - iPad 2 and iPad mini (1st Generation)
* **@2x** - iPhone 4s, iPhone 5, iPhone 6, iPad (retina)
* **@3x** - iPhone 6 Plus 
 
For more information see [Icon and Image Sizes](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/IconMatrix.html#//apple_ref/doc/uid/TP40006556-CH27-SW1) in the iOS Developer Library.

Once the NativeScript project is prepared(`tns ios prepare`) all the images will be copied to the `platforms\ios\<project-name>\Resources\Icons`.
Currently, there is a [known issue in the nativescritp-cli](https://github.com/NativeScript/nativescript-cli/issues/520) and you will have to manually add the images to the native xCode project in order to be able to show them in you application. To do that locate the images in the `platforms\ios\<project-name>\Resources\Icons` and drag them in the xCode project located in the `platforms\ios\` folder:

![ios resources](img/resources/ios-resources.png "ios resources")
