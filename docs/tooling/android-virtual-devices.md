---
title: Setup Android Emulators
description: How to create, set up and use AVDs (Android emulators).
position: 60
slug: android-emulators
---

# Setup Android Emulators

Apart from using real Android devices, a viable option is to download, install and use an Android emulator.
In NativeScript, we can use all Android emulators that are connected and recognized by `tns devices` command.

Example output from `tns devices`

```
$ tns devices

Connected devices & emulators
Searching for devices...
┌───┬─────────────────────────┬──────────┬───────────────────┬──────────┬───────────┐
│ # │ Device Name             │ Platform │ Device Identifier │ Type     │ Status    │
│ 1 │ sdk_google_phone_x86_64 │ Android  │ emulator-5554     │ Emulator │ Connected │
│ 2 │ bullhead                │ Android  │ 00d3e1311075c66f  │ Device   │ Connected │
└───┴─────────────────────────┴──────────┴───────────────────┴──────────┴───────────┘
```

## Creating Android Virtual Device via Android Studio

Follow the official documentation on [Creating and Managing Virtual Devices](https://developer.android.com/studio/run/managing-avds.html), where the process of downloading, setting up, and using Android Emulators via Android studio is covered.

> **Note:** if your top-level "Tools" menu does not include the "Android" option (a common issue in versions >3.0.0), follow the instructions in [this StackOverflow answer](https://stackoverflow.com/questions/46948322/how-to-open-avd-manager-in-android-studio-3-0-version) to add this to the toolbar and enable the AVD Manager.


## Creating Android Virtual Device via command line tool

The `avdmanager` is a tool that allows you to create and manage Android Virtual Devices (AVDs) from the command line.
The `avdmanager` is provided in the Android SDK Tools package (25.3.0 and higher) and is located in `<ANDROID_HOME_PATH_HERE>/tools/bin/`.
Follow the official documentation on [creating AVD via avdmanager and command line](https://developer.android.com/studio/command-line/avdmanager.html).

Command syntax to create new AVD 
```Shell
$ cd $ANDROID_HOME/tools/bin
$ avdmanager create avd -n name -k "sdk_id" [-c {path|size}] [-f] [-p path]
```

You must provide a name for the AVD and specify the ID of the SDK package to use for the AVD using sdk_id wrapped in quotes. 
For example, the following command creates an AVD named `test` using the x86 system image for API level 25:

```Shell
avdmanager create avd -n test -k "system-images;android-25;google_apis;x86"
```

> **Note:** The above command suggest that the system image is already downloaded.

The following describes the usages for the other options:
-c {path|size}: The path to the SD card image for this AVD or the size of a new SD card image to create for this AVD, in KB or MB, denoted with K or M. For example, -c path/to/sdcard/ or -c 1000M.
-f: Force creation of the AVD. Use this option if you need to overwrite an existing AVD with a new AVD using the same name.
-p path: Path to the location where the directory for this AVD's files will be created. If you do not specify a path, the AVD will be created in ~/.android/avd/.

To list all the downloaded system images use the `list` command.
```Shell
avdmanager list
```

## Using third-party emulators

An applicable option is to use third-party emulators (like **GenyMotion** or **Visual Studio emulator**).
Visit the official sites for details on how to install and use these emulators.

- [GenyMotion official site](https://www.genymotion.com)
- [Visual Studio emulator](https://www.visualstudio.com/vs/msft-android-emulator/)
