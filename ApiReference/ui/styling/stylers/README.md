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
[Styler](../../../ui/styling/stylers/Styler.md) | Represents a sceleton for an object that holds all style related callbacks and registers handlers.
Used for better code readability.

##### Functions
 - **registerHandler(** property [_Property_](../../../ui/core/dependency-observable/Property.md), handler [_StylePropertyChangedHandler_](../../../ui/styling/stylers/StylePropertyChangedHandler.md), className? _String_ **)**  
     A function that actually registers a property with a StylePropertyChangedHandler.
   - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md)  
     - Usually a style dependency property which should be registered for style changes.
   - **handler** - [_StylePropertyChangedHandler_](../../../ui/styling/stylers/StylePropertyChangedHandler.md)  
     - The handler that reacts on property changes.
   - **className** - _(optional)_ - _String_