---
nav-title: "TextView How-To"
title: "TextView How-To"
description: "Examples for using TextView"
---
# TextView
Using a TextView requires the text-view module.
``` JavaScript
var textViewModule = require("ui/text-view");
var observable = require("data/observable");
```
## Creating a TextView
``` JavaScript
var textView = new textViewModule.TextView();
```
## Setting the text of a TextView
``` JavaScript
textView.text = "Hello, world!";
```
## Binding text property directly to model
``` JavaScript
var model = new observable.Observable();
model.set("username", "john");
var options = {
    sourceProperty: "username",
    targetProperty: "text"
};
textView.bind(options, model);
// textView.text is now "john"
model.set("username", "mary");
// textView.text is now "mary"
```
## Setting the editable property of a TextView
``` JavaScript
textView.editable = false;
```
## Binding editable property directly to model
``` JavaScript
var model = new observable.Observable();
model.set("editable", false);
var options = {
    sourceProperty: "editable",
    targetProperty: "editable"
};
textView.bind(options, model);
// textView.editable is now false
model.set("editable", true);
// textView.editable is now true
```
