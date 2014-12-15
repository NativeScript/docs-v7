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
[Options](../../../ui/core/view/Options.md) | 
[AddArrayFromBuilder](../../../ui/core/view/AddArrayFromBuilder.md) | 
[AddChildFromBuilder](../../../ui/core/view/AddChildFromBuilder.md) | 

Namespace | Description
------|------------
[knownEvents](../../../ui/core/view/knownEvents/) | 

##### Variables
 - **idProperty** - [_Property_](../../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the id property of each View.
 - **cssClassProperty** - [_Property_](../../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the cssClass property of each View.

##### Functions
 - **getViewById(** view [_View_](../../../ui/core/view/View.md), id _String_ **)** [_View_](../../../ui/core/view/View.md)
   - **view** - [_View_](../../../ui/core/view/View.md)
   - **id** - _String_
   - _**return**_ - [_View_](../../../ui/core/view/View.md)
 - **eachDescendant(** view [_View_](../../../ui/core/view/View.md), callback _Function_... **)**
   - **view** - [_View_](../../../ui/core/view/View.md)
   - **callback** - _Function_(child [_View_](../../../ui/core/view/View.md)) _Boolean_
 - **getAncestor(** view [_View_](../../../ui/core/view/View.md), typeName _String_ **)** [_View_](../../../ui/core/view/View.md)
   - **view** - [_View_](../../../ui/core/view/View.md)
   - **typeName** - _String_
   - _**return**_ - [_View_](../../../ui/core/view/View.md)