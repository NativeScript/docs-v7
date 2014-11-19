---
nav-title: "progress How-To"
title: "progress How-To"
description: "Examples for using progress"
---
# Progress
Using the progress view requires the Progress module.
``` JavaScript
var progressModule = require("ui/progress");
```
## Creating a progress view
``` JavaScript
var progress = new progressModule.Progress();
```
## Setting up the progress view
``` JavaScript
progress.maxValue = 255;
progress.value = 16;
```
