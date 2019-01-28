---
title: Project Structure
description: Learn the basic project structure of а NativeScript application - app, app resources, platforms
position: 120
slug: structure
previous_url: /structure
---

# Project Structure

{% nativescript %}
The default structure of a blank NativeScript project consists of a root folder that contains the `app`, `platforms` and `node_modules` directories, and a `package.json` configuration file.

```
myApplication/
└── app
    ├── App_Resources
    └── ...
├── node_modules
├── platforms
└── package.json
```
{% endnativescript %}

{% angular %}
The default structure of a blank NativeScript + Angular project consists of a root folder that contains the `src`, `platforms`, `node_modules` and `hooks` directories, and several configuration files amongst which the most important is the `package.json`.

```
myApplication/
├── App_Resources
└── src
    ├── app
    └── ...
├── hooks
├── node_modules
├── platforms
├── package.json
├── tsconfig.json
└── ...
```
{% endangular%}

There are several other directories and configuration files that can be present in your project based on the initial template, the programming language (JavaScript or TypeScript) or the plugins that you are using in your application. This article covers the files and folders that are always present in a NativeScript project, as well as some of the more common ones that you may encounter while developing your app.

## The {% nativescript %}app/{% endnativescript %}{% angular %}src/{% endangular%} directory

The {% nativescript %}`app`{% endnativescript %}{% angular %}`src`{% endangular %} directory in the root of the project is the development space for your project. **Place all your common and platform-specific code in this directory.** When the app is prepared for a build, the NativeScript tooling copies relevant content to the platform-specific folders for each target platform.

In the {% nativescript %}`app`{% endnativescript %}{% angular %}`src`{% endangular %} directory, you can use **platform-specific files** to provide customized functionality and design for each target platform. To indicate that a file is platform-specific, make sure that the file name is in the following format: `name.ios.extension` or `name.android.extension`. For example: `main.ios.js` or `main.android.js`.

You can develop shared functionality or design in common files. To indicate that a file is common, make sure that the file name does not contain a `.android.` or `.ios.` string.

{% nativescript %}In the `app` folder, you will also find the `App_Resources` directory.{% endnativescript %}

### {% nativescript %}app{% endnativescript %}{% angular %}src{% endangular %}/package.json

This is a secondary `package.json` file in which you can specify the entry point file of the application and also several [Android-specific]({% slug android-custom-flags %}) and [iOS-specific]({% slug ios-custom-flags %}) custom flags. Below is an example of a basic secondary `package.json` file.

{% nativescript %}
```JSON
{
    "main": "app.js",
    "discardUncaughtJsExceptions": true,
    "android": {
        "v8Flags": "--expose_gc",
        "forceLog": true
    },
    "ios": {
        "jscFlags": "--dumpOptions=2 --validateOptions=1"
    }
}
```
{% endnativescript %}
{% angular %}
```JSON
{
    "main": "main.js",
    "discardUncaughtJsExceptions": true,
    "android": {
        "v8Flags": "--expose_gc",
        "forceLog": true
    },
    "ios": {
        "jscFlags": "--dumpOptions=2 --validateOptions=1"
    }
}
```
{% endangular %}

##{% nativescript %}# app/{% endnativescript %}App_Resources

The `App_Resources` folder contains the platform-specific resources of the application (icons, configuration files etc.). The configuration files that are respected by the NativeScript tooling are the `App_Resources/Android/src/main/AndroidManifest.xml` for Android, and the `App_Resources/iOS/Info.plist` for iOS.

Additionally, you can modify the `App_Resources/iOS/build.xcconfig` or `App_Resources/Android/app.gradle` to add or remove additional build properties for the iOS and Android platforms, respectively.

## The **platforms** directory

The `platforms` directory is created when you start a build or add a target platform to your project. The NativeScript tooling creates a new subdirectory with the respective platform name. These subdirectories have the platform-specific project structure required for native development with the native SDKs of the platform. When the project is prepared for build, the NativeScript tooling copies relevant content from the {% nativescript %}`app`{% endnativescript %}{% angular %}`src`{% endangular%} directory to the platform-specific subdirectory for each target platform.

> **IMPORTANT:** Avoid editing files located in the `platforms` subdirectories because the NativeScript CLI overrides them with the content of the {% nativescript %}`app`{% endnativescript %}{% angular %}`src`{% endangular%} directory during the `prepare <Platform>` process.

## The **package.json** file

The main `package.json`, which is located in the root directory of the project, contains details about the application, its dependencies and other helpful information. You can set [common npm package.json properties](https://docs.npmjs.com/files/package.json) like `author`, `description` and `version`, or specify the npm packages and [NativeScript plugins]({% slug plugins-infrastructure %}) on which your app depends by modifying the `dependencies` and `devDependencies` attributes.

The root `package.json` also contains several NativeScript-specific properties which are placed inside the `nativescript` object:

* **id** - Specifies the unique application identifier (App ID) of the app. To be able to build for both Android and iOS, your App ID must be unique and contain two or more strings, separated by a dot. Each string must start with a letter and should contain only letters and numbers. The app identifier must not start with an uppercase letter. (!!!!! LINK DOCUMENT ABOUT SEPARATE IDENTIFIERS -> NS 5.0 release)
* **tns-android.version** - Specifies the version of the Android runtime. If the property is missing, the latest version of the runtime will be added on the first run or build for Android.
* **tns-ios.version** - Specifies the version of the iOS runtime. If the property is missing, the latest version of the runtime will be added on the first run or build for iOS.

Here is an example of a basic main `package.json` file:

```JSON
{
    "nativescript": {
        "id": "org.nativescript.myApplication",
        "tns-android": {
            "version": "5.0.0"
        },
        "tns-ios": {
            "version": "5.0.0"
        }
    },
    "description": "My NativeScript Application",
    "license": "MIT",
    "repository": "https://github.com/myApplication",
    "dependencies": {
        "nativescript-theme-core": "~1.0.4",
        "tns-core-modules": "~5.0.0"
    },
    "devDependencies": {
        "nativescript-dev-typescript": "~0.7.0",
        "typescript": "~2.7.2"
    },
    "readme": "My NativeScript Application"
}
```

## The **hooks** directory

The `hooks` folder exists only when the project depends on plugins that require a hook to function properly. Hooks are executable pieces of code or Node.js scripts that are used to alter or augment the behavior of an extendable NativeScript CLI command. For more information about hooks and how to use them in NativeScript, see [Extending the CLI](https://github.com/NativeScript/nativescript-cli/blob/master/extending-cli.md).

Some of the more common plugins that have hooks are `nativescript-dev-webpack`, `nativescript-dev-typescript` and `nativescript-dev-sass`.

## The **tsconfig.json** file

The `tsconfig.json` file is present only in projects that use TypeScript. The file works as a guide during the [transpilation]({% slug transpilers %}) of TypeScript to JavaScript. You can fine-tune the transpilation process by configuring the various [compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html). For more information about `tsconfig.json`, see the official [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

## The **nsconfig.json** file

The `nsconfig.json` is an optional configuration file, located at the root project directory on the same level as the main `package.json` file. This file makes it possible for users to modify the structure of their application. The available configurations are `appPath` and `appResourcesPath`.

Both paths must be relative to the project root (where the `package.json` file and `platforms` directory are located) in order everything to work as expected. If `appPath` is omitted, the CLI will assume the application files are located inside a folder called {% nativescript %}`app`{% endnativescript %}{% angular %}`src`{% endangular%} inside the project folder. If `appResourcesPath` is omitted, the CLI will assume that they are at their default location - a folder called `App_Resources` inside the folder containing the rest of the app files.

> **Important:** To use an `nsconfig.json` file in your project, you must ensure that it meets the following requirements:
* NativeScript CLI >= 4.0.0
* Android Runtime >= 4.0.0
* nativescript-dev-sass >= 1.3.6 (if used in the application)
* nativescript-dev-webpack >= 0.10.1 (if used in the application)

### **nsconfig.json** examples

Let's assume the project is located at `/d/work/myApplication`.

* The first and default option is to not have an `nsconfig.json` file inside your project. In this case, the app will be located at `/d/work/myApplication/app` and the resources at `/d/work/myApplication/app/App_Resources`.

* The second option is to specify only the app directory. The example given below will result in an app located at `/d/work/myApplication/code/src` and resources at `/d/work/myApplication/code/src/App_Resources`.
    ```JSON
    {
        "appPath": "code/src"
    }
    ```

* The third option is to specify only the app resources directory. The example given below will result in an app located at `/d/work/myApplication/app` and resources at `/d/work/myApplication/resources`.
    ```JSON
    {
        "appResourcesPath": "resources"
    }
    ```

* The fourth option is to specify both the app folder and resources directories. The example given below will result in an app located at `/d/work/myApplication/code/src` and resources at `/d/work/myApplication/resources`.
    ```JSON
    {
        "appPath": "code/src",
        "appResourcesPath": "resources"
    }
    ```
