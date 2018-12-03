---
title: Application Architecture
description: Learn the core concepts of building NativeScript apps
position: 30
slug: architecture
environment: nativescript
previous_url: /architecture
---

# Application Architecture

In this article we are going to review the architecture of a NativeScript application built with the Core Framework. It will cover the entry point of the app, the decomposition into modules, styling the application and data binding.

## Entry Point

The entry point for a core NativeScript application is declared in the app root folder's `package.json` file under the property `main`. This is usually declared as `app.js` or `app.ts` in case you have created a TypeScript project. You can use this file to perform app-level initializations, but the primary purpose of the file is to pass control to the app's root module. To do this, you need to call the `application.run()` method and pass a `NavigationEntry` with the desired `moduleName` as the path to the root module relative to your `/app` folder.

``` JavaScript
// app.js
const application = require("tns-core-modules/application");
application.run({ moduleName: "app-root" });
```
``` TypeScript
// app.ts
import * as application from "tns-core-modules/application";
application.run({ moduleName: "app-root" });
```

> **Important:** Do not place any code after the `application.run()` method call as it will not be executed on iOS.

> **Important:** Prior to NativeScript 4.0.0 the `start()` method automatically created an underlying root `Frame` instance that wrapped your pages. The new `run()` method will set up the root element of the provided module as the application root element. This effectively means that apart from `Page` you can now have other roots of your app like `TabView` and `SideDrawer`. The `start()` method is now marked as deprecated.

## Application Modules

The core NativeScript framework is separated in modules. As a minimum a module is represented by a markup `.xml` file holding the UI markup. From there, you can also add backend `.js` file for executing business logic, a styling `.css` file. The important thing for these additional files is to share the same name with the `.xml` file. For example, the following files make a module:

* `home-page.xml`
* `home-page.js`
* `home-page.css`

All functions that are exported by the business logic file are available for binding to the template. The business logic file is a good place to handle events or bind context to the UI. In the following example, the `loaded` event of the `Page` component

``` XML
<!-- home-page.xml -->
<Page class="page" loaded="onPageLoaded">
    <StackLayout>
        <Label text="Hooray! Home Page loaded!"/>
    </StackLayout>
</Page>
```
``` JavaScript
// home-page.js
function onPageLoaded(args) {
    console.log("Page Loaded");
}
exports.onPageLoaded = onPageLoaded;
```
``` TypeScript
// home-page.ts
import { EventData } from "tns-core-modules/data/observable";

export function onPageLoaded(args: EventData): void {
    console.log("Page Loaded");
}
```
``` CSS
/* home-page.css */
.page {
    background-color: teal;
}
```

> Note that we have put a naming convention in place for modules. Their file names can end in either `-root` or `-page`, marking the type of the module. The naming convention isn't mandatory. It is put in place for easier and effortless webpack bundling.

### Root Modules

These modules are used as the root for UI containers. Currently, there are only two types of UI containers in a NativeScript app:

* The app container - it is only one. You set its root module by passing it to the `application.run()` method.
* Modal view containers - You can have a lot of these. You set a modal view's root module by passing it to the `showModal()` method of any UI component.

A root module can have only one component at the root of its content. You can put virtually any UI component as a root, but the most commonly used components are the one that can have children - the layouts, `TabView`, `SideDrawer` or `Frame`. The `Frame` component can't have children, but it can display and navigate between page modules.

Note that the root module will be loaded regardless of navigations until its UI container disappears. This basically means that the app root module will always be loaded. A modal view root module will be unloaded when the modal view is closed.

Here is an example of an app root module:

``` XML
<!-- app-root.xml -->
<Frame loaded="onFrameLoaded" defaultPage="home-page" />
```
``` JavaScript
// app-root.js
function onFrameLoaded(args) {
    console.log("Frame Loaded");
}
exports.onFrameLoaded = onFrameLoaded;
```
``` TypeScript
// app-root.ts
import { EventData } from "tns-core-modules/data/observable";

export function onFrameLoaded(args: EventData): void {
    console.log("Frame Loaded");
}
```

### Page Modules

These modules represent pages and are used by the `Frame` component to implement forward and backward navigation. You can pass these modules to the `Frame` in one of two ways:

* The `defaultPage` attribute - the page module set in this attribute will be initially shown by the `Frame`.
* The `navigate()` method - this method forces the `Frame` to hide the currently navigated page module and to show the page module passed as parameter.

Navigation is covered in detail in the [navigation article]({% slug navigation %}).

Page modules must always have the `Page` component at the root of their content. Below is a code sample of a page module. 

``` XML
<!-- home-page.xml-->
<Page class="page" loaded="onPageLoaded">
    <StackLayout>
        <Label text="Hooray! Home Page loaded!"/>
    </StackLayout>
</Page>
```
``` JavaScript
// home-page.js
function onPageLoaded(args) {
    console.log("Page Loaded");
}
exports.onPageLoaded = onPageLoaded;
```
``` TypeScript
// home-page.ts
import { EventData } from "tns-core-modules/data/observable";

export function onPageLoaded(args: EventData): void {
    console.log("Page Loaded");
}
```
``` CSS
/* home-page.css */
.page {
    background-color: teal;
}
```

## Global App Styling

The core NativeScript framework also provides a way to set application wide styling. The default place to do that is in the `app.css` file in the app root folder. All css rules that are declared in this file will be applied to all application modules.

You can change the name of the file from which the application-wide CSS is loaded. You need to do the change before the `application.run()` method is called as shown below:

``` JavaScript
var application = require("tns-core-modules/application");
application.setCssFileName("style.css");

application.run({ moduleName: "main-page" });
```
``` TypeScript
import * as application from "tns-core-modules/application";
application.setCssFileName("style.css");

application.run({ moduleName: "main-page" });
```

Styling is covered in detail in the [styling article]({% slug styling %}).

## Supporting Multiple Screens
Mobile applications are running on different devices with different screen sizes and form factors. NativeScript provides a way to define different files (.js, .css, .xml, etc.) to be loaded based on the screen's size, platform, and orientation of the current device. The approach is somewhat similar to [multi screen support in Android](http://developer.android.com/guide/practices/screens_support.html). There is a set of *qualifiers* that can be added inside the file that will be respected when the file is loaded. Here is how the file should look:

`<file-name>[.<qualifier>]*.<extension>`

In the next section, we will go through the list of supported qualifiers.

### Screen Size Qualifiers
All the values in screen size qualifiers are in density independent pixels(DP) &mdash; meaning it corresponds to the physical dimensions of the screen. The assumptions are that there are ~160 DP per inch. For example, according to Android guidelines, if the device's smaller dimension is more than 600 dp (~3.75 inches), it is probably a tablet.

* `minWH<X>` - The smaller dimension (width or height) should be at least **X** dp.
* `minW<X>` - Width should be at least **X** dp.
* `minH<X>` - Height should be at least **X** dp.

*Example (separate XML file for tablet and phone)*:

* `main-page.minWH600.xml` - XML file to be used for tablet devices.
* `main-page.xml` - XML to be used for phones. 

### Platform Qualifiers

* `android` – Android platform
* `ios` – iOS platform
* `windows` (coming soon) – Windows platform

*Example (platform specific files)*:

* `app.android.css` - CSS styles for Android.
* `app.ios.css` - CSS styles for iOS. 

The platform qualifiers are executed during build time, while the others are executed during runtime. For example, the app.ios.css file will not be taken into consideration when building for the Android platform. Contrary, the screen size qualifiers will be considered just after the application runs on a device with specific screen size. 

### Orientation Qualifiers
* `land` - orientation is in landscape mode.
* `port` - orientation is in portrait mode.

> Note: All qualifiers are taken into account when the page is loading. However, changing the device orientation will not trigger a page reload and will not change the current page.

## Data Binding

Data binding is the process of connecting application user interface (UI) to a data object (code). In NativeScript each UI component can be bound to what is called a binding source. You can set a binding source to each UI component through its `bindingContext` property. However, this is not the best way to implement binding. The `bindingContext` property is inheritable across the visual tree. This means that you can set `bindingContext` to the root component of your module and it will be available to all child components. The binding is then described in the XML using the mustache syntax.

In the following example we set the `bindingContext` of the `Page` in its `loaded` event handler and then bind the property to the `Label` text.

``` XML
<!-- home-page.xml-->
<Page class="page" loaded="onPageLoaded">
    <StackLayout>
        <Label text="{{ text }}"/>
    </StackLayout>
</Page>
```
``` JavaScript
// home-page.js
const fromObject = require("tns-core-modules/data/observable").fromObject;

function onPageLoaded(args) {
    const page = args.object;
    const source = fromObject({ text: "Hooray! Home Page loaded!" });
    page.bindingContext = source;
}
exports.onPageLoaded = onPageLoaded;
```
``` TypeScript
// home-page.ts
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

export function onPageLoaded(args: EventData): void {
    const page: Page = args.object;
    const source = fromObject({ text: "Hooray! Home Page loaded!" });
    page.bindingContext = source;
}
```

Binding is covered in detail in the [data binding article]({% slug binding %}).
