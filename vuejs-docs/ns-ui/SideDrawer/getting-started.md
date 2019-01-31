---
title: Getting Started
page_title: RadSideDrawer Getting Started | Progress NativeScript UI Documentation
description: This article explains how RadSideDrawer is used with Vue.
slug: sidedrawer-gettingstarted-vue
tags: sidedrawer, Vue
position: 2
publish: true
---

# RadSideDrawer: Getting Started
This article explains how to create a simple RadSideDrawer with Vue.

> By design the `RadSideDrawer` is designed to be placed as a single child in your component's HTML, this excludes the use of a `<ActionBar><ActionBar>` which is not treated as a simple element by NativeScript and can be used with `RadSideDrawer` by placing it in the beginning of the HTML.

## Installation
Run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-sidedrawer
```

# Initialization
Before proceeding, make sure that the `nativescript-ui-sidedrawer/vue` module is required inside your application. This module handles the registration of the custom directives and elements required by [nativescript-vue](https://nativescript-vue.org/).

The RadSideDrawer consists of two visual parts:

- `mainContent` - the visual elements displayed in the host view where the drawer is shown.
- `drawerContent` - the visual elements displayed in the side drawer.

Defining `mainContent` and `drawerContent`  with Vue is done using the `~` syntax:

- `~drawerContent`
- `~mainContent`

The following code snippet is a simple template with a basic setup for RadSideDrawer.

```
const MyComponent = {
    template: `
        <Page>
            <RadSideDrawer ref="drawer">
                <StackLayout ~drawerContent class="sideStackLayout">
                    <StackLayout class="sideTitleStackLayout">
                        <Label text="Navigation Menu"></Label>
                    </StackLayout>
                    <StackLayout class="sideStackLayout">
                        <Label text="Primary" class="sideLabel sideLightGrayLabel"></Label>
                        <Label text="Social" class="sideLabel"></Label>
                        <Label text="Promotions" class="sideLabel"></Label>
                        <Label text="Labels" class="sideLabel sideLightGrayLabel"></Label>
                        <Label text="Important" class="sideLabel"></Label>
                        <Label text="Starred" class="sideLabel"></Label>
                        <Label text="Sent Mail" class="sideLabel"></Label>
                        <Label text="Drafts" class="sideLabel"></Label>
                    </StackLayout>
                    <Label text="Close Drawer" color="lightgray" padding="10" style="horizontal-align: center" @tap="onCloseDrawerTap"></Label>
                </StackLayout>
                <StackLayout ~mainContent>
                    <Label textWrap="true" class="drawerContentText">{{ mainContentText }}</Label>
                    <Button text="OPEN DRAWER" @tap="openDrawer()" class="drawerContentButton"></Button>
                </StackLayout>
            </RadSideDrawer>
        </Page>
    `,
    created() {
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    },
    methods: {
        openDrawer() {
            this.$refs.drawer.nativeView.showDrawer();
        },
        onCloseDrawerTap() {
            this.$refs.drawer.nativeView.closeDrawer();
        }
    },
    data() {
        return {
            mainContentText: ""
        };
    }
}
```

#### Figure 1. RadSideDrawer's '~mainContent'
![TelerikUI-SideDrawer-Getting-Started](../../../ui/img/ns_ui/drawer-getting-started-ios-1.png "Side drawer main content on iOS.") ![TelerikUI-SideDrawer-Getting-Started](../../../ui/img/ns_ui/drawer-getting-started-android-1.png "Side drawer main content on Android.")


#### Figure 2. RadSideDrawer's '~drawerContent'
![TelerikUI-SideDrawer-Getting-Started](../../../ui/img/ns_ui/drawer-getting-started-ios-2.png "Drawer content on iOS.") ![TelerikUI-SideDrawer-Getting-Started](../../../ui/img/ns_ui/drawer-getting-started-android-2.png "Drawer content on Android.")
