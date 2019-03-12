---
title: Overview
titletag: End to End Testing - Overview
description: Write and execute UI E2E automation tests to ensure that newly added features are working correctly and no regressions are introduced in the mobile app.
position: 10
tags: ui testing, app ui testing, nativescript ui testing, automation testing, app automation testing, nativescript automation testing, appium, ui test automation, e2e testing
slug: e2e-testing-overview
previous_url: /testing,/core-concepts/testing
---

# Overview

E2E testing allows to test your application workflows and make sure all the integration points are working as expected. You can literally test any screen and any workflow of your app. It differs from [Unit Testing]({% slug unit-testing %}) by the fact that unit testing is used to test an isolated piece of code usually in a mocked environment. 

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

## What's Next?

You have now learned the basics about what E2E testing is for mobile apps and what's the difference between unit and e2e testing. You can now continue to the simple example provided in the [Getting Started]({% slug e2e-testing-getting-started %}) section where you'll learn how to setup the nativescript-dev-appium plugin in your project and how to run your first test.

Do not miss gaining more advanced knowledge about the usage of Appium by reviewing
- [nativescript-dev-appium Features]({% slug e2e-testing-features %}) 
- [How to create custom Appium capabilities and what options it provides]({% slug e2e-testing-customization %})?
- [How to troubleshoot any issues and what are some common issues]({% slug e2e-testing-troubleshooting %})?

There are also nice blog posts and conference videos covering Appium and its usage in NativeScript apps which you can find in the [References section]({% slug e2e-testing-references %}) of this documentation.
