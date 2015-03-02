---
nav-title: "Getting Started with NativeScript"
title: "Getting Started with NativeScript"
description: "NativeScript Documentation: Getting Started"
position: 2
---

## Requirements

Currently NativeScript runs on the following platforms:

* Android 4.2+ (equivalent to Android API level 17+)
* iOS 7.1+

## Step 1: Install NativeScript

The first thing you need is the [NativeScript CLI](https://github.com/NativeScript/nativescript-cli), which runs on the Node.js platform, and which you can install using npm:

```
$ npm install -g nativescript
```

## Step 2: Create a project

The CLI install creates two commands, `nativescript` and `tns`, that you use to create, build, and run your NativeScript projects. Running `tns create` (or `nativescript create`) creates a new project:

```
$ tns create hello-world
```

## Step 3: Add platforms

NativeScript needs to know which platforms you intend to target to do some one-time initialization. You add each platform with the `tns platform add` command:

```
$ cd hello-world
$ tns platform add ios
$ tns platform add android
```

> **Warning**: NativeScript has system requirements for each platform. Most notably you need to have Xcode installed to build iOS apps, and you need to have an Android SDK installed to build Android apps. If the `tns platform add` command fails, refer to [CLI's system requirement documentation](https://github.com/NativeScript/nativescript-cli#system-requirements).

## Step 4: Run your app

After adding platform(s), you use the `tns run` command to run your app. For example, the following runs your app in the iOS emulator:

```
$ npm install -g ios-sim-portable  # Needed to launch the iOS emulator from the CLI
$ tns run ios --emulator
```

The following runs your app in the Android emulator (specifically an [Android AVD](http://developer.telerik.com/featured/using-android-emulator-hybrid-mobile-apps-telerik-appbuilder/) configured on your machine):

```
$ tns run android --emulator
```

You can deploy your app to physical, USB-connected devices by omitting the `--emulator` flag. The following deploys your app to a USB-connected Android device:

```
$ tns run android
```

And the following does the same for iOS:

```
$ tns run ios
```

> **Warning**: Deploying your app to iOS devices requires that a valid iOS certificate and provisioning profile pair are configured on your development machine. For more information see [iOS Code Signing - A Complete Walkthrough](http://seventhsoulmountain.blogspot.com/2013/09/ios-code-sign-in-complete-walkthrough.html).

## Step 5: Build something awesome

The project you just created has a single empty page, and that's no fun. Let's look at what NativeScript makes possible.

### Adding a UI

Your app has one page, and it's defined in the `main-page.xml` file. The project also has a `main-page.js` file that contains the page's logic, and a `main-page.css` file that contains the page's styling.

Let's make this app more interesting. Paste the following code in your `main-page.xml`:

```XML
<Page>
  <StackLayout>
    <Label text="Tap the button" style="horizontal-align: center" />
    <Button text="TAP" />
    <Label text="message" textWrap="true" style="horizontal-align: center" />
  </StackLayout>
</Page>
```

These few lines of code are all you need to add three native UI components (two labels and a button) to your app. Here's what your UI looks like on an Android and iOS device:

![step1 android](img/getting-started/step1-android.png "step1 android")![step1 ios](img/getting-started/step1-ios.png "step1 ios")

To make this app actually do something, let's look at how we can bind an event handler to the app's button, and a string to the app's “message” label.

> **Note**: For more on what you can do with UIs in NativeScript, check out the [UI with XML](ui-with-xml.md) article.

### Creating a View-Model

The [MVVM](http://en.wikipedia.org/wiki/Model_View_ViewModel) pattern is the preferred approach for building NativeScript apps, as it provides an elegant approach to keeping your model data in sync with your UI. To see how it works let's create a view model (the VM in MVVM), and bind it to your page.

Create a `view-models` folder and create a new `count-model.js` file within it. Your folder structure should look like this:

```
.
└── hello-world
    ├── app
    │   ├── app.js
    │   ├── main-page.css
    │   ├── main-page.js
    │   ├── main-page.xml
    │   └── view-models
    │       └── count-model.js
    └── platforms
        └── ...
```

> **Note**: TypeScript is a first-class citizen in NativeScript. If you'd like to use TypeScript, create .ts files instead of .js files (so `main-page.ts` and `count-model.ts`), and copy and paste code from the TypeScript tabs instead of the JavaScript tabs below. That's it!

With that structure in place, next open your `count-model.js` file and paste in the following code:

``` JavaScript
var observable = require("data/observable");

var counter = 42;
var countModel = new observable.Observable();
countModel.set("message", counter + " taps left");
countModel.tapAction = function () {
    counter--;
    if (counter <= 0) {
        countModel.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
    } else {
        countModel.set("message", counter + " taps left");
    }
};
module.exports = countModel;
```
```TypeScript
import observable = require("data/observable");

export class CountModel extends observable.Observable {
    private counter: number;
    constructor() {
        super();

        this.counter = 42;
        this.set("message", this.counter + " taps left");
    }

    public tapAction() {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
        }
        else {
            this.set("message", this.counter + " taps left")
        }
    }
}
export new CountModel();
```

This view-model exposes two things: a `message` property (created by the call to `.set()`), and a `tapAction` function. The `tapAction` function decrements a counter and updates the `message` property to reflect the change.

Now that you have this view-model in place you need to use it in your UI—specifically, you need to bind your `<Label>`'s text to the view-model's `message` property, and you need to invoke the view-model's `tapAction()` method on each tap of your app's `<Button>`.

Start by opening your `main-page.js` file and pasting in the following code:

```JavaScript
var countModel = require("./view-models/count-model");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = countModel;
}
exports.pageLoaded = pageLoaded;
```
```TypeScript
import observable = require("data/observable");
import pages = require("ui/page");
import countModel = require("./view-models/count-model");

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    var page = <pages.Page>args.object;
    page.bindingContext = countModel;
}
```

The `require()` call imports your count model, and the `pageLoaded` function sets it as the page's “bindingContext”, with the “bindingContext” just meaning that your model's properties and functions will now be available in your page's XML using NativeScript's data-binding syntax.

To see how it works, let's return to your `main-page.xml` file. Open it and paste in the following code:

``` XML
<Page loaded="pageLoaded">
  <StackLayout>
    <Label text="Tap the button" style="horizontal-align: center" />
    <Button text="TAP" tap="{{ tapAction }}"/>
    <Label text="{{ message }}" textWrap="true" style="horizontal-align: center" />
  </StackLayout>
</Page>
```

There are a couple of things to note here. The first is the new `loaded` attribute on the `<Page>` element. The value of the `loaded` attribute, `"pageLoaded"`, mirrors the `exports.pageLoaded` function you defined in `main-page.js`. This causes the `pageLoaded` function to run when this page loads, which sets the count model as this page's binding context, and makes the model's properties available for data binding.

The data binding is used in two places: in the button's `tap` attribute, `tap="{{ tapAction }}"`, and the second label's `text` attribute, `text="{{ message }}"`. With this change, taps on the button invoke the count model's `tapAction()` method, and the second label displays the count model's `message` property.

Here's what your app looks like now:

![step2 android](img/getting-started/step2-android.png "step2 android")![step2 ios](img/getting-started/step2-ios.png "step2 ios")

The power of an MVVM approach is that not only do you get to bind properties to UI elements, but that those UI elements automatically update as the model's properties changes. In your app not only is the initial state correct, but every time you tap the button, the `tapAction()` method runs, the model's `message` property gets updated, and your app's UI reflects that change—automatically!

> **Note**: For more details on how NativeScript's data binding works, checkout out our [Data Binding](bindings.md) documentation.

### Adding Styles

Now that you have a small functioning app, let's look at how at you can change how your app looks. Styling in NativeScript is done with a subset of the CSS syntax.

For each page, the NativeScript runtime automatically loads and applies any CSS file that has the same name as the XML file for the page. Therefore, in this example, NativeScript automatically knows to use your `main-page.css` file to style your `main-page.xml` page. As an example of what you can do, paste the following code in your `main-page.css` file:

```CSS
.title {
    font-size: 30;
    horizontal-align: center;
    margin: 20;
}
button {
    font-size: 42;
    horizontal-align: center;
}
.message {
    font-size: 20;
    color: #284848;
    margin: 10 40;
    horizontal-align: center;
}
```

This CSS adjusts the font size and text alignment of button elements, and also defines two new CSS class names, `title` and `message`. You can apply those class names to elements using the `cssClass` attribute in your XML pages.

To try that out, paste the following code in your `main-page.xml` file, which includes two new `cssClass` attributes that map to the class names defined in your `main-page.css` file.

```XML
<Page loaded="pageLoaded">
  <StackLayout>
    <Label text="Tap the button" cssClass="title" />
    <Button text="TAP" tap="{{ tapAction }}" />
    <Label text="{{ message }}" cssClass="message" textWrap="true" />
  </StackLayout>
</Page>
```

With the addition of some CSS styling here's what the app looks like now:

![step3 android](img/getting-started/step3-android.png "step3 android")![step3 ios](img/getting-started/step3-ios.png "step3 ios")

> **Note**: CSS Styling is covered in depth in the [Styling](styling.md) article.

## Next Steps

NativeScript does a whole lot, and you're just getting started! As a next step, feel free to peruse our [API reference](ApiReference/) to see what NativeScript has to offer. You can also learn more about NativeScript features in the following articles:

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
