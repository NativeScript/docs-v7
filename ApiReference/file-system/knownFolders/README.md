---
nav-title: "Module file-system.knownFolders"
title: "Module file-system.knownFolders"
description: "Module file-system.knownFolders"
---
## Namespace: "file-system".knownFolders
Provides access to the top-level Folders instances that are accessible from the application. Use these as entry points to access the FileSystem.

##### Functions
 - **documents()** [_Folder_](../../file-system/Folder.md)  
     Gets the Documents folder available for the current application. This Folder is private for the application and not accessible from Users/External apps.
   - _**return**_ - [_Folder_](../../file-system/Folder.md)
 - **temp()** [_Folder_](../../file-system/Folder.md)  
     Gets the Temporary (Caches) folder available for the current application. This Folder is private for the application and not accessible from Users/External apps.
   - _**return**_ - [_Folder_](../../file-system/Folder.md)
 - **currentApp()** [_Folder_](../../file-system/Folder.md)  
     Gets the root folder for the current application. This Folder is private for the application and not accessible from Users/External apps.
   - _**return**_ - [_Folder_](../../file-system/Folder.md)