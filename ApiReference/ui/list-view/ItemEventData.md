---
nav-title: "Object ui/list-view.ItemEventData"
title: "Object ui/list-view.ItemEventData"
description: "Object ui/list-view.ItemEventData"
---
## Object: "ui/list-view".ItemEventData  
_Extends:_ [_EventData_](../../data/observable/EventData.md)  
Event data containing information for the index and the view associated to a list view item.

##### Properties
 - **index** - _Number_.    
  The index of the item, for which the event is raised.
 - **view** - [_View_](../../ui/core/view/View.md).    
  The view that is associated to the item, for which the event is raised.
 - **ios** - _Object_.    
  Gets the native [iOS view](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITableViewCell_Class/) that represents the user interface where the view is hosted. Valid only when running on iOS.
 - **android** - _Object_.    
  Gets the native [android widget](http://developer.android.com/reference/android/view/ViewGroup.html) that represents the user interface where the view is hosted. Valid only when running on Android OS.