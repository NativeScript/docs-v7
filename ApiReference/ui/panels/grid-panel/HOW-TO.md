---
nav-title: "grid-panel How-To"
title: "grid-panel How-To"
description: "Examples for using grid-panel"
---
## GridPanel sample
### Create GridPanel with 3 columns - 80px, *, auto size and 2 rows - 100px and auto size
``` JavaScript
var gridPanel = new panel.GridPanel();
var btn1 = new button.Button();
var btn2 = new button.Button();
var btn3 = new button.Button();
var btn4 = new button.Button();
```
### Add views to panel
``` JavaScript
gridPanel.addChild(btn1);
gridPanel.addChild(btn2);
gridPanel.addChild(btn3);
gridPanel.addChild(btn4);
```
### Set column property on views - btn1 in first column, btn2 is second and btn3 in third
``` JavaScript
panel.GridPanel.setColumn(btn1, 0);
panel.GridPanel.setColumn(btn2, 1);
panel.GridPanel.setColumn(btn3, 2);
```
### Set row property on btn4.
``` JavaScript
panel.GridPanel.setRow(btn4, 1);
```
### Set columnSpan property on btn4 to stretch into all columns
``` JavaScript
panel.GridPanel.setColumnSpan(btn4, 3);
```
### Create GridLength object specifying width or ColumnDefinitions
``` JavaScript
var pixelGridLength = new panel.GridLength(80, panel.GridUnitType.pixel);
var starGridLength = new panel.GridLength(1, panel.GridUnitType.star);
var autoGridLength = panel.GridLength.auto;
```
### Create ColumnDefinition objects and set width properties
``` JavaScript
var firstColumnDefinition = new panel.ColumnDefinition();
firstColumnDefinition.width = pixelGridLength;
var secondColumnDefinition = new panel.ColumnDefinition();
secondColumnDefinition.width = starGridLength;
var thirdColumnDefinition = new panel.ColumnDefinition();
thirdColumnDefinition.width = autoGridLength;
```
### Add ColumnDefinition objects to gridPanel
``` JavaScript
gridPanel.addColumnDefinition(firstColumnDefinition);
gridPanel.addColumnDefinition(secondColumnDefinition);
gridPanel.addColumnDefinition(thirdColumnDefinition);
```
### Create RowDefinition objects and set height properties
``` JavaScript
var firstRowDefinition = new panel.RowDefinition();
firstRowDefinition.height = autoGridLength;
var secondRowDefinition = new panel.RowDefinition();
secondRowDefinition.height = starGridLength;
```
### Add RowDefinition objects to gridPanel
``` JavaScript
gridPanel.addRowDefinition(firstRowDefinition);
gridPanel.addRowDefinition(secondRowDefinition);
```
