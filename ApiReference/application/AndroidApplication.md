---
nav-title: "Class application.AndroidApplication"
title: "Class application.AndroidApplication"
description: "Class application.AndroidApplication"
---
## Class: "application".AndroidApplication  
_Inherits:_ [_Observable_](../data/observable/Observable.md)  
The abstraction of an Android-specific application object.

##### Static Properties
 - **activityCreatedEvent** - _String_.    
  String value used when hooking to activityCreated event.
 - **activityDestroyedEvent** - _String_.    
  String value used when hooking to activityDestroyed event.
 - **activityStartedEvent** - _String_.    
  String value used when hooking to activityStarted event.
 - **activityPausedEvent** - _String_.    
  String value used when hooking to activityPaused event.
 - **activityResumedEvent** - _String_.    
  String value used when hooking to activityResumed event.
 - **activityStoppedEvent** - _String_.    
  String value used when hooking to activityStopped event.
 - **saveActivityStateEvent** - _String_.    
  String value used when hooking to saveActivityState event.
 - **activityResultEvent** - _String_.    
  String value used when hooking to activityResult event.
 - **activityBackPressedEvent** - _String_.    
  String value used when hooking to activityBackPressed event.

##### Instance Properties
 - **nativeApp** - _Object_.    
  The [android Application](http://developer.android.com/reference/android/app/Application.html) object instance provided to the init of the module.
 - **context** - _Object_.    
  The application's [android Context](http://developer.android.com/reference/android/content/Context.html) object instance.
 - **foregroundActivity** - _Object_.    
  The currently active (loaded) [android Activity](http://developer.android.com/reference/android/app/Activity.html). This property is automatically updated upon Activity events.
 - **currentContext** - _Object_.    
  The currently active (loaded) Context. This is typically the top-level Activity that is just created.
 - **startActivity** - _Object_.    
  The main (start) Activity for the application.
 - **packageName** - _String_.    
  The name of the application package.
 - **onActivityCreated** - _Function_(activity _Object_, bundle _Object_).    
  [Deprecated. Please use the respective event instead.] Direct handler of the [onActivityCreated method](http://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks.html).
 - **onActivityDestroyed** - _Function_(activity _Object_).    
  [Deprecated. Please use the respective event instead.] Direct handler of the [onActivityDestroyed method](http://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks.html).
 - **onActivityStarted** - _Function_(activity _Object_).    
  [Deprecated. Please use the respective event instead.] Direct handler of the [onActivityDestroyed method](http://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks.html).
 - **onActivityPaused** - _Function_(activity _Object_).    
  [Deprecated. Please use the respective event instead.] Direct handler of the [onActivityPaused method](http://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks.html).
 - **onActivityResumed** - _Function_(activity _Object_).    
  [Deprecated. Please use the respective event instead.] Direct handler of the [onActivityResumed method](http://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks.html).
 - **onActivityStopped** - _Function_(activity _Object_).    
  [Deprecated. Please use the respective event instead.] Direct handler of the [onActivityStopped method](http://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks.html).
 - **onSaveActivityState** - _Function_(activity _Object_, bundle _Object_).    
  [Deprecated. Please use the respective event instead.] Direct handler of the [onActivitySaveInstanceState method](http://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks.html).
 - **onActivityResult** - _Function_(requestCode _Number_, resultCode _Number_, data _Object_).    
  [Deprecated. Please use the respective event instead.] Direct handler of the onActivityResult method.

##### Instance Functions
 - **getActivity(** intent _Object_ **)** _Object_  
     This method is called by the JavaScript Bridge when navigation to a new activity is triggered.
   - **intent** - _Object_  
     - Native (android) intent used to create the activity.
Returns com.tns.NativeScriptActivity.extend implementation.
   - _**return**_ - _Object_
 - **on(** eventNames _String_, callback _Function_..., thisArg? _Object_ **)**  
     A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
   - **eventNames** - _String_  
     - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change"). 
   - **callback** - _Function_(data [_AndroidActivityEventData_](../application/AndroidActivityEventData.md))  
     - Callback function which will be executed when event is raised.
   - **thisArg** - _(optional)_ - _Object_  
     - An optional parameter which will be used as `this` context for callback execution.
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised on android application ActivityCreated.
   - **event**
   - **callback** - _Function_(args [_AndroidActivityBundleEventData_](../application/AndroidActivityBundleEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised on android application ActivityDestroyed.
   - **event**
   - **callback** - _Function_(args [_AndroidActivityEventData_](../application/AndroidActivityEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised on android application ActivityStarted.
   - **event**
   - **callback** - _Function_(args [_AndroidActivityEventData_](../application/AndroidActivityEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised on android application ActivityPaused.
   - **event**
   - **callback** - _Function_(args [_AndroidActivityEventData_](../application/AndroidActivityEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised on android application ActivityResumed.
   - **event**
   - **callback** - _Function_(args [_AndroidActivityEventData_](../application/AndroidActivityEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised on android application ActivityStopped.
   - **event**
   - **callback** - _Function_(args [_AndroidActivityEventData_](../application/AndroidActivityEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised on android application SaveActivityState.
   - **event**
   - **callback** - _Function_(args [_AndroidActivityBundleEventData_](../application/AndroidActivityBundleEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised on android application ActivityResult.
   - **event**
   - **callback** - _Function_(args [_AndroidActivityResultEventData_](../application/AndroidActivityResultEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     This event is raised on the back button is pressed in an android application.
   - **event**
   - **callback** - _Function_(args [_AndroidActivityBackPressedEventData_](../application/AndroidActivityBackPressedEventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **registerBroadcastReceiver(** intentFilter _String_, onReceiveCallback _Function_... **)**  
     Register a BroadcastReceiver to be run in the main activity thread. The receiver will be called with any broadcast Intent that matches filter, in the main application thread. 
For more information, please visit 'http://developer.android.com/reference/android/content/Context.html#registerReceiver%28android.content.BroadcastReceiver,%20android.content.IntentFilter%29'
   - **intentFilter** - _String_  
     A string containing the intent filter.
   - **onReceiveCallback** - _Function_(context _Object_, intent _Object_)  
     A callback function that will be called each time the receiver receives a broadcast.
 - **unregisterBroadcastReceiver(** intentFilter _String_ **)**  
     Unregister a previously registered BroadcastReceiver. 
For more information, please visit 'http://developer.android.com/reference/android/content/Context.html#unregisterReceiver(android.content.BroadcastReceiver)'
   - **intentFilter** - _String_  
     A string containing the intent filter with which the receiver was originally registered.