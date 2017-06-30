---
title: Sanity Check A Plugin
description: Guideline how to sanity check NativeScript plugin
position: 60
slug: sanity-check-plugin
---

NativeScript plugins are the main building blocks for NativeScript applications. These building blocks should work properly installed into applications:
- built for Android
- built for iOS
- bundled with webpack

Ignoring any of these non-functional requirements could lead to not working app. Let’s call verification of these requirements – sanity checks.

This article answers the following questions:
- [What do you need to setup sanity checks for your NativeScript plugin?](#what-do-you-need-to-setup-sanity-checks-for-your-nativescript-plugin)
- [How to check your plugin’s code for readability, maintainability, and functionality errors?](#how-to-check-your-plugins-code-for-readability-maintainability-and-functionality-errors)
- [How to check whether your plugin will work in bundled NativeScript application?](#how-to-check-whether-your-plugin-will-work-in-bundled-nativescript-application)
- [How to check whether the application that has your plugin installed will be successfully built for Android and iOS?](#how-to-check-whether-the-application-that-has-your-plugin-installed-will-be-successfully-built-for-android-and-ios)
- [How to execute all sanity checks on every code change of your plugin’s repository?](#how-to-execute-all-sanity-checks-on-every-code-change-of-your-plugins-repository)

##  What do you need to setup sanity checks for your NativeScript plugin?

As we mentioned earlier, NativeScript plugins are building blocks. They work as part of the NativeScript application. 
Add a simple `demo` application that shows how the plugin works. If the plugin is Angular compatible, there should be another `demo-angular` application as well.

```
my-plugin
├── demo
├── demo-angular
└── src
     └── package.json
```

> **NOTE**: It is very handy to have the plugin and demo application(s) in the same repository. The [NativeScript official plugins seed](https://github.com/NativeScript/nativescript-plugin-seed#plugin-folder-structure) defines this structure so if the plugin is based on it, the plugin’s source and the demo app are nicely organized.

In order to ease the process add the following scripts in `package.json` file under `src` folder (the plugins source folder).

```
"ngc": "node --max-old-space-size=8192 ./node_modules/.bin/ngc"
```

This script will initiate Ahead of Time (AOT) compilation. The parameter `max-old-space-size` is a workaround to fix heap out of memory when running node binaries. It's a common issue when using TypeScript 2.1+ and webpack

```
"build": "npm i && tsc && npm run ngc"
```

This script will install all NativeScript plugin’s dependencies, compile TypeScript files and initiate Ahead of Time (AOT) compilation. 

```
"prepublishOnly": "npm run build"
```

This script will be executed before the package is prepared and packed, only on npm publish. More details can be found in the [npm-script documentation](https://docs.npmjs.com/misc/scripts). The build script (defined above) will be executed. This is important because in this way the TypeScript of the plugin will be compiled and the required metadata will be generated any time before publishing.

Refer to [package.json](https://github.com/NativeScript/nativescript-facebook/blob/doc/src/package.json#L12-L15) file of [nativescript-facebook](https://github.com/NativeScript/nativescript-facebook) plugin where these scripts are also added.

## How to check your plugin’s code for readability, maintainability, and functionality errors?

[TSLint](https://palantir.github.io/tslint/) is a great tool for static analysis of your plugin’s code. It will test the plugin for readability and maintainability as well as functionality errors based on customizable rules. This is a [list of all TSLint rules](https://palantir.github.io/tslint/rules/) you can check for. 

The official NativeScript plugin seed recommends TSLint rules defined in this [tslint.json](https://github.com/NativeScript/nativescript-plugin-seed/blob/master/tslint.json) file.

```
my-plugin
├── demo
├── demo-angular
├── src
|    └── package.json
└── tslint.json
```

TSLint could be easily incorporate into any NativeScript plugin by following the next steps:

1.    Add [tslint.json](https://github.com/NativeScript/nativescript-plugin-seed/blob/master/tslint.json) file on root level
2.    In src folder (plugin’s source folder) add the following script in package.json file:

```
"ci.tslint": "tslint '**/*.ts' --config '../tslint.json' --exclude '**/node_modules/**'"
```

This script executes `tslint` command passing the tslint rules defined in `tslint.json` file. The installed `node_modules` will be excluded from the static analysis. 
Having `tslint.json` on root level allows using same TSLint rules for demo apps as well adding the same script.

Now the command `npm run ci.tslint` will start a static analysis.

## How to check whether your plugin will work in bundled NativeScript application?

Key benefits of bundling a NativeScript app are:
- increase the app start-up time
- decrease the size of the app

Check it out in more details into article [“Using Webpack to Bundle Your Code”]({% slug bundling-with-webpack %}). 
NativeScript plugins should work seamlessly in bundled app. This could be verified by testing the bundled demo apps. In order to enable the app for bundling, there is some configuration required. The entire setup is defined in [“Using Webpack to Bundle Your Code”]({% slug bundling-with-webpack %}). 

Once the webpack is setup for the demo app(s), there should be several scripts added into apps package.json files.

```
 "scripts": {
    "ns-bundle": "ns-bundle",
    "publish-ios-bundle": "npm run ns-bundle --ios --publish-app",
    "start-android-bundle": "npm run ns-bundle --android --run-app",
    "start-ios-bundle": "npm run ns-bundle --ios --run-app",
    "build-android-bundle": "npm run ns-bundle --android --build-app",
    "build-ios-bundle": "npm run ns-bundle --ios --build-app"
  }
```

Now the command `npm run build-ios-bundle` will webpack the NativeScript application and build it for iOS. The result is optimized working iOS application that uses the plugin.

Refer to nativescript-facebook [demo app](https://github.com/NativeScript/nativescript-facebook/tree/doc/demo) which is configured and WebPack ready. Notice the [package.json](https://github.com/NativeScript/nativescript-facebook/blob/doc/demo/package.json#L40-L41#L44), [vendor.ts](https://github.com/NativeScript/nativescript-facebook/blob/doc/demo/app/vendor.ts), [vendor-platform.ts](https://github.com/NativeScript/nativescript-facebook/blob/doc/demo/app/vendor-platform.ts) ([vendor-platform.android.ts](https://github.com/NativeScript/nativescript-facebook/blob/doc/demo/app/vendor-platform.android.ts) and [vendor-platform.ios.ts](https://github.com/NativeScript/nativescript-facebook/blob/doc/demo/app/vendor-platform.ios.ts)) and [bundle-config.ts](https://github.com/NativeScript/nativescript-facebook/blob/doc/demo/app/bundle-config.ts)

[demo-angular](https://github.com/NativeScript/nativescript-facebook/tree/doc/demo-angular) app will bring more clarity how to setup WebPack for the NativeScript Angular app. 

## How to check whether the application that has your plugin installed will be successfully built for Android and iOS?

Maybe the most important sanity check is to test whether the demo application(s) that have the plugin installed actually can be built. NativeScript supports Android and iOS so both platforms should be covered. There are lots of options which version of OS to choose. 
Have a quick look at [Android statistics provided by Google](https://developer.android.com/about/dashboards/index.html). According to them, the appropriate Android version should be Marshmallow (Android 6.0, API Level 23). 31.2% of the Android devices have this OS version installed.
According to [Apple’s statistics](https://developer.apple.com/support/app-store/) - 86% of their devices are using iOS10.  
As a summary, the plugin should be tested in the application built for:
- Android Marshmallow (Android 6.0, API Level 23)
- iOS 10

The NativeScript command for building Android and respectively iOS app is:

`tns build Android` and `tns build ios`

More details regarding building project with NativeScript CLI can be found [here](https://github.com/NativeScript/nativescript-cli#build-your-project).

## How to execute all sanity checks on every code change of your plugin’s repository?

Travis CI is a great way to automate plugin’s sanity checks. It is free for open-source projects. More details can be found in [Travis CI documentation](https://docs.travis-ci.com/). With few words - TravisCI will boot a virtual machine and execute commands based on the provided configuration in `.travis.yml` file. 

First things first! Add empty `.travis.yml` file on the root level.

```
my-plugin
├── demo
├── demo-angular
├── src
|    └── package.json
├── tslint.json
└── .travis.yml
```

This sample uses [Build Matrix](https://docs.travis-ci.com/user/customizing-the-build#Build-Matrix) to initiate several runs as a result of one and [Build Stages](https://docs.travis-ci.com/user/build-stages) to separate the execution into stages. The flow will be as followed:
1.    Test for readability, maintainability and functionality errors (tslint)
2.    WebPack and build demo app(s) with installed plugin under test
3.    Build demo app(s) with installed plugin under test

Each step starts after successful completion of the previous one. In this way, if there is a functional error, for example, the entire run will be terminated after the fall of the first step and the rest of the steps will not be executed. This behavior is controlled by [Build Stages](https://docs.travis-ci.com/user/build-stages).

According to the [Build Lifecycle](https://docs.travis-ci.com/user/customizing-the-build#The-Build-Lifecycle) of each TravisCI build, `install` is the right phase to install any required dependencies. 

Add following commands in the `install` phase in `.travis.yml` file:

Install nativescript, tslint and typescript version 2.2.2 as a global node module.
```
- npm install -g nativescript
- npm install -g tslint
- npm install -g typescript@2.2.2
```
Configures anonymous usage reporting for the NativeScript CLI. More info [here](https://github.com/NativeScript/nativescript-cli/blob/master/docs/man_pages/general/usage-reporting.md).

```
- tns usage-reporting disable
```
Configures anonymous usage reporting for the NativeScript CLI. More info [here](https://github.com/NativeScript/nativescript-cli/blob/master/docs/man_pages/general/usage-reporting.md).

```
- tns error-reporting disable
```
Install npm dependencies.

```
- npm install
```

As a result the `install` phase should be:

```
install:
    - npm install -g nativescript
    - npm install -g tslint
    - npm install -g typescript@2.2.2
    - tns usage-reporting disable
    - tns error-reporting disable
    - npm install
```
Refer to nativescript-facebook [.travis.yml file](https://github.com/NativeScript/nativescript-facebook/blob/doc/.travis.yml#L61-L67) to see this in reality.

As we mention earlier the plugin should be sanity checked on Android as well as on iOS. The Android specific requirements can be defined in `.travis.yml` file in `android` section:

```
android:
  components:
    - tools
    - platform-tools
    - build-tools-23.0.1
    - android-23
    - extra-android-m2repository
    - sys-img-armeabi-v7a-android-23
```

`tools` and `platform-tools` components define that the latest revision of Android SDK Tools will be installed. More info [here](https://docs.travis-ci.com/user/languages/android/#Overview)

`build-tools-23.0.1` component defines the BuildTools version that will be used.

`android-23` component defines the SDK version used to compile the project.

`extra-android-m2repository` component defines the support library repositories.

`sys-img-armeabi-v7a-android-23` component defines the system image.

Let's add the required stages using the [Build Matrix](https://docs.travis-ci.com/user/customizing-the-build#Build-Matrix).

Add the following snippet at the beginning of `.travis.yml` file:
```
matrix:
  include:
```
Then add the required stages:

### 1. Test for readability, maintainability and functionality errors

```
- stage: "Lint"
  language: node_js
  os: linux
  node_js: "6"
  jdk: oraclejdk8
  script: cd src && npm run ci.tslint && cd ../demo && npm run ci.tslint && cd ../demo-angular && npm run ci.tslint
```
The machine that is going to be provisioned will be Linux with nodejs v6 installed on it as well as Oracle JDK v8. Finally the `ci.tslint` script will be executed for the plugin's code and for the demo apps.

### 2. WebPack and build demo app(s) with installed plugin under test

```
- stage: "WebPack"
    os: osx
    env:
      - Platform="iOS"
    osx_image: xcode8.3
    language: node_js 
    node_js: "6"
    jdk: oraclejdk8
    script: cd demo && npm run build.plugin && npm i && npm run build-ios-bundle && cd ../demo-angular && npm run build.plugin && npm i && npm run build-ios-bundle
  - language: android
    os: linux
    env:
      - Platform="Android"
    jdk: oraclejdk8
    before_install: nvm install 6.10.3
    script: cd demo && npm run build.plugin && npm i && npm run build-android-bundle && cd ../demo-angular && npm run build.plugin && npm i && npm run build-android-bundle
```
This stage includes 2 builds that run in parallel. One for Android and one for iOS. Note that the nodejs on the Linux machine is installed because it is not included in the image. 
The environment variables defined under `env` are used for informational purposes. These variables are not used anywhere in the code.
The scripts that are executed build the plugin (take a look at [package.json file](https://github.com/NativeScript/nativescript-facebook/blob/master/demo/package.json#L46) of the demo apps) and then bundle and build each of the demo apps.

### 3. Build demo app(s) with installed plugin under test

```
- stage: "Build"
  env: 
    - Android="23"
  language: android
  os: linux
  jdk: oraclejdk8
  before_install: nvm install 6.10.3
  script: cd demo && npm run ci.android.build && cd ../demo-angular && npm run ci.android.build
- os: osx
  env: 
    - iOS="10.3"
    - Xcode="8.3"
  osx_image: xcode8.3
  language: node_js 
  node_js: "6"
  jdk: oraclejdk8
  script: cd demo && npm run ci.ios.build && cd ../demo-angular && npm run ci.ios.build
```
The scripts (`ci.android.build` and `ci.ios.build`) that are executed for building for iOS and Android are located in [package.json](https://github.com/NativeScript/nativescript-facebook/blob/master/demo/package.json#L48) file of any of the demo apps.

If everything is configured appropriately these sanity checks will be executed on every code change. The result will look like this:

![](../img/plugins/travis-ci.png)

The huge benefit for NativeScript plugin authors is that once having this sanity checks set up, You guys can be more confident about the quality of your plugins.

By the way, do not forget to [add TravisCI badge](https://docs.travis-ci.com/user/status-images/) in your NativeScript plugin's project! It's fancy!