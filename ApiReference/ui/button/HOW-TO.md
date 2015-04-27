---
nav-title: "button How-To"
title: "How-To"
description: "Examples for using button"
---
# Button
### Declaring button module
Button module is required to use any button feature.
``` JavaScript
var buttonModule = require("ui/button");
var observable = require("data/observable");
```
### Attaching event handler for the button tap event.
```XML
<Page>
  <Button tap="buttonTap" />
</Page>
```
### Creating a button
``` JavaScript
var button = new buttonModule.Button();
```
### Setting the text of a button
``` JavaScript
button.text = "Hello, world!";
```
### Responding to the tap event
``` JavaScript
button.on(buttonModule.Button.tapEvent, function (args) {
    // Do something
});
```
### Binding text property directly to model
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
