---
nav-title: "Class ui/stylingstylers.Styler"
title: "Class ui/stylingstylers.Styler"
description: "Class ui/stylingstylers.Styler"
---
## Class: "ui/styling"stylers.Styler  
Represents an objects that holds all StylePropertyChangedHandlers for a given view type.

##### Instance Functions
 - **hasHandler(** property [_Property_](../../../ui/core/dependency-observable/Property.md) **)** _Boolean_  
     Returns true if the Styler contains StylePropertyChangedHandler for the given style property.
   - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md)  
     The style property.
   - _**return**_ - _Boolean_
 - **getHandler(** property [_Property_](../../../ui/core/dependency-observable/Property.md) **)** [_StylePropertyChangedHandler_](../../../ui/styling/stylers/StylePropertyChangedHandler.md)  
     Gets the StylePropertyChangedHandler for the given style property.
   - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md)  
     The style property.
   - _**return**_ - [_StylePropertyChangedHandler_](../../../ui/styling/stylers/StylePropertyChangedHandler.md)
 - **setHandler(** property [_Property_](../../../ui/core/dependency-observable/Property.md), handler [_StylePropertyChangedHandler_](../../../ui/styling/stylers/StylePropertyChangedHandler.md) **)**  
     Sets the StylePropertyChangedHandler for the given style property.
   - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md)  
     The style property.
   - **handler** - [_StylePropertyChangedHandler_](../../../ui/styling/stylers/StylePropertyChangedHandler.md)  
     The handler.