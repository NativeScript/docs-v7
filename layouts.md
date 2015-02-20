---
nav-title: "NativeScript Layouts"
title: "Layouts"
description: "NativeScript Documentation: Layouts"
position: 6
---

# Layouts

NativeScript framework comes with its own layout system. All **View** classes expose several properties that affects the layout. For example minWidth, width, maxWidth, minHeight, height, maxHeight and margin all affects layout.

NativeScript also provides few predefined layouts and allows for defining custom layouts.
The predefined layouts are:

* StackLayout - Arranges child elements into a single line that can be oriented horizontally or vertically.
* GridLayout - Defines a flexible grid area consisting of columns and rows. Child elements of a GridLayout can be positioned precisely using the margin property.

## StackLayout

A **StackLayout** enables "stacking" elements in horizontal or vertical orientation. The default stack direction is vertical. The **orientation** property can be used to control content flow.

One thing to note is that StackLayout measure its children with infinity on the stack direction (e.g. when vertical will measure its children with infinity height). Placing virtualizing controls (like ListView) inside StackLayout will break their virtualization so this should be avoided.

### Define and use StackLayout

``` JavaScript
var layoutModule = require("ui/layouts/stack-layout");
var buttonModule = require("ui/button");

var stackLayout = new layoutModule.StackLayout();

var btn1 = new buttonModule.Button();
btn1.text = "Button 1";
stackLayout.addChild(btn1);

var btn2 = new buttonModule.Button();
var btn2.text = "Button 2";
stackLayout.addChild(btn2);
```

## GridLayout
**GridLayout** allows you to define flexible row and column groupings.

### Sizing behavior of columns and rows
Columns and rows defined within a GridLayout can take advantage of Star sizing in order to distribute remaining space proportionally. When Star is selected as the height or width of a row or column, that column or row receives a weighted proportion of remaining available space. This is in contrast to auto, which will distribute space evenly based on the size of the content within a column or row. This value is expressed as **new GridLength(1, GridUnitType.star)** or **new GridLength(2, GridUnitType.star)**. In the first case, the row or column would receive one times the available space, in the second case, two times, and so on. By combining this technique to proportionally distribute space with a horizontalAlignment and verticalAlignment value of stretch it is possible to partition layout space by percentage of screen space. Grid is the only layout layout that can distribute space in this manner.

### Define and use GridLayout

``` JavaScript
var layout = require("ui/layouts/grid-layout");
var button = require("ui/button");

// Create gridLayout.
var gridLayout = new layout.GridLayout();

// Create buttons.
var btn1 = new button.Button();
var btn2 = new button.Button();
var btn3 = new button.Button();
var btn4 = new button.Button();

// Add buttons to gridLayout.
gridLayout.addChild(btn1);
gridLayout.addChild(btn2);
gridLayout.addChild(btn3);
gridLayout.addChild(btn4);

// Specify in which column button should be placed.
layout.GridLayout.setColumn(btn1, 0);
layout.GridLayout.setColumn(btn2, 1);
layout.GridLayout.setColumn(btn3, 2);

// Specify in which row button should be placed.
layout.GridLayout.setRow(btn4, 1);

// Specify in how much columns button should spans.
layout.GridLayout.setColumnSpan(btn4, 3);

// Create GridLengt object with fixed size 80px (device independent pixels)
var pixelGridLength = new layout.GridLength(80, layout.GridUnitType.pixel);

// Create GridLengt object with star size (take remaining space)
var starGridLength = new layout.GridLength(1, layout.GridUnitType.star);

// Create GridLengt object with auto size (size to content)
var autoGridLength = layout.GridLength.auto;

// Create ColumnDefiniton object and set its width to fixed width.
var firstColumnDefinition = new layout.ColumnDefinition();
firstColumnDefinition.width = pixelGridLength;

// Create ColumnDefiniton object and set its width to star width.
var secondColumnDefinition = new layout.ColumnDefinition();
secondColumnDefinition.width = starGridLength;

// Create ColumnDefiniton object and set its width to auto width.
var thirdColumnDefinition = new layout.ColumnDefinition();
thirdColumnDefinition.width = autoGridLength;

// Add columnDefiniton objects to gridLayout.
gridLayout.addColumnDefinition(firstColumnDefinition);
gridLayout.addColumnDefinition(secondColumnDefinition);
gridLayout.addColumnDefinition(thirdColumnDefinition);

// Create RowDefiniton object and set its height to auto width.
var firstRowDefinition = new layout.RowDefinition();
firstRowDefinition.height = autoGridLength;

// Create RowDefiniton object and set its height to star width.
var secondRowDefinition = new layout.RowDefinition();
secondRowDefinition.height = starGridLength;

// Add rowDefiniton objects to gridLayout.
gridLayout.addRowDefinition(firstRowDefinition);
gridLayout.addRowDefinition(secondRowDefinition);
```
