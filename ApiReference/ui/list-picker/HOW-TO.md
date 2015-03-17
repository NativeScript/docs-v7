---
nav-title: "ListPicker How-To"
title: "How-To"
description: "Examples for using ListPicker"
---
# ListPicker
Using a ListPicker requires the "ui/list-picker" module.
``` JavaScript
var listPickerModule = require("ui/list-picker");
function _createListPicker() {
    <snippet module="ui/list-picker" title="ListPicker">
    ## Creating a ListPicker
    ``` JavaScript
    var listPicker = new listPickerModule.ListPicker();
    ```
## Binding listPicker.items
``` JavaScript
listPicker.items = [1, 2, 3];
```
## Selecting an item programmatically
``` JavaScript
listPicker.selectedIndex = 9;
```
