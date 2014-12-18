---
nav-title: "NativeScript Navigation"
title: "Navigation"
description: "NativeScript Documentation: Navigation"
position: 4
---

# Navigation
A NativeScript application is built around the concept of Pages. Pages are the different screens of your application. Each Page has a **content** property which holds the root visual element of the page UI. Navigating between different pages is done with methods of the Frame object.

##Start Page
Your application needs to have a start page. If you are going to define the UI of your page entirely in code behind, then create a file called main-page.ts like this:
``` JavaScript
var pagesModule = require("ui/page");
var labelModule = require("ui/label");

export function createPage() {
    var label = new labelModule.Label();
    label.text = "Hello, world!";

    var page = new pagesModule.Page();
    page.content = label;

    return page;
}
```
If you are going to define the UI of your page in xml, then create a file called main-page.xml like this:
``` XML
<Page loaded="onPageLoaded">
  <Label text="Hello, world!"/>
</Page>
```
For handling events and providing additional logic create a file called main-page.ts like this:
``` JavaScript
import observableModule = require("data/observable");

export function onPageLoaded(args: observableModule.EventData) {
    console.log("Page Loaded");
}
```
Finally, in your main application file where you start your application (usually called app.ts), simply do the following:
``` JavaScript
var application = require("application");
application.mainModule = "app/main-page";
application.start();
```

##Navigating between pages
To perform navigation, you will need a reference to the topmost frame of the application. You can obtain such reference like this:
``` JavaScript
var frameModule = require("ui/frame");
var topmost = frameModule.topmost();
```
To navigate to another page use the **navigate** method of the topmost frame. The navigate method has different overloads which let you navigate to a page module by specifying its name (just like you specify application.mainModule):
``` JavaScript
topmost.navigate("app/details-page");
```
Or by specifying a complete NavigationEntry.
``` JavaScript
var navigationEntry = {
    moduleName: "app/details-page",
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
