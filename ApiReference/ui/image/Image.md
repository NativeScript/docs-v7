---
nav-title: "Class ui/image.Image"
title: "Class ui/image.Image"
description: "Class ui/image.Image"
---
## Class: "ui/image".Image  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a class that provides functionality for loading and streching image(s).

##### Static Properties
 - **srcProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).
 - **imageSourceProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).
 - **isLoadingProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).
 - **stretchProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).

##### Instance Properties
 - **android** - _Object_.    
  Gets the native [android widget](http://developer.android.com/reference/android/widget/ImageView.html) that represents the user interface for this component. Valid only when running on Android OS.
 - **ios** - _Object_.    
  Gets the native iOS [UIImageView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImageView_Class/) that represents the user interface for this component. Valid only when running on iOS.
 - **imageSource** - [_ImageSource_](../../image-source/ImageSource.md).    
  Gets or sets the image source of the image.
 - **src** - _Object_.    
  Gets or sets the source of the Image. This can be either an URL string or a native image instance.
 - **isLoading** - _Boolean_.    
  Gets a value indicating if the image is currently loading
 - **stretch** - _String_.    
  Gets or sets the image stretch mode.