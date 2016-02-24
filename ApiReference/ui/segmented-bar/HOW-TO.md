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
```` xml
<SegmentedBar>
  <SegmentedBar.items>
    <SegmentedBarItem title="Item 1" />
    <SegmentedBarItem title="Item 2" />
    <SegmentedBarItem title="Item 3" />
  </SegmentedBar.items>
</SegmentedBar>
````
## Creating a SegmentedBar
``` JavaScript
var segmentedBar = new segmentedBarModule.SegmentedBar();
```
### Creating segmentedBar.items
It is important that an items array gets created and filled with
items first and then assigned to the segmented bar.
``` JavaScript
var items = [];
var item1 = new segmentedBarModule.SegmentedBarItem();
item1.title = "Item1";
items.push(item1);
var item2 = new segmentedBarModule.SegmentedBarItem();
item2.title = "Item2";
items.push(item2);
var item3 = new segmentedBarModule.SegmentedBarItem();
item3.title = "Item3";
items.push(item3);
segmentedBar.items = items;
```
### Selecting an item programmatically
``` JavaScript
segmentedBar.selectedIndex = 9;
```
