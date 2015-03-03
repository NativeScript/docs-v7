---
nav-title: Getting Started with the NativeScript CLI
title: Getting Started with the NativeScript CLI
description: Create your first NativeScript app in a few minutes with the NativeScript CLI. See it in action on your device.
position: 1
---

## Contents

* [Step 0: Install system requirements](#step-0)
* [Step 1: Install NativeScript](#step-1)
* [Step 2: Create a project](#step-2)
* [Step 3: Add platforms](#step-3)
* [Step 4: Run your app](#step-4)
* [Step 5: Explore the sample app](#step-5)
* [Step 6: Build something awesome](#step-6)
* [Step 7: Move beyond the basics](#step-7)

<h2 id="step-0">Step 0: Install system requirements</h2>

The NativeScript CLI has a handful of system requirements to build and run NativeScript apps. Most notably you need to have Xcode installed to build iOS apps, and you need to have an Android SDK installed to build Android apps. Review the setup documentation below to make sure your development machine is all set:

* [Windows](./quick-start/setup/ns-cli-setup/ns-setup-win.md)
* [OS X](./quick-start/setup/ns-cli-setup/ns-setup-os-x.md)
* [Linux](./quick-start/setup/ns-cli-setup/ns-setup-linux.md)

> **TIP**: If you're looking for a NativeScript environment that removes the need to do this local setup, and/or if you're a Windows user that wants to use NativeScript to build iOS apps, try [using NativeScript in Telerik AppBuilder](./quick-start/hello-world/hello-world-appbuilder.md).

<h2 id="step-1">Step 1: Install NativeScript</h2>

Next you need to install the [NativeScript CLI](https://github.com/NativeScript/nativescript-cli) itself; the CLI runs on the Node.js platform and you can install it using npm:

```
npm install -g nativescript
```

<h2 id="step-2">Step 2: Create a project</h2>

The installation of the NativeScript CLI creates two commands, `nativescript` and `tns`, that you use to create, build and run your NativeScript projects. Running `tns create` (or `nativescript create`) creates a new project:

```
tns create hello-world
```

<h2 id="step-3">Step 3: Add platforms</h2>

Before you run your code, NativeScript needs to initialize a platform-specific native project for each platform you intend to target.

```
cd hello-world
tns platform add ios
tns platform add android
```

This operation uses the native SDKs to initialize the platform-specific projects and places the generated contents in your app's `platforms` directory. Later on, the NativeScript CLI will use the tools of the native SDKs to build these platform-specific projects into truly native application packages. During the process, the NativeScript CLI will automatically transfer your cross-platform code and resources from your project's `app` directory into its `platforms` directory.

You'll see a more detailed breakdown of a NativeScript app's directory structure momentarily, but first let's get your new app up and running.

<h2 id="step-4">Step 4: Run your app</h2>

After adding platform(s), you use the `tns run` command to run your app. For example, the following runs your app in the iOS simulator, and/or Android emulator (specifically an [Android AVD](http://developer.telerik.com/featured/using-android-emulator-hybrid-mobile-apps-telerik-appbuilder/) configured on your machine):

```iOS
tns run ios --emulator
```
```Android
tns run android --emulator
```

> **Tip:** If you have configured Genymotion on your development machine, you can run `tns run android --emulator --geny <Genymotion Device Name>`. This runs your project in the Genymotion emulator.

You can deploy your app to physical, USB-connected devices by omitting the `--emulator` flag. The following deploys your app to USB-connected iOS/Android device:

```iOS
tns run ios
```
```Android
tns run android
```

> **WARNING**: Deploying your app to iOS devices requires that a valid iOS certificate and provisioning profile pair are configured on your development machine. For more information see [iOS Code Signing - A Complete Walkthrough](http://seventhsoulmountain.blogspot.com/2013/09/ios-code-sign-in-complete-walkthrough.html).

By default `tns create` command scaffolds a small sample project; therefore if all went well you should see the following:

![step3 android](img/getting-started/step3-android.png "step3 android")![step3 ios](img/getting-started/step3-ios.png "step3 ios")

<h2 id="step-5">Step 5: Explore the sample app</h2>

Your first NativeScript project uses the following basic directories and files:

```
.
└── hello-world
    ├── app
    │   ├── app
    │   │   ├── app.css
    │   │   ├── app.js
    │   │   ├── bootstrap.js
    │   │   ├── main-page.js
    │   │   └── main-page.xml
    │   ├── App_Resources
    │   │   └── ...
    │   └── tns_modules
    │       └── ...
    └── platforms
        └── ...

```

Here's a guide to what these files do:

* The inner `app` directory is the **development space for your application**.
* The `platforms` directory is created empty. When you add a target platform to your project, the NativeScript CLI creates a new subdirectory with the platform name. The subdirectory contains the ready-to-build platform-specific resources of your app. 
* The `App_Resources` subdirectory is the directory that contains **platform-specific resources** such as icons, splash screens and platform-specific configuration files like `AndroidManifest.xml` and `Info.plist`. When you create a new project, only icons and splash screens are present in this directory.
* The `tns_modules` subdirectory contains the NativeScript modules. Each module exposes a device or platform functionality such as the camera, location services or the user interface.
* `app.js` is the starting point for the logic of your app. In the sample app, `app.js` sets the app's `mainModule`, or the first page in your sample app, to `app/main-page`, which effectively gives control to the `app/main-page.js` and `app/main-page.xml` files.

> **IMPORTANT**: Avoid modifying your projects inside the `platforms` directory. During build-related operations, your changes will be overridden by your code and resources from the `app` directory.

<h2 id="step-6">Step 6: Build something awesome</h2>

Now that you have an app running, let's switch up the NativeScript-generated sample to introduce some of NativeScript's features. In this step you'll build a simple task manager. Although simple, this app provides a simple introduction to building UIs, implementing MVVM, and styling NativeScript apps with CSS. Let's get started.

### Step 6.1: Adding a UI

NativeScript uses an XML structure to define UI components. Your app has one page, which has its UI defined in `app/main-page.xml`. In the same `app` directory, create a sibling file named `tasks.xml`, and paste in the following contents:

```XML
<Page loaded="onPageLoaded">
    <GridLayout rows="auto, *">
        <StackLayout orientation="horizontal" row="0">
            <TextField width="200" text="{{ task }}" hint="Enter a task" id="task" />
            <Button text="Add" tap="add"></Button>
        </StackLayout>

        <ListView items="{{ tasks }}" row="1">
            <ListView.itemTemplate>
                <Label text="{{ name }}" />
            </ListView.itemTemplate>
        </ListView>
    </GridLayout>
</Page>
```

Take note of a few things here. The first is that this uses two of [NativeScript's layout mechanisms](./layouts.md): `GridLayout` and `StackLayout`. The `GridLayout` provides an elegant way to divide an area of the screen into rows and columns. In this case you divide the screen into two rows: a `StackLayout` at the top and a `ListView` at the bottom.

The `StackLayout` is simpler, as it does as its name implies—stack things, either horizontally or vertically. In this example you override the default orientation, vertical, to display a `TextField` and a `Button` next to each other.

One last thing to note: did you notice the double curly brace syntax used in the XML (e.g. `text="{{ name }}"`)? This is used to configure NativeScript's data binding syntax. Let's see how it works.

> **TIP**: For more on what you can do with UIs in NativeScript, check out the [UI with XML](./ui-with-xml.md) article.

### Step 6.2: Implementing MVVM

The [MVVM](http://en.wikipedia.org/wiki/Model_View_ViewModel) pattern is the preferred approach for building NativeScript apps, as it provides an elegant approach to keeping your model data in sync with your UI. To see how it works, create a `tasks.js` file in the same directory as your existing `tasks.xml` file, and paste in the following code:

```JavaScript
var observableModule = require("data/observable");
var observableArray = require("data/observable-array");
var viewModule = require("ui/core/view");

var tasks = new observableArray.ObservableArray([]);
var pageData = new observableModule.Observable();
var page;

exports.onPageLoaded = function(args) {
    page = args.object;
    pageData.set("task", "");
    pageData.set("tasks", tasks);
    page.bindingContext = pageData;
};

exports.add = function() {
    tasks.push({ name: pageData.get("task") });
    pageData.set("task", "");
    viewModule.getViewById( page, "task" ).dismissSoftInput();
};
```

> **Tip**: Although this article doesn't include it, TypeScript is a first-class citizen in NativeScript. If you'd like to use TypeScript, create .ts files instead of .js files. NativeScript takes care of compiling them to JavaScript and using them automatically. You'll find sample TypeScript code provided throughout our documentation.

The first thing to notice here is the use of the `exports` keyword. If you're familiar with Node.js this might look familiar, as NativeScript modules adhere to the [CommonJS](http://wiki.commonjs.org/wiki/CommonJS) spec. If you're not familiar with Node, all you need to know is that the `exports` keyword is used to expose a JavaScript module's public API. In this case, the `exports` keyword is used to expose two functions to this page's view: `onPageLoaded` and `add`. The view's `<Page>` binds to the `onPageLoaded` function with `<Page loaded="onPageLoaded">`, and the view's `<Button>` bind to the `add` function with `<Button tap="add"></Button>`.

The other thing to note is the `page.bindingContext = pageData` assignment in the `onPageLoaded` function. This line sets the `pageData` `Observable` object as the *binding context* of this page. Simply put, this line means that properties of the `pageData` object are accessible in the UI components using the `{{ }}` syntax. For example, the page's `<ListView>` binds to the `pageData` object's `tasks` property using `<ListView items="{{ tasks }}">`.

The biggest benefit of this MVVM approach is that NativeScript keeps your user interface up to date as your data changes. For example consider the first line of the `add()` function:

```JavaScript
tasks.push({ name: pageData.get("task") });
```

Because the `tasks` array is set up as an `ObservableArray`, and because the `tasks` array is bound to the page's `<ListView>` (`<ListView items="{{ tasks }}">`), this call adds the user-provided value to the list shown on the screen—automatically.

This code is not only clean, it also helps to decouple your XML UI declaration from your JavaScript logic. In this case, your JavaScript doesn't need to know which UI components are bound to this data; it just manages JavaScript objects and lets the XML take care of the rest. NativeScript fully embraces this separation-of-concerns-based approach to building apps, and this approach extends to how you style your apps.

> **TIP**: For more details on how NativeScript's data binding works, check out out our [Data Binding](bindings.md) documentation.

### Step 6.3: Adding Styles

Now that you have a small functioning app, let's look at how at you can change how your app looks. Styling in NativeScript is done with a [subset of the CSS syntax](./styling.md).

For each page, the NativeScript runtime automatically loads and applies any CSS file that has the same name as the XML file for the page. Under the hood, the runtime parses the CSS, evaluates the selectors and applies the properties to the style object of the selected view.

NativeScript also provides an `app.css` file that contains global CSS rules that apply to each page. To add a little spacing to your tasks app open `app.css` and replace its contents with the following code:

```CSS
label {
    margin: 15;
}
textfield {
    margin: 15;
}
```

> **TIP**: For a more in-depth look at styling NativeScript apps, including a list of support CSS properties, check out our [styling](styling.md) article.

## Step 6.4: Run your updated app

To switch your app to use the new tasks page, open `app/app.js` and replace its contents with the following code:

```JavaScript
var application = require("application");
application.mainModule = "app/tasks";
application.start();
```

With this change in place, make sure to save all your changed files, including the updated `app.js`, `app.css`, `tasks.js`, and `tasks.xml` files, and then rerun your app with the `tns run` command. The following runs the project on the iOS simulator:

```iOS
tns run ios --emulator
```

You should see something that looks like this:

![](img/getting-started/ios-tasks.gif)

And the following runs the project on an Android simulator:

```Android
tns run android --emulator
```

This time you should see an app that looks like this:

![](img/getting-started/android-tasks.gif)

<h2 id="step-7">Step 7: Move beyond the basics</h2>

Congratulations! You have just completed your first app with NativeScript. NativeScript does a whole lot, and you're just getting started. As a next step, try adding a delete button to your lists app, or tying the list to a backend using the NativeScript [http module](./ApiReference/http/HOW-TO.md).

Feel free to explore our [API reference](ApiReference/) to see all of what NativeScript has to offer. You can also learn more about NativeScript features in the following articles:

* [Application](application-management.md)
* [Navigation](navigation.md)
* [Layouts](layouts.md)
* [Styling](styling.md)
* [Binding](bindings.md)
* [UI with XML](ui-with-xml.md)
* [UI Views](ui-views.md)
* [UI Dialogs](ui-dialogs.md)
* [Location](location.md)
* [Modules](modules.md)
