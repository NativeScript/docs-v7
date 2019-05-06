---
title: Adding Objective-C/Swift code
description: Add native source code files to your NativeScript project.
position: 21
slug: ios-source
---

For the Objective-C/Swift symbols to be accessible by the Nativescript runtimes the following criteria should be met:

**1)** They need to be compiled and linked

**2)** Metadata needs to be generated for them

The first task is done by the NativeScript CLI by adding the source files to the generated *.xcodeproj*. For the second one the Metadata Generator needs to find a [module.modulemap](https://clang.llvm.org/docs/Modules.html) of the compiled modules.

**Note:** For *.swift* files *module.modulemap* is not required.

In order to satisfy the above constraints the developer has to:

**1)** Place the source files in *App_Resources/iOS/src/*

**2)** Create a modulemap for the Objective-C files

**Note:** Swift classes need to be accessible from the Objective-C runtime in order to be used from NativeScript. This can be done by using the *@objc* attribute or by inheriting *NSObject*.

You can find a detailed walkthrough on how to use native source code in NativeScript [here](https://www.nativescript.org/blog/adding-objective-c-code-to-a-nativescript-app).