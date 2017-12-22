---
nav-title: "Requirements"
title: "Requirements"
description: "NativeScript Android Runtime Requirements"
position: 2
---

# System Requirements
The recommended ways to create NativeScript Applications is either through the [Command-Line Interface (CLI)](https://github.com/NativeScript/nativescript-cli) or through the [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick).

# Supported API Levels
The Android Runtime is built against [API level 17](http://developer.android.com/about/versions/android-4.2.html). The minimum supported compile SDK version is 22. Additionally, using the [metadata-generator](metadata/generator.md) tool you may generate your own metadata for any Android SDK available in the Android SDK Manager.

> **Note:** You may not use APIs that are not present in the generated metadata from JavaScript. Still, you may build your application using higher API level given your code is compatible with the metadata API level.

# Supported Application Binary Interfaces (ABI)
Currently supported are the following CPU instruction sets:

## armeabi-v7a
This is an ARM-based CPU instruction set that extends the standard ARM one and adds support for hardware floating-point support and multiple CPU cores.

## x86
This is an Application Binary Interface (ABI) that supports the instruction set commonly named *x86* or *IA-32*.

## x64
This is the 64-bit version of the *x86* instruction set. It supports larger amounts of virtual and physical memory than it was possible on its predecessor. It is backward compatible with 32-bit *x86* code
