---
nav-title: "Class ui/content-view.ContentView"
title: "Class ui/content-view.ContentView"
description: "Class ui/content-view.ContentView"
---
## Class: "ui/content-view".ContentView  
_Inherits:_ [_View_](../../ui/core/view/View.md)  
Represents a View that has a single child - content.
The View itself does not have visual representation and serves as a placeholder for its content in the logical tree.

##### Instance Properties
 - **content** - [_View_](../../ui/core/view/View.md).    
  Gets or sets the single child of the view.

##### Instance Functions
 - **_onContentChanged(** oldView [_View_](../../ui/core/view/View.md), newView [_View_](../../ui/core/view/View.md) **)**  
     Called when the content property has changed.
   - **oldView** - [_View_](../../ui/core/view/View.md)  
     The previous content.
   - **newView** - [_View_](../../ui/core/view/View.md)  
     The new content.