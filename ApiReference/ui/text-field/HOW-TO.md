---
nav-title: "TextField How-To"
title: "How-To"
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
 <StackLayout orientation="vertical">
   {%raw%}<TextField text="{{ someProperty }}" />
   <TextField text="{{ someProperty }}" />{%endraw%}
 </StackLayout>
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
### Setting the text of a TextField
``` JavaScript
textField.hint = expectedValue;
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
### Binding to the return press event
It is possible to bind to the return press event on a TextField. This event will be fired when the user hits the "Return" key on the keyboard while in the TextField.
````XML
<TextField text="search" returnPress="performSearch" />
````

### Setting return key text
The return key text that is displayed in the keyboard for a TextField can be customized. Possible values are `send`, `search`, `go`, `next`, `done`. See the [Return Key Type](https://docs.nativescript.org/ui/keyboard#return-key-type) section of the API documentation for more details.

````XML
<TextField text="search" returnKeyType="search" />
````
