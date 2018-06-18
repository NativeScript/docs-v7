---
title: Technical Overview
description: A broad overview of the technologies that make NativeScript work.
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

The Core Modules are there to provide the abstractions needed to access the underlying native platforms. Take the Gestures module for example. It defines a common JS API that translates application TypeScript/JavaScript code into native gestures APIs calls (thanks to the Runtimes).

Another thing the Core Modules provide is a basic XML-based way for defining UI, data-binding and navigation. Along with it, Angular and Vue.js can be used as Application Framework technologies. Read more in the [Modules documentation](../core-concepts/modules.md).

## NativeScript CLI

It is the command-line interface that lets you create, build, and run apps using NativeScript. The CLI runs on Windows, macOS or Linux, and you can find more information in the [NativeScript CLI repo](https://github.com/NativeScript/nativescript-cli).

## NativeScript Plugins

The NativeScript plugins are building blocks that encapsulate some functionality and help developers build apps faster (just like the NativeScript Core Modules, which is a plugin). Most are community-built, written in TypeScript/JavaScript. Some can include native libraries, which are called from the TS/JS code thanks to the Runtimes. You can find more information in the [Plugins documentation](../plugins/plugins.md).

## See also
* [How NativeScript Works article on developer.telerik.com](https://developer.telerik.com/featured/nativescript-works/)

