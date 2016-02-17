---
nav-title: "Class ui/progress.Progress"
title: "Class ui/progress.Progress"
description: "Class ui/progress.Progress"
---
## Class: "ui/progress".Progress  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a progress component.

##### Static Properties
 - **valueProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the value property of each Progress instance.
 - **maxValueProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the maxValue property of each Progress instance.

##### Instance Properties
 - **android** - _Object_.    
  Gets the native [android widget](http://developer.android.com/reference/android/widget/ProgressBar.html) that represents the user interface for this component. Valid only when running on Android OS.
 - **ios** - _Object_.    
  Gets the native iOS [UIProgressView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIProgressView_Class/) that represents the user interface for this component. Valid only when running on iOS.
 - **value** - _Number_.    
  Gets or sets a progress current value.
 - **maxValue** - _Number_.    
  Gets or sets a progress max value.