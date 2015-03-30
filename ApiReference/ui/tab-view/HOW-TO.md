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
     <TabEntry title="Tab 1">
       <TabEntry.view>
          <Label text="Label in Tab1" />
       </TabEntry.view>
     </TabEntry>
     <TabEntry title="Tab 2">
       <TabEntry.view>
          <Label text="Label in Tab2" />
       </TabEntry.view>
     </TabEntry>
   </TabView.items>
 </TabView>
</Page>
```
Using a TabView requires the "ui/tab-view" module.
``` JavaScript
var tabViewModule = require("ui/tab-view");
```
## Creating a TabView
``` JavaScript
var tabView = new tabViewModule.TabView();
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
