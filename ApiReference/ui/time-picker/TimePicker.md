---
nav-title: "Class ui/time-picker.TimePicker"
title: "Class ui/time-picker.TimePicker"
description: "Class ui/time-picker.TimePicker"
---
## Class: "ui/time-picker".TimePicker  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents an time picker.

##### Static Properties
 - **hourProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).
 - **minuteProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).

##### Instance Properties
 - **android** - _Object_.    
  Gets the native [android.widget.TimePicker](http://developer.android.com/reference/android/widget/TimePicker.html) that represents the user interface for this component. Valid only when running on Android OS.
 - **ios** - _UIDatePicker_.    
  Gets the native iOS [UIDatePicker](http://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIDatePicker_Class/index.html) that represents the user interface for this component. Valid only when running on iOS.
 - **hour** - _Number_.    
  Gets or sets the time hour.
 - **minute** - _Number_.    
  Gets or sets the time minute.