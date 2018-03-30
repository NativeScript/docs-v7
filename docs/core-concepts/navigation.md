---
title: Architecture and Navigation
description: Learn the basic application structure of NativeScript apps and how to navigate inside your app.
position: 20
slug: architecture
previous_url: /navigation
environment: nativescript
---

# Architecture and Navigation

NativeScript apps consist of pages that represent the separate application screens. Pages are instances of the [`page`](http://docs.nativescript.org/api-reference/classes/_ui_page_.page.html) class of the [`Page`](http://docs.nativescript.org/api-reference/classes/_ui_page_.page.html) module. To navigate between pages, you can use the methods of the [`Frame`](http://docs.nativescript.org/api-reference/classes/_ui_frame_.frame.html) class of the [`Frame`](http://docs.nativescript.org/api-reference/classes/_ui_frame_.frame.html) module.

> **TIP:** Instead of multiple pages, you can have a single page with a [tab view](http://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview.html) and different user interfaces for each tab.


* [Page management](#page-management)
    * [Define page](#define-page)
    * [Set home page](#set-home-page)
* [Navigation](#navigation)
    * [The topmost frame](#the-topmost-frame)
    * [Navigate by page name](#navigate-by-page-name)
    * [Navigate using a function](#navigate-using-a-function)
    * [Navigate and pass context](#navigate-and-pass-context)
    * [Navigate and set bindingContext to the page](#navigate-and-set-bindingcontext-to-the-page)
    * [Navigate without history](#navigate-without-history)
    * [Clear history](#clear-history)
    * [Navigation transitions](#navigation-transitions)
    * [Navigate back](#navigate-back)
    * [Modal pages](#modal-pages)
* [Supporting multiple screens](#supporting-multiple-screens)
    * [Screen size qualifiers](#screen-size-qualifiers)
    * [Platform qualifiers](#platform-qualifiers)
    * [Orientation qualifiers](#orientation-qualifiers)

## Page management

### Define page

Pages represent the separate screens of your application. Each page is an instance of the [`page`](http://docs.nativescript.org/api-reference/classes/_ui_page_.page.html) class of the [`Page`](http://docs.nativescript.org/api-reference/classes/_ui_page_.page.html) module. Each class instance inherits the [`content`](http://docs.nativescript.org/api-reference/classes/_ui_content_view_.contentview.html) property which holds the root visual element of the UI.

NativeScript provides two approaches to instantiating your pages.

**Create a page in XML**

You can define the UI declaration and the code for the page separately.

To apply this approach, create a `XML` file for each page to hold the layout of the page. Thus your code will be in a `JS` or a `TS` file. The names of the `XML` and the `JS` or `TS` file must match.

### Example 1:  Create page with XML.
``` XML
<!-- main-page.xml-->
<Page loaded="onPageLoaded">
  <Label text="Hello, world!"/>
</Page>
```
``` JavaScript
// main-page.js
function onPageLoaded(args) {
    console.log("Page Loaded");
}
exports.onPageLoaded = onPageLoaded;
```
``` TypeScript
// main-page.ts
import { EventData } from "data/observable";

export function onPageLoaded(args: EventData): void {
    console.log("Page Loaded");
}
```
**Create a page in code**

To apply this approach, you need to create a function named `createPage` that will return an instance of your page. NativeScript considers `createPage` a factory function.

### Example 2:  Create page via code.
``` JavaScript
const pagesModule = require("ui/page");
const labelModule = require("ui/label");

function createPage() {
    const label = new labelModule.Label();
    label.text = "Hello, world!";
    const page = new pagesModule.Page();
    page.content = label;
    return page;
}
exports.createPage = createPage;
```
``` TypeScript
import { Page } from "ui/page";
import { Label } from "ui/label";

export function createPage(): Page {
    const label = new Label();
    label.text = "Hello, world!";
    const page = new Page();
    page.content = label;
    return page;
}
```

### Set home page

Each application must have a single entry point - the home page.

To load the home page for your app, you need to pass `NavigationEntry` with the desired `moduleName` to the start() method.  NativeScript looks for an XML file with the specified name, parses it and draws the UI described in the file. Afterwards, if NativeScript finds a `JS` or a `TS` file with the same name, it executes the business logic in the file.

``` JavaScript
const application = require("application");
application.start({ moduleName: "main-page" });
```
``` TypeScript
import application from "application";
application.start({ moduleName: "main-page" });
```

## Navigation

The [`Frame`](http://docs.nativescript.org/api-reference/classes/_ui_frame_.frame.html) class represents the logical unit that is responsible for navigation between different pages. Typically, each app has one frame at the root level - the topmost frame.

To navigate between pages, you can use the [`navigate`](http://docs.nativescript.org/api-reference/classes/_ui_frame_.frame#navigate) method of the topmost frame instance.

In addition, each `Page` instance carries information about the frame object which navigated to it in the `frame` property. This lets you navigate with the `frame` property as well. 


### The topmost frame

The topmost frame is the root-level container for your app's UI and you can use it to navigate inside of your app. You can get a reference to this frame by using the `topmost()` method of the Frame module.


``` JavaScript
const frameModule = require("ui/frame");
const topmost = frameModule.topmost();
```
``` TypeScript
import * as frameModule from "ui/frame";
const topmost = frameModule.topmost();
```

There are several ways to perform navigation; which one you use depends on the needs of your app.


### Navigate by page name

Perhaps the simplest way to navigate is by specifying the file name of the page to which you want to navigate.

``` JavaScript
topmost.navigate("details-page");
```
``` TypeScript
topmost.navigate("details-page");
```

### Navigate using a function

A more dynamic way of navigating can be done by providing a function that returns the instance of the page to which you want to navigate.

### Example 3:  How to navigate to a page dynamically created via code.
``` JavaScript
const pagesModule = require("ui/page");
const labelModule = require("ui/label");
const topmost = require("ui/frame").topmost;

const factoryFunc = () => {
    const label = new labelModule.Label();
    label.text = "Hello, world!";
    const page = new pagesModule.Page();
    page.content = label;
    return page;
};
topmost().navigate(factoryFunc);
```
``` TypeScript
import { Page } from "ui/page";
import { Label } from "ui/label";
import { topmost } from "ui/frame";

const factoryFunc = (): Page => {
    const label = new Label();
    label.text = "Hello, world!";
    const page = new Page();
    page.content = label;
    return page;
};
topmost().navigate(factoryFunc);
```

### Navigate and pass context

When you navigate to another page, you can pass context to the page with a [`NavigationEntry`](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry.html) object. This approach provides finer control over navigation compared to other navigation approaches. For example, with `NavigationEntry` you can also animate the navigation.

### Example 4:  How to pass content between different pages.
``` JavaScript
const topmost = require("ui/frame").topmost;

const navigationEntry = {
    moduleName: "details-page",
    context: { info: "something you want to pass to your page" },
    animated: false
};
topmost().navigate(navigationEntry);
```
``` TypeScript
import { topmost } from "ui/frame";

const navigationEntry = {
    moduleName: "details-page",
    context: { info: "something you want to pass to your page" },
    animated: false
};
topmost().navigate(navigationEntry);
```

#### Retrieve content
``` JavaScript
// Event handler for Page "navigatedTo" event attached in details-page.xml e.g.
function pageNavigatedTo(args) {
    const page = args.object;
    const context = page.navigationContext;
}

exports.pageNavigatedTo = pageNavigatedTo;
```
``` TypeScript
import { EventData } from "data/observable";
import { Page } from "ui/page";

// Event handler for Page "navigatedTo" event attached in details-page.xml e.g.
export function pageNavigatedTo(args: EventData): void {
    // Get the event sender
    const page: Page = <Page>args.object;
    // You can access `info` property from the navigationEntry
    const context: any = page.navigationContext;
}
```

### Navigate and set bindingContext to the page

While you are navigating you could set `bindingContext` to a page.

### Example 5:  How to provide `bindingContext` automaticlly while navigating to a page.


```JavaScript
const topmost = require("ui/frame").topmost;
const mainViewModel = require("./main-view-model");
// Navigate to page called “my-page” and provide "bindingContext"
topmost().navigate({ 
  moduleName: "my-page", 
  bindingContext: new mainViewModel.HelloWorldModel() 
});
```
```TypeScript
import { topmost } from "ui/frame";
import { HelloWorldModel } from "./main-view-model"
// Navigate to page called “my-page” and provide "bindingContext"
topmost().navigate({
  moduleName: "my-page", 
  bindingContext: new HelloWorldModel()
});
```

#### Example

In this example, this master-details app consists of two pages. The main page contains a list of entities. The details page shows information about the currently selected entity.

When you navigate to the details page, you transfer a primary key or ID information about the selected entity. 
### Example 6:  Navigate to the details page and pass the content for selected item.
``` JavaScript
const topmost = require("ui/frame").topmost;

function listViewItemTap(args) {
    // Navigate to the details page with context set to the data item for specified index
    topmost().navigate({
        moduleName: "cuteness.io/details-page",
        context: appViewModel.redditItems.getItem(args.index)
    });
}

exports.listViewItemTap = listViewItemTap;
```
``` TypeScript
import { topmost } from "ui/frame";
import { ItemEventData } from "tns-core-modules/ui/list-view";

export function listViewItemTap(args: ItemEventData): void {
    // Navigate to the details page with context set to the data item for specified index
    topmost().navigate({
        moduleName: "details-page",
        context: appViewModel.redditItems.getItem(args.index)
    });
}
```

With the **onNavigatedTo** callback, you show the details for the entity.
### Example 7:  Bind the content received from main page.
``` JavaScript
// Event handler for Page "navigatedTo" event attached in details-page.xml e.g.
function pageNavigatedTo(args) {
    const page = args.object;
    page.bindingContext = page.navigationContext;
}

exports.pageNavigatedTo = pageNavigatedTo;
```
``` TypeScript
import { EventData } from "data/observable";
import { Page } from "ui/page";

// Event handler for Page "navigatedTo" event attached in details-page.xml
export function pageNavigatedTo(args: EventData): void {
    // Get the event sender
    const page: Page = <Page>args.object;
    page.bindingContext = page.navigationContext;
}
```

### Navigate without history

You can navigate to a page without adding this navigation to the history. Set the `backstackVisible` property of the [`NavigationEntry`](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry.html) to `false`. If this property is set to false, then the Page will be displayed, but once navigated from it will not be able to be navigated back to.
### Example 8:  Page navigation, without saving navigation history.
``` JavaScript
const topmost = require("ui/frame").topmost;

const navigationEntry = {
    moduleName: "login-page",
    backstackVisible: false
};
topmost().navigate(navigationEntry);
```
``` TypeScript
import { topmost } from "ui/frame";

const navigationEntry = {
    moduleName: "login-page",
    backstackVisible: false
};
topmost().navigate(navigationEntry);
```

### Clear history

You can navigate to a new page and decide to completely clear the entire navigation history. Set the `clearHistory` property of the [`NavigationEntry`](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry.html) to `true`. This will prevent the user from going back to pages previously visited. This is extremely useful if you have a multiple-page authentication process and you want to clear the authentication pages once the user is successfully logged in and redirected to the start page of the application.
### Example 9:  Prevent user from going back using `clearHistory` property.
``` JavaScript
const topmost = require("ui/frame").topmost;

const navigationEntry = {
    moduleName: "main-page",
    clearHistory: true
};
topmost().navigate(navigationEntry);
```
``` TypeScript
import { topmost } from "ui/frame";

const navigationEntry = {
    moduleName: "main-page",
    clearHistory: true
};
topmost().navigate(navigationEntry);
```

### Navigation transitions

By default, all navigation will be animated and will use the default transition for the respective platform (UINavigationController transitions for iOS and Fragment transitions for Android). To change the transition type, set the `navigationTransition` property of the [`NavigationEntry`](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry.html) to an object conforming to the [`NavigationTransition`](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition.html) interface.

### Example 10:  Set up a transition property on page navigation.
``` JavaScript
const topmost = require("ui/frame").topmost;

const navigationEntry = {
    moduleName: "main-page",
    animated: true,
    transition: {
        name: "slide",
        duration: 380,
        curve: "easeIn"
    }
};
topmost().navigate(navigationEntry);
```
``` TypeScript
import { topmost } from "ui/frame";

const navigationEntry = {
    moduleName: "main-page",
    animated: true,
    transition: {
        name: "slide",
        duration: 380,
        curve: "easeIn"
    }
};
topmost().navigate(navigationEntry);
```

To use one of the built-in transitions, set the `name` property of the [`NavigationTransition`](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition.html) to one of the following:
 - curl (same as curlUp) (iOS only)
 - curlUp (iOS only)
 - curlDown (iOS only)
 - explode (Android Lollipop and later)
 - fade
 - flip (same as flipRight)
 - flipRight
 - flipLeft
 - slide (same as slideLeft)
 - slideLeft
 - slideRight
 - slideTop
 - slideBottom
 
The `duration` property lets you specify the transition duration in milliseconds. If left undefined, the default duration for each platform will be used &mdash; `350` ms for iOS and `300` ms for Android. 
 
The `curve` property lets you specify the animation curve of the transition. Possible values are contained in the [AnimationCurve enumeration](http://docs.nativescript.org/api-reference/modules/_ui_enums_.animationcurve.html). Alternatively, you can pass an instance of type [`UIViewAnimationCurve`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIView_Class/#//apple_ref/c/tdef/UIViewAnimationCurve) for iOS or [`android.animation.TimeInterpolator`](http://developer.android.com/reference/android/animation/TimeInterpolator.html) for Android. If left undefined, and `easeInOut` curve will be used. 
 
To specify a default transition for **all** frame navigations, set the `transition` property of the frame you are navigating with.

 ``` JavaScript
const topmost = require("ui/frame").topmost;
topmost().transition = { name: "flip" };
topmost().navigate("main-page");
```
``` TypeScript
import { topmost } from "ui/frame";
topmost().transition = { name: "flip" };
topmost().navigate("main-page");
```

To specify a default transition for **all** navigations across the entire app, set the **static** `defaultTransition` property of the `Frame` class.

 ``` JavaScript
const frameModule = require("ui/frame");
frameModule.Frame.defaultTransition = { name: "fade" };
```
``` TypeScript
import { Frame } from "ui/frame";
Frame.defaultTransition = { name: "fade" };
```

To specify different transitions for the different platforms use the `transitioniOS` and `transitionAndroid` properties of the [`NavigationEntry`](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry.html).
### Example 11:  Set up platform specific transitions.
``` JavaScript
const topmost = require("ui/frame").topmost;

const navigationEntry = {
    moduleName: "main-page",
    animated: true,
    transitioniOS: {
        name: "curl",
        duration: 380,
        curve: "easeIn"
    },
    transitionAndroid: {
        name: "explode",
        duration: 300,
        curve: "easeOut"
    }
};
topmost().navigate(navigationEntry);
```
``` TypeScript
import { topmost } from "ui/frame";

const navigationEntry = {
    moduleName: "main-page",
    animated: true,
    transitioniOS: {
        name: "curl",
        duration: 380,
        curve: "easeIn"
    },
    transitionAndroid: {
        name: "explode",
        duration: 300,
        curve: "easeOut"
    }
};
topmost().navigate(navigationEntry);
```

### Custom transitions
Instead of setting the `name` property to one of the predefined transitions, you can set the `instance` property of the [`NavigationTransition`](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition.html) to an instance of a class that inherits from [`Transition`](http://docs.nativescript.org/api-reference/classes/_ui_transition_.transition.html). You can create your own custom user-defined transition by writing platform-specific code to animate the transition. To do that you need to inherit from the [`Transition`](http://docs.nativescript.org/api-reference/classes/_ui_transition_.transition.html) class and override one method for each platform. Since there will be platform-specific code, you need to separate your code into two separate files. Here is an example of a custom transition that shrinks the disappearing page while expanding the appearing page by using a scale affine transform.

>  **NOTE**: The following example uses native APIs. When using TypeScript, you need to add a dev dependency to the `tns-platform-declarations` package to use these native APIs without compiler errors. For more information, see the [Intellisense and access to native APIs via TypeScript](./accessing-native-apis-with-javascript.md) section.

### Example 12:  Create your own custom transition.
`custom-transition.android.js/ts`
``` JavaScript
const transition = require("ui/transition");
const floatType = java.lang.Float.class.getField("TYPE").get(null);
const CustomTransition = (function (_super) {
    __extends(CustomTransition, _super);
    function CustomTransition() {
        _super.apply(this, arguments);
    }
    CustomTransition.prototype.createAndroidAnimator = function(transitionType) {
        const scaleValues = java.lang.reflect.Array.newInstance(floatType, 2);
        switch (transitionType) {
            case transition.AndroidTransitionType.enter:
            case transition.AndroidTransitionType.popEnter:
                scaleValues[0] = 0;
                scaleValues[1] = 1;
                break;
            case transition.AndroidTransitionType.exit:
            case transition.AndroidTransitionType.popExit:
                scaleValues[0] = 1;
                scaleValues[1] = 0;
                break;
        }
        const objectAnimators = java.lang.reflect.Array.newInstance(android.animation.Animator.class, 2);
        objectAnimators[0] = android.animation.ObjectAnimator.ofFloat(null, "scaleX", scaleValues);
        objectAnimators[1] = android.animation.ObjectAnimator.ofFloat(null, "scaleY", scaleValues);
        const animatorSet = new android.animation.AnimatorSet();
        animatorSet.playTogether(objectAnimators);
        const duration = this.getDuration();
        if (duration !== undefined) {
            animatorSet.setDuration(duration);
        }
        animatorSet.setInterpolator(this.getCurve());
        return animatorSet;
    };
    return CustomTransition;
})(transition.Transition);
exports.CustomTransition = CustomTransition;
```
``` TypeScript
import { Transition, AndroidTransitionType } from "tns-core-modules/ui/transition";
export class CustomTransition extends Transition {
    public createAndroidAnimator(transitionType: string): android.animation.Animator {
        const scaleValues = (<any>Array).create("float", 2);
        switch (transitionType) {
            case AndroidTransitionType.enter:
            case AndroidTransitionType.popEnter:
                scaleValues[0] = 0;
                scaleValues[1] = 1;
                break;
            case AndroidTransitionType.exit:
            case AndroidTransitionType.popExit:
                scaleValues[0] = 1;
                scaleValues[1] = 0;
                break;
        }
        const objectAnimators = (<any>Array).create(android.animation.Animator, 2);
        objectAnimators[0] = android.animation.ObjectAnimator.ofFloat(null, "scaleX", scaleValues);
        objectAnimators[1] = android.animation.ObjectAnimator.ofFloat(null, "scaleY", scaleValues);
        
        const animatorSet = new android.animation.AnimatorSet();
        animatorSet.playTogether(objectAnimators);

        const duration = this.getDuration();
        if (duration !== undefined) {
            animatorSet.setDuration(duration);
        }

        animatorSet.setInterpolator(this.getCurve());
        return animatorSet;
    }
}
```

`custom-transition.ios.js/ts`
``` JavaScript
const transition = require("ui/transition");
const CustomTransition = (function (_super) {
    __extends(CustomTransition, _super);
    function CustomTransition() {
        _super.apply(this, arguments);
    }
    CustomTransition.prototype.animateIOSTransition = function(containerView, fromView, toView, operation, completion) {
        toView.transform = CGAffineTransformMakeScale(0, 0);
        fromView.transform = CGAffineTransformIdentity;
        switch (operation) {
            case UINavigationControllerOperation.UINavigationControllerOperationPush:
                containerView.insertSubviewAboveSubview(toView, fromView);
                break;
            case UINavigationControllerOperation.UINavigationControllerOperationPop:
                containerView.insertSubviewBelowSubview(toView, fromView);
                break;
        }
        const duration = this.getDuration();
        const curve = this.getCurve();
        UIView.animateWithDurationAnimationsCompletion(duration, () => {
            UIView.setAnimationCurve(curve);
            toView.transform = CGAffineTransformIdentity;
            fromView.transform = CGAffineTransformMakeScale(0, 0);
        }, completion);
    };
    return CustomTransition;
})(transition.Transition);
exports.CustomTransition = CustomTransition;
```
``` TypeScript
import { Transition } from "tns-core-modules/ui/transition";

export class CustomTransition extends Transition {
    public animateIOSTransition(containerView: UIView, fromView: UIView, toView: UIView, operation: UINavigationControllerOperation, completion: (finished: boolean) => void): void {
        const originalToViewTransform = toView.transform;
        const originalFromViewTransform = fromView.transform;

        //http://stackoverflow.com/questions/216076/uiview-scale-to-0-using-cgaffinetransformmakescale
        const scaleTransform = CGAffineTransformMakeScale(0.0001, 0.0001);

        toView.transform = scaleTransform;
        fromView.transform = CGAffineTransformIdentity;

        switch (operation) {
            case UINavigationControllerOperation.UINavigationControllerOperationPush:
                containerView.insertSubviewAboveSubview(toView, fromView);
                break;
            case UINavigationControllerOperation.UINavigationControllerOperationPop:
                containerView.insertSubviewBelowSubview(toView, fromView);
                break;
        }

        const duration = this.getDuration();
        const curve = this.getCurve();
        UIView.animateWithDurationAnimationsCompletion(duration, () => {
            UIView.setAnimationCurve(curve);
            toView.transform = CGAffineTransformIdentity;
            fromView.transform = scaleTransform;
        }, (finished: boolean) => {
            toView.transform = originalToViewTransform;
            fromView.transform = originalFromViewTransform;
            completion(finished);
        });
    }
}
```

Once you have `custom-transition.android.js/ts` and `custom-transition.ios.js/ts` created, you need to require the module and instantiate your CustomTransition, optionally passing a duration and curve to the constructor.

### Example 13:  Require the module and instantiate your custom transition.

> **TIP**: Consider creating the following `custom-transition.d.ts` file next to your `custom-transition.android.ts` and `custom-transition.ios.ts` files in TypeScript projects.

```TypeScript
import { Transition } from "tns-core-modules/ui/transition";
export class CustomTransition extends Transition {
}
```

```JavaScript
const topmost = require("ui/frame").topmost;
const customTransitionModule = require("./custom-transition");
const customTransition = new customTransitionModule.CustomTransition(300, "easeIn");

const navigationEntry = {
    moduleName: "main-page",
    animated: true,
    transition: { instance: customTransition }
};
topmost().navigate(navigationEntry);
```
```TypeScript
import { topmost } from "ui/frame";
import { CustomTransition } from "./custom-transition";
const customTransition = new CustomTransition(300, "easeIn");

const navigationEntry = {
    moduleName: "main-page",
    animated: true,
    transition: { instance: customTransition }
};
topmost().navigate(navigationEntry);
```

### Navigate back

The topmost frame tracks the pages the user has visited in a navigation stack. To go back to a previous page, you need to use the **goBack** method of the topmost frame instance.

``` JavaScript
const topmost = require("ui/frame").topmost;
topmost().goBack();
```
``` TypeScript
import { topmost } from "ui/frame";
topmost().goBack();
```

### Modal pages

Use the **showModal** method of the page class to show another page as a modal dialog. You must specify the location of the modal page module. You can provide a context and a callback function that will be called when the modal page is closed. You can also optionally specify whether to show the modal page in fullscreen or not. To close the modal page, you need to subscribe to its `shownModally` event and store a reference to a close callback function provided through the event arguments. Call this function when you are ready to close the modal page, optionally passing some results to the master page. Here is an example with two pages &mdash; a main page and a login page. The main page shows the login page modally; the user enters their username and password and when ready clicks the Login button. This closes the modal login page and returns the username/password to the main page which can then log the user in.

> **TIP:** By design on iPhone, a modal page appears only in fullscreen.

### Example 14:  Receive data from the modal page.
**main-page**
``` JavaScript
const modalPageModule = "./modal-views-demo/login-page";
const context = "some custom context";
const fullscreen = true;
 
function onPageLoaded(args) {
    const mainPage = args.object;
    mainPage.showModal(modalPageModule, context, (username, password) => {
        // Log the user in...
    }, fullscreen);
}

exports.onLoaded = onLoaded;
```
``` TypeScript
import { EventData } from "data/observable";

const modalPageModule = "./modal-views-demo/login-page";
const context = "some custom context";
const fullscreen = true;

export function onPageLoaded(args: EventData): void {
    const mainPage: Page = <Page>args.object;
    mainPage.showModal(modalPageModule, context, (username: string, password: string) => {
        // Log the user in...
    }, fullscreen);
}
```
>  Note: Only one Modal Page could be opened in the application (For example: opening a Modal Page from another Modal Page is not supported). In case we need to open second Modal, we should close the first one and then to open the second.

**login-page**
``` JavaScript
let context;
let closeCallback;
function onShownModally(args) {
    context = args.context;
    closeCallback = args.closeCallback;
}
exports.onShownModally = onShownModally;
function onLoginButtonTap() {
    closeCallback(usernameTextField.text, passwordTextField.text);
}
exports.onLoginButtonTap = onLoginButtonTap;
```
``` TypeScript
let context: any;
let closeCallback: Function;
export function onShownModally(args: pages.ShownModallyData): void {
    context = args.context;
    closeCallback = args.closeCallback;
}

export function onLoginButtonTap(): void {
    closeCallback(usernameTextField.text, passwordTextField.text);
}
```

You can find the complete source code [here](https://github.com/NativeScript/NativeScript/tree/master/apps/app/ui-tests-app/modal-view).

## Supporting multiple screens
Mobile applications run on different devices with different screen sizes and form factors. NativeScript provides a way to define different files (.js, .css, .xml, etc.) to be loaded based on the screen's size, platform and orientation of the current device. The approach is somewhat similar to [multi screen support in Android](http://developer.android.com/guide/practices/screens_support.html). There is a set of *qualifiers* that can be added inside the file that will be respected when the file is loaded. Here is how the file should look:

`<file-name>[.<qualifier>]*.<extension>`

In the next section we will go trough the list of supported qualifiers.

### Screen size qualifiers
All the values in screen size qualifiers are in density independent pixels(dp) &mdash; meaning it corresponds to the physical dimensions of the screen. The assumptions is that there are ~160 dp per inch. For example, according to Android guidelines, if the device's smaller dimension is more than 600 dp (~3.75 inches) it is probably a tablet.

* `minWH<X>` - The smaller dimension (width or height) should be at least **X** dp.
* `minW<X>` - Width should be at least **X** dp.
* `minH<X>` - Height should be at least **X** dp.

*Example (separate XML file for tablet and phone)*:

* `main-page.minWH600.xml` - XML file to be used for tablet devices.
* `main-page.xml` - XML to be used for phones. 

### Platform qualifiers

* `android` – Android platform
* `ios` – iOS platform
* `windows` (coming soon) – Windows platform

*Example (platform specific files)*:

* `app.android.css` - CSS styles for Android.
* `app.ios.css` - CSS styles for iOS. 

The platform qualifiers are executed during build time, while the others are executed during run time. For example, the app.ios.css file will not be taken in consideration when building for the Android platform. Contrary, the screen size qualifiers will be considered just after the application runs on a device with a specific screen size. 

### Orientation qualifiers
* `land` - orientation is in landscape mode.
* `port` - orientation is in portrait mode.

> Note: All qualifiers are taken into account when the page is loading. However, changing the device orientation will not trigger page reload and will not change the current page.
