---
title: Requirements
description: The system and software requirements your system needs to meet in order to develop NativeScript applications for iOS and Android.
position: 10
publish: true
slug: general-requirements
---

# System Requirements

This page outlines the system compatibility for the NativeScript framework, as well as recommended development environment and SDK versions. NativeScript and its tooling rely upon the iOS and Android SDKs to build and package mobile applications, so for the most parts our system requirements match theirs. 

## Windows Requirements

Using a Windows system for NativeScript development requires the following software/SDK versions. 

| Component          | Recommended                    | Notes |
|:-------------------|:-------------------------------|:------|
| Operating System   | Windows 10                     | The minimum required version is Windows 7
| iOS Development    | -                              | iOS applications cannot be developed on a Windows system
| Android Development| Android 6.0 SDK (API level 23) | The minimum requirements is Android 4.2 SDK (API level 17)

> **TIP:** To develop iOS applications on a Windows system or bypass the need to configure your environment for local Android development, you can use the cloud build service available in [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick).

You should follow the steps outlined in the [Command-Line Interface Setup]({% slug quick-start %}) article for instructions on how to install NodeJS, the NativeScript CLI and then, execute the setup scripts to automatically install any additionally required software components and configure your environment for local development. 

People who prefer to install and configure their environment manually should follow the [Advanced Setup for Windows guide]({% slug windows %}).

## macOS Requirements

Using a macOS system for NativeScript development requires the following software/SDK versions.

| Component          | Recommended                   | Notes |
|:-------------------|:------------------------------|:------|
| Operating System   | macOS High Sierra (10.13)     | The minimum required version is macOS Sierra (10.12)
| iOS Development    | iOS 11 SDK (Xcode 9)          | 
| Android Development| Android 6.0 SDK (API level 23)| The minimum requirements is Android 4.2 SDK (API level 17)

> **TIP:** To bypass the need to configure your environment for local Android or iOS development, you can use the cloud build service available in [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick).

You should follow the steps outlined in the [Command-Line Interface Setup]({% slug quick-start %}) article for instructions on how to install NodeJS, the NativeScript CLI and then, execute the setup scripts to automatically install any additionally required software components and configure your environment for local development. 

People who prefer to install and configure their environment manually should follow the [Advanced Setup for macOS guide]({% slug osx %}).

## Linux Requirements

Using a Linux system for NativeScript development requires the following software/SDK versions.

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
* Install the [NativeScript Sidekick]({% slug installation %}) client and try the cloud build service