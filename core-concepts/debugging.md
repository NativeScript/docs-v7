---
title: Debugging
description: How to debug {N} applications.
position: 10
slug: debugging
previous_url: /debugging
---

# Debugging

You can debug apps developed with the NativeScript framework from both the NativeScript CLI and [Visual Studio Code](https://code.visualstudio.com/).

* [Debugger Commands](#debugger-commands)
* [Debugger Options](#debugger-options)
* [Debugging with Visual Studio Code](#debugging-with-visual-studio-code)

## Debugger Commands

To start the debugger for Android, run the following command:

```Bash
tns debug android
```

To start the debugger for iOS, run the following command:

```Bash
tns debug ios
```

This command starts the platform-specific debugger with the default `--debug-brk` option.

## Debugger Options

You can customize the `tns debug` command using any of the following options:
* `--debug-brk` - Prepares, builds and deploys the application package on a device or in an emulator, launches the browser and stops at the first breakpoint. This option is enabled by default when you run `tns debug` and no other options are specified.
* `--start` - Attaches the debug tools to a deployed and running app.
* `--stop` - Detaches the debug tools.
* `--emulator` - Specifies that you want to debug the app in an emulator.
* `--timeout` - Sets the number of seconds that the NativeScript CLI will wait for the debugger to boot. If not set, the default timeout is 90 seconds.

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
