---
nav-title: "Class ui/placeholder.Placeholder"
title: "Class ui/placeholder.Placeholder"
description: "Class ui/placeholder.Placeholder"
---
## Class: "ui/placeholder".Placeholder  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a Placeholder, which is used to add a native view to the visual tree.

##### Static Properties
 - **creatingViewEvent** - _String_.    
  String value used when hooking to creatingView event.

##### Instance Functions
 - **on(** eventNames _String_, callback _Function_... **)**  
     A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
   - **eventNames** - _String_  
     - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
   - **callback** - _Function_(args [_EventData_](../../data/observable/EventData.md))  
     - Callback function which will be executed when event is raised.
 - **on(** event , callback _Function_... **)**  
     Raised when a creatingView event occurs.
   - **event**
   - **callback** - _Function_(args [_CreateViewEventData_](../../ui/placeholder/CreateViewEventData.md))