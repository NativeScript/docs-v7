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
