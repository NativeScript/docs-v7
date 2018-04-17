---
title: Project Structure
description: Learn the basic project structure of NativeScript application.
position: 120
slug: structure
previous_url: /structure
environment: nativescript
---

# Project Structure

* [Overview](#overview)
* [Nsconfig](#nsconfig)
    * [Usage](#usage)
    * [Examples](#examples)
    * [Requirements](#requirements)

## Overview

The default structure of a NativeScript project consist of a project directory that contains: app, platforms, node_modules directories and the package.json of the project. The **app** folder contains the source of the application as well as the **App_Resources** folder. **App_Resources** folder contains the platform specific resources of the application(icons, configuration files etc.).

## Nsconfig

### Usage

The **nsconfig.json** is an optional configuration file, located at the root project directory on the same level as the project's package.json file. This file makes it possible for users to modify the structure of their application. The available configurations are **appPath** and **appResourcesPath**. For example:

```
{
    "appPath": "code/src",
    "appResourcesPath": "resources"
}
```

Both paths must be relative to the project root(where the "package.json" file and "platforms" directory are located) in order everything to work as expected. 

If `appPath` is omitted CLI will assume the application files are located inside a folder called "app" inside the project folder.

If `appResourcesPath` is omitted the CLI will assume that they are at their default location - folder called `App_Resources` inside the folder containing the rest of the app files.

### Examples
Lets say the project is located at "/d/work/myApplication".

1. The first option is to have only the app location specified:
    ```
    {
        "appPath": "code/src"
    }
    ```
    This will result in app located at **"/d/work/myApplication/code/src"** and resources located at **"/d/work/myApplication/code/src/App_Resources"**.

2. The second option is to have only the app resources location specified:
    ```
    {
        "appResourcesPath": "resources"
    }
    ```
    This will result in app located at **"/d/work/myApplication/app"** and resources located at **"/d/work/myApplication/resources"**.

3. The third option is to have both the app folder and resources folder location specified:
    ```
    {
        "appPath": "code/src",
        "appResourcesPath": "resources"
    }
    ```
    This will result in app located at **"/d/work/myApplication/code/src"** and resources located at **"/d/work/myApplication/resources"**.

4. The fourth option is to not have nsconfig file inside your project. This is the default option when creating new project. Тhe app will be located at **"/d/work/myApplication/app"** and resources at **"/d/work/myApplication/app/App_Resources"**

### Requirements

* nativescript >= 4.0.0
* Android Runtime >= 4.0.0 (if the application targets Android platform)
* nativescript-dev-sass >= 1.3.6 (if used by the application)
* nativescript-dev-webpack >= 0.10.1 (if used by the application)
