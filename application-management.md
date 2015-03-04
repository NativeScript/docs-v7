---
nav-title: Application Management
title: "App: Management"
description: Learn how to manage the life cycle of NativeScript applications from application start to storing user-defined settings.
position: 6
---

# Application Management

The `application` module lets you manage the life cycle of your NativeScript apps from starting the application to storing user-defined settings.

* [Start Application](#start-application)
* [Use Application Callbacks](#use-application-callbacks)
* [Persist and Restore Application Settings](#persist-and-restore-application-settings)

## Start Application

You must call the **start** method of the application module after the module initialization. 

This method is required for iOS applications. 

### Example

``` JavaScript
/*
iOS calls UIApplication and triggers the application main event loop.
*/

var application = require("application");
application.mainModule = "app/template-settings/main-page";
application.start();
```
``` TypeScript
/*
iOS calls UIApplication and triggers the application main event loop.
*/

import application = require("application");
application.mainModule = "app/main-page";
application.start();
```

## Use Application Callbacks

NativeScript applications have the following life cycle events.

+ `onLaunch(context)`: This method is called when application launch.
+ `onSuspend()`: This method is called when the application is suspended.
+ `onResume()`: This method is called when the application is resumed after it has been suspended.
+ `onExit()`: This method is called when the application is about to exit.
+ `onLowMemory()`: This method is called when the memory on the target device is low.
+ `onUncaughtError(error)`: This method is called when an uncaught application error is present.

### Example

``` JavaScript
var application = require("application");
application.mainModule = "app/template-settings/main-page";
application.onLaunch = function (context) {
    // For Android applications, the context is an android.content.Intent class.
    // For iOS applications, the context is undefined.
    if (application.android) {
        console.log("Launched Android application with the following intent: " + context + ".");
    }
    else if (application.ios) {
        console.log("Launched iOS application.");
    }
};
application.onSuspend = function () {
    console.log("Application suspended.");
};
application.onResume = function () {
    console.log("Application resumed.");
};
application.onExit = function () {
    console.log("Application will exit.");
};
application.onLowMemory = function () {
    console.log("Memory is low.");
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
    // For Android applications, the context is an android.content.Intent class.
    // For iOS applications, the context is undefined.
    if (application.android) {
        console.log("Launched Android application with the following intent: " + context + ".");
    }
    else if (application.ios) {
        console.log("Launched iOS application.");
    }
}
application.onSuspend = function () {
    console.log("Application suspended.");
}
application.onResume = function () {
    console.log("Application resumed.");
}
application.onExit = function () {
    console.log("Application will exit.");
}
application.onLowMemory = function () {
    console.log("Memory is low.");
}
application.onUncaughtError = function (error: application.NativeScriptError) {
    console.log("Application error: " + error.name + "; " + error.message + "; " + error.nativeError);
}
application.start();
```

## Persist and Restore Application Settings

To persist user-defined settings, you need to use the `local-settings` module. The `local-settings` module is a static singleton hash table that stores key-value pairs for the application. 

The getter methods have two parameters: a key and an optional default value to return if the specified key does not exist.
The setter methods have two required parameters: a key and value. 

### Example

``` JavaScript
var localSettings = require("local-settings");
// Event handler for Page "loaded" event attached in main-page.xml.
function pageLoaded(args) {
    localSettings.setString("Name", "John Doe");
    console.log(localSettings.getString("Name")); // Prints "John Doe".
    localSettings.setBoolean("Married", false);
    console.log(localSettings.getBoolean("Married")); // Prints false.
    localSettings.setNumber("Age", 42);
    console.log(localSettings.getNumber("Age")); // Prints 42.
    console.log(localSettings.hasKey("Name")); // Prints true.
    localSettings.remove("Name"); // Removes the Name entry.
    console.log(localSettings.hasKey("Name")); // Prints false.
}
exports.pageLoaded = pageLoaded;
```
``` TypeScript
import observable = require("data/observable");
import localSettings = require("local-settings");
// Event handler for Page "loaded" event attached in main-page.xml.
export function pageLoaded(args: observable.EventData) {
    localSettings.setString("Name", "John Doe");
    console.log(localSettings.getString("Name"));// Prints "John Doe".
    localSettings.setBoolean("Married", false);
    console.log(localSettings.getBoolean("Married"));// Prints false.
    localSettings.setNumber("Age", 42);
    console.log(localSettings.getNumber("Age"));// Prints 42.
    console.log(localSettings.hasKey("Name"));// Prints true.
    localSettings.remove("Name");// Removes the Name entry.
    console.log(localSettings.hasKey("Name"));// Prints false.
}
```