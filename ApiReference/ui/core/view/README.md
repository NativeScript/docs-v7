---
nav-title: "Class ui/core/view"
title: "Class ui/core/view"
description: "Class ui/core/view"
---
# Module: "ui/core/view"

``` JavaScript
// To import the "ui/core/view" module:
var uicoreview = require("ui/core/view");
```

Class | Description
------|------------
[View](../../../ui/core/view/View.md) | This class is the base class for all UI components. 
A View occupies a rectangular area on the screen and is responsible for drawing (measure and arrange) of all UI components within. 

Object | Description
------|------------
[Options](../../../ui/core/view/Options.md) | Defines interface for an optional parameter used to create a view.
[AddArrayFromBuilder](../../../ui/core/view/AddArrayFromBuilder.md) | Defines an interface for adding arrays declared in xml.
[AddChildFromBuilder](../../../ui/core/view/AddChildFromBuilder.md) | Defines an interface for adding a child element declared in xml.
[ApplyXmlAttributes](../../../ui/core/view/ApplyXmlAttributes.md) | Defines an interface used to create a member of a class from string representation (used in xml declaration).

Namespace | Description
------|------------
[knownEvents](../../../ui/core/view/knownEvents/) | Defines an enum with events for view class.

##### Variables
 - **idProperty** - [_Property_](../../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the id property of each View.
 - **cssClassProperty** - [_Property_](../../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the cssClass property of each View.

##### Functions
 - **getViewById(** view [_View_](../../../ui/core/view/View.md), id _String_ **)** [_View_](../../../ui/core/view/View.md)  
     Gets a child view by id.
   - **view** - [_View_](../../../ui/core/view/View.md)  
     - The parent (container) view of the view to look for.
   - **id** - _String_  
     - The id of the view to look for.
Returns an instance of a view (if found), otherwise undefined.
   - _**return**_ - [_View_](../../../ui/core/view/View.md)
 - **eachDescendant(** view [_View_](../../../ui/core/view/View.md), callback _Function_... **)**  
     Iterates through all child views (via visual tree) and executes a function.
   - **view** - [_View_](../../../ui/core/view/View.md)  
     - Starting view (parent container).
   - **callback** - _Function_(child [_View_](../../../ui/core/view/View.md)) _Boolean_  
     - A function to execute on every child. If function returns false it breaks the iteration.
 - **getAncestor(** view [_View_](../../../ui/core/view/View.md), typeName _String_ **)** [_View_](../../../ui/core/view/View.md)  
     Gets an ancestor from a given type.
   - **view** - [_View_](../../../ui/core/view/View.md)  
     - Starting view (child view).
   - **typeName** - _String_  
     - The type name of the parent container which is looking for.
Returns an instance of a view (if found), otherwise undefined.
   - _**return**_ - [_View_](../../../ui/core/view/View.md)
