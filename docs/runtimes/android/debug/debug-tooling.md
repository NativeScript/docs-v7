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

* ![edit configurations](./edit-configurations.png)
* ![add jar config](./add-jar-config.png)
* ![path to jar](./path-to-jar.png)
* ![debug brk point](./debug-brk-point.png)

Run debug

# Debugging the js_parser
Open js parser in Visual Studio Code

# Debugging the static binding generator

same as metadata generator