---
title: Bundle Your Code with Webpack
description: Take advantage of modern bundling and optimization strategies with webpack and NativeScript Sidekick.
position: 3
publish: true
slug: webpack
---

# Bundle Your Code with Webpack

Webpack is a module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into a small number of bundles. This is significantly reducing the code size of your application, especially if you are using Angular. Bundling also plays an important role in mobile app optimization. For example, fewer file system operations will be made when the app is launched because all the code is loaded from a single bundle file and this will improve the app starting time significantly. 

Webpack is also highly configurable and extensible - you can customize every step of the bundling process and add support for all sorts of asset generation and manipulation procedures, for example - code minification.

## How to Enable Webpack

Since every project is unique and can have quite complex requirements for bundling we tried to make webpack configuration as simple as possible. After installation, the plugin will configure the bundling dependencies, and add a basic configuration that should work for most projects. Developers can (and should) extend that to fit their specific project needs. 

To enable the webpack option for your application, you need to install the latest version of the [nativescript-dev-webpack](https://github.com/NativeScript/nativescript-dev-webpack) plugin as a `devDependency`. How to install a plugin as a `devDependency` is explained in [Plugins Management]({% slug plugins-management %}).

After you install the plugin and its dependencies, you can enable webpack for [Local]({% slug local-build %}) and [Cloud]({% slug cloud-build %}) builds.

> To enable webpack builds for apps originally created with {{ site.ns-sk }} 1.1.1 or older versions, you need to make additional modifications. For more information, see the [NativeScript Webpack — What Changed and How to Upgrade](https://www.nativescript.org/blog/nativescript-webpack-0.9.0-what-changed-and-how-to-upgrade) blog post.

## Configure Webpack

After you enable the webpack option, click on the blue cogwheel icon next to it to open the webpack configuration dialog. Here, you can enable or disable several predefined settings or add custom webpack settings.

* **Uglify**<br /> When this option is enabled, the JavaScript files of your application will be minified and compressed. For more information about code minification, see [Minification on Wikipedia](https://en.wikipedia.org/wiki/Minification_(programming)).
* **Snapshot**<br /> This option is useful only for Android builds and will significantly increase the start up time of the application. When you build your Android app with Snapshot enabled, a single webpack bundle will be loaded in an empty V8 context (snapshotted context) and after its execution captures a snapshot of the produced V8 heap, it will save it in a blob file. Then, the blob file is included in the `APK` bundle and it is loaded by the Android Runtime on app initialization. This will remove the need for loading, parsing and executing the script on app start up and result in increased performance.
* **AOT (Ahead-of-Time Compilation)** <br /> This option is available only for NativeScript Angular applications. The AOT compilation inlines external HTML templates and CSS style sheets within the application JavaScript, eliminating the need to access the file system at runtime to load those files, which will significantly improve the start up time of the app. In addition, the Angular compiler will not be included in the app package, which will result in a smaller `APK` or `IPA`.
* **Custom webpack settings** <br /> In this field, you can provide various custom webpack settings in `JSON` format.

## Next Steps

Build your app [locally]({% slug local-build %}) or in the [cloud]({% slug cloud-build %}) or [deploy it on a connected device]({% slug deploy-on-device %}).

## See Also

* [Using Webpack to Bundle Your Code in the NativeScript CLI](https://docs.nativescript.org/angular/best-practices/bundling-with-webpack)
* [Webpack Guides](https://webpack.js.org/guides/)
* [Webpack Getting Started](https://webpack.js.org/guides/getting-started/)
* [The Angular Ahead-of-Time (AOT) Compiler](https://angular.io/guide/aot-compiler)