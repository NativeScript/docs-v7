---
nav-title: "styling How-To"
title: "styling How-To"
description: "Examples for using styling"
---
# Styling
### Setting CSS to a page
``` JavaScript
var page = new pageModule.Page();
page.css = ".title { font-size: 20 }";
```
## Using CSS selectors
### Using type selector
``` JavaScript
page.css = "button { color: red; }";
// Will be styled
btn = new buttonModule.Button();
// Won't be styled
label = new labelModule.Label();
```
### Using class selector
``` JavaScript
page.css = ".test { color: red; }";
// Will be styled
btnWithClass = new buttonModule.Button();
btnWithClass.cssClass = "test";
// Won't be styled
btnWithNoClass = new buttonModule.Button();
```
### Using id selector
``` JavaScript
page.css = "#myButton { color: red; }";
// Will be styled
btnWithId = new buttonModule.Button();
btnWithId.id = "myButton";
// Won't be styled
btnWithNoId = new buttonModule.Button();
```
### Using state selector
``` JavaScript
page.css = "button:pressed { color: red; }";
// Will be red when pressed
btn = new buttonModule.Button();
```
For information and example how to use style properties please refer to special [**Styling**](../../../styling.md) topic. 
