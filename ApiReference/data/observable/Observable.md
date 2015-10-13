---
nav-title: "Class data/observable.Observable"
title: "Class data/observable.Observable"
description: "Class data/observable.Observable"
---
## Class: "data/observable".Observable  
Observable is used when you want to be notified when a change occurs. Use on/off methods to add/remove listener.

##### Static Properties
 - **propertyChangeEvent** - _String_.    
  String value used when hooking to propertyChange event.

##### Instance Properties
 - **typeName** - _String_.    
  Gets the name of the constructor function for this instance. E.g. for a Button class this will return "Button".

##### Instance Functions
 - **on(** eventNames _String_, callback _Function_..., thisArg? _Object_ **)**  
     A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
   - **eventNames** - _String_  
     - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))  
     - Callback function which will be executed when event is raised.
   - **thisArg** - _(optional)_ - _Object_  
     - An optional parameter which will be used as `this` context for callback execution.
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when a propertyChange occurs.
   - **event**
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **off(** eventNames _String_, callback? _Object_, thisArg? _Object_ **)**  
     Shortcut alias to the removeEventListener method.
   - **eventNames** - _String_
   - **callback** - _(optional)_ - _Object_
   - **thisArg** - _(optional)_ - _Object_
 - **addEventListener(** eventNames _String_, callback _Function_..., thisArg? _Object_ **)**  
     Adds a listener for the specified event name.
   - **eventNames** - _String_  
     Comma delimited names of the events to attach the listener to.
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))  
     A function to be called when some of the specified event(s) is raised.
   - **thisArg** - _(optional)_ - _Object_  
     An optional parameter which when set will be used as "this" in callback method call.
 - **removeEventListener(** eventNames _String_, callback? _Object_, thisArg? _Object_ **)**  
     Removes listener(s) for the specified event name.
   - **eventNames** - _String_  
     Comma delimited names of the events the specified listener is associated with.
   - **callback** - _(optional)_ - _Object_  
     An optional parameter pointing to a specific listener. If not defined, all listeners for the event names will be removed.
   - **thisArg** - _(optional)_ - _Object_  
     An optional parameter which when set will be used to refine search of the correct callback which will be removed as event listener.
 - **set(** name _String_, value _Object_ **)**  
     Updates the specified property with the provided value.
   - **name** - _String_
   - **value** - _Object_
 - **get(** name _String_ **)** _Object_  
     Gets the value of the specified property.
   - **name** - _String_
   - _**return**_ - _Object_
 - **notify(** data _T_ **)**    
     _Types Parameters:_ _**T**_  
     Notifies all the registered listeners for the event provided in the data.eventName.
   - **data** - _T_  
     The data associated with the event.
 - **notifyPropertyChange(** propertyName _String_, newValue _Object_ **)**  
     Notifies all the registered listeners for the property change event.
   - **propertyName** - _String_
   - **newValue** - _Object_
 - **hasListeners(** eventName _String_ **)** _Boolean_  
     Checks whether a listener is registered for the specified event name.
   - **eventName** - _String_  
     The name of the event to check for.
   - _**return**_ - _Boolean_
 - **_setCore(** data [_PropertyChangeData_](../../data/observable/PropertyChangeData.md) **)**  
     This method is intended to be overriden by inheritors to provide additional implementation.
   - **data** - [_PropertyChangeData_](../../data/observable/PropertyChangeData.md)
 - **_createPropertyChangeData(** name _String_, value _Object_ **)** [_PropertyChangeData_](../../data/observable/PropertyChangeData.md)
   - **name** - _String_
   - **value** - _Object_
   - _**return**_ - [_PropertyChangeData_](../../data/observable/PropertyChangeData.md)
 - **_emit(** eventNames _String_ **)**
   - **eventNames** - _String_