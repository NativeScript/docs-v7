---
nav-title: Upgrade instructions
title: "Upgrade instructions"
description: Upgrade instructions
position: 20
---

# Upgrade Instructions

To upgrade a NativeScript application you need to upgrade several things: NativeScript CLI Tooling, the iOS and Android runtimes and the cross-platform modules. In the steps below you will see how to do this. Please also keep in mind that you should read the [breaking changes] (./breaking-changes) for each release.

### Upgrading the NativeScript Tools

First thing to do is upgrade your `tns` (or `nativescript`) command, so go to a command prompt or bash/terminal prompt and type:
```
npm update -g nativescript
```

This will update you to the latest version of the nativescript command line.  
You can type `tns --version` to verify new version is installed.

### Upgrading the Platforms

Next thing you will need to upgrade is your **platforms** in order to get the latest enhancements of the Android and/or iOS runtimes. So navigate to the root level folder where your project is; and then if you are working on a Android project type:
```
tns platform update android
```

and/or (if you are working on a iOS version on a Macintosh):
```
tns platform update ios
```

### Upgrading TNS Modules

Starting with NativeScript 1.3.0, the **tns_modules** are available as a npm package named [tns-core-modules] (https://www.npmjs.com/package/tns-core-modules).

In order to use them in your old project, you will have to explicitly install the package, for example (assuming you are still in your main app project folder from the steps above):

```
npm install tns-core-modules --save
```

This installs the **tns-core-modules** package to the node_modules folder and adds it as a dependency to the package.json of the project.

> **NOTE:** The tns_modules directory in your app folder will not be used anymore and you can safely remove it.

Another place to find the **tns-core-modules** package is [NativeScript Releases](https://github.com/NativeScript/NativeScript/releases/), where you can download tns-core-modules-\*.tgz containing the cross-platform modules from the respective release and execute the command above as giving it the local path of the package: `npm install <path to tns-core-modules-*.tgz> --save`.

> **IMPORTANT:** Starting with NativeScript 1.3.0, the `tns create` command will create a new project, add the **tns-core-modules** package as a dependency to its package.json and install it. So each new project you create will have the **tns-core-modules** package installed and you do not have to install it explicitly.
