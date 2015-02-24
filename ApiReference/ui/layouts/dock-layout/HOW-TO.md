---
nav-title: "dock-layout How-To"
title: "How-To"
description: "Examples for using dock-layout"
---
# DockLayout
Using a DockLayout requires the DockLayout module.
``` JavaScript
var dockModule = require("ui/layouts/dock-layout");
```
Other frequently used modules when working with a DockLayout include:
``` JavaScript
var enums = require("ui/enums");
```
## Create DockLayout
``` JavaScript
var dockLayout = new dockModule.DockLayout();
 ```
## Add child view to layout
``` JavaScript
var btn = new button.Button();
dockLayout.addChild(btn);
 ```
## Remove child view from layout
``` JavaScript
dockLayout.removeChild(btn);
```
## Setting the dock proeprty
``` JavaScript
var btnDockedToRight = new button.Button();
dockModule.DockLayout.setDock(btnDockedToRight, enums.Dock.right);
dockLayout.addChild(btnDockedToRight);
```
