---
nav-title: "Class file-system/file-system-access.FileSystemAccess"
title: "Class file-system/file-system-access.FileSystemAccess"
description: "Class file-system/file-system-access.FileSystemAccess"
---
## Class: "file-system/file-system-access".FileSystemAccess  
An utility class used to provide methods to access and work with the file system.

##### Instance Functions
 - **getLastModified(** path _String_ **)** _Date_  
     Gets the last modified date of a file with a given path.
   - **path** - _String_  
     Path to the file.
   - _**return**_ - _Date_
 - **getParent(** path _String_, onError? _Function_... **)** {}...  
     Gets the parent folder of a file with a given path.
   - **path** - _String_  
     Path to the file.
   - **onError** - _(optional)_ - _Function_(error _Object_) _Object_  
     A callback function to use if any error occurs.
Returns path Absolute path of the parent folder, name Name of the parent folder.
   - _**return**_ - { path: _String_, name: _String_ }
 - **getFile(** path _String_, onError? _Function_... **)** {}...  
     Gets a file from a given path.
   - **path** - _String_  
     Path to the file.
   - **onError** - _(optional)_ - _Function_(error _Object_) _Object_  
     A callback function to use if any error occurs.
Returns path Absolute path of the file, name Name of the file, extension Extension of the file.
   - _**return**_ - { path: _String_, name: _String_, extension: _String_ }
 - **getFolder(** path _String_, onError? _Function_... **)** {}...  
     Gets the folder of a file with a given path.
   - **path** - _String_  
     Path to the file.
   - **onError** - _(optional)_ - _Function_(error _Object_) _Object_  
     A callback function to use if any error occurs.
Returns path Absolute path of the folder, name Name of the folder.
   - _**return**_ - { path: _String_, name: _String_ }
 - **getEntities(** path _String_, onSuccess _Function_..., onError? _Function_... **)**  
     Gets all entities of a given path (folder)
   - **path** - _String_
   - **onSuccess** - _Function_(files _Array_ of { path: _String_, name: _String_, extension: _String_ }) _Object_  
     A callback function to call if operation is successful
   - **onError** - _(optional)_ - _Function_(error _Object_) _Object_  
     (optional) A callback function to use if any error occurs.
 - **eachEntity(** path _String_, onSuccess _Function_..., onError? _Function_... **)**  
     Performs an action onSuccess for every entity in a folder with a given path.
Breaks the loop if onSuccess function returns false
   - **path** - _String_
   - **onSuccess** - _Function_(entity { path: _String_, name: _String_, extension: _String_ }) _Boolean_  
     A callback function which is called for each entity.
   - **onError** - _(optional)_ - _Function_(error _Object_) _Object_  
     (optional) A callback function to use if any error occurs.
 - **fileExists(** path _String_ **)** _Boolean_  
     Checks if a file with a given path exist.
   - **path** - _String_
   - _**return**_ - _Boolean_
 - **folderExists(** path _String_ **)** _Boolean_  
     Checks if a folder with a given path exist.
   - **path** - _String_
   - _**return**_ - _Boolean_
 - **deleteFile(** path _String_, onSuccess? _Function_..., onError? _Function_... **)**  
     Deletes a file with a given path.
   - **path** - _String_  
     Path of the file.
   - **onSuccess** - _(optional)_ - _Function_() _Object_  
     (optional) A callback function which will be executed if the deletion is successful.
   - **onError** - _(optional)_ - _Function_(error _Object_) _Object_  
     (optional) A callback function to use if any error occurs.
 - **deleteFolder(** path _String_, isKnown _Boolean_, onSuccess? _Function_..., onError? _Function_... **)**  
     Deletes a folder with a given path.
   - **path** - _String_  
     Path of the folder.
   - **isKnown** - _Boolean_
   - **onSuccess** - _(optional)_ - _Function_() _Object_  
     (optional) A callback function which will be executed if the deletion is successful.
   - **onError** - _(optional)_ - _Function_(error _Object_) _Object_  
     (optional) A callback function to use if any error occurs.
 - **emptyFolder(** path _String_, onSuccess? _Function_..., onError? _Function_... **)**  
     Deletes a content of a folder with a given path.
   - **path** - _String_  
     Path of the folder.
   - **onSuccess** - _(optional)_ - _Function_() _Object_  
     (optional) A callback function which will be executed if the deletion is successful.
   - **onError** - _(optional)_ - _Function_(error _Object_) _Object_  
     (optional) A callback function to use if any error occurs.
 - **rename(** path _String_, newPath _String_, onSuccess? _Function_..., onError? _Function_... **)**  
     Rename a file or a folder with a given path.
   - **path** - _String_  
     Current path of the entity which should be renamed.
   - **newPath** - _String_  
     The new path which will be asigned of the entity.
   - **onSuccess** - _(optional)_ - _Function_() _Object_  
     (optional) A callback function which will be executed if the deletion is successful.
   - **onError** - _(optional)_ - _Function_(error _Object_) _Object_  
     (optional) A callback function to use if any error occurs.
 - **getDocumentsFolderPath()** _String_  
     Gets the special documents folder.
Returns for Android: "/data/data/applicationPackageName/files", iOS: "/var/mobile/Applications/appID/Documents"
   - _**return**_ - _String_
 - **getTempFolderPath()** _String_  
     Gets the special documents folder.
Returns for Android: "/data/data/applicationPackageName/cache", iOS: "/var/mobile/Applications/appID/Library/Caches"
   - _**return**_ - _String_
 - **readText(** path _String_, onSuccess _Function_..., onError? _Function_..., encoding? _Object_ **)**  
     Reads a text from a file with a given path.
   - **path** - _String_  
     The path to the source file.
   - **onSuccess** - _Function_(content _String_) _Object_  
     A callback function which is called when a text is red.
   - **onError** - _(optional)_ - _Function_(error _Object_) _Object_  
     (optional) A callback function to use if any error occurs.
   - **encoding** - _(optional)_ - _Object_  
     (optional) If set reads the text with the specified encoding (default UTF-8).
 - **writeText(** path _String_, content _String_, onSuccess? _Function_..., onError? _Function_..., encoding? _Object_ **)**  
     Writes a text to a file with a given path.
   - **path** - _String_  
     The path to the source file.
   - **content** - _String_  
     The content which will be written to the file.
   - **onSuccess** - _(optional)_ - _Function_() _Object_  
     (optional) A callback function which is called when a text is written.
   - **onError** - _(optional)_ - _Function_(error _Object_) _Object_  
     (optional) A callback function to use if any error occurs.
   - **encoding** - _(optional)_ - _Object_  
     (optional) If set writes the text with the specified encoding (default UTF-8).
 - **getFileExtension(** path _String_ **)** _String_  
     Gets extension of the file with a given path.
   - **path** - _String_  
     A path to the file.
   - _**return**_ - _String_
 - **getPathSeparator()** _String_  
     Gets the path separator (for the current platform).
   - _**return**_ - _String_
 - **normalizePath(** path _String_ **)** _String_  
     Normalizes a path.
   - **path** - _String_  
     A path which should be normalized.
Returns a normalized path as string.
   - _**return**_ - _String_
 - **joinPath(** left _String_, right _String_ **)** _String_  
     Join two paths (without normalize) only removes some trailing and dublicating path separators.
   - **left** - _String_  
     First path to join.
   - **right** - _String_  
     Second path to join.
   - _**return**_ - _String_
 - **joinPaths(** paths Array of _String_ **)** _String_  
     Joins an array of file paths.
   - **paths** - Array of _String_
   - _**return**_ - _String_