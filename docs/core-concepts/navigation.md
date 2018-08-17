---
title: Architecture and Navigation
description: Learn the basic application structure of NativeScript apps and how to navigate inside your app.
position: 20
slug: architecture
previous_url: /navigation
environment: nativescript
---

# Architecture and Navigation


## Page management

NativeScript applications consist of pages that represent the separate application screens.

Pages are instances of the `Page` class of the `tns-core-modules/ui/page` module. To navigate between pages, you can use the methods of the `Frame` class and the related methods of the `tns-core-modules/ui/frame` module.

> **TIP:** Instead of multiple pages, you can have a single page with a [tab view](http://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview.html) and different user interfaces for each tab.

### Define page

Pages represent the separate screens of your application. Each page is an instance of the [`page`](http://docs.nativescript.org/api-reference/classes/_ui_page_.page.html) class of the [`Page`](http://docs.nativescript.org/api-reference/classes/_ui_page_.page.html) module. Each class instance inherits the [`content`](http://docs.nativescript.org/api-reference/classes/_ui_content_view_.contentview.html) property which holds the root visual element of the UI.

NativeScript provides two approaches to instantiating your pages.

#### Create a page in XML

You can define the UI declaration and the code for the page separately.

To apply this approach, create an `XML` file for each page to hold the layout of the page. Thus your code will be in a `JS` or a `TS` file. The names of the `XML` and the `JS` or `TS` file must match.
``` XML
<!-- main-page.xml-->
<Page loaded="onPageLoaded">
    <!-- Each page can have only a single root view -->
    <StackLayout>
        <!-- content here -->
        <Label text="Hello, world!"/>
    </StackLayout>
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

#### Create a page in code

To apply this approach, you need to create a function named `createPage` that will return an instance of your page. NativeScript considers `createPage` a factory function.
``` JavaScript
const Page = require("tns-core-modules/ui/page").Page;
const Label = require("tns-core-modules/ui/label").Label;
const StackLayout = require("tns-core-modules/ui/layouts/stack-layout").StackLayout;

function createPage() {
    const stack = new StackLayout();
    const label = new Label();
    label.text = "Hello, world!";
    stack.addChild(label);

    const page = new Page();
    // Each page can have a single root view set via the content property
    page.content = stack;
    return page;
}
exports.createPage = createPage;
```
``` TypeScript
import { Page } from "tns-core-modules/ui/page";
import { Label } from "tns-core-modules/ui/label";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

export function createPage(): Page {
    const stack = new StackLayout();
    const label = new Label();
    label.text = "Hello, world!";
    stack.addChild(label);

    const page = new Page();
    // Each page can have a single root view set via the content property
    page.content = label;
    return page;
}
```

### Set home page

Each application must have a single entry point. To load the entry point for your app, you need to pass `NavigationEntry` with the desired `moduleName` to the `run` method.  NativeScript looks for an XML file with the specified name, parses it and draws the UI described in the file. Afterward, if NativeScript finds a `JS` or a `TS` file with the same name, it executes the business logic in the file.


In the example below, the entry point is `app-root.xml`. The `app-root.xml` is using a `Frame` element and via its `defaultPage` property is navigating by default to `home/home-page.xml`.
``` JavaScript
// app.js
const application = require("application");
application.run({ moduleName: "app-root" });
```
``` TypeScript
// app.ts
import * as application from "application";
application.run({ moduleName: "app-root" });
```
```XML
<!-- app-root.xml -->
<Frame defaultPage="home/home-page" />
```
```XML
<!-- home/home-page.xml -->
<Page class="page">
    <StackLayout>
        <!-- content here-->
        <Label text="Hooray! Home Page loaded!"/>
    </StackLayout>
</Page>
```

> **Important:** Before NativeScript 4.0.0 the `start` method automatically created an underlying root `Frame` instance and wrapped your page. The new `run` method will set up the root element of the provided module as application root element. This effectively means that apart from `Page` you can now have other roots of your app like `TabView` and `SideDrawer`. The `start` is now marked as deprecated.

Example for `TabView` as root in `app-root.xml`.
```XML
<!-- app-root.xml -->
<TabView androidTabsPosition="bottom">
    <TabViewItem title="First">
        <Frame defaultPage="home/home-page" />
    </TabViewItem>
    <TabViewItem title="Second">
        <Frame defaultPage="second/second-page" />
    </TabViewItem>
</TabView>
```

Example for `GridLayout` as root in `app-root.xml`.
```XML
<!-- app-root.xml -->
<GridLayout rows="*, 2*">
    <StackLayout row="0" backgroundColor="green">
        <!-- Static content goes here -->
    <StackLayout/>
    <StackLayout row="1">
        <Frame defaultPage="home/home-page"/>
    </StackLayout>
</GridLayout>
```

## Navigation

The [`Frame`](http://docs.nativescript.org/api-reference/classes/_ui_frame_.frame.html) class represents the logical unit that is responsible for navigation between different pages. An application can have single or multiple `Frame` instances depending on the business logic and requirements. 

### Getting Frame Reference

The navigation in NativeScript is based on the `Frame` API and using `navigate` method of the wanted frame.
To get a reference to the `Frame` instance you need use the following methods or properties:

- the [`topmost`](https://docs.nativescript.org/api-reference/modules/_ui_frame_#topmost) method from the `tns-core-modules/ui/frame` module. The  method returns the last navigated `Frame` instance or in case you are in a `TabView`, the currently selected tab item's `Frame` instance. For more complex cases or more control, you should use methods like `getFrameById` or the `frame` property of `Page` class.
``` JavaScript
const frameModule = require("tns-core-modules/ui/frame");
const topmostFrame = frameModule.topmost();
```
``` TypeScript
import { Frame, topmost } from "tns-core-modules/ui/frame";
const topmostFrame: Frame = topmost();
```

- the [`getFrameById`](https://docs.nativescript.org/api-reference/modules/_ui_frame_#getFrameById) method from the `tns-core-modules/ui/frame` module. This method allows you to get a reference to a `Frame` by a **id** that you specified on the element. Note that this searches for already navigated frames and won't find frames that are not yet displayed like in a modal view for example.

``` JavaScript
const frameModule = require("tns-core-modules/ui/frame");
const firstFrame = frameModule.getFrameById("firstFrame");
```
``` TypeScript
import { Frame, getFrameById } from "tns-core-modules/ui/frame";
const firstFrame: Frame = getFrameById("firstFrame");
```
```XML
<TabView>
    <TabViewItem title="First">
        <Frame id="firstFrame" defaultPage="home/home-page" />
    </TabViewItem>
    <TabViewItem title="Second">
        <Frame id="secondFrame" defaultPage="second/second-page" />
    </TabViewItem>
</TabView>

```

- the `frame` property of [`Page`](https://docs.nativescript.org/api-reference/classes/_ui_page_.page) instance. Each `Page` instance carries information about the frame object which navigated to it in the `frame`  property. This lets you navigate with the `frame` property as well. 

```JavaScript
const Button = require("tns-core-modules/ui/button").Button;
const Page = require("tns-core-modules/ui/page").Page;

function onTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("second/second-page");
}
exports.onTap = onTap;
```
```TypeScript
import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";

export function onTap(args) {
    const button: Button = args.object;
    const page: Page = button.page;
    page.frame.navigate("second/second-page");
}
```

> **Note** We can get a reference to a `Frame` only for a frame that has been already loaded in the visual tree. Frames that are not still loaded (for example a `Frame` within a modal page that is not yet opened) can not be retrieved. 

### Basic navigation

To load a default (initial) page in your application use the `defaultPage` property of the `Frame` element.
With the example below the applicaiton will load a page located in `<project-folder>/app/home/home-page.xml`
```XML
<!-- app-root.xml -->
<Frame defaultPage="home/home-page"/>
```

To navigate between pages, you can use the [`navigate`](http://docs.nativescript.org/api-reference/classes/_ui_frame_.frame#navigate) method of the desired `Frame` instance.

``` JavaScript
// e.g. home/home-page.js
const frameModule = require("tns-core-modules/ui/frame");

// Example using `getFrameById(frameId)` to get a `Frame` reference
// As an alternative, we could use `topmost()` method or `page.frame` property
const frame = frameModule.getFrameById("firstFrame");
frame.navigate("second/second-page");
```
``` TypeScript
// e.g. home/home-page.ts
import { getFrameById } from "tns-core-modules/ui/frame";

// Example using `getFrameById(frameId)` to get a `Frame` reference
// As an alternative, we could use `topmost()` method or `page.frame` property
const frame = getFrameById("firstFrame");
frame.navigate("second/second-page");
```
```XML
<!-- app-root.xml -->
<Frame id="firstFrame" defaultPage="home/home-page"/>
```

There are several ways to perform a navigation; which one you use depends on the needs of your app.

### Navigate by page name

Perhaps the simplest way to navigate is by specifying the file name of the page to which you want to navigate.

``` JavaScript
frame.navigate("details-page");
```
``` TypeScript
frame.navigate("details-page");
```

### Navigate using a function

A more dynamic way of navigating can be done by providing a function that returns the instance of the page to which you want to navigate.

``` JavaScript
const Page = require("tns-core-modules/ui/page").Page;
const StackLayout = require("tns-core-modules/ui/layouts/stack-layout").StackLayout;
const Label = require("tns-core-modules/ui/label").Label;
const getFrameById = require("tns-core-modules/ui/frame").getFrameById;

const frame = getFrameById("firstFrame");
frame.navigate({ 
    create: () => {
        const stack = new StackLayout();
        const label = new Label();
        label.text = "Hello, world!";
        stack.addChild(label);

        const page = new Page();
        page.content = stack;
        return page;
    }
});
```
``` TypeScript
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Label } from "tns-core-modules/ui/label";
import { getFrameById } from "tns-core-modules/ui/frame";

const frame = getFrameById("firstFrame");
frame.navigate({ 
    create: () => {
        const stack = new StackLayout();
        const label = new Label();
        label.text = "Hello, world!";
        stack.addChild(label);

        const page = new Page();
        page.content = stack;
        return page;
    }
});
```

### Navigate and pass context

When you navigate to another page, you can pass context to the page with a [`NavigationEntry`](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry.html) object. This approach provides finer control over navigation compared to other navigation approaches. For example, with `NavigationEntry` you can also animate the navigation.

``` JavaScript
const getFrameById = require("tns-core-modules/ui/frame").getFrameById;

const navigationEntry = {
    moduleName: "details-page",
    context: { info: "something you want to pass to your page" },
    animated: false
};
const frame = getFrameById("firstFrame");
frame.navigate(navigationEntry);
```
``` TypeScript
import { getFrameById } from "tns-core-modules/ui/frame";

const navigationEntry = {
    moduleName: "details-page",
    context: { info: "something you want to pass to your page" },
    animated: false
};
const frame = getFrameById("firstFrame");
frame.navigate(navigationEntry);
```

#### Retrieve context

After your context is sent to the landing page (following the previous example the `details-page`), you can retrieve the context via the `navigationContext` property of your `Page` instance.

``` JavaScript
// details-page.js
function pageNavigatedTo(args) {
    const page = args.object;
    // You can access `info` property from the navigationEntry
    const context = page.navigationContext;
}
exports.pageNavigatedTo = pageNavigatedTo;
```
``` TypeScript
// details-page.ts
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

// Event handler for Page "navigatedTo" event attached in details-page.xml e.g.
export function pageNavigatedTo(args: EventData): void {
    const page: Page = <Page>args.object;
    // You can access `info` property from the navigationEntry
    const context: any = page.navigationContext;
}
```

### Navigate and set bindingContext to the page

While you are navigating, you could set `bindingContext` to a page. The following example shows how to provide `bindingContext` automatically while navigating to a page.

```JavaScript
const getFrameById = require("tns-core-modules/ui/frame").getFrameById;
const mainViewModel = require("./main-view-model");
// Navigate to page called “my-page” and provide "bindingContext"
const frame = getFrameById("firstFrame");
frame.navigate({ 
  moduleName: "my-page", 
  bindingContext: new mainViewModel.HelloWorldModel() 
});
```
```TypeScript
import { getFrameById } from "tns-core-modules/ui/frame";
import { HelloWorldModel } from "./main-view-model"
// Navigate to page called “my-page” and provide "bindingContext"
const frame = getFrameById("firstFrame");
frame.navigate({
  moduleName: "my-page", 
  bindingContext: new HelloWorldModel()
});
```

#### Master-details example

In this example, this master-details app consists of two pages. The main page contains a list of entities. The details page shows information about the currently selected entity.
When you navigate to the details page, you transfer a primary key or ID information about the selected entity. The following example shows how to navigate to the details page and pass the content for the selected item.
``` JavaScript
const getFrameById = require("tns-core-modules/ui/frame").getFrameById;

function listViewItemTap(args) {
    // Navigate to the details page with context set to the data item for specified index
    const frame = getFrameById("firstFrame");
    frame.navigate({
        moduleName: "cuteness.io/details-page",
        context: appViewModel.redditItems.getItem(args.index)
    });
}
exports.listViewItemTap = listViewItemTap;
```
``` TypeScript
import { getFrameById } from "tns-core-modules/ui/frame";
import { ItemEventData } from "tns-core-modules/ui/list-view";

export function listViewItemTap(args: ItemEventData): void {
    // Navigate to the details page with context set to the data item for specified index
    const frame = getFrameById("firstFrame");
    frame.navigate({
        moduleName: "details-page",
        context: appViewModel.redditItems.getItem(args.index)
    });
}
```

With the **onNavigatedTo** callback, you show the details for the entity.
``` JavaScript
// Event handler for Page "navigatedTo" event attached in details-page.xml e.g.
function pageNavigatedTo(args) {
    const page = args.object;
    // Bind the context received from main page.
    page.bindingContext = page.navigationContext;
}
exports.pageNavigatedTo = pageNavigatedTo;
```
``` TypeScript
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

// Event handler for Page "navigatedTo" event attached in details-page.xml
export function pageNavigatedTo(args: EventData): void {
    // Get the event sender
    const page: Page = <Page>args.object;
    page.bindingContext = page.navigationContext;
}
```

### Navigate without history

You can navigate to a page without adding this navigation to the history. Set the `backstackVisible` property of the [`NavigationEntry`](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry.html) to `false`. If this property is set to false, then the Page will be displayed, but once navigated from it will not be able to be navigated back to.
``` JavaScript
const getFrameById = require("tns-core-modules/ui/frame").getFrameById;

const navigationEntry = {
    moduleName: "login-page",
    // Page navigation, without saving navigation history.
    backstackVisible: false
};
const frame = getFrameById("firstFrame");
frame.navigate(navigationEntry);
```
``` TypeScript
import { getFrameById } from "tns-core-modules/ui/frame";

const navigationEntry = {
    moduleName: "login-page",
    // Page navigation, without saving navigation history.
    backstackVisible: false
};
const frame = getFrameById("firstFrame");
frame.navigate(navigationEntry);
```

### Clear history

You can navigate to a new page and decide to completely clear the entire navigation history. Set the `clearHistory` property of the [`NavigationEntry`](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry.html) to `true`. This will prevent the user from going back to pages previously visited. This is extremely useful if you have a multiple-page authentication process and you want to clear the authentication pages once the user is successfully logged in and redirected to the start page of the application.
``` JavaScript
const getFrameById = require("tns-core-modules/ui/frame").getFrameById;

const navigationEntry = {
    moduleName: "main-page",
    // Prevent user from going back using `clearHistory` property.
    clearHistory: true
};
const frame = getFrameById("firstFrame");
frame.navigate(navigationEntry);
```
``` TypeScript
import { getFrameById } from "tns-core-modules/ui/frame";

const navigationEntry = {
    moduleName: "main-page",
    // Prevent user from going back using `clearHistory` property.
    clearHistory: true
};
const frame = getFrameById("firstFrame");
frame.navigate(navigationEntry);
```

### Navigation transitions

By default, all navigation will be animated and will use the default transition for the respective platform (UINavigationController transitions for iOS and Fragment transitions for Android). To change the transition type, set the `navigationTransition` property of the [`NavigationEntry`](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry.html) to an object conforming to the [`NavigationTransition`](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition.html) interface.
``` JavaScript
const getFrameById = require("ui/frame").getFrameById;

const navigationEntry = {
    moduleName: "main-page",
    animated: true,
    // Set up a transition property on page navigation.
    transition: {
        name: "slide",
        duration: 380,
        curve: "easeIn"
    }
};
const frame = getFrameById("firstFrame");
frame.navigate(navigationEntry);
```
``` TypeScript
import { getFrameById } from "ui/frame";

const navigationEntry = {
    moduleName: "main-page",
    animated: true,
    // Set up a transition property on page navigation.
    transition: {
        name: "slide",
        duration: 380,
        curve: "easeIn"
    }
};
const frame = getFrameById("firstFrame");
frame.navigate(navigationEntry);
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
const getFrameById = require("tns-core-modules/ui/frame").getFrameById;
const frame = getFrameById("firstFrame");
frame.transition = { name: "flip" };
frame.navigate("main-page");
```
``` TypeScript
import { getFrameById } from "tns-core-modules/ui/frame";
const frame = getFrameById("firstFrame");
frame.transition = { name: "flip" };
frame.navigate("main-page");
```

To specify a default transition for **all** navigations across the entire app, set the **static** `defaultTransition` property of the `Frame` class.

 ``` JavaScript
const frameModule = require("tns-core-modules/ui/frame");
frameModule.Frame.defaultTransition = { name: "fade" };
```
``` TypeScript
import { Frame } from "tns-core-modules/ui/frame";
Frame.defaultTransition = { name: "fade" };
```

To specify different transitions for the different platforms use the `transitioniOS` and `transitionAndroid` properties of the [`NavigationEntry`](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationentry.html).
``` JavaScript
const topmost = require("tns-core-modules/ui/frame").topmost;

const navigationEntry = {
    moduleName: "main-page",
    animated: true,
    // Set up platform specific transitions.
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
const frame = topmost();
frame.navigate(navigationEntry);
```
``` TypeScript
import { topmost } from "tns-core-modules/ui/frame";

const navigationEntry = {
    moduleName: "main-page",
    animated: true,
    // Set up platform specific transitions.
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
const frame = topmost();
frame.navigate(navigationEntry);
```

### Custom transitions
Instead of setting the `name` property to one of the predefined transitions, you can set the `instance` property of the [`NavigationTransition`](http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition.html) to an instance of a class that inherits from [`Transition`](http://docs.nativescript.org/api-reference/classes/_ui_transition_.transition.html). You can create your custom user-defined transition by writing platform-specific code to animate the transition. To do that you need to inherit from the [`Transition`](http://docs.nativescript.org/api-reference/classes/_ui_transition_.transition.html) class and override one method for each platform. Since there will be platform-specific code, you need to separate your code into two separate files. Here is an example of a custom transition that shrinks the disappearing page while expanding the appearing page by using a scale affine transform.

>  **NOTE**: The following example uses native APIs. When using TypeScript, you need to add a dev dependency to the `tns-platform-declarations` package to use these native APIs without compiler errors. For more information, see the [Intellisense and access to native APIs via TypeScript](./accessing-native-apis-with-javascript.md) section.

`custom-transition.android.js/ts`
``` JavaScript
const transition = require("tns-core-modules/ui/transition");
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
const transition = require("tns-core-modules/ui/transition");
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

> **TIP**: Consider creating the following `custom-transition.d.ts` file next to your `custom-transition.android.ts` and `custom-transition.ios.ts` files in TypeScript projects.

```TypeScript
//  Require the module and instantiate your custom transition.
import { Transition } from "tns-core-modules/ui/transition";
export class CustomTransition extends Transition {
}
```

```JavaScript
//  Require the module and instantiate your custom transition.
const topmost = require("tns-core-modules/ui/frame").topmost;
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
import { topmost } from "tns-core-modules/ui/frame";
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

Each frame tracks the pages the user has visited in a navigation stack. To go back to a previous page, you need to use the **goBack** method of the topmost frame instance.

``` JavaScript
const topmost = require("ui/frame").topmost;
topmost().goBack();
```
``` TypeScript
import { topmost } from "ui/frame";
topmost().goBack();
```

### Modal pages

Use the [`showModal`](https://docs.nativescript.org/api-reference/classes/_ui_layouts_grid_layout_.gridlayout#showmodal) method of the `View` class to show another view as a modal dialog. You must specify the location of the modal page module. You can provide a context and a callback function that will be called when the modal page is closed. You can also optionally specify whether to show the modal page in fullscreen or not. To close the modal page, you need to subscribe to its [`shownModally`](https://docs.nativescript.org/api-reference/classes/_ui_layouts_grid_layout_.gridlayout#shownmodallyevent) event and store a reference to a close callback function provided by the event arguments. Call this function when you are ready to close the modal page, optionally passing some results to the master page. Here is an example with two pages &mdash; the main page and a login page. The main page shows the login page modally; the user enters their username and password and when ready clicks the Login button. This closes the modal login page and returns the username/password to the main page which can then log the user in.

> **TIP:** By design on iPhone, a modal page appears only in fullscreen.

**main-page**
``` JavaScript
const modalPageModule = "./modal-views-demo/login-page";
const context = "some custom context";
const fullscreen = true;
 
function onLoaded(args) {
    const mainView = args.object;
    mainView.showModal(modalPageModule, context, (username, password) => {
        // Receive data from the modal page. e.g. username & password
    }, fullscreen);
}
exports.onLoaded = onLoaded;
```
``` TypeScript
import { EventData } from "tns-core-modules/data/observable";

const modalPageModule = "./modal-views-demo/login-page";
const context = "some custom context";
const fullscreen = true;

export function onPageLoaded(args: EventData) {
    const mainPage = <Page>args.object;
    mainPage.showModal(modalPageModule, context, (username: string, password: string) => {
        // Receive data from the modal page. e.g. username & password
    }, fullscreen);
}
```
>  Note: With version 4.0.0 of NativeScript, opening a Modal Page from another Modal Page is officially supported. The previous versions of NativeScript supported only a single Modal page.

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

#### Navigation in modal pages

With NativeScript version 4.0.0 and above, we can navigate within a modal page. We need a root frame defaulting to our first modal page. With the `Frame` instance, we can navigate within the modal and with the help of [`closeModal`](https://docs.nativescript.org/api-reference/classes/_ui_core_view_base_.viewbase#closemodal) method, we can close the modal from any `View` instance.

**main-page**
``` JavaScript
const context = "some context";

function onLoaded(args) {
    const mainView = args.object;
    mainView.showModal("./modal-root", context, () => {});
}
exports.onLoaded = onLoaded;
```
``` TypeScript
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

const context = "some  context";

export function onPageLoaded(args: EventData) {
    const mainPage = <Page>args.object;
    mainPage.showModal("./modal-root", context, () => { });
}
```


**modal-root.xml**
```XML
<Frame defaultPage="first-modal-page"/>
```

**first-modal-page.xml**
```JavaScript
function onNavigate(args) {
    const view = args.object;
    const page = view.page;
    page.frame.navigate("second-modal-page");
}
exports.onNavigate = onNavigate;

function onShowingModally(args) {
    console.log("onShowingModally");
}
exports.onShowingModally = onShowingModally;
```
```TypeScript
export function onNavigate(args: EventData) {
    const view = args.object as View;
    const page = view.page as Page;
    page.frame.navigate("second-modal-page");
}

export function onShowingModally(args: ShownModallyData) {
    console.log("onShowingModally");
}
```
```XML
<Page backgroundColor="green" showingModally="onShowingModally" loaded="onLoaded">
    <StackLayout backgroundColor="lightGreen">
        <Button text="Navigate To Second Page" tap="onNavigate"/>
    </StackLayout>
</Page>
```

**second-modal-pag.xml**
```JavaScript
function onGoBack(args) {
    const view = args.object;
    const page = view.page;

    page.frame.goBack();
}
exports.onGoBack = onGoBack;

function onCloseModal(args) {
    args.object.closeModal();
}
exports.onCloseModal = onCloseModal;
```
```TypeScript
import { Page } from "tns-core-modules/ui/page";
import { View, EventData } from "tns-core-modules/ui/core/view";

export function onGoBack(args: EventData) {
    const view = args.object as View;
    const page = view.page as Page;
    page.frame.goBack();
}

export function onCloseModal(args: EventData) {
    (args.object as View).closeModal();
}
```
```XML
<Page class="page">
    <StackLayout>
        <Label text="Second Page"/>
        <Button text="Navigate Back" tap="onGoBack"/>
        <Button text="Close Modal" tap="onCloseModal"/>
    </StackLayout>
</Page>
```


## Supporting multiple screens
Mobile applications are running on different devices with different screen sizes and form factors. NativeScript provides a way to define different files (.js, .css, .xml, etc.) to be loaded based on the screen's size, platform and orientation of the current device. The approach is somewhat similar to [multi screen support in Android](http://developer.android.com/guide/practices/screens_support.html). There is a set of *qualifiers* that can be added inside the file that will be respected when the file is loaded. Here is how the file should look:

`<file-name>[.<qualifier>]*.<extension>`

In the next section, we will go through the list of supported qualifiers.

### Screen size qualifiers
All the values in screen size qualifiers are in density independent pixels(DP) &mdash; meaning it corresponds to the physical dimensions of the screen. The assumptions are that there are ~160 DP per inch. For example, according to Android guidelines, if the device's smaller dimension is more than 600 dp (~3.75 inches), it is probably a tablet.

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

The platform qualifiers are executed during build time, while the others are executed during runtime. For example, the app.ios.css file will not be taken into consideration when building for the Android platform. Contrary, the screen size qualifiers will be considered just after the application runs on a device with specific screen size. 

### Orientation qualifiers
* `land` - orientation is in landscape mode.
* `port` - orientation is in portrait mode.

> Note: All qualifiers are taken into account when the page is loading. However, changing the device orientation will not trigger a page reload and will not change the current page.

## Navigation events
NativeScript provides several events(`navigatingTo`, `navigatedFrom`,`navigatedTo`,`navigatingFrom`), which are fired on the `Page` instances while navigating forward or backwards. We can register event handlers for the needed event while using the `Page` element. To do that we should set up the event name and the callback method. For example:

```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd" navigatingTo="onNavigatingTo" navigatedFrom="onNavigatedFrom" navigatedTo="onNavigatedTo" navigatingFrom="onNavigatingFrom" class="page">

    <Page.actionBar>
        <ActionBar title="My App" icon="" class="action-bar">
        </ActionBar>
    </Page.actionBar>

    <StackLayout class="p-20">
        <Label text="Tap the button" class="h1 text-center"/>
        <Button text="TAP" tap="onTap" class="btn btn-primary btn-active"/>
        <Label text="{{ message }}" class="h2 text-center" textWrap="true"/>
    </StackLayout>
</Page>
```
```TypeScript
import { Page } from 'ui/page';

export function onNavigatingTo(args) {
    let page = <Page>args.object;
    console.log("navigatingTo")
}
```
```JavaScript
function onNavigatingTo(args) {
    var page = args.object;
    console.log("navigatingTo");
}
exports.onNavigatingTo = onNavigatingTo;
```
The event names themselves should be self explanatory, but it's important to point that they are fired on different `Page` instances and at different times. We can classify the navigation events in two groups:

* To/From - The "To" events are fired on the page that is about to be navigated to, while the "From" events are fired on the page that is navigated away.
* navigating/navigated - The "navigating" events are fired before the actual visible navigation is made, while the "navigated" events are fired once the navigation is finished.

Below, we will review in more detail the order, in which the events are fired.

### On application startup

On startup of the application there is no "from" page, so only the `navigatingTo` and `navigatedTo` events are fired on the first page. The events will be executed in the following order:
1. `navigatingTo`
2. `navigatedTo` 

### On navigation

We will review the following scenario. We have an app with two pages: MainPage and DetailedPage.

#### Forward navigation

When we make forward navigation via `topmost().navigate('<page name>')` method from MainPage to DetailedPage the events will be fired in the following order:

![navigation-events-forward](../img/navigation/navigation-events-forward.png?raw=true)

#### Backward navigation

When we make backward navigation while tapping on the back button the events will be fired as follows:

![navigation-events-backwards](../img/navigation/navigation-events-backwards.png?raw=true)

> With the `navigatingTo` and `navigatedTo`, we can access also `isBackNavigation` property(e.g. `navigatedFrom(args){ console.log("Is back navigation " + args.isBackNavigation); }`). The property will return boolean value. The returned value will be `false`, while maing forward navigation and `true` on back navigation.

## UI component's events
The UI components support several events in NativeScript: `loaded`, `layoutChanged` and `unloaded`. They can be set up on every element, and in the description below we will review their specifics.

### loaded 
Component's loaded event will be fired in NativeScript when the native Android or iOS instance of the element is created. While firing the event, the component will still not be rendered, which makes it the perfect place for adding some further configurations to the ui component.

```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
    <StackLayout class="p-20">
        <Button loaded="onLoaded" text="TAP" class="btn btn-primary btn-active"/>
    </StackLayout>
</Page>

```
```TypeScript
import { Button } from "tns-core-modules/ui/button";

export function onLoaded(args){
    let btn:Button = <Button>args.object;
    btn.on(Button.tapEvent, (arg)=>{
        alert("Button tapEvent");
    })
}
```
```JavaScript
var buttonModule = require("tns-core-modules/ui/button");

function onLoaded(args) {
    var btn = args.object;
    btn.on(buttonModule.Button.tapEvent, function (arg) {
        alert("Button tapEvent");
    });
}
exports.onLoaded = onLoaded;
```

### layoutChanged
The layoutChanged event will be fired when the UI component layout is set up. We can set a listener for this event to every UI element in NativeScript. This gives us an option to collect some information about the component after completing the layouting. (e.g. taking the component actual width and height).

```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
    <StackLayout layoutChanged="onLayoutChanged" class="p-20">
        <!-- ......  -->
    </StackLayout>
</Page>

```
```TypeScript
import {StackLayout} from "ui/layouts/stack-layout";

export function onLayoutChanged(args){
    let layout:StackLayout = <StackLayout>args.object;
    console.log("StackLayout - actual width: "+layout.getActualSize().width);
    console.log("StackLayout - actual height: "+layout.getActualSize().height);
}
```
```JavaScript
function onLayoutChanged(args) {
    var layout = args.object;
    console.log("StackLayout - actual width: " + layout.getActualSize().width);
    console.log("StackLayout - actual height: " + layout.getActualSize().height);
}
exports.onLayoutChanged = onLayoutChanged;
```

### unloaded
The unloaded event is fired when the UI component is no longer visible on the screen. This event will be fired when making backwards navigation from Detailed page to Mane page (`unloeded` will be fired for each UI component in the Detailed page) or when we suspend the app (in this case, `unloaded` will be fired for every UI element from the current page). Unloaded event is a perfect place, for example, when we need to unbind some specific event listener.

```XML
<Page xmlns="http://www.nativescript.org/tns.xsd">
    <StackLayout >
        <Button text="TAP" loaded="onLoaded" unloaded="onUnloaded" />
    </StackLayout>
</Page>
```
```TypeScript
import { Button } from "tns-core-modules/ui/button";

export function onLoaded(args){
    let btn:Button = <Button> args.object;
    btn.on(Button.tapEvent, (arg)=>{
        alert("on tap");
    })
}

export function onUnloaded(args){
    let btn:Button = <Button> args.object;
    btn.off(Button.tapEvent);
}
```
```JavaScript
var buttonModule = require("tns-core-modules/ui/button");

function onLoaded(args) {
    var btn = args.object;
    btn.on(buttonModule.Button.tapEvent, function (arg) {
        alert("on tap");
    });
}
exports.onLoaded = onLoaded;

function onUnloaded(args) {
    var btn = args.object;
    btn.off(buttonModule.Button.tapEvent);
}
exports.onUnloaded = onUnloaded;
```
