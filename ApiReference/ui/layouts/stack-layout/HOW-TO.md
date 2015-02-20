---
nav-title: "stack-layout How-To"
title: "How-To"
description: "Examples for using stack-layout"
---
### Create StackLayout
``` JavaScript
var stackLayout = new layout.StackLayout();
var btn = new button.Button();
 ```
### Add child view to layout
``` JavaScript
stackLayout.addChild(btn);
 ```
### Remove child view from layout
``` JavaScript
stackLayout.removeChild(btn);
```
### Change layout orientation to Horizontal
``` JavaScript
stackLayout.orientation = enums.Orientation.horizontal;
```
