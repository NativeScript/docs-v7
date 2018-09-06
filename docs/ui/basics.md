---
title: The Basics
description: Learn the basic principles of designing a user interface with NativeScript. In NativeScript, you can design the UI using XML and CSS.
position: 10
slug: ui-basics
previous_url: /ui-with-xml,/ui/ui-with-xml
environment: nativescript
---

# The User Interface

The user interface of NativeScript mobile apps consists of pages. Typically, the design of the user interface is developed and stored in `XML` files, styling is done via CSS and the business logic is developed and stored in `JavaScript` or `TypeScript` files. When you develop the user interface of your app, you can implement each application screen in a separate page or implement your application screens on a single page with a tab view. For each page, you need to have a separate `XML` file that holds the layout of the page. For each `XML` file that NativeScript parses, the framework also looks for a `JavaScript` or `TypeScript` file with the same name and executes the business logic inside it.

## Declare the Home Page

Each NativeScript app must have a home page that loads when you launch the app. You need to explicitly set the home page for your app by calling the `run` method of the [`Application`](http://docs.nativescript.org/api-reference/modules/_application_.html) module and pass `NavigationEntry` with the desired `moduleName`.

The NativeScript navigation framework looks for an `XML` file with the specified name, loads it and navigates to the respective page. If NativeScript discovers a `JavaScript` or `TypeScript` file with the same name, it executes the code inside it.

```JavaScript
var application = require("application");
// Start the application. Don't place any code after this line as it will not be executed on iOS.
application.run({ moduleName: "my-page" });
```
```TypeScript
import application = require("application");
// Start the application. Don't place any code after this line as it will not be executed on iOS.
application.run({ moduleName: "my-page" });
```

> **Note:** Before NativeScript 4.0.0 the `start` method automatically created an underlying root `Frame` instance and wrapped your page. The new `run` method will set up the root element of the provided module as application root element. This effectively means that apart from `Page`, you can now have other roots of your app like `TabView` and `SideDrawer`. The `start` is now marked as deprecated.

## Navigate to a Page

You can navigate between pages with the `navigate` method of the [`Frame`](http://docs.nativescript.org/api-reference/classes/_ui_frame_.frame.html) class. The [`Frame`](http://docs.nativescript.org/api-reference/classes/_ui_frame_.frame.html) class represents the logical unit that is responsible for navigation between different pages. With NativeScript 4 and above each app can have on or more frames. To get a reference to a frame we can use [`getFrameById`](https://docs.nativescript.org/api-reference/modules/_ui_frame_#getframebyid) method. Detailed information about navigation can be found in the [dedicated article](#core-concepts/navigation#basic-navigation).

When you trigger navigation, NativeScript looks for an `XML` file with the specified name, loads it and navigates to the respective page. If NativeScript discovers a `JavaScript` or `TypeScript` file with the same name, it executes the code inside it.

```JavaScript
// To import the "ui/frame" module:
let getFrameById = require("tns-core-modules/ui/frame").getFrameById;
const frame = getFrameById("myFrame");
// Navigate to page called “my-page”
frame.navigate("my-page");
```
```TypeScript
// To import the "ui/frame" module:
import { getFrameById } from "tns-core-modules/ui/frame";
const frame = getFrameById("myFrame");
// Navigate to page called “my-page”
frame.navigate("my-page");
```
```XML
<Frame id="myFrame"/>
```

> Paths are relative to the application root. In the example above, NativeScript looks for a `my-page.xml` file in the app directory of your project (e.g. `app/my-page.xml`).

## Passing Binding Context while Navigating

You could provide `bindingContext` automatically while navigating to a page. This will give you a simple way to make the context become the `bindingContext` of the page on navigation. The way to do that is to set up the `bindingContext` property, which points to your custom view model, on `navigate` method. 

```JavaScript
// To import the "ui/frame" module and "main-view-model":
let getFrameById = require("tns-core-modules/ui/frame").getFrameById;
const frame = getFrameById("myFrame");

const HelloWorldModel = require("./main-view-model").HelloWorldModel;
// Navigate to page called “my-page” and provide "bindingContext"
frame.navigate({
  moduleName: "my-page",
  bindingContext: new HelloWorldModel()
});
```
```TypeScript
// To import the "ui/frame" module and "main-view-model":
import { getFrameById } from "tns-core-modules/ui/frame";
const frame = getFrameById("myFrame");

import { HelloWorldModel } from "./main-view-model"
// Navigate to page called “my-page” and provide "bindingContext"
frame.navigate({
  moduleName: "my-page",
  bindingContext: new HelloWorldModel()
});
```

## Passing and Receiving Custom Context

In cases where we want to pass a specific context and need more control than the automated `bindingContext`, you could use the `context` property in the `navigatedEntry` object. The navigated page can obtain the passed context via the `navigatedTo` event and the [`navigaitonContext`](https://docs.nativescript.org/api-reference/classes/_ui_page_.page#navigationcontext) property.

Sending binding context from the main page.
```JavaScript
// e.g. main-page.js
let getFrameById = require("tns-core-modules/ui/frame").getFrameById;
const frame = getFrameById("myFrame");
// Navigate to page called “sub-page” and provide "bindingContext"
frame.navigate({
    moduleName: "sub-page",
    context: { title: "NativeScript is Awesome!"}
});
```
```TypeScript
// e.g main-page.ts
import { getFrameById } from "tns-core-modules/ui/frame";
const frame = getFrameById("myFrame");
// Navigate to page called “sub-page” and provide "bindingContext"
frame.navigate({
    moduleName: "sub-page",
    context: { title: "NativeScript is Awesome!"}
});
```

Recieving context from `sub-page`
```JavaScript
// sub-page.js
function onNavigatedTo(args) {
    const page = args.object;
    page.bindingContext = page.navigationContext;
}
exports.onNavigatedTo = onNavigatedTo;
```
```TypeScript
// sub-page.ts
import { Page } from "tns-core-modules/ui/page";
export function onNavigatedTo(args) {
    const page = <Page>args.object;
    page.bindingContext = page.navigationContext;
}
```
```XML
<!-- sub-page.xml -->
<Page xmlns="http://www.nativescript.org/tns.xsd" navigatedTo="onNavigatedTo">
    <Label text="{{ title }}" textWrap="true" />
</Page>
```

## Execute Business Logic

When you have a `JavaScript` or a `TypeScript` file in the same location with the same name as your `XML` file, NativeScript loads it together with the `XML` file. In this `JavaScript` or `TypeScript` file you can manage event handlers, bind context or execute additional business logic.

In this example of `main-page.xml`, your page consists of a button. When you tap the button, the `buttonTap` function is triggered.
```XML
<Page>
    <StackLayout>
       <Label id="Label1" text="This is Label!" />
       <Button text="This is Button!" tap="buttonTap" />
    </StackLayout>
</Page>
```

This example demonstrates a simple counter app. The logic for the counter is implemented in a `main-page.js` or `main-page.ts` file.
```JavaScript
const view = require("tns-core-modules/ui/core/view");
let count = 0;
function buttonTap(args) {
    count++;
    let button = args.object;
    let parent = button.parent;
    if (parent) {
        let lbl = view.getViewById(parent, "Label1");
        if (lbl) {
            lbl.text = "You tapped " + count + " times!";
        }
    }
}
exports.buttonTap = buttonTap;
```
```TypeScript
import { EventData } from "tns-core-modules/data/observable";
import { getViewById } from "tns-core-modules/ui/core/view";
import { Label } from "tns-core-modules/ui/label";
import { View } from "tns-core-modules/ui/core/view";

let count = 0;
export function buttonTap(args: EventData) {
    count++;
    let button = <View>args.object;
    let parent = butto.parent;
    if (parent) {
        let lbl = <Label>getViewById(parent, "Label1");
        if (lbl) {
            lbl.text = "You tapped " + count + " times!";
        }
    }
}
```
To access variables or functions from the user interface, you need to declare them in the `exports` object in the module. NativeScript sets each attribute value in the XML declaration to a respective property or an event of the component. If a respective property does not exist, NativeScript sets the attribute value as an expando object.

## User interface components

NativeScript provides a wide range of built-in user interface components&mdash;layouts and widgets. You can also create your own custom user interface components. When NativeScript parses your `XML` files, it looks for components that match a name in the module exports. For example, when you have a `Button` declaration in your `XML` file, NativeScript looks for a `Button` name in the module exports.

```JavaScript
var Button = ...
    ...
exports.Button = Button;
```
```TypeScript
export let Button = ...
```

## The default content components

The top-level user interface components are content components like pages and layouts. These content components let you arrange your interactive user interface components in specific ways.

### Page

Your application pages (or screens) are instances of the [`page`](http://docs.nativescript.org/api-reference/classes/_ui_page_.page.html) class of the [`Page`](http://docs.nativescript.org/api-reference/classes/_ui_page_.page.html) module. Typically, an app will consist of multiple application screens.

You can execute some business logic when your page loads using the `pageLoaded` event. You need to set the `loaded` attribute for your page in your `main-page.xml`.
```XML
<Page loaded="pageLoaded">
    <!-- Page content follows here -->
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
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    const page = <Page>args.object;
}
```

### TabView

With a [`tabview`](http://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview.html), you can avoid spreading your user interface across multiple pages. Instead, you can have one page with multiple tabs.

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
var getViewById = require("tns-core-modules/ui/core/view").getViewById;
function pageLoaded(args) {
    var page = args.object;
    var tabView1 = getViewById(page, "tabView1");
    tabView1.selectedIndex = 1;
}
exports.pageLoaded = pageLoaded;
```
```TypeScript
import { EventData } from "tns-core-modules/data/observable";
import { getViewById } from "tns-core-modules/ui/core/view";
import { Page } from "tns-core-modules/ui/page";
import { TabView } from "tns-core-modules/ui/tab-view";

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    var tabView1 = <TabView>getViewById(page, "tabView1");
    tabView1.selectedIndex = 1;
}
```

### ScrollView

Insert a `ScrollView` inside your page to make the page or the content enclosed in the `scrollView` scrollable.
```XML
<Page>
    <ScrollView>
        <!-- Scrollable content goes here -->
    </ScrollView>
</Page>
```

### StackLayout

Arrange the user interface components in your page in a horizontal or vertical stack using `StackLayout` and its `orientation`.
```XML
<Page>
    <StackLayout orientation="horizontal">
        <Label text="This is Label 1" />
        <Label text="This is Label 2" />
    </StackLayout>
</Page>
```

### GridLayout

Arrange the user interface components in your page in a flexible grid area using `GridLayout`.
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

Arrange your user interface components in rows or columns until the space is filled and then wrap them on a new row or column using `WrapLayout`. By default, if orientation is not specified, `WrapLayout` arranges items horizontally.
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

Arrange your user interface components by left/top coordinates using `AbsoluteLayout`.
```XML
<Page>
  <AbsoluteLayout>
    <Label text="This is Label 1" left="30" top="70" />
  </AbsoluteLayout>
</Page>
```

## Custom Components

You can define your own XML namespaces to create custom user interface components. The custom components can be created via XML files or via code-behind JS/TS implementation.

### Code-only Custom Component

**The page using the custom component**

The sample `main-page.xml` is using a custom component defined in separate declarations in the `app/components/my-control.ts` file (or `*.js` if using plain JavaScript).
```XML
<!-- app/main-page.xml -->
<Page xmlns:customControls="components/my-control" navigatingTo="navigatingTo" class="page">
    <customControls:MyControl />
</Page>
```

**The custom component implementation**

This sample custom component declared in `app/components/my-control.ts` or `app/components/my-control.js` exports the `MyControl` variable, which creates a simple counter inside your `main-page.xml` page.

```TypeScript
// app/components/my-control.ts
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import { Label } from "tns-core-modules/ui/label/label";
import { Button } from "tns-core-modules/ui/button/button";

export class MyControl extends StackLayout {
    constructor() {
        super();

        let counter: number = 0;
        const lbl = new Label();
        const btn = new Button();
        btn.text = "Tap me!";
        btn.on("tap", (args) => {
            lbl.text = "Tap " + counter++;
        });

        this.addChild(lbl);
        this.addChild(btn);
    }
}
```
```JavaScript
// app/components/my-control.js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var stackLayout = require("tns-core-modules/ui/layouts/stack-layout");
var label = require("tns-core-modules/ui/label");
var button = require("tns-core-modules/ui/button");
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


When referring to code-only components in your pages with an `xmlns` declaration, you should point it either to the code file with the component implementation or to the folder containing the files. In the latter case, you will have to add a `package.json` file in the folder so that the file can be required properly.

### XML-based Custom Component with a Code File

**The page using the custom component**

The sample `main-page.xml` is using a custom component `my-control.xml` nad the `my-control.ts` code-behind defined as a separate files in the `app/components` folder.
```XML
<!-- app/main-page.xml -->
<Page xmlns:comps="components" navigatingTo="navigatingTo">
  <comps:my-control />
</Page>
```
```TypeScript
// app/main-page.ts
import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;

    // the page binding context will be accerss in components/my-toolbar
    page.bindingContext = new HelloWorldModel();
}
```
```JavaScript
// app/main-page.js
var main_view_model_1 = require("./main-view-model");
function navigatingTo(args) {
    var page = args.object;
    // the page binding context will be accerss in components/my-toolbar
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
```

**The custom component implementation**

The custom component in `app/components/my-control.xml` defines a Button, a Label with a related binding properties and tap function.
```XML
<!-- app/components/my-control.xml -->
<StackLayout class="p-20" loaded="onLoaded">
    <Label text="This custom component binding is coming from the parent page" textWrap="true" />
    <Label text="Tap the button (custom component)" class="h1 text-center"/>
{%raw%}    <Button text="TAP" tap="{{ onTap }}" class="btn btn-primary btn-active"/>
    <Label text="{{ message }}" class="h2 text-center" textWrap="true"/>{%endraw%}
</StackLayout>
```
```TypeScript
// app/components/my-control.ts
import { EventData } from "tns-core-modules/data/observable";

export function onLoaded(args: EventData) {
    console.log("Custom Component Loaded");

    // you could also extend the custom compoentn logi here e.g.:
    // let stack = <StackLayout>args.view;
    // stack.bindingContext = myCustomComponentViewModel;
}
```
```JavaScript
// app/components/my-control.js
function onLoaded(args) {
    console.log("Custom Component Loaded");

    // you could also extend the custom compoentn logi here e.g.:
    // let stack = args.view;
    // stack.bindingContext = myCustomComponentViewModel;
}
exports.onLoaded = onLoaded;
```

**The View Model used for bindings**

The `main-page` has a binding context set thought view model (MVVM pattern). The binding context can be accessed though the custom component as demonstrated.
```TypeScript
// app/main-view-model.ts
import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
    }

    get message(): string {
        return this._message;
    }
    
    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    }

    public onTap() {
        this._counter--;
        this.updateMessage();
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}
```
```JavaScript
// app/main-view-model.js
var Observable = require("data/observable").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = function() {
        this.counter--;
        this.set("message", getMessage(this.counter));
    }

    return viewModel;
}

exports.createViewModel = createViewModel;
```

### Dynamic Loading of Custom Components

**Dynamic load of JavaScript/TypeScript component**

Load a pure JavaScript component by finding it in the exports of the module. The component is specified by a path and its name. Then the code from the JavaScript file is executed.
```TypeScript
import * as builder from "tns-core-modules/ui/builder";
let myComponentInstance = builder.load({
        path: "~/components/my-control",
        name: "MyControl"
});
```
```JavaScript
let builder = require("tns-core-modules/ui/builder");
let myComponentInstance = builder.load({
        path: "~/components/my-control",
        name: "MyControl"
});
```

**Dynamic load of XML with JavaScript/TypeScript component**

Load the XML file with JavaScript code-behind by finding the specified XML filename through the specified path in the exports of the modules. JavaScript file with the same name will be required and served as code-behind of the XML.
```TypeScript
import * as builder from "tns-core-modules/ui/builder";
let myComponentInstance = builder.load({
        path: "~/components/my-control",
        name: "MyControl"
});
```
```JavaScript
let builder = require("ui/builder");
let myComponentInstance = builder.load({
        path: "~/components/my-control",
        name: "MyControl"
});
```

> The UI builder will automatically load the CSS file with the same name as the component name and apply it to the specified page:
```TypeScript
let myComponentInstance = builder.load({
        path: "~/components/my-control",
        name: "MyControl",
        page: yourPageInstancex
});
```
```JavaScript
let myComponentInstance = builder.load({
        path: "~/components/my-control",
        name: "MyControl",
        page: yourPageInstance
});
```

**Dynamic load and passing additional attributes**

The `attributes` option can be used to pass additional arguments.

```TypeScript
import * as builder from "tns-core-modules/ui/builder";
let myComponentInstance = builder.load({
        path: "~/components/my-control",
        name: "MyControl",
        attributes: {
            bindingContext: myBindingModel
        }
});
```
```JavaScript
let builder = require("tns-core-modules/ui/builder");
let myComponentInstance = builder.load({
        path: "~/components/my-control",
        name: "MyControl",
        attributes: {
            bindingContext: myBindingModel
        }
});

## Gestures
All [UI Gestures]({% slug gestures %})
(gestures.md) can be defined in XML. For example:
```XML
<Page>
  <Label text="Some text" tap="myTapHandler" />
</Page>
```
```TypeScript
import { GestureEventData } from "tns-core-modules/ui/gestures";

export function myTapHandler(args: GestureEventData) {
    const context = args.view.bindingContext;
}
```
```JavaScript
function myTapHandler(args) {
    const context = args.view.bindingContext;
}
exports.myTapHandler = myTapHandler;
```

## Bindings

To set a binding for a property in the `XML`, you can use double curly brackets syntax. All about binding can be found in the [data-binding article](../core-concepts/data-binding.md)

### Property Binding

This sample `main-page.xml` contains a simple label whose text will be populated when the page loads.

```XML
<Page>
{%raw%}
    <Label text="{{ myTitle }}" />
{%endraw%}
</Page>
```

The `main-page.js` or `main-page.ts` code file sets a `bindingContext` for the page. The `bindingContext` contains the custom property and its value. When NativeScript parses `main-page.xml`, it will populate the custom name property with the value in the `bindingContext`.

```JavaScript
function navigatingTo(args) {
    const page = args.object;
    page.bindingContext = { myTitle: "NativeScript is Awesome!"};
}
exports.navigatingTo = navigatingTo;
```
```TypeScript
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = { myTitle: "NativeScript is Awesome!"};
}
```
> NativeScript looks for the custom property in the `bindingContext` of the current component or the `bindingContext` of its parents. By default, all bindings, defined in XML, are two-way bindings.

### Event Binding

This sample `main-page.xml` contains a button. The text for the button and the event that the button triggers are determined when the page loads from the matching `main-page.js` or `main-page.ts` file.

```XML
<Page navigatingTo="navigatingTo">
{%raw%}
  <Button text="{{ myProperty }}" tap="{{ myFunction }}" />
{%endraw%}
</Page>
```

This sample `main-page.js` or `main-page.ts` sets a `bindingContext` for the page. The `bindingContext` contains the custom property for the button text and its value and the custom function that will be triggered when the button is tapped. When NativeScript parses `main-page.xml`, it will populate the button text with the value in the `bindingContext` and will bind the custom function to the tap event.

```JavaScript
function navigatingTo(args) {
    const page = args.object;
    page.bindingContext = {
        myProperty: "Some text",
        myFunction: () => {
          // Your code
        }
    };
}
exports.navigatingTo = navigatingTo;
```
```TypeScript
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = {
        myProperty: "Some text",
        myFunction: () => {
            // Your code
        }
    };
}
```

### ListView Binding

You can use the double curly brackets syntax to bind the items to a [`listView`](http://docs.nativescript.org/api-reference/classes/_ui_list_view_.listview.html). You can also define a template with the `itemTemplate` property from which NativeScript will create the items for your `listView`.

> Avoid accessing components by ID, especially when the component is part of a template. It is recommended that you use bindings to specify component properties.

NativeScript can create the items from a template when the `listView` loads inside your page. When you work with templates and a `listView`, keep in mind the scope of the `listView` and its items.

In this sample `main-page.xml`, the ListView consists of labels and each item will be created from a template. The text of each label is the value of the name property of the corresponding item.

```XML
<Page navigatingTo="navigatingTo">
{%raw%}
    <ListView id="listView1" items="{{ myItems }}">
        <ListView.itemTemplate>
            <Label id="label1" text="{{ name }}"  />
        </ListView.itemTemplate>
    </ListView>
{%endraw%}
</Page>
```

The sample `main-page.js` or `main-page.ts` populates the `bindingContext` for the page. In this case, the code sets values for the name property for each label. Note that because the `ListView` and the Label have different scopes, you can access ListView by ID from the page, but you cannot access the Label by ID. The `ListView` creates a new `Label` for every item.

```JavaScript
const view = require("tns-core-modules/ui/core/view");
function navigatingTo(args) {
    const page = args.object;
    page.bindingContext = { myItems: [{ name: "Name1" }, { name: "Name2" }, { name: "Name3" }] };

    // Will work!
    let listView1 = view.getViewById(page, "listView1");

    // Will not work!
    let label1 = view.getViewById(page, "label1");
}
exports.navigatingTo = navigatingTo;
```
```TypeScript
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { getViewById } from "tns-core-modules/ui/core/view";
import { ListView } from "tns-core-modules/ui/list-view";
import { Label } from "tns-core-modules/ui/label";

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = { myItems: [{ name: "Name1" }, { name: "Name2" }, { name: "Name3" }] };

    // Will work!
    const listView1 = <ListView>getViewById(page, "listView1");

    // Will not work!
    const label1 = <Label>getViewById(page, "label1");
}
```

To show some inner collection items inside ```ListView.itemTemplate``` you can use a [Repeater](https://docs.nativescript.org/cookbook/ui/repeater):
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

### Binding Expressions

To set an expression as a value of a property in the `XML`, you might as well go with the mustache syntax here.

> NativeScript reevaluates your expression on every property change of the `Observable` object set for `bindingContext`. This binding is a one-way binding&mdash;from the view model to the user interface.

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
> You cannot nest platform tags!

## Lowercase-dashed component declaration
Since the release of NativeScript 1.3, you can declare your UI using the lowercase-dashed syntax:
```XML
<page>
  <scroll-view>
    <stack-layout>
      <label ctext="Label" />
      <utton text="Button" tap="tap" />
      ...
```