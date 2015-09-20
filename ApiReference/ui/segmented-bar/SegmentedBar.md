---
nav-title: "Class ui/segmented-bar.SegmentedBar"
title: "Class ui/segmented-bar.SegmentedBar"
description: "Class ui/segmented-bar.SegmentedBar"
---
## Class: "ui/segmented-bar".SegmentedBar  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a UI SegmentedBar component.

##### Static Properties
 - **selectedIndexProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Gets or sets the selected index dependency property of the SegmentedBar.
 - **selectedBackgroundColorProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Gets or sets the selected background color property of the SegmentedBar.
 - **itemsProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Gets or sets the items dependency property of the SegmentedBar.
 - **selectedIndexChangedEvent** - _String_.    
  String value used when hooking to the selectedIndexChanged event.

##### Instance Properties
 - **selectedIndex** - _Number_.    
  Gets or sets the selected index of the SegmentedBar component.
 - **selectedBackgroundColor** - [_Color_](../../color/Color.md).    
  Gets or sets the selected background color of the SegmentedBar component.
 - **items** - __ of [_SegmentedBarItem_](../../ui/segmented-bar/SegmentedBarItem.md).    
  Gets or sets the items of the SegmentedBar.

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
     Raised when the selected index changes.
   - **event**
   - **callback** - _Function_(args [_SelectedIndexChangedEventData_](../../ui/segmented-bar/SelectedIndexChangedEventData.md))
   - **thisArg** - _(optional)_ - _Object_