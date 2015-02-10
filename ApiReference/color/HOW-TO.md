---
nav-title: "color How-To"
title: "color How-To"
description: "Examples for using color"
---
# Color
Using Colors requires the "color" module.
``` JavaScript
var colorModule = require("color");
var Color = colorModule.Color;
```
## Creating a Color from a hex value.
``` JavaScript
// Creates the red color
var color = new Color("#FF0000");
```
## Creating a Color from a short hex value.
``` JavaScript
// Creates the color #FF8800
var color = new Color("#F80");
```
## Creating a Color from four ARGB values
``` JavaScript
// Creates the color with 100 alpha, 255 red, 100 green, 100 blue
var color = new Color(100, 255, 100, 100);
```
## Creating a Color from a single ARGB value
``` JavaScript
// Creates the color with 100 alpha, 100 red, 100 green, 100 blue
var argb = (100 << 24) | (100 << 16) | (100 << 8) | 100;
var color = new Color(argb);
```
