---
nav-title: "Page How-To"
title: "Page How-To"
description: "Examples for using Page"
---
#Page
Usingapage requiresthePagemodule.
```JavaScript
var PageModule = require("ui/page");
// FrameModule is needed in order to have an option to navigate to the new page.
var FrameModule = require("ui/frame");
```
#Page
Creating and navigating to the created page.
```JavaScript
var testPage = new PageModule.Page();
var label = new LabelModule.Label();
label.text = "The quick brown fox jumps over the lazy dog.";
testPage.content = label;
var topFrame = FrameModule.topmost();
var navEntry = {
    page: testPage,
    animated: false
};
topFrame.navigate(navEntry);
```
#Page
Navigating backward is as simple as calling a single method.
```JavaScript
topFrame.goBack();
```
#Page
Pass data to the new page.
```JavaScript
var testPage = new PageModule.Page();
// folowing method just adds a label as a content of the page.
addLabelToPage(testPage);
var expectedStringValue = "Expected String Value";
var topFrame = FrameModule.topmost();
var contextData = {
    contextProperty: expectedStringValue
};
topFrame.navigate({
    page: testPage,
    context: contextData,
    animated: false
});
TKUnit.waitUntilReady(function () {
    return testPage.isLoaded;
});
try {
    // contextData becomes available within the navigationContext property.
    var actualContextValue = testPage.navigationContext.contextProperty;
    ```
#Page
Adding a css that affects all nested UI components.
```JavaScript
testPage.css = "stackPanel {background-color: #ffff0000;} label {background-color: #ff00ff00;}";
```
