---
title: Bundling Script Code with Webpack
description: Learn how to optimize your code and reduce application size.
position: 40
slug: bundling-with-webpack
previous_url: /core-concepts/bundling-with-webpack,/tooling/bundling-with-webpack
---

# Using Webpack to Bundle Your Code

JavaScript code and general asset bundling have been a member of the web developer toolbox for a long time. Tools like [Webpack](https://webpack.js.org) have been providing support for an enjoyable development experience that lets you assemble client-side code from various module sources and formats and then package it together. Most importantly, they allow for page load time optimizations that reduce or parallelize the number of requests a browser makes to the server.

Why bundle scripts in a mobile app though? Aren't all files stored on the local device, so requesting them should be faster than an HTTP request?! Yes, that is the case, but bundling still has an important place in mobile app optimizations:

* Fewer filesystem operations on app startup since all code is loaded from a single bundle file. Mobile file storage is not known for being very performant.
* Smaller code size. Bundlers traverse the module import graph and do not bundle unused modules. Not using that obscure feature in module X? Don't make your users pay for it then.
* Tree-shaking. With the advent of ECMAScript 2015 modules, we have new tools that allow stripping unused parts of big modules and further reduce our application size.

## Introducing Webpack

Webpack works by traversing your source tree starting from some "entry" modules and navigating through module imports. This makes it possible to collect just modules that are used in your program. Webpack is very extensible - you can customize every step of the bundling process and add support for all sorts of asset generation and manipulation procedures.

## Installation and Configuration

Since every project is unique and can have quite complex requirements for bundling, we tried to make Webpack configuration as simple as possible. After installation, the plugin will configure the bundling dependencies, and add a basic configuration that should work for most projects. Developers can (and should) extend that to fit their specific project needs.

The easiest way to enable Webpack support for your application is to install the `nativescript-dev-webpack` plugin. To do that, run this in your application folder:

```
$ npm install --save-dev nativescript-dev-webpack
```

The plugin adds a few dependencies to the project. Don't forget to install them:

```
$ npm install
```

## How nativescript-dev-webpack Works

Installing the plugin adds a `webpack.config.js` file which contains sensible defaults, but it is designed to be as readable and easy to modify as possible.

> Note: In case you need to update your project dependencies or regenerate the configuration file, you can do that by running the `update-ns-webpack` script that comes with the plugin:

```
$ ./node_modules/.bin/update-ns-webpack --configs --deps
```

## Usage

### NativeScript CLI commands

`nativescript-dev-webpack` expands the usual workflow of working with your project. Given that you have your project running in its non-bundled state, you can test the bundled version with the following commands:

```
$ tns run android --bundle
```

or

```
$ tns run ios --bundle
```

If you want to package your application, you need the `build` commands:

```
$ tns build android --bundle
```

or

```
$ tns build ios --bundle
```

The former will produce an android `.apk` archive, while the latter will create an `.app` or `.ipa` package.

You can also provide environmental variables to the Webpack build:

```
$ tns build android --bundle --env.development --env.property=value
```

They can be accessed through the `env` object in the Webpack configuration:

```JavaScript
// webpack.config.js
module.exports = env => {
    console.dir(env); // { development: true, property: 'value' }
}
```

### Publishing Application

A bundled version of the application for Android can be built in release with this script:

```
$ tns build android --bundle --release --keyStorePath ~/path/to/keystore --keyStorePassword your-pass --keyStoreAlias your-alias --keyStoreAliasPassword your-alias-pass
```

Once this is finished, proceed with uploading the output .apk file in the <project>/platforms/android/app/build/outputs/apk directory on Google Play store.

You can build a bundled version of the application for iOS in release with this script:

```
$ tns build ios --bundle --release --forDevice --teamId TEAM_ID
```

Note  that if `--teamId` flag is emmited, the NativeScript CLI will prompt for team ID during the build process.

Once the release build is ready, you have two options:

* Open `<project/platforms/ios/<project>.xcodeproj>` (or `<project/platforms/ios/<project>.xcworkspace>` if present) in Xcode to configure project signing and upload the archive to App Store. This is the recommended option.
* Specify your development team in `<project>/app/App_Resources/iOS/build.xcconfig` from the command line and execute 

```
$ tns publish ios --ipa ipa-file-path-here
```

More options for publishing an iOS application can be found in the ["Publishing for iOS article"](https://docs.nativescript.org/publishing/publishing-ios-apps) article.

> If there are multiple mobile provisioning profiles for the selected development team available on the machine, it is not guaranteed that Xcode will select the desired one and publishing using the command line will be successful. Therefore, in such cases, we recommend manually configuring and uploading the project from Xcode.

## Optimizations

### Uglify.js

The Webpack configuration includes the [`uglifyjs-webpack-plugin`](https://github.com/webpack-contrib/uglifyjs-webpack-plugin). The plugin performs code minification and improves the size of the bundle.
It is disabled by default because it slows down the building process. You can enable it by providing the `--env.uglify` flag:

```
$ tns build android|ios --bundle --env.uglify
```

### Angular and Ahead-of-Time Compilation

The NativeScript Angular projects will have the [`@ngtools/webpack`](https://www.npmjs.com/package/@ngtools/webpack) plugin added by the `nativescript-dev-webpack` plugin. The `@ngtools/webpack` plugin performs Ahead-of-Time compilation and code splitting for lazily loaded modules. If your application is Ahead-of-Time compiled, you don't need the Angular compiler included in your app bundle which results in smaller application size and improved start up time. 

To build with Ahead-of-Time compilation provide the `--env.aot` flag:
```
$ tns build android|ios --bundle --env.aot
```

### V8 Heap Snapshot

The Webpack configuration also includes the [`NativeScriptSnapshotPlugin`](https://github.com/NativeScript/nativescript-dev-webpack/tree/master/plugins/NativeScriptSnapshotPlugin). The plugin loads a single Webpack bundle in an empty V8 context, a.k.a. snapshotted context, and after its execution captures a snapshot of the produced V8 heap and saves it in a `.blob` file. Next the `.blob` file is included in the `.apk` bundle and [is loaded by the Android Runtime on app initialization. This will obviate the need for loading, parsing and executing the script on app startup which can drastically decrease the starting time.

You can use the snapshot plugin only for **release** builds. You need to provide the `--env.snapshot` flag along with the other release arguments:
```
$ tns build android --bundle --env.snapshot --release --keyStorePath ~/path/to/keystore --keyStorePassword your-pass --keyStoreAlias your-alias --keyStoreAliasPassword your-alias-pass
```
or
```
$ tns build ios --bundle --env.snapshot --release --forDevice --teamId TEAM_ID
```

Known limitations:
* No iOS support. Heap snapshot is a V8 feature which is the engine used in the Android Runtime. Providing `--env.snapshot` flag on the iOS bundling commands will have no effect.
* No Windows support. Providing `--env.snapshot` flag on the Android bundling command will not affect Windows machines.
* Only one Webpack bundle can be snapshotted. By default, this is the `vendor.js` chunk. It contains all external packages used by the application.

#### NativeScriptSnapshotPlugin configuration

The `NativeScriptSnapshotPlugin` by default comes with the following configuration:

```JavaScript
if (snapshot) {
    plugins.push(new nsWebpack.NativeScriptSnapshotPlugin({
        chunk: "vendor",
        requireModules: [
            "tns-core-modules/bundle-entry-points",
            // ...
        ],
        projectRoot,
        webpackConfig: config,
    }));
}
```

* `chunk` - the name of the chunk to be snapshotted.
* `requireModules` - modules in the snapshotted chunk that should be **executed** at build time. You shouldn't add modules that access directly native Android APIs here since they are available only at runtime.
* `projectRoot` - path to the app root folder.
* `webpackConfig` - Webpack configurations object. The snapshot generation modifies the Webpack config object to ensure that the specified bundle will be snapshotted successfully.

#### Other options:
* `targetArchs` - Since the serialization format of the V8 heap is architecture-specific, we need a different blob file for each V8 library target architecture. The Android Runtime library contains 3 architecture slices - `ia32` (for emulators), `arm` and `arm64` (for devices). However, [if not explicitly specified](https://github.com/NativeScript/android-runtime/issues/614), the `arm` slice will be used even on `arm64` devices. In other words, generating heap snapshot for all supported architectures (`arm`, `arm64`, `ia32`) will guarantee that the snapshotted heap will be available on every device/emulator. However, when building for the release, you can leave only `arm` (and `arm64` in case you have [explicitly enabled `arm64` support](https://github.com/NativeScript/android-runtime/issues/614)) in the `targetArchs` array which will decrease the size of the produced APK file.
* `v8Version` - Specify the v8 engine version that should be used. By default, the value is determined based on the Android runtime version that the project is using.

#### [ABI split](https://docs.nativescript.org/publishing/android-abi-split) options:
* `useLibs` - Instructs the plugin to produce `.so` instead of `.blob` files.
* `androidNdkPath` - Path to a local installation of Android NDK.

#### Checking if snapshot is enabled
If you want to toggle whether specific logic is executed only in snapshotted context you can use the `global.__snapshot` flag. Its value is `true` only if the current execution happens in the snapshotted context. Once the app is deployed on the device, the value of the flag is changed to `false`. There is also `global.__snapshotEnabled` flag. Its only difference compared to `global.__snapshot` is that its value is `true` in both snapshotted and runtime contexts, given that snapshot generation is enabled.

```JavaScript
function logMessage(message) {
    if (global.__snapshotEnabled) {
        if (!global.__snapshot) {
            console.log("The current execution is happening in runtime context when we have all {N} APIs available, including console.log(), so this line of code won't fail.");
        }
        console.log("This will fail if logMessage is called in snapshotted context because console.log() is not available there.");
    }
}
```

## Debugging Common Errors

Webpack bundling can fail for different reasons. It sometimes fails to resolve certain modules, or it generates code that breaks at runtime. We'll try to cover a few common failure reasons with steps to resolve them in the following sections.

### Javascript heap out of memory

Bundle processing can consume a significant amount of memory, especially when using uglify `--env.uglify`. The default node process allocates 1.5GB memory. If you encounter issues similar to:
`FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory`

Please set the following environment variable to allocate a larger heap size before running `tns build --bundle`, e.g. to allocate 4GB memory:
For macOS / Linux:
`export NODE_OPTIONS=--max-old-space-size=4096`
For Windows:
`set NODE_OPTIONS=--max-old-space-size=4096`

## Inspecting Bundles

Bundles are generated in the platform output folders. Look for the `bundle.js` and `vendor.js` files in your `platforms/android/...` and `platforms/ios/...` "app" folders. You could change the destination directory by editing your configuration.

##Generating Webpack Report

The default webpack configuration includes the [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) plugin. To generate a report provide the `--env.report` flag:
```
$ tns build android|ios --bundle --env.report
```

The report will be generated inside `your-project/report`.
The `report/report.html` page shows the application chunks. 

![Android report](../img/webpack/android-report.png)

For analyzing the dependency graph between the modules, use [webpack.github.ui/analyse](http://webpack.github.io/analyse/) and open the `stats.json` file.

## Recommendations for Plugin Authors

Most third party packages are problem free, and get picked up by Webpack without any issues. Some libraries though require a bit of tweaking. When you encounter a library that does not get recognized by your Webpack configuration, please open up an issue on that library's GitHub repository.

### Referencing Platform-specific modules from "package.json"

This is the most common problem with third party plugins. Most plugins provide two platform-specific implementations stored in modules named like `my-plugin.android.js` and `my-plugin.ios.js`. The `package.json` file for the plugin looks like this:

```JSON
{
    "main": "my-plugin.js"
}
```

Webpack will read the `package.json` file and try to find a `my-plugin.js` module and will fail. The correct way to reference a platform-specific module would be to remove the `.js` extension:

```JSON
{
    "main": "my-plugin"
}
```

That will allow Webpack to correctly reference `my-plugin.android.js` or `my-plugin.ios.js`.

## Emitting Helper Functions in TypeScript Plugins

The TypeScript compiler implements class inheritance, decorators and other features using a set of helper functions that get emitted at compile time. NativeScript ships with its own implementations of those helpers to allow features like extending platform native classes. That is why you need to configure the TypeScript compiler **NOT** to emit helpers. The easiest way is to edit the `tsconfig.json` file and set the `noEmitHelpers` option to `true`:

```JSON
{
    "compilerOptions": {
        ...
        "noEmitHelpers": true,
        ...
    },
    ...
}
```

## Bundling Background Workers

When the application is implementing workers some additional steps are required to make the project Webpack compatible.
Check out the [`nativescript-worker-loader`](https://github.com/nativescript/worker-loader).

## Webpack Resources

Bundling JavaScript code can get complex quickly, and encountering Webpack for the first time can be daunting. A full introduction to webpack and related technologies is beyond the scope of this article, and we recommend the following resources:

* [Introduction](https://webpack.js.org/guides/getting-started/)
* [Tutorial](https://webpack.js.org/concepts/)
* [Webpack CLI Reference](https://webpack.js.org/api/cli/#components/sidebar/sidebar.jsx)

## Showcase apps

Apps using the nativescript-dev-webpack plugin:

* [Groceries](https://github.com/NativeScript/sample-Groceries)
* [NativeScript SDK Examples](https://github.com/NativeScript/nativescript-sdk-examples-ng)
* [NativeScript-UI SDK Examples](https://github.com/telerik/nativescript-ui-samples-angular)
* [Cosmos Databank](https://github.com/NickIliev/nativescript-ng-cosmos)
* [Tests app NG](https://github.com/NativeScript/tests-app-ng)
