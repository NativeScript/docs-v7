---
nav-title: "UI with XML"
title: "UI with XML"
description: "NativeScript Documentation: UI with XML"
position: 5
---

# UI with XML
### How it works?
When you trigger navigation in your application (either by setting a value to the **mainModule** property of the **application** object, or by passing an argument to the **navigate()** method of the **Frame** class), the **NativeScript** navigation framework will look for an XML-extension-file with the same path to load and navigate to the respective **Page**. For example:
###### Declaring application mainModule and start the application
```JS
var application = require("application");
// Set the start module for the application
application.mainModule = "app/my-page";
// Start the application
application.start();
```
###### Navigate to page using Frame navigate() method
```JS
// Navigate to page called “my-page”
frames.topmost().navigate("app/my-page")
```
*__Important__: Paths are relative to the application root! In this case NativeScript will look for the following XML file within your application (app/my-page.xml in this case)!*
###### XML declaration
```XML
<Page>
  <StackPanel>
     <Label id="Label1" text="This is Label!" />
     <Button text="This is Button!" click="buttonClick" />
   </StackPanel>
</Page>
```
If you have a **JavaScript-extension-file** with the same path (app/my-page.js), this file will be loaded together with the XML and will serve as a code-behind for the page where you can specify **event handlers, binding context and/or any other additional code**. In order to be accessible from the UI you need to declare your variables or functions in the module **exports**.
###### Code behind
```JS
var observable = require("data/observable");
var view = require("ui/core/view");
var label = require("ui/label");

var count = 0;
function buttonClick(args) {
      count++;
      var parent =  args.object.parent;
      if (parent) {
        var lbl = view.getViewById(parent, "Label1");
      	if (lbl) {
          lbl.text = "You clicked " + count + " times!";
        }
      }
}
exports.buttonClick = buttonClick;
```
*__Important__: Each attribute value in the XML declaration will be set to respective property of the component, if there is no such property the value will be set as an expando.!*
### Using Built-in components in an XML
Default *NativeScript* components can be found under the *tns_modules/ui* subfolder. Each component is located in a separate folder with a *package.json* file where the main component/file is specified
###### Button package.json
```JS
{ 
    "name" : "button",
    "main" : "button.js" 
}
```
###### button.js
```JS
var Button = ...
    ...
exports.Button = Button;
```
*__Important__: When parsing the XML, NativeScript will look for a component which has a matching name in the module exports!*
## Content components/panels
### Page
###### XML
```XML
<Page loaded="pageLoaded">
 …
</Page>
```
###### JS
```JS
var observable = require("data/observable");
var pages = require("ui/page");
 
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
	// Get the event sender
	var page = args.object;
}
exports.pageLoaded = pageLoaded;
```
### TabView
###### XML
```XML
<Page loaded="pageLoaded">
  <TabView id="tabView1">
    <TabView.items>
      <TabEntry title="Tab 1">
        <TabEntry.view>
          <Label text="This is Label in Tab 1" />
        </TabEntry.view>
      </TabEntry>
      <TabEntry title="Tab 2">
        <TabEntry.view>
          <Label text="This is Label in Tab 2" />
        </TabEntry.view>
      </TabEntry>
    </TabView.items>
  </TabView>
</Page>
```
###### JS
```JS
var view = require("ui/core/view");
function pageLoaded(args) {
	var page = args.object;
	var tabView1 = view.getViewById(page, "tabView1");
	tabView1.selectedIndex = 1;
}
exports.pageLoaded = pageLoaded;
```
### ScrollView
###### XML
```XML
<Page>
  <ScrollView>
	…
  </ScrollView>
</Page>
```
### StackPanel
###### XML
```XML
<Page>
  <StackPanel orientation="horizontal">
    <Label text="This is Label 1" />
    <Label text="This is Label 2" />
  </StackPanel>
</Page>
```
### GridPanel
###### XML
```XML
<Page>
  <GridPanel>
    <GridPanel.rowDefinitions>
      <RowDefinition height="*" />
      <RowDefinition height="auto" />
    </GridPanel.rowDefinitions>
    <GridPanel.columnDefinitions>
      <ColumnDefinition width="250" />
      <ColumnDefinition width="*" />
    </GridPanel.columnDefinitions>
    <Label text="This is Label in row 0, col 0" />
    <Label text="This is Label in row 0, col 1" col="1" />
    <Label text="This is Label in row 1, col 0" row="1" />
    <Label text="This is Label in row 1, col 1" row="1" col="1" />
  </GridPanel>
</Page>
```
### WrapPanel
###### XML
```XML
<Page>
  <WrapPanel>
    <Label text="This is Label 1" />
    <Label text="This is Label 2" />
    <Label text="This is Label 3" />
    <Label text="This is Label 4" />
  </WrapPanel>
</Page>
```
### CanvasPanel
###### XML
```XML
<Page>
  <CanvasPanel>
    <Label text="This is Label 1" left="30" top="70" />
  </CanvasPanel>
</Page>
```
### Custom/user components 
Using **xmlns** you can refer to your own custom components declared in your application. For example
###### XML
```XML
<Page
  	xmlns:customControls="app/xml-declaration/mymodule"
  	xmlns:customOtherControls="app/xml-declaration/mymodulewithxml">
  <WrapPanel>
    <customControls:MyControl />
    <customOtherControls:MyControl />
  </WrapPanel>
</Page>
```
### Code-only custom component (app/xml-declaration/mymodule)
###### JS
```JS
var MyControl = ...
...
exports.MyControl = MyControl;
```
### Custom component with XML (app/xml-declaration/mymodulewithxml)
###### XML
```XML
<StackPanel>
  <Label id="Label1" />
  <Button text="Click!" click="buttonClick" />
</StackPanel>
```
###### JS
```JS
var view = require("ui/core/view");
 
var count = 0;
function buttonClick(args) {
	count++;
 	var parent = args.object.parent;
	if (parent) {
    	var lbl = view.getViewById(parent, "Label1");
    	if (lbl) {
        	lbl.text = "You clicked " + count + " times!";
      }
    }
}
exports.buttonClick = buttonClick;
```
### Bindings & expressions
To specify binding or expression for some property in the XML you can use double curly brackets syntax. For example:
###### XML
```XML
<Page loaded="pageLoaded">
  <Label text="{{ name }}" />
</Page>
```
###### JS
```JS
function pageLoaded(args) {
	var page = args.object;
 
	page.bindingContext = { name: "Some name" };
}
exports.pageLoaded = pageLoaded;
```
*__Important__: NativeScript will look for this property in the component bindingContext or bindingContext of the component parents. All bindings are two way by default!*
You can use also complex expressions instead of simple property name for your bindings:
###### Complex property paths
```JS
your.sub.property[name]
```
###### Logical not operator and comparators
```JS
!,<, >, <=, >=, ==, !=, ===, !==,||, &&
```
###### Unary and binary operators
```JS
+, -, *, /, %
```
###### Ternary operator
```JS
a ? b : c
```
###### Grouping
```JS
(a + b) * (c + d)
```
###### Constants
```JS
numbers, strings, null, undefined
```
Examples:
###### XML
```XML
<Label text="{{ author ? 'by ' + author : '[no author]' }}" />
<Label text="{{ author || '[no author]' }}" />
```
*__Important__: Expressions are re-evaluated on every property change of the Observable object set for bindingContext! In this case the binding is one way (from model to UI)*
### Templates and scope
UI components like **ListView** will create items in runtime by parsing and loading content from **itemTemplate** property if specified.
```XML
<Page loaded="pageLoaded">
  <ListView id="listView1" items="{{ myItems }}">
    <ListView.itemTemplate>
      <Label id="label1" text="{{ name }}"  />
    </ListView.itemTemplate>
  </ListView>
</Page>
```
While you can access **ListView** (listView1) by **id** from the **Page** you cannot access the **Label** (label1) in the same way since this component (label1) is in a different scope and the **ListView** will create such Label for every item.
```JS
var view = require("ui/core/view");

function pageLoaded(args) {
    var page = args.object;

    page.bindingContext = { myItems: [{ name: "Name1" }, { name: "Name2" }, { name: "Name3" }] };

    var listView1 = view.getViewById(page, "listView1");

    var label1 = view.getViewById(page, "label1");
}
exports.pageLoaded = pageLoaded;
```
