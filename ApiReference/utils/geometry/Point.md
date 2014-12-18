---
nav-title: "Class utils/geometry.Point"
title: "Class utils/geometry.Point"
description: "Class utils/geometry.Point"
---
## Class: "utils/geometry".Point  
A class that represents an ordered pair of number x- and y-coordinates that defines a point in a two-dimensional plane.

##### Static Properties
 - **zero** - [_Point_](../../utils/geometry/Point.md).    
  Returns a Point that has X and Y values are set to zero.

##### Static Functions
 - **equals(** value1 [_Point_](../../utils/geometry/Point.md), value2 [_Point_](../../utils/geometry/Point.md) **)** _Boolean_  
     Compares two Point instances.
   - **value1** - [_Point_](../../utils/geometry/Point.md)  
     A Point to compare.
   - **value2** - [_Point_](../../utils/geometry/Point.md)  
     A Point to compare.
   - _**return**_ - _Boolean_

##### Instance Properties
 - **x** - _Number_.    
  Gets or sets the x-coordinate of this Point.
 - **y** - _Number_.    
  Gets or sets the y-coordinate of this Point.

##### Instance Functions
 - **equals(** value [_Point_](../../utils/geometry/Point.md) **)** _Boolean_  
     Specifies whether this Point contains the same coordinates as the specified Point.
   - **value** - [_Point_](../../utils/geometry/Point.md)  
     The Point to test.
   - _**return**_ - _Boolean_
 - **toString()** _String_  
     Returns a string representation of this Point instance.
   - _**return**_ - _String_