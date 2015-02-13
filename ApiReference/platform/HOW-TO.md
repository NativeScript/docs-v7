---
nav-title: "platform How-To"
title: "How-To"
description: "Examples for using platform"
---
# Platform
Information about the current device and screen are defined in the platform module
### Declaring platform module to be available for further usage.
``` JavaScript
var platformModule = require("platform");
```
### Getting information about the current device:
``` JavaScript
console.log("Device model: " + platformModule.device.model);
console.log("Device type: " + platformModule.device.deviceType);
console.log("OS: " + platformModule.device.os);
console.log("OS version: " + platformModule.device.osVersion);
console.log("SDK Version: " + platformModule.device.sdkVersion);
console.log("Screen width: " + platformModule.screen.mainScreen.widthPixels);
console.log("Screen height: " + platformModule.screen.mainScreen.heightPixels);
console.log("Screen scale: " + platformModule.screen.mainScreen.scale);
```
