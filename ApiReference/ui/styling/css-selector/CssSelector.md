---
nav-title: "Class ui/styling/css-selector.CssSelector"
title: "Class ui/styling/css-selector.CssSelector"
description: "Class ui/styling/css-selector.CssSelector"
---
## Class: "ui/styling/css-selector".CssSelector

##### Instance Properties
 - **expression** - _String_.
 - **attrExpression** - _String_.
 - **specificity** - _Number_.

##### Instance Functions
 - **declarations()** __...
   - _**return**_ - __ of { property: _String_, value: _Object_ }
 - **matches(** view [_View_](../../../ui/core/view/View.md) **)** _Boolean_
   - **view** - [_View_](../../../ui/core/view/View.md)
   - _**return**_ - _Boolean_
 - **apply(** view [_View_](../../../ui/core/view/View.md) **)**
   - **view** - [_View_](../../../ui/core/view/View.md)
 - **eachSetter(** callback _Function_... **)**
   - **callback** - _Function_(property [_Property_](../../../ui/styling/style-property/Property.md), resolvedValue _Object_)