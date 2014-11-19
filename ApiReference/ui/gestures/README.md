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
[GestureTypes](../../ui/gestures/GestureTypes.md) | 
[SwipeDirection](../../ui/gestures/SwipeDirection.md) | 

Object | Description
------|------------
[GestureEventData](../../ui/gestures/GestureEventData.md) | 
[PinchGestureEventData](../../ui/gestures/PinchGestureEventData.md) | 
[SwipeGestureEventData](../../ui/gestures/SwipeGestureEventData.md) | 
[RotationGestureEventData](../../ui/gestures/RotationGestureEventData.md) | 

##### Functions
 - **observe(** target [_View_](../../ui/core/view/View.md), type [_GestureTypes_](../../ui/gestures/GestureTypes.md), callback _Function_... **)** [_GesturesObserver_](../../ui/gestures/GesturesObserver.md)
   - **target** - [_View_](../../ui/core/view/View.md)
   - **type** - [_GestureTypes_](../../ui/gestures/GestureTypes.md)
   - **callback** - _Function_(args [_GestureEventData_](../../ui/gestures/GestureEventData.md))
   - _**return**_ - [_GesturesObserver_](../../ui/gestures/GesturesObserver.md)
 - **toString(** type [_GestureTypes_](../../ui/gestures/GestureTypes.md), separator? _String_ **)** _String_
   - **type** - [_GestureTypes_](../../ui/gestures/GestureTypes.md)
   - **separator** - _(optional)_ - _String_
   - _**return**_ - _String_
 - **fromString(** type _String_ **)** [_GestureTypes_](../../ui/gestures/GestureTypes.md)
   - **type** - _String_
   - _**return**_ - [_GestureTypes_](../../ui/gestures/GestureTypes.md)