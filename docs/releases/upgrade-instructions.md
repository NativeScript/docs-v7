---
title: Upgrade Instructions
description: Upgrade Instructions
position: 3
slug: upgrade-instructions
previous_url: /upgrade-instructions
---

# Upgrade Instructions

To upgrade a NativeScript application you need to upgrade several things: NativeScript CLI Tooling, the iOS and Android runtimes and the cross-platform modules. In the steps below you will see how to do this. Please also keep in mind that you should read the [breaking changes]({% slug breaking-changes %}) for each release.

## Upgrading the NativeScript tools

The below command demonstrates how to upgrade your NativeScript tools known also as NativeScript CLI.
You should first upgrade your `tns` (or `nativescript`) command, so go to a command prompt or bash/terminal prompt and type:

```
npm install -g nativescript
```

This will automatically download needed files and will update your computer to the latest version of the NativeScript command line.
You can type `tns --version` to verify that the new version is installed.

## Upgrading the application

You should execute the **update** command in the root folder of your project to upgrade it with the latest versions of iOS/Android runtimes and cross-platform modules.

>The **update** command is introduced in version 2.4 of NativeScript CLI. You should update NativeScript CLI before using this command.

```
tns update
```

In order to get the latest development release instead, pass **next** as argument:

```
tns update next
```

You can also switch to specific version by passing it to the command:

```
tns update 2.3.0
```

> **Note:** The command `tns update` is updating the `tns-core-modules` and the runtimes (`tns-android` and `tns-ios`). The command is combining the next two commands in this article (`tns platform add` and `npm i tns-core-modules`).

## Upgrading platforms

Follow those steps in order to get the latest versions of Android and/or iOS runtimes. Navigate to the root level folder where your project is, and then if you are working on a Android project, type:

```
tns platform remove android
tns platform add android
```

and/or (if you are working on a iOS version on a Mac):

```
tns platform remove ios
tns platform add ios
```

## Upgrading TNS modules

The cross-platform modules are available as a npm package named [tns-core-modules](https://www.npmjs.com/package/tns-core-modules).

In order to use them in your project, you will have to explicitly install the package, for example (assuming you are still in your main app project folder from the steps above):

```
npm install tns-core-modules@latest --save
```

This installs the **tns-core-modules** package to the node_modules folder and adds it as a dependency to the package.json of the project.

> **Important:** The `tns create` command will create a new project, add the **tns-core-modules** package as a dependency to its package.json and install it. So each new project you create will have the **tns-core-modules** package installed and you do not have to install it explicitly.

Another place to find **tns-core-modules** package is [NativeScript Releases](https://github.com/NativeScript/NativeScript/releases/), where you can find a collection of the available tns-core-modules-\*.tgz packages for every release. You can download a selected release and install it by running: `npm install <path to tns-core-modules-*.tgz> --save`.

## Upgrading TypeScript

The TypeScript plugin is available as a npm package named [nativescript-dev-typescript](https://www.npmjs.com/package/nativescript-dev-typescript)/
To use TypeScript, you will have to explicitly install the package as a `devDependency`. After instalation, a `tsconfig.json` file is created with that includes the base TypeScript configuration for a NativeScript project.

```
npm i nativescript-dev-typescript@latest --save-dev
./node_modules/.bin/ns-upgrade-tsconfig
```

## Upgrading Angular dependencies

The Angular plugin is available as an npm package named [nativescript-angular](https://www.npmjs.com/package/nativescript-angular). To update the version of the plugin and the related dependency, the package should be explicitly installed, and the related Angular dependencies should be updated accordingly. To ease the update process, the plugin comes with an automated script `update-app-ng-deps` located in `<project-folder/node_modules/.bin>` folder.

```
npm i nativescript-angular@latest --save
./node_modules/.bin/update-app-ng-deps
npm i
```

## Upgrading Webpack

The Webpack plugin is available as a npm package named [nativescript-dev-webpack](https://www.npmjs.com/package/nativescript-dev-webpack). To use the plugin in your project, you should explicitly install the package as `devDependency`.The initial installation of the plugin will install all related development dependencies and will create the default `webpack.config.js` file. If the `webpack.config.js` file is already existing it won't be overwritten by the installation of `nativescript-dev-webpack`.

```
npm i nativescript-dev-webpack --save-dev
```

### Updating Webpack version and configuration

When upgrading an existing version of the Webpack plugin, you should consider that the related development dependencies also have to be updated accordingly. To ease the process, the plugin provides an automated script for that purpose called `update-ns-webpack` located in `<project-folder>/node_modules/.bin` folder. The script comes with two flags:
- `--deps` - this flag will update all related development dependencies.
- `--configs` - this flag will update the default `webpack.config.js` file.

```
npm i nativescript-dev-webpack@latest --save-dev
./node_modules/.bin/update-ns-webpack --deps --configs
```

> **Important:** When using the `--configs` flag, any previous configuration will be overwritten and lost. Consider saving any custom code that you have introduced in your `webpack.config.js` and reapplying the code after using the `--configs` flag.
