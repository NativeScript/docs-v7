---
nav-title: "Debug Build Tools"
title: "Debug Build Tools"
description: "Debugging the Build Tools"
position: 1
previous_url: /debug-eclipse
---

# Overview

The ![previous article](./debug-native.md) shows how to debug the runtime and the application, but what if the problem is at build time?

Since {N} version 4.0 you can easily debug the tools used for building a {N} application.

# Debugging the metadata generator

* Open the android-runtime `test-app` in Android Studio. `/your/path/android-runtime/test-app`

Open Edit Configurations
* ![edit configurations](./edit-configurations.png)

Add jar configuration to your Android Studio Project
* ![add jar config](./add-jar-config.png)

Set path to the `static-binding-generator.jar` inside your project `<app_name>/platforms/android/build-tools/static-binding-generator.jar`
And set the `Working directory` to:
`<app_name>/platforms/android/build-tools`
* ![path to jar and pwd](./path-to-jar-and-pwd.png)

Run debug
* ![debug brk point](./debug-brk-point.png)

# Debugging the js_parser

Open `<app_name>/platforms/android/build-tools/jsparser` folder in Visual Studio Code.

Add Node configuration
* ![set-node-config](./set-node-config.png)

Run debug
* ![run vscode debug](./run-vscode-debug.png)

# Debugging the static binding generator

You can follow the identical steps described for debugging the metadata generator!