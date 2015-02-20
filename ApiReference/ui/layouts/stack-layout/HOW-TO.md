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
### Add child view to panel
``` JavaScript
stackLayout.addChild(btn);
 ```
### Remove child view from panel
``` JavaScript
stackLayout.removeChild(btn);
```
### Change panel orientation to Horizontal
``` JavaScript
stackLayout.orientation = enums.Orientation.horizontal;
```
