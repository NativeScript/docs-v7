---
title: Debugging
description: How to debug {N} applications.
position: 20
slug: debugging
previous_url: /debugging,/core-concepts/debugging
---

# Debugging

You can debug apps developed with the NativeScript framework from both the NativeScript CLI and [Visual Studio Code](https://code.visualstudio.com/).

* [Debugger Commands](#debugger-commands)
* [Debugger Options](#debugger-options)
* [Debugging with Visual Studio Code](#debugging-with-visual-studio-code)
* [Debugging with Chrome DevTools](#debugging-with-chrome-devtools)

## Debugger Commands

The `debug` command builds and deploys a new package on a connected device or emulator. By default, it also starts to track for changes the `app` folder,  meaning that it will automatically livesync changes in code as soon as they are saved. In order to apply the changes, the CLI will automatically restart the application after each sync.

> **Note** Changes inside `App_Resources` folder (e.g. `AndroidManifest.xml`, `Info.plist` or any of the resources folders) trigger a rebuild after which livesyncing is resumed.

For security reasons the debugging agent **can't be started automatically** from the command-line. That's why NativeScript CLI generates a URL which is printed on the screen instead. **You need to manually copy it in Google Chrome's address bar to start debugging.**

To start the debugger for Android, run the following command:

```Bash
tns debug android
```

To start the debugger for iOS, run the following command:

```Bash
tns debug ios
```

## Debugger Options

You can customize the `tns debug` command using any of the following options:

* `--debug-brk` - Prepares, builds and deploys the application package on a device or in an emulator, and stops at the first JavaScript line until either the debugger frontend connects or a 30 seconds timeout elapses.
* `--start` - Attaches the debug tools to a deployed and running app.
* `--emulator` - Specifies that you want to debug the app in an emulator.
* `--timeout` - Sets the number of seconds that the NativeScript CLI will wait for the debugger to boot. If not set, the default timeout is 90 seconds.
* `--no-watch` - If set, changes in your code will not be livesynced.
* `--clean` - If set, forces rebuilding the native application.

### iOS specific options
* `--inspector` - flag to use the embedded Webkit Web Inspector debugger (default is Chrome DevTools)
* `--chrome` - Deprecated (now default). Allows debugging in Chrome Developer Tools. If set, Safari Web Inspector is not started and debugging is attached to Chrome Developer Tools.

For more information about Android debugging, run any of the following commands:

`tns help debug android` or `tns debug android --help`

For more information about iOS debugging, run any the following commands:

`tns help debug ios` or `tns debug ios --help`

## Debugging with Visual Studio Code

To debug NativeScript applications in [Visual Studio Code](https://code.visualstudio.com/), you need the [NativeScript extension for VS Code](https://marketplace.visualstudio.com/items?itemName=Telerik.nativescript). You can find detailed instructions about how to install and set up the NativeScript extension for VS Code [here]({% slug nativescript-extension-for-visual-studio-code %}).

## Debugging with Chrome DevTools

Debugging Android and iOS applications is as easy as executing `tns debug <android | ios>`. A complete list of features, and how to use them can be found at [Debugging NativeScript apps with Chrome DevTools]({%slug chrome-devtools%}).

## Debugging iOS Applications with the WebKit Web Inspector

To debug iOS applications using the WebKit Web Inspector debugger use the `--inspector` flag - `tns debug ios --inspector`.

## Known Issues and Limitations

- **[iOS]** The Chrome DevTools Inspector url is different after each application restart while running a debug session. You have to manually update it in the address bar each time.
