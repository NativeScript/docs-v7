---
nav-title: "WrapLayout How-To"
title: "How-To"
description: "Examples for using WrapLayout"
---
# WrapLayout
Using a WrapLayout requires the WrapLayout module.
``` JavaScript
var wrapLayoutModule = require("ui/layouts/wrap-layout");
```
Other frequently used modules when working with a WrapLayout include:
``` JavaScript
var enums = require("ui/enums");
```
## Creating a WrapLayout
``` JavaScript
var wrapLayout = new wrapLayoutModule.WrapLayout();
```
## Setting the orientation of a wrap-layout.
``` JavaScript
wrapLayout.orientation = enums.Orientation.vertical;
```
