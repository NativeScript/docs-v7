---
nav-title: Hello World from AppBuilder
title: Hello World from AppBuilder
description: Create your first NativeScript Hello World app in a few minutes with AppBuilder. See it in action on your device.
position: 2
---

# Hello World from AppBuilder

Have you set up your system to develop NativeScript apps with the AppBuilder tool set? 

If the answer is yes, you are ready to create your first Hello World app with NativeScript. Your first Hello World will be a simple counter. You will learn:

* [How To Create a Blank Project](#crate-blank-project)
* [How To Add User Interface](#add-user-interface)
* [How To Create a View Model](#create-a-view-model)
* [How To Style Your App](#style-your-app)

> If your system is not already configured, you can check the [Set Up Your System](../setup/quick-setup.md) guide, pick your tools and configure them.

## Create Blank Project

The first step to any development is to create your first project.

### 1. Run your AppBuilder IDE option and log in.

IDE Option | Operation
-----------|----------
In-browser client | When prompted, fill in the form.
Windows client | When prompted, fill in the form.
Extension for Visual Studio | In the menu bar, select **AppBuilder** &#8594; **Log in** and fill in the form.
CLI | Run `appbuilder login`, fill in the form in the browser window, close it and return to the command prompt.

### 2. Create your project.

You can choose between creating a blank JavaScript or TypeScript project.

IDE Option | Operation
-----------|----------
In-browser client | <ol><li>Click <b>Create app</b>.<br/>Apps are the top-level containers for development with the Telerik Platform. In an app, you can host multiple projects that complement each other to create a fully-fledged mobile solution.</li><li>Select <b>Start from a blank app</b>, provide name for the app and click <b>Create app</b>.</li><li>Click <b>Create project</b> and select <b>AppBuilder Native project</b>.</li><li>Verify that <b>Choose project template</b> is selected, select <b>NativeScript Blank (JavaScript)</b> or <b>NativeScript Blank (TypeScript)</b>, provide name for the project and click <b>Create project</b>.</li></ol>
Windows client | <ol><li>Click <b>New</b> and select <b>Native</b>.</li><li>Select <b>NativeScript Blank (JavaScript)</b> or <b>NativeScript Blank (TypeScript)</b>, provide name for the project and click <b>Create</b>.</li></ol>
Extension for Visual Studio | <ol><li>In the menu bar, select <b>File</b> &#8594; <b>New</b> &#8594; <b>Project</b>.</li><li>In the sidebar, select <b>Templates</b> &#8594; <b>Telerik</b> &#8594; <b>AppBuilder </b>.</li><li>In the list of templates, select <b>NativeScript Blank (JavaScript)</b> or <b>NativeScript Blank (TypeScript)</b>, provide a name for your project and click <b>OK</b>.</li></ol>
CLI | Run `appbuilder create native HelloWorld --template Blank` or `appbuilder create native HelloWorld --template TypeScript.Blank`. Run `cd HelloWorld`

### 3. Explore the newly created project.

Expand your project structure in your AppBuilder IDE or run a quick directory listing command.

Your first project has the following structure in the in-browser client, the Windows client and the extension for Visual Studio.

```
Solution 'Hello World'/ 
|-- Hello World/
|-- Properties
|-- app/
|-- App_Resources/
|-- |-- Android/
|-- `-- iOS/
|-- tns_modules/
|-- `-- ...
|-- .abignore
```

The solution node, the project node and the **Properties** node are virtual nodes. The first two are containers for your development. The **Properties** node is a shortcut to opening the project configuration dialog.

In the CLI, the project structure is more simplified and does not contain virtual nodes. Instead, it exposes the `.abproject` file which contains configuration data about your project. Do not modify it manually.

```
Hello World/ 
|-- .abignore
|-- .abproject
|-- app/
|-- App_Resources/
|-- |-- Android/
|-- `-- iOS/
|-- hooks
|-- tns_modules/
`-- `-- ...
```

Your NativeScript project consists of the following basic directories and files.

* The `app` directory is the **development space for your application**. You need to modify all common and platform-specific code within this directory. 
* The `App_Resources` directory is the directory that contains **platform-specific resources** such as icons, splash screens and platform-specific configuration files like `AndroidManifest.xml` and `Info.plist`.<br/>When you create a new project, only icons and splash screens are present in this directory.
* The `tns_modules` directory contains the NativeScript modules. Each module exposes a device or platform functionality such as the camera, location services or the user interface.
* The `hooks` directory is empty and is not respected by AppBuilder.
* The `.abignore` file is an AppBuilder-specific file which lets you determine which files and directories to include or exclude from your application package when you build your project.

> **IMPORTANT:** This project structure is uniform across all NativeScript projects created with AppBuilder. Do not change your basic project structure.

### 4. You can quickly check how your blank project looks like on device.

1. Install the companion app on your device by scanning the QR code below.<br/>The companion app is a testing utility that lets you load your project on device without building an actual application package.

    iOS | Android
    ----|--------
    ![QR code for installing the companion app](/img/companions/ios-code.png) | ![QR code for installing the companion app](/img/companions/android-code.png)

2. Prepare your project for the companion app.

    IDE Option | Operation
    -----------|---------- 
    In-browser client | <ol><li>In the main menu bar, select <b>Run</b>.</li><li>Select your target platform, select to build for the companion app and click <b>Next</b>.</li></ol>
    Windows client | <ol><li>In the main menu bar, select <b>Run</b>.</li><li>Select your target platform, select to build for the companion app and click <b>Next</b>.</li></ol>
    Extension for Visual Studio | <ol><li>In the main menu bar, select <b>AppBuilder</b> &#8594; <b>Build in Cloud</b>.</li><li>Select your target platform, select to build for the companion app and click <b>Next</b>.</li></ol>
    CLI | Run `appbuilder build android --companion` or `appbuilder build ios --companion`

3. Run your project in the companion app.
    1. Unlock your device.
    1. Run a QR code scanner.
    1. Scan the QR code that AppBuilder produced in **Step 2**.

Your project is truly blank and this is why it appears empty or even black on the device screen. To change this, you need to add user interface to your app.

## Add User Interface

NativeScript projects consist of pages. In this project, your home page is declared in `app` &#8594; `main-page.xml`. 

You can add a simple title, a button and a message to your home page by replacing the contents of `main-page.xml` with the following code.

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<Page>
  <StackLayout>
    <Label text="Tap the button" style="horizontal-align: center"/>
    <Button text="TAP" />
    <Label text="message" textWrap="true" style="horizontal-align: center"/>
  </StackLayout>
</Page>
```

Save your changes and synchronize them to the companion app.

iOS | Android
----|--------
Tap and hold with three fingers until a download dialog appears. | Expand the notification center and tap **Sync**.

On your device, your app should appear similar to the screen shots below.

![step1 ios](/img/ab-getting-started/step1-ios.png "step1 ios")![step1 android](/img/ab-getting-started/step1-android.png "step1 android")

## Create a View Model

The NativeScript framework is optimized for mobile development which follows the [MVVM](http://en.wikipedia.org/wiki/Model_View_ViewModel) pattern.

### 1. Create the view model file.

In your `app` directory, create a new folder named `view-models`. In the newly created folder, add a new file named `main-view-model.js` or `main-view-model.ts` if your project is a JavaScript or a TypeScript project, respectively.

Replace any default contents of the newly added file with the following code.

``` JavaScript
var observable = require("data/observable");

var counter = 42;
var mainViewModel = new observable.Observable();
mainViewModel.set("message", counter + " taps left");
mainViewModel.tapAction = function () {
    counter--;
    if (counter <= 0) {
        mainViewModel.set("message", "Hurrah! You unlocked the NativeScript clicker achievement!");
    }
    else {
        mainViewModel.set("message", counter + " taps left");
    }
};
exports.mainViewModel = mainViewModel;
```
``` TypeScript
import observable = require("data/observable");

export class HelloWorldModel extends observable.Observable {
    private counter: number;
    constructor() {
        super();

        this.counter = 42;
        this.set("message", this.counter + " taps left");
    }

    public tapAction() {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Hurrah! You unlocked the NativeScript clicker achievement!");
        }
        else {
            this.set("message", this.counter + " taps left")
        }
    }
}
export var mainViewModel = new HelloWorldModel();
```

The view model is an instance of the `Observable` type. This lets your user interface receive a notification when the `message` property is set.

### 2. Bind the view model to the home page

You can use a `pageLoaded` event to load your app functionality when the home page loads.

In `app` &#8594; `main-page.xml`, add a `loaded` attribute to the `Page` element.

```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded">
    ...
</Page>
```

NativeScript automatically looks for JavaScript or TypeScript files which have the same name as your `XML` file. When NativeScript identifies such a file, it executes the logic inside it. So, NativeScript will automatically execute any business logic in the `main-page.js` or `main-page.ts` file you already have in your project.

To bind your view model to the home page, in your `main-page.js` or `main-page.ts` add the following code. This code handles the `pageLoaded` event.

```JavaScript
var vmModule = require("./view-models/main-view-model");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
}
exports.pageLoaded = pageLoaded;

```
```TypeScript
import observable = require("data/observable");
import pages = require("ui/page");
import vmModule = require("./view-models/main-view-model");

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    var page = <pages.Page>args.object;
    page.bindingContext = vmModule.mainViewModel;
}
```

Finally, you can bind the user interface of the home page to the view model you created. In your `main-page.xml` add the following code.

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded">
  <StackLayout>
    <Label text="Tap the button" style="horizontal-align: center"/>
    {%raw%}<Button text="TAP" tap="{{ tapAction }}"/>
    <Label text="{{ message }}" textWrap="true" style="horizontal-align: center"/>{%endraw%}
  </StackLayout>
</Page>
```

Save your changes and synchronize them to the companion app.

iOS | Android
----|--------
Tap and hold with three fingers until a download dialog appears. | Expand the notification center and tap **Sync**.

On your device, your app should appear similar to the screen shots below.

![step2 ios](/img/ab-getting-started/step2-ios.png "step2 ios")![step2 android](/img/ab-getting-started/step2-android.png "step2 android")

## Style Your App

You can style your app using CSS. In this version of NativeScript, you can only use a [subset of the CSS language](../styling.md).

For each page, NativeScript automatically loads and applies the `CSS` file with the same name as the `XML` file for the page. Under the hood, the runtime parses the CSS, evaluates the selectors and applies the properties to the style object of the selected view.

First, add a `main-page.css` to your `app` directory. 

Next, you can style your user interface by setting alignment, font size and color for your title, button and text. Insert the following code in your `main-page.css`.

```CSS
.title {
    font-size: 30;
    horizontal-align: center;
    margin:20;
}

button {
    font-size: 42;
    horizontal-align: center;
}

.message {
    font-size: 20;
    color: #284848;
    margin:10 40;
    horizontal-align: center;
}
```

Finally, add the `cssClass` attribute to your user interface elements in `main-page.xml`. This applies the styling rules to your user interface elements.

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded">
  <StackLayout>
    <Label text="Tap the button" cssClass="title"/>
    {%raw%}<Button text="TAP" cssClass="button" tap="{{ tapAction }}"/>
    <Label text="{{ message }}" cssClass="message" textWrap="true"/>{%endraw%}
  </StackLayout>
</Page>
```

Save your changes and synchronize them to the companion app.

iOS | Android
----|--------
Tap and hold with three fingers until a download dialog appears. | Expand the notification center and tap **Sync**.

On your device, your app should appear similar to the screen shots below.

![step3 ios](/img/ab-getting-started/step3-ios.png "step3 ios")![step3 android](/img/ab-getting-started/step3-android.png "step3 android")

## Move Beyond the Basics

Congratulations! You have just completed your first app with NativeScript. NativeScript does a whole lot, and you're just getting started. As a next step, try adding a delete button to your lists app, or tying the list to a backend using the NativeScript [http module](../ApiReference/http/HOW-TO.md).

Feel free to explore the [API reference](../ApiReference/) to see all of what NativeScript has to offer. You can also learn more about NativeScript features in the following articles.

* [Getting Started](../getting-started.md)
* [App: Management](../application-management.md)
* [App: Architecture and Navigation](../navigation.md)
* [App: Bind Data](../bindings.md)
* [App: Handle Events](../events.md)
* [App: Properties](../properties.md)
* [App: Location](../location.md)
* [UI: The Basics](../ui-with-xml.md)
* [UI: Layouts](../layouts.md)
* [UI: Widgets](../modules.md)
* [UI: Dialogs](../ui-dialogs.md)
* [UI: Gestures](../gestures.md)
* [UI: Styling](../styling.md)

If you need even more native capabilities than the NativeScript modules provide, you can expand your development with any of the following options.

* [iOS-Specific JavaScript Development](../runtimes/ios/Overview.md)
* [Android-Specific JavaScript Development](../runtimes/android/overview.md)
* [Development with Native Libraries](https://github.com/NativeScript/nativescript-cli)

[1]: ./setup/ab-setup
