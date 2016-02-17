---
nav-title: "Class utils/debug.Source"
title: "Class utils/debug.Source"
description: "Class utils/debug.Source"
---
## Class: "utils/debug".Source  
A class encapsulating information for source code origin.

##### Static Functions
 - **get(** object _Object_ **)** [_Source_](../../utils/debug/Source.md)  
     Get the source of an object.
   - **object** - _Object_
   - _**return**_ - [_Source_](../../utils/debug/Source.md)
 - **set(** object _Object_, src [_Source_](../../utils/debug/Source.md) **)**  
     Set the source of an object.
   - **object** - _Object_
   - **src** - [_Source_](../../utils/debug/Source.md)

##### Instance Properties
 - **uri** - _String_.    
  Gets the URI of the source document;
 - **line** - _Number_.    
  Gets the line in the source document.
 - **column** - _Number_.    
  Gets the position in the source document.