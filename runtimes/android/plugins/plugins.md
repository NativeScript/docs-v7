---
title: Android Plugins Infrastructure
description: When the NativeScript modules do not provide the native device or platform capability that you need, you can use NativeScript plugins.
position: 0
slug: android-plugins-infrastructure
previous_url: /external-libs/jars,/external-libs/resource-libs
---

> **IMPORTANT:** The CLI command `tns library add` is no longer supported. Use plugins to work with external libs.

Android Plugins Infrastructure
=========

Starting with NativeScript CLI 1.1.0, you can develop or use plugins in your NativeScript projects.

* [What Are NativeScript Plugins](#what-are-nativescript-plugins)
* [Create a Plugin](#create-a-plugin)
    * [Directory Structure](#directory-structure)
    * [Android plugin elements](#android-plugin-elements)
    * [Include.gradle Specification](#includegradle-specification)
    * [Native Android plugin using V8 API](#using-v8)
* [Rules of thumb](#rules-of-thumb)
    * [What do I use?](#what-do-i-use)
* [Plugin migration](#plugin-migration)

## What Are NativeScript Plugins

A NativeScript plugin is any npm package, published or not, that exposes a native API via JavaScript and consists of the following elements. The plugin must have the directory structure, described in the [Directory Structure](#directory-structure) section.

## Create a Plugin


If the NativeScript framework does not expose a native API that you need, you can develop a plugin which exposes the required functionality. When you develop a plugin, keep in mind the following requirements.

* The plugin must be a valid npm package.
* The plugin must expose a built-in native API or a native API available via custom native libraries.
* The plugin must be written in JavaScript or TypeScript and must comply with the CommonJS specification. If written in TypeScript, make sure to include the compiled `JavaScript` file in your plugin.
* The plugin directory structure must comply with the specification described below.
* The plugin must contain a valid `package.json` which complies with the specification described below.
* If the plugin requires any permissions, features or other configuration specifics, they must be added in the `app/App_Resources/Android/AndroidManifest.xml`.
* If the plugin depends on native libraries, it must contain a valid `include.gradle file`, which describes the dependencies.

### Directory Structure

This is what an Android NativeScript plugin may include.
```
my-plugin/
├── package.json
├── MyModule1/
│   ├── index1.js
│   └── package.json
├── MyModule2/
│   ├── index2.js
│   └── package.json
└── platforms/
    ├── android/
		└── include.gradle
		└── MyLibrary.aar
		└── MyLibrary.jar
```

### Android plugin elements

You can find more information on the common parts of the NativeScript plugins like the `package.json` and js modules [here]({% slug plugins-infrastructure %}).
* `platforms\android`: This directory contains any native Android libraries packaged as `*.jar` and `*.aar` packages. These native libraries can reside in the root of this directory or in a user-created sub-directory. 
* `platforms\android\include.gradle`: This file modifies the native Android configuration of your NativeScript project such as native dependencies, build types and configurations. For more information about the format of `include.gradle`, see [include.gradle file](#includegradle-specification).
* `platforms\android\MyLibrary.aar` is an Android library. You can read more about the `.aar` format [here](http://tools.android.com/tech-docs/new-build-system/aar-format).
* `platforms\android\MyLibrary.jar` is a library. You can read more about the `.jar` format [here](https://en.wikipedia.org/wiki/JAR_(file_format))

### Include.gradle Specification

Every NativeScript plugin, which contains native Android dependencies, should also contain a valid `include.gradle` file in the root of its `platforms\android` directory. This `include.gradle` file must meet the following requirements.

* It must contain its own [configuration](http://developer.android.com/tools/building/configuring-gradle.html).
* It might contain native dependencies required to build the plugin properly.
* Any native dependencies should be available in [jcenter](https://bintray.com/bintray/jcenter) or from the Android SDK installed on your machine if you want it to work out of the box. You can see an example of a compile dependency [here](https://github.com/NativeScript/nativescript-facebook-plugin/blob/master/platforms/android/include.gradle).
* It can be used for any kind of native configuration. Find more information [here](http://developer.android.com/tools/building/configuring-gradle.html)

#### Include.gradle Example
```
//optional elements
dependencies {
    compile "groupName:pluginName:ver"
}
```

### Native Android plugin using V8 API

If for any reason you want to use V8 API in your plugin, you will need to specify that explicitly in the plugin's `package.json`, so that the respective symbols be exposed for use when the plugin is installed inside a NativeScript application.
```javascript
{
    "name": "plugin-name",
    "version": "0.1.0",
    ...
    "nativescript": {
        "platforms": {
            ...
        },
        "useV8symbols": true /* exposes V8 API for plugin */
    },
    ...
    // omitted for brevity
}
```

## Rules of thumb

We are concentrating on the "_native_" part of the plugin. When we talk about "_native_" part of the plugin we mean the `platforms/android` folder and its content. 

#### What do I use?

When you want to create an Android NativeScript plugin and you want to add some "_native_" functionality there are two main options. Use a `.jar` file, or use a `.aar` file. Keep in mind that `.aar` files are the recomended library form for NativeScript plugins. When we use a library in the form of a `.jar` file we want some functionality that doesn’t need any resources, just native implementation of some logic we need. For example, if we need to make some complicated calculation and there is an SDK in the form of a `.jar` file and requires **no** UI elements, we could use that library. This would only provide a couple of classes with some logic in them and **should not** declare activities or any other types of application components (http://www.tutorialspoint.com/android/android_application_components.htm).

* In what cases should we prefer `.jar` files?
    * when we don’t have any need for using android application components
    * when we want to add classes with logic in them, we can use from our js user code.
    * when we don’t need resources connected to the `.jar` file like drawables, layouts, etc.

* In what cases should we prefer `.aar` files:
    * when we want to use some kind of an interactive SDK like facebook, dropbox, youtube, etc.
    * when we need to use application components like activities, services, resources, etc.

> **IMPORTANT:**  The recommended way of using AAR files inside a NativeScript plugin is to add it as a dependency in the `include.gradle` file inside the `platforms/android` folder of the plugin.

### Plugin migration.

Let's say you have a plugin with the following structure:
**Case 1:**
```
my-plugin/
├── package.json
├── MyModule1/
│   ├── index1.js
│   └── package.json
├── MyModule2/
│   ├── index2.js
│   └── package.json
└── platforms/
    ├── android/
		└── AndroidManifest.xml
		└── MyLibrary.aar
```

**What to do to migrate this plugin?**
Take all the plugin related info from the `AndroidManifest.xml` and put it in the MyLibrary.aar's `AndroidManifest.xml`. You can do that one of two ways:
* Unpack MyLibrary.aar file and update its `AndroidManifest.xml`.
* Open `.aar` source project and update its `AndroidManifest.xml`, then rebuild `.aar` file.

**Case 2:**
```
my-plugin/
├── package.json
├── MyModule1/
│   ├── index1.js
│   └── package.json
├── MyModule2/
│   ├── index2.js
│   └── package.json
└── platforms/
    ├── android/
		└── AndroidManifest.xml
		└── MyLibrary.jar
```
**What to do to migrate this plugin?**
Take all the plugin related info from the `AndroidManifest.xml` and put it in `app\App_Resources\Android\AndroidManifest.xml`.


**Case 3:**
```
my-plugin/
├── package.json
├── MyModule1/
│   ├── index1.js
│   └── package.json
├── MyModule2/
│   ├── index2.js
│   └── package.json
└── platforms/
    ├── android/
		└── AndroidManifest.xml
		└──	res/
		└── MyLibrary.jar
```
**What to do to migrate this plugin?**
Create a new Android Studio project and migrate the code to an `.aar` file. The `.aar` file is a self contained project by itself so it contains `res/` folder, `AndroidManifest.xml` and source files.
