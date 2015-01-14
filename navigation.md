---
nav-title: "Navigation"
title: "Navigation"
description: "Navigation"
position: 0
---
# Overview
Each NativeScript application is built upon the concept of pages (represented by the **Page** class). Pages are the different screens that your application offers. Each page has a **content** property which holds the root visual element of the page UI. Navigating between different pages is done with methods of the **Frame** class. The Frame class represents the logical unit that is responsible for navigation between different pages, i.e. going from one page to another, keeping a history stack for going back and so on.
#Main Module
Each application must have a single entry point, that is, the first screen that the user will see after starting the app. Specifying the main module of an application is done through the **mainModule** property of the Application class:
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
#Pages
Pages can be defined in two different ways. If you decide to separate the user interface from the logic, you can create an XML file containing the layout of your page. When you specify **application.mainModule**, NativeScript will first look for an XML file with that name. If it finds such a file, it will parse it and create the UI described in it:
``` XML
<Page loaded="onPageLoaded">
  <Label text="Hello, world!"/>
</Page>
``` 
If you need to have additional logic (event handlers for example), you can also create a code-behind file with the same name as the XML file. After the XML file is parsed, NativeScript will look for this optional code-behind file:
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
Alternatively, you can create the page entirely in the code-behind file:
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
If creating the page entirely in code-behind, it is important that you create a function named exactly **createPage** which returns an instance of the page you created. By convention, NativeScript will look for a factory function called **createPage**.
#Topmost Frame
To perform navigation, you will need a reference to the topmost frame of the application:
``` JavaScript
var frameModule = require("ui/frame");
var topmost = frameModule.topmost();
```
``` TypeScript
import frameModule = require("ui/frame");
var topmost = frameModule.topmost();
```
#Navigating to a Module
You can navigate to another page by using the **navigate** method of the topmost frame instance. The navigate method has different overloads which let you navigate to a page module by specifying its name (just like you specify application.mainModule):
``` JavaScript
topmost.navigate("app/details-page");
```
``` TypeScript
topmost.navigate("app/details-page");
```
#Navigating with a Factory Function
Another overload which you can use to navigate is the one which accepts a factory function returning a page instance:
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
#Navigating with NavigationEntry
In case you want to pass some state information, i.e. some kind of context, to the page you are navigating to, you should use the overload which accepts a NavigationEntry object. You can specify the page you want to navigate to by using either the **moduleName** string property or the *create* factory function property of the NavigationEntry class. You can also specify whether you want the transition to be animated. The overload that accepts a NavigationEntry is the one that gives you the finest control over navigation. In fact, all other overloads will ultimately call this one after constructing the appropriate NavigationEntry.
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
#Navigating to another page and passing context
Sometimes, the page being navigated to would have to receive information about the context in which this navigation happened. The best example would be a master-details scenario where there are two pages -- the main page containing a list of some entities and a details page which provides details about a particular entity. In this case, when navigating to the details page it is mandatory to transfer some primary key or ID information about the entity the details page should show. This is done with the help of the **context** property of a NavigationEntry:
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
Once you pass this information, the best place to retrieve it and act accordingly is in the **onNavigatedTo** callback of the details page:
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
#Navigating Back
The topmost frame keeps track of the pages the user has visited in a navigation stack. To go back to a previous page you should use the **goBackMethod** of the topmost frame instance:
``` JavaScript
topmost.goBack();
```
``` TypeScript
topmost.goBack();
```
#Alternatives
Alternatively, if you do not want to have different pages and navigate beteen them, you can have a single page with a TabView. You can define a different UI for each tab and when the user selects a certain tab he will be presented with this UI.
