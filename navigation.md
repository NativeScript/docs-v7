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
    * [Navigate with Factory Function](#navigate-with-factory-function)
    * [Navigate and Pass Context](#navigate-and-pass-context)
    * [Navigate Back](#navigate-back)

## Page Management

### Define Page

Pages represent the separate screens of your application. Each page is an instance of the [`page`](ApiReference/ui/page/Page.md) class of the [`Page`](ApiReference/ui/page/README.md) module. Each class instance inherits the [`content`](ApiReference/ui/content-view/ContentView.md) property which holds the root visual element of the UI.

NativeScript provides three approaches to instantiating your pages.

**Create the UI separately from the business logic**

You can create the pages for your user interface separately from your business logic. 

To apply this approach, you need to create a separate `XML` file for each page to hold the layout of the page.

``` XML
<Page loaded="onPageLoaded">
  <Label text="Hello, world!"/>
</Page>
```

**Execute additional business logic on page load**

NativeScript can automatically execute business code logic on page load.

To apply this approach, you need to have a separate `XML` file for your page and a `JS` or a `TS` file which holds the business logic. The names of the `XML` and the `JS` or `TS` file must match.

``` JavaScript
function onPageLoaded(args) {
    console.log("Page Loaded");
}
exports.onPageLoaded = onPageLoaded;
```
``` TypeScript
import observableModule = require("data/observable");

export function onPageLoaded(args: observableModule.EventData) {
    console.log("Page Loaded");
}
```
**Create page when executing business logic**

You can create the page inside your business logic.

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
application.mainModule = "app/main-page";
application.start();
```
``` TypeScript
import application = require("application");
application.mainModule = "app/main-page";
application.start();
```

## Navigation

The [`Frame`](ApiReference/ui/frame/Frame.md) class represents the logical unit that is responsible for navigation between different pages. Typically, each app has one frame at the root level - the topmost frame.

To navigate between pages, you can use the [`navigate`](ApiReference/ui/frame/README.md) method of the topmost frame instance.

In addition, each `Page` instance carries information about the frame object which navigated to it in the `frame` property. This lets you navigate with the `frame` property as well. 

### The Topmost Frame

The topmost frame is the frame at the root level. When navigating inside your app, you can do it with the topmost frame.

You can get the topmost frame with the `topmost()` method of the Frame module.

``` JavaScript
var frameModule = require("ui/frame");
var topmost = frameModule.topmost();
```
``` TypeScript
import frameModule = require("ui/frame");
var topmost = frameModule.topmost();
```

### Navigate by Page Name

You can navigate to the topmost frame of a page specified by its file name.

``` JavaScript
topmost.navigate("app/details-page");
```
``` TypeScript
topmost.navigate("app/details-page");
```

### Navigate with Factory Function

You can specify the page to which you want to navigate by a factory function which returns the page instance.

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
    moduleName: "app/details-page",
    context: {info: "something you want to pass to your page"},
    animated: false
};
topmost.navigate(navigationEntry);
```
``` TypeScript
var navigationEntry = {
    moduleName: "app/details-page",
    context: {info: "something you want to pass to your page"},
    animated: false
};
topmost.navigate(navigationEntry);
```

After you pass the context, you can implement additional business logic with the `onNavigatedTo` callback.

#### Example

In this example, this master-details app consists of two pages. The main page contains a list of entities. The details page shows information about the currently selected entity.

When you navigate to the details page, you transfer a primary key or ID information about the selected entity. 

``` JavaScript
function listViewItemTap(args) {
    // Navigate to the details page with context set to the data item for specified index
    frames.topmost().navigate({
        moduleName: "app/cuteness.io/details-page",
        context: appViewModel.redditItems.getItem(args.index)
    });
}
```
``` TypeScript
export function listViewItemTap(args: listView.ItemEventData) {
    // Navigate to the details page with context set to the data item for specified index
    frames.topmost().navigate({
        moduleName: "app/details-page",
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

### Navigate Back

The topmost frame tracks the pages the user has visited in a navigation stack. To go back to a previous page, you need to use the **goBackMethod** of the topmost frame instance.

``` JavaScript
topmost.goBack();
```
``` TypeScript
topmost.goBack();
```