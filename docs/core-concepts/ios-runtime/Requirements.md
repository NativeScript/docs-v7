---
nav-title: "Requirements"
title: "Requirements"
description: "NativeScript iOS Runtime Requirements"
position: 1
---

# System Requirements
The recommended ways to create NativeScript Applications is either through the [Command-Line Interface (CLI)](https://github.com/NativeScript/nativescript-cli) or through the [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick).

# Supported iOS Versions
The iOS Runtime supports officially iOS 9+. The metadata however is generated with the latest SDK. The metadata contains information about API availability so NativeScript allows you to both use the latest APIs, and if necessary, detect and degrade gracefully on lower iOS versions.

# Supported JavaScript Features
JavaScript code executing in the iOS Runtime must comply with the supported features of the JavaScriptCore engine. You can view them in detail [here](https://github.com/NativeScript/webkit/blob/v1.5.1/Source/JavaScriptCore/features.json).

# Supported Application Binary Interfaces (ABI)
Currently supported are the following CPU instruction sets:
 - armv7
 - arm64
