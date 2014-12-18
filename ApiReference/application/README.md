---
nav-title: "Class application"
title: "Class application"
description: "Class application"
---
# Module: "application"

``` JavaScript
// To import the "application" module:
var application = require("application");
```

Object | Description
------|------------
[NativeScriptError](../application/NativeScriptError.md) | An extended JavaScript Error which will have the nativeError property initialized in case the error is caused by executing platform-specific code.
[AndroidApplication](../application/AndroidApplication.md) | The abstraction of an Android-specific application object.
[iOSApplication](../application/iOSApplication.md) | 

##### Variables
 - **mainModule** - _String_.    
  The main page path (without the file extension) for the application starting from the application root. 
For example if you have page called "main.js" in a folder called "subFolder" and your root folder is "app" you can specify mainModule like this:
var application = require("application");
application.mainModule = "app/subFolder/main";
application.start();
 - **android** - [_AndroidApplication_](../application/AndroidApplication.md).    
  This is the Android-specific application object instance.
Encapsulates methods and properties specific to the Android platform.
Will be undefined when TargetOS is iOS.
 - **ios** - [_iOSApplication_](../application/iOSApplication.md).    
  This is the iOS-specific application object instance.
Encapsulates methods and properties specific to the iOS platform.
Will be undefined when TargetOS is Android.

##### Functions
 - **start()**  
     Call this method to start the application. Important: All code after this method call will not be executed!
 - **onLaunch(** context _Object_ **)**  
     The main entry point event. This method is expected to use the root frame to navigate to the main application page.
   - **context** - _Object_
 - **onUncaughtError(** error [_NativeScriptError_](../application/NativeScriptError.md) **)**  
     A callback to be used when an uncaught error occurs while the application is running.
The application will be shut down after this method returns.
Loading new UI at this point is erroneous and may lead to unpredictable results.
The method is intended to be used for crash reports and/or application restart. 
   - **error** - [_NativeScriptError_](../application/NativeScriptError.md)
 - **onSuspend()**  
     This method will be called when the Application is suspended.
 - **onResume()**  
     This method will be called when the Application is resumed after it has been suspended.
 - **onExit()**  
     This method will be called when the Application is about to exit.
 - **onLowMemory()**  
     This method will be called when there is low memory on the target device.