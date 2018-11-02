---
title: Architecture and Navigation
description: Learn about the basic application structure and page management of NativeScript apps, and how to navigate between pages or change the transition animations.
position: 20
tags: nativescript navigation, nativescript architecture, nativescript navigate back, nativescript page transitions, ns navigation examples
slug: architecture
previous_url: /navigation
environment: nativescript
---

# Navigation

Navigation refers to the act of moving around the screens of your application. Each mobile app has its own unique navigation schema based on the information it tries to present. The schema below is an example of a common mobile navigation scenario.

TODO: Add schema

Based on the schema above, there are three distinct navigational directions a user can move in:
* Forward - refers to navigating to a screen on the next level in the hierarchy.
* Backward - refers to navigating back to a screen either on the previous level in the hierarchy or chronologically.
* Lateral - refers to navigating between screens on the same level in the hierarchy.

This article demonstrates how you can implement these in NativeScript and combine them to build the navigation architecture of your application.

## Forward Navigation

TODO: Add schema with highlighted forward navigation

### Page

The `Page` component is NativeScript's most basic navigation item. It represents a single screen that the user can navigate to. This component serves two important roles. It holds the UI components of a single screen and provides navigation lifecycle events. For complete information regarding the `Page` component, check out the article in UI Widgets section.

The most common usage of a `Page` component is as a root of a module, in which case the module becomes a page module. Here is an example of a basic page module:

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
import { EventData } from "tns-core-modules/data/observable";

export function onPageLoaded(args: EventData): void {
    console.log("Page Loaded");
}
```

### Frame

To display a `Page` on the screen, you need to navigate to it using the `Frame` component. This component is the main provider of forward/backward navigation in NativeScript. The `Frame` component has no visible representation. It simply provides a container for transitions between pages. It also provides a navigation API which includes history manipulation and setting custom navigation transitions. For more information on the `Frame` component and its API, visit the article in UI Widgets.

Currently, `Frame` components can be used only in root modules. For your convenience, the component also provides a `defaultPage` property to easily specify the first page module that will be displayed in the `Frame` once it's loaded. In the following example you can see a `Frame` component that navigates by default to a home-page module. The home-page module in turn has a button that utilizes the `Frame`'s `navigate()` method to navigate to the main-page module that we defined in the previous section.

```XML
<!-- app-root.xml -->
<Frame defaultPage="home/home-page" />
```
```XML
<!-- home/home-page.xml -->
<Page class="page">
    <StackLayout>
        <!-- content here-->
        <Button text="Navigate" tap="onTap"/>
    </StackLayout>
</Page>
```
``` JavaScript
// home/home-page.js
function onTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("main-page");
}
exports.onTap = onTap;
```
``` TypeScript
// home/home-page.ts
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";

export function onTap(args) {
    const button: Button = args.object;
    const page: Page = button.page;
    page.frame.navigate("main-page");
}
```

## Backward Navigation

### Hierarchical

### Chronological

## Lateral Navigation

TODO: Add schema with highlighted lateral navigation

Implementing lateral navigation in NativeScript means to incorporate several instances of the `Frame` component in your navigation and provide means to the user to switch between them. This is enabled through specific navigation components. These include `TabView`, `SideDrawer` and `Modal View`, each providing a unique mobile navigation pattern.

### Modal View

TODO: Add schema with Modal View on the side

Opening a `Modal View` is the simplest way to implement lateral navigation. Unlike the `TabView` lateral navigations, the `Modal View` state isn't kept when navigating away, i.e. closing the modal. Out of the box, a `Modal View` has a single view. You can enable forward/backward navigation in it by embedding a navigation `Frame` in it. To open a `Modal View` you should simply call the `showModal` method of any component instance with a path to the modal root file as parameter. Take a look at the [TabView]({%slug tab-view %}) article for more information.

TODO: Add Modal View Example

### TabView Navigation

The `TabView` component enables the user to arbitrarily navigate between several views at the same level. A key feature of this component is that it keeps the state of the views that are not visible. This means that when the user comes back to a previous tab, the data, scroll position and navigation state should be like they left them. Out of the box, each tab has a single view. You can enable forward/backward navigation in a tab by embedding a navigation `Frame` in it. Check out the [TabView]({%slug tab-view %}) article for a more detailed look on how you can use and customize the component.

```XML
<!-- app-root.xml -->
<TabView androidTabsPosition="bottom">
    <TabViewItem title="First">
        <!-- view content -->
    </TabViewItem>
    <TabViewItem title="Second">
        <!-- view content -->
    </TabViewItem>
</TabView>
```

### SideDrawer Navigation

The `SideDrawer` component is part of the [Professional UI Components]({%slug rich-components %}) suite. It enables the user to open a hidden view, i.e. drawer, containing navigation controls or settings from the sides of the screen. The component itself doesn't provide navigation logic like the `TabView`. Instead, it is built with more freedom in mind and lets you customize the contents of the drawer. A typical usage would be to add UI controls like a `Button` and have them do one of two things:

* Forward navigation - get a reference to a navigation `Frame` and execute a navigation in it.
* Lateral navigation - open a `Modal View`.

```XML
<!-- app-root.xml -->
<nsDrawer:RadSideDrawer xmlns:nsDrawer="nativescript-ui-sidedrawer">
    <nsDrawer:RadSideDrawer.drawerContent>
        <!-- drawer content, i.e. the hidden view -->
    </nsDrawer:RadSideDrawer.drawerContent>

    <nsDrawer:RadSideDrawer.mainContent>
        <!-- main content, i.e. what is dislpayed on the screen -->
    </nsDrawer:RadSideDrawer.mainContent>
</nsDrawer:RadSideDrawer>
```

Take a look at the [SideDrawer](https://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/SideDrawer/overview) docs for more information about the component.
