---
nav-title: "Class ui/action-bar.ActionBar"
title: "Class ui/action-bar.ActionBar"
description: "Class ui/action-bar.ActionBar"
---
## Class: "ui/action-bar".ActionBar  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
_Conform to:_
 - [_AddArrayFromBuilder_](../../ui/core/view/AddArrayFromBuilder.md)
 - [_AddChildFromBuilder_](../../ui/core/view/AddChildFromBuilder.md)  
Provides an abstraction over the ActionBar (android) and NavigationBar (iOS).

##### Instance Properties
 - **title** - _String_.    
  Gets or sets the action bar title.
 - **titleView** - [_View_](../../ui/core/view/View.md).    
  Gets or sets the title view. When set - replaces the title with a custom view.
 - **navigationButton** - [_NavigationButton_](../../ui/action-bar/NavigationButton.md).    
  Gets or sets the navigation button (a.k.a. the back button).
 - **actionItems** - [_ActionItems_](../../ui/action-bar/ActionItems.md).    
  Gets the collection of action items.
 - **android** - [_AndroidActionBarSettings_](../../ui/action-bar/AndroidActionBarSettings.md).    
  Gets the android specific options of the action bar.
 - **page** - [_Page_](../../ui/page/Page.md).    
  Gets the page that contains the action bar.

##### Instance Functions
 - **update()**  
     Updates the action bar.
 - **_isEmpty()** _Boolean_
   - _**return**_ - _Boolean_
 - **_updateAndroid(** menu _Object_ **)**
   - **menu** - _Object_
 - **_onAndroidItemSelected(** itemId _Number_ **)** _Boolean_
   - **itemId** - _Number_
   - _**return**_ - _Boolean_
 - **_addArrayFromBuilder(** name _String_, value __... **)**
   - **name** - _String_
   - **value** - __ of _Object_
 - **_addChildFromBuilder(** name _String_, value _Object_ **)**
   - **name** - _String_
   - **value** - _Object_