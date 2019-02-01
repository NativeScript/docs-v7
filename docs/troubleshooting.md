---
title: Troubleshooting
description: Known issues with NativeScript, and where to get help when you run into problems
position: 140
slug: troubleshooting
publish: true
---

# Known issues and limitations

There are a few known issues that you might run into as you develop mobile applications with NativeScript. The following is a list of such problems, as well as workarounds you can use to overcome them.

### My app broke after switching git branches

**Problem:** After switching branches your app no longer builds, or does not display new changes.

**Solution:** The NativeScript CLI generates platform-specific native projects for your app in the `platforms/android` and `platforms/ios` folders. When you switch branches you may need to regenerate those native projects for your app to function correctly.

Start by removing the existing platform(s) with the `tns platform remove` command.

```Shell
tns platform remove ios
tns platform remove android
```

Next, add back the platforms and install any new npm dependencies using the `tns install` command.

```Shell
tns install
```

### Error thrown when attempting to run build-related operations for iOS

**Problem**
```Shell
...
Unable to start service com.apple.mobile.installation_proxy. Result code is: ...
```

**Solution:**
Try one of the following approaches:
 - The `Sync with this iPhone over Wi-Fi` option in iTunes on your machine should be disabled
 - Disable your Wi-Fi and execute `tns device` (when your device is connected and disconnected). It is possible that some other device is connected to the same Wi-Fi and this causes confusion in the way CLI communicates to the devices. You can find more info on the issue [here](https://github.com/NativeScript/nativescript-cli/issues/1398).


**Problem:** Gradle doesn't work with `org.gradle.parallel=true` enabled in `gradle.properties`.

**Solution:** Currently there's no other solution than disabling parallel builds.

### Error claiming "Xcode is not installed or configured properly" when Xcode seems to be installed

**Problem:** NativeScript CLI installation or `tns doctor` complains that Xcode is not configured properly

**Solution:**
Open a shell and run the following:

    $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer

### Problems with running on simulators/emulators and devices

**Problem:** Running your app on the iOS simulator produces an error like this:
```
Command xcrun with arguments simctl launch CC9DBE24-A540-40E4-A187-E7DE3ECDA254 org.nativescript.groceries failed with exit code 4. Error output: An error was encountered processing the command (domain=FBSOpenApplicationErrorDomain, code=4):
The operation couldn’t be completed. (FBSOpenApplicationErrorDomain error 4.)
```

**Solution:** Try `iOS Simulator -> Reset Contents and Settings`

**Problem:** Running your app on Android produces an error like this:
```
The package manager service found that the device didn't have enough storage space to install the app.
```

**Solution:** Free up more space on your device/emulator.

**Problem:**
* Black screen when running AVD emulator.
* AVD android emulator is laggy when running.
* tns doctor not finding any problems but tns run android --timeout 300 times out with error.
* Command gradlew.bat failed with exit code 1.
* `tns run android` throws Java (javac) error.

**Solution:**

Solution provided by [KristiyanFxy](https://github.com/KristiyanFxy) a member of the NativeScript community. Link to original solution [here](https://github.com/NativeScript/nativescript-cli/issues/2486#issuecomment-355299977).

### iOS Runtime limitations and known issues

**Problem:** Calling native functions having SIMD vector return type and/or arguments on `i386` and `armv7` architectures crashes or returns garbage. See https://github.com/NativeScript/ios-runtime/issues/997 for any updates regarding the problem.

**Solution:** The 3rd party library that iOS Runtime uses to make native calls ([libffi/libffi](https://github.com/libffi/libffi/)) does
not support SIMD vectors for these 2 architectures. If your app needs to support 32-bit iOS devices and you want to consume such functions you
must do so from the native part of a plugin in your app. Visit [Building Plugins](https://github.com/NativeScript/docs/blob/master/docs/plugins/building-plugins.md) for more information on how to create one.

