---
title: Troubleshooting
description: Known issues with NativeScript, and where to get help when you run into problems
position: 80
slug: troubleshooting
previous_url: /troubleshooting
---

# Troubleshooting

* [Where to get help](#where-to-get-help)
* [Known issues and limitations](#known-issues-and-limitations)

## Where to get help

The NativeScript framework has a vibrant community that’s here to help when you run into problems.

If you hit an issue, start by seeing if anyone else has reported the problem on [the NativeScript community forum](http://forum.nativescript.org/). If you can’t find any information, try creating a new forum topic with any details needed to recreate the issue.

If you’ve found an issue with the NativeScript framework itself, please report the problem in the appropriate GitHub repository.

- [NativeScript CLI](https://github.com/nativescript/nativescript-cli/issues)
- [NativeScript modules](https://github.com/nativescript/nativescript/issues)
- [NativeScript documentation](https://github.com/nativescript/docs)
- [NativeScript iOS runtime](https://github.com/nativescript/ios-runtime)
- [NativeScript Android runtime](https://github.com/nativescript/android-runtime)

## Known issues and limitations

There are a few known issues that you might run into as you develop mobile applications with NativeScript. The following is a list of common problems you might run into, as well as workarounds you can use to continue developing.

### My app broke after switching git branches

**Problem:** After switching branches your app no longer builds, or does not display new changes.

**Solution:** The NativeScript CLI generates platform-specific native projects for your app in the `platforms/android` and `platforms/ios` folders. When you switch branches you may need to regenerate those native projects for your app to function correctly.

Start by removing the existing platform(s) with the `tns platform remove` command.

```Shell
tns platform remove ios
tns platform remove android
```

Next, add back the platforms—as well as install any new npm dependencies—using the `tns install` command.

```Shell
tns install
```

### Error thrown when attempting to run build-related operations for Android

**Problem**
```Shell
...
Unable to start service com.apple.mobile.installation_proxy. Result code is: ...
```

**Solution:**
Can you check if Sync over Wi-fi is disabled in iTunes on your machine. Also, can you just try disabling your Wi-fi and execute tns device (when your device is connected and disconnected) - maybe some other device is connected to the same Wi-fi and this causes some confusion in the way CLI communicates to devices.
You can find more info on the issue [here](https://github.com/NativeScript/nativescript-cli/issues/1398)

**Problem:**
```Shell
FAILURE: Build failed with an exception.

* What went wrong:
A problem occurred configuring root project 'app_name'.
> Could not resolve all dependencies for configuration ':_debugCompile'.
```

**Solution:** Run `$ android` to launch the Android SDK Manager and download the Local Maven repository for Support Libraries 28.0.0.


**Problem:** Gradle doesn't work with `org.gradle.parallel=true` enabled in `gradle.properties`.

**Solution:** Currently there's no solution, but we are wokring on updating the build to work with this option enabled.

### Cannot run or debug apps on iOS 8.1.3 devices with Xcode 6.1

**Problem:** On macOS systems with Xcode 6.1 installed, you cannot run or debug apps on iOS 8.1.3 devices.<br/>The developer disk images provided with the iOS SDK in Xcode 6.1 are not compatible with iOS 8.1.3. The NativeScript CLI uses these disk images to work with your attached iOS devices.

**Solution:** Update to Xcode 6.1.1 or later.

### The `debug` command times out on Android devices

**Problem:** The `debug` command times out when you attempt to debug on Android devices or emulators and the debug tools do not start.<br/>The `debug` command is configured with a 30-second timeout. On slower computer configurations, the CLI might exceed this timeout when connecting to your Android devices or emulators.

**Solution:** Re-run the `debug` command. If you continue to have issue with your Android emulator performance, you may want to consider using a more performant third-party emulator option such as [Genymotion](https://www.genymotion.com/).

### The debug tools for Android never launch on macOS

**Problem:** The NativeScript CLI uses the [opener npm package](https://www.npmjs.com/package/opener) to open Chrome. The current version of the package that the CLI uses cannot open the browser.

**Solution:** Update the opener package to a newer version. If this does not resolve the issue, try modifying your local copy of the package.

### Files added to the App_Resources folder are not working

**Problem:** When you add images or files to your app's *App_Resources* folder, run the app, and the images don't show up when they should.

**Solution:** When you add files to the *App_Resources* folder you have to run a new *build* of the app. Files located in *App_Resources* are compiled into the executable so they can't be synced with a previous build. Here are the correct steps to take to resolve the problem:

- Uninstall the old .apk (Android) or .ipa (iOS) from the device or emulator you are running the app on.
- Execute the `tns build android` or `tns build ios` command to create a new .apk or .ipa for your app.
- Execute the `tns run android` or `tns run ios` command to install the new executable, and you'll find your files are now packaged into your application.

### Problems with running on simulators/emulators and devices

**Problem:** Running your app on the iOS simulator produces an error like this:
```
Command xcrun with arguments simctl launch CC9DBE24-A540-40E4-A187-E7DE3ECDA254 org.nativescript.groceries failed with exit code 4. Error output: An error was encountered processing the command (domain=FBSOpenApplicationErrorDomain, code=4):
The operation couldn’t be completed. (FBSOpenApplicationErrorDomain error 4.)
```

**Solution:** Try  `iOS Simulator -> Reset Contents and Settings`

**Problem:** Running your app on Android produces an error like this:
```
The system failed to delete the package for an unspecified reason.
```

**Solution:** Ignore this warning. This happens only if you have never deployed the app before, because the CLI is trying to delete it before re-deploying it.

**Problem:** Running your app on Android produces an error like this:
```
The package manager service found that the device didn't have enough storage space to install the app.
```

**Solution:** Free more space on your device/emulator.
