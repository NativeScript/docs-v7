---
nav-title: "Module utils/utils.layout"
title: "Module utils/utils.layout"
description: "Module utils/utils.layout"
---
## Namespace: "utils/utils".layout
Utility module related to layout.

##### Variables
 - **MEASURED_SIZE_MASK** - _Number_.    
  Bits that provide the actual measured size.
 - **MEASURED_STATE_MASK** - _Number_.
 - **MEASURED_STATE_TOO_SMALL** - _Number_.
 - **UNSPECIFIED** - _Number_.
 - **EXACTLY** - _Number_.
 - **AT_MOST** - _Number_.

##### Functions
 - **getMode(** mode _Number_ **)** _String_  
     Gets measure specification mode from a given specification as string.
   - **mode** - _Number_  
     - The measure specification mode.
   - _**return**_ - _String_
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
 - **getDisplayDensity()** _Number_  
     Gets display density for the current device.
   - _**return**_ - _Number_
 - **toDevicePixels(** value _Number_ **)** _Number_  
     Convert value to device pixels.
   - **value** - _Number_  
     - The pixel to convert.
   - _**return**_ - _Number_
 - **toDeviceIndependentPixels(** value _Number_ **)** _Number_  
     Convert value to device independent pixels.
   - **value** - _Number_  
     - The pixel to convert.
   - _**return**_ - _Number_