---
nav-title: "Class ui/scroll-view.ScrollView"
title: "Class ui/scroll-view.ScrollView"
description: "Class ui/scroll-view.ScrollView"
---
## Class: "ui/scroll-view".ScrollView  
_Inherits:_ [_ContentView_](../../ui/content-view/ContentView.md)  
Represents a scrollable area that can have content that is larger than its bounds.

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