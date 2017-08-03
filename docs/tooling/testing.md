---
title: Unit Testing
description: Learn how to write and execute tests for your NativeScript app.
position: 10
slug: unit-testing
previous_url: /testing,/core-concepts/testing
---

# Unit Testing

When you develop new features inside your app, you can ensure that they are working properly and that past functionality has not regressed by writing and executing unit tests on a regular basis. With the NativeScript CLI, you can write and execute unit tests using [Jasmine](http://jasmine.github.io/), [Mocha](https://mochajs.org/) with [Chai](http://chaijs.com/) or [QUnit](https://qunitjs.com/).

To run your unit tests, the NativeScript CLI uses [Karma](http://karma-runner.github.io/0.13/index.html).

* [Before You Begin](#before-you-begin)
* [Configure Your Project](#configure-your-project)
* [Write Your Tests](#write-your-tests)
* [Run Your Tests](#run-your-tests)
	* [Requirements](#requirements)
	* [Run the Tests](#run-the-tests)
	* [Re-Run Tests on Code Change](#re-run-tests-on-code-change)
	* [Configure the Karma Server](#configure-the-karma-server)
* [Continuous Integration](#continuous-integration)

## Before You Begin

Before writing and running unit tests, verify that you have completed the following steps.

1. [Install and configure the NativeScript CLI on your system.]({% slug quick-start %}#the-nativescript-cli)
1. If you don't have any projects, create a new project and navigate to the directory of the newly created directory.
	
	```Shell
	tns create projectName
	cd projectName
	```
1. If you want to create tests for an existing directory, navigate to the directory of the project.

	```Shell
	cd existingProjectDirectory
	```

> **TIP:** You don't need to explicitly add the platforms for which you want to test your project. The NativeScript CLI will configure your project when you begin to run your tests.

## Configure Your Project

The NativeScript CLI lets you choose between three widely popular unit testing frameworks: [Jasmine](http://jasmine.github.io/), [Mocha](https://mochajs.org/) with [Chai](http://chaijs.com/) and [QUnit](https://qunitjs.com/). You need to configure the project for unit testing by choosing a framework. You can use only one framework at a time.

To initialize your project for unit testing, run the following command and, when prompted, use the keyboard arrows to select the framework that you want to use.

```Shell
tns test init
```

This operation applies the following changes to your project.
* It creates the `app/tests` directory. You need to store all tests in this directory. This directory is excluded from release builds.
* It creates an `example.js` file in the `app/tests` directory. This sample test illustrates the basic syntax for the selected framework.
* It installs the nativescript-unit-test-runner npm module for the selected framework and its dev dependencies in `node_modules`.
* It creates `karma.conf.js` in the root of your project. This file contains the default configuration for the Karma server for the selected framework.

> **Note**: To enable and write unit tests for TypeScript or Angular project install the TypeScript typings for the selected testing framework.
```Jasmine
npm i @types/jasmine --save-dev
```
```Mocha
npm i @types/mocha --save-dev
```
```QUnit
npm i @types/qunit --save-dev
```

## Write Your Tests

With the NativeScript CLI, you can extensively test **all JavaScript-related functionality**. You cannot test styling and UI which are not applied or created via JavaScript.

When creating tests for a new or existing functionality, keep in mind the following specifics.

* You need to create your tests as JavaScript files in the `app/tests` directory. The NativeScript CLI recognizes JavaScript files stored in `app/tests` as unit tests.
* You need to write tests which comply with the testing framework specification you have chosen for the project.
* You need to export the functionality that you want to test in the code of your NativeScript project.
* You need to require the module which exposes the functionality that you want to test in the code of your unit tests.

When creating tests for a new or existing functionality, keep in mind the following limitations.

* You cannot require the file or module in which `application.start()` is called.
* You cannot use more than one testing framework per project.
* You cannot test styling and UI which are not applied or created via JavaScript.

The following samples test the initial value of the counter and the message in the Hello World template. These tests show the specifics and limitations outlined above.

```Jasmine
var mainViewModel = require("../main-view-model"); //Require the main view model to expose the functionality inside it.

describe("Hello World Sample Test:", function() {
  it("Check counter.", function() {
    expect(mainViewModel.createViewModel().counter).toEqual(42); //Check if the counter equals 42.
  });
  it("Check message.", function () {
  	expect(mainViewModel.createViewModel().message).toBe("42 taps left"); //Check if the message is "42 taps left".
  });
});
```
```Jasmine (Angular w/TypeScript)
// As our intention is to test an Angular component that contains annotations 
// we need to include the reflect-metadata dependency.
import * as reflect from "reflect-metadata";

// A sample Jasmine test
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});
```
```Mocha
var mainViewModel = require("../main-view-model"); //Require the main view model to expose the functionality inside it.

describe('Hello World Sample Test:', function () {
	it('Counter should be 42 on start.', function () {
		assert.equal(mainViewModel.createViewModel().counter, 42); //Assert that the counter equals 42.
	});
	it('Message should be "42 taps left" on start.', function () {
		assert.equal(mainViewModel.createViewModel().message, "42 taps left"); //Assert that the message is "42 taps left".
	});
});
```
```QUnit
var mainViewModel = require("../main-view-model"); //Require the main view model to expose the functionality inside it.

QUnit.test("Hello World Sample Test:", function (assert) {
	assert.equal( mainViewModel.createViewModel().counter, 42, "Counter, 42; equal succeeds." ); //Assert that the counter equals 42.
	assert.equal( mainViewModel.createViewModel().message, "42 taps left", "Message, 42 taps left; equal succeeds." ); //Assert that the message is "42 taps left".
});
```

## Run Your Tests

After you have completed your test suite, you can run it on physical devices or in the native emulators.

### Requirements

Before running your tests, verify that your development machine and your testing devices meet the following prerequisites.

* The Android native emulators on which you want to run your tests must be running on your development machine. To verify that your machine recognizes the devices, run the following command.

	```Shell
	tns device
	```
* The physical devices on which you want to run your tests must be connected to your development machine. To verify that your machine recognizes the devices, run the following command.

	```Shell
	tns device
	```
* The physical devices on which you want to run your tests must be able to resolve the IP of your development machine. To verify that the device can access the Karma server, connect the device and the development machine to the same Wi-Fi network or establish USB or Bluetooth tethering between the device and the development machine.
* Port 9876 must be allowed on your development machine. The Karma server uses this port to communicate with the testing device.

### Run the Tests

To execute your test suite on any connected Android devices or running Android emulators, run the following command.

```Shell
tns test android
```

To execute your test suite on connected iOS devices, run the following command.

```Shell
tns test ios
```

To execute your test suite in the iOS Simulator, run the following command.

```Shell
tns test ios --emulator
```

Each execution of `$ tns test` consists of the following steps, performed automatically.

1. The CLI starts a Karma server on the development machine.
1. The CLI prepares, builds and deploys your project, if not already deployed. If already deployed, the CLI synchronizes changes to the application package.
1. The CLI embeds the NativeScript unit test runner and your host network and Karma configuration in the deployed package.
1. The CLI launches the main module of the NativeScript unit test runner instead of launching the main module of your app.
1. The NativeScript unit test runner uses the embedded network configuration to try to connect to the Karma server on the development machine.
1. When the connection between the NativeScript unit test runner and the Karma server is established, the test runner begins the execution of the unit tests.
1. When the execution completes, the NativeScript unit test runner reports the results to the Karma server.
1. The Karma server reports the results on the command line. 

### Re-Run Tests on Code Change

The NativeScript can continuously monitor your code for changes and when such changes occur, it can deploy those changes to your testing devices and re-run your tests.

To enable this behavior, run your `$ tns test` command with the `--watch` flag. For example:

```Shell
tns test android --watch
tns test ios --watch
tns test ios --emulator --watch
```

The NativeScript CLI remains active and re-runs tests on code change. To unlock the console, press `Ctrl+C` to stop the process. 

### Configure the Karma Server

When you configure your project for unit testing, the NativeScript CLI adds `karma.conf.js` to the root of your project. This file contains the default configuration of the Karma server, including default port and selected testing framework. You can edit this file to customize your Karma server.

When you modify `karma.conf.js`, make sure that your changes meet the specification of the [Karma Configuration File](http://karma-runner.github.io/1.0/intro/configuration.html).

## Continuous Integration

To integrate the NativeScript unit test runner into a continuous integration process, you need to configure a Karma reporter, for example, the [JUnit reporter](https://github.com/karma-runner/karma-junit-reporter).