---
title: Debugging the Android Runtime within your app's Android Studio project
description: Add the Android Runtime library module to an existing app
position: 6
slug: debug-android-runtime
---

# Debugging the Android Runtime within your app's Android Studio project

## What is this document about?

In certain scenarios where runtime errors occur, the debug info provided by the NativeScript CLI is not sufficient. This article will guide you through the steps needed to debug the Android Runtime library module as a part of your NativeScript application. It implies you have already cloned and set up the [android-runtime repository](https://github.com/NativeScript/android-runtime). For more info on how to setup the android-runtime project on your workstation refer to its [README](https://github.com/NativeScript/android-runtime/blob/master/README.md).

## Requirements

* Android Studio >= 2.3.x
* All the tools needed to build the Android Runtime. Read more info [here](https://github.com/NativeScript/android-runtime#build-prerequisites).
* (Debug C++) Once Android Studio Is installed, you need to install the [`LLDB`](https://lldb.llvm.org/) tool used for debugging native code. You can do that by: navigating to `Tools -> Android -> SDK Manager` then go to `SDK Tools` tab and install `LLDB`.

## Creating the sample application

### 1. Create a new NativeScript application using one of the following commands depending on your language/technology preference:

NativeScript with Angular:

`tns create debug-android-runtime --ng`

NativeScript with TypeScript:

`tns create debug-android-runtime --tsc`

NativeScript with plain JavaScript:

`tns create debug-android-runtime`

### 2. Prepare your application's Android Studio project:

`cd debug-android-runtime`

`tns prepare android`

> After you have prepared the project, make sure the `tns-android` version is at least 3.4.0, because that's the version the Android Studio support is introduced. You can check the version by running `tns info` inside the project folder.

### 3. Open the Android Studio project:

* Open Android Studio
* Click `File -> Open` or `Open an existing Android Studio project`
![Project Structure](open-as-project.png)

* Set path to the project: e.g. `/home/userName/debug-android-runtime/platforms/android`
* Open the project

> Note: Tested with Android Studio 2.3.3, 3.0.0, 3.0.1
> If you don't need to debug the Android runtime, at this point you can already build your app using Android Studio by running the `:app` project play button.

## Add Android Runtime module library as a dependency

### 1. Make sure you have NDK and SDK directories set, because it's needed to build the Android runtime.

* Click `File -> Project Structure`
* Navigate to `SDK Localtion` section
* Check if `Android NDK Location` and `Android SDK Location` are set

Following the set up the `Project Structure` dialog look like this:

![Project Structure](project-structure-window.png)

### 2. Add runtime library module to your project

> **WARNING**: Make sure your environment fulfills all the requirements mentioned in [android-runtime](https://github.com/NativeScript/android-runtime)'s README.

* Open `settings.gradle` file in the already opened Android Studio project, which should look like this:

![Settings Gradle Before](settings-gradle-before.png)

* Uncomment the included projects: `:runtime` and `:runtime-binding-generator`
* Uncomment and set the `:runtime` and `:runtime-binding-generator` project dirs. These project dirs, can be found in the already cloned [android-runtime repository](https://github.com/NativeScript/android-runtime).

After the changes, Android Studio will ask you to sync files and `settings.gradle` file should look like:

![Settings Gradle After](settings-gradle-after.png)

After the sync has completed, the `:runtime` and `:runtime-binding-generator` modules should appear in the Project view in Android Studio:

![Runtime Project Included](runtime-project-shown.png)

## Debug the Android Runtime

### 1. Debugging the runtime Java code

If you only want to debug the Java part of the runtime, you're already all set up. All you need to do is set a break point and run in debug.

* Open `Runtime.java` and set a breakpoint at: `private void init ...` method.

![Set Java Breakpoint](set-java-runtime-breakpoint.png)

* Run Debug

![Run In Debug](hit-debug.png)

> When you run the project in debug, you should see the Android Runtime build log in the Gradle Console(bottom right).

### 2. How to debug both Java and the C++ part of the runtime

* Open the `:app` project debug configurations:

![App Configurations](app-edit-configurations.png)

* Add the runtime symbols in the debugger tab.

![Add CMake Symbols](add-runtime-symbols.png)

The symbols can be found in the cloned android runtime repo in: `<android-runtime-repo>/test-app/runtime/build/intermediates/cmake/release/obj`. In order for this folder to exist, you must run the android runtime build at least once.

* Open `com_tns_Runtime.cpp` and set a breakpoint at: `extern "C" JNIEXPORT void Java_com_tns_Runtime_initNativeScript ...` method.

![Set CPP Breakpoint](set-cpp-runtime-breakpoint.png)

* Run Debug

![Run In Debug](hit-debug.png)

## Known Issues

* If you have NativeScript plugins, containing Java Libraries in your application, you will still be able to build it with Android Studio, but you won't be able to debug it with the Android runtime. We will fix that issue in the upcoming releases.

* If you encounter this error: `Error while starting native debug session: com.intellij.execution.ExecutionException: LLDB package hasn’t been found`, you're probably trying to debug C++ code and you need to install the `LLDB` debugger. Look at the Requirements for instructions on how to do it.

* If you encounter this error: `Error:Unable to find module with Gradle path ':runtime' (needed by module 'app'.)`

![Known Issue 1](ki-1.png)

Delete the `.gradle` and `.idea` folders

![Known Issue 1](ki-delete-folders.png)

Click: `File -> Invalidate Caches/Restart -> Invalidate and Restart`