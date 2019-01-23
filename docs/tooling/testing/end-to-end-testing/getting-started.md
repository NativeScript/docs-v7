---
title: Getting Started
description: Write and execute UI E2E automation tests to ensure that newly added features are working correctly and no regressions are introduced in the mobile app.
position: 20
tags: ui testing, app ui testing, nativescript ui testing, automation testing, app automation testing, nativescript automation testing, appium, ui test automation, e2e testing
slug: e2e-testing-getting-started
previous_url: /testing,/core-concepts/testing
---



# E2E Testing - Getting Started




Show how to use the plugin....
- create a project
- setup e2e testing
- run a simple test


## Usage

Before running the tests you will have to build your app for the platform on test or both. Navigate to your demo app folder from where you will execute the commands that follow.

```shell
$ tns build android
```

or

```shell
$ tns build ios
```

The command that will run the tests should specify the targeted capabilities configuration using the `runType` option as shown below. This way a capabilities will be selected from the [capabilities](#custom-appium-capabilities) configuration file.

```
$ npm run e2e -- --runType android25
```

or

```
$ npm run e2e -- --runType sim.iPhone8.iOS110
```

