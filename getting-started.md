---
nav-title: "Getting Started With NativeScript"
title: "Getting Started With NativeScript"
description: "NativeScript Documentation: Getting Started"
position: 11
---

# Getting Started With NativeScript
NativeScript framework enable developers to use pure JavaScript language to build native mobile applications running on the major mobile platforms - Apple iOS, Google Android. The applications UI stack is built using native UI components and because of that no compromises with the User Experience with the applications is done.

## How It Works
The native script architectures can be generally explained with this diagram:
![architecture diagram]( .\img\architecture.png "architecture diagram")

* **Native OS** - At the bottom level is the native OS (Android, iOS and soon Windows).
* **NativeScript runtime** runs the JavaScript code of your application. The runtime also provides a way to call all the native APIs available for the platform the app is running on. This means that you have access to all the native capabilities of the platform. 
* **NativeScript Modules** are a set of platform-agnostic libraries that are build on top of the runtime. These modules are wrap the platform specific code, providing a common API.
* **Application Code** - your application's code. Building an application on top of the NativeScript modules means that you will not have write platform-specific code. This should be the case most of the time. However, you still have the option to reach the native API trough the NativeSctipt runtime.

## Requirements 
Currently NativeScript can run on the following platforms:

* Android 4.2+ (equivalent to Android API level 17+)
* iOS 7.1+ 

For NativeScript development you have to options:

* Using the [NativeScript Command-Line Interface](https://github.com/NativeScript/nativescript-cli)
with a IDE or text editor of your choice.
* Using [AppBuilder](http://docs.telerik.com/platform/appbuilder/nativescript/index) where you have all the features of Telerik Platform at your disposal.

