---
nav-title: "absolute-layout How-To"
title: "How-To"
description: "Examples for using absolute-layout"
---
# AbsoluteLayout
Using a AbsoluteLayout requires the AbsoluteLayout module.
``` JavaScript
var absoluteLayoutModule = require("ui/layouts/absolute-layout");
```
## Creating and populating a AbsoluteLayout with children
``` JavaScript
var absoluteLayout = new absoluteLayoutModule.AbsoluteLayout();
absoluteLayout.width = 230;
absoluteLayout.height = 230;
absoluteLayout.style.backgroundColor = new colorModule.Color("LightGray");
var label = new labelModule.Label();
// In absolute layout place of an UI element is determined by 4 parameters : left, top, width and height.
absoluteLayoutModule.AbsoluteLayout.setLeft(label, 10);
absoluteLayoutModule.AbsoluteLayout.setTop(label, 10);
label.width = 100;
label.height = 100;
label.text = "LT";
label.id = "LT";
label.style.backgroundColor = new colorModule.Color("Red");
absoluteLayout.addChild(label);
```
