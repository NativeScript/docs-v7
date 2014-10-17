---
nav-title: "Class ui/styling.stylers"
title: "Class ui/styling.stylers"
description: "Class ui/styling.stylers"
---
## Namespace: "ui/styling".stylers
Encapsulates styler classes used for converting NativeScript properties to properties of the native views/widgets.

Class | Description
------|------------
[StylePropertyChangedHandler](../../../ui/styling/stylers/StylePropertyChangedHandler.md) | Represents an object that defines how style property should be applied on a native view/widget.
It holds 3 callbacks:
  1. applyCallback - called when a property value should be applied onto the native view/widget.
  2. resetCallback - called when the property value is cleared to restore the native view/widget in its original state. The callback
also receives as a parameter the value stored by the getNativeValue callback.
  3. getNativeValue - called when a style property is set for the first time to get the default native value for this property
in the native view/widget. This value will be passed to resetCallback in case the property value is cleared. Optional.
[Styler](../../../ui/styling/stylers/Styler.md) | Represents an objects that holds all StylePropertyChangedHandlers for a given view type.

##### Functions
 - **registerStyler(** viewType _String_, styler [_Styler_](../../../ui/styling/stylers/Styler.md) **)**  
     Registers a styler that will be used for all views of particular type.
   - **viewType** - _String_
   - **styler** - [_Styler_](../../../ui/styling/stylers/Styler.md)
 - **getStyler(** view [_View_](../../../ui/core/view/View.md) **)** [_Styler_](../../../ui/styling/stylers/Styler.md)  
     Gets a styler to be used for a particular view.
   - **view** - [_View_](../../../ui/core/view/View.md)  
     The view.
   - _**return**_ - [_Styler_](../../../ui/styling/stylers/Styler.md)