---
nav-title: "stack-layout How-To"
title: "How-To"
description: "Examples for using stack-layout"
---
### Create StackLayout
``` JavaScript
var stackLayout = new layout.StackLayout();
 ```
### Add child view to layout
``` JavaScript
var btn = new button.Button();
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
