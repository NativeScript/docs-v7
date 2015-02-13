---
nav-title: "Class ui/styling.properties"
title: "Class ui/styling.properties"
description: "Class ui/styling.properties"
---
## Namespace: "ui/styling".properties
Encapsulates the style properties definitions and utility methods.

##### Variables
 - **fontSizeProperty** - [_Property_](../../../ui/styling/Property.md).    
  The font-size property definition.
 - **colorProperty** - [_Property_](../../../ui/styling/Property.md).    
  The color property definition.
 - **backgroundColorProperty** - [_Property_](../../../ui/styling/Property.md).    
  The background-color property definition.
 - **textAlignmentProperty** - [_Property_](../../../ui/styling/Property.md).    
  The text-alignment property definition.

##### Functions
 - **getPropertyByName(** name _String_ **)** [_Property_](../../../ui/styling/Property.md)  
     Gets style Property by its name.
   - **name** - _String_
   - _**return**_ - [_Property_](../../../ui/styling/Property.md)
 - **getPropertyByCssName(** name _String_ **)** [_Property_](../../../ui/styling/Property.md)  
     Gets style Property by its CSS name.
   - **name** - _String_
   - _**return**_ - [_Property_](../../../ui/styling/Property.md)
 - **eachProperty(** callback _Function_... **)**  
     Executes a callback for all defined style properties.
   - **callback** - _Function_(property [_Property_](../../../ui/styling/Property.md))
 - **eachInheritableProperty(** callback _Function_... **)**  
     Executes a callback for all defined inheritable style properties.
   - **callback** - _Function_(property [_Property_](../../../ui/styling/Property.md))