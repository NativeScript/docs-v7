---
nav-title: Troubleshooting
title: Troubleshooting
description: Known issues with NativeScript and their workarounds
position: 18
---

# Known Issues and Limitations

NativeScript {{site.current-version}} is known to have the following issues and limitations.

* [CLI](#cli)
* [User Experience](#user-experience)

## CLI

### Problem

When trying to run an android project with cli an error commes up:

```Shell
FAILURE: Build failed with an exception.

* What went wrong:
A problem occurred configuring root project 'some_name_of_app'.
> Could not resolve all dependencies for configuration ':_debugCompile'.
```

**Workaround** <br/>You should open android sdk manager and download Android Support Repository located in Extras section at the bottom. See [Set up windows](setup/ns-cli-setup/ns-setup-win.md)

### Problem

On OS X systems with Node.js 0.12.0 installed, you cannot work with the NativeScript CLI 0.9.0.<br/>For additional information, see [GitHub Issue #268: OSX issue with node 0.12.0](https://github.com/NativeScript/nativescript-cli/issues/268).

**Workaround:**<br/>You can choose between the following workarounds.

* Update the NativeScript CLI to 0.9.1.
* Revert Node.js to 0.10.36.

### Problem

On OS X systems with Xcode 6.1 installed, you cannot run or debug apps on iOS 8.1.3 devices.<br/>The developer disk images provided with the iOS SDK in Xcode 6.1 are not compatible with iOS 8.1.3. The NativeScript CLI uses these disk images to work with your attached iOS devices.

**Workaround:**<br/>Update to Xcode 6.1.1 or later.

### Problem

The `debug` command times out when you attempt to debug on Android devices or emulators and the debug tools do not start.<br/>The `debug` command is configured with a 30-second timeout. On slower computer configurations, the CLI might exceed this timeout when connecting to your Android devices or emulators.

**Workaround:**<br/>Re-run the `debug` command.

### Problem

On OS X systems, the debug tools for Android never launch.<br/>The NativeScript CLI uses the [opener npm package](https://www.npmjs.com/package/opener) to open Chrome. The current version of the package that the CLI uses cannot open the browser.

**Workaround:**<br/>Update the opener package to a newer version. If this does not resolve the issue, try modifying your local copy of the package.

## User Experience

### Problem

When you run your app on Android device for the first time, the app loads very slowly and might appear to be unresponsive.<br/>The issue reoccurs on every redeployment.

**Workaround:**<br/>None. Wait for the app to load.

The NativeScript team is working on improving the performance of Android apps on initial run.