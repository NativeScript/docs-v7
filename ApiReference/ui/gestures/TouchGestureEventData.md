---
nav-title: "Object ui/gestures.TouchGestureEventData"
title: "Object ui/gestures.TouchGestureEventData"
description: "Object ui/gestures.TouchGestureEventData"
---
## Object: "ui/gestures".TouchGestureEventData  
_Extends:_ [_GestureEventData_](../../ui/gestures/GestureEventData.md)  
Provides gesture event data.

##### Properties
 - **action** - _String_.    
  Gets action of the touch. Possible values: 'up', 'move', 'down', 'cancel'

##### Functions
 - **getX()** _Number_  
     Gets the X coordinate of this event inside the view that triggered the event.
   - _**return**_ - _Number_
 - **getY()** _Number_  
     Gets the Y coordinate of this event inside the view that triggered the event.
   - _**return**_ - _Number_
 - **getPointerCount()** _Number_  
     Gets the number of pointers in the event.
   - _**return**_ - _Number_
 - **getActivePointers()** __...  
     Gets the pointers that triggered the event.
Note: In Android there is aways only one active pointer.
   - _**return**_ - __ of [_Pointer_](../../ui/gestures/Pointer.md)
 - **getAllPointers()** __...  
     Gets all pointers.
   - _**return**_ - __ of [_Pointer_](../../ui/gestures/Pointer.md)