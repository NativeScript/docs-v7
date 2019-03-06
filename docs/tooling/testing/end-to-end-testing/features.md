---
title: Features
titletag: End to End Testiing - Features
description: Write and execute UI E2E automation tests to ensure that newly added features are working correctly and no regressions are introduced in the mobile app.
position: 30
tags: ui testing, app ui testing, nativescript ui testing, automation testing, app automation testing, nativescript automation testing, appium, ui test automation, e2e testing
slug: e2e-testing-features
previous_url: /testing,/core-concepts/testing
---


## Features

1. Cross-platform [locators](https://github.com/NativeScript/nativescript-dev-appium/blob/master/lib/locators.ts)
    
    Imagine that you want to select textfield on iOS and Android and provide an input. The element's native class is different on iOS and Android. For example, textfield class on both iOS is *XCUIElementTypeTextField* and *android.widget.EditText* on Android, so the locators define all common elements and corresponding classes per OS to ease the selection of particular element. Example:
    ```typescript
    const usernameField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
    await usernameField.click();
    ```
1. Find [strategies](https://github.com/NativeScript/nativescript-dev-appium/blob/master/lib/appium-driver.d.ts): *findElementByText*, *findElementByClassName*, *findElementByAccessibilityId*, *findElementByXPath*, etc.

    Examples:
    
    ```
    <!-- home-page.xml -->
    ...
    <Button automationText="customLogOut" tap="{{ logout }}" text="Log out (Custom)"></Button>
    ...
    ```
    ```typescript
    import { AppiumDriver, createDriver, SearchOptions, Direction } from "nativescript-dev-appium";

    const driver: AppiumDriver = await createDriver();

    // select an element by using the accessibility ID assigned by the automationText property in the .xml
    const button = await driver.findElementByAccessibilityId("customLogOut");

    // select an element using its native class 
    let listView;
    if (isAndroid) {
        listView = await driver.findElementByClassName("android.widget.FrameLayout");
    }
    else {
        listView = await driver.findElementByClassName("XCUIElementTypeCollectionView");
    }

    // select an element using XPath
    let userNameLabelElement;
    if (isAndroid) {
        userNameLabelElement = "[@text='Nativescript User']";
    } else {
        userNameLabelElement = "[@name='Nativescript User']";
    }
    const userNameLabel = await driver.findElementByXPath("//" + driver.locators.getElementByName("label") + userNameLabelElement);
    ```
1. [Actions](https://github.com/NativeScript/nativescript-dev-appium/blob/master/lib/ui-element.d.ts): *tap*, *click*, *doubleTap*, *hold*, etc. Most of them are self described. 
    
    Examples:
    ```typescript
    const item = await driver.findElementByText("Special Item 111", SearchOptions.exact);
    await item.click();
    await item.doubleTap();
    await item.hold(2);
    ```
1. [Gestures](https://github.com/NativeScript/nativescript-dev-appium/blob/master/lib/ui-element.d.ts): *scroll*, *scrollTo*, *swipe*, *drag*, etc.
    
    Examples:
    ```typescript
    // Imagine that you have a listview with items that can be swiped
    const item = await driver.findElementByText("Special Item 111", SearchOptions.exact);
    await item.swipe(Direction.right);
    ```
1. [Cross-platform element abstraction](https://github.com/NativeScript/nativescript-dev-appium/blob/master/lib/ui-element.d.ts) with *exists*, *waitForExist*, *waitForExistNot*, *location*, *isDisplayed*, *size*, *text* properties

    Examples:
    ```typescript
    const item = await driver.findElementByText("Special Item 111", SearchOptions.exact);
    const exist = await item.exists();
    const rectangle = await item.getRectangle();
    const width = rectangle.width;
    ```
1. Ability to turn on/off “Don’t keep activities” setting in the Developer options for Android
1. Direct access to driver
    
    Examples:
    ```typescript
    if (driver.isAndroid) {
        const wd = driver.wd();
        const action = new wd.TouchAction(driver.driver);
        // Drag item on Android
        action.longPress({ x: 200, y: 200 })
            .wait(2000)
            .moveTo({ x: 200, y: 400 })
            .release();
        await action.perform();
    } else {
        // Drag item on iOS
        await driver.driver.execute('mobile: dragFromToForDuration', {
            duration: 2.0,
            fromX: 100,
            fromY: 105,
            toX: 100,
            toY: 242
        });
    }

    ```
1. Typings - very useful when start writing test and you are not aware of nativescript-dev-appium methods' definitions and available parameters.
1. Async/Await
1. [Open source cloud builds]({% slug plugin-ui-tests %}#continuous-integration) integration, i. e. [Sauce Labs](https://saucelabs.com/)
1. [Image comparison](https://github.com/NativeScript/nativescript-dev-appium/blob/master/lib/appium-driver.d.ts) of: screen, rectangle, element.
    
    Examples:
    ```typescript
    // Compare a specific element
    const selected = await driver.findElementByText("Item 0", SearchOptions.exact);

    // The second parameter is the name of the image.
    // The location of the image is specified by '--imagesPath "someName/iPhone X"' flag.
    // Which provides relative path to e2e/resources/images folder.
    // Actual image location e2e/resources/images/someName/iPhone X/selectedState.png
    const selection = await driver.compareElement(selected, "selectedState");

    // Compare the current screen of the app
    const screen = await driver.compareScreen("screenImage");
    ```
1. [WIP] Ability to verify animations/transitions through video/images; please refer to [frame-comparer](https://github.com/SvetoslavTsenov/frame-comparer)