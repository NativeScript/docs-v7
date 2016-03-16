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
## Configuring a TimePicker
``` JavaScript
var timePicker = new timePickerModule.TimePicker();
timePicker.hour = 9;
timePicker.minute = 25;
```
