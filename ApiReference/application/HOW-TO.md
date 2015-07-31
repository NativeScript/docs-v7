---
nav-title: "application How-To"
title: "How-To"
description: "Examples for using application"
---
# Application
The Application module provides abstraction over the platform-specific Application implementations.
It is the main BCL module and is required for other BCL modules to work properly.
The default bootstrap.js implementation for each platform loads and initializes this module.
``` JavaScript
var app = require("application");
```
The pre-required `app` module is used throughout the following code snippets.
### Checking the target platform
Use the following code in case you need to check somewhere in your code the platform you are running against:
``` JavaScript
if (app.android) {
    console.log("We are running on Android device!");
}
else if (app.ios) {
    console.log("We are running on iOS device");
}
```
### Using the Android-specific implementation
Accessing the Android-specific object instance (will be undefined if running on iOS)
``` JavaScript
var androidApp = app.android;
```
### Using the Android Application context
``` JavaScript
var context = app.android.context;
// get the Files (Documents) folder (directory)
var dir = context.getFilesDir();
```
### Tracking the current Activity
``` JavaScript
if (androidApp.foregroundActivity === androidApp.startActivity) {
}
```
### Registering a Broadcast Receiver (Android)
``` JavaScript
// Register the broadcast receiver
if (app.android) {
    app.android.registerBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED, function onReceiveCallback(context, intent) {
        var level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
        var scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
        var percent = (level / scale) * 100.0;
        //console.log("Battery: " + percent + "%");
    });
}
// When no longer needed, unregister the broadcast receiver
if (app.android) {
    app.android.unregisterBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED);
}
```
### Adding a Notification Observer (iOS)
``` JavaScript
// Add the notification observer
if (app.ios) {
    app.ios.addNotificationObserver(UIDeviceBatteryLevelDidChangeNotification, function onReceiveCallback(notification) {
        var percent = UIDevice.currentDevice().batteryLevel * 100;
        var message = "Battery: " + percent + "%";
        //console.log(message);
    });
}
// When no longer needed, remove the notification observer
if (app.ios) {
    app.ios.removeNotificationObserver(UIDeviceBatteryLevelDidChangeNotification);
}
```
