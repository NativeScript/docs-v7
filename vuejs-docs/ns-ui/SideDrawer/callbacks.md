---
title: Callbacks
page_title: RadSideDrawer Callbacks| Progress NativeScript UI Documentation
description: This article is a short description and summary of RadSideDrawer's callbacks used with Vue
slug: sidedrawer-callbacks-vue
tags: sidedrawer, vue, callbacks
position: 5
publish: true
---

# RadSideDrawer: Callbacks

This article explains how to use the events provided by the **RadSideDrawer** with Vue in order to receive information of the drawer's state.

# Subscribing to events with vue

The **RadSideDrawer** allows you to receive events and execute code when sideDrawer's state is changed.
There are four events that the drawer fires:

- `drawerOpening`
- `drawerClosed`
- `drawerClosing`
- `drawerClosed`

In order to receive these events you need to subscribe for them in the XML where you define the **RadSideDrawer** and provide the actual methods that will be executed when the events are fired:

```
export default {
  template: `
  <Page>
    <RadSideDrawer ref="drawer"
                   @drawerOpening="onDrawerOpening()"
                   @drawerOpened="onDrawerOpened()"
                   @drawerClosing="onDrawerClosing()"
                   @drawerClosed="onDrawerClosed()"
                   @drawerPan="onDrawerPan()">
      <StackLayout ~drawerContent class="sideStackLayout">
        <StackLayout class="sideTitleStackLayout">
          <Label text="Navigation Menu"></Label>
        </StackLayout>
        <Button text="Close Drawer" @tap="onCloseDrawerTap()"></Button>
      </StackLayout>
      <StackLayout ~mainContent>
        <Button text="Open Drawer" @tap="openDrawer()"></Button>
        <Label text="Drawer notification: "></Label>
        <Label>{{ currentNotification }}</Label>
      </StackLayout>
    </RadSideDrawer>
  </Page>
  `,
  data () {
    return {
      currentNotification: '',
    };
  },
  methods: {
    openDrawer() {
      this.$refs.drawer.showDrawer();
    },
    onCloseDrawerTap() {
      this.$refs.drawer.closeDrawer();
    },
    onDrawerOpening(args) {
      this.currentNotification = "Drawer opening";
    },
    onDrawerOpened(args) {
      this.currentNotification = "Drawer opened";
    },
    onDrawerClosing(args) {
      this.currentNotification = "Drawer closing";
    },
    onDrawerClosed(args) {
      this.currentNotification = "Drawer closed";
    },
    onDrawerPan(args) {
      this.currentNotification = "Drawer pan";
    },
  },
};
```
