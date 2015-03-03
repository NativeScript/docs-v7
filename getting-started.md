---
nav-title: "Getting Started"
title: "Getting Started"
description: "Learn the basics of of how NativeScript work, how to set up your system and how to create your first Hello World app"
position: 2
---

# Getting Started

Are you a hybrid app developer looking for a way to create truly native apps? Are you a native app developer wondering how to expand the scope of his apps to the other popular platforms? Or perhaps you are a web developer searching for a way to transfer your existing skills to the world of mobile development?

NativeScript lets you develop truly native apps for iOS and Android from a single code base of JavaScript or TypeScript, XML and CSS. NativeScript takes your cross-platform code and translates it into the language that your target platform speaks. 

* [How Does It Work](#how-does-it-work)
* [How To Get Started](#how-to-get-started)

## How Does It Work

![architecture diagram](http://docs.nativescript.org/img/architecture.png "architecture diagram")

1. Write your **application code** once using the **NativeScript modules** and the **NativeScript runtimes**.<br/>The modules expose the native device and platform capabilities of Android and iOS in a consistent manner and let you access them via non-platform-specific code.<br/>The modules let you access some native capabilities via platform-specific JavaScript code.
1. Customize your app with platform-specific assets such as icons and splash screens.
1. Build your app.<br/>When you build your app, the **NativeScript runtime** translates your non-platform specific code to the native language of your target platform and the **NativeScript tools** use the native platform SDKs and tools to build a native application package.
1. Run your cross-platform native apps in the native emulators, on real devices or distribute them to testers and end users.

## How To Get Started

NativeScript strips the complexity from native development both in terms of required coding skills and system setup. 

To get started, you need JavaScript or TypeScript knowledge to implement your business logic, XML and CSS knowledge to design your UI and an idea for a mobile app. You do not need Java or Objective-C knowledge.

Once you have your app idea, you can get started in three simple steps.

1. Choose your tools and **[set up your system](setup/quick-setup.md)**.
	* If you are familiar with the Cordova CLI or if you want to develop and build your apps locally and free of charge, you can set up your system with the [NativeScript CLI](setup/ns-cli-setup).
	* If you prefer to concentrate on development and build your apps with a third-party build service, you can use the [Telerik AppBuilder tools](setup/ab-setup).
1. Go through the **Hello World** tutorial for your preferred tool set.<br/>This quick start development guide will introduce you to the basic architecture of a NativeScript app, data binding and how to implement user interfaces and styling.
	* [Hello World from the NativeScript CLI](hello-world/hello-world-ns-cli.md)
	* [Hello World from AppBuilder](hello-world/hello-world-appbuilder.md)
1. Explore the **[modules overview](modules.md)** and the **[API Reference](ApiReference/application/README.md)**.<br/>The extensive overview and API reference will introduce to the how-tos of NativeScript development. You will learn how to tap into the native capabilities that you want to implement inside your app.