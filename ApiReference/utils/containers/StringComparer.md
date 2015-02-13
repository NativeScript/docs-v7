---
nav-title: "Class utils/containers.StringComparer"
title: "Class utils/containers.StringComparer"
description: "Class utils/containers.StringComparer"
---
## Class: "utils/containers".StringComparer  
_Conform to:_ [_IEqualityComparer_](../../utils/containers/IEqualityComparer.md) of _String_  
An implementation of IEqualityComparer that works with strings.

##### Instance Functions
 - **equals(** x _String_, y _String_ **)** _Boolean_  
     Compares two strings.
   - **x** - _String_  
     - First string to compare.
   - **y** - _String_  
     - Second string to compare.
Returns true if strings are equal, otherwise false.
   - _**return**_ - _Boolean_
 - **getHashCode(** str _String_ **)** _Number_  
     Generates an unique hash code for a string.
   - **str** - _String_
   - _**return**_ - _Number_