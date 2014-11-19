---
nav-title: "Class data/virtual-array.VirtualArray"
title: "Class data/virtual-array.VirtualArray"
description: "Class data/virtual-array.VirtualArray"
---
## Class: "data/virtual-array".VirtualArray  
_Type parameters:_ _**T**_  
_Inherits:_ [_Observable_](../../data/observable/Observable.md)  
Advanced array like class that helps loading items on demand. Use "length" property to specify total number of items, 
"loadSize" to specify number of items to be requested in a single request, "itemsLoading" event to handle items request and 
"load()" method to copy items into the array. All already loaded items are cached in-memory and when "getItem()" method is called 
the array will raise "itemsLoading" event for still not loaded items. Example:
var virtualArray = new VirtualArray&lt;number&gt;(100);
virtualArray.loadSize = 15;
virtualArray.on("itemsLoading", (args: virtualArrayDef.ItemsLoading) =&gt; {
    var itemsToLoad = new Array&lt;number&gt;();
    for (var i = 0; i &lt; args.count; i++) {
        itemsToLoad.push(args.index + i);
    }
    virtualArray.load(args.index, itemsToLoad);
});

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