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
   - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md)
   - _**return**_ - _Object_
 - **_getValueSource(** property [_Property_](../../../ui/core/dependency-observable/Property.md) **)** _Number_
   - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md)
   - _**return**_ - _Number_
 - **_setValue(** property [_Property_](../../../ui/core/dependency-observable/Property.md), value _Object_, source? _Number_ **)**
   - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md)
   - **value** - _Object_
   - **source** - _(optional)_ - _Number_
 - **_resetValue(** property [_Property_](../../../ui/core/dependency-observable/Property.md), source? _Number_ **)**
   - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md)
   - **source** - _(optional)_ - _Number_
 - **_onPropertyChanged(** property [_Property_](../../../ui/core/dependency-observable/Property.md), oldValue _Object_, newValue _Object_ **)**
   - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md)
   - **oldValue** - _Object_
   - **newValue** - _Object_
 - **_eachSetProperty(** callback _Function_... **)**  
     Iterates all the properties which have a PropertyEntry registered for this instance.
   - **callback** - _Function_(property [_Property_](../../../ui/core/dependency-observable/Property.md)) _Boolean_