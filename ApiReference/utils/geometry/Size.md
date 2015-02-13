---
nav-title: "Class utils/geometry.Size"
title: "Class utils/geometry.Size"
description: "Class utils/geometry.Size"
---
## Class: "utils/geometry".Size  
A class that is used to describe the Size (by width and height) of an object.

##### Static Properties
 - **zero** - [_Size_](../../utils/geometry/Size.md).    
  Returns an instance of Size with width and height set to 0.
 - **empty** - [_Size_](../../utils/geometry/Size.md).    
  Returns an instance of Size with width and height set to 0.

##### Static Functions
 - **equals(** value1 [_Size_](../../utils/geometry/Size.md), value2 [_Size_](../../utils/geometry/Size.md) **)** _Boolean_  
     Compares two Size instances.
   - **value1** - [_Size_](../../utils/geometry/Size.md)  
     A Size to compare.
   - **value2** - [_Size_](../../utils/geometry/Size.md)  
     A Size to compare.
   - _**return**_ - _Boolean_

##### Instance Properties
 - **width** - _Number_.    
  Gets or sets the width of this Size.
 - **height** - _Number_.    
  Gets or sets the height of this Size.
 - **isEmpty** - _Boolean_.    
  Returns a boolean value indicating that this Size is empty (width and height are 0).

##### Instance Functions
 - **equals(** value [_Size_](../../utils/geometry/Size.md) **)** _Boolean_  
     Compares an object to an instance of Size for equality.
   - **value** - [_Size_](../../utils/geometry/Size.md)  
     The Size to test.
   - _**return**_ - _Boolean_
 - **toString()** _String_  
     Returns a string representation of this Size instance.
   - _**return**_ - _String_