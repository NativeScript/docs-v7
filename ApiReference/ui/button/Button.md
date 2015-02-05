---
nav-title: "Class ui/button.Button"
title: "Class ui/button.Button"
description: "Class ui/button.Button"
---
## Class: "ui/button".Button  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a standard Button widget.

##### Instance Properties
 - **android** - _Object_.    
  Gets the native android widget that represents the user interface for this component. Valid only when running on Android OS.
 - **ios** - _UIButton_.    
  Gets the native UIButton that represents the user interface for this component. Valid only when running on iOS.
 - **text** - _String_.    
  Gets or sets the text (label) displayed by this instance.
 - **formattedText** - [_FormattedString_](../../text/formatted-string/FormattedString.md).    
  Gets or sets the formatted text (label) displayed by this instance.

##### Instance Functions
 - **on(** event _String_, callback _Function_... **)**
   - **event** - _String_
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))
 - **on(** event , callback _Function_... **)**
   - **event**
   - **callback** - _Function_(args [_EventData_](../../data/observable/EventData.md))