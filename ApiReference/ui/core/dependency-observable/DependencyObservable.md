---
nav-title: "Class ui/core/dependency-observable.DependencyObservable"
title: "Class ui/core/dependency-observable.DependencyObservable"
description: "Class ui/core/dependency-observable.DependencyObservable"
---
## Class: "ui/core/dependency-observable".DependencyObservable  
_Inherits:_ [_Observable_](../../../data/observable/Observable.md)  
Represents an extended Observable Object that uses Property instances for value backing mechanism.
This routine allows for various value modifiers per Property, which is used for inheritance, data-binding and styling purposes.

##### Instance Functions
 - **_getValue(** property [_Property_](../../../ui/core/dependency-observable/Property.md) **)** _Object_  
     Gets a value for the property.
   - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md)  
     - A dependency property to retrieve a value for.
   - _**return**_ - _Object_
 - **_getValueSource(** property [_Property_](../../../ui/core/dependency-observable/Property.md) **)** _Number_  
     Gets the value source (local, inherited) of a property.
   - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md)  
     - A dependency property to retrieve a value source for.
   - _**return**_ - _Number_
 - **_setValue(** property [_Property_](../../../ui/core/dependency-observable/Property.md), value _Object_, source? _Number_ **)**  
     Sets a value for a property.
   - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md)  
     - A dependency property to set.
   - **value** - _Object_  
     - The new value.
   - **source** - _(optional)_ - _Number_
 - **_resetValue(** property [_Property_](../../../ui/core/dependency-observable/Property.md), source? _Number_ **)**  
     Resets a value for a property.
   - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md)
   - **source** - _(optional)_ - _Number_
 - **_onPropertyChanged(** property [_Property_](../../../ui/core/dependency-observable/Property.md), oldValue _Object_, newValue _Object_ **)**  
     Handler for property changed event.
   - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md)  
     - A dependency property indentifier.
   - **oldValue** - _Object_  
     - The old value of the property.
   - **newValue** - _Object_  
     - The new value of the property.
 - **_eachSetProperty(** callback _Function_... **)**  
     Iterates all the properties which have a PropertyEntry registered for this instance.
   - **callback** - _Function_(property [_Property_](../../../ui/core/dependency-observable/Property.md)) _Boolean_