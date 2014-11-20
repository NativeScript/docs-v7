---
nav-title: "virtual-array How-To"
title: "virtual-array How-To"
description: "Examples for using virtual-array"
---
# Virtual Array module
``` JavaScript
var virtualArrayModule = require("data/virtual-array");
```
### Handle "itemsLoading" event to load items on demand using load() method.
``` JavaScript
var array = new virtualArrayModule.VirtualArray(100);
array.loadSize = 15;
array.on(virtualArrayModule.knownEvents.itemsLoading, function (args) {
    // Argument (args) is ItemsLoading.
    // args.index is start index of the page where the requested index is located.
    // args.count number of requested items.
    //
    // Note: Virtual array will divide total number of items to pages using "loadSize" property value. When you request an 
    // item at specific index the array will raise "itemsLoading" event with "ItemsLoading" argument index set to the first index of the requested page
    // and count set to number of items in this page. 
    //
    // Important: If you have already loaded items in the requested page the array will raise multiple times "itemsLoading" event to request 
    // all ranges of still not loaded items in this page. 
    var itemsToLoad = new Array();
    for (var i = 0; i < args.count; i++) {
        itemsToLoad.push(i + args.index);
    }
    array.load(args.index, itemsToLoad);
});
```
### Handle "change" event when you load items using load() method.
``` JavaScript
var array = new virtualArrayModule.VirtualArray(100);
array.loadSize = 15;
array.on(virtualArrayModule.knownEvents.change, function (args) {
    // Argument (args) is ChangedData<T>.
    // args.eventName is "change".
    // args.action is "update".
    // args.removed.length and result.addedCount are equal to number of loaded items with load() method.
});
var itemsToLoad = [0, 1, 2];
array.load(index, itemsToLoad);
```
### Handle "change" event when you increase "length" property.
``` JavaScript
var array = new virtualArrayModule.VirtualArray(100);
array.loadSize = 15;
array.on(virtualArrayModule.knownEvents.change, function (args) {
    // Argument (args) is ChangedData<T>.
    // args.eventName is "change".
    // args.action is "add".
    // args.removed.length is 0, result.addedCount is equal to the delta between new and old "length" property values.
});
array.length += array.loadSize;
```
