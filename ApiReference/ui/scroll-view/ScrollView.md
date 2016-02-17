---
nav-title: "Class ui/scroll-view.ScrollView"
title: "Class ui/scroll-view.ScrollView"
description: "Class ui/scroll-view.ScrollView"
---
## Class: "ui/scroll-view".ScrollView  
_Inherits:_ [_ContentView_](../../ui/content-view/ContentView.md)  
Represents a scrollable area that can have content that is larger than its bounds.

##### Static Properties
 - **orientationProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).
 - **scrollEvent** - _String_.    
  String value used when hooking to scroll event.

##### Instance Properties
 - **verticalOffset** - _Number_.    
  Gets a value that contains the vertical offset of the scrolled content.
 - **horizontalOffset** - _Number_.    
  Gets a value that contains the horizontal offset of the scrolled content.
 - **scrollableHeight** - _Number_.    
  Gets the maximum value for the verticalOffset.
 - **scrollableWidth** - _Number_.    
  Gets the maximum value for the horizontalOffset.
 - **orientation** - _String_.    
  Gets or sets direction in which the content can be scrolled.

##### Instance Functions
 - **scrollToVerticalOffset(** value _Number_, animated _Boolean_ **)**  
     Scrolls the content the specified vertical offset position.
   - **value** - _Number_  
     The offset value
   - **animated** - _Boolean_  
     true for animated scroll, false for immediate scroll.
 - **scrollToHorizontalOffset(** value _Number_, animated _Boolean_ **)**  
     Scrolls the content the specified horizontal offset position.
   - **value** - _Number_  
     The offset value
   - **animated** - _Boolean_  
     true for animated scroll, false for immediate scroll.
 - **on(** eventNames _String_, callback _Function_..., thisArg? _Object_ **)**  
     A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
   - **eventNames** - _String_  
     - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))  
     - Callback function which will be executed when event is raised.
   - **thisArg** - _(optional)_ - _Object_  
     - An optional parameter which will be used as `this` context for callback execution.
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when a scroll event occurs.
   - **event**
   - **callback** - _Function_(args [_ScrollEventData_](../../ui/scroll-view/ScrollEventData.md))
   - **thisArg** - _(optional)_ - _Object_