---
nav-title: "Class data/observable.WrappedValue"
title: "Class data/observable.WrappedValue"
description: "Class data/observable.WrappedValue"
---
## Class: "data/observable".WrappedValue  
Helper class that is used to fire property change even when real object is the same.
By default property change will not be fired for a same object.
By wrapping object into a WrappedValue instance `same object restriction` will be passed.

##### Static Functions
 - **unwrap(** value _Object_ **)** _Object_  
     Gets the real value of previously wrappedValue.
   - **value** - _Object_  
     - Value that should be unwraped. If there is no wrappedValue property of the value object then value will be returned.
   - _**return**_ - _Object_
 - **wrap(** value _Object_ **)** [_WrappedValue_](../../data/observable/WrappedValue.md)  
     Returns an instance of WrappedValue. The actual instance is get from a WrappedValues pool.
   - **value** - _Object_  
     - Value that should be wrapped. 
   - _**return**_ - [_WrappedValue_](../../data/observable/WrappedValue.md)

##### Instance Properties
 - **wrapped** - _Object_.    
  Property which holds the real value.