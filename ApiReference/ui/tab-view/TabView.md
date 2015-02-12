---
nav-title: "Class ui/tab-view.TabView"
title: "Class ui/tab-view.TabView"
description: "Class ui/tab-view.TabView"
---
## Class: "ui/tab-view".TabView  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a tab view.

##### Instance Properties
 - **items** - _Array_ of [_TabEntry_](../../ui/tab-view/TabEntry.md).    
  Gets or sets the items of the TabView.
 - **selectedIndex** - _Number_.    
  Gets or sets the selectedIndex of the TabView.
 - **android** - _Object_.    
  Gets the native [android widget](http://developer.android.com/reference/android/support/v4/view/ViewPager.html) that represents the user interface for this component. Valid only when running on Android OS.
 - **ios** - _UITabBarController_.    
  Gets the native iOS [UITabBarController](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITabBarController_Class/) that represents the user interface for this component. Valid only when running on iOS.