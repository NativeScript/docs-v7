---
nav-title: "Class ui/tab-view.TabView"
title: "Class ui/tab-view.TabView"
description: "Class ui/tab-view.TabView"
---
## Class: "ui/tab-view".TabView  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a tab view.

##### Static Properties
 - **itemsProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).
 - **selectedIndexProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).
 - **selectedColorProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).
 - **selectedIndexChangedEvent** - _String_.    
  String value used when hooking to the selectedIndexChanged event.

##### Instance Properties
 - **items** - __ of [_TabViewItem_](../../ui/tab-view/TabViewItem.md).    
  Gets or sets the items of the TabView.
 - **selectedIndex** - _Number_.    
  Gets or sets the selectedIndex of the TabView.
 - **selectedColor** - [_Color_](../../color/Color.md).    
  Gets or sets the color used for selected item.
 - **tabsBackgroundColor** - [_Color_](../../color/Color.md).    
  Gets or sets the color used for background of the tab items.
 - **android** - _Object_.    
  Gets the native [android widget](http://developer.android.com/reference/android/support/v4/view/ViewPager.html) that represents the user interface for this component. Valid only when running on Android OS.
 - **ios** - _Object_.    
  Gets the native iOS [UITabBarController](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITabBarController_Class/) that represents the user interface for this component. Valid only when running on iOS.

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
   - **callback** - _Function_(args [_SelectedIndexChangedEventData_](../../ui/tab-view/SelectedIndexChangedEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **_getAndroidTabView()** _Object_
   - _**return**_ - _Object_
 - **_updateIOSTabBarColors()**