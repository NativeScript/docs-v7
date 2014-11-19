---
nav-title: "switch How-To"
title: "switch How-To"
description: "Examples for using switch"
---
# Switch
Using a switch requires the Switch module.
``` JavaScript
var switchModule = require("ui/switch");
```
## Creating a switch
``` JavaScript
var mySwitch = new switchModule.Switch();
```
## Setting the checked property of a switch
``` JavaScript
mySwitch.checked = true;
```
## Binding checked property to a model
``` JavaScript
var model = new observable.Observable();
model.set("enabled", true);
var options = {
    sourceProperty: "enabled",
    targetProperty: "checked"
};
mySwitch.bind(options, model);
// mySwitch.checked is now true
model.set("enabled", false);
// mySwitch.checked is now false
```
