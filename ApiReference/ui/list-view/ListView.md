---
nav-title: "Class ui/list-view.ListView"
title: "Class ui/list-view.ListView"
description: "Class ui/list-view.ListView"
---
## Class: "ui/list-view".ListView  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a view that shows items in a vertically scrolling list.

##### Static Properties
 - **itemLoadingEvent** - _String_.    
  String value used when hooking to itemLoading event.
 - **itemTapEvent** - _String_.    
  String value used when hooking to itemTap event.
 - **loadMoreItemsEvent** - _String_.    
  String value used when hooking to loadMoreItems event.
 - **itemsProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the items property of each ListView instance.
 - **itemTemplateProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the item template property of each ListView instance.
 - **isScrollingProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the isScrolling property of each ListView instance.

##### Instance Properties
 - **android** - _Object_.    
  Gets the native [android widget](http://developer.android.com/reference/android/widget/ListView.html) that represents the user interface for this component. Valid only when running on Android OS.
 - **ios** - _UITableView_.    
  Gets the native [iOS view](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITableView_Class/) that represents the user interface for this component. Valid only when running on iOS.
 - **isScrolling** - _Boolean_.    
  Gets a value indicating whether the ListView is currently scrolling.
 - **items** - _Object_.    
  Gets or set the items collection of the ListView. 
The items property can be set to an array or an object defining length and getItem(index) method.
 - **itemTemplate** - _String_.    
  Gets or set the item template of the ListView. 
 - **separatorColor** - [_Color_](../../color/Color.md).    
  Gets or set the items separator line color of the ListView. 

##### Instance Functions
 - **refresh()**  
     Forces the ListView to reload all its items.
 - **on(** eventNames _String_, callback _Function_..., thisArg? _Object_ **)**  
     A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
   - **eventNames** - _String_  
     - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))  
     - Callback function which will be executed when event is raised.
   - **thisArg** - _(optional)_ - _Object_  
     - An optional parameter which will be used as `this` context for callback execution.
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when a View for the data at the specified index should be created. 
The result should be returned trough the view property of the event data.
Note, that the view property of the event data can be pre-initialized with 
an old instance of a view, so that it can be reused. 
   - **event**
   - **callback** - _Function_(args [_ItemEventData_](../../ui/list-view/ItemEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when an item inside the ListView is tapped.
   - **event**
   - **callback** - _Function_(args [_ItemEventData_](../../ui/list-view/ItemEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when the ListView is scrolled so that its last item is visible.
   - **event**
   - **callback** - _Function_(args [_EventData_](../../data/observable/EventData.md))
   - **thisArg** - _(optional)_ - _Object_