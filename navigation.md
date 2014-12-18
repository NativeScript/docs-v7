---
nav-title: "NativeScript Navigation"
title: "Navigation"
description: "NativeScript Documentation: Navigation"
position: 4
---

# Navigation
A NativeScript application is built around the concept of Pages. Pages are the different screens of your application. Each Page has a **content** property which holds the root visual element of the page UI. Navigating between different pages is done with methods of the Frame object.

##Start Page
Your application needs to have a start page. You can set the start page in two different manners. The first way is by specifying the **application.mainModule** property. Create a file called my-page.ts and define the page inside it like this:
``` JavaScript
var pagesModule = require("ui/page");
var labelModule = require("ui/label");

var label = new labelModule.Label();
label.text = "Hello, world!";

var page = new pagesModule.Page();
page.content = label;

export var Page = page;
```
Then in your file where you require the application module, simply do the following:
``` JavaScript
var application = require("application");
application.mainModule = "path-to-my-page";
```
By doing this, the application will automatically create a new Frame for you and navigate to the page specified in the mainModule property.

Alternatively, you can do everything manually like this:
``` JavaScript
var application = require("application");
var frameModule = require("ui/frame");
var pagesModule = require("ui/page");
var labelModule = require("ui/label");

application.onLaunch = function (context) {
    var label = new labelModule.Label();
    label.text = "Hello, world!";

    var startPage = new pagesModule.Page();
    startPage.content = label;

    var frame = new frameModule.Frame();
    frame.navigate(startPage);
}
```
##Navigating between pages
To perform navigation, you will need a reference to the topmost frame of the application. You can obtain such reference like this:
``` JavaScript
var frameModule = require("ui/frame");
var topmost = frameModule.topmost();
```
To navigate to another page use the **navigate** method of the topmost frame. The navigate method has different overloads which let you navigate to a page module by specifying its name (just like you specify application.mainModule):
``` JavaScript
topmost.navigate("path-to-your-page-module");
```
To an instance of a page that you have created:
``` JavaScript
var detailsPage = new pagesModule.Page();
topmost.navigate(detailsPage);
``` 
By supplying a factory function that creates a new page:
``` JavaScript
var pageFactory = function () {
    return new pagesModule.Page();
}
topmost.navigate(pageFactory);
```
Or by specifying a complete NavigationEntry.
``` JavaScript
var navigationEntry = {
    moduleName: "paht-to-your-page-module",
    context: {info: "something you want to pass to your page"},
    animated: false
};
topmost.navigate(navigationEntry);
```
To go back to the previous page you should use the **goBackMethod**:
``` JavaScript
topmost.goBack();
```
##Alternatives
Alternatively, if you do not want to have different pages and navigate beteen them, you can have a single page with a TabView. You can define a different UI for each tab and when the user selects a certain tab he will be presented with this UI.

