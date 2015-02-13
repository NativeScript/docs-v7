---
nav-title: "Class ui/gestures"
title: "Class ui/gestures"
description: "Class ui/gestures"
---
# Module: "ui/gestures"

``` JavaScript
// To import the "ui/gestures" module:
var uigestures = require("ui/gestures");
```

Class | Description
------|------------
[GesturesObserver](../../ui/gestures/GesturesObserver.md) | Provides options for the GesturesObserver.

Enum | Description
------|------------
[GestureTypes](../../ui/gestures/GestureTypes.md) | Defines an enum with supported gesture types.
[SwipeDirection](../../ui/gestures/SwipeDirection.md) | Defines an enum for swipe gesture direction.

Object | Description
------|------------
[GestureEventData](../../ui/gestures/GestureEventData.md) | Provides gesture event data.
[PinchGestureEventData](../../ui/gestures/PinchGestureEventData.md) | Provides gesture event data for pinch gesture.
[SwipeGestureEventData](../../ui/gestures/SwipeGestureEventData.md) | Provides gesture event data for swipe gesture.
[PanGestureEventData](../../ui/gestures/PanGestureEventData.md) | Provides gesture event data for pan gesture.
[RotationGestureEventData](../../ui/gestures/RotationGestureEventData.md) | Provides gesture event data for rotation gesture.

##### Functions
 - **observe(** target [_View_](../../ui/core/view/View.md), type [_GestureTypes_](../../ui/gestures/GestureTypes.md), callback _Function_... **)** [_GesturesObserver_](../../ui/gestures/GesturesObserver.md)  
     A short-hand function that is used to create a gesture observer for a view and gesture.
   - **target** - [_View_](../../ui/core/view/View.md)  
     - View which will be watched for originating a specific gesture.
   - **type** - [_GestureTypes_](../../ui/gestures/GestureTypes.md)  
     - Type of the gesture.
   - **callback** - _Function_(args [_GestureEventData_](../../ui/gestures/GestureEventData.md))  
     - A function that will be executed when a gesture is received.
   - _**return**_ - [_GesturesObserver_](../../ui/gestures/GesturesObserver.md)
 - **toString(** type [_GestureTypes_](../../ui/gestures/GestureTypes.md), separator? _String_ **)** _String_  
     Returns a string representation of a gesture type.
   - **type** - [_GestureTypes_](../../ui/gestures/GestureTypes.md)  
     - Type of the gesture.
   - **separator** - _(optional)_ - _String_
   - _**return**_ - _String_
 - **fromString(** type _String_ **)** [_GestureTypes_](../../ui/gestures/GestureTypes.md)  
     Returns a gesture type enum value from a string (case insensitive).
   - **type** - _String_  
     - A string representation of a gesture type (e.g. Tap).
   - _**return**_ - [_GestureTypes_](../../ui/gestures/GestureTypes.md)