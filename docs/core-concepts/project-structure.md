---
title: Project Structure
description: Learn the basic project structure of NativeScript apps.
position: 10
slug: structure
previous_url: /structure
environment: nativescript
---

# Project Structure

* [Overview](#overview)
* [Nsconfig](#nsconfig)

## Overview

The default structure of a NativeScript project consist of a project directory that contains: app, platforms, node_modules directories and the package.json of the project. The **app** folder contains the source of the application as well as the **App_Resources** folder. **App_Resources** folder contains the platform specific resources of the application(icons, configuration files etc.).

## Nsconfig

The **nsconfig.json** is an optional configuration file, located at the root project directory on the same level as the project's package.json file. This file makes it possible for users to modify the structure of their application. Valid available configurations are **appPath** and **appResourcesPath**. For example:

```
{
    "appPath": "code/src",
    "appResourcesPath": "resources"
}
```

Both paths must be relative to the project root(where the "package.json" file and "platforms" directory are located) in order everything to work as expected. 

If `appResourcesPath` is omitted the CLI will assume that they are at their default location - folder called App_Resources inside the folder containing the rest of the app files. 

If `appPath` is omitted CLI will assume the application files are located inside a folder called "app" inside the project folder.

Examples:
Lets say the project is located at "/d/work/myApplication".

1. "nsconfig.json" content:
```
{
    "appPath": "code/src"
}
```
Will result in app located at "/d/work/myApplication/code/src" and resources located at "/d/work/myApplication/code/src/App_Resources".

2. "nsconfig.json" content:
```
{
    "appResourcesPath": "resources"
}
```
Will result in app located at "/d/work/myApplication/app" and resources located at "/d/work/myApplication/resources".

3. "nsconfig.json" content:
```
{
    "appPath": "code/src",
    "appResourcesPath": "resources"
}
```
Will result in app located at "/d/work/myApplication/code/src" and resources located at "/d/work/myApplication/resources".

4. If no "nsconfig.json" file is present the app folder will be  "/d/work/myApplication/app" and resources folder will be at "/d/work/myApplication/app/App_Resources"

The option folders/files to be included/excluded in the app and to be watched during livesync (related to #887) is still not implemented. Its discussion/implementation is moved in the separate issue.