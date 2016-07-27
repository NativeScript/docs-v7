---
title: Bundling Script Code with Webpack
description: Learn how to optimize your code and reduce application size.
position: 40
slug: bundling-with-webpack
previous_url: /core-concepts/bundling-with-webpack
---

# Using Webpack to Bundle Your Code

0. [Overview](#overview)
1. [Introducing Webpack](#introducing-webpack)
2. [Installation](#installation)
3. [How nativescript-dev-webpack works](#how-nativescript-dev-webpack-works)
    : config, hooks
4. [Bundling](#bundling)
5. [Android Native Classes](#android-native-classes)
6. [Tips and Tricks](#tips-and-tricks)
    1. [Dynamic Imports](#dynamic-requires)
    2. [Advanced Configuration](#advanced-configuration)
    3. [Bundling HTML templates](#bundling-html-templates)
7. Webpack resources (#webpack-resources)

## Overview

JavaScript code and general asset bundling has been a member of the web developer toolbox for a long time. Tools like [webpack](https://webpack.github.io/) have been providing support for an enjoyable development experience that lets you assemble client-side code from various module sources and formats and then package it together. Most importantly, they allow for page load time optimizations that reduce or parallelize the number of requests a browser makes to the server.

Why bundle scripts in a mobile app though? Aren't all files stored on the local device, so requesting them should be faster than an HTTP request?! Yes, that is the case, but bundling still has an important place in mobile app optimizations:

* Fewer filesystem operations on app startup since all code is loaded from a single bundle file. Mobile file storage is not known for being very performant.
* Smaller code size. Bundlers traverse the module import graph and do not bundle unused modules. Not using that obscure feature in module X? Don't make your users pay for it then.
* Preprocessing and interoperability hooks (not covered in this article). Webpack provides a way to resolve modules and expressions differently according to its configuration. It also contains a lot of plugins and loaders that let you embed different content in your application or use code written in different programming languages.

## Introducing Webpack

Webpack works by traversing your source tree starting from a number of "entry" modules. This makes it possible to collect just modules that are actually used in your program.

Bundling options are configured in the `webpack.config.js` file, which has the benefit of being a fully-functional JavaScript program that can give you great flexibility. See the [advanced configuration](#advanced-configuration) section below for examples.

Since bundling can be a slow and resource intensive operation, we do not enable it for every build. It is easiest to develop and debug your code without bundling, and use bundled code for QA/release builds.


## Installation

The easiest way to enable webpack support for your application is to install the `nativescript-dev-webpack` plugin. To do that, run this in your application folder:

```
$ tns install webpack
```

## How nativescript-dev-webpack works

Installing the plugin adds the following files to your project:

* `webpack.config.js` -- the main bundling config. Add it to source control.
* `app/tns-java-classes.js` -- native Java classes entrypoint . See [below](#android-native-classes) for details. Add it to source control too.
* An "after-prepare" bundling build hook. Add it to source control or gitignore `hooks/after-prepare`, as that directory will be recreated if missing.

The nativescript-dev-webpack plugin works together with the `tns` CLI tool. Its "after-prepare" build hook invokes the webpack process. Since most transpiler plugins are run as "before-prepare" hooks, this happens after all your code has been verified and transpiled to JavaScript.

### Bundling Transpiled Code

Webpack supports two modes of operation when using code that transpiles to JavaScript e.g. TypeScript, CoffeeScript:

1. Run the transpiler, and then run webpack on the generated file. This is the simplest and hence the recommended approach for NativeScript apps at the moment.
2. Register a loader for the transpilable language, and run transpilation as a part of the bundling process.

## Bundling

Bundling is run as a part of the platform "preparation" process and is invoked by the respective `tns prepare <platform>` command, and its relatives like `tns build <platform>` and `tns run <platform>`.


Note that the default behavior will **NOT** trigger bundling. You need to explicitly request it with the `--bundle` option:

```
$ tns prepare android --bundle
```

or

```
$ tns run ios --bundle
```

and, of course:

```
$ tns build ios --for-device --bundle
```

To reiterate, passing the `--bundle` option will **not** include any JavaScript modules from your `node_modules` folder in your app. The resulting bundle is the only code that will get executed on the emulator/device.

## Android Native Classes

The NativeScript Android runtime allows for certain classes to contain both a Java and a JavaScript implementation. The way this works is by using a Java annotation that points to the JavaScript module which contains the corresponding JavaScript class. Those classes need some special handling by the bundling process since they need to be loaded by Java code (which webpack does not control), and they usually need to be loaded earlier than the rest of the application.

The way `nativescript-dev-webpack` solves this problem is to add mappings for those classes to a config file called `tns-java-classes.js` and split the bundle in two chunks. This allows us to load the chunk containing the Java-related code first.

On installation, you will get a default file that registers built-in classes like `com.tns.NativeScriptApplication` and `com.tns.NativeScriptActivity`. You can modify this file and include other classes that need to be instantiated from Java code.

### Dynamic Imports

A significant drawback to using bundled code is that you have to know the names of all imported modules in advance at bundle time. That means code using variables and passing them to `require` will not work:

```JavaScript
// THROWS AN ERROR!
require(myPlugin);
```

You can solve this if you have a known set of resolvable modules and you need to switch between them by registering those so that webpack discovers them. You do that by adding a set of `global.registerModule` calls to your application bootstrap code (or some other module that is discovered by webpack when traversing the module import graph):

```JavaScript
require("globals");
global.registerModule("my-plugin", function() { return require("my-plugin"); });
```

Then you will be able to import this module using the `global.loadModule` API:

```JavaScript
var myPlugin = "my-plugin";
//...
global.loadModule(myPlugin);
```

## Tips and Tricks

Webpack bundling can fail for different reasons, or it can generate code that breaks at runtime (like the dynamic imports scenario outlined above). Debugging problems is easy once you know what code runs on your device.

### Debugging Bundling Errors

Webpack may not show all error details by default, but you can always enable that by passing the `--display-error-details` [configuration option](https://webpack.github.io/docs/cli.html#display-error-details). Since the plugin invokes webpack automatically, the way to pass those options is via the `WEBPACK_OPTS` environment variable. For example, when running in a bash-like command shell you can do:

```
$ WEBPACK_OPTS="--display-error-details" tns prepare android --bundle
```

Other options that can be useful when diagnosing a problem are: `--display-modules`, `--display-reasons`, `--display-chunks`.

### Inspecting Bundles

Bundles are generated in the platform output folders. Look for the `bundle.js` and `tns-bundle-js` files in your `platforms/android/...` and `platforms/ios/...` "app" folders.

### Advanced Configuration

The `webpack.config.js` file exports a valid webpack configuration that you can modify in-flight. A typical file looks like:

```JavaScript
var bundler = require("nativescript-dev-webpack");

module.exports = bundler.getConfig({
    // TODO: add project-specific webpack settings here...
});
```

You have two customization options:

1. Pass your pre-populated configuration in the object parameter to `bundler.getConfig`. Any top-level webpack properties that you set will be preserved by the plugin.
2. Modify the `bundler.getConfig` result before reexporting it. This might be more convenient if you need to modify a single suboption of an option that is set by default. For example, here is how you can **only** disable module path information, and preserve the rest of the `output` options:

```JavaScript
var bundler = require("nativescript-dev-webpack");

var config = bundler.getConfig({});
config.output.pathinfo = false;
module.exports = config;

```

### Bundling HTML Templates

Webpack can bundle not only JavaScript code files -- it can be extended with different "loaders", and web developers typically use it to reduce server round trips while fetching resources.

You can use the same trick to reduce file system reads and simplify your application deployment. This is especially useful in Angular applications where you can have components resolve their HTML templates from bundled strings using the [html-loader](https://www.npmjs.com/package/html-loader) loader:

1. Add `html-loader` as a developer dependency in your package.json:

    ```sh
    $ npm install --save-dev html-loader
    ```
2. Register your `node_modules` dir as your loader resolver root (webpack doesn't do it by default), and register a loader for modules whose names end in ".html" in your `webpack.config.js`. Here is a sample configuration:

    ```JavaScript
    var bundler = require("nativescript-dev-webpack");
    var path = require("path");

    module.exports = bundler.getConfig({
        resolveLoader: {
            root: path.join(__dirname, "node_modules")
        },
        module: {
            loaders: [
                {
                    test: /\.html$/,
                    loader: "html"
                }
            ]
        }
    });
    ```

3. Change your Angular component template declarations from using `templateUrl` to template:

    ```TypeScript
    @Component({
        selector: "my-app",
        template: require("./app.component.html"),
    })
    export class AppComponent {
    }
    ```

## Webpack Resources

Bundling JavaScript code can get complex very soon, and encountering webpack for the first time can get daunting. A full introduction to webpack and related technologies is beyond the scope of this article, and we recommend the following resources:

* [Introduction](https://webpack.github.io/docs/what-is-webpack.html)
* [Tutorial](https://webpack.github.io/docs/tutorials/getting-started/)
* [CommonJS Guide](https://webpack.github.io/docs/commonjs.html)
* [Webpack CLI Reference](https://webpack.github.io/docs/cli.html)
