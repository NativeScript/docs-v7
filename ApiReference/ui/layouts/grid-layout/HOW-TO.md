---
nav-title: "grid-layout How-To"
title: "How-To"
description: "Examples for using grid-layout"
---
## GridLayout sample
### Creating Grid Layout via code.
``` JavaScript
var layout = require("ui/layouts/grid-layout");
var gridLayout = new grid_layout_1.GridLayout();
 ```
### Create grid layout with an xml declaration
``` XML
<GridLayout columns="80, *, auto" rows="auto, *" >
 <Button col="0" />
 <Button col="1" />
 <Button col="2" />
// by default column and row are set to 0
 <Button row="1" colSpan="3" />
</GridLayout>
```
### Add views to grid layout
``` JavaScript
var btn1 = new button_1.Button();
var btn2 = new button_1.Button();
var btn3 = new button_1.Button();
var btn4 = new button_1.Button();
gridLayout.addChild(btn1);
gridLayout.addChild(btn2);
gridLayout.addChild(btn3);
gridLayout.addChild(btn4);
 ```
### Set column property on views - btn1 in first column, btn2 is second and btn3 in third
``` JavaScript
grid_layout_1.GridLayout.setColumn(btn1, 0);
grid_layout_1.GridLayout.setColumn(btn2, 1);
grid_layout_1.GridLayout.setColumn(btn3, 2);
```
### Set row property on btn4.
``` JavaScript
grid_layout_1.GridLayout.setRow(btn4, 1);
```
### Set columnSpan property on btn4 to stretch into all columns
``` JavaScript
grid_layout_1.GridLayout.setColumnSpan(btn4, 3);
```
### Create ItemSpec for columns and rows 3 columns - 80px, *, auto size and 2 rows - 100px and auto size
``` JavaScript
// ItemSpec modes of the column refers to its width.
// Absolute size of the column
var firstColumn = new grid_layout_1.ItemSpec(80, grid_layout_1.GridUnitType.pixel);
// Star width means that this column will expand to fill the gap left from other columns
var secondColumn = new grid_layout_1.ItemSpec(1, grid_layout_1.GridUnitType.star);
// Auto size means that column will expand or shrink in order to give enough place for all child UI elements.
var thirdColumn = new grid_layout_1.ItemSpec(1, grid_layout_1.GridUnitType.auto);
// Star and Auto modes for rows behave like corresponding setting for columns but refer to row height.
var firstRow = new grid_layout_1.ItemSpec(1, grid_layout_1.GridUnitType.auto);
var secondRow = new grid_layout_1.ItemSpec(1, grid_layout_1.GridUnitType.star);
```
### Add columns and rows to GridLayout
``` JavaScript
gridLayout.addColumn(firstColumn);
gridLayout.addColumn(secondColumn);
gridLayout.addColumn(thirdColumn);
gridLayout.addRow(firstRow);
gridLayout.addRow(secondRow);
```
