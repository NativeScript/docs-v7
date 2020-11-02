---
title: Requirements
description: The software requirements your system needs to meet in order to develop NativeScript applications. The page includes instructions for Windows, macOS, and Linux environments.
position: 10
publish: true
slug: general-requirements
---

# System Requirements

The NativeScript CLI offers both a **Quick Setup** for getting started quickly, and a **Full Setup** that allows you to compile iOS and Android apps locally. This page outlines the system compatibility for both setup options.

> **NOTE**: You can read more about the quick setup and full setup options on the [CLI setup page]({% slug quick-start %}).

## Quick Setup Requirements

The NativeScript quick setup only requires that your development machine can run [Node.js and npm (Node Package Manager)](https://nodejs.org/en/).

* [Complete the NativeScript CLI quick setup]({% slug quick-start %})

## Full Setup Requirements

For the full setup option, NativeScript and its tooling rely upon the iOS and Android SDKs to build and package mobile applications, so for the most part our system requirements match theirs. The specific requirements depend on the operating system you’re developing on.

* [Windows](#full-setup-requirements-windows)
* [macOS](#full-setup-requirements-macos)
* [Linux](#full-setup-requirements-linux)

## Full Setup Requirements: Windows

Using a Windows system for full NativeScript development requires the following software/SDK versions. 

| Component          | Recommended                    | Notes |
|:-------------------|:-------------------------------|:------|
| Operating System   | Windows 10                     | The minimum required version is Windows 7
| iOS Development    | -                              | iOS applications cannot be developed on a Windows system
| Android Development| Android 6.0 SDK (API level 23) | The minimum requirements is Android 4.2 SDK (API level 17)

> **TIP:** To develop iOS applications on a Windows system or bypass the need to configure your environment for local Android development, you can use the cloud build service available in [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick).

You should follow the steps outlined in the [Command-Line Interface Setup]({% slug quick-start %}) article for instructions on how to install NodeJS, the NativeScript CLI and then, execute the setup scripts to automatically install any additionally required software components and configure your environment for local development. 

People who prefer to install and configure their environment manually should follow the [Advanced Setup for Windows guide]({% slug windows %}).

## Full Setup Requirements: macOS

Using a macOS system for full NativeScript development requires the following software/SDK versions.

| Component          | Recommended                   | Notes |
|:-------------------|:------------------------------|:------|
| Operating System   | macOS High Sierra (10.13)     | The minimum required version is macOS Sierra (10.12)
| iOS Development    | iOS 11 SDK (Xcode 9)          | 
| Android Development| Android 6.0 SDK (API level 23)| The minimum requirements is Android 4.2 SDK (API level 17)

> **TIP:** To bypass the need to configure your environment for local Android or iOS development, you can use the cloud build service available in [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick).

You should follow the steps outlined in the [Command-Line Interface Setup]({% slug quick-start %}) article for instructions on how to install NodeJS, the NativeScript CLI and then, execute the setup scripts to automatically install any additionally required software components and configure your environment for local development. 

People who prefer to install and configure their environment manually should follow the [Advanced Setup for macOS guide]({% slug osx %}).

## Full Setup Requirements: Linux

Using a Linux system for full NativeScript development requires the following software/SDK versions.

| Component          | Recommended                   | Notes |
|:-------------------|:------------------------------|:------|
| Operating System   | Ubuntu 16.04                  | NativeScript will work on most Linux based distributions, but Ubuntu offers the best experience
| iOS Development    | -                             | iOS applications cannot be developed on a Linux system.
| Android Development| Android 6.0 SDK (API level 23)| The minimum requirements is Android 4.2 SDK (API level 17)

> **TIP:** To develop iOS applications on a Linux system or bypass the need to configure your environment for local Android development, you can use the cloud build service available in [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick).

To install any additionally required components and configure your environment for local development, you should follow the [Advanced Setup for Linux]({% slug linux %}) guide.

## Next Steps

* Follow the [Command-Line Interface Setup]({% slug quick-start %}) guide to configure your environment for local development
* Check the [How NativeScript Works]({% slug how-it-works %}) article to gain a better understanding of the NativeScript framework
* Install [NativeScript Sidekick]({% slug installation %}) client and try the cloud build service.