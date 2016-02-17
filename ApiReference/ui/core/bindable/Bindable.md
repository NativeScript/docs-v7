---
nav-title: "Class ui/core/bindable.Bindable"
title: "Class ui/core/bindable.Bindable"
description: "Class ui/core/bindable.Bindable"
---
## Class: "ui/core/bindable".Bindable  
_Inherits:_ [_DependencyObservable_](../../../ui/core/dependency-observable/DependencyObservable.md)  
Represents an extended DependencyObservable object that supports data-binding.

##### Static Properties
 - **bindingContextProperty** - [_Property_](../../../ui/core/dependency-observable/Property.md).    
  Represents the dependency Property used to back the bindingContext value.

##### Instance Properties
 - **bindingContext** - _Object_.    
  Gets or sets the binding context of this instance. This object is used as a source for each Binding that does not have a source object specified.

##### Instance Functions
 - **bind(** options [_BindingOptions_](../../../ui/core/bindable/BindingOptions.md), source? _Object_ **)**  
     Establishes a binding between the source object and this Bindable instance.
   - **options** - [_BindingOptions_](../../../ui/core/bindable/BindingOptions.md)  
     The options for the binding.
   - **source** - _(optional)_ - _Object_  
     An optional parameter, specifying the source object to bind to. If no source is specified the bindingContext value (if any) will be used as a source.
 - **unbind(** property _String_ **)**  
     Removes the existing binding (if any) for the specified property.
   - **property** - _String_  
     The name of the property to unbind.
 - **_onBindingContextChanged(** oldValue _Object_, newValue _Object_ **)**
   - **oldValue** - _Object_
   - **newValue** - _Object_
 - **_updateTwoWayBinding(** propertyName _String_, value _Object_ **)**
   - **propertyName** - _String_
   - **value** - _Object_