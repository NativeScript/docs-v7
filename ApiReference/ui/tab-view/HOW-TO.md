---
nav-title: "TabView How-To"
title: "How-To"
description: "Examples for using TabView"
---
# TabView
### Declaring the TabView in xml.
```XML
<Page>
 <TabView>
   <TabView.items>
     <TabViewItem title="Tab 1">
       <TabViewItem.view>
          <Label text="Label in Tab1" />
       </TabViewItem.view>
     </TabViewItem>
     <TabViewItem title="Tab 2">
       <TabViewItem.view>
          <Label text="Label in Tab2" />
       </TabViewItem.view>
     </TabViewItem>
   </TabView.items>
 </TabView>
</Page>
```
Using a TabView requires the "ui/tab-view" module.
``` JavaScript
var tabViewModule = require("ui/tab-view");
```
### Binding TabView.items
``` JavaScript
var items = [];
var StackLayout0 = new stackLayoutModule.StackLayout();
var label0 = new labelModule.Label();
label0.text = "Tab 0";
StackLayout0.addChild(label0);
var tabEntry0 = {
    title: "Tab 0",
    view: StackLayout0
};
items.push(tabEntry0);
var StackLayout1 = new stackLayoutModule.StackLayout();
var label1 = new labelModule.Label();
label1.text = "Tab 1";
StackLayout1.addChild(label1);
var tabEntry1 = {
    title: "Tab 1",
    view: StackLayout1
};
items.push(tabEntry1);
tabView.items = items;
```
### Selecting a tab programmatically
``` JavaScript
tabView.selectedIndex = 9;
```
## Creating a TabView
``` JavaScript
var tabView = new tabViewModule.TabView();
```
