---
nav-title: "Class file-system.Folder"
title: "Class file-system.Folder"
description: "Class file-system.Folder"
---
## Class: "file-system".Folder  
_Inherits:_ [_FileSystemEntity_](../file-system/FileSystemEntity.md)  
Represents a Folder (directory) entity on the file system.

##### Static Functions
 - **fromPath(** path _String_ **)** [_Folder_](../file-system/Folder.md)  
     Gets or creates a Folder entity at the specified path.
   - **path** - _String_  
     The path to get/create the folder at.
   - _**return**_ - [_Folder_](../file-system/Folder.md)
 - **exists(** path _String_ **)** _Boolean_  
     Checks whether a Folder with the specified path already exists.
   - **path** - _String_  
     The path to check for.
   - _**return**_ - _Boolean_

##### Instance Properties
 - **isKnown** - _Boolean_.    
  Determines whether this instance is a KnownFolder (accessed through the KnownFolders object).

##### Instance Functions
 - **contains(** name _String_ **)** _Boolean_  
     Checks whether this Folder contains an Entity with the specified name.
The path of the folder is added to the name to resolve the complete path to check for.
   - **name** - _String_  
     The name of the entity to check for.
   - _**return**_ - _Boolean_
 - **clear()** _Promise_...  
     Deletes all the files and folders (recursively), contained within this Folder.
   - _**return**_ - _Promise_ of _Object_
 - **getFile(** name _String_ **)** [_File_](../file-system/File.md)  
     Gets or creates a File entity with the specified name within this Folder.
   - **name** - _String_  
     The name of the file to get/create.
   - _**return**_ - [_File_](../file-system/File.md)
 - **getFolder(** name _String_ **)** [_Folder_](../file-system/Folder.md)  
     Gets or creates a Folder entity with the specified name within this Folder.
   - **name** - _String_  
     The name of the folder to get/create.
   - _**return**_ - [_Folder_](../file-system/Folder.md)
 - **getEntities()** _Promise_...  
     Gets all the top-level entities residing within this folder.
   - _**return**_ - _Promise_ of _Array_ of [_FileSystemEntity_](../file-system/FileSystemEntity.md)
 - **eachEntity(** onEntity _Function_... **)**  
     Enumerates all the top-level FileSystem entities residing within this folder.
   - **onEntity** - _Function_(entity [_FileSystemEntity_](../file-system/FileSystemEntity.md)) _Boolean_  
     A callback that receives the current entity. If the callback returns false this will mean for the iteration to stop.