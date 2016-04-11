---
title: Application Architecture
description: Learn the basic application structure of NativeScript apps and how to navigate inside your app.
position: 1
slug: architecture
previous_url: /navigation
environment: nativescript
---

# Architecture and Navigation

NativeScript apps consist of pages that represent the separate application screens. Pages are instances of the [`page`]({{site.baseurl}}/ApiReference/ui/page/Page.md) class of the [`Page`]({{site.baseurl}}/ApiReference/ui/page/README.md) module. To navigate between pages, you can use the methods of the [`Frame`]({{site.baseurl}}/ApiReference/ui/frame/Frame.md) class of the [`Frame`]({{site.baseurl}}/ApiReference/ui/frame/README.md) module.

> **TIP:** Instead of multiple pages, you can have a single page with a [tab view]({{site.baseurl}}/ApiReference/ui/tab-view/README.md) and different user interfaces for each tab.


* [Page management](#page-management)
    * [Define page](#define-page)
    * [Set home page](#set-home-page)
* [Navigation](#navigation)
    * [The topmost frame](#the-topmost-frame)
    * [Navigate by page name](#navigate-by-page-name)
    * [Navigate using a function](#navigate-using-a-function)
    * [Navigate and pass context](#navigate-and-pass-context)
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

Pages represent the separate screens of your application. Each page is an instance of the [`page`]({{site.baseurl}}/ApiReference/ui/page/Page.md) class of the [`Page`]({{site.baseurl}}/ApiReference/ui/page/README.md) module. Each class instance inherits the [`content`]({{site.baseurl}}/ApiReference/ui/content-view/ContentView.md) property which holds the root visual element of the UI.

NativeScript provides two approaches to instantiating your pages.

**Create a page in XML**

You can define the UI declaration and the code for the page separately.

To apply this approach, create a `XML` file for each page to hold the layout of the page. Thus your code will be in a `JS` or a `TS` file. The names of the `XML` and the `JS` or `TS` file must match.
<Comment: __Example 1:  Creating sample page in XML.__>

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
import observableModule = require("data/observable");

export function onPageLoaded(args: observableModule.EventData) {
    console.log("Page Loaded");
}
```
**Create a page in code**

To apply this approach, you need to create a function named `createPage` that will return an instance of your page. NativeScript considers `createPage` a factory function.
<Comment: __Example 2:  Creating a page using code.__>
``` JavaScript
var pagesModule = require("ui/page");
var labelModule = require("ui/label");
function createPage() {
    var label = new labelModule.Label();
    label.text = "Hello, world!";
    var page = new pagesModule.Page();
    page.content = label;
    return page;
}
exports.createPage = createPage;
```
``` TypeScript
import pagesModule = require("ui/page");
import labelModule = require("ui/label");

export function createPage() {
    var label = new labelModule.Label();
    label.text = "Hello, world!";
    var page = new pagesModule.Page();
    page.content = label;
    return page;
}
```

### Set home page

Each application must have a single entry point - the home page.

To load the home page for your app, you need to pass `NavigationEntry` with the desired `moduleName` to the start() method. <Comment: Please review my changes to the previous sentence to ensure I did not create a technical error.> NativeScript looks for an XML file with the specified name, parses it and draws the UI described in the file. Afterwards, if NativeScript finds a `JS` or a `TS` file with the same name, it executes the business logic in the file.

``` JavaScript
var application = require("application");
application.start({ moduleName: "main-page" });
```
``` TypeScript
import application = require("application");
application.start({ moduleName: "main-page" });
```

## Navigation

The [`Frame`]({{site.baseurl}}/ApiReference/ui/frame/Frame.md) class represents the logical unit that is responsible for navigation between different pages. Typically, each app has one frame at the root level - the topmost frame.

To navigate between pages, you can use the [`navigate`]({{site.baseurl}}/ApiReference/ui/frame/README.md) method of the topmost frame instance.

In addition, each `Page` instance carries information about the frame object which navigated to it in the `frame` property. This lets you navigate with the `frame` property as well. 


### The topmost frame

The topmost frame is the root-level container for your app's UI and you can use it to navigate inside of your app. You can get a reference to this frame by using the `topmost()` method of the Frame module.


``` JavaScript
var frameModule = require("ui/frame");
var topmost = frameModule.topmost();
```
``` TypeScript
import frameModule = require("ui/frame");
var topmost = frameModule.topmost();
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
<Comment: __Example 3:  How to navigate dinamicly to page created via code.__>
``` JavaScript
var factoryFunc = function () {
    var label = new labelModule.Label();
    label.text = "Hello, world!";
    var page = new pagesModule.Page();
    page.content = label;
    return page;
};
topmost.navigate(factoryFunc);
```
``` TypeScript
var topmost = frameModule.topmost();
var factoryFunc = function () {
    var label = new labelModule.Label();
    label.text = "Hello, world!";
    var page = new pagesModule.Page();
    page.content = label;
    return page;
};
topmost.navigate(factoryFunc);
```

### Navigate and pass context

When you navigate to another page, you can pass context to the page with a [`NavigationEntry`]({{site.baseurl}}/ApiReference/ui/frame/NavigationEntry.md) object. This approach provides finer control over navigation compared to other navigation approaches. For example, with `NavigationEntry` you can also animate the navigation.

<Comment: __Example 4:  How to pass content between different pages.__>
``` JavaScript
var navigationEntry = {
    moduleName: "details-page",
    context: {info: "something you want to pass to your page"},
    animated: false
};
topmost.navigate(navigationEntry);
```
``` TypeScript
var navigationEntry = {
    moduleName: "details-page",
    context: {info: "something you want to pass to your page"},
    animated: false
};
topmost.navigate(navigationEntry);
```

#### Example
<Comment: I suggest you change the previous subhead to something more SEO friendly. You want a customer to use an external search engine to search for the phrase if the example is useful to them.>
In this example, this master-details app consists of two pages. The main page contains a list of entities. The details page shows information about the currently selected entity.

When you navigate to the details page, you transfer a primary key or ID information about the selected entity. 
<Comment: __Example 5:  Navigate to the details page with data content for specific index .__>
``` JavaScript
function listViewItemTap(args) {
    // Navigate to the details page with context set to the data item for specified index
    frames.topmost().navigate({
        moduleName: "cuteness.io/details-page",
        context: appViewModel.redditItems.getItem(args.index)
    });
}
```
``` TypeScript
export function listViewItemTap(args: listView.ItemEventData) {
    // Navigate to the details page with context set to the data item for specified index
    frames.topmost().navigate({
        moduleName: "details-page",
        context: appViewModel.redditItems.getItem(args.index)
    });
}
```

With the **onNavigatedTo** callback, you show the details for the entity.
<Comment: __Example 6:  Showing the content received from previous page.__>
``` JavaScript
function pageNavigatedTo(args) {
    var page = args.object;
    page.bindingContext = page.navigationContext;
}
```
``` TypeScript
// Event handler for Page "navigatedTo" event attached in details-page.xml
export function pageNavigatedTo(args: observable.EventData) {
    // Get the event sender
    var page = <pages.Page>args.object;
    page.bindingContext = page.navigationContext;
}
```

### Navigate without history

You can navigate to a page without adding this navigation to the history. Set the `backstackVisible` property of the [`NavigationEntry`]({{site.baseurl}}/ApiReference/ui/frame/NavigationEntry.md) to `false`. If this property is set to false, then the Page will be displayed, but once navigated from it will not be able to be navigated back to.
<Comment: __Example 7:  Page navigation, without saving navigation history.__>
``` JavaScript
var navigationEntry = {
    moduleName: "login-page",
    backstackVisible: false
};
topmost.navigate(navigationEntry);
```
``` TypeScript
var navigationEntry = {
    moduleName: "login-page",
    backstackVisible: false
};
topmost.navigate(navigationEntry);
```

### Clear history

You can navigate to a new page and decide to completely clear the entire navigation history. Set the `clearHistory` property of the [`NavigationEntry`]({{site.baseurl}}/ApiReference/ui/frame/NavigationEntry.md) to `true`. This will prevent the user from going back to pages previously visited. This is extremely useful if you have a multiple-page authentication process and you want to clear the authentication pages once the user is successfully logged in and redirected to the start page of the application.
<Comment: __Example 8:  Prevent user from going back by setting clearHistory to true.__>
``` JavaScript
var navigationEntry = {
    moduleName: "main-page",
    clearHistory: true
};
topmost.navigate(navigationEntry);
```
``` TypeScript
var navigationEntry = {
    moduleName: "main-page",
    clearHistory: true
};
topmost.navigate(navigationEntry);
```

### Navigation transitions

By default, all navigation will be animated and will use the default transition for the respective platform (UINavigationController transitions for iOS and Fragment transitions for Android). To change the transition type, set the `navigationTransition` property of the [`NavigationEntry`]({{site.baseurl}}/ApiReference/ui/frame/NavigationEntry.md) to an object conforming to the [`NavigationTransition`]({{site.baseurl}}/ApiReference/ui/frame/NavigationTransition.md) interface.

<Comment: __Example 9:  Set up transiton property on page navigation.__>
``` JavaScript
var navigationEntry = {
    moduleName: "main-page",
    animated: true,
    transition: {
        name: "slide",
        duration: 380,
        curve: "easeIn"
    }
};
topmost.navigate(navigationEntry);
```
``` TypeScript
var navigationEntry = {
    moduleName: "main-page",
    animated: true,
    transition: {
        name: "slide",
        duration: 380,
        curve: "easeIn"
    }
};
topmost.navigate(navigationEntry);
```

To use one of the built-in transitions, set the `name` property of the [`NavigationTransition`]({{site.baseurl}}/ApiReference/ui/frame/NavigationTransition.md) to one of the following:
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
 
The `curve` property lets you specify the animation curve of the transition. Possible values are contained in the [AnimationCurve enumeration]({{site.baseurl}}/ApiReference/ui/enums/AnimationCurve/README.md). Alternatively, you can pass an instance of type [`UIViewAnimationCurve`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIView_Class/#//apple_ref/c/tdef/UIViewAnimationCurve) for iOS or [`android.animation.TimeInterpolator`](http://developer.android.com/reference/android/animation/TimeInterpolator.html) for Android. If left undefined, and `easeInOut` curve will be used. 
 
To specify a default transition for **all** frame navigations, set the `transition` property of the frame you are navigating with.

 ``` JavaScript
topmost.transition = { name: "flip" };
topmost.navigate("main-page");
```
``` TypeScript
topmost.transition = { name: "flip" };
topmost.navigate("main-page");
```

To specify a default transition for **all** navigations across the entire app, set the **static** `defaultTransition` property of the `Frame` class.

 ``` JavaScript
var frameModule = require("ui/frame");
frameModule.Frame.defaultTransition = { name: "fade" };
```
``` TypeScript
import frameModule = require("ui/frame");
frameModule.Frame.defaultTransition = { name: "fade" };
```

To specify different transitions for the different platforms use the `transitioniOS` and `transitionAndroid` properties of the [`NavigationEntry`]({{site.baseurl}}/ApiReference/ui/frame/NavigationEntry.md).
<Comment: __Example 10:  Set up platform specific transitions.__>
``` JavaScript
var navigationEntry = {
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
topmost.navigate(navigationEntry);
```
``` TypeScript
var navigationEntry = {
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
topmost.navigate(navigationEntry);
```

### Custom transitions
Instead of setting the `name` property to one of the predefined transitions, you can set the `instance` property of the [`NavigationTransition`]({{site.baseurl}}/ApiReference/ui/frame/NavigationTransition.md) to an instance of a class that inherits from [`Transition`]({{site.baseurl}}/ApiReference/ui/transition/Transition.md). You can create your own custom user-defined transition by writing platform-specific code to animate the transition. To do that you need to inherit from the [`Transition`]({{site.baseurl}}/ApiReference/ui/transition/Transition.md) class and override one method for each platform. Since there will be platform-specific code, you need to separate your code into two separate files. Here is an example of a custom transition that shrinks the disappearing page while exapnding the appearing page by using a scale affine transform.

<Comment: __Example 11:  Create your own custom transition.__>
`custom-transition.android.js/ts`
``` JavaScript
var transition = require("ui/transition");
var floatType = java.lang.Float.class.getField("TYPE").get(null);
var CustomTransition = (function (_super) {
    __extends(CustomTransition, _super);
    function CustomTransition() {
        _super.apply(this, arguments);
    }
    CustomTransition.prototype.createAndroidAnimator = function (transitionType) {
        var scaleValues = java.lang.reflect.Array.newInstance(floatType, 2);
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
        var objectAnimators = java.lang.reflect.Array.newInstance(android.animation.Animator.class, 2);
        objectAnimators[0] = android.animation.ObjectAnimator.ofFloat(null, "scaleX", scaleValues);
        objectAnimators[1] = android.animation.ObjectAnimator.ofFloat(null, "scaleY", scaleValues);
        var animatorSet = new android.animation.AnimatorSet();
        animatorSet.playTogether(objectAnimators);
        var duration = this.getDuration();
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
import transition = require("ui/transition");
import platform = require("platform");

var floatType = java.lang.Float.class.getField("TYPE").get(null);

export class CustomTransition extends transition.Transition {
    public createAndroidAnimator(transitionType: string): android.animation.Animator {
        var scaleValues = java.lang.reflect.Array.newInstance(floatType, 2);
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
        var objectAnimators = java.lang.reflect.Array.newInstance(android.animation.Animator.class, 2);
        objectAnimators[0] = android.animation.ObjectAnimator.ofFloat(null, "scaleX", scaleValues);
        objectAnimators[1] = android.animation.ObjectAnimator.ofFloat(null, "scaleY", scaleValues);
        var animatorSet = new android.animation.AnimatorSet();
        animatorSet.playTogether(objectAnimators);

        var duration = this.getDuration();
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
var transition = require("ui/transition");
var CustomTransition = (function (_super) {
    __extends(CustomTransition, _super);
    function CustomTransition() {
        _super.apply(this, arguments);
    }
    CustomTransition.prototype.animateIOSTransition = function (containerView, fromView, toView, operation, completion) {
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
        var duration = this.getDuration();
        var curve = this.getCurve();
        UIView.animateWithDurationAnimationsCompletion(duration, function () {
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
import transition = require("ui/transition");
import platform = require("platform");

export class CustomTransition extends transition.Transition {
    public animateIOSTransition(containerView: UIView, fromView: UIView, toView: UIView, operation: UINavigationControllerOperation, completion: (finished: boolean) => void): void {
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

        var duration = this.getDuration();
        var curve = this.getCurve();
        UIView.animateWithDurationAnimationsCompletion(duration, () => {
            UIView.setAnimationCurve(curve);
            toView.transform = CGAffineTransformIdentity;
            fromView.transform = CGAffineTransformMakeScale(0, 0);
        }, completion);
    }
}
```

Once you have `custom-transition.android.js/ts` and `custom-transition.ios.js/ts` created, you need to require the module and instantiate your CustomTransition, optionally passing a duration and curve to the constructor.

<Comment: __Example 12:  Require module and instantiate custom transition.__>
```JavaScript
var customTransition = new customTransitionModule.CustomTransition(300, "easeIn");
var navigationEntry = {
    moduleName: "main-page",
    animated: true,
    transition: {instance: customTransition}
};
topmost.navigate(navigationEntry);
```
```TypeScript
var customTransition = new customTransitionModule.CustomTransition(300, "easeIn");
var navigationEntry = {
    moduleName: "main-page",
    animated: true,
    transition: {instance: customTransition}
};
topmost.navigate(navigationEntry);
```

### Navigate back

The topmost frame tracks the pages the user has visited in a navigation stack. To go back to a previous page, you need to use the **goBackMethod** of the topmost frame instance.

``` JavaScript
topmost.goBack();
```
``` TypeScript
topmost.goBack();
```

### Modal pages

Use the **showModal** method of the page class to show another page as a modal dialog. You must specify the location of the modal page module. You can provide a context and a callback function that will be called when the modal page is closed. You can also optionally specify whether to show the modal page in fullscreen or not. To close the modal page, you need to subscribe to its `shownModally` event and store a reference to a close callback function provided through the event arguments. Call this function when you are ready to close the modal page, optionally passing some results to the master page. Here is an example with two pages &mdash; a main page and a login page. The main page shows the login page modally; the user enters their username and password and when ready clicks the Login button. This closes the modal login page and returns the username/password to the main page which can then log the user in.

> **TIP:**By design in iOS, a modal page appears only in fullscreen.

<Comment: __Example 13:  Receiving data from the modal page.__>
**main-page**
``` JavaScript
 var modalPageModule = "./modal-views-demo/login-page";
 var context = "some custom context";
 var fullscreen = true;
 mainPage.showModal(modalPageModule, context, function closeCallback(username, password) {
     // Log the user in...
 }, fullscreen);
```
``` TypeScript
 var modalPageModule = "./modal-views-demo/login-page";
 var context = "some custom context";
 var fullscreen = true;
 mainPage.showModal(modalPageModule, context, function closeCallback (username: string, password: string) {
     // Log the user in...
 }, fullscreen);
```

**login-page**
``` JavaScript
var context;
var closeCallback;
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
var context: any;
var closeCallback: Function;
export function onShownModally(args: pages.ShownModallyData) {
    context = args.context;
    closeCallback = args.closeCallback;
}

export function onLoginButtonTap() {
    closeCallback(usernameTextField.text, passwordTextField.text);
}
```

You can find th ecomplete source code [here](https://github.com/NativeScript/NativeScript/tree/master/apps/modal-views-demo).

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

The platform qualifiers are executed during build time, while the others are executed during run time. For example, the app.ios.css file will not be taken in consideration when building for the Android platform. Contrary, the screen size qualifiers will be considered just after the application runs on a device with a specific screen size. <Comment: I do not understand using Contrary at the beginning of the sentence. Do you mean "On the contrary" which is similar to saying However?>

### Orientation qualifiers
* `land` - orientation is in landscape mode.
* `port` - orientation is in portrait mode.

> Note: All qualifiers are taken into account when the page is loading. However, changing the device orientation will not trigger page reload and will not change the current page.
