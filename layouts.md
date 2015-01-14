---
nav-title: "NativeScript Layouts"
title: "Layouts"
description: "NativeScript Documentation: Layouts"
position: 4
---

# Layouts

NativeScript framework comes with its own layout system. All **View** classes expose several properties that affects the layout. For example minWidth, width, maxWidth, minHeight, height, maxHeight and margin all affects layout.

NativeScript also provides few predefined panels and allows for defining custom panels.
The predefined panels are:

* StackPanel - Arranges child elements into a single line that can be oriented horizontally or vertically.
* GridPanel - Defines a flexible grid area consisting of columns and rows. Child elements of a GridPanel can be positioned precisely using the margin property.

## StackPanel

A **StackPanel** enables "stacking" elements in horizontal or vertical orientation. The default stack direction is vertical. The **orientation** property can be used to control content flow.

One thing to note is that StackPanel measure its children with infinity on the stack direction (e.g. when vertical will measure its children with infinity height). Placing virtualizing controls (like ListView) inside StackPanel will break their virtualization so this should be avoided.

### Define and use StackPanel

``` JavaScript
var panelModule = require("ui/panels/stack-panel");
var buttonModule = require("ui/button");

var stackPanel = new panelModule.StackPanel();

var btn1 = new buttonModule.Button();
btn1.text = "Button 1";
stackPanel.addChild(btn1);

var btn2 = new buttonModule.Button();
var btn2.text = "Button 2";
stackPanel.addChild(btn2);
```

## GridPanel
**GridPanel** allows you to define flexible row and column groupings.

### Sizing behavior of columns and rows
Columns and rows defined within a GridPanel can take advantage of Star sizing in order to distribute remaining space proportionally. When Star is selected as the height or width of a row or column, that column or row receives a weighted proportion of remaining available space. This is in contrast to auto, which will distribute space evenly based on the size of the content within a column or row. This value is expressed as **new GridLength(1, GridUnitType.star)** or **new GridLength(2, GridUnitType.star)**. In the first case, the row or column would receive one times the available space, in the second case, two times, and so on. By combining this technique to proportionally distribute space with a horizontalAlignment and verticalAlignment value of stretch it is possible to partition layout space by percentage of screen space. Grid is the only layout panel that can distribute space in this manner.

### Define and use GridPanel

``` JavaScript
var panel = require("ui/panels/grid-panel");
var button = require("ui/button");

// Create gridPanel.
var gridPanel = new panel.GridPanel();

// Create buttons.
var btn1 = new button.Button();
var btn2 = new button.Button();
var btn3 = new button.Button();
var btn4 = new button.Button();

// Add buttons to gridPanel.
gridPanel.addChild(btn1);
gridPanel.addChild(btn2);
gridPanel.addChild(btn3);
gridPanel.addChild(btn4);

// Specify in which column button should be placed.
panel.GridPanel.setColumn(btn1, 0);
panel.GridPanel.setColumn(btn2, 1);
panel.GridPanel.setColumn(btn3, 2);

// Specify in which row button should be placed.
panel.GridPanel.setRow(btn4, 1);

// Specify in how much columns button should spans.
panel.GridPanel.setColumnSpan(btn4, 3);

// Create GridLengt object with fixed size 80px (device independent pixels) 
var pixelGridLength = new panel.GridLength(80, panel.GridUnitType.pixel);

// Create GridLengt object with star size (take remaining space)
var starGridLength = new panel.GridLength(1, panel.GridUnitType.star);

// Create GridLengt object with auto size (size to content)
var autoGridLength = panel.GridLength.auto;

// Create ColumnDefiniton object and set its width to fixed width.
var firstColumnDefinition = new panel.ColumnDefinition();
firstColumnDefinition.width = pixelGridLength;

// Create ColumnDefiniton object and set its width to star width.
var secondColumnDefinition = new panel.ColumnDefinition();
secondColumnDefinition.width = starGridLength;

// Create ColumnDefiniton object and set its width to auto width.
var thirdColumnDefinition = new panel.ColumnDefinition();
thirdColumnDefinition.width = autoGridLength;

// Add columnDefiniton objects to gridPanel.
gridPanel.addColumnDefinition(firstColumnDefinition);
gridPanel.addColumnDefinition(secondColumnDefinition);
gridPanel.addColumnDefinition(thirdColumnDefinition);

// Create RowDefiniton object and set its height to auto width.
var firstRowDefinition = new panel.RowDefinition();
firstRowDefinition.height = autoGridLength;

// Create RowDefiniton object and set its height to star width.
var secondRowDefinition = new panel.RowDefinition();
secondRowDefinition.height = starGridLength;

// Add rowDefiniton objects to gridPanel.
gridPanel.addRowDefinition(firstRowDefinition);
gridPanel.addRowDefinition(secondRowDefinition);
```
