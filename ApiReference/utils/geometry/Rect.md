---
nav-title: "Class utils/geometry.Rect"
title: "Class utils/geometry.Rect"
description: "Class utils/geometry.Rect"
---
## Class: "utils/geometry".Rect  
A class that describes the width, height, and location of a rectangle.

##### Static Properties
 - **empty** - [_Rect_](../../utils/geometry/Rect.md).    
  Returns a rectangle, which has X and Y property values of Number.PositiveInfinity, and has Width and Height property values of Number.NegativeInfinity

##### Static Functions
 - **equals(** value1 [_Rect_](../../utils/geometry/Rect.md), value2 [_Rect_](../../utils/geometry/Rect.md) **)** _Boolean_  
     Compares two Rect instances.
   - **value1** - [_Rect_](../../utils/geometry/Rect.md)  
     A Rect to compare.
   - **value2** - [_Rect_](../../utils/geometry/Rect.md)  
     A Rect to compare.
   - _**return**_ - _Boolean_

##### Instance Properties
 - **x** - _Number_.    
  Gets or sets the x-coordinate of this Point.
 - **y** - _Number_.    
  Gets or sets the y-coordinate of this Point.
 - **width** - _Number_.    
  Gets or sets the width of this Size.
 - **height** - _Number_.    
  Gets or sets the height of this Size.
 - **size** - [_Size_](../../utils/geometry/Size.md).    
  Gets or sets the width and height of the rectangle.
 - **origin** - [_Point_](../../utils/geometry/Point.md).    
  Gets or sets the position of the top - left corner of the rectangle.
 - **isEmpty** - _Boolean_.    
  Gets a value that indicates whether the rectangle is the Empty rectangle.

##### Instance Functions
 - **equals(** value [_Rect_](../../utils/geometry/Rect.md) **)** _Boolean_  
     Indicates whether the specified rectangle is equal to this Rect.
   - **value** - [_Rect_](../../utils/geometry/Rect.md)  
     A Rect instance to test.
   - _**return**_ - _Boolean_
 - **toString()** _String_  
     Returns a string representation of this Size instance.
   - _**return**_ - _String_