---
nav-title: "Label How-To"
title: "How-To"
description: "Examples for using Label"
---
# Label
Using a label requires the Label module.
``` JavaScript
var LabelModule = require("ui/label");
```
### Binding the Label text property to a view-model property.
``` XML
<Page>
  {%raw%}<Label text="{{ title }}" />{%endraw%}
</Page>
```
### How to set label text content
``` JavaScript
var label = new LabelModule.Label();
var expectedValue = "Expected Value";
label.text = expectedValue;
```
### How to turn on text wrapping for a label
``` JavaScript
var label = new LabelModule.Label();
label.textWrap = true;
```
### How to style a label via css class
``` JavaScript
label.text = "The quick brown fox jumps over the lazy dog.";
label.className = "title";
// after that all we have to do is to set a similar css entry within parent page css property
// label.parentPage.css = ".title {background-color: #C6C6C6; color: #10C2B0; font-size: 14;}";
```
### How to style a label via css type
``` JavaScript
label.text = "The quick brown fox jumps over the lazy dog.";
// in order to style label with a "type style scope" just put a similar css entry
// testLabel.parentPage.css = "label {background-color: #C6C6C6; color: #10C2B0; font-size: 14;}";
// all labels within the parent page will be styled according to css values
```
### How to style a label via css control identifier
``` JavaScript
label.text = "The quick brown fox jumps over the lazy dog.";
label.id = "testLabel";
// after that all we have to do is to set a similar css entry within parent page css property
// label.parentPage.css = "#testLabel {background-color: #C6C6C6; color: #10C2B0; font-size: 14;}";
```
### How to bind text property of a label to an observable model
``` JavaScript
var label = new LabelModule.Label();
var expValue = "Expected Value";
var sourceModel = new observableModule.Observable();
var bindingOptions = {
    sourceProperty: "sourceProperty",
    targetProperty: "text"
};
label.bind(bindingOptions, sourceModel);
sourceModel.set("sourceProperty", expValue);
// console.log(label.text); --> prints: "Expected Value"
```
