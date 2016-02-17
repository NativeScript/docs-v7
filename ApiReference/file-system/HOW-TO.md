---
nav-title: "file-system How-To"
title: "How-To"
description: "Examples for using file-system"
---
# File System
Using the file system requires the FileSystem module.
``` JavaScript
var fs = require("file-system");
```
The pre-required `fs` module is used throughout the following code snippets.
## Path
### Normalize a Path
``` JavaScript
var documents = fs.knownFolders.documents();
var testPath = "///test.txt";
// Get a normalized path such as <folder.path>/test.txt from <folder.path>///test.txt
var normalizedPath = fs.path.normalize(documents.path + testPath);
```
### Path Join
Concatenate a path to a file by providing multiple path arguments.
``` JavaScript
var documents = fs.knownFolders.documents();
// Generate a path like <documents.path>/myFiles/test.txt
var path = fs.path.join(documents.path, "myFiles", "test.txt");
```
### Get the Path Separator
``` JavaScript
// An OS dependent path separator, "\" or "/".
var separator = fs.path.separator;
```
### Get or Create a File With Path
The following example writes some text to a file created for path.
It will create a new file or overwrite an existing file.
``` JavaScript
var documents = fs.knownFolders.documents();
var path = fs.path.join(documents.path, "FileFromPath.txt");
var file = fs.File.fromPath(path);
// Writing text to the file.
file.writeText("Something")
    .then(function () {
    // Succeeded writing to the file.
}, function (error) {
    // Failed to write to the file.
});
```
### Get or Create a Folder With Path
``` JavaScript
var path = fs.path.join(fs.knownFolders.documents().path, "music");
var folder = fs.Folder.fromPath(path);
```
## Create
### Writing a string to a File
The following example writes some text to a file.
It will create a new file or overwrite an existing file.
``` JavaScript
var documents = fs.knownFolders.documents();
var file = documents.getFile("Test_Write.txt");
// Writing text to the file.
file.writeText("Something")
    .then(function () {
    // Succeeded writing to the file.
}, function (error) {
    // Failed to write to the file.
});
```
### Get or Create a File
``` JavaScript
var documents = fs.knownFolders.documents();
var file = documents.getFile("NewFileToCreate.txt");
```
### Get or Create a Folder
``` JavaScript
var documents = fs.knownFolders.documents();
var folder = documents.getFolder("NewFolderToCreate");
```
## Read
### Reading from a File
The following example writes some text to a file and then reads it back.
``` JavaScript
var documents = fs.knownFolders.documents();
var myFile = documents.getFile("Test_Write.txt");
var written;
// Writing text to the file.
myFile.writeText("Something")
    .then(function () {
    // Succeeded writing to the file.
    // Getting back the contents of the file.
    myFile.readText()
        .then(function (content) {
        // Successfully read the file's content.
    }, function (error) {
        // Failed to read from the file.
    });
}, function (error) {
    // Failed to write to the file.
});
```
### Reading/writing binary data from/to a File
``` JavaScript
var fileName = "logo.png";
var error;
var sourceFile = fs.File.fromPath(__dirname + "/" + fileName);
var destinationFile = fs.knownFolders.documents().getFile(fileName);
var source = sourceFile.readSync(function (e) { error = e; });
destinationFile.writeSync(source, function (e) { error = e; });
```
### Getting the Known Folders
Each app has several well known folders. This is how to access them:
``` JavaScript
// Getting the application's 'documents' folder.
var documents = fs.knownFolders.documents();
// Getting the application's 'temp' folder.
var temp = fs.knownFolders.temp();
```
### Getting Folder Contents
Getting all files and folders within a folder:
``` JavaScript
var documents = fs.knownFolders.documents();
documents.getEntities()
    .then(function (entities) {
    // entities is array with the document's files and folders.
    entities.forEach(function (entity) {
        console.log(entity.name);
    });
}, function (error) {
    // Failed to obtain folder's contents.
    globalConsole.error(error.message);
});
```
### Enumerating Folder Contents
Getting all folder entities in array may be slow with large number of files.
Enumerating the folder entities would iterate the files one by one without blocking the UI.
``` JavaScript
var documents = fs.knownFolders.documents();
documents.eachEntity(function (entity) {
    console.log(entity.name);
    // Return true to continue, or return false to stop the iteration.
    return true;
});
```
### Getting Parent Folder
``` JavaScript
var documents = fs.knownFolders.documents();
var file = documents.getFile("Test.txt");
// The parent folder of the file would be the documents folder.
var parent = file.parent;
```
### Getting File Name and Extension
``` JavaScript
var documents = fs.knownFolders.documents();
var file = documents.getFile("Test.txt");
// Getting the file name "Test.txt".
var fileName = file.name;
// Getting the file extension ".txt".
var fileExtension = file.extension;
```
### Checking if a File Exists
``` JavaScript
var documents = fs.knownFolders.documents();
var file = documents.getFile("Test.txt");
var exists = fs.File.exists(file.path);
```
### Checking if a Folder Exists
``` JavaScript
var documents = fs.knownFolders.documents();
var exists = fs.Folder.exists(documents.path);
```
## Update
### Renaming a File
``` JavaScript
var documents = fs.knownFolders.documents();
var file = documents.getFile("Test.txt");
file.rename("Test_renamed.txt")
    .then(function (result) {
    // Successfully Renamed.
}, function (error) {
    // Failed to rename the file.
});
```
### Renaming a Folder
``` JavaScript
var folder = fs.knownFolders.documents();
var myFolder = folder.getFolder("Test__");
myFolder.rename("Something")
    .then(function (result) {
    // Successfully Renamed.
}, function (error) {
    // Failed to rename the folder.
});
```
## Delete
### Removing a File
To 'delete', 'remove' or 'unlink' a file use the file's remove method:
``` JavaScript
var documents = fs.knownFolders.documents();
var file = documents.getFile("AFileToRemove.txt");
file.remove()
    .then(function (result) {
    // Success removing the file.
}, function (error) {
    // Failed to remove the file.
});
```
### Removing a Folder
``` JavaScript
var documents = fs.knownFolders.documents();
var file = documents.getFolder("AFolderToRemove");
// Remove a folder and recursively its content.
file.remove()
    .then(function (result) {
    // Success removing the folder.
}, function (error) {
    // Failed to remove the folder.
});
```
### Clearing the Contents of a Folder
The clear method removes all files within a folder.
``` JavaScript
var documents = fs.knownFolders.documents();
var folder = documents.getFolder("testFolderEmpty");
folder.clear()
    .then(function () {
    // Successfully cleared the folder.
}, function (error) {
    // Failed to clear the folder.
});
```
