---
nav-title: "Class file-system.path"
title: "Class file-system.path"
description: "Class file-system.path"
---
## Namespace: "file-system".path
Enables path-specific operations like join, extension, etc.

##### Variables
 - **separator** - _String_.    
  Gets the string used to separate file paths.

##### Functions
 - **normalize(** path _String_ **)** _String_  
     Normalizes a path, taking care of occurrances like ".." and "//".
   - **path** - _String_  
     The path to be normalized.
   - _**return**_ - _String_
 - **join(** ...paths Array of _String_ **)** _String_  
     Joins all the provided string components, forming a valid and normalized path.
   - **...paths** - Array of _String_  
     An array of string components to be joined.
   - _**return**_ - _String_