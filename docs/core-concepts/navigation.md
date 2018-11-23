---
title: Navigation
description: Learn how to configure navigation between pages, work with page context and data binding, navigate in modals, navigate back and configure navigation transitions 
position: 42
slug: architecture
previous_url: /navigation
environment: nativescript
---

# Navigation

Navigation refers to the act of moving around the screens of your application. Each mobile app has its own unique navigation schema based on the information it tries to present. The schema below is an example of a common mobile navigation scenario.

![navigation-schema](../img/navigation/navigation-schema.png?raw=true)

Based on the schema, there are three distinct navigational directions a user can move in:
* Forward - refers to navigating to a screen on the next level in the hierarchy.
* Backward - refers to navigating back to a screen either on the previous level in the hierarchy or chronologically.
* Lateral - refers to navigating between screens on the same level in the hierarchy.

This article demonstrates how you can implement these in NativeScript and combine them to build the navigation architecture of your application.

## Forward Navigation

![navigation-schema-forward](../img/navigation/navigation-schema-forward.png?raw=true)

Can be also called downward navigation since you are going down in your navigation hierarchy. There are two navigation components in NativeScript that enable implementing forward navigation - `Frame` and `Page`. A `Frame` represents a navigation controller that navigates through `Page` instances.

![navigation-diagram-forward](../img/navigation/navigation-diagram-forward.png?raw=true)

### Page

The `Page` is NativeScript's most basic navigation component. It represents a screen that the user can navigate to. This component serves two important roles. It holds the UI components of a single screen and provides navigation lifecycle events. For complete information regarding the `Page` component, check out its dedicated [article]({%slug page%}).

By design, a `Page` can't be declared as a child of another component. It is used as a root component of a module, in which case the module becomes a page module. Here is an example of how you can implement the `item-page` module from the diagram above:

``` XML
<!-- item-page.xml-->
<Page loaded="onPageLoaded">
    <!-- Each page can have only a single root view -->
    <StackLayout>
        <Label text="Item Details"/>
    </StackLayout>
</Page>
```
``` JavaScript
// item-page.js
function onPageLoaded(args) {
    console.log("Page Loaded");
}
exports.onPageLoaded = onPageLoaded;
```
``` TypeScript
// item-page.ts
import { EventData } from "tns-core-modules/data/observable";

export function onPageLoaded(args: EventData): void {
    console.log("Page Loaded");
}
```

### Frame

To display a `Page` on the screen, you need to navigate to it using the `Frame` component. This component is the main provider of forward and backward navigation in NativeScript. The `Frame` component has no visible representation. It simply provides a container for transitions between pages. It also provides a navigation API which includes history manipulation and setting custom navigation transitions. For more information on the `Frame` component and its API, visit this [article]({%slug frame%}).

For the most basic forward navigation scenario, you need only these two features:

* defaultPage attribute - use this attribute to declare the initial page module that is displayed.
* [navigate()](https://docs.nativescript.org/api-reference/classes/_ui_frame_.frame#navigate) method - use this method to force a navigation to another page module. 

The following example demonstrates the implementation of the rest of the forward navigation diagram above. There is a `Frame` declared as root component in the `app-root` module. Upon load, the `Frame` will automatically navigate to the `featured-page` module. The `featured-page` module in turn has a button that navigates to the `item-page` module.

```XML
<!-- app-root.xml -->
<Frame id="featured" defaultPage="featured-page" />
```
```XML
<!-- featured-page.xml -->
<Page>
    <StackLayout>
        <Button text="Navigate To Item" tap="onTap"/>
    </StackLayout>
</Page>
```
``` JavaScript
// featured-page.js
function onTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("item-page");
}
exports.onTap = onTap;
```
``` TypeScript
// featured-page.ts
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";

export function onTap(args: EventData) {
    const button: Button = args.object;
    const page: Page = button.page;
    page.frame.navigate("item-page");
}
```

## Backward Navigation

![navigation-schema-backward](../img/navigation/navigation-schema-backward.png?raw=true)

It can also be called upward navigation since you are going up in your navigation hierarchy. This type of navigation represents the opposite direction of the forward navigation and is supported by the `Frame` API. To force a navigation back to the previous page module loaded in a `Frame` simply call its [goBack()](http://localhost:9192/api-reference/classes/_ui_frame_.frame#goback) method.

``` XML
<!-- item-page.xml-->
<Page loaded="onPageLoaded">
    <StackLayout>
        <Label text="Item Details"/>
        <Button text="Navigate Back To Featured" tap="onTap"/>
    </StackLayout>
</Page>
```
``` JavaScript
// item-page.js
function onPageLoaded(args) {
    console.log("Page Loaded");
}

function onTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.goBack();
}
exports.onTap = onTap;
exports.onPageLoaded = onPageLoaded;
```
``` TypeScript
// item-page.ts
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";

export function onPageLoaded(args: EventData): void {
    console.log("Page Loaded");
}

export function onTap(args: EventData) {
    const button: Button = args.object;
    const page: Page = button.page;
    page.frame.goBack();
}
```

> **Note:** Both the Android hardware button and the iOS back button in the `ActionBar` execute upward navigation. These platform specific navigation controls come out of the box and there is no need for you to implement them yourself.

## Lateral Navigation

![navigation-schema-lateral](../img/navigation/navigation-schema-lateral.png?raw=true)

Implementing lateral navigation in NativeScript means to incorporate several instances of the `Frame` component in your navigation and provide means to the user to switch between them. This is usually enabled through specific navigation components. These include `TabView`, `SideDrawer` and `Modal View`, each providing a unique mobile navigation pattern.

### Modal View

Opening a new `Frame` as a full screen modal view is the simplest way to implement lateral navigation. In this context opening the modal view represents lateral navigation to a new feature. You can then leverage the embedded `Frame` to navigate forward and backward in this feature. Closing the modal will navigate laterally back to where the modal view was opened from. Below is a diagram that displays how the navigation schema can be implemented using modal views.

> **Note:** Unlike the `TabView` component, the state of the modal view isn't kept when navigating away, i.e. closing the modal.

![navigation-diagram-modal](../img/navigation/navigation-diagram-modal.png?raw=true)

Each UI component in NativeScript provides two methods for managing modal views:

* [showModal()](https://docs.nativescript.org/api-reference/classes/_ui_core_view_base_.viewbase#showmodal) - opens a modal view on top of the `Page` the UI component is part of.
* [closeModal()](https://docs.nativescript.org/api-reference/classes/_ui_core_view_base_.viewbase#closemodal) - closes the modal view that the UI component is part of.

To open a modal view you should simply call the `showModal()` method of any UI component instance with a path to the modal root module as parameter. Take a look at the [Modal View]({%slug modal-page %}) article for more information.

The following code sample demonstrates how you can implement the Search modal view and page from the diagram above:

```XML
<!-- app-root.xml -->
<Frame id="featured" defaultPage="featured-page" />
```
```XML
<!-- featured-page.xml -->
<Page>
    <StackLayout>
        <Button text="Navigate To Search" tap="openSearchModal"/>
    </StackLayout>
</Page>
```
``` JavaScript
// featured-page.js
function openSearchModal(args) {
    const view = args.object;
    view.showModal("search-root", null, null, true);
}
exports.openSearchModal = openSearchModal;
```
``` TypeScript
// featured-page.ts
import { EventData } from "tns-core-modules/data/observable";
import { View } from "tns-core-modules/ui/core/view";

export function openSearchModal(args: EventData) {
    const view: View = args.object;
    view.showModal("search-root", null, null, true);
}
```
```XML
<!-- search-root.xml -->
<Frame id="search" defaultPage="search-page" />
```
```XML
<!-- search-page.xml -->
<Page>
    <StackLayout>
        <Button text="Navigate To Featured" tap="closeSearchModal"/>
    </StackLayout>
</Page>
```
``` JavaScript
// search-page.js
function closeSearchModal(args) {
    const view = args.object;
    view.closeModal();
}
exports.closeSearchModal = closeSearchModal;
```
``` TypeScript
// search-page.ts
import { EventData } from "tns-core-modules/data/observable";
import { View } from "tns-core-modules/ui/core/view";

export function closeSearchModal(args: EventData) {
    const view: View = args.object;
    view.closeModal();
}
```


> **Note:** In the current scenario the Search feature has only one page and it's possible to implement it directly in the modal view without embedding a `Frame` in `search-root`. However, in this case there won't be a navigation controller in the modal view and therefore, no `ActionBar`. 

### TabView Navigation

The `TabView` component enables the user to arbitrarily navigate between several UI containers at the same level. A key feature of this component is that it keeps the state of the containers that are not visible. This means that when the user comes back to a previous tab, the data, scroll position and navigation state should be like they left them. Here is a diagram that demonstrates how the navigation schema can be implemented with a `TabView`.

![navigation-diagram-tab](../img/navigation/navigation-diagram-tab.png?raw=true)

The `TabView` container provides its lateral navigation logic automatically by providing the user with tabs which they can select. To set up a `TabView` you need to simply declare the UI of each container and the title and icon you want to be shown in its representing tab. Each separate UI container is represented by a `TabViewItem`. A `TabViewItem` can have one root component. As with other containers, you can enable forward and backward navigation inside each `TabViewItem` by embedding a `Frame` in it.

The `TabView` provides two important features connected to lateral navigation:

* [selectedIndex](https://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview#selectedindex) property - use this property to programmatically navigate between the tabs.
* [selectedIndexChanged](https://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview#selectedindexchangedevent) event - use this event to handle navigations between tabs done by the user.

Check out the [TabView]({%slug tab-view %}) article for a more detailed look on how you can use and customize the component.

Here is a code sample of the `TabView` declaration that matches the diagram above.

```XML
<!-- app-root.xml -->
<TabView androidTabsPosition="bottom" selectedIndex="0" selectedIndexChanged="onSelectedIndexChanged">
    <TabViewItem title="Featured">
        <Frame id="featured" defaultPage="featured-page" />
    </TabViewItem>
    <TabViewItem title="Browse">
        <Frame id="browse" defaultPage="browse-page" />
    </TabViewItem>
    <TabViewItem title="Search">
        <Frame id="search" defaultPage="search-page" />
    </TabViewItem>
</TabView>
```
``` JavaScript
// app-root.js
function onSelectedIndexChanged(args) {
    console.log(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`);
}
exports.onSelectedIndexChanged = onSelectedIndexChanged;
```
``` TypeScript
// app-root.ts
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";

export function onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
    console.log(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`);
}
```

> **Note:** In the current scenario the Search feature has only one page and it's possible to implement it directly in the `TabViewItem` without embedding a `Frame`. However, in this case there won't be a navigation controller in the `TabViewItem` and therefore, no `ActionBar`. 

### SideDrawer Navigation

The `SideDrawer` component is part of the [Professional UI Components]({%slug rich-components %}) suite. It enables the user to open a hidden view, i.e. drawer, containing navigation controls or settings from the sides of the screen. There are a lot of navigation patterns that can be implemented using a `SideDrawer`. A typical usage would be to add UI controls and have them do one of two things:

* Forward navigation - get a reference to a navigation `Frame` and navigate in it.
* Lateral navigation - open a modal view.

Below is a diagram of how you can implement the navigation schema using a `SideDrawer`.

![navigation-diagram-drawer](../img/navigation/navigation-diagram-drawer.png?raw=true)

A notable bonus of the component is that the drawer can be opened regardless of the navigation state of the main content. This means that the user can navigate laterally to another feature from either the Featured page or the Item page.

The component itself doesn't provide navigation logic automatically like the `TabView`. Instead, it is built with more freedom in mind and lets you customize its content. It exposes two UI containers - the `drawerContent` container houses the UI of the hidden side view and the `mainContent` holds the UI that will be shown on the screen. To implement the diagram above, we will embed a `Frame` component holding the Featured navigation in the main content container and three buttons in the drawer content. Two of them open the Browse and Search features in modal views and the final one resets the embedded Featured navigation.

```XML
<!-- app-root.xml -->
<nsDrawer:RadSideDrawer xmlns:nsDrawer="nativescript-ui-sidedrawer">
    <nsDrawer:RadSideDrawer.drawerContent>
        <StackLayout>
            <Label text="Featured" tap="resetFeatured" />
            <Label text="Browse" tap="openBrowseModal" />
            <Label text="Search" tap="openSearchModal" />
        </StackLayout>
    </nsDrawer:RadSideDrawer.drawerContent>

    <nsDrawer:RadSideDrawer.mainContent>
        <Frame id="featured" defaultPage="featured-page" />
    </nsDrawer:RadSideDrawer.mainContent>
</nsDrawer:RadSideDrawer>
```
``` JavaScript
// app-root.js
const frameModule = require("tns-core-modules/ui/frame");

function resetFeatured(args) {
    const featuredFrame = frameModule.getFrameById("featured");
    featuredFrame.navigate({
        moduleName: "featured-page",
        clearHistory: true
    });
}

function openBrowseModal(args) {
    const view = args.object;
    view.showModal("browse-root", null, null, true);
}

function openSearchModal(args) {
    const view = args.object;
    view.showModal("search-root", null, null, true);
}

exports.resetFeatured = resetFeatured;
exports.openBrowseModal = openBrowseModal;
exports.openSearchModal = openSearchModal;
```
``` TypeScript
// app-root.ts
import { EventData } from "tns-core-modules/data/observable";
import { View } from "tns-core-modules/ui/core/view";
import { getFrameById } from "tns-core-modules/ui/frame";

export function resetFeatured(args: EventData) {
    const featuredFrame = getFrameById("featured");
    featuredFrame.navigate({
        moduleName: "featured-page",
        clearHistory: true
    });
}

export function openBrowseModal(args: EventData) {
    const view: View = args.object;
    view.showModal("browse-root", null, null, true);
}

export function openSearchModal(args: EventData) {
    const view: View = args.object;
    view.showModal("search-root", null, null, true);
}
```

Take a look at the [SideDrawer](https://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/SideDrawer/overview) docs for more information about the component.
