---
nav-title: "Object utils/containers.IEqualityComparer"
title: "Object utils/containers.IEqualityComparer"
description: "Object utils/containers.IEqualityComparer"
---
## Object: "utils/containers".IEqualityComparer  
_Type parameters:_ _**T**_  
An interface used to compare two instances of a same class.

##### Functions
 - **equals(** x _T_, y _T_ **)** _Boolean_  
     Compares two instances of a same class.
   - **x** - _T_  
     - First object to compare.
   - **y** - _T_  
     - Second object to compare.
Returns true if objects are equal, otherwise false.
   - _**return**_ - _Boolean_
 - **getHashCode(** obj _T_ **)** _Number_  
     Generates an unique hash code for an object instance.
   - **obj** - _T_
   - _**return**_ - _Number_