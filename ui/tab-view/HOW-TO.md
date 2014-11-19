---
nav-title: "TabView How-To"
title: "TabView How-To"
description: "Examples for using TabView"
---
# TabView
Using a TabView requires the "ui/tab-view" module.
``` JavaScript
var tabViewModule = require("ui/tab-view");
function _createTabView() {
    <snippet module="ui/tab-view" title="TabView">
    ## Creating a TabView
    ``` JavaScript
    var tabView = new tabViewModule.TabView();
    ```
## Binding TabView.items
``` JavaScript
var items = [];
var stackPanel0 = new stackPanelModule.StackPanel();
var label0 = new labelModule.Label();
label0.text = "Tab 0";
stackPanel0.addChild(label0);
var tabEntry0 = {
    title: "Tab 0",
    view: stackPanel0
};
items.push(tabEntry0);
var stackPanel1 = new stackPanelModule.StackPanel();
var label1 = new labelModule.Label();
label1.text = "Tab 1";
stackPanel1.addChild(label1);
var tabEntry1 = {
    title: "Tab 1",
    view: stackPanel1
};
items.push(tabEntry1);
tabView.items = items;
```
## Selecting a tab programmatically
``` JavaScript
tabView.selectedIndex = 9;
```
