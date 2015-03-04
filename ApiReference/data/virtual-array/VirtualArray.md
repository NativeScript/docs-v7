---
nav-title: "Class data/virtual-array.VirtualArray"
title: "Class data/virtual-array.VirtualArray"
description: "Class data/virtual-array.VirtualArray"
---
## Class: "data/virtual-array".VirtualArray  
_Type parameters:_ _**T**_  
_Inherits:_ [_Observable_](../../data/observable/Observable.md)  
Advanced array like class that helps loading items on demand.

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
 - **on(** event _String_, callback _Function_... **)**
   - **event** - _String_
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))
 - **on(** event , callback _Function_... **)**  
     Raised when still not loaded items are requested.
   - **event**
   - **callback** - _Function_(args [_ItemsLoading_](../../data/virtual-array/ItemsLoading.md))
 - **on(** event , callback _Function_... **)**  
     Raised when a change occurs.
   - **event**
   - **callback** - _Function_(args [_ChangedData_](../../data/virtual-array/ChangedData.md) of _T_)