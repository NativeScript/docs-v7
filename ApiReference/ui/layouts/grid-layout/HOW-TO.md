---
nav-title: "grid-layout How-To"
title: "How-To"
description: "Examples for using grid-layout"
---
## GridLayout sample
### Create GridLayout with 3 columns - 80px, *, auto size and 2 rows - 100px and auto size
``` JavaScript
var gridLayout = new layout.GridLayout();
var btn1 = new button.Button();
var btn2 = new button.Button();
var btn3 = new button.Button();
var btn4 = new button.Button();
 ```
### Add views to layout
``` JavaScript
gridLayout.addChild(btn1);
gridLayout.addChild(btn2);
gridLayout.addChild(btn3);
gridLayout.addChild(btn4);
 ```
### Set column property on views - btn1 in first column, btn2 is second and btn3 in third
``` JavaScript
layout.GridLayout.setColumn(btn1, 0);
layout.GridLayout.setColumn(btn2, 1);
layout.GridLayout.setColumn(btn3, 2);
```
### Set row property on btn4.
``` JavaScript
layout.GridLayout.setRow(btn4, 1);
```
### Set columnSpan property on btn4 to stretch into all columns
``` JavaScript
layout.GridLayout.setColumnSpan(btn4, 3);
```
### Create ItemSpec for columns and rows
``` JavaScript
var firstColumn = new layout.ItemSpec(80, layout.GridUnitType.pixel);
var secondColumn = new layout.ItemSpec(1, layout.GridUnitType.star);
var thirdColumn = new layout.ItemSpec(1, layout.GridUnitType.auto);
var firstRow = new layout.ItemSpec(1, layout.GridUnitType.auto);
var secondRow = new layout.ItemSpec(1, layout.GridUnitType.star);
```
### Add columns and rows to GridLayout
``` JavaScript
gridLayout.addColumn(firstColumn);
gridLayout.addColumn(secondColumn);
gridLayout.addColumn(thirdColumn);
gridLayout.addRow(firstRow);
gridLayout.addRow(secondRow);
```
