---
nav-title: "DatePicker How-To"
title: "How-To"
description: "Examples for using DatePicker"
---
# DatePicker
Using a DatePicker requires the "ui/date-picker" module.
``` JavaScript
var datePickerModule = require("ui/date-picker");
```
## Configuring a DatePicker
``` JavaScript
datePicker.year = 1980;
datePicker.month = 2;
datePicker.day = 9;
datePicker.minDate = new Date(1975, 0, 29);
datePicker.maxDate = new Date(2045, 4, 12);
```
