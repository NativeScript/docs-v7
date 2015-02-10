---
nav-title: "TextView How-To"
title: "TextView How-To"
description: "Examples for using TextView"
---
# TextView
Binding two TextViews text property to observable view-model property.
```XML
<Page loaded="pageLoaded">
 <StackPanel orientation="vertical">
   <TextView text="{{ someProperty }}" />
   <TextView text="{{ someProperty }}" />
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
Using a TextView requires the text-view module.
``` JavaScript
var textViewModule = require("ui/text-view");
var observable = require("data/observable");
var enums = require("ui/enums");
```
## Creating a TextView
``` JavaScript
var textView = new textViewModule.TextView();
```
## Setting the text of a TextView
``` JavaScript
textView.text = "Hello, world!";
```
## Binding text property directly to model
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
## Setting the editable property of a TextView
``` JavaScript
textView.editable = false;
```
## Binding editable property directly to model
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
## Setting the keyboard type
``` JavaScript
textView.keyboardType = enums.KeyboardType.email;
```
## Setting the return key type
``` JavaScript
textView.returnKeyType = enums.ReturnKeyType.search;
```
