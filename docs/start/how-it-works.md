---
title: How NativeScript Works
description: NativeScript - technology stack diagram.
position: 15
publish: true
slug: how-it-works
---


# How NativeScript Works

The NativeScript technology can be presented as built upon several major parts - Runtimes, Core Modules, CLI, Plugins. Consider the following diagram:

![NativeScript common diagram](../img/ns-common.png)

## Runtimes

The runtimes enable you to call APIs in the Android and iOS frameworks using JavaScript code. To do that they use JavaScript Virtual Machines - Google’s V8 for Android and WebKit’s JavaScriptCore implementation distributed with iOS 7.0+. Find more information in [Android Runtime Overview](../runtimes/android/overview.md) and [iOS Runtime Overview](../runtimes/ios/Overview.md).

## Core Modules

The Core Modules are there to provide the abstractions needed to access the underlying native platforms. Take the Gestures module for example. It defines a common JS API that when called from the application TypeScript/JavaScript translates to native gestures APIs calls (thanks to the Runtimes). 

Another thing the Core Modules provide is the "original" NativeScript way for defining UI, data-binding, navigation. Along with it, Angular and Vue can be used as Application Framework technologies. Read more in the [Modules documentation](../core-concepts/modules.md).

## NativeScript CLI

It is the command-line interface that lets you create, build, and run apps using NativeScript. Runs on Windows, macOS or Linux. Find more information in the [NativeScript CLI repo](https://github.com/NativeScript/nativescript-cli).

## NativeScript Plugins

The NativeScript plugins are building blocks that encapsulate some functionality and help developers build apps faster (just like the NativeScript Core Modules, which is a plugin). Most are community built, written in TypeScript/JavaScript. Some can include native libraries, which are called from the TS/JS code thanks to the Runtimes layer. More information in the [Plugins documentation](../plugins/plugins.md).


