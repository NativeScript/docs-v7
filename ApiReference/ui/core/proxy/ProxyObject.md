---
nav-title: "Class ui/core/proxy.ProxyObject"
title: "Class ui/core/proxy.ProxyObject"
description: "Class ui/core/proxy.ProxyObject"
---
## Class: "ui/core/proxy".ProxyObject  
_Inherits:_ [_Bindable_](../../../ui/core/bindable/Bindable.md)  
A class that serves as a proxy between JavaScript object and native object.
Used in cases when native instance is not avaibale yet (stores all properties).

##### Instance Properties
 - **android** - _Object_.    
  Gets the android-specific native instance that lies behind this proxy. Will be available if running on an Android platform.
 - **ios** - _Object_.    
  Gets the ios-specific native instance that lies behind this proxy. Will be available if running on an iOS platform.

##### Instance Functions
 - **_onPropertyChanged(** property [_Property_](../../../ui/core/dependency-observable/Property.md), oldValue _Object_, newValue _Object_ **)**  
     A property is changed.
   - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md)
   - **oldValue** - _Object_
   - **newValue** - _Object_
 - **_onPropertyChangedFromNative(** property [_Property_](../../../ui/core/dependency-observable/Property.md), newValue _Object_ **)**  
     A property has changed on the native side directly - e.g. the user types in a TextField.
   - **property** - [_Property_](../../../ui/core/dependency-observable/Property.md)
   - **newValue** - _Object_
 - **_syncNativeProperties()**  
     Synchronizes all properties with native values.