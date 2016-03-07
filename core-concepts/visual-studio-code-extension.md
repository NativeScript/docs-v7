---
title: NativeScript Extension for Visual Studio Code
description: How to install, set up and use the NativeScript extension for Visual Studio Code.
position: 11
slug: nativescript-extension-for-visual-studio-code
---

# NativeScript Extension for Visual Studio Code

1. [Installation](#installation)
2. [Debugging](#debugging)
  1. [Generate launch configurations](#generate-launch-configurations)
  2. [Launch an application with debugger](#launch-an-application-with-debugger)
  3. [Attach the debugger to an already running app](#attach-the-debugger-to-an-already-running-app)
  4. [Debug TypeScript](#debug-typescript)
  5. [Supply additional arguments to the debug command](#supply-additional-arguments-to-the-debug-command)
  6. [Turn on debugging protocol diagnostic logging](#turn-on-diagnostic-logging)
3. [Use NativeScript-specific commands](#use-nativescript-specific-commands)
4. [NativeScript CLI Version Detection](#nativescript-cli-version-detection)

## Installation

To install the [NativeScript extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=Telerik.nativescript) open the Command Palette (`F1` or `Cmd+Shift+P`) and run `Extensions: Install Extension` command, then search for 'NativeScript' and choose it from the list.

![Installing the NativeScript extension for Visual Studio Code](../img/visual-studio-code-extension/install.png)

After the installation completes, the extension appears in the list of installed extensions. You can see it if you run `Extensions: Show Installed Extensions` command from the Command Palette.

## Debugging

Open your application root folder, created with the `tns create` command, in Visual Studio Code.

### Generate launch configurations

Click the debugging icon ![VS Code debug panel](../img/visual-studio-code-extension/debug-panel.png) in the View bar, and then click the gear icon ![gear icon](../img/visual-studio-code-extension/gear-icon.png) to choose the NativeScript debug environment. A `launch.json` file should be generated in your `.vscode` folder located next to the `app` folder. The configurations, described in `launch.json` can be selected from the menu in the Debug Panel.

![Installing NativeScript extension for Visual Studio Code](../img/visual-studio-code-extension/configurations-menu.png)

### Launch an application with debugger

Choose one of the launch configurations (e.g. `Launch on iOS Emulator`) and press the `Start` button next to the menu. This will run your app in the iOS emulator and attach the VS Code debugger. The app should break on the first JavaScript/TypeScript statement. More information about the debugging support in VS Code can be found in the [VS Code Debugging Guide](https://code.visualstudio.com/docs/editor/debugging).

![NativeScript Debugging](../img/visual-studio-code-extension/nativescript-debugging.png)

### Attach the debugger to an already running app

If you already have a NativeScript application running your Android or iOS emulator or device you can attach the VS Code debugger to it, without rebuilding and restarting the application. Just select the desired attach configuration through the debug configuration menu and press the start button.

### Debug TypeScript

In case you are writing your app in TypeScript you have fully functional debugging support in Visual Studio Code. To debug TypeScript, make sure the TS compiler is producing source maps by setting `"sourceMap": true"` in your `tsconfig.json`.

> Using the [TypeScript plugin for NativeScript](https://github.com/NativeScript/nativescript-dev-typescript) is strongly recommended instead of manually setting up the TypeScript compiler options and build tasks. The plugin handles the creation of all the configuration settings and guarantees smooth integration with Visual Studio Code.

### Supply additional arguments to the debug command

Under the hood, starting a particular debug configuration executes the `tns debug` command with various arguments. You can append additional arguments by supplying them in the `tnsArgs` property of a debug configuration definition in `launch.json`. For example if you add `"tnsArgs": "--log=trace"` in the `Launch on iOS Emulator` configuration, in the background VS Code will execute `tns debug ios --emulator --no-client --log=trace` command, which will give you more verbose information in the Debug Console.

![Supply custom arguments to the debug command](../img/visual-studio-code-extension/nativescript-tns-args.png)

### Turn on diagnostic logging

If the `diagnosticLogging` flag for a particular debug configuration in `launch.json` file is set to `true` (its default value is `false`), diagnostic messages will be logged on the debugger console after attaching the debugger to the NativeScript application. This is useful for rough debugging of the extension itself, because all sent/received messages which are part of the communication between the frontend and the backend are logged.

## Use NativeScript-specific commands

Type `nativescript` in the Command Palette and you will see all NativeScript-specific commands. Currently there are only two of them but the list will grow in the future.

![NativeScript commands](../img/visual-studio-code-extension/nativescript-commands.png)

Run command is the equivalent to `tns run` in the NativeScript CLI. It lets you build, deploy and run your app on emulator/device directly from Visual Studio Code.

## NativeScript CLI Version Detection

The extension is depending on a globally installed NativeScript CLI. It will show an error message if it can't find it.

![NativeScript not found](../img/visual-studio-code-extension/nativescript-not-found-error-message.png)

> The extension requires a specific NativeScript CLI version and if you have another version installed, you will see a warning message. The extension is likely to work with the unsupported version but it is recommended that you update the NativeScript CLI or the VS Code extension.