---
nav-title: "TextView How-To"
title: "How-To"
description: "Examples for using TextView"
---
# TextView
Using a TextView requires the text-view module.
``` JavaScript
var textViewModule = require("ui/text-view");
var observable = require("data/observable");
```
### Binding two TextViews text property to observable view-model property.
``` XML
<Page loaded="pageLoaded">
 <StackLayout orientation="vertical">
   {%raw%}<TextView text="{{ someProperty }}" />
   <TextView text="{{ someProperty }}" />{%endraw%}
 </StackLayout>
</Page>
```
``` JavaScript
function pageLoaded(args) {
  var page = args.object;
  var obj = new observable.Observable();
  obj.set("someProperty", "Please change this text!");
  page.bindingContext = obj;
}
exports.pageLoaded = pageLoaded;
```
### Creating a TextView
``` JavaScript
var textView = new textViewModule.TextView();
```
### Setting the text of a TextView
``` JavaScript
textView.text = "Hello, world!";
```
### Binding text property directly to model
``` JavaScript
var model = new observable.Observable();
model.set("username", "john");
var options = {
    sourceProperty: "username",
    targetProperty: "text"
};
textView.bind(options, model);
// textView.text is now "john"
model.set("username", "mary");
// textView.text is now "mary"
```
### Setting the hint of a TextView
``` JavaScript
textView.hint = "type your username here";
```
### Binding hint property directly to model
``` JavaScript
var model = new observable.Observable();
model.set("hint", "type your username here");
var options = {
    sourceProperty: "hint",
    targetProperty: "hint"
};
textView.bind(options, model);
// TextView.hint is now "type your username here"
model.set("hint", "type your password here");
// TextView.hint is now "type your password here"
```
### Setting the editable property of a TextView
``` JavaScript
textView.editable = false;
```
### Binding editable property directly to model
``` JavaScript
var model = new observable.Observable();
model.set("editable", false);
var options = {
    sourceProperty: "editable",
    targetProperty: "editable"
};
textView.bind(options, model);
// textView.editable is now false
model.set("editable", true);
// textView.editable is now true
```
