---
nav-title: "Module ui/styling/css-selector"
title: "Module ui/styling/css-selector"
description: "Module ui/styling/css-selector"
---
# Module: "ui/styling/css-selector"

``` JavaScript
// To import the "ui/styling/css-selector" module:
var uistylingcss_selector = require("ui/styling/css-selector");
```

Class | Description
------|------------
[CssSelector](../../../ui/styling/css-selector/CssSelector.md) | 
[CssTypeSelector](../../../ui/styling/css-selector/CssTypeSelector.md) | 
[CssIdSelector](../../../ui/styling/css-selector/CssIdSelector.md) | 
[CssClassSelector](../../../ui/styling/css-selector/CssClassSelector.md) | 
[CssVisualStateSelector](../../../ui/styling/css-selector/CssVisualStateSelector.md) | 
[InlineStyleSelector](../../../ui/styling/css-selector/InlineStyleSelector.md) | 

##### Functions
 - **createSelector(** expression _String_, declarations Array of [_Declaration_](../../../css/Declaration.md) **)** [_CssSelector_](../../../ui/styling/css-selector/CssSelector.md)
   - **expression** - _String_
   - **declarations** - Array of [_Declaration_](../../../css/Declaration.md)
   - _**return**_ - [_CssSelector_](../../../ui/styling/css-selector/CssSelector.md)
 - **applyInlineSyle(** view [_View_](../../../ui/core/view/View.md), declarations Array of [_Declaration_](../../../css/Declaration.md) **)**
   - **view** - [_View_](../../../ui/core/view/View.md)
   - **declarations** - Array of [_Declaration_](../../../css/Declaration.md)