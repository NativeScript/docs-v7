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
[AndroidApplication](../application/AndroidApplication.md) | The abstraction of an Android-specific application object.
[iOSApplication](../application/iOSApplication.md) | 

##### Variables
 - **mainModule** - _String_.
 - **android** - [_AndroidApplication_](../application/AndroidApplication.md).
 - **ios** - [_iOSApplication_](../application/iOSApplication.md).

##### Functions
 - **start()**
 - **onLaunch(** context _Object_ **)**  
     The main entry point event. This method is expected to use the root frame to navigate to the main application page.
   - **context** - _Object_
 - **onSuspend()**  
     This method will be called when the Application is suspended.
 - **onResume()**  
     This method will be called when the Application is resumed after it has been suspended.
 - **onExit()**  
     This method will be called when the Application is about to exit.
 - **onLowMemory()**  
     This method will be called when there is low memory on the target device.