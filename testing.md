---
nav-title: Unit Testing in NativeScript
title: "App: Unit Testing"
description: Learn how to write and execute tests for your NativeScript app.
position: 5
---

# Unit Testing

## Getting Started

Running unit tests requires a bit of preparation. You need to select a JavaScript unit testing framework and install the necessary dependencies into your project.

Start by executing the following in your project:
 ```Shell
tns test init
```
Pick one of the supported testing frameworks. When the command completes, your project will be set up for writing tests. All test files go into the `app/tests/` folder in your project. All files in that folder are excluded in release builds. The above command creates that folder for you and places a sample test file there containing a sample unit test just to give you an idea of what tests should look like. Look at the documentation of [Jasmine](http://jasmine.github.io/2.3/introduction.html) or [Mocha](https://mochajs.org/#assertions). For Mocha, the [Chai](http://chaijs.com/) module is automatically made available.

## Running your tests

If you're running your tests on a physical device, it has to be in the same network subnet as the developer machine. The test run will fail if the device cannot resolve the developer machine's IP, or if the Karma port (usually 9876) is blocked by the firewall, typically if the device is not connected to a local network, or if the device is in a separate VLAN. To ensure that the device can access the Karma server, either connect the device to a WiFi network that is connected to the developer machine, or establish USB tethering or Bluetooth tethering between the device and the computer.

Run your tests using one of the two commands, depending on the platform:
 ```Shell
tns test android
tns test ios
```

What happens next is:
* A [Karma server](http://karma-runner.github.io/) is started on your developer machine.
* Your application is installed onto a connected device or emulator, if it's not already installed.
* The unit test runner and your host's network and Karma configuration are embedded into your installed application.
* Your application is started on the device or emulator.
* Instead of starting from your app's main module, the unit test runner's main module is launched.
* The unit test runner uses the embedded network configuration to try to connect to the Karma server running on the developer machine.
* When a connection is established to the Karma server, the test are run and the results are reported back to Karma.
* Karma reports the results of the test run in the console in which you ran the `tns test` command.

### Running in the iOS simulator
The following commands starts a test run in the iOS simulator:
```Shell
tns test ios --emulator
```

## Continuous testing
Use the `--watch` options to continuously monitor your code for changes, deploy those changes to connected devices and automatically re-run tests.
 ```Shell
tns test android --watch
tns test ios --watch
tns test ios --emulator --watch
```
The CLI will remain active and will re-run tests and report results until stopped.