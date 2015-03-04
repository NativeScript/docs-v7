---
nav-title: "Class ui/layouts/layout.Layout"
title: "Class ui/layouts/layout.Layout"
description: "Class ui/layouts/layout.Layout"
---
## Class: "ui/layouts/layout".Layout  
_Inherits:_ [_View_](../../../ui/core/view/View.md)  
Base class for all views that supports children positioning.

##### Instance Properties
 - **paddingBottom** - _Number_.    
  Specify the bottom padding of this layout.
 - **paddingLeft** - _Number_.    
  Specify the left padding of this layout.
 - **paddingRight** - _Number_.    
  Specify the right padding of this layout.
 - **paddingTop** - _Number_.    
  Specify the top padding of this layout.

##### Instance Functions
 - **getChildrenCount()** _Number_  
     Returns the number of children in this Layout.
   - _**return**_ - _Number_
 - **getChildAt(** index _Number_ **)** [_View_](../../../ui/core/view/View.md)  
     Returns the view at the specified position.
   - **index** - _Number_  
     The position at which to get the child from.
   - _**return**_ - [_View_](../../../ui/core/view/View.md)
 - **addChild(** view [_View_](../../../ui/core/view/View.md) **)**  
     Adds the view to children array.
   - **view** - [_View_](../../../ui/core/view/View.md)  
     The view to be added to the end of the children array.
 - **removeChild(** view [_View_](../../../ui/core/view/View.md) **)**  
     Removes the specified view from the children array.
   - **view** - [_View_](../../../ui/core/view/View.md)  
     The view to remove from the children array.