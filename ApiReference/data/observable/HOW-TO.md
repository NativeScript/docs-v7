---
nav-title: "data/observable How-To"
title: "data/observable How-To"
description: "Examples for using data/observable"
---
# Observable
Using Observable objects requires the "data/observable" module.
``` JavaScript
var observable = require("data/observable");
```
### Responding to property changes
``` JavaScript
var person = new observable.Observable();
person.set("Name", "John");
person.set("Age", 34);
person.set("Married", true);
person.addEventListener(observable.knownEvents.propertyChange, function (pcd) {
    console.log(pcd.eventName.toString() + " " + pcd.propertyName.toString() + " " + pcd.value.toString());
});
person.set("Age", 35);
person.set("Married", false);
// If uncommented, the console.log above produces the following output:
// propertyChange Age 35
// propertyChange Married false
```
