---
nav-title: FAQ
title: "FAQ"
description: A list of frequently asked NativeScript questions and answers
position: 19
---

# NativeScript FAQ

### What Android API level does NativeScript target?

Currently the Android runtime is built against Android API level 17; therefore APIs from higher API levels are not currently supported through JavaScript, however, the NativeScript team is [updating the Android runtime to API level 21](https://github.com/NativeScript/android-runtime/issues/39) soon.

### How do I add a navigation bar to my iOS app?

A NavBar element is planned for NativeScript 1.0. In the meantime you can use iOS-specific code to add a navigation bar to your app. For example, the following code adds a custom navigation bar with a title:

```XML
<Page loaded="pageLoaded"></Page>
```

```JavaScript
var applicationModule = require("application");
var colorModule = require("color");
var frameModule = require("ui/frame");

exports.pageLoaded = function(args) {
    var page = args.object;

    if (applicationModule.ios) {
        page.ios.title = "My App";

        var controller = frameModule.topmost().ios.controller;
        var navBar = controller.navigationBar;

        navBar.tintColor = new colorModule.Color("#FFFF00").ios;
        navBar.barStyle = UIBarStyle.UIBarStyleBlack;
        controller.navigationBarHidden = false;
    }
};
```