---
nav-title: "Class utils/geometry.Thickness"
title: "Class utils/geometry.Thickness"
description: "Class utils/geometry.Thickness"
---
## Class: "utils/geometry".Thickness  
A class describes the thickness of a frame around a rectangle. Four number values describe the Left, Top, Right, and Bottom sides of the rectangle, respectively.

##### Static Functions
 - **equals(** value1 [_Thickness_](../../utils/geometry/Thickness.md), value2 [_Thickness_](../../utils/geometry/Thickness.md) **)** _Boolean_  
     Compares two Thickness instances.
   - **value1** - [_Thickness_](../../utils/geometry/Thickness.md)  
     A Thickness to compare.
   - **value2** - [_Thickness_](../../utils/geometry/Thickness.md)  
     A Thickness to compare.
   - _**return**_ - _Boolean_
 - **convert(** value _Object_ **)** [_Thickness_](../../utils/geometry/Thickness.md)  
     Converts a string (or strings separated by comma) to a valid Thickness instance.
   - **value** - _Object_  
     A string or strings separated by comma which will be converted as left, top, right, bottom.
   - _**return**_ - [_Thickness_](../../utils/geometry/Thickness.md)

##### Instance Properties
 - **left** - _Number_.    
  Gets or sets the width, in pixels, of the left side of the bounding rectangle.
 - **top** - _Number_.    
  Gets or sets the width, in pixels, of the upper side of the bounding rectangle.
 - **right** - _Number_.    
  Gets or sets the width, in pixels, of the right side of the bounding rectangle.
 - **bottom** - _Number_.    
  Gets or sets the width, in pixels, of the lower side of the bounding rectangle.

##### Instance Functions
 - **equals(** value [_Thickness_](../../utils/geometry/Thickness.md) **)** _Boolean_  
     Indicates that specified Thickness instance is equal to this Thickness.
   - **value** - [_Thickness_](../../utils/geometry/Thickness.md)  
     A Thickness instance to test.
   - _**return**_ - _Boolean_
 - **toString()** _String_  
     Returns a string representation of this Size instance.
   - _**return**_ - _String_