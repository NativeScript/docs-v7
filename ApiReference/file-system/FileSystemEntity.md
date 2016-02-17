---
nav-title: "Class file-system.FileSystemEntity"
title: "Class file-system.FileSystemEntity"
description: "Class file-system.FileSystemEntity"
---
## Class: "file-system".FileSystemEntity  
Represents a single entity on the file system.

##### Instance Properties
 - **lastModified** - _Object_.    
  Gets the Date object specifying the last time this entity was modified.
 - **name** - _String_.    
  Gets the name of the entity.
 - **path** - _String_.    
  Gets the fully-qualified path (including the extension for a File) of the entity.
 - **parent** - [_Folder_](../file-system/Folder.md).    
  Gets the Folder object representing the parent of this entity. 
Will be null for a root folder like Documents or Temporary.
This property is readonly.

##### Instance Functions
 - **remove()** _Promise_...  
     Removes (deletes) the current Entity from the file system.
   - _**return**_ - _Promise_ of _Object_
 - **removeSync(** onError? _Function_... **)**  
     Removes (deletes) the current Entity from the file system synchronously.
   - **onError** - _(optional)_ - _Function_(error _Object_) _Object_
 - **rename(** newName _String_ **)** _Promise_...  
     Renames the current entity using the specified name.
   - **newName** - _String_  
     The new name to be applied to the entity.
   - _**return**_ - _Promise_ of _Object_
 - **renameSync(** newName _String_, onError? _Function_... **)**  
     Renames the current entity synchronously, using the specified name.
   - **newName** - _String_  
     The new name to be applied to the entity.
   - **onError** - _(optional)_ - _Function_(error _Object_) _Object_