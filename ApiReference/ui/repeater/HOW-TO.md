---
nav-title: "repeater How-To"
title: "How-To"
description: "Examples for using repeater"
---
# Repeater
Using a Repeater requires the repeater module.
``` JavaScript
var repeaterModule = require("ui/repeater");
```
Other modules which will be used in the code samples in this article:
``` JavaScript
var observableArray = require("data/observable-array");
var labelModule = require("ui/label");
```
### Binding the Repeater items property to collection in the view-model.
```XML
<Page>
  {%raw%}<Repeater items="{{ myItems }}" />{%endraw%}
</Page>
```
### Define the Repeater itemTemplate property.
```XML
<Page>
 {%raw%}<Repeater items="{{ myItems }}">
    <Repeater.itemTemplate>
       <Label text="{{ title || 'Downloading...' }}" textWrap="true" class="title" />
    </Repeater.itemTemplate>
 </Repeater>{%endraw%}
</Page>
```
### Define the Repeater itemsLayout property. Default is StackLayout with orientation="vertical".
```XML
<Page>
 {%raw%}<Repeater items="{{ myItems }}">
    <Repeater.itemsLayout>
       <StackLayout orientation="horizontal" />
    </Repeater.itemsLayout>
 </Repeater>{%endraw%}
</Page>
```
### Repeater with WrapLayout inside ScrollView.
```XML
<Page>
{%raw%}<ScrollView>
  <Repeater items="{{ myItems }}">
    <Repeater.itemsLayout>
       <WrapLayout />
    </Repeater.itemsLayout>
    <Repeater.itemTemplate>
       <Label text="{{ $value }}" margin="10" />
    </Repeater.itemTemplate>
  </Repeater>
 </ScrollView>{%endraw%}
</Page>
```
### Using Repeater with Array
``` JavaScript
var colors = ["red", "green", "blue"];
repeater.items = colors;
```
> Note, that changing the array after the repeater is shown will not update the UI.
You can force-update the UI using the refresh() method.
``` JavaScript
colors.push("yellow");
// Manually trigger the update so that the new color is shown.
repeater.refresh();
```
### Using Repeater with different layout.
``` JavaScript
var repeater = new repeaterModule.Repeater();
var stackLayout = new stackLayoutModule.StackLayout();
stackLayout.orientation = "horizontal";
repeater.itemsLayout = stackLayout;
```
### Using Repeater with ObservableArray
``` JavaScript
var colors = new observableArray.ObservableArray(["red", "green", "blue"]);
repeater.items = colors;
```
> When using ObservableArray the repeater will be automatically updated when items are added or removed form the array.
``` JavaScript
colors.push("yellow");
// The Repeater will be updated automatically.
```
