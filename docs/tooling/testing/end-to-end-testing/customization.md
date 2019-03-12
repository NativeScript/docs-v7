---
title: Customization
titletag: End to End Testing - Customization
description: Write and execute UI E2E automation tests to ensure that newly added features are working correctly and no regressions are introduced in the mobile app.
position: 40
tags: ui testing, app ui testing, nativescript ui testing, automation testing, app automation testing, nativescript automation testing, appium, ui test automation, e2e testing
slug: e2e-testing-customization
---

# Customization 

## Custom Appium Capabilities

When installed, the `nativescript-dev-appium` plugin creates `e2e` folder containing sample test file and configuration folder `config` where your custom capabilities reside. 
The existence of such capabilities is a runner's requirement which comes from [Appium](https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/caps.md). Additional locations where the runner will search for the config file are:

```
my-app
├── app
├── assets
├── package.json
.
.
.
└── appium.capabilities.json
```

If the file structure assembles plugin repo structure like for example [nativescript-plugin-seed](https://github.com/NativeScript/nativescript-plugin-seed) the suggested location is:

```
my-plugin
├── demo
├── demo-angular
├── src
└── appium.capabilities.json
```
Thus, the same configuration can be used by both apps without duplication of files.

If you wish to use another location of the capapabilities file instead default ones, you can specify it with `--appiumCapsLocation` option. Remember that the path provided has to be relative to the root directory.

Notice that once custom capabilities are provided you will be able to pick any of them using the `--runType` option (e.g. `--runType android25`). See sample content of `appium.capabilities.json` file below. For more details regarding the Appium Capabilities read [Appium documentation about Desired Capabilities](https://appium.io/docs/en/writing-running-appium/caps/):

```
{
    "android21": {
            "browserName": "",
            "platformName": "Android",
            "platformVersion": "5.0",
            "deviceName": "Android Emulator",
            "noReset": false,
            "app": ""
        
    },
    "android25": {
            "browserName": "",
            "platformName": "Android",
            "platformVersion": "7.0",
            "deviceName": "Android Emulator",
            "noReset": false,
            "app": ""
        
    },
    "sim.iPhone8.iOS110": {
            "browserName": "",
            "platformName": "iOS",
            "platformVersion": "11.0",
            "deviceName": "iPhone 8 110",
            "app": ""
        
    }
}
```

As you can see, the `app` property can be left an empty string which will force the plugin to search for an app package in `platforms` folder. However, this search functionality depends on `runType` option so if you think of using it add `android`, `device`, `sim` strings as part of your `runType` option which in fact is your capability key in the config file. E.g --runType android23, --runType sim.10iPhone6. Thus, the runner will manage to look in the right location in order to search for app package.

**It is important to build your app in advance as explained in the [Getting Started]({% slug e2e-testing-getting-started%}#running-your-first-test) section, because the runner expects to provide app package to it or such to exists in the search location.**

**For faster testing when working on an app with livesync it would be better to use --devMode option or start a new session using --startSession option and run tests using --attachToDebug option and specify appium --port. Or simply start session with appium desktop application**

## Options

|Option| Description | Value |
|---|---|---|
|runType| Select the capabilities from your config file `appium.capabilities.json`| Consider using `android`, `device`, `sim` strings as part of your `runType` option if you haven't provided `app` capability. Thus, the runner will look for app package in the right location for the current run. <br/> e.g. --runType ios-device10iPhone6|
|appPath| Provide location of the app package to be tested. This will overwrite all provided capabilities for app| Possible values are:<br/> - app build package name (in case `--sauceLab` option is set it will prepend `sauce-storage:` in front of the app name so app has to be [uploaded to Sauce Labs](https://wiki.saucelabs.com/display/DOCS/Uploading+Mobile+Applications+to+Sauce+Storage+for+Testing) before execution starts)<br/> - path e.g. `platforms/android/build/outputs/apk/demo.apk`.<br/> Example: --appPath demo-debug.apk|
| imagesPath | Provide the relative path to e2e/resources/images folder of the images location required by the image comparison feature | --imagesPath "osPlatformName/iPhone X"
| reuseDevice | Reuse the device specified in the `runType` capabilities. If the emulator/simulator is not running, it will launch, execute tests and remain running. The next execution of `npm run e2e` with the `reuseDevice` option will attach to the already running emulator/simulator, execute tests and keep it running. | e.g. --reuseDevice |
| devMode | `devMode` capabilities. Skipping application instalation and will automatically reuse device. | e.g. --devMode |
|sauceLab| Enable tests execution in [Sauce Labs](https://saucelabs.com/). As a prerequisite you will have to define `SAUCE_USER` and `SAUCE_KEY` as [environment variable](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Environment+Variables+for+Authentication+Credentials)| e.g. --sauceLab|
|appiumCapsLocation| Change the location where `appium.capabilities.json` config file can be. It should be relative to the root directory | e.g. --appiumCapsLocation /e2e-tests|
|port| Appium server port|
|storage| Specify remote image storage |
|ignoreDeviceController| Setting this option you will use default appium device controller which is recommended when tests are executed on cloud based solutions |
|sessionId| In order to attach to already started session|Option --port is mandatory in this case. It will automatically set --devMode to true. Provides the ability to nativescript-dev-appium to be used with [appium desktop client](https://github.com/appium/appium-desktop/releases)|
|attachToDebug| Same as sessionId but no need to provide session id.|Option --port is mendatory in this case. It will automatically resolve --sessionId. Provides ability nativescript-dev-appium to be used with [appium desktop client](https://github.com/appium/appium-desktop/releases)|
|startSession|Start new appium server and initialize appium driver.|
|cleanApp| Remove application from device on server quit.|

Examples:

Let say that we have a script in package.json like this 

```
 "scripts": {
    "e2e": "tsc -p e2e && mocha --opts ./config/mocha.opts --recursive e2e --appiumCapsLocation ./config/appium.capabilities.json"
 }

 ```

Run tests in SauceLabs. Before that you have to upload the package in test specified by *--appPath* option to SauceLab
```
$ npm run e2e -- --runType android25 --sauceLab --appPath demo.apk
```

Run tests locally
```
$ npm run e2e -- --runType android25
```

Starting new session will console log appium server port and session id
```
$ node ./node_modules/.bin/ns-appium --runType android23 --startSession --port 8300
```
Run tests with already started session. Specify session id and server port. Default value for server port is 8300
```
$ npm run e2e -- --sessionId e72daf17-8db6-4500-a0cf-59a66effd6b9 --port 8300 
```
or simply use --attachToDebug which will attached to first available session. This is not recommended when more than one session is available.
```
$ npm run e2e -- --attachToDebug --port 8300
```
