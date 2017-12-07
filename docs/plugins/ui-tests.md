---
title: Plugin UI Tests
description: A guide about writing JavaScript based UI tests for mobile app.
position: 70
slug: plugin-ui-tests
---

# Plugin UI Tests

User interface testing exercises your app's UI likewise your users do without any knowledge about the code base behind. It helps you see the app the same way your users will, showing any UI issues that users run into. UI testing verifies that the whole application is functioning correctly, including its UI.

## Prerequisites

The main characteristics that distinguish UI tests we will talk about in this article are two. The first is that the tests are [Appium](http://appium.io/) based and the second is that we will use [TypeScript](https://www.typescriptlang.org/) to write them. Considering these two distinguishing marks we have to install:

* [nativescript-dev-appium](https://github.com/NativeScript/nativescript-dev-appium) plugin in your demo app
    ```
    npm install --save-dev nativescript-dev-appium
    ```
    
* [Appium](http://appium.io/) globally
    ```
    npm install -g appium
    ```

More about `nativescript-dev-appium` plugin you can find in its [repository](https://github.com/NativeScript/nativescript-dev-appium) documentation, but in short it depends on Appium to communicate with device/emulator, uses [Appium JavaScript client library](https://www.npmjs.com/package/wd) and [Mocha](https://mochajs.org/) testing framework. Before we continue, take a moment and familiarize yourself with fore-mentioned tools unknown to you.

## Test Implementation

By installing [nativescript-dev-appium](https://github.com/NativeScript/nativescript-dev-appium) plugin in your demo app it creates `e2e` folder where our starting point is.

```
my-plugin
├── demo
|   └── app
|   └── e2e
└── src
```

There you will find a sample testing file using [Mocha "BDD" interface](https://mochajs.org/#bdd) which is nice to begin with, but let's see some real example that we will be able to run later on. We will use [NativeScript Facebook plugin's](https://github.com/NativeScript/nativescript-facebook) UI tests for that purpose. The location of the tests stays the same so let's take a look at [them](https://github.com/NativeScript/nativescript-facebook/blob/master/demo/e2e/test.e2e.ts).
Let's review most notable lines of code and explain them.

```javascript
import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";
```
We start by loading our plugin's modules that will be further used to initialize our driver and provide us some helpful functions.

```javascript
describe("Facebook tests", async function () { // define test suite
    ...

    before(async () => {
        driver = await createDriver();
        driver.defaultWaitTime = 15000; //custom timeout when search an element
    });

    after(async () => {
        if (isSauceRun) {
            driver.sessionId().then(function (sessionId) {
                console.log("Report: https://saucelabs.com/beta/tests/" + sessionId);
            });
        }
        await driver.quit();
        console.log("Driver successfully quit");
    });
    ...
```
Here, we define our suite and set a custom [timeout](https://mochajs.org/#timeouts) for each element to be found. The timeout setting for the whole execution is located in the [mocha.opts](https://github.com/NativeScript/nativescript-facebook/blob/master/demo/e2e/config/mocha.opts) configuration file so if needed it can be adjusted there. We use some bigger value as we run the tests in [Sauce Labs](https://saucelabs.com/) and it takes a bit more time than а local execution.

[Sauce Labs](https://saucelabs.com/) is a cloud-based platform for automated testing of web and mobile applications. It provides us an access to mobile emulators and simulators needed for our test execution. This way we don't have to take care of a testing environment which is great. Additionally, our testing results are public and that increases the transparency of plugin's state and how it has been tested.

Going further, two types of [Mocha hooks](https://mochajs.org/#hooks) are noticeable in the suite. The `before` one initialize our driver which communicates with the server and `after` quits it.

It is time for our tests implementation. Let's review the first test.

```javascript
it("should log in via original button", async function () {
        if (isAndroid) {
            var userNameLabelElement = "[@text='Nativescript User']";
        } else {
            var loginButtonElement = "[@name='Log In']";
            var continueButtonAttribute = "[@name='Continue']";
            var userNameLabelElement = "[@name='Nativescript User']";
        }

        const facebookButton = await driver.findElementByAccessibilityId(FACEBOOK_BUTTON);
        await facebookButton.click();

        if (isAndroid) {
            const allFields = await driver.driver.waitForElementsByClassName(driver.locators.getElementByName("textfield"), 10000);
            await allFields[1].click().sendKeys(PASSWORD);
            await allFields[0].click().sendKeys(USERNAME);
        } else {
            const passField = await driver.driver.waitForElementByClassName(driver.locators.getElementByName("securetextfield"), 10000);
            await passField.click().sendKeys(PASSWORD);
            const usernameField = await driver.driver.waitForElementByClassName(driver.locators.getElementByName("textfield"), 10000);
            await usernameField.click().sendKeys(USERNAME);
        }
        await driver.driver.hideDeviceKeyboard("Done");
        if (isAndroid) {
            const logInButton = await driver.findElementByClassName(driver.locators.button);
            await logInButton.click();
            const okButton = await driver.findElementByClassName(driver.locators.button);
            await okButton.click();
        } else {
            const logInButton = await driver.findElementByXPath("//" + driver.locators.button + loginButtonElement);
            await logInButton.click();
            const continueButton = await driver.findElementByXPath("//" + driver.locators.button + continueButtonAttribute);
            await continueButton.click();
        }
        const userNameLabel = await driver.findElementByXPath("//" + driver.locators.getElementByName("label") + userNameLabelElement);
        const userName = await userNameLabel.text();
        expect(userName).to.equal(USER_NAME, "Not logged with the same user");

    });
```

To be able to execute our tests both on Android and iOS platforms we have to use different xpath selectors. Here comes in handy `driver.locators.getElementByName("textfield")` function from the plugin. It returns the native class of the element depending on the platform and platform's version by accepting as parameter the name of the element of type string. The list of all elements can be find in [locators.ts](https://github.com/NativeScript/nativescript-dev-appium/blob/master/lib/locators.ts) file of the plugin. The last part needed to assemble our xpath selector is some distinguishing property so we are sure using the right UI element. This can be obtained by using [Appium desktop app](http://appium.io/downloads.html) to inspect the visual tree of our app and pick a proper one.

Once we have our UI elements selectors ready it is time for the driver to find them in the visual tree so we can further manipulate and assert them. It is worth mentioning that we should use accessibility ID as a preferable selector where possible `driver.findElementByAccessibilityId(FACEBOOK_BUTTON)`, but in most cases this is not an option and we use text `driver.findElementByText(pickSingleButtonText, SearchOptions.contains);`, xpath `driver.findElementByXPath("//" + driver.locators.button + loginButtonElement)` or class name `driver.findElementByClassName(driver.locators.button)`.

In some scenarios we might need to use any of the [wd](https://www.npmjs.com/package/wd) functions, for example `hideDeviceKeyboard()`. Then the `driver` property come to help which gives us that ability `await driver.driver.hideDeviceKeyboard("Done");`.

## Test Execution

It is time for the fun part - test execution. Before we get to the command that will run our tests we will have to add the desired configuration to our capabilities [appium.capabilities.json](https://github.com/NativeScript/nativescript-facebook/blob/master/appium.capabilities.json). By installing the plugin a default capabilities file will be provided which can be further enriched and repositioned but more about this in [nativescript-dev-appium's README](https://github.com/NativeScript/nativescript-dev-appium#custom-appium-capabilities). In our NativeScript Facebook plugin we will use two of the defined capabilities - for Android 6.0 and iOS 10.0 emulator/simulator. These capabilities are a set of keys and values sent to the Appium server to tell the server what kind of automation session we are interested in starting up. For example, if we set `platformName` to `Android` Appium will initiate Android session. The full list can be find [Appium's documentation](https://appium.io/slate/en/master/?javascript#appium-server-capabilities).

In order to execute the tests for those environments we will use the command for local execution. Before that we have to navigate to `demo` folder.

> **NOTE**: Before running the tests we have to build our app for each platform `tns build android` and `tns build ios`. Additionally, we have to be sure that the same emulator and simulator described in the capabilities we use are available and running on our system.

```
npm run e2e -- --runType android23
```

```
npm run e2e -- --runType sim103iPhone6
```

As you can see, we execute a npm script `npm run e2e` that comes out-of-the-box when we install [nativescript-dev-appium](https://github.com/NativeScript/nativescript-dev-appium) plugin. The rest of the command is just [options configuration](https://github.com/NativeScript/nativescript-dev-appium#options).

## Continuous Integration

NativeScript Facebook plugin is based on [nativescript-plugin-seed](https://github.com/NativeScript/nativescript-plugin-seed). Therefore, it already has `.travis.yml` file which eases our CI in [Travis CI](https://travis-ci.org/). We will only have to add a new stage for our UI tests and tweak it a little. In this section we will discuss only the changes that remain to be done, but you can find more information about the rest of the [.travis.yml file](https://github.com/NativeScript/nativescript-facebook/blob/master/.travis.yml) in [Ensure Plugins Quality]({% slug ensure-plugins-quality %}) article.

We use [Sauce Labs](https://saucelabs.com/) cloud based platform to run our UI tests at. It is free for open source projects.

There are two basic changes we have to do before the integration becomes a reality. The first is to upload our application package to Sauce Labs storage as our tests require it. This is done using a `curl` request in the `Build` stage respectively for iOS and Android.

> **NOTE**: Requests depend on `SAUCE_USER` and `SAUCE_KEY` environment variables that have to be [added in Travis CI](https://docs.travis-ci.com/user/environment-variables/#Defining-Variables-in-Repository-Settings) in advance. You can obtain them as described in [Sauce Labs documentation](https://wiki.saucelabs.com/display/DOCS/The+Sauce+Labs+Account+Profile+User+Interface).

```yml
- stage: "Build"
...
script:
        ...
    - "curl -u $SAUCE_USER:$SAUCE_KEY -X POST -H 'Content-Type: application/octet-stream' $ANDROID_SAUCE_STORAGE --data-binary @$ANDROID_PACKAGE_FOLDER/$ANDROID_PACKAGE"
- os: osx
     ...
      script: 
        ...
        - cd $IOS_PACKAGE_FOLDER && zip -r $IOS_PACKAGE demo.app
        - "curl -u $SAUCE_USER:$SAUCE_KEY -X POST -H 'Content-Type: application/octet-stream' $IOS_SAUCE_STORAGE --data-binary @$IOS_PACKAGE_FOLDER/$IOS_PACKAGE"

```

For iOS, we have to zip any `*.app` package before uploading it to Sauce Labs storage `cd $IOS_PACKAGE_FOLDER && zip -r $IOS_PACKAGE demo.app`.

The second change is adding our UI tests stage.

```yml
- stage: "UI Tests"
      env: 
      - Android="23"
      language: node_js
      os: linux
      node_js: "6"
      script:
        - npm i -g appium
        - cd demo && npm i
        - travis_retry npm run e2e -- --runType android23 --sauceLab --reuseDevice --appPath $ANDROID_PACKAGE
    - os: linux
      env: 
        - iOS="10"
      language: node_js 
      node_js: "6"
      script: 
        - npm i -g appium
        - cd demo && npm i
        - travis_wait travis_retry npm run e2e -- --runType sim103iPhone6 --sauceLab --reuseDevice --appPath $IOS_PACKAGE
```

It takes care to setup two Linux machines and executes the tests in Sauce Labs using the proper [command](https://github.com/NativeScript/nativescript-dev-appium#options) for each platform:

```
npm run e2e -- --runType android23 --sauceLab --reuseDevice --appPath $ANDROID_PACKAGE
``` 
and

```
npm run e2e -- --runType sim103iPhone6 --sauceLab --reuseDevice --appPath $IOS_PACKAGE
```

## See Also

* [Unit Tests]({% slug plugin-unit-tests %})
* [Ensure Plugins Quality]({% slug ensure-plugins-quality %})