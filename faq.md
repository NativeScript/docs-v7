---
nav-title: FAQ
title: "FAQ"
description: A list of frequently asked NativeScript questions and answers
position: 19
---

# NativeScript FAQ

### What Android API level does NativeScript target?

The NativeScript Android runtime is built against Android API level 17; therefore APIs from higher API levels are not supported through JavaScript. The NativeScript team is [updating the Android runtime to API level 21](https://github.com/NativeScript/android-runtime/issues/39) soon.

### How do I add a navigation bar to my iOS app?

A NavBar element is planned for NativeScript 1.0. In the meantime you can use iOS-specific code to add a navigation bar to your app. For example, the following code adds a custom navigation bar with a title:

```XML
<!-- main-page.xml -->
<Page loaded="pageLoaded"></Page>
```

```JavaScript
// main-page.js

// Require the NativeScript modules this page needs
var applicationModule = require("application");
var colorModule = require("color");
var frameModule = require("ui/frame");

// Code to run when the page loads
exports.pageLoaded = function(args) {
    var page = args.object;

    // Make sure we're on iOS before configuring the navigation bar
    if (applicationModule.ios) {
        page.ios.title = "My App";

        // Get access to the native iOS UINavigationController and UINavigationBar
        var controller = frameModule.topmost().ios.controller;
        var navBar = controller.navigationBar;

        // Set the UINavigationBar's tintColor and barStyle
        navBar.tintColor = new colorModule.Color("#FFFF00").ios;
        navBar.barStyle = UIBarStyle.UIBarStyleBlack;

        // Call the UINavigationController's setNavigationBarHidden method
        controller.navigationBarHidden = false;
    }
};
```

### How do I check which version of NativeScript does my project use?

Open the `app/tns_modules/package.json` file and check the `version` attribute. This defines the version of the cross-platform modules.