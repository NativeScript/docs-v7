---
nav-title: "Troubleshooting"
title: "Troubleshooting"
description: Troubleshooting NativeScript errors.
position: 18
---

# Issues/Limitations
Following is a list with known issues, most of which may be easily worked-around, in the current Beta (0.9.0) version of NativeScript.

## CLI

### Problem
[OSX issue with node 0.12.0](https://github.com/NativeScript/nativescript-cli/issues/268)

### Workarounds
* Install nativescript-cli 0.9.1.

OR

* Use node 0.10.36

### Problem
Unable to run or debug iOS applications if Xcode 6.1 and target iOS is 8.1.3. This is caused by the fact that the developer disk image we are trying to load on the device from XCode 6.1 iOS SDK is not compatible with iOS 8.1.3.

### Workaround
Install Xcode 6.1.1.

### Problem
Currently there is a hard-coded 30 seconds timeout for establishing connection between the CLI and the Android device/emulator. On slow computers and/or devices/emulators it is possible that the timeout is not enough for establishing a connection. Therefore the debugger is not started on the device/emulator.

### Workaround
Retry the debugger.

### Problem
On Mac OSX the final step of `tns debug android` command, which attempts to open an instance of Chrome browser, does not work.

### Workaround
We are using the [opener package](https://www.npmjs.com/package/opener) to open the browser. Possible workarounds are to either fix the module or try a newer version.

## User Experience

### Problem
First time an Android application is started, it may take several seconds to load and there is no visual indication that the application is alive and loading. This will happen each time the application is redeployed.

### Workaround
A second start will be much faster. We are aware of this limitation and we are already working on a prototype, which improves things significantly.
