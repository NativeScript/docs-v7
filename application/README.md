# Module: "application"

``` JavaScript
// To import the "application" module:
var application = require("application");
```

**[How to "application"](HOW-TO.md)**


Object | Description
------|------------
[AndroidApplication](../application/AndroidApplication.md) | The abstraction of an Android-specific application object.
[iOSApplication](../application/iOSApplication.md) | The abstraction of an iOS-specific application object.

##### Variables
 - **android** - [_AndroidApplication_](../application/AndroidApplication.md).
 - **ios** - [_iOSApplication_](../application/iOSApplication.md).

##### Functions
 - **onLaunch()** _Object_  
     The main entry point event. This method is expected to return an instance of the root UI for the application.
This will be an Activity extends for Android and a RootViewController for iOS.
   - _**return**_ - _Object_
 - **onSuspend()**  
     This method will be called when the Application is suspended.
 - **onResume()**  
     This method will be called when the Application is resumed after it has been suspended.
 - **onExit()**  
     This method will be called when the Application is about to exit.
 - **onLowMemory()**  
     This method will be called when there is low memory on the target device.
 - **init(** nativeApp _Object_ **)**  
     Entry point for the module. Initializes the Application singleton and hooks application lifecycle events.
   - **nativeApp** - _Object_  
     The instance of the platform Application object - e.g. android.app.Application