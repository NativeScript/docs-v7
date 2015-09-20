---
nav-title: "Module ui/builder/component-builder"
title: "Module ui/builder/component-builder"
description: "Module ui/builder/component-builder"
---
# Module: "ui/builder/component-builder"

``` JavaScript
// To import the "ui/builder/component-builder" module:
var uibuildercomponent_builder = require("ui/builder/component-builder");
```

Object | Description
------|------------
[ComponentModule](../../../ui/builder/component-builder/ComponentModule.md) | 

##### Variables
 - **specialProperties** - __ of _String_.

##### Functions
 - **getComponentModule(** elementName _String_, namespace _String_, attributes _Object_, exports _Object_ **)** [_ComponentModule_](../../../ui/builder/component-builder/ComponentModule.md)
   - **elementName** - _String_
   - **namespace** - _String_
   - **attributes** - _Object_
   - **exports** - _Object_
   - _**return**_ - [_ComponentModule_](../../../ui/builder/component-builder/ComponentModule.md)
 - **setPropertyValue(** instance [_View_](../../../ui/core/view/View.md), instanceModuleExports _Object_, pageExports _Object_, propertyName _String_, propertyValue _String_ **)**
   - **instance** - [_View_](../../../ui/core/view/View.md)
   - **instanceModuleExports** - _Object_
   - **pageExports** - _Object_
   - **propertyName** - _String_
   - **propertyValue** - _String_
 - **setSpecialPropertyValue(** instance [_View_](../../../ui/core/view/View.md), propertyName _String_, propertyValue _String_ **)** _Boolean_
   - **instance** - [_View_](../../../ui/core/view/View.md)
   - **propertyName** - _String_
   - **propertyValue** - _String_
   - _**return**_ - _Boolean_