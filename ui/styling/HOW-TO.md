---
nav-title: "styling How-To"
title: "styling How-To"
description: "Examples for using styling"
---
# Styling
## Setting CSS to a page
``` JavaScript
var page = new pageModule.Page();
page.css = ".title { font-size: 20 }";
```
## Using CSS selectors
### Using type selector
``` JavaScript
page.css = "button { color: red; }";
// Will be styled
var btn = new buttonModule.Button();
// Won't be styled
var label = new labelModule.Label();
```
### Using class selector
``` JavaScript
page.css = ".test { color: red; }";
// Will be styled
var btnWithClass = new buttonModule.Button();
btnWithClass.cssClass = "test";
// Won't be styled
var btnWithNoClass = new buttonModule.Button();
```
### Using id selector
``` JavaScript
page.css = "#myButton { color: red; }";
// Will be styled
var btnWithId = new buttonModule.Button();
btnWithId.id = "myButton";
// Won't be styled
var btnWithNoId = new buttonModule.Button();
```
### Using state selector
``` JavaScript
page.css = "button:pressed { color: red; }";
// Will be red when pressed
var btn = new buttonModule.Button();
```
