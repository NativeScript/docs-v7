---
nav-title: "application-settings How-To"
title: "How-To"
description: "Examples for using application-settings"
---
# Local Settings
Using local settings methods requires to load "local settings" module.
``` JavaScript
var appSettings = require("application-settings");
```
## Working with string, number and boolean values
### Set and get boolean value and provide default value in case it is not set
``` JavaScript
appSettings.setBoolean("boolKey", true);
var boolValue = appSettings.getBoolean("boolKey", false);
```
### Set and get string value
``` JavaScript
appSettings.setString("stringKey", "String value");
var stringValue = appSettings.getString("stringKey");
```
### Set and get numeric value.
We use `toFixed()` here in order to avoid floating point errors - ex: `54.321` becoming `54.320999999537`.
Beware the result of `toFixed()` is a string not a number therefore you cannot use `===` or `!==` when comparing with a number.
``` JavaScript
appSettings.setNumber("numberKey", 54.321);
var value = parseFloat(appSettings.getNumber("numberKey").toFixed(3));
```
### Reading values that are not set before while providing default value
``` JavaScript
var defaultValue = appSettings.getString("noStringKey", "No string value");
// will return "No string value" if there is no value for "noStringKey"
```
### Reading values that are not set before not providing default value
``` JavaScript
var defaultValue = appSettings.getString("noStringKey");
// will return undefined if there is no value for "noStringKey"
```
## Other functions
### Checking for existence of value for key
``` JavaScript
var hasKey = appSettings.hasKey("noBoolKey");
// will return false if there is no value for "noBoolKey"
```
### Removing value for key
``` JavaScript
appSettings.remove("boolKey");
```
