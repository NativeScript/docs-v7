---
nav-title: "Class data/virtual-array.VirtualArray"
title: "Class data/virtual-array.VirtualArray"
description: "Class data/virtual-array.VirtualArray"
---
## Class: "data/virtual-array".VirtualArray  
_Type parameters:_ _**T**_  
_Inherits:_ [_Observable_](../../data/observable/Observable.md)  
Advanced array like class that helps loading items on demand.

##### Static Properties
 - **changeEvent** - _String_.    
  String value used when hooking to change event.
 - **itemsLoadingEvent** - _String_.    
  String value used when hooking to itemsLoading event.

##### Instance Properties
 - **length** - _Number_.    
  Gets or sets length for the virtual array.
 - **loadSize** - _Number_.    
  Gets or sets load size for the virtual array.

##### Instance Functions
 - **getItem(** index _Number_ **)** _T_  
     Returns item at specified index.
   - **index** - _Number_
   - _**return**_ - _T_
 - **setItem(** index _Number_, value _T_ **)**  
     Sets item at specified index.
   - **index** - _Number_
   - **value** - _T_
 - **load(** index _Number_, items Array of _T_ **)**  
     Loads items from an array starting at index.
   - **index** - _Number_
   - **items** - Array of _T_
 - **on(** eventNames _String_, callback _Function_..., thisArg? _Object_ **)**  
     A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
   - **eventNames** - _String_  
     - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))  
     - Callback function which will be executed when event is raised.
   - **thisArg** - _(optional)_ - _Object_  
     - An optional parameter which will be used as `this` context for callback execution.
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when still not loaded items are requested.
   - **event**
   - **callback** - _Function_(args [_ItemsLoading_](../../data/virtual-array/ItemsLoading.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when a change occurs.
   - **event**
   - **callback** - _Function_(args [_ChangedData_](../../data/virtual-array/ChangedData.md) of _T_)
   - **thisArg** - _(optional)_ - _Object_