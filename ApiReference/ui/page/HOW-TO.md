---
nav-title: "Page How-To"
title: "How-To"
description: "Examples for using Page"
---
# Page
Using a page requires the Page module.
``` JavaScript
var PageModule = require("ui/page");
// FrameModule is needed in order to have an option to navigate to the new page.
var FrameModule = require("ui/frame");
```
### Attaching event handler for the Page loaded event to set bindingContext.
```XML
<Page loaded="pageLoaded">
  {%raw%}<Label text="{{ name }}" />{%endraw%}
</Page>
```
```JS
function pageLoaded(args) {
  var page = args.object;
  page.bindingContext = { name : "Some name" };
}
exports.pageLoaded = pageLoaded;
```
### Creating and navigating to the created page.
``` JavaScript
var testPage;
var pageFactory = function () {
    testPage = new PageModule.Page();
    var label = new LabelModule.Label();
    label.text = "The quick brown fox jumps over the lazy dog.";
    testPage.content = label;
    return testPage;
};
var navEntry = {
    create: pageFactory,
    animated: false
};
var topFrame = FrameModule.topmost();
topFrame.navigate(navEntry);
```
### Navigating backward is as simple as calling a single method.
``` JavaScript
topFrame.goBack();
```
### Pass data to the new page.
``` JavaScript
var testPage;
var pageFactory = function () {
    testPage = new PageModule.Page();
    testPage.onNavigatedTo = function (context) {
        //console.log(JSON.stringify(context));
    };
    return testPage;
};
var navEntry = {
    create: pageFactory,
    context: "myContext",
    animated: false
};
var topFrame = FrameModule.topmost();
topFrame.navigate(navEntry);
```
# Page
Adding a css that affects all nested UI components.
``` JavaScript
testPage.css = "stackLayout {background-color: #ffff0000;} label {background-color: #ff00ff00;}";
```
