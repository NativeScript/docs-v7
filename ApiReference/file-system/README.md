---
nav-title: "Module file-system"
title: "Module file-system"
description: "Module file-system"
---
# Module: "file-system"

``` JavaScript
// To import the "file-system" module:
var file_system = require("file-system");
```

Class | Description
------|------------
[FileSystemEntity](../file-system/FileSystemEntity.md) | Represents a single entity on the file system.
[File](../file-system/File.md) | Represents a File entity on the file system.
[Folder](../file-system/Folder.md) | Represents a Folder (directory) entity on the file system.

Namespace | Description
------|------------
[knownFolders](../file-system/knownFolders/) | Provides access to the top-level Folders instances that are accessible from the application. Use these as entry points to access the FileSystem.
[path](../file-system/path/) | Enables path-specific operations like join, extension, etc.