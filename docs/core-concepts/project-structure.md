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
* [App](#app)
* [App_Resources](#app_resources)
* [Platforms](#platforms)
* [package.json](#packagejson)
* [Nsconfig](#nsconfig)
    * [Usage](#usage)
    * [Examples](#examples)
    * [Requirements](#requirements)

## Overview

The default structure of a NativeScript project consist of a project directory that contains: `app`, `platforms`, `node_modules` directories and the `package.json` of the project. The `app` folder contains the source of the application as well as the `App_Resources` folder. `App_Resources` folder contains the platform-specific resources of the application (icons, configuration files etc.).
```
myApplication/
└── app
    ├── App_Resources
    └── ...
└── node_modules
└── platforms
└── package.json
```

## app

The `app` directory in the root of the project is the development space for your project. **Place all your common and platform-specific code in this directory.** When the app is prepared for a build, the NativeScript tooling copies relevant content to the platform-specific folders for each target platform.

In the `app` directory, you can use **platform-specific files** to provide customized functionality and design for each target platform. To indicate that a file is platform-specific, make sure that the file name is in the following format: `name.ios.extension` or `name.android.extension`. For example: `main.ios.js` or `main.android.js`.

You can develop shared functionality or design in common files. To indicate that a file is common, make sure that the file name does not contain a `.android.` or `.ios.` string.

## App_Resources

App_Resources folder contains the platform specific resources of the application (icons, configuration files etc.).

The configuration files that are respected by NativeScript tooling are respectively `app/App_Resources/AndroidManifest.xml` for Android and `app/App_Resources/Info.plist` for iOS.

Additionally, you can modify `app/App_Resources/build.xcconfig` and `app/App_Resources/app.gradle` for adding/removing additional build properties for iOS and Android, respectively.

## platforms

The `platforms` directory is created when you start a build or add a target platform to your project, the NativeScript tooling creates a new subdirectory with the platform name. These subdirectories have the platform-specific project structure required for native development with the native SDKs for the platform. When the project is prepared for build, the NativeScript tooling copies relevant content from the `app` directory to the platform-specific subdirectory for each target platform.

**IMPORTANT:** Avoid editing files located in the `platforms` subdirectory because the NativeScript CLI overrides such files during the `prepare <Platform>` using the contents of the `app` directory.

## package.json

This file contains a `nativescript.id` key that provides information about the application identifier. The `nativescript.tns-android.version` and `nativescript.tns-ios.version` provide the versions of the respective runtime (if the platform is targeted by the application). If these properties are missing NativeScript tooling will add them on the first run/build of the application.

The package.json file also contains information about npm packages (including [NativeScript plugins]({%slug plugins-infrastructure %})) inside `dependencies` and `devDependencies` keys.

## nsconfig

### Usage

The `nsconfig.json` is an optional configuration file, located at the root project directory on the same level as the project's package.json file. This file makes it possible for users to modify the structure of their application. The available configurations are `appPath` and `appResourcesPath`. For example:

```
{
    "appPath": "code/src",
    "appResourcesPath": "resources"
}
```

Both paths must be relative to the project root (where the "package.json" file and "platforms" directory are located) in order everything to work as expected.

If `appPath` is omitted CLI will assume the application files are located inside a folder called "app" inside the project folder.

If `appResourcesPath` is omitted the CLI will assume that they are at their default location - folder called `App_Resources` inside the folder containing the rest of the app files.

### Examples
Let's assume the project is located at "/d/work/myApplication".

1. The first option is to have only the app location specified:
    ```
    {
        "appPath": "code/src"
    }
    ```
    This will result in app located at `/d/work/myApplication/code/src` and resources located at `/d/work/myApplication/code/src/App_Resources`.

2. The second option is to have only the app resources location specified:
    ```
    {
        "appResourcesPath": "resources"
    }
    ```
    This will result in app located at `/d/work/myApplication/app` and resources located at `/d/work/myApplication/resources`.

3. The third option is to have both the app folder and resources folder location specified:
    ```
    {
        "appPath": "code/src",
        "appResourcesPath": "resources"
    }
    ```
    This will result in app located at `/d/work/myApplication/code/src` and resources located at `/d/work/myApplication/resources`.

4. The fourth option is to not have an `nsconfig.json` file inside your project. This is the default option when creating a new project. Тhe app will be located at `/d/work/myApplication/app` and resources at `/d/work/myApplication/app/App_Resources`

### Requirements

* nativescript >= 4.0.0
* Android Runtime >= 4.0.0 (if the application targets Android platform)
* nativescript-dev-sass >= 1.3.6 (if used by the application)
* nativescript-dev-webpack >= 0.10.1 (if used by the application)
