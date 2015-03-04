---
nav-title: "Class ui/slider.Slider"
title: "Class ui/slider.Slider"
description: "Class ui/slider.Slider"
---
## Class: "ui/slider".Slider  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a slider component.

##### Static Properties
 - **valueProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the value property of each Slider instance.
 - **minValueProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the minValue property of each Slider instance.
 - **maxValueProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the maxValue property of each Slider instance.

##### Instance Properties
 - **android** - _Object_.    
  Gets the native [android widget](http://developer.android.com/reference/android/widget/SeekBar.html) that represents the user interface for this component. Valid only when running on Android OS.
 - **ios** - _UISlider_.    
  Gets the native iOS [UISlider](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISlider_Class/) that represents the user interface for this component. Valid only when running on iOS.
 - **value** - _Number_.    
  Gets or sets a slider current value. The default value is 0.
 - **minValue** - _Number_.    
  Gets or sets a slider min value. The default value is 0.
 - **maxValue** - _Number_.    
  Gets or sets a slider max value. The default value is 100.