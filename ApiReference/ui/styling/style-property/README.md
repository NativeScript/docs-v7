---
nav-title: "Module ui/styling/style-property"
title: "Module ui/styling/style-property"
description: "Module ui/styling/style-property"
---
# Module: "ui/styling/style-property"

``` JavaScript
// To import the "ui/styling/style-property" module:
var uistylingstyle_property = require("ui/styling/style-property");
```

Class | Description
------|------------
[Property](../../../ui/styling/style-property/Property.md) | 

##### Functions
 - **getPropertyByName(** name _String_ **)** [_Property_](../../../ui/styling/style-property/Property.md)
   - **name** - _String_
   - _**return**_ - [_Property_](../../../ui/styling/style-property/Property.md)
 - **getPropertyByCssName(** name _String_ **)** [_Property_](../../../ui/styling/style-property/Property.md)
   - **name** - _String_
   - _**return**_ - [_Property_](../../../ui/styling/style-property/Property.md)
 - **eachProperty(** callback _Function_... **)**
   - **callback** - _Function_(property [_Property_](../../../ui/styling/style-property/Property.md))
 - **eachInheritableProperty(** callback _Function_... **)**
   - **callback** - _Function_(property [_Property_](../../../ui/styling/style-property/Property.md))