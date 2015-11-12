---
nav-title: Architecture and Navigation in NativeScript
title: "App: Architecture and Navigation"
description: Learn the basic application structure of NativeScript apps and how to navigate inside your app.
position: 5
---

# Architecture and Navigation

NativeScript apps consist of pages which represent the separate application screens. Pages are instances of the [`page`](ApiReference/ui/page/Page.md) class of the [`Page`](ApiReference/ui/page/README.md) module. To navigate between pages, you can use the methods of the [`Frame`](ApiReference/ui/frame/Frame.md) class of the [`Frame`](ApiReference/ui/frame/README.md) module.

> **TIP:** Instead of multiple pages, you can have a single page with a [tab view](ApiReference/ui/tab-view/README.md) and different user interfaces for each tab.


* [Page Management](#page-management)
    * [Define Page](#define-page)
    * [Set Home Page](#set-home-page)
* [Navigation](#navigation)
    * [The Topmost Frame](#the-topmost-frame)
    * [Navigate by Page Name](#navigate-by-page-name)
    * [Navigate Using a Function](#navigate-using-a-function)
    * [Navigate and Pass Context](#navigate-and-pass-context)
    * [Navigate without History](#navigate-without-history)
    * [Navigate Back](#navigate-back)
    * [Modal Pages](#modal-pages)
* [Supporting Multiple Screens](#supporting-multiple-screens)
    * [Screen Size Qualifiers](#screen-size-qualifiers)
    * [Platform Qualifiers](#platform-qualifiers)
    * [Orientation Qualifiers](#orientation-qualifiers)

## Page Management

### Define Page

Pages represent the separate screens of your application. Each page is an instance of the [`page`](ApiReference/ui/page/Page.md) class of the [`Page`](ApiReference/ui/page/README.md) module. Each class instance inherits the [`content`](ApiReference/ui/content-view/ContentView.md) property which holds the root visual element of the UI.

NativeScript provides two approaches to instantiating your pages.

**Create a page in XML**

You can define the UI declaration and the code for the page separately.

To apply this approach, create a `XML` file for each page to hold the layout of the page. Thus your code will be in a `JS` or a `TS` file. The names of the `XML` and the `JS` or `TS` file must match.


``` XML
<!-- main-page.xml-->
<Page loaded="onPageLoaded">
  <Label text="Hello, world!"/>
</Page>
```
``` JavaScript
// main-page.js
function onPageLoaded(args) {
    console.log("Page Loaded");
}
exports.onPageLoaded = onPageLoaded;
```
``` TypeScript
// main-page.ts
import observableModule = require("data/observable");

export function onPageLoaded(args: observableModule.EventData) {
    console.log("Page Loaded");
}
```
**Create a page in code**

To apply this approach, you need to create a function named `createPage` which will return an instance of your page. NativeScript considers `createPage` a factory function.

``` JavaScript
var pagesModule = require("ui/page");
var labelModule = require("ui/label");
function createPage() {
    var label = new labelModule.Label();
    label.text = "Hello, world!";
    var page = new pagesModule.Page();
    page.content = label;
    return page;
}
exports.createPage = createPage;
```
``` TypeScript
import pagesModule = require("ui/page");
import labelModule = require("ui/label");

export function createPage() {
    var label = new labelModule.Label();
    label.text = "Hello, world!";
    var page = new pagesModule.Page();
    page.content = label;
    return page;
}
```

### Set Home Page

Each application must have a single entry point - the home page.

To set the home page for your app, you need to use the `mainModule` member of the [`Application`](ApiReference/application/README.md) module. When you define `application.mainModule`, NativeScript looks for an XML file with the specified name, parses it and draws the UI described in the file. Afterwards, if NativeScript finds a `JS` or a `TS` file with the same name, it executes the business logic in the file.

``` JavaScript
var application = require("application");
application.mainModule = "main-page";
application.start();
```
``` TypeScript
import application = require("application");
application.mainModule = "main-page";
application.start();
```

## Navigation

The [`Frame`](ApiReference/ui/frame/Frame.md) class represents the logical unit that is responsible for navigation between different pages. Typically, each app has one frame at the root level - the topmost frame.

To navigate between pages, you can use the [`navigate`](ApiReference/ui/frame/README.md) method of the topmost frame instance.

In addition, each `Page` instance carries information about the frame object which navigated to it in the `frame` property. This lets you navigate with the `frame` property as well. 


### The Topmost Frame

The topmost frame is the root-level container for your app's UI and you can use it to navigate inside of your app. You can get a reference to this frame by using the `topmost()` method of the Frame module.


``` JavaScript
var frameModule = require("ui/frame");
var topmost = frameModule.topmost();
```
``` TypeScript
import frameModule = require("ui/frame");
var topmost = frameModule.topmost();
```

There are several ways to perform navigation, which one to use depends on the needs of your app.


### Navigate by Page Name

Perhaps the simplest way to navigate is by specifying the file name of the page to which you want to navigate.

``` JavaScript
topmost.navigate("details-page");
```
``` TypeScript
topmost.navigate("details-page");
```

### Navigate Using a Function

A more dynamic way of navigating can be done by providing a function that returns the instance of the page to which you want to navigate.

``` JavaScript
var factoryFunc = function () {
    var label = new labelModule.Label();
    label.text = "Hello, world!";
    var page = new pagesModule.Page();
    page.content = label;
    return page;
};
topmost.navigate(factoryFunc);
```
``` TypeScript
var topmost = frameModule.topmost();
var factoryFunc = function () {
    var label = new labelModule.Label();
    label.text = "Hello, world!";
    var page = new pagesModule.Page();
    page.content = label;
    return page;
};
topmost.navigate(factoryFunc);
```

### Navigate and Pass Context

When you navigate to another page, you can pass context to the page with a [`NavigationEntry`](ApiReference/ui/frame/NavigationEntry.md) object. This approach provides finer control over navigation compared to other navigation approaches. For example, with `NavigationEntry` you can also animate the navigation.

``` JavaScript
var navigationEntry = {
    moduleName: "details-page",
    context: {info: "something you want to pass to your page"},
    animated: false
};
topmost.navigate(navigationEntry);
```
``` TypeScript
var navigationEntry = {
    moduleName: "details-page",
    context: {info: "something you want to pass to your page"},
    animated: false
};
topmost.navigate(navigationEntry);
```

#### Example

In this example, this master-details app consists of two pages. The main page contains a list of entities. The details page shows information about the currently selected entity.

When you navigate to the details page, you transfer a primary key or ID information about the selected entity. 

``` JavaScript
function listViewItemTap(args) {
    // Navigate to the details page with context set to the data item for specified index
    frames.topmost().navigate({
        moduleName: "cuteness.io/details-page",
        context: appViewModel.redditItems.getItem(args.index)
    });
}
```
``` TypeScript
export function listViewItemTap(args: listView.ItemEventData) {
    // Navigate to the details page with context set to the data item for specified index
    frames.topmost().navigate({
        moduleName: "details-page",
        context: appViewModel.redditItems.getItem(args.index)
    });
}
```

With the **onNavigatedTo** callback, you show the details for the entity.

``` JavaScript
function pageNavigatedTo(args) {
    var page = args.object;
    page.bindingContext = page.navigationContext;
}
```
``` TypeScript
// Event handler for Page "navigatedTo" event attached in details-page.xml
export function pageNavigatedTo(args: observable.EventData) {
    // Get the event sender
    var page = <pages.Page>args.object;
    page.bindingContext = page.navigationContext;
}
```

### Navigate without History

You can navigate to a page without adding this navigation to the history. Set the `backstackVisible` property of the [`NavigationEntry`](ApiReference/ui/frame/NavigationEntry.md) to `false`. If this property is set to false then the Page will be displayed but once navigated from it will not be able to be navigated back to.

``` JavaScript
var navigationEntry = {
    moduleName: "login-page",
    backstackVisible: false
};
topmost.navigate(navigationEntry);
```
``` TypeScript
var navigationEntry = {
    moduleName: "login-page",
    backstackVisible: false
};
topmost.navigate(navigationEntry);
```

### Navigate Back

The topmost frame tracks the pages the user has visited in a navigation stack. To go back to a previous page, you need to use the **goBackMethod** of the topmost frame instance.

``` JavaScript
topmost.goBack();
```
``` TypeScript
topmost.goBack();
```

### Modal Pages

Use the **showModal** method of the page class to show another page as a modal dialog. You must specify the location of the modal page module. You can provide a context and a callback function which will be called when the modal page is closed. You can also optionally specify whether to show the modal page in fullscreen or no. To close the modal page you need to subscribe to its `shownModally` event and store a reference to a close callback function provided through the event arguments. Call this function when you are ready to close the modal page optionally passing some results to the master page. Here is an example with two pages -- a main page and a login page. The main page shows the login page modally, the user enters his username and password and when ready clicks the Login button. This closes the modal login page and returns the username/password to the main page which can then log the user in.

> **TIP:**By design in iOS, it is not possible to show a modal page in fullscreen.

**main-page**
``` JavaScript
 var modalPageModule = "./modal-views-demo/login-page";
 var context = "some custom context";
 var fullscreen = true;
 mainPage.showModal(modalPageModule, context, function closeCallback(username, password) {
     // Log the user in...
 }, fullscreen);
```
``` TypeScript
 var modalPageModule = "./modal-views-demo/login-page";
 var context = "some custom context";
 var fullscreen = true;
 mainPage.showModal(modalPageModule, context, function closeCallback (username: string, password: string) {
     // Log the user in...
 }, fullscreen);
```

**login-page**
``` JavaScript
var context;
var closeCallback;
function onShownModally(args) {
    context = args.context;
    closeCallback = args.closeCallback;
}
exports.onShownModally = onShownModally;
function onLoginButtonTap() {
    closeCallback(usernameTextField.text, passwordTextField.text);
}
exports.onLoginButtonTap = onLoginButtonTap;
```
``` TypeScript
var context: any;
var closeCallback: Function;
export function onShownModally(args: pages.ShownModallyData) {
    context = args.context;
    closeCallback = args.closeCallback;
}

export function onLoginButtonTap() {
    closeCallback(usernameTextField.text, passwordTextField.text);
}
```

Complete source code can be found [here](https://github.com/NativeScript/NativeScript/tree/master/apps/modal-views-demo).

## Supporting Multiple Screens
Mobile application run on different devices with different screen sizes and form factors. NativeScript provides a way to define different files(.js, .css, .xml etc.) to be loaded based on the screens size, platform and orientation of the current device. The approach is somewhat similar to [multi screen support in android](http://developer.android.com/guide/practices/screens_support.html). There is a set of *qualifiers* that can be added inside the file that will be respected when the file is loaded. Here is how the file should look like:

`<file-name>[.<qualifier>]*.<extension>`

We will go trough the list of supported qualifiers.

### Screen Size Qualifiers
All the values in screen size qualifiers are in density independent pixels(dp) - meaning it corresponds to the physical dimensions of the screen. The assumptions is that there are ~160 dp per inch. For example, according to android guidelines if the device's smaller dimension is more than 600dp(~3.75 inches) it is probably tablet.

* `minWH<X>` - The smaller dimension(width or height) should be at least **X** dp.
* `minW<X>` - Width should be at least **X** dp.
* `minH<X>` - Height should be at least **X** dp.

*Example(separate XML file for tablet and phone)*:

* `main-page.minWH600.xml` - XML file to be used for tablet devices.
* `main-page.xml` - XML to be used for phones 

### Platform Qualifiers

* `android` – android platform
* `ios` – iOS platform
* `windows` (coming soon) – windows platform

*Example(platform specific files)*:

* `app.android.css` - CSS styles for Android.
* `app.ios.css` - CSS styles for iOS. 

The platform qualifiers are executed during build time, while the others - during run time. For example, the app.ios.css file will not be taken in consideration when building for android platform. Contrary, the screen size qualifiers will be considered just after the application runs on a device with specific screen size.

### Orientation Qualifiers
* `land` - orientation is in landscape mode
* `port` - orientation is in portrait mode

> Note: All qualifiers are taken into account when the page is loading. However, changing the device orientation will not trigger page reload and will not change the current page.
