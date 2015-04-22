---
nav-title: "TimePicker How-To"
title: "How-To"
description: "Examples for using TimePicker"
---
# TimePicker
Using a TimePicker requires the "ui/time-picker" module.
``` JavaScript
var timePickerModule = require("ui/time-picker");
```
## Creating a TimePicker
``` JavaScript
var timePicker = new timePickerModule.TimePicker();
```
## Configuring a TimePicker
``` JavaScript
timePicker.hour = 9;
timePicker.minute = 25;
```
