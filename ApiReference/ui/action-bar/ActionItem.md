---
nav-title: "Class ui/action-bar.ActionItem"
title: "Class ui/action-bar.ActionItem"
description: "Class ui/action-bar.ActionItem"
---
## Class: "ui/action-bar".ActionItem  
_Inherits:_ [_Bindable_](../../ui/core/bindable/Bindable.md)  
Represents an action item in the action bar.

##### Static Properties
 - **tapEvent** - _String_.    
  String value used when hooking to tap event.
 - **textProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the text property.
 - **iconProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the icon property.
 - **visibilityProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the visibility property.

##### Instance Properties
 - **text** - _String_.    
  Gets or sets the text of the action item.
 - **icon** - _String_.    
  Gets or sets the icon of the action item.
 - **visibility** - _String_.    
  Gets or sets the visibility of the action item.
 - **actionBar** - [_ActionBar_](../../ui/action-bar/ActionBar.md).    
  Gets the action bar that contains the action item.
 - **page** - [_Page_](../../ui/page/Page.md).    
  Gets the page that contains the action item.
 - **ios** - [_IOSActionItemSettings_](../../ui/action-bar/IOSActionItemSettings.md).    
  Gets the iOS specific options of the action item.
 - **android** - [_AndroidActionItemSettings_](../../ui/action-bar/AndroidActionItemSettings.md).    
  Gets the Android specific options of the action item.

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