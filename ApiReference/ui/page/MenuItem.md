---
nav-title: "Class ui/page.MenuItem"
title: "Class ui/page.MenuItem"
description: "Class ui/page.MenuItem"
---
## Class: "ui/page".MenuItem  
_Inherits:_ [_Bindable_](../../ui/core/bindable/Bindable.md)

##### Static Properties
 - **tapEvent** - _String_.    
  String value used when hooking to tap event.
 - **textProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the text property.
 - **iconProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the icon property.

##### Instance Properties
 - **text** - _String_.
 - **icon** - _String_.
 - **android** - [_AndroidMenuItemOptions_](../../ui/page/AndroidMenuItemOptions.md).

##### Instance Functions
 - **on(** eventNames _String_, callback _Function_... **)**  
     A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
   - **eventNames** - _String_  
     - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))  
     - Callback function which will be executed when event is raised.
 - **on(** event , callback _Function_... **)**  
     Raised when a tap event occurs.
   - **event**
   - **callback** - _Function_(args [_EventData_](../../data/observable/EventData.md))
 - **_raiseTap()**