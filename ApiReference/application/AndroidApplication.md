---
nav-title: "Interface application.AndroidApplication"
title: "Interface application.AndroidApplication"
description: "Interface application.AndroidApplication"
---
## Object: "application".AndroidApplication  
The abstraction of an Android-specific application object.

##### Properties
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
  Direct handler of the [onActivityCreated method](http://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks.html).
 - **onActivityDestroyed** - _Function_(activity _Object_).    
  Direct handler of the [onActivityDestroyed method](http://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks.html).
 - **onActivityStarted** - _Function_(activity _Object_).    
  Direct handler of the [onActivityDestroyed method](http://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks.html).
 - **onActivityPaused** - _Function_(activity _Object_).    
  Direct handler of the [onActivityPaused method](http://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks.html).
 - **onActivityResumed** - _Function_(activity _Object_).    
  Direct handler of the [onActivityResumed method](http://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks.html).
 - **onActivityStopped** - _Function_(activity _Object_).    
  Direct handler of the [onActivityStopped method](http://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks.html).
 - **onSaveActivityState** - _Function_(activity _Object_, bundle _Object_).    
  Direct handler of the [onActivitySaveInstanceState method](http://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks.html).
 - **onActivityResult** - _Function_(requestCode _Number_, resultCode _Number_, data _Object_).    
  Direct handler of the onActivityResult method.

##### Functions
 - **getActivity(** intent _Object_ **)** _Object_  
     This method is called by the JavaScript Bridge when navigation to a new activity is triggered.
   - **intent** - _Object_  
     - Native (android) intent used to create the activity.
Returns com.tns.NativeScriptActivity.extend implementation.
   - _**return**_ - _Object_