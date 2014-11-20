---
nav-title: "Class data/virtual-array"
title: "Class data/virtual-array"
description: "Class data/virtual-array"
---
# Module: "data/virtual-array"

``` JavaScript
// To import the "data/virtual-array" module:
var datavirtual_array = require("data/virtual-array");
```

Class | Description
------|------------
[ChangeType](../../data/virtual-array/ChangeType.md) | Change types.
[VirtualArray](../../data/virtual-array/VirtualArray.md) | Advanced array like class that helps loading items on demand. Use "length" property to specify total number of items, 
"loadSize" to specify number of items to be requested in a single request, "itemsLoading" event to handle items request and 
"load()" method to copy items into the array. All already loaded items are cached in-memory and when "getItem()" method is called 
the array will raise "itemsLoading" event for still not loaded items. Example:
var virtualArray = new VirtualArray&lt;number&gt;(100);
virtualArray.loadSize = 15;
virtualArray.on("itemsLoading", (args: virtualArrayDef.ItemsLoading) =&gt; {
    var itemsToLoad = new Array&lt;number&gt;();
    for (var i = 0; i &lt; args.count; i++) {
        itemsToLoad.push(args.index + i);
    }
    virtualArray.load(args.index, itemsToLoad);
});

Object | Description
------|------------
[ChangedData](../../data/virtual-array/ChangedData.md) | 
[ItemsLoading](../../data/virtual-array/ItemsLoading.md) | Event args for "itemsLoading" event.

Namespace | Description
------|------------
[knownEvents](../../data/virtual-array/knownEvents/) | Known event names.