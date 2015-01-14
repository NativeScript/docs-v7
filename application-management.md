---
nav-title: "Application Management"
title: "Application Management"
description: "Application Management"
position: 2
---

# Persist and Restore Application Settings
To persist settings that the user has defined you have to use the local-settings module. The local-settings module is a static singleton hash table that stores key-value pairs for the application. The getter methods have two parameters -- a key and an optional default value to return if the specified key does not exist. The setter methods also have two parameters -- key and value. Here is an example of using the local settings-module and all of its available methods:
``` JavaScript
var localSettings = require("local-settings");
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    localSettings.setString("Name", "John Doe");
    console.log(localSettings.getString("Name")); // Prints "John Doe"
    localSettings.setBoolean("Married", false);
    console.log(localSettings.getBoolean("Married")); // Prints false
    localSettings.setNumber("Age", 42);
    console.log(localSettings.getNumber("Age")); // Prints 42
    console.log(localSettings.hasKey("Name")); // Prints true
    localSettings.remove("Name"); // Removes the Name entry.
    console.log(localSettings.hasKey("Name")); // Prints false
}
exports.pageLoaded = pageLoaded;
```
``` TypeScript
import observable = require("data/observable");
import localSettings = require("local-settings");
// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    localSettings.setString("Name", "John Doe");
    console.log(localSettings.getString("Name"));// Prints "John Doe"
    localSettings.setBoolean("Married", false);
    console.log(localSettings.getBoolean("Married"));// Prints false
    localSettings.setNumber("Age", 42);
    console.log(localSettings.getNumber("Age"));// Prints 42
    console.log(localSettings.hasKey("Name"));// Prints true
    localSettings.remove("Name");// Removes the Name entry.
    console.log(localSettings.hasKey("Name"));// Prints false
}
```
# Using Application Callbacks
Each NativeScript application has several important lifecycle events. You can use those events to perform all kinds of needed maintanance and housekeeping:
+ onLaunch(context) - method called when application launch.
+ onSuspend() - method called when the application is suspended.
+ onResume() - method called when the application is resumed after it has been suspended.
+ onExit() - method called when the application is about to exit.
+ onLowMemory() - method called when there is low memory on the target device.
+ onLowMemory(error) - method called when there is an uncaught application error.
Here is a code example that demonstrates how too use those callback functions:
``` JavaScript
var application = require("application");
application.mainModule = "app/template-settings/main-page";
application.onLaunch = function (context) {
    // For Android applications the context is an android.content.Intent.
    // For iOS applications the context is undefined, i.e. there is no available context.
    if (application.android) {
        console.log("Launched Android application with intent: " + context);
    }
    else if (application.ios) {
        console.log("Launched iOS application");
    }
};
application.onSuspend = function () {
    console.log("Application suspended");
};
application.onResume = function () {
    console.log("Application resumed");
};
application.onExit = function () {
    console.log("Application exit");
};
application.onLowMemory = function () {
    console.log("Application low memory");
};
application.onUncaughtError = function (error) {
    console.log("Application error: " + error.name + "; " + error.message + "; " + error.nativeError);
};
application.start();
```
``` TypeScript
import application = require("application");
application.mainModule = "app/main-page";
application.onLaunch = function (context: any) {
    // For Android applications the context is an android.content.Intent.
    // For iOS applications the context is undefined, i.e. there is no available context.
    if (application.android) {
        console.log("Launched Android application with intent: " + context);
    }
    else if (application.ios) {
        console.log("Launched iOS application");
    }
}
application.onSuspend = function () {
    console.log("Application suspended");
}
application.onResume = function () {
    console.log("Application resumed");
}
application.onExit = function () {
    console.log("Application exit");
}
application.onLowMemory = function () {
    console.log("Application low memory");
}
application.onUncaughtError = function (error: application.NativeScriptError) {
    console.log("Application error: " + error.name + "; " + error.message + "; " + error.nativeError);
}
application.start();
```