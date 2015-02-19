---
nav-title: "UI with XML"
title: "UI with XML"
description: "NativeScript Documentation: UI with XML"
position: 7
---

# UI with XML
### How it works?
When you trigger navigation in your application (either by setting a value to the **mainModule** property of the **application** object, or by passing an argument to the **navigate()** method of the **Frame** class), the **NativeScript** navigation framework will look for an XML-extension-file with the same path to load and navigate to the respective **Page**. For example:
###### Declaring application mainModule and start the application
```JavaScript
var application = require("application");
// Set the start module for the application
application.mainModule = "app/my-page";
// Start the application
application.start();
```
```TypeScript
import application = require("application");
// Set the start module for the application
application.mainModule = "app/my-page";
// Start the application
application.start();
```
###### Navigate to page using Frame navigate() method
```JavaScript
// Navigate to page called “my-page”
frames.topmost().navigate("app/my-page")
```
```TypeScript
// Navigate to page called “my-page”
frames.topmost().navigate("app/my-page")
```
*__Important__: Paths are relative to the application root! In this case NativeScript will look for the following XML file within your application (app/my-page.xml in this case)!*
###### XML
```XML
<Page>
  <StackLayout>
     <Label id="Label1" text="This is Label!" />
     <Button text="This is Button!" tap="buttonTap" />
   </StackLayout>
</Page>
```
If you have a **JavaScript-extension-file** with the same path (app/my-page.js), this file will be loaded together with the XML and will serve as a code-behind for the page where you can specify **event handlers, binding context and/or any other additional code**. In order to be accessible from the UI you need to declare your variables or functions in the module **exports**.
###### Code
```JavaScript
var view = require("ui/core/view");
var count = 0;
function buttonTap(args) {
    count++;
    var sender = args.object;
    var parent = sender.parent;
    if (parent) {
        var lbl = view.getViewById(parent, "Label1");
        if (lbl) {
            lbl.text = "You tapped " + count + " times!";
        }
    }
}
exports.buttonTap = buttonTap;
```
```TypeScript
import observable = require("data/observable");
import view = require("ui/core/view");
import label = require("ui/label");

var count = 0;
export function buttonTap(args: observable.EventData) {
    count++;
    var sender = <view.View>args.object;
    var parent = sender.parent;
    if (parent) {
        var lbl = <label.Label>view.getViewById(parent, "Label1");
        if (lbl) {
            lbl.text = "You tapped " + count + " times!";
        }
    }
}
```
*__Important__: Each attribute value in the XML declaration will be set to respective property of the component, if there is no such property the value will be set as an expando.!*
### Using Built-in components in an XML
Default *NativeScript* components can be found under the *tns_modules/ui* subfolder. Each component is located in a separate folder with a *package.json* file where the main component/file is specified
###### Button package.json
```JavaScript
{
    "name" : "button",
    "main" : "button.js"
}
```
###### button.js
```JavaScript
var Button = ...
    ...
exports.Button = Button;
```
*__Important__: When parsing the XML, NativeScript will look for a component which has a matching name in the module exports!*
## Content components
### Page
###### XML
```XML
<Page loaded="pageLoaded">
 …
</Page>
```
###### Code
```JavaScript
function pageLoaded(args) {
    var page = args.object;
}
exports.pageLoaded = pageLoaded;
```
```TypeScript
import observable = require("data/observable");
import pages = require("ui/page");

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    var page = <pages.Page>args.object;
}
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
###### Code
```JavaScript
var view = require("ui/core/view");
function pageLoaded(args) {
    var page = args.object;
    var tabView1 = view.getViewById(page, "tabView1");
    tabView1.selectedIndex = 1;
}
exports.pageLoaded = pageLoaded;
```
```TypeScript
import observable = require("data/observable");
import view = require("ui/core/view");
import pages = require("ui/page");
import tab = require("ui/tab-view");

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    var page = <pages.Page>args.object;
    var tabView1 = <tab.TabView>view.getViewById(page, "tabView1");
    tabView1.selectedIndex = 1;
}
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
### StackLayout
###### XML
```XML
<Page>
  <StackLayout orientation="horizontal">
    <Label text="This is Label 1" />
    <Label text="This is Label 2" />
  </StackLayout>
</Page>
```
### GridLayout
###### XML
```XML
<Page>
  <GridLayout rows="*, auto" columns="250, *">
    <Label text="This is Label in row 0, col 0" />
    <Label text="This is Label in row 0, col 1" col="1" />
    <Label text="This is Label in row 1, col 0" row="1" />
    <Label text="This is Label in row 1, col 1" row="1" col="1" />
    <Label text="This is Label in row 0, col 0" rowSpan="2" colSpan="2" />
  </GridLayout>
</Page>
```
### WrapLayout
###### XML
```XML
<Page>
  <WrapLayout>
    <Label text="This is Label 1" />
    <Label text="This is Label 2" />
    <Label text="This is Label 3" />
    <Label text="This is Label 4" />
  </WrapLayout>
</Page>
```
### AbsoluteLayout
###### XML
```XML
<Page>
  <AbsoluteLayout>
    <Label text="This is Label 1" left="30" top="70" />
  </AbsoluteLayout>
</Page>
```
### Custom/user components
Using **xmlns** you can refer to your own custom components declared in your application. For example
###### XML
```XML
<Page
  	xmlns:customControls="app/xml-declaration/mymodule"
  	xmlns:customOtherControls="app/xml-declaration/mymodulewithxml">
  <WrapLayout>
    <customControls:MyControl />
    <customOtherControls:MyControl />
  </WrapLayout>
</Page>
```
### Code-only custom component (app/xml-declaration/mymodule)
###### Code
```JavaScript
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var stackLayout = require("ui/layouts/stack-layout");
var label = require("ui/label");
var button = require("ui/button");
var MyControl = (function (_super) {
    __extends(MyControl, _super);
    function MyControl() {
        _super.call(this);
        var counter = 0;
        var lbl = new label.Label();
        var btn = new button.Button();
        btn.text = "Tap me!";
        btn.on(button.knownEvents.tap, function (args) {
            lbl.text = "Tap " + counter++;
        });
        this.addChild(lbl);
        this.addChild(btn);
    }
    return MyControl;
})(stackLayout.StackLayout);
exports.MyControl = MyControl;
```
```TypeScript
import observable = require("data/observable");
import stackLayout = require("ui/layouts/stack-layout");
import label = require("ui/label");
import button = require("ui/button");

export class MyControl extends stackLayout.StackLayout {
    constructor() {
        super();

        var counter: number = 0;

        var lbl = new label.Label();
        var btn = new button.Button();
        btn.text = "Tap me!";
        btn.on(button.knownEvents.tap, (args: observable.EventData) => {
            lbl.text = "Tap " + counter++;
        });

        this.addChild(lbl);
        this.addChild(btn);
    }
}
```
### Custom component with XML (app/xml-declaration/mymodulewithxml)
###### XML
```XML
<StackLayout>
  <Label id="Label1" />
  <Button text="Tap!" tap="buttonTap" />
</StackLayout>
```
###### Code
```JavaScript
var view = require("ui/core/view");
var count = 0;
function buttonTap(args) {
    count++;
    var parent = args.object.parent;
    if (parent) {
        var lbl = view.getViewById(parent, "Label1");
        if (lbl) {
            lbl.text = "You tapped " + count + " times!";
        }
    }
}
exports.buttonTap = buttonTap;
```
```TypeScript
import observable = require("data/observable");
import view = require("ui/core/view");
import label = require("ui/label");

var count = 0;
export function buttonTap(args: observable.EventData) {
    count++;

    var parent = (<view.View>args.object).parent;
    if (parent) {
        var lbl = <label.Label>view.getViewById(parent, "Label1");
        if (lbl) {
            lbl.text = "You tapped " + count + " times!";
        }
    }
}
```
### Bindings & expressions
To specify binding or expression for some property in the XML you can use double curly brackets syntax.
#### Property binding
###### XML
```XML
<Page loaded="pageLoaded">
{%raw%}
  <Label text="{{ name }}" />
{%endraw%}
</Page>
```
###### Code
```JavaScript
function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = { name: "Some name" };
}
exports.pageLoaded = pageLoaded;
```
```TypeScript
import observable = require("data/observable");
import pages = require("ui/page");

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    page.bindingContext = { name: "Some name" };
}
```
*__Important__: NativeScript will look for this property in the component bindingContext or bindingContext of the component parents. All bindings are two way by default!*

#### Event binding
###### XML
```XML
<Page loaded="pageLoaded">
{%raw%}
  <Button text="{{ myProperty }}" tap="{{ myFunction }}" />
{%endraw%}
</Page>
```
###### Code
```JavaScript
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = {
        myProperty: "Some text",
        myFunction: function () {
        }
    };
}
exports.pageLoaded = pageLoaded;
```
```TypeScript
import observable = require("data/observable");
import pages = require("ui/page");

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    page.bindingContext = {
        myProperty: "Some text",
        myFunction: () => {
            // Your code
        }
    };
}
```
#### Expressions
###### Complex property paths
```JavaScript
your.sub.property[name]
```
###### Logical not operator and comparators
```JavaScript
!,<, >, <=, >=, ==, !=, ===, !==,||, &&
```
###### Unary and binary operators
```JavaScript
+, -, *, /, %
```
###### Ternary operator
```JavaScript
a ? b : c
```
###### Grouping
```JavaScript
(a + b) * (c + d)
```
###### Constants
```JavaScript
numbers, strings, null, undefined
```
Examples:
###### XML
```XML
{%raw%}
<Label text="{{ author ? 'by ' + author : '[no author]' }}" />
<Label text="{{ author || '[no author]' }}" />
{%endraw%}
```
*__Important__: Expressions are re-evaluated on every property change of the Observable object set for bindingContext! In this case the binding is one way (from model to UI)*
### Templates and scope
UI components like **ListView** will create items in runtime by parsing and loading content from **itemTemplate** property if specified.
```XML
<Page loaded="pageLoaded">
{%raw%}
  <ListView id="listView1" items="{{ myItems }}">
    <ListView.itemTemplate>
      <Label id="label1" text="{{ name }}"  />
    </ListView.itemTemplate>
  </ListView>
{%endraw%}
</Page>
```
While you can access **ListView** (listView1) by **id** from the **Page** you cannot access the **Label** (label1) in the same way since this component (label1) is in a different scope and the **ListView** will create such Label for every item.
```JavaScript
var view = require("ui/core/view");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = { myItems: [{ name: "Name1" }, { name: "Name2" }, { name: "Name3" }] };

    // Will work!
    var listView1 = view.getViewById(page, "listView1");

    // Will not work!
    var label1 = view.getViewById(page, "label1");
}
exports.pageLoaded = pageLoaded;
```
```TypeScript
import observable = require("data/observable");
import pages = require("ui/page");
import view = require("ui/core/view");
import listView = require("ui/list-view");
import label = require("ui/label");

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    page.bindingContext = { myItems: [{ name: "Name1" }, { name: "Name2" }, { name: "Name3" }] };

    // Will work!
    var listView1 = <listView.ListView>view.getViewById(page, "listView1");

    // Will not work!
    var label1 = <label.Label>view.getViewById(page, "label1");
}
```
*__Important__: Accessing directly components by id is not recommended (especially when the component is part of template). Please use bindings to specify component properties!*
