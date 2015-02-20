---
nav-title: "AbsoluteLayout How-To"
title: "How-To"
description: "Examples for using AbsoluteLayout"
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
var label;
Left Top
label = new labelModule.Label();
label.width = 100;
label.height = 100;
label.text = "LT";
label.id = "LT";
label.style.backgroundColor = new colorModule.Color("Red");
absoluteLayoutModule.AbsoluteLayout.setLeft(label, 10);
absoluteLayoutModule.AbsoluteLayout.setTop(label, 10);
absoluteLayout.addChild(label);
```
