---
nav-title: "timePicker How-To"
title: "How-To"
description: "Examples for using timePicker"
---
# TimePicker
Using a timePicker requires the "ui/time-picker" module.
``` JavaScript
var timePickerModule = require("ui/time-picker");
```
## Creating a timePicker
``` JavaScript
var timePicker = new timePickerModule.TimePicker();
```
## Configuring a TimePicker
``` JavaScript
timePicker.hour = 9;
timePicker.minute = 25;
```
