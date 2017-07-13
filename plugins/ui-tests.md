---
title: Plugin UI Tests
description: A guide about writing JavaScript based UI tests for mobile app.
position: 100
slug: plugin-ui-tests
---

# Plugin UI Tests

User interface testing exercises your app's UI likewise your users do without any knowledge about the code base behind. It helps you see the app the same way your users will, showing any UI issues that users run into. UI testing verifies that the whole application is functioning correctly, including its UI.

## Prerequisites

The main characteristics that distinguish UI tests we will talk about in this article are two. The first is that the tests are [Appium](http://appium.io/) based and the second is that we will use [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) to write them. Considering these two distinguishing marks we have to install:

* [nativescript-dev-appium](https://github.com/NativeScript/nativescript-dev-appium) plugin in your demo app
    ```
    npm install --save-dev nativescript-dev-appium
    ```
    
* [Appium](http://appium.io/) globally
    ```
    npm install -g appium
    ```

More about `nativescript-dev-appium` plugin you can find in its repository documentation, but in short it depends on Appium to communicate with device/emulator, uses [Appium JavaScript client library](https://www.npmjs.com/package/wd) and [Mocha](https://mochajs.org/) testing framework. Before we continue, take a moment and familiarize yourself with fore-mentioned tools unknown to you.

## Test Implementation

By installing [nativescript-dev-appium](https://github.com/NativeScript/nativescript-dev-appium) plugin in your demo app it creates `e2e-tests` folder where our starting point is.

```
my-plugin
├── demo
|   └── app
|   └── e2e-tests
└── src
```

There you will find a sample testing file using [Mocha "BDD" interface](https://mochajs.org/#bdd) which is nice to begin with, but let's see some real example that we will be able to run later on. We will use [NativeScript Facebook plugin](https://github.com/NativeScript/nativescript-facebook) UI tests for that purpose. The location of the tests stays the same so let's take a look at [them](https://github.com/NativeScript/nativescript-facebook/blob/master/demo/e2e-tests/tests.js).
Let's review most notable lines of code and explain them.

```javascript
var nsAppium = require("nativescript-dev-appium");
```
We start by loading our plugin's module that we will be further used to initialize our driver and provide us some helpful functions.

```javascript
describe("facebook tests", function () { // define test suite
    this.timeout(800000);
    ...

    before(function () {
        driver = nsAppium.createDriver(); // initialize driver
    });

    after(function () {
        if(isSauceRun){
            driver.getSessionId().then(function(sessionId) {
                console.log("Report: https://saucelabs.com/beta/tests/" + sessionId);
            });
        }
        return driver
        .quit()
        .finally(function () {
            console.log("Driver quit successfully");
        });
    });
    ...
```
Here, we define our suite and set a custom [timeout](https://mochajs.org/#timeouts). We use some bigger value as we run the tests in Sauce Labs and it takes a bit more time than а local execution. Two types of [Mocha hooks](https://mochajs.org/#hooks) are used in the suite. The `before` one initialize our driver and `after` quits it.

It is time for our tests implementation. Let's review our first test.

```javascript
it("should log in via original button", function () {
        if(isAndroid){
            var usernameFieldElement = "//" + nsAppium.getXPathElement("textfield") + "[@content-desc='Email or Phone']";
            var passwordFieldElement = "//" + nsAppium.getXPathElement("textfield") + "[@NAF='true']";
            var loginButtonElement = "//" + nsAppium.getXPathElement("button") + "[@text='']";
            var okButtonElement = "//" + nsAppium.getXPathElement("button") + "[@text='' and @instance='0']";
            var userNameLabelElement = "//" + nsAppium.getXPathElement("label") + "[@text='Nativescript User']";
        } else {
            var usernameFieldElement = "//" + nsAppium.getXPathElement("textfield") + "[@value='Email or Phone']";
            var passwordFieldElement = "//" + nsAppium.getXPathElement("securetextfield") + "[@value='Facebook Password']";
            var loginButtonElement = "//" + nsAppium.getXPathElement("button") + "[@name='Log In']";
            var okButtonElement = "//" + nsAppium.getXPathElement("button") + "[@name='Continue']";
            var userNameLabelElement = "//" + nsAppium.getXPathElement("label") + "[@name='Nativescript User']";
        }

        var step1 = driver
            .waitForElementByAccessibilityId(FACEBOOK_BUTTON, timeout)
                .should.eventually.exist
            .click()
            .waitForElementByXPath(passwordFieldElement, 20000).click()  //Password field
            .sendKeys(PASSWORD)
            .waitForElementByXPath(usernameFieldElement, timeout)
            .sendKeys(USERNAME)
            .hideDeviceKeyboard("Done")
            .waitForElementByXPath(loginButtonElement, timeout) //Log in button
            .click();
        var step2 = isAndroid ? step1.sleep(5000) : step1.sleep(6000);
        step2
            .waitForElementByXPath(okButtonElement, timeout) // OK button
            .click();
        var step3 = isAndroid ? step2 : step2.sleep(5000);
        return step3
            .waitForElementByXPath(userNameLabelElement, timeout) //TODO use wait for element by text USER_ID
                .text().should.eventually.equal(USER_NAME);
    });
```

To be able to execute our tests both on Android and iOS platforms we have to use different xpath selectors. Here comes in handy `getXPathElement("textfield")` function from the plugin. It returns the native class of the element depending on the platform and platform's version. The last part needed to assemble our xpath selector is some distinguishing property so we know are using the right UI element. This can be obtained by using [Appium desktop app](http://appium.io/downloads.html) to inspect the visual tree of our app and pick a proper one.

Once we have our UI elements selectors ready it is time for the driver to find them in the visual tree so we can further manipulate and assert them. It is worth mentioning that we should use accessibility ID as a preferable selector where possible `waitForElementByAccessibilityId(FACEBOOK_BUTTON, timeout)`, but in most cases this is not an option and we use xpath instead `waitForElementByXPath(usernameFieldElement, timeout)`.

## Test Execution

It is time for the fun part - test execution. Before we get to the command that will run our tests we will have to add a configuration file describing our capabilities [appium.capabilities.json](https://github.com/NativeScript/nativescript-facebook/blob/master/appium.capabilities.json). This is a requirement coming from [nativescript-dev-appium](https://github.com/NativeScript/nativescript-dev-appium#custom-appium-capabilities) plugin. In our NativeScript Facebook plugin we have two capabilities defined - for Android 6.0 and iOS 10.0 emulator/simulator.

In order to execute the tests for those environments we will use the command for local execution. Before that we have to navigate to `demo` folder.

> **NOTE**: Before running the tests we have to build our app for each platform `tns build android` and `tns build ios`. Additionally, we have to be sure that the same emulator and simulator described in the capabilities we use are available and running on our system.

```
npm run appium --runType=android23
```

```
npm run appium --runType=ios-simulator10iPhone6
```

As you can see, we execute a npm script `npm run appium` that comes out-of-the-box when we install [nativescript-dev-appium](https://github.com/NativeScript/nativescript-dev-appium) plugin. The rest of the command is just [options configuration](https://github.com/NativeScript/nativescript-dev-appium#options).

## Continuous Integration

NativeScript Facebook plugin is based on [nativescript-plugin-seed](https://github.com/NativeScript/nativescript-plugin-seed). Therefore, it already has `.travis.yml` file which eases our CI in [Travis CI](https://travis-ci.org/). We will only have to add a new stage for our UI tests and tweak it a little. In this section we will discuss only the changes that remain to be done, but you can find more information about the rest of the [.travis.yml file](https://github.com/NativeScript/nativescript-facebook/blob/master/.travis.yml) in [Ensure Plugins Quality]({% slug ensure-plugins-quality %}) article.

We use [Sauce Labs](https://saucelabs.com/) cloud based platform to run our UI tests at. It is free for open source projects.

There are two basic changes we have to do before the integration becomes a reality. The first is to upload our application package to Sauce Labs storage as our tests require it. This is done using a `curl` request in the `Build` stage respectively for iOS and Android.

> **NOTE**: Requests depend on `SAUCE_USER` and `SAUCE_KEY` environment variables that have to be [added in Travis CI](https://docs.travis-ci.com/user/environment-variables/#Defining-Variables-in-Repository-Settings) in advance. You can obtain them as described [here](https://wiki.saucelabs.com/display/DOCS/The+Sauce+Labs+Account+Profile+User+Interface).

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
        - cd demo && npm i && npm run appium --runType=android23 --sauceLab=true --appLocation=$ANDROID_PACKAGE
    - os: linux
      env: 
        - iOS="10"
      language: node_js 
      node_js: "6"
      script: 
        - npm i -g appium
        - cd demo && npm i
        - travis_wait npm run appium --runType=ios-simulator10iPhone6 --sauceLab=true --appLocation=$IOS_PACKAGE
```

It takes care to setup two Linux machines and executes the tests in Sauce Labs using the proper [command](https://github.com/NativeScript/nativescript-dev-appium#options) for each platform:

```
npm run appium --runType=android23 --sauceLab=true --appLocation=$ANDROID_PACKAGE
``` 
and

```
npm run appium --runType=ios-simulator10iPhone6 --sauceLab=true --appLocation=$IOS_PACKAGE
```

## See Also

* [Unit tests]({% slug plugin-unit-tests %})