---
nav-title: Hello World from the NativeScript CLI
title: Hello World from the NativeScript CLI
description: Create your first NativeScript Hello World app in a few minutes with the NativeScript CLI. See it in action on your device.
position: 1
---

# Hello World from the NativeScript CLI

Have you set up your system to develop NativeScript apps with the NativeScript CLI local tool set? 

If the answer is yes, you are ready to create your first Hello World app with NativeScript. Your first Hello World will be a simple counter. You will learn:

* [How To Create a New Project](#crate-new-project)
* [How To Add User Interface](#add-user-interface)
* [How To Create a View Model](#create-a-view-model)
* [How To Style Your App](#style-your-app)

> If your system is not already configured, you can check the [Set Up Your System](./setup/quick-setup.md) guide, pick your tools and configure them.

## Create New Project

The first step to any development is to create your first project.

### 1. Create your project.

1. Get the Blank template locally from [https://github.com/NativeScript/docs.git](https://github.com/NativeScript/docs.git).
    * If you have configured git version control on your system, navigate to an empty directory and run this command.

        ```
        git clone https://github.com/NativeScript/docs.git
        ```
    * If you have not configured git version control, navigate to [https://github.com/NativeScript/docs.git](https://github.com/NativeScript/docs.git), click **Download ZIP**, wait for the download to complete and extract the archive.
1. In the command prompt, run the following command.

```
tns create HelloWorld --copy-from <Directory where you cloned or extracted the Blank template>
```

### 2. Explore the newly created project.

Explore the newly created directory in a file explorer. At first, your project has the following structure.

```
Hello World/ 
|-- app/
|-- |-- app/
|-- |-- App_Resources/
|-- |-- |-- Android/
|-- |-- `-- iOS/
|-- |-- LICENSE
|-- |-- package.json
|-- |-- README.md
|-- `-- tns_modules/
`-- platforms
```

Your NativeScript project consists of the following basic directories and files.

* The `app` directory is the **development space for your application**. You need to modify all common and platform-specific code within the `app` subdirectory in this directory. 
* The `platforms` directory is created empty. When you add a target platform to your project, the NativeScript CLI creates a new subdirectory with the platform name. The subdirectory contains the ready-to-build platform-specific resources of your app. 
* The `App_Resources` subdirectory is the directory that contains **platform-specific resources** such as icons, splash screens and platform-specific configuration files like `AndroidManifest.xml` and `Info.plist`.<br/>When you create a new project, only icons and splash screens are present in this directory.
* The `tns_modules` subdirectory contains the NativeScript modules. Each module exposes a device or platform functionality such as the camera, location services or the user interface.

> **IMPORTANT:** This project structure is uniform across all NativeScript projects created with the NativeScript CLI. Do not change your basic project structure.

### 3. Add target development platforms.

Currently, the `platforms` directory is empty. This means that your project is not ready for development yet. Before you can continue, you need to add your desired platform as a target platform.

```iOS
tns add platform ios
```
```Android
tns add platform android
```

This operation creates the `android` and the `ios` subdirectories in the `platforms` directory. Each of these subdirectories now contain a project for native development with the respective SDKs.

Later on, the NativeScript CLI will call the tools of the native SDK to build these platform-specific projects into a truly native application package. During this process, the NativeScript CLI will automatically transfer your cross-platform code  and resources from the `app` directory into the `platforms` directory.

> **IMPORTANT:** Avoid modifying your projects inside the `platforms` directory. During build-related operations, your changes will be overridden by your code and resources from the `app` directory.

### 4. You can quickly check how your blank project looks like in the emulator.

Run the following command.

```iOS
tns run ios --emulator
```
```Android
tns run android --emulator
```

> **TIP:** If you have configured Genymotion, you can run `tns run android --emulator --geny <Genymotion Device Name>`<br/>This runs your project in the Genymotion emulator.

Your project is truly blank and this is why it appears empty or even black on the emulator screen. To change this, you need to add user interface to your app.

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

Save your changes and rerun your app.

```iOS
tns run ios --emulator
```
```Android
tns run android --emulator
```

> **TIP:** If you have configured Genymotion, you can run `tns run android --emulator --geny <Genymotion Device Name>`<br/>This runs your project in the Genymotion emulator.

On your device, your app should appear similar to the screen shots below.

![step1 ios](http://docs.nativescript.org/img/getting-started/step1-ios.png "step1 ios")![step1 android](http://docs.nativescript.org/img/getting-started/step1-android.png "step1 android")

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
<Page xmlns="http://www.nativescript.org/tns.xsd" loaded="pageLoaded">
    ...
</Page>
```

NativeScript automatically looks for JavaScript or TypeScript files which have the same name as your `XML` file. When NativeScript identifies such a file, it executes the logic inside it. So, NativeScript will automatically execute any business logic in the `main-page.js` or `main-page.ts` file you already have in your project.

To bind your view model to the home page, in your `app` &#8594; `main-page.js` or `app` &#8594; `main-page.ts` add the following code. This code handles the `pageLoaded` event.

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

Finally, you can bind the user interface of the home page to the view model you created. In your `app` &#8594; `main-page.xml` add the following code.

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<Page xmlns="http://www.nativescript.org/tns.xsd" loaded="pageLoaded">
  <StackLayout>
    <Label text="Tap the button" style="horizontal-align: center"/>
    <Button text="TAP" tap="{{ tapAction }}"/>
    <Label text="{{ message }}" textWrap="true" style="horizontal-align: center"/>
  </StackLayout>
</Page>
```

Save your changes and rerun your app.

```iOS
tns run ios --emulator
```
```Android
tns run android --emulator
```

> **TIP:** If you have configured Genymotion, you can run `tns run android --emulator --geny <Genymotion Device Name>`<br/>This runs your project in the Genymotion emulator.

On your device, your app should appear similar to the screen shots below.

![step2 ios](img/getting-started/step2-ios.png "step2 ios")![step2 android](img/getting-started/step2-android.png "step2 android")

## Style Your App

You can style your app using CSS. In this version of NativeScript, you can only use a [subset of the CSS language](./styling.md).

For each page, NativeScript automatically loads and applies the `CSS` file with the same name as the `XML` file for the page. Under the hood, the runtime parses the CSS, evaluates the selectors and applies the properties to the style object of the selected view.

> **TIP:** You can also set global CSS rules. Any CSS declarations in `app.css` will apply to all content that can be styled.

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
<Page xmlns="http://www.nativescript.org/tns.xsd" loaded="pageLoaded">
  <StackLayout>
    <Label text="Tap the button" cssClass="title"/>
    <Button text="TAP" cssClass="button" tap="{{ tapAction }}"/>
    <Label text="{{ message }}" cssClass="message" textWrap="true"/>
  </StackLayout>
</Page>
```

Save your changes and rerun your app.

```iOS
tns run ios --emulator
```
```Android
tns run android --emulator
```

> **TIP:** If you have configured Genymotion, you can run `tns run android --emulator --geny <Genymotion Device Name>`<br/>This runs your project in the Genymotion emulator.

On your device, your app should appear similar to the screen shots below.

![step3 ios](img/getting-started/step3-ios.png "step3 ios")![step3 android](img/getting-started/step3-android.png "step3 android")

## What's Next

Congratulations! You have just completed your first "Hello, World!" app with NativeScript. Next, you can explore the [Api Reference](./ApiReference/) or start tackling more complex tasks. 

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

[1]: ./setup/ab-setup