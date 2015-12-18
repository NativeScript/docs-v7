---
title: Debugging
description: How to debug {N} applications.
position: 10
slug: debugging
previous_url: /debugging
---

# Debugging

This article contents:

* [Overview](#overview)
* [Debugger commands](#debugger-commands)
* [Debugger options](#debugger-options)


## Overview

The NativeScript framework provides a way to debug your applications. In this document we will describe the process of debugging for both Android and iOS applications through the CLI. We will show the basic debugging commands and options and examples of how to use them.

## Debugger commands

In order to start the debugger run:
```Bash
tns debug anroid/ios
```
This command will start the platform speciffic debugger with default `--debug-brk` option.

## Debugger options

The `tns debug` command can be augmented with several options:
* `--debug-brk` - Prepares, builds and deploys the application package on a device or in an emulator, launches the browser abd stops at the first breakpoint.
* `--start` - Attaches the debug tools to a deployed and running app.
* `--stop` - Detaches the debug tools.
* `--emulator` - Specifies that you want to debug the app in an emulator.
* `--timeout` - Sets the number of seconds that the NativeScript CLI will wait for the debugger to boot. If not set, the default timeout is 90 seconds.

For more information on platform speciffic commands you can run:
```
tns help debug android/ios
```

