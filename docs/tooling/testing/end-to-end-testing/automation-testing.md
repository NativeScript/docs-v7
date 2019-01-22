---
title: End to End (E2E) Testing
description: Write and execute UI E2E automation tests to ensure that newly added features are working correctly and no regressions are introduced in the mobile app.
position: 10
tags: ui testing, app ui testing, nativescript ui testing, automation testing, app automation testing, nativescript automation testing, appium, ui test automation, e2e testing
slug: automation-testing
previous_url: /testing,/core-concepts/testing
---

# End to End (E2E) Testing

While [Unit Testing]({% slug unit-testing %}) is used to test an isolated piece of code usually in a mocked environment, E2E testing allows to test your application workflows and make sure all the integration points are working as expected. You can literally test any screen and any workflow of your app.

If you wonder when to do unit testing and when E2E testing there is a basic rule. For isolated pieces of code prefer to do a set of unit tests that are focused on the work this code do. Unit tests usually are smaller, simpler and much faster. Use E2E testing for any application workflow where multiple components are involved and you want to ascertain they work well when integrated together. E2E tests allow to cover flows in the application which are not covered by unit and integration tests.

## E2E Testing in a NativeScript app

Thanks to [Appium](http://appium.io/) and the [nativescript-dev-appium plugin](https://github.com/NativeScript/nativescript-dev-appium) E2E automation testing is made easy in NativeScript!

### What is Appium?
Appium is an open-source test automation framework for use with any mobile app. It allows to easily create UI automation testing for iOS, Android, Windows and hybrid mobile apps. 
Read more details in the [Appium introduction](http://appium.io/docs/en/about-appium/intro/) and [Appium getting started guide](http://appium.io/docs/en/about-appium/getting-started/).


### What is nativescript-dev-appium?
Since Appium is used internally to test the NativeScript framework itself, the core team developed a nativescript plugin that wraps Appium and allows using it easy for UI test automation of NativeScript apps. The [nativescript-dev-appium plugin](https://github.com/NativeScript/nativescript-dev-appium) is created and maintained by the core team and is constantly improving.

## Environment Setup

### Prerequisites

For the plugin to work correctly you need to have:
 - latest version of [XCode](https://developer.apple.com/library/archive/releasenotes/DeveloperTools/RN-Xcode/Chapters/Introduction.html)
 - [Android SDK Tools](https://developer.android.com/studio/releases/sdk-tools.html) with version > 25.3.0

### Global Setup

* Install Appium globally:
```shell
$ npm install -g appium
```

* iOS Dependencies

Install external dependencies of [XCUITest](https://github.com/appium/appium-xcuitest-driver/blob/master/README.md#external-dependencies) driver for iOS via Homebrew or NPM as follows:

* [Homebrew](https://brew.sh):

```shell
$ brew install carthage
$ brew install libimobiledevice --HEAD
$ brew install ideviceinstaller
$ brew install ios-webkit-debug-proxy
```

* [NPM](https://www.npmjs.com/):

```shell
$ npm install -g ios-deploy
```

> For detailed information on external dependencies, please, refer to the [XCUITest](https://github.com/appium/appium-xcuitest-driver/blob/master/README.md#external-dependencies) repository.


* Android Dependencies

For correct functioning of the [mobile-devices-controller](https://github.com/NativeScript/mobile-devices-controller) for Android emulators, `telnet` is required to be available on your system.

As `telnet` is removed from *macOS High Sierra*, it could be installed as follows:

```shell
$ brew install telnet
```

### Project Setup

Once you have execute the steps above to setup your environment for testing with Appium, you are ready to setup your project.

* Add the nativescript-dev-appium plugin as a *devDependency* to your project:

```shell
$ npm install -D nativescript-dev-appium
```

> After completion of the installation, if your project has a dependency to *TypeScript*, the plugin should have added an `e2e` folder containing predefined configs and samples.
 
 #TODO: What if it doesn't have such dependency ???????????

After that your project structure should be similar to:

        my-app
        ├── app
        ├── e2e
            ├── config
                ├── appium.capabilities.json
                ├── mocha.opts
            ├── sample.e2e-test.ts
            ├── setup.ts
            ├── tsconfig.json
        ├── ...
        ├── package.json
        ├── tsconfig.json

> To avoid any incompatibilities between the source of *e2e* tests (ES6) and the source of the application (ES5), we recommend to exclude the *e2e* folder from the application's *tsconfig.json* file: `exclude": [ "e2e" ]`.

### Files Preview

|File                           |Purpose|
|:-----------------------------:|:-------------------:|
|config/appium.capabilities.json|Contains predefined configurations for test execution.|
|config/mocha.opts              |A default mocha configuration file.                   |
|sample.e2e-test.ts             |Contains a predefined ready-to-execute sample tests of the default [hello-world-ts](https://github.com/NativeScript/template-hello-world-ts) template.|
|setup.ts                       |Defines the `before` and `after` test execution hooks responsible to start and stop the [Appium](http://appium.io/) server.|
|tsconfig.json                  |TypeScript compiler configuration file for the `e2e` tests.|

> Note - in case you want to execute image comparision while testing there are two more important folders to have in mind: 
> * `e2e/reports` - it is created during test execution and stores the actual images from comparison
> * `e2e/resources` - this folder aims to store the expected images for comparison



LINK Getting Started
LINK Custom Appium Capabilities & Options
LINK Features
LINK References


Add info about troubleshooting and common problems