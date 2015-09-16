---
nav-title: "SegmentedBar How-To"
title: "How-To"
description: "Examples for using SegmentedBar"
---
# SegmentedBar
Using a SegmentedBar requires the "ui/segmented-bar" module.
``` JavaScript
var segmentedBarModule = require("ui/segmented-bar");
```
## Creating a SegmentedBar
``` JavaScript
var segmentedBar = new segmentedBarModule.SegmentedBar();
```
### Binding segmentedBar.items
``` JavaScript
segmentedBar.items = _createItems(3);
```
### Selecting an item programmatically
``` JavaScript
segmentedBar.selectedIndex = 9;
```
