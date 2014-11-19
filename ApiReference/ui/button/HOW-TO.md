---
nav-title: "button How-To"
title: "button How-To"
description: "Examples for using button"
---
# Button
Using a button requires the Button module.
``` JavaScript
var buttonModule = require("ui/button");
var observable = require("data/observable");
```
## Creating a button
``` JavaScript
var button = new buttonModule.Button();
```
## Setting the text of a button
``` JavaScript
button.text = "Hello, world!";
```
## Responding to the click event
``` JavaScript
button.on("click", function (args) {
    // Do something
});
```
## Binding text property directly to model
``` JavaScript
var model = new observable.Observable();
model.set("buttonTitle", "OK");
var options = {
    sourceProperty: "buttonTitle",
    targetProperty: "text"
};
button.bind(options, model);
// button.text is now "OK"
model.set("buttonTitle", "Cancel");
// button.text is now "Cancel"
```
