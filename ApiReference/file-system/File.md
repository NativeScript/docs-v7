---
nav-title: "Class file-system.File"
title: "Class file-system.File"
description: "Class file-system.File"
---
## Class: "file-system".File  
_Inherits:_ [_FileSystemEntity_](../file-system/FileSystemEntity.md)  
Represents a File entity on the file system.

##### Static Functions
 - **exists(** path _String_ **)** _Boolean_  
     Checks whether a File with the specified path already exists.
   - **path** - _String_  
     The path to check for.
   - _**return**_ - _Boolean_
 - **fromPath(** path _String_ **)** [_File_](../file-system/File.md)  
     Gets or creates a File entity at the specified path.
   - **path** - _String_  
     The path to get/create the file at.
   - _**return**_ - [_File_](../file-system/File.md)

##### Instance Properties
 - **extension** - _String_.    
  Gets the extension of the file.
 - **isLocked** - _Boolean_.    
  Gets a value indicating whether the file is currently locked, meaning a background operation associated with this file is running.

##### Instance Functions
 - **readText(** encoding? _String_ **)** _Promise_...  
     Reads the content of the file as a string using the specified encoding (defaults to UTF-8).
   - **encoding** - _(optional)_ - _String_  
     An optional value specifying the preferred encoding (defaults to UTF-8).
   - _**return**_ - _Promise_ of _String_
 - **writeText(** content _String_, encoding? _String_ **)** _Promise_...  
     Writes the provided string to the file, using the specified encoding (defaults to UTF-8).
   - **content** - _String_  
     The content to be saved to the file.
   - **encoding** - _(optional)_ - _String_  
     An optional value specifying the preferred encoding (defaults to UTF-8).
   - _**return**_ - _Promise_ of _Object_