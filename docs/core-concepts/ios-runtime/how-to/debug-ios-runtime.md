---
title: Debugging the iOS Runtime within your app's XCode project
description: Add the iOS Runtime .xcodeproj to an existing app
position: 10
slug: debug-ios-runtime
---

# Debugging the iOS Runtime within your app's XCode project

## What is this document about?

In certain scenarios where runtime errors occur, the debug info provided by the NativeScript CLI or by the application's XCode project is not sufficient. This article will guide you through the steps needed to debug the iOS Runtime library as a part of your NativeScript application. It implies you have the [ios-runtime repository](https://github.com/NativeScript/ios-runtime) already cloned and set up. For more info on how to setup the ios-runtime project on your machine refer to its [README](https://github.com/NativeScript/ios-runtime/blob/master/README.md).

## Creating the sample application

### 1. Create a new NativeScript application using one of the following commands depending on your platform preference:
#### *You can skip this step if you want to use some of your existing apps*

NativeScript with Angular:

`tns create debug-ios-runtime --ng`

NativeScript with TypeScript:

`tns create debug-ios-runtime --tsc`

NativeScript with plain JavaScript:

`tns create debug-ios-runtime`

### 2. Prepare your application's XCode project:

`cd debug-ios-runtime`

`tns prepare ios`

### 3. Open the XCode project:

`open ./platforms/ios/"debugiosruntime.xcodeproj"`

## Build NativeScript runtime as a dynamic library

> **WARNING**: Make sure your environment fulfills all the requirements mentioned in [ios-runtime](https://github.com/NativeScript/ios-runtime)'s README.

### 1. Enter the cloned ios-runtime directory

`cd ios-runtime`

### 2. Generate the XCode project

`./cmake-gen.sh`

### 3. Build the NativeScript.xcodeproj *NativeScript* target

![Build NS](build-dynamic-target.png)

## Add the iOS Runtime .xcodeproj to your application's one and start debugging

### 1. Close *NativeScript.xcodeproj* and drag it into your application's .xcodeproj
![Drag xcodeproj](drag-runtime-proj.png)

> **IMPORTANT**: If you drag it from Xcode where the Runtime's xcodeproj is currently open you will
get an error, thus drag it from Finder after closing *NativeScript.xcodeproj*

### 2. Connect the framework you've just built to the application:

##### Select your app target and go to General tab. Then under *Embedded binaries* select the `+`  button and add `NativeScript.framework`

![Go to General](general-embed-binaries.png)

![Select NS Framework](select-ns-framework.png)

### 3. Disable the NativeScript PostBuild build step which embeds the original NativeScript.framework
Open the **Build Phases** tab, expand the ***NativeScript PostBuild*** section and comment the
script invocation by changing **`$SRCROOT/internal/nativescript-post-build`** to ***`# $SRCROOT/internal/nativescript-post-build`***

### 4. Let's try to change a function's implementation and set a breakpoint there:
![Set breakpoint](set-breakpoint.png)

### 5. If you run the application project you should hit the breakpoint and see the printed text in the console:

![Hit breakpoint](hit-breakpoint.png)
