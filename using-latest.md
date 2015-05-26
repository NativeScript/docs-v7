---
nav-title: "Using Latest Code"
title: "Using Latest Code"
description: "NativeScript Documentation: Using Latest Code"
position: 21
---

#Using Latest Code

## Reasoning
It is often working with open-source projects, that one needs a functionality that has not yet passed the full release cycle, or even that is not yet implemented. Building the source code is essential for the purpose. The statement is applicable for NativeScript 

## Behind the Curtains of Running a NativeScript Application

1. `npm install nativescript -g` - Node Package Manager (npm) downloads and installs the [NativeScript CLI](https://www.npmjs.com/package/nativescript)
2. `tns create [AppName]` - the NativeScript CLI downloads the [Hello-World template](https://www.npmjs.com/package/tns-template-hello-world) and unpacks it to a folder, named after the app name you point out. For the time being the template (packed from [this repo](https://github.com/NativeScript/template-hello-world)) contains both its own code and the `tns_modules` folder. The `tns_modules` folder contains a part of the compiled files in the [current repository](https://github.com/NativeScript/NativeScript). Described below
3. `tns platform add android/ios` - the NativeScript CLI downloads the latest SemVer-compatible version of the specified runtime, unpacks it and applies transformations to the native (Eclipse or xCode) project (e.g. changes the project name)
4. `tns run android/ios` - the NativeScript CLI copies the files under the `app` folder to the `platforms/[android/ios]/.../app` folder following a specific logic so that these get further used by a native build tool (*ant*/*xcode-build*). As a next step, the NativeScript CLI executes compilation, deployment and run commands of *ant* or *xcode-build*.
5. Any JavaScript code gets executed in a V8 or JavaScriptCore engine, embedded in the NativeScript runtimes. Each call to an actual native object gets marshalled via the runtimes to the underlying platform and vice-versa. The runtimes provide JavaScript handles to the native objects.

## Contents of the [NativeScript](https://github.com/NativeScript/NativeScript) Repo

The NativeScript framework is built using TypeScript. For that, one of the build steps is TypeScript compilation, which uses TypeScript declarations of the underlying native objects. These are really large files ([android17.d.ts](https://github.com/NativeScript/NativeScript/blob/master/android17.d.ts) and [ios.d.ts](https://github.com/NativeScript/NativeScript/blob/master/ios.d.ts)). The TypeScript compilation with these two files loaded in memory takes a lot of time. To save development time and have as quick and stable feature output, the team decided to keep several important applications inside the same repository, so that all of them get compiled in a single pass.

Having said that, each subfolder of the [apps](https://github.com/NativeScript/NativeScript/tree/master/apps) subfolder of the repo represents a single application.

## Building the Repo
When the repo gets built, it outputs a bunch of packages (stripping the version- and extension- part of the filename for clarity):
- tns-core - the package, containing the core modules, currently distributed with applications under the name of `tns_modules`. Once the  [module/template](https://github.com/NativeScript/nativescript-cli/issues/390) [separation](https://github.com/NativeScript/nativescript-cli/issues/362) gets implemented, these will be distributed via npm.
- tns-sample-* contain some test/demo applications the team use internally for testing
- ths-template-* have templates that will get used once we have the [template-selection functionality](https://github.com/NativeScript/nativescript-cli/issues/374) implemented in the command-line interface
- tns-definitions - contains the TypeScript declaration files for use when writing a TypeScript application you would further either manually compile to JavaScript, or use the [transpilation feature](https://github.com/NativeScript/nativescript-cli/issues/493) of the NativeScript CLI (*to be implemented*)

The repo gets built via the commands:

```Console
npm install -g grunt-cli
npm install
grunt
```

## Using the latest tns_modules

To use the latest tns_modules, simply
- build the repo
- unpack the `tns-core` package from the `bin/dist` folder the `app/` folder of your NativeScript project
- delete the `tns_modules` folder there
- rename the extracted `package` folder to `tns_modules`

## Handling internal breaking changes

It is possible that an internal breaking change gets introduced, involving an update to both the runtimes and the modules. An internal breaking change would mean that the public API of the tns_modules does not get affected, but a work in progress change in the runtimes requires a change in the internal code of the tns_modules themselves.

When such a case happens, the [ios](https://github.com/NativeScript/ios-runtime) and [android](https://github.com/NativeScript/android-runtime) runtimes must be built and updated via the CLI command of:
`tns platform update android/ios --frameworkPath=[Path-to-Runtime-Package]`
