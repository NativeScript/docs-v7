---
nav-title: "WrapPanel How-To"
title: "WrapPanel How-To"
description: "Examples for using WrapPanel"
---
# WrapPanel
Using a WrapPanel requires the WrapPanel module.
``` JavaScript
var wrapPanelModule = require("ui/panels/wrap-panel");
```
Other frequently used modules when working with a WrapPanel include:
``` JavaScript
var enums = require("ui/enums");
```
### Creating a WrapPanel
``` JavaScript
var wrapPanel = new wrapPanelModule.WrapPanel();
```
### Setting the orientation of a wrap-panel.
``` JavaScript
wrapPanel.orientation = enums.Orientation.vertical;
```
