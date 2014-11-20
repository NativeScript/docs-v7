---
nav-title: "stack-panel How-To"
title: "stack-panel How-To"
description: "Examples for using stack-panel"
---
### Create StackPanel
``` JavaScript
var stackPanel = new panel.StackPanel();
var btn = new button.Button();
```
### Add child view to panel
``` JavaScript
stackPanel.addChild(btn);
```
### Remove child view from panel
``` JavaScript
stackPanel.removeChild(btn);
```
### Change panel orientation to Horizontal
``` JavaScript
stackPanel.orientation = panel.orientation.horizontal;
```
