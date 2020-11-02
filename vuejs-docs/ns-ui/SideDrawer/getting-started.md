---
title: Getting Started
page_title: RadSideDrawer Getting Started | Progress NativeScript UI Documentation
description: This article explains how RadSideDrawer is used with Vue.
slug: sidedrawer-getting-started-vue
tags: sidedrawer, Vue, nativescript, professional, ui
position: 2
publish: true
---

# RadSideDrawer Getting Started
This article explains how to create a simple RadSideDrawer with Vue.

> By design the `RadSideDrawer` is designed to be placed as a single child in your component's HTML, this excludes the use of a `<ActionBar><ActionBar>` which is not treated as a simple element by NativeScript and can be used with `RadSideDrawer` by placing it in the beginning of the HTML.

## Installation
Run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-sidedrawer
```

## Initialization
Before proceeding, make sure that the `nativescript-ui-sidedrawer/vue` module is required inside your application. This module handles the registration of the custom directives and elements required by [nativescript-vue](https://nativescript-vue.org/).

The RadSideDrawer consists of two visual parts:

- `mainContent` - the visual elements displayed in the host view where the drawer is shown.
- `drawerContent` - the visual elements displayed in the side drawer.

Defining `mainContent` and `drawerContent`  with Vue is done using the `~` syntax:

- `~drawerContent`
- `~mainContent`

The following code snippet is a simple template with a basic setup for RadSideDrawer.

<snippet id='sidedrawer-getting-started-vue'/>

#### Figure 1. RadSideDrawer's '~mainContent'
![TelerikUI-SideDrawer-Getting-Started](../../../ui/img/ns_ui/drawer-getting-started-ios-1.png "Side drawer main content on iOS.") ![TelerikUI-SideDrawer-Getting-Started](../../../ui/img/ns_ui/drawer-getting-started-android-1.png "Side drawer main content on Android.")


#### Figure 2. RadSideDrawer's '~drawerContent'
![TelerikUI-SideDrawer-Getting-Started](../../../ui/img/ns_ui/drawer-getting-started-ios-2.png "Drawer content on iOS.") ![TelerikUI-SideDrawer-Getting-Started](../../../ui/img/ns_ui/drawer-getting-started-android-2.png "Drawer content on Android.")
