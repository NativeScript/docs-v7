---
nav-title: "TextField How-To"
title: "TextField How-To"
description: "Examples for using TextField"
---
# TextField
Using a TextField requires the text-field module.
``` JavaScript
var textFieldModule = require("ui/text-field");
var observable = require("data/observable");
```
### Binding two TextFields text property to observable view-model property.
```XML
<Page loaded="pageLoaded">
 <StackPanel orientation="vertical">
   {%raw%}<TextField text="{{ someProperty }}" />
   <TextField text="{{ someProperty }}" />{%endraw%}
 </StackPanel>
</Page>
```
```JS
function pageLoaded(args) {
  var page = args.object;
  var obj = new observable.Observable();
  obj.set("someProperty", "Please change this text!");
  page.bindingContext = obj;
}
exports.pageLoaded = pageLoaded;
```
## Creating a TextField
``` JavaScript
var textField = new textFieldModule.TextField();
```
### Setting the text of a TextField
``` JavaScript
textField.text = "Hello, world!";
```
### Binding text property directly to model
``` JavaScript
var model = new observable.Observable();
model.set("username", "john");
var options = {
    sourceProperty: "username",
    targetProperty: "text"
};
textField.bind(options, model);
// textField.text is now "john"
model.set("username", "mary");
// textField.text is now "mary"
```
### Setting the hint of a TextField
``` JavaScript
textField.hint = "type your username here";
```
### Binding hint property directly to model
``` JavaScript
var model = new observable.Observable();
model.set("hint", "type your username here");
var options = {
    sourceProperty: "hint",
    targetProperty: "hint"
};
textField.bind(options, model);
// textField.hint is now "type your username here"
model.set("hint", "type your password here");
// textField.hint is now "type your password here"
```
### Setting the secure property of a TextField
``` JavaScript
textField.secure = true;
```
### Binding secure property directly to model
``` JavaScript
var model = new observable.Observable();
model.set("secure", true);
var options = {
    sourceProperty: "secure",
    targetProperty: "secure"
};
textField.bind(options, model);
// textField.secure is now true
model.set("secure", false);
// textField.secure is now false
```
