---
nav-title: "Class ui/search-bar.SearchBar"
title: "Class ui/search-bar.SearchBar"
description: "Class ui/search-bar.SearchBar"
---
## Class: "ui/search-bar".SearchBar  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a search bar component.

##### Static Properties
 - **textProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Dependency property used to support binding operations related to search-bar text.
 - **textFieldBackgroundColorProperty** - [_Property_](../../ui/core/dependency-observable/Property.md).    
  Gets or sets the TextField background color of the SearchBar component.

##### Instance Properties
 - **android** - _Object_.    
  Gets the native [android widget](http://developer.android.com/reference/android/widget/SearchView.html) that represents the user interface for this component. Valid only when running on Android OS.
 - **ios** - _UISearchBar_.    
  Gets the native iOS [UISearchBar](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISearchBar_Class/) that represents the user interface for this component. Valid only when running on iOS.
 - **text** - _String_.    
  Gets or sets a search bar text.
 - **hint** - _String_.    
  Gets or sets the text of the search bar text field hint/placeholder.
 - **textFieldBackgroundColor** - [_Color_](../../color/Color.md).    
  Gets or sets the TextField background color of the SearchBar component.

##### Instance Functions
 - **on(** event _String_, callback _Function_... **)**
   - **event** - _String_
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))
 - **on(** event , callback _Function_... **)**  
     Raised when a search bar search is submitted.
   - **event**
   - **callback** - _Function_(args [_EventData_](../../data/observable/EventData.md))
 - **on(** event , callback _Function_... **)**  
     Raised when a search bar search is closed.
   - **event**
   - **callback** - _Function_(args [_EventData_](../../data/observable/EventData.md))