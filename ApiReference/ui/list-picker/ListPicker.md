---
nav-title: "Class ui/list-picker.ListPicker"
title: "Class ui/list-picker.ListPicker"
description: "Class ui/list-picker.ListPicker"
---
## Class: "ui/list-picker".ListPicker  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents an list picker.

##### Static Properties
 - **selectedIndexProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).
 - **itemsProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).

##### Instance Properties
 - **android** - _Object_.    
  Gets the native [android.widget.NumberPicker](http://developer.android.com/reference/android/widget/NumberPicker.html) that represents the user interface for this component. Valid only when running on Android OS.
 - **ios** - _Object_.    
  Gets the native iOS [UIPickerView](http://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIDatePicker_Class/index.html) that represents the user interface for this component. Valid only when running on iOS.
 - **selectedIndex** - _Number_.    
  Gets or sets the selected index.
 - **items** - _Object_.    
  Gets or set the items collection of the ListPicker. 
The items property can be set to an array or an object defining length and getItem(index) method.