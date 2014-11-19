---
nav-title: "Class ui/list-view.ListView"
title: "Class ui/list-view.ListView"
description: "Class ui/list-view.ListView"
---
## Class: "ui/list-view".ListView  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a view that shows items in a vertically scrolling list.

##### Instance Properties
 - **android** - _ListView_.    
  Gets the native android widget (android.widget.ListView) that represents the user interface for this component. Valid only when running on Android OS.
 - **ios** - _UITableView_.    
  Gets the native iOS view (UITableView) that represents the user interface for this component. Valid only when running on iOS.
 - **isScrolling** - _Boolean_.    
  Gets a value indicating whether the ListView is currently scrolling.
 - **items** - _Object_.    
  Gets or set the items collection of the ListView. 
The items property can be set to an array or an object defining length and getItem(index) method.

##### Instance Functions
 - **refresh()**  
     Forces the ListView to reload all its items.
 - **on(** event _String_, callback _Function_... **)**
   - **event** - _String_
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))
 - **on(** event , callback _Function_... **)**  
     Raised when a View for the data at the specified index should be created. 
The result should be returned trough the view property of the event data.
Note, that the view property of the event data can be pre-initialized with 
an old instance of a view, so that it can be reused. 
   - **event**
   - **callback** - _Function_(args [_ItemEventData_](../../ui/list-view/ItemEventData.md))
 - **on(** event , callback _Function_... **)**  
     Raised when an item inside the ListView is tapped.
   - **event**
   - **callback** - _Function_(args [_ItemEventData_](../../ui/list-view/ItemEventData.md))
 - **on(** event , callback _Function_... **)**  
     Raised when the ListView is scrolled so that its last item is visible.
   - **event**
   - **callback** - _Function_(args [_EventData_](../../data/observable/EventData.md))