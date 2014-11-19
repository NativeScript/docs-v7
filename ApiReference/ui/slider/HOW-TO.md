---
nav-title: "slider How-To"
title: "slider How-To"
description: "Examples for using slider"
---
# Slider
Using a slider requires the Slider module.
``` JavaScript
var sliderModule = require("ui/slider");
```
## Creating a slider
``` JavaScript
var slider = new sliderModule.Slider();
```
## Setting the slider value and bounds
``` JavaScript
slider.maxValue = 120;
slider.value = 80;
slider.minValue = 50;
```
## Binding value property to a model
``` JavaScript
var model = new observable.Observable();
model.set("age", 21);
var options = {
    sourceProperty: "age",
    targetProperty: "value"
};
slider.bind(options, model);
// slider.value is now 21
model.set("age", 22);
// slider.value is now 22
```
