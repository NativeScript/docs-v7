---
title: The Basics
description: Learn the basic principles of designing a user interface with NativeScript. In NativeScript, you can design the UI using XML and CSS.
position: 10
slug: ui-basics
previous_url: /ui-with-xml,/ui/ui-with-xml
environment: nativescript
---

# The User Interface

The user interface of NativeScript mobile apps consists of pages. Typically, the design of the user interface is developed and stored in `XML` files, styling is done via CSS and the business logic is developed and stored in `JavaScript` or `TypeScript` files.

* [The basics](#the-basics)
  * [Declare the home page](#declare-the-home-page)
  * [Navigate to a page](#navigate-to-a-page)
  * [Set the bindingContext while navigating to a page](#set-the-bindingcontext-while-navigating-to-a-page)
  * [Execute business logic](#execute-business-logic)
* [User interface components](#user-interface-components)
  * [The default content components](#the-default-content-components)
  * [Custom components](#custom-components)
* [Bindings](#bindings)
  * [Property binding](#property-binding)
  * [Event binding](#event-binding)
  * [ListView binding](#listview-binding)
  * [Expressions](#expressions)
* [Platform-specific declarations](#platform-specific-declarations)
  * [Platform-specific property value](#platform-specific-property-value)
  * [Platform-specific component declaration](#platform-specific-component-declaration)
* [Lower-case-dashed component declaration](#lower-case-dashed-component-declaration)

## The basics

When you develop the user interface of your app, you can implement each application screen in a separate page or implement your application screens on a single page with a tab view.

For each page, you need to have a separate `XML` file that holds the layout of the page. For each `XML` file that NativeScript parses, the framework also looks for a `JavaScript` or `TypeScript` file with the same name and executes the business logic inside it.

### Declare the home page

Each NativeScript app must have a home page&mdash;the page that loads when you launch the app.

You need to explicitly set the home page for your app. You can do this by calling the `start()` method of the [`Application`](http://docs.nativescript.org/api-reference/modules/_application_.html) module and pass `NavigationEntry` with the desired `moduleName`.

The NativeScript navigation framework looks for an `XML` file with the specified name, loads it and navigates to the respective page. If NativeScript discovers a `JavaScript` or `TypeScript` file with the same name, it executes the code inside it.

```JavaScript
var application = require("application");
// Start the application. Don't place any code after this line.
application.start({ moduleName: "my-page" });
```
```TypeScript
import application = require("application");
// Start the application. Don't place any code after this line.
application.start({ moduleName: "my-page" });
```

### Navigate to a page

You can navigate between pages with the `navigate` method of the [`Frame`](http://docs.nativescript.org/api-reference/classes/_ui_frame_.frame.html) class. The [`Frame`](http://docs.nativescript.org/api-reference/classes/_ui_frame_.frame.html) class represents the logical unit that is responsible for navigation between different pages. Typically, each app has one frame at the root level&mdash;the topmost frame.

When you trigger navigation, NativeScript looks for an `XML` file with the specified name, loads it and navigates to the respective page. If NativeScript discovers a `JavaScript` or `TypeScript` file with the same name, it executes the code inside it.

```JavaScript
// To import the "ui/frame" module:
var frames = require("ui/frame");
// Navigate to page called “my-page”
frames.topmost().navigate("my-page");
```
```TypeScript
// To import the "ui/frame" module:
import frames = require("ui/frame");
// Navigate to page called “my-page”
frames.topmost().navigate("my-page");
```

> Paths are relative to the application root. In the example above, NativeScript looks for a `my-page.xml` file in the app directory of your project.

### Set the bindingContext while navigating to a page

You could provide `bindingContext` automatically while navigating to a page. This will give you a simple way to make the context become the bindingContext of the page on navigation. The way to do that is to set up the `bindingContext` property, which points to your custom view model, on navigate method.

```JavaScript
// To import the "ui/frame" module and "main-view-model":
var frame = require("ui/frame");
var main_view_model = require("./main-view-model");
// Navigate to page called “my-page” and provide "bindingContext"
frame.topmost().navigate({
  moduleName: "my-page",
  bindingContext: new main_view_model.HelloWorldModel()
});
```
```TypeScript
// To import the "ui/frame" module and "main-view-model":
import {topmost} from "ui/frame";
import {HelloWorldModel} from "./main-view-model"
// Navigate to page called “my-page” and provide "bindingContext"
topmost().navigate({
  moduleName:"my-page",
  bindingContext:new HelloWorldModel()
});
```



### Execute business logic

When you have a `JavaScript` or a `TypeScript` file in the same location with the same name as your `XML` file, NativeScript loads it together with the `XML` file. In this `JavaScript` or `TypeScript` file you can manage event handlers, bind context or execute additional business logic.

#### Example

In this example of `main-page.xml`, your page consists of a button. When you tap the button, the `buttonTap` function is triggered.

```XML
<Page>
  <StackLayout>
     <Label id="Label1" text="This is Label!" />
     <Button text="This is Button!" tap="buttonTap" />
   </StackLayout>
</Page>
```

This example app is a simple counter app. The logic for the counter is implemented in a `main-page.js` or `main-page.ts` file.

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
To access variables or functions from the user interface, you need to declare them in the `exports` object in the module.

NativeScript sets each attribute value in the XML declaration to a respective property or an event of the component. If a respective property does not exist, NativeScript sets the attribute value as an expando object.

You can specify code and CSS files for your Page XML using `import` and `cssFile` attributes:
```XML
<Page import="~/your-code-file" cssFile="~/your-styles.css">
    <StackLayout>
     ...
    </StackLayout>
</Page>
```

## User interface components

NativeScript provides a wide range of built-in user interface components:mdash;layouts and widgets. You can also create your own custom user interface components.

When NativeScript parses your `XML` files, it looks for components that match a name in the module exports.

For example, when you have a `Button` declaration in your `XML` file, NativeScript looks for a `Button` name in the module exports.

```JavaScript
var Button = ...
    ...
exports.Button = Button;
```

### The default content components

The top-level user interface components are content components:mdash;pages and layouts. These content components let you arrange your interactive user interface components in specific ways.

#### Page

Your application pages (or screens) are instances of the [`page`](http://docs.nativescript.org/api-reference/classes/_ui_page_.page.html) class of the [`Page`](http://docs.nativescript.org/api-reference/classes/_ui_page_.page.html) module. Typically, an app will consist of multiple application screens.

##### Example

You can execute some business logic when your page loads using the `pageLoaded` event.

You need to set the `loaded` attribute for your page in your `main-page.xml`.

```XML
<Page loaded="pageLoaded">
 …
</Page>
```

You need to handle the business logic that loads in a `main-page.js` or `main-page.ts` file.

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

#### TabView

With a [`tabview`](http://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview.html), you can avoid spreading your user interface across multiple pages. Instead, you can have one page with multiple tabs.

##### Example

The following sample `main-page.xml` contains two tabs with labels.

```XML
<Page loaded="pageLoaded">
  <TabView id="tabView1">
    <TabView.items>
      <TabViewItem title="Tab 1">
        <TabViewItem.view>
          <Label text="This is Label in Tab 1" />
        </TabViewItem.view>
      </TabViewItem>
      <TabViewItem title="Tab 2">
        <TabViewItem.view>
          <Label text="This is Label in Tab 2" />
        </TabViewItem.view>
      </TabViewItem>
    </TabView.items>
  </TabView>
</Page>
```

The respective `main-page.js` or `main-page.ts` loads the first tab by its ID and shows its contents.

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

#### ScrollView

You can insert a [`scrollView`](http://docs.nativescript.org/api-reference/classes/_ui_scroll_view_.scrollview.html) inside your page to make the page or the content enclosed in the `scrollView` scrollable.

##### Example

This sample `main-page.xml` shows how to insert a `scrollView` inside your page.

```XML
<Page>
  <ScrollView>
	…
  </ScrollView>
</Page>
```

#### StackLayout

You can arrange the user interface components in your page in a horizontal or vertical stack using [`stackLayout`](http://docs.nativescript.org/api-reference/classes/_ui_layouts_stack_layout_.stacklayout.html).

##### Example

This sample `main-page.xml` shows how to arrange the labels in a page in a horizontal stack.

```XML
<Page>
  <StackLayout orientation="horizontal">
    <Label text="This is Label 1" />
    <Label text="This is Label 2" />
  </StackLayout>
</Page>
```

#### GridLayout

You can arrange the user interface components in your page in a flexible grid area using [`gridLayout`](http://docs.nativescript.org/api-reference/classes/_ui_layouts_grid_layout_.gridlayout.html).

##### Example

This sample `main-page.xml` shows how to arrange labels inside a table by setting their position by row or column.

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

#### WrapLayout

You can arrange your user interface components in rows or columns until the space is filled and then wrap them on a new row or column using [`wrapLayout`](http://docs.nativescript.org/api-reference/classes/_ui_layouts_wrap_layout_.wraplayout.html). By default, if orientation is not specified, `wrapLayout` arranges items horizontally.

##### Example

This sample `main-page.xml` provides four labels wrapped horizontally within the visible space of the page.

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

#### AbsoluteLayout

You can arrange your user interface components by left/top coordinates using [`absoluteLayout`](http://docs.nativescript.org/api-reference/classes/_ui_layouts_absolute_layout_.absolutelayout.html).

##### Example

The following `main-page.xml` contains a page with a single label positioned at the specified coordinates.

```XML
<Page>
  <AbsoluteLayout>
    <Label text="This is Label 1" left="30" top="70" />
  </AbsoluteLayout>
</Page>
```

### Custom components

You can define your own XML namespaces to create custom user interface components.

#### Code-only custom component

This sample `main-page.xml` is using a custom component defined in separate declarations in the `xml-declaration/mymodule` directory.

```XML
<Page
    xmlns:customControls="xml-declaration/mymodule">
  <customControls:MyControl />
</Page>
```

This sample custom component declared in `xml-declaration/mymodule.js` or `xml-declaration/mymodule.ts` exports the `MyControl` variable, which creates a simple counter inside your `main-page.xml` page.

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
        btn.on(button.Button.tapEvent, function (args) {
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
        btn.on(button.Button.tapEvent, (args: observable.EventData) => {
            lbl.text = "Tap " + counter++;
        });

        this.addChild(lbl);
        this.addChild(btn);
    }
}
```

When referring to code-only components in your pages with an `xmlns` declaration, you should point it either to the code file with the component implementation or to the folder containing the files. In the latter case, you will have to add a `package.json` file in the folder so that the file can be required properly.

#### XML-based custom component with a code file

This sample `main-page.xml` uses a custom component defined in an `xml-declaration/mymodulewithxml/MyControl.xml` file together with `xml-declaration/mymodulewithxml/MyControl.js` or `xml-declaration/mymodulewithxml/MyControl.ts` code file.

```XML
<Page
    xmlns:customOtherControls="xml-declaration/mymodulewithxml">
    <customOtherControls:MyControl />
</Page>
```

The custom component in `xml-declaration/MyControl.xml` defines a button, a label and a `buttonTap` function, located in the code file, which changes the label on every tap of the button.

```XML
<StackLayout>
  <Label id="Label1" />
  <Button text="Click!" tap="buttonTap" />
</StackLayout>
```

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
#### Dynamically loading custom components
Load a pure JavaScript component by finding it in the exports of the module. The component is specified by a path and its name. Then the code from the JavaScript file is executed.
```JavaScript
var builder = require("ui/builder");
var myComponentInstance = builder.load({
        path: "~/xml-declaration/mymodule",
        name: "MyControl"
});
```
```TypeScript
import builder = require("ui/builder");
var myComponentInstance = builder.load({
        path: "~/xml-declaration/mymodule",
        name: "MyControl"
});
```

Load the XML file with JavaScript code-behind by finding the specified XML filename through the specified path in the exports of the modules. JavaScript file with the same name will be required and served as code-behind of the XML.
```JavaScript
var builder = require("ui/builder");
var myComponentInstance = builder.load({
        path: "~/xml-declaration/mymodulewithxml",
        name: "MyControl"
});
```
```TypeScript
import builder = require("ui/builder");
var myComponentInstance = builder.load({
        path: "~/xml-declaration/mymodulewithxml",
        name: "MyControl"
});
```

> The UI builder will automatically load the CSS file with the same name as the component name and apply it to the specified page:
```JavaScript
var myComponentInstance = builder.load({
        path: "~/xml-declaration/mymodulewithxml",
        name: "MyControl",
        page: yourPageInstance
});
```
```TypeScript
var myComponentInstance = builder.load({
        path: "~/xml-declaration/mymodulewithxml",
        name: "MyControl",
        page: yourPageInstance
});
```

## Gestures
All [UI Gestures]({% slug gestures %})
(gestures.md) can be defined in XML. For example:
```XML
<Page>
  <Label text="Some text" tap="myTapHandler" />
</Page>
```
```JavaScript
function myTapHandler(args) {
    var context = args.view.bindingContext;
}
exports.myTapHandler = myTapHandler;
```
```TypeScript
import gestures = require("ui/gestures");

export function myTapHandler(args: gestures.GestureEventData) {
    var context = args.view.bindingContext;
}
```

## Bindings

To set a binding for a property in the `XML`, you can use double curly brackets syntax.

### Property binding

This sample `main-page.xml` contains a simple label whose text will be populated when the page loads.

```XML
<Page loaded="pageLoaded">
{%raw%}
  <Label text="{{ name }}" />
{%endraw%}
</Page>
```

This sample `main-page.js` or `main-page.ts` file sets a `bindingContext` for the page. The `bindingContext` contains the custom property and its value. When NativeScript parses `main-page.xml`, it will populate the custom name property with the value in the `bindingContext`.

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
> NativeScript looks for the custom property in the `bindingContext` of the current component or the `bindingContext` of its parents. By default, all bindings, defined in XML, are two-way bindings.

### Event binding

This sample `main-page.xml` contains a button. The text for the button and the event that the button triggers are determined when the page loads from the matching `main-page.js` or `main-page.ts` file.

```XML
<Page loaded="pageLoaded">
{%raw%}
  <Button text="{{ myProperty }}" tap="{{ myFunction }}" />
{%endraw%}
</Page>
```

This sample `main-page.js` or `main-page.ts` sets a `bindingContext` for the page. The `bindingContext` contains the custom property for the button text and its value and the custom function that will be triggered when the button is tapped. When NativeScript parses `main-page.xml`, it will populate the button text with the value in the `bindingContext` and will bind the custom function to the tap event.

```JavaScript
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = {
        myProperty: "Some text",
        myFunction: function () {
          // Your code
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

### ListView binding

You can use the double curly brackets syntax to bind the items to a [`listView`](http://docs.nativescript.org/api-reference/classes/_ui_list_view_.listview.html). You can also define a template with the `itemTemplate` property from which NativeScript will create the items for your `listView`.

> Avoid accessing components by ID, especially when the component is part of a template. It is recommended that you use bindings to specify component properties.

NativeScript can create the items from a template when the `listView` loads inside your page. When you work with templates and a `listView`, keep in mind the scope of the `listView` and its items.

In this sample `main-page.xml`, the ListView consists of labels and each item will be created from a template. The text of each label is the value of the name property of the corresponding item.

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

The sample `main-page.js` or `main-page.ts` populates the `bindingContext` for the page. In this case, the code sets values for the name property for each label. Note that because the `ListView` and the Label have different scopes, you can access ListView by ID from the page but you cannot access the Label by ID. The `ListView` creates a new `Label` for every item.

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

If you want to show some inner collection items inside ```ListView.itemTemplate``` you can use a [Repeater]({%slug layouts %}#repeating-layout-children):
```XML
<Page>
{%raw%}
  <ListView items="{{ myItems }}">
    <ListView.itemTemplate>
      <Repeater items="{{ mySubItems }}"  />
    </ListView.itemTemplate>
  </ListView>
{%endraw%}
</Page>
```

### Expressions

To set an expression as a value of a property in the `XML`, you might as well go with the mustache syntax here.

> NativeScript reevaluates your expression on every property change of the `Observable` object set for `bindingContext`. This binding is a one-way binding;mdash;from the view model to the user interface.

The following sample `main-page.xml` shows how to set an expression as the value for a label.

```XML
{%raw%}
<Label text="{{ author ? 'by ' + author : '[no author]' }}" />
<Label text="{{ author || '[no author]' }}" />
{%endraw%}
```

**Complex property paths**

```JavaScript
your.sub.property[name]
```

**Logical not operator and comparators**

```JavaScript
!,<, >, <=, >=, ==, !=, ===, !==,||, &&
```

**Unary and binary operators**

```JavaScript
+, -, *, /, %
```

**Ternary operator**

```JavaScript
a ? b : c
```

**Grouping**

```JavaScript
(a + b) * (c + d)
```

**Constants**

```JavaScript
numbers, strings, null, undefined
```
## Platform-specific declarations

To declare a platform-specific property value or platform-specific component in the `XML`, you can use the following syntax:

### Platform-specific property value
```XML
<Page>
  <TextField ios:editable='False' android:editable='True' />
</Page>
```
### Platform-specific component declaration
```XML
<Page>
  <ios>
    <TextField />
  </ios>
  <android>
    <Label />
  </android>
</Page>
```
> **Note** You cannot nest platform tags! 

> **Note** Platform tags are not supported inside `ActionBar`! 

## Lowercase-dashed component declaration
Since the release of NativeScript 1.3, you can declare your UI using lowercase-dashed syntax:
```XML
<page>
  <scroll-view>
    <stack-layout>
      <label ctext="Label" />
      <button text="Button" tap="tap" />
      ...
```
