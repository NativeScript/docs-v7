---
nav-title: "Class ui/button.Button"
title: "Class ui/button.Button"
description: "Class ui/button.Button"
---
## Class: "ui/button".Button  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a standard Button widget.

##### Static Properties
 - **textProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the text property of each Button instance.
 - **tapEvent** - _String_.    
  String value used when hooking to tap event.

##### Instance Properties
 - **android** - _Object_.    
  Gets the native [android widget](http://developer.android.com/reference/android/widget/Button.html) that represents the user interface for this component. Valid only when running on Android OS.
 - **ios** - _UIButton_.    
  Gets the native [UIButton](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIButton_Class/) that represents the user interface for this component. Valid only when running on iOS.
 - **text** - _String_.    
  Gets or sets the text (label) displayed by this instance.
 - **formattedText** - [_FormattedString_](../../text/formatted-string/FormattedString.md).    
  Gets or sets the formatted text (label) displayed by this instance.

##### Instance Functions
 - **on(** eventNames _String_, callback _Function_..., thisArg? _Object_ **)**  
     A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
   - **eventNames** - _String_  
     - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))  
     - Callback function which will be executed when event is raised.
   - **thisArg** - _(optional)_ - _Object_  
     - An optional parameter which will be used as `this` context for callback execution.
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when a tap event occurs.
   - **event**
   - **callback** - _Function_(args [_EventData_](../../data/observable/EventData.md))
   - **thisArg** - _(optional)_ - _Object_