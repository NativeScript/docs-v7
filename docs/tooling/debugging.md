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

The `debug` command builds and deploys new package on the connected device/emulator.
It also tracks for changes in the `app` folder which mean it will livesync your application
when changes in your code are saved. On code change & save, the application is restarted automatically.

> **Note** Changes inside `App_Resources` folder (e.g. `AndroidManifest.xml`, `info.plist` or any of the resources folders) will trigger a rebuild before resuming the livesyncing.

The debugging agent won't be started automatically by NativeScript-CLI but a link is provided for the user to open in Google Chrome. The link appears in the CLI log after the command is executed. Android and iOS have different links, but both can be opened in Google Chrome. The debugger is attached once the link is opened.

To start the debugger for Android, run the following command:

```Bash
tns debug android
```

To start the debugger for iOS, run the following command:

```Bash
tns debug ios
```

This command starts the platform-specific debugger with the default `--debug-brk` option.

> **Note** For more details about `Debugger Command` options, you can use `tns debug android --help` or `tns debug ios --help`.

## Debugger Options

You can customize the `tns debug` command using any of the following options:
* `--debug-brk` - Prepares, builds and deploys the application package on a device or in an emulator, launches the browser and stops at the first breakpoint. This option is enabled by default when you run `tns debug` and no other options are specified.
* `--start` - Attaches the debug tools to a deployed and running app.
* `--stop` - Detaches the debug tools.
* `--emulator` - Specifies that you want to debug the app in an emulator.
* `--timeout` - Sets the number of seconds that the NativeScript CLI will wait for the debugger to boot. If not set, the default timeout is 90 seconds.
* `--inspector` - iOS specific flag to use the embedded Webkit Web Inspector debugger (default is Chrome DevTools)

For more information about Android debugging, run the following command:

```Bash
tns help debug android
```

For more information about iOS debugging, run the following command:

```Bash
tns help debug ios
```

## Debugging with Visual Studio Code

To debug NativeScript applications in [Visual Studio Code](https://code.visualstudio.com/), you need the [NativeScript extension for VS Code](https://marketplace.visualstudio.com/items?itemName=Telerik.nativescript). You can find detailed instructions about how to install and set up the NativeScript extension for VS Code [here]({% slug nativescript-extension-for-visual-studio-code %}).

## Debugging with Chrome DevTools

Debugging Android and iOS applications is as easy as executing `tns debug <android | ios>`. A complete list of features, and how to use them can be found at [Debugging NativeScript apps with Chrome DevTools]({%slug chrome-devtools%}).

## Debugging iOS Applications with the WebKit Web Inspector

To debug iOS applications using the WebKit Web Inspector debugger the `--inspector` flag needs to be supplied to the `tns debug ios` command.

## Known Problems

- The Chrome DevTools Inspector url is different after each application restart while running a debug session.
