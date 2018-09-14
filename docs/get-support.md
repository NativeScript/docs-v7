---
title: Get support
description: Known issues with NativeScript, and where to get help when you run into problems
position: 130
slug: get-support
publish: true
---

# Get support

* [Where to get help](#where-to-get-help)
* [How to obtain diagnostic reports](#how-to-obtain-diagnostic-reports)

> **Installation Problems?** Try [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick) for a one-click setup experience for macOS, Windows, and Linux. Sidekick installs the NativeScript CLI and required dependencies for macOS and Windows - and offers starter kits, cloud-based builds for iOS and Android, and app store publishing.

## Where to get help

The NativeScript framework has a vibrant community that’s here to help when you run into problems.

If you hit an issue, start by seeing if anyone else has reported the problem on [Stack Overflow](https://stackoverflow.com/questions/tagged/nativescript) or [the deprecated NativeScript community forum](https://discourse.nativescript.org/). If you can’t find any information, try creating a new question on Stack Overflow with any details needed to recreate the issue.

If you’ve found an issue with the NativeScript framework itself, please report the problem in the appropriate GitHub repository.

- [NativeScript CLI](https://github.com/nativescript/nativescript-cli/issues)
- [NativeScript modules](https://github.com/nativescript/nativescript/issues)
- [NativeScript documentation](https://github.com/nativescript/docs)
- [NativeScript iOS runtime](https://github.com/nativescript/ios-runtime)
- [NativeScript Android runtime](https://github.com/nativescript/android-runtime)

## How to obtain diagnostic reports
When you find a bug or crash in NativeScript there are some additional diagnostic logs that can be very useful in tracking 
down the reasons behind the faulty behavior. Depending on the component which could be responsible, there are different 
settings that you can switch.  

### CLI

You can use the `--log trace` option of  `tns` to enable the most detailed diagnostic output. The accepted values of the 
`log` option are `info`,  `debug` and `trace` (in increasing detailness)

Example:
`tns build ios --log trace`

### Android Runtime

If you suspect that the Android Runtime behaves incorrectly you can enable verbose output of its actions by calling the 
`__enableVerboseLogging` function in your main `app.js` file. If your project is written in TypeScript, you'll have to 
declare the function before calling it.

Examples: 
* JavaScript
```JS
__enableVerboseLogging();
```
* TypeScript
```TS
declare var __enableVerboseLogging : any;
__enableVerboseLogging();
```

Afterwards you should launch your application and reproduce the issue:

1. Clear the device's logcat by executing  `adb logcat  -c`
2. Start the application and perform the steps required to reproduce the problem
3. Save the logcat to a text file by executing  `adb logcat -d >logcat.txt`
4. Open and analyze the generated `logcat.txt` file or attach it to your issue in GitHub 
if you need assistence.

### iOS Runtime

In order to obtain device logs you can use the [Console application](https://support.apple.com/guide/console/welcome/mac)

1. Launch `Console`
2. Select your device from the left-hand side pane
3. Press the `Clear` button from the toolbar
4. Launch the application and reproduce the problem
5. Click in the messages pane of `Console`
6. Select all (`Edit | Select All` from the menu or `⌘+A`)
7. Copy (`Edit | Copy` from the menu or `⌘+C`) 
8. Open a new file in `TextEdit` or your text editor of choice
9. Paste the copied text and save the file
10. Analyze the file or attach it to your GitHub issue in order to get assistence
