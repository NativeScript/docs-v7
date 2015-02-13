---
nav-title: "Class utils/utilsad.layout"
title: "Class utils/utilsad.layout"
description: "Class utils/utilsad.layout"
---
## Namespace: "utils/utils"ad.layout
Utility module related to android layout.

##### Variables
 - **MEASURED_STATE_TOO_SMALL** - _Number_.
 - **UNSPECIFIED** - _Number_.
 - **EXACTLY** - _Number_.
 - **AT_MOST** - _Number_.

##### Functions
 - **getMeasureSpecMode(** spec _Number_ **)** _Number_  
     Gets measure specification mode from a given specification.
   - **spec** - _Number_  
     - The measure specification.
   - _**return**_ - _Number_
 - **getMeasureSpecSize(** spec _Number_ **)** _Number_  
     Gets measure specification size from a given specification.
   - **spec** - _Number_  
     - The measure specification.
   - _**return**_ - _Number_
 - **makeMeasureSpec(** size _Number_, mode _Number_ **)** _Number_  
     Creates measure specification size from size and mode.
   - **size** - _Number_  
     - The size component of measure specification.
   - **mode** - _Number_  
     - The mode component of measure specification.
   - _**return**_ - _Number_
 - **getDisplayMetrics()** _Object_  
     Gets display metrics for the current device.
   - _**return**_ - _Object_
 - **getDisplayDensity()** _Number_  
     Gets display density for the current device.
   - _**return**_ - _Number_
 - **getDevicePixels(** independentPixels _Number_, context _Object_ **)** _Number_  
     Converts independent pixels to device pixels for a given android context.
   - **independentPixels** - _Number_  
     - Independent pixels value.
   - **context** - _Object_  
     - Android context (e.g. activity).
   - _**return**_ - _Number_
 - **getDeviceIndependentPixels(** devicePixels _Number_, context _Object_ **)** _Number_  
     Converts device pixels to independent pixels for a given android context.
   - **devicePixels** - _Number_  
     - Device pixels value.
   - **context** - _Object_  
     - Android context (e.g. activity).
   - _**return**_ - _Number_
 - **onMeasureNative(** widthMeasureSpec _Number_, heightMeasureSpec _Number_ **)**  
     Performs a native side measure of an UI element.
   - **widthMeasureSpec** - _Number_
   - **heightMeasureSpec** - _Number_
 - **onLayoutNative(** changed _Boolean_, left _Number_, top _Number_, right _Number_, bottom _Number_ **)**  
     Performs a native side layout to an UI element.
   - **changed** - _Boolean_
   - **left** - _Number_
   - **top** - _Number_
   - **right** - _Number_
   - **bottom** - _Number_