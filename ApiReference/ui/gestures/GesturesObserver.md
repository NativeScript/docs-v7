---
nav-title: "Class ui/gestures.GesturesObserver"
title: "Class ui/gestures.GesturesObserver"
description: "Class ui/gestures.GesturesObserver"
---
## Class: "ui/gestures".GesturesObserver  
Provides options for the GesturesObserver.

##### Instance Functions
 - **observe(** target [_View_](../../ui/core/view/View.md), type [_GestureTypes_](../../ui/gestures/GestureTypes.md) **)**  
     Registers a gesture observer to a view and gesture.
   - **target** - [_View_](../../ui/core/view/View.md)  
     - View which will be watched for originating a specific gesture.
   - **type** - [_GestureTypes_](../../ui/gestures/GestureTypes.md)  
     - Type of the gesture.
 - **disconnect()**  
     Disconnects the gesture observer.