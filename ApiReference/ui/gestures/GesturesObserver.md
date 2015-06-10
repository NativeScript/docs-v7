---
nav-title: "Class ui/gestures.GesturesObserver"
title: "Class ui/gestures.GesturesObserver"
description: "Class ui/gestures.GesturesObserver"
---
## Class: "ui/gestures".GesturesObserver  
Provides options for the GesturesObserver.

##### Instance Properties
 - **type** - [_GestureTypes_](../../ui/gestures/GestureTypes.md).    
  Gesture type attached to the observer.
 - **callback** - _Function_(args [_GestureEventData_](../../ui/gestures/GestureEventData.md)).    
  A function that will be executed when a gesture is received.
 - **context** - _Object_.    
  A context which will be used as `this` in callback execution.
 - **androidOnTouchEvent** - _Function_(motionEvent _Object_).    
  An internal Android specific method used to pass the motion event to the correct gesture observer.

##### Instance Functions
 - **observe(** type [_GestureTypes_](../../ui/gestures/GestureTypes.md) **)**  
     Registers a gesture observer to a view and gesture.
   - **type** - [_GestureTypes_](../../ui/gestures/GestureTypes.md)  
     - Type of the gesture.
 - **disconnect()**  
     Disconnects the gesture observer.