---
nav-title: "Module ui/builder"
title: "Module ui/builder"
description: "Module ui/builder"
---
# Module: "ui/builder"

``` JavaScript
// To import the "ui/builder" module:
var uibuilder = require("ui/builder");
```

Object | Description
------|------------
[LoadOptions](../../ui/builder/LoadOptions.md) | 

##### Functions
 - **load(** fileName _String_, exports? _Object_ **)** [_View_](../../ui/core/view/View.md)
   - **fileName** - _String_
   - **exports** - _(optional)_ - _Object_
   - _**return**_ - [_View_](../../ui/core/view/View.md)
 - **load(** options [_LoadOptions_](../../ui/builder/LoadOptions.md) **)** [_View_](../../ui/core/view/View.md)
   - **options** - [_LoadOptions_](../../ui/builder/LoadOptions.md)
   - _**return**_ - [_View_](../../ui/core/view/View.md)
 - **parse(** value _String_, view, Template, exports? _Object_ **)** [_View_](../../ui/core/view/View.md)
   - **value** - _String_
   - **view**
   - **Template**
   - **exports** - _(optional)_ - _Object_
   - _**return**_ - [_View_](../../ui/core/view/View.md)