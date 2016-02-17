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

Class | Description
------|------------
[AndroidApplication](../application/AndroidApplication.md) | The abstraction of an Android-specific application object.

Object | Description
------|------------
[NativeScriptError](../application/NativeScriptError.md) | An extended JavaScript Error which will have the nativeError property initialized in case the error is caused by executing platform-specific code.
[ApplicationEventData](../application/ApplicationEventData.md) | Event data containing information for the application events.
[LaunchEventData](../application/LaunchEventData.md) | Event data containing information for launch event.
[OrientationChangedEventData](../application/OrientationChangedEventData.md) | Event data containing information for orientation changed event.
[AndroidActivityEventData](../application/AndroidActivityEventData.md) | Data for the Android activity events.
[AndroidActivityBundleEventData](../application/AndroidActivityBundleEventData.md) | Data for the Android activity events with bundle.
[AndroidActivityResultEventData](../application/AndroidActivityResultEventData.md) | Data for the Android activity result event.
[AndroidActivityBackPressedEventData](../application/AndroidActivityBackPressedEventData.md) | Data for the Android activity back pressed event.
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
 - **orientationChangedEvent** - _String_.    
  String value used when hooking to orientationChanged event.
 - **mainModule** - _String_.    
  The main page path (without the file extension) for the application starting from the application root. 
For example if you have page called "main.js" in a folder called "subFolder" and your root folder is "app" you can specify mainModule like this:
var application = require("application");
application.mainModule = "app/subFolder/main";
application.start();
 - **mainEntry** - [_NavigationEntry_](../ui/frame/NavigationEntry.md).    
  The main navigation entry to be used when loading the main Page.
 - **resources** - _Object_.    
  An application level static resources.
 - **cssFile** - _String_.    
  The application level css file name (starting from the application root). Used to set css across all pages.
Css will be applied for every page and page css will be applied after.
 - **cssSelectorsCache** - __ of [_CssSelector_](../ui/styling/css-selector/CssSelector.md).    
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
 - **loadCss(** cssFile? _String_ **)** __...  
     Loads css file and parses to a css syntax tree.
   - **cssFile** - _(optional)_ - _String_  
     Optional parameter to point to an arbitrary css file. If not specified, the cssFile property is used.
   - _**return**_ - __ of [_CssSelector_](../ui/styling/css-selector/CssSelector.md)
 - **start(** entry? [_NavigationEntry_](../ui/frame/NavigationEntry.md) **)**  
     Call this method to start the application. Important: All code after this method call will not be executed!
   - **entry** - _(optional)_ - [_NavigationEntry_](../ui/frame/NavigationEntry.md)
 - **onLaunch(** context? _Object_ **)**  
     The main entry point event. This method is expected to use the root frame to navigate to the main application page.
   - **context** - _(optional)_ - _Object_
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
 - **off(** eventNames _String_, callback? _Object_, thisArg? _Object_ **)**  
     Shortcut alias to the removeEventListener method.
   - **eventNames** - _String_  
     - String corresponding to events (e.g. "onLaunch").
   - **callback** - _(optional)_ - _Object_  
     - Callback function which will be removed.
   - **thisArg** - _(optional)_ - _Object_  
     - An optional parameter which will be used as `this` context for callback execution.
 - **notify(** data _Object_ **)**  
     Notifies all the registered listeners for the event provided in the data.eventName.
   - **data** - _Object_  
     The data associated with the event.
 - **hasListeners(** eventName _String_ **)** _Boolean_  
     Checks whether a listener is registered for the specified event name.
   - **eventName** - _String_  
     The name of the event to check for.
   - _**return**_ - _Boolean_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised on application launchEvent.
   - **event**
   - **callback** - _Function_(args [_LaunchEventData_](../application/LaunchEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised when the Application is suspended.
   - **event**
   - **callback** - _Function_(args [_ApplicationEventData_](../application/ApplicationEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised when the Application is resumed after it has been suspended.
   - **event**
   - **callback** - _Function_(args [_ApplicationEventData_](../application/ApplicationEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised when the Application is about to exitEvent.
   - **event**
   - **callback** - _Function_(args [_ApplicationEventData_](../application/ApplicationEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised when there is low memory on the target device.
   - **event**
   - **callback** - _Function_(args [_ApplicationEventData_](../application/ApplicationEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised when an uncaught error occurs while the application is running.
   - **event**
   - **callback** - _Function_(args [_ApplicationEventData_](../application/ApplicationEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised the orientation of the current device has changed.
   - **event**
   - **callback** - _Function_(args [_OrientationChangedEventData_](../application/OrientationChangedEventData.md))
   - **thisArg** - _(optional)_ - _Object_