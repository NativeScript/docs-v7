---
nav-title: "Module application"
title: "Module application"
description: "Module application"
---
# Module: "application"

``` JavaScript
// To import the "application" module:
var application = require("application");
```

Object | Description
------|------------
[NativeScriptError](../application/NativeScriptError.md) | An extended JavaScript Error which will have the nativeError property initialized in case the error is caused by executing platform-specific code.
[ApplicationEventData](../application/ApplicationEventData.md) | Event data containing information for the application events.
[AndroidApplication](../application/AndroidApplication.md) | The abstraction of an Android-specific application object.
[iOSApplication](../application/iOSApplication.md) | The abstraction of an iOS-specific application object.

##### Variables
 - **launchEvent** - _String_.    
  String value used when hooking to launch event.
 - **uncaughtErrorEvent** - _String_.    
  String value used when hooking to uncaughtError event.
 - **suspendEvent** - _String_.    
  String value used when hooking to suspend event.
 - **resumeEvent** - _String_.    
  String value used when hooking to resume event.
 - **exitEvent** - _String_.    
  String value used when hooking to exitevent.
 - **lowMemoryEvent** - _String_.    
  String value used when hooking to lowMemory event.
 - **mainModule** - _String_.    
  The main page path (without the file extension) for the application starting from the application root. 
For example if you have page called "main.js" in a folder called "subFolder" and your root folder is "app" you can specify mainModule like this:
var application = require("application");
application.mainModule = "app/subFolder/main";
application.start();
 - **resources** - _Object_.    
  An application level static resources.
 - **cssFile** - _String_.    
  The application level css file name (starting from the application root). Used to set css across all pages.
Css will be applied for every page and page css will be applied after.
 - **cssSelectorsCache** - _Array_ of [_CssSelector_](../ui/styling/css-selector/CssSelector.md).    
  Cached css selectors created from the content of the css file.
 - **android** - [_AndroidApplication_](../application/AndroidApplication.md).    
  This is the Android-specific application object instance.
Encapsulates methods and properties specific to the Android platform.
Will be undefined when TargetOS is iOS.
 - **ios** - [_iOSApplication_](../application/iOSApplication.md).    
  This is the iOS-specific application object instance.
Encapsulates methods and properties specific to the iOS platform.
Will be undefined when TargetOS is Android.

##### Functions
 - **loadCss()**  
     Loads css file and parses to a css syntax tree.
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
     This method will be called when the Application is about to exitEvent.
 - **onLowMemory()**  
     This method will be called when there is low memory on the target device.
 - **on(** eventNames _String_, callback _Function_..., thisArg? _Object_ **)**  
     A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
   - **eventNames** - _String_  
     - String corresponding to events (e.g. "onLaunch"). Optionally could be used more events separated by `,` (e.g. "onLaunch", "onSuspend"). 
   - **callback** - _Function_(data _Object_)  
     - Callback function which will be executed when event is raised.
   - **thisArg** - _(optional)_ - _Object_  
     - An optional parameter which will be used as `this` context for callback execution.
 - **notify(** data [_ApplicationEventData_](../application/ApplicationEventData.md) **)**  
     Notifies all the registered listeners for the event provided in the data.eventName.
   - **data** - [_ApplicationEventData_](../application/ApplicationEventData.md)  
     The data associated with the event.
 - **hasListeners(** eventName _String_ **)** _Boolean_  
     Checks whether a listener is registered for the specified event name.
   - **eventName** - _String_  
     The name of the event to check for.
   - _**return**_ - _Boolean_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised on application launchEvent.
   - **event**
   - **callback** - _Function_(args _Object_)
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised when an uncaught error occurs while the application is running.
   - **event**
   - **callback** - _Function_(args _Object_)
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised when the Application is suspended.
   - **event**
   - **callback** - _Function_(args _Object_)
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised when the Application is resumed after it has been suspended.
   - **event**
   - **callback** - _Function_(args _Object_)
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised when the Application is about to exitEvent.
   - **event**
   - **callback** - _Function_(args _Object_)
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised when there is low memory on the target device.
   - **event**
   - **callback** - _Function_(args _Object_)
   - **thisArg** - _(optional)_ - _Object_