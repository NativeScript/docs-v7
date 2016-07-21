---
title: Troubleshooting
description: Known issues with NativeScript and their workarounds
position: 9
slug: troubleshooting
previous_url: /troubleshooting
---

# Known Issues and Limitations

* [CLI](#cli)
* [User Experience](#user-experience)

## CLI

### Error thrown when attempting to run build-related operations for Android

```Shell
FAILURE: Build failed with an exception.

* What went wrong:
A problem occurred configuring root project 'app_name'.
> Could not resolve all dependencies for configuration ':_debugCompile'.
```

**Workaround:** Run `$ android` to launch the Android SDK Manager and download the Local Maven repository for Support Libraries 28.0.0.

### Node.js 0.12.0 problems on OS X
**NativeScript CLI version:** 0.9.0

**Problem:** On OS X systems with Node.js 0.12.0 installed, you cannot work with the NativeScript CLI 0.9.0.<br/>For additional information, see [GitHub Issue #268: OSX issue with node 0.12.0](https://github.com/NativeScript/nativescript-cli/issues/268).

**Workaround:** You can choose between the following workarounds.
* Update the NativeScript CLI to 0.9.1.
* Revert Node.js to 0.10.36.

### Cannot run or debug apps on iOS 8.1.3 devices with Xcode 6.1

**Problem:** On OS X systems with Xcode 6.1 installed, you cannot run or debug apps on iOS 8.1.3 devices.<br/>The developer disk images provided with the iOS SDK in Xcode 6.1 are not compatible with iOS 8.1.3. The NativeScript CLI uses these disk images to work with your attached iOS devices.

**Workaround:** Update to Xcode 6.1.1 or later.

### `Debug` command times out on Android device

**Problem:** The `debug` command times out when you attempt to debug on Android devices or emulators and the debug tools do not start.<br/>The `debug` command is configured with a 30-second timeout. On slower computer configurations, the CLI might exceed this timeout when connecting to your Android devices or emulators.

**Workaround:** Re-run the `debug` command.

### The debug tools for Android never launch on OS X system

**Problem:** The NativeScript CLI uses the [opener npm package](https://www.npmjs.com/package/opener) to open Chrome. The current version of the package that the CLI uses cannot open the browser.

**Workaround:** Update the opener package to a newer version. If this does not resolve the issue, try modifying your local copy of the package.

## User Experience

### Very slow first launch on Android device

**Problem:** When you run your app on Android device for the first time, the app loads very slowly and might appear to be unresponsive.<br/>The issue reoccurs on every redeployment.

**Workaround:** None. Wait for the app to load.

The NativeScript team is working on improving the performance of Android apps on initial run.

### Added App_Resources Are Not Working

**Problem:** When you add images or files to your app's *App_Resources* folder, run the app and the images don't show up when they should.

**Solution:** When you add files to the *App_Resources* folder you have to run a new *build* of the app. Files located in *App_Resources* are compiled into the executable so they can't be synced with a previous build. Correct steps to take:
  - Uninstall the old .apk (Android) or .ipa (iOS) from the device or emulator you are running the app on.
  - Execute the `tns build android` or `tns build ios` command to create a new .apk or .ipa for your app.
  - Execute the `tns run android` or `tns run ios` command to install the new executable and you'll find your files are now packaged into your application.
