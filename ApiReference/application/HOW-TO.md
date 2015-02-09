---
nav-title: "application How-To"
title: "application How-To"
description: "Examples for using application"
---
# Application
The Application module provides abstraction over the platform-specific Application implementations.
It is the main NativeScript module and is required for other NativeScript modules to work properly.
The default bootstrap.js implementation for each platform loads and initializes this module.
``` JavaScript
var app = require("application");
```
The pre-required `app` module is used throughout the following code snippets.
### Checking the target platform
Use the following code in case you need to check somewhere in your code the platform you are running against:
``` JavaScript
if (app.android) {
}
else if (app.ios) {
}
```
### Using the Android-specific implementation
Accessing the Android-specific object instance (will be undefined if running on iOS)
``` JavaScript
var androidApp = app.android;
```
Using the Android Application context
``` JavaScript
var context = app.android.context;
// get the Files (Documents) folder (directory)
var dir = context.getFilesDir();
```
Tracking the current Activity
``` JavaScript
if (androidApp.foregroundActivity === androidApp.foregroundActivity) {
}
```
