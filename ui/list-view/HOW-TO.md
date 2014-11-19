---
nav-title: "list-view How-To"
title: "list-view How-To"
description: "Examples for using list-view"
---
# ListView
Using a ListView requires the ListView module.
``` JavaScript
var listViewModule = require("ui/list-view");
```
Other modules which will be used in the code samples in this article:
``` JavaScript
var observableArray = require("data/observable-array");
var labelModule = require("ui/label");
```
## Creating a ListView
``` JavaScript
var listView = new listViewModule.ListView();
```
## Using ListView with Array
The itemLoading event is used to create the UI for each item that is shown in the ListView.
``` JavaScript
var colors = ["red", "green", "blue"];
listView.items = colors;
listView.on("itemLoading", function (args) {
    if (!args.view) {
        // Create label if it is not already created.
        args.view = new labelModule.Label();
    }
    args.view.text = colors[args.index];
});
```
Note, that changing the array after the list view is shown will not update the UI.
You can force-update the UI using the refresh() method.
``` JavaScript
colors.push("yellow");
// Manually trigger the update so that the new color is shown.
listView.refresh();
```
## Using ListView with ObservableArray
``` JavaScript
var colors = new observableArray.ObservableArray(["red", "green", "blue"]);
listView.items = colors;
listView.on("itemLoading", function (args) {
    if (!args.view) {
        // Create label if it is not already created.
        args.view = new labelModule.Label();
    }
    args.view.text = colors.getItem(args.index);
    indexes[args.index] = true;
});
```
When using ObservableArray the list view will be automatically updated when items are added or removed form the array.
``` JavaScript
colors.push("yellow");
// The ListView will be updated automatically.
```
## Responding to other events
### ItemTap event
The event will be raise when an item inside the ListView is tapped.
``` JavaScript
listView.on(listViewModule.knownEvents.itemTap, function (args) {
    var tappedItemIndex = args.index;
    var tappedItemView = args.view;
    // Do someting
});
```
### LoadMoreItems event
The event will be raised when the ListView is scrolled so that the last item is visible.
This even is intended to be used to add additional data in the ListView.
``` JavaScript
listView.on("loadMoreItems", function (data) {
    // Do something.
});
```
