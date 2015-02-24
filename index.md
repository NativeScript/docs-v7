---
nav-title: Welcome to NativeScript
title: Welcome to NativeScript
description: Meet NativeScript - an open-source framework for the cross-platform development of truly native apps.
position: 1
---

# Welcome to NativeScript

Develop your business logic with **JavaScript** or **TypeScript**, design and style your user interface using **XML** and **CSS** and let NativeScript translate your single-source application code into truly native apps for iOS or Android.

* [How Does It Work](#how-does-it-work)
* [How To Get Started](#how-to-get-started)
* [What's Next](#whats-next)

## How Does It Work

![architecture diagram](img/architecture.png "architecture diagram")

1. Write your **application code** once using the **NativeScript modules** and the **NativeScript runtimes**.<br/>The modules expose the native device and platform capabilities of Android and iOS in a consistent manner and let you access them via non-platform-specific code.<br/>The modules let you access some native capabilities via platform-specific JavaScript code.
1. Customize your app with platform-specific assets such as icons and splash screens.
1. Build your app.<br/>When you build your app, the **NativeScript runtime** translates your non-platform specific code to the native language of your target platform and the **NativeScript tools** use the native platform SDKs and tools to build a native application package.
1. Run your cross-platform native apps in the native emulators, on real devices or distribute them to testers and end users.

## How To Get Started

NativeScript strips the complexity from native development both in terms of required coding skills and system setup. 

To get started, you need JavaScript or TypeScript knowledge to implement your business logic, XML and CSS knowledge to design your UI and an idea for a mobile app. You do not need Java or Objective-C knowledge.

Once you have your app idea, you can get started in three simple steps.

1. Choose your tools and set up your system.
	* If you are familiar with the Cordova CLI or if you want to develop and build your apps locally, you can set up your system with the [NativeScript CLI](https://github.com/NativeScript/nativescript-cli).
	* If you prefer to concentrate on development and build your apps with a third-party build service, you can use the [Telerik AppBuilder tools](http://www.telerik.com/appbuilder).
1. Go through the *Hello World* tutorial.<br/>This quick start development guide will introduce you to the basic architecture of a NativeScript app and how to implement the most basic styling.
1. Explore the modules overview and the API Reference.<br/>The extensive overview and API reference will introduce to the how-tos of NativeScript development. You will learn how to tap into the native capabilities that you want to implement inside your app.

## What's Next

When you become familiar with the basics, you can tackle any of the more advanced tasks.

* [Navigate Inside Your App](navigation.md)
* [Add Alerts and Notifications](ui-dialogs.html)
* [Handle Events](events.md)
* [Implement Gestures](gestures.md)
* [Work With Location Services](location.md)
* [Bind Data](bindings.md)
* [Design the UI](ui-with-xml.md)
* [Style Your App](styling.md)

If you need even more native capabilities than the NativeScript modules provide, you can expand your development with any of the following options.

* [iOS-Specific JavaScript Development](runtimes/ios/README.md)
* [Android-Specific JavaScript Development](runtimes/android/README.md)
* [Development with Native Libraries](https://github.com/NativeScript/nativescript-cli)