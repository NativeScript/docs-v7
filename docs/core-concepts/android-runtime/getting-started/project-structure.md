---
nav-title: "Project Structure"
title: "Project Structure"
description: "NativeScript Android Runtime Project Structure"
position: 2
---

# Overview
A NativeScript application has the following project structure:

### Eclipse
```
...
assets/
|-- app/
|-- |-- bootstrap.js
|-- |-- [application logic]
|-- internal/
|-- metadata/
|-- tns_modules/
|-- |-- application/
|-- |-- http/
|-- |-- [more modules]
...
libs/
|-- armeabi-v7a/
|-- |-- libNativeScript.so
|-- x86/
|-- |-- libNativeScript.so
|-- gson-2.2.4.jar
|-- nativescript.jar
|-- android-binding-generator.jar
|-- android-support-v4.jar
...
```

### Android Studio
```
...
app/
|-- libs
|-- |-- gson-2.2.4.jar
|-- |-- nativescript.jar
|-- |-- android-binding-generator.jar
|-- src/
|-- |-- main/
|-- |-- |-- assets/
|-- |-- |-- |-- app/
|-- |-- |-- |-- |-- bootstrap.js
|-- |-- |-- |-- |-- [application logic]
|-- |-- |-- |-- internal/
|-- |-- |-- |-- metadata/
|-- |-- |-- |-- tns_modules/
|-- |-- |-- |-- |-- application/
|-- |-- |-- |-- |-- http/
|-- |-- |-- |-- |-- [more modules]
|-- |-- |-- jniLibs/
|-- |-- |-- |-- armeabi-v7a/
|-- |-- |-- |-- |-- libNativeScript.so
|-- |-- |-- |-- x86/
|-- |-- |-- |-- |-- libNativeScript.so
...
```

## Folder Description
Following is a brief description of the content of each folder:

- **assets/app** folder

Contains the application's content, including JavaScript, XML and probably some device-independent resources (e.g. a pictures). A required file is bootstrap.js which will be loaded by the Runtime and will serve as the application's main entry point (see [Hello World](./hello-world.md)).

- **assets/internal** folder

Contains the `prepareExtend.js` file, which adds TypeScript support on top of the Runtime's extend routine. This file is required.

- **assets/metadata** folder

Contains the pre-generated metadata used by the Runtime to map JavaScript calls to Java APIs. For more information see [Accessing APIs](../metadata/accessing-packages.md).

- **assets/tns_modules** folder

Contains the Runtime's JavaScript modules that may be used within the application. If you are familiar with the project structure of a [Node.js](http://nodejs.org/) application then you may think of `tns_modules` as the equivalent of the `node_modules` folder. A NativeScript application, initialized through its [CLI](https://github.com/NativeScript/nativescript-cli) will by default use the set of cross-platform modules as [described here](https://github.com/NativeScript/docs). The folder is not a prerequisite and is only used in case a module without a path hint is required. For more information see [Modules](./modules.md).

>**Note:** We have plans to move the tns_modules folder within the app folder, which makes the structure consistent with the [Node.js](http://nodejs.org/) one.

- **libs** Folder

Contains the Runtime's native C++ implementation as well as the dependencies to other Android libraries. The location of the native C++ libraries differs depending on the IDE - they are located in the `jniLibs` in Android Studio.

# See Also
* [Hello World](./hello-world.md)
* [Modules](./modules.md)
* [Metadata](../metadata/accessing-packages.md)
