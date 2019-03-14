---
title: Location
page_title: RadSideDrawer Location| Progress NativeScript UI Documentation
description: This article explains how to set the RadSideDrawer's location with Vue
slug: sidedrawer-location-vue
tags: sidedrawer, vue, location
position: 3
publish: true
---

# RadSideDrawer: Location

**RadSideDrawer** can be can be located at each side of the screen (top, bottom, right, left).
Setting the location can be done by setting the **drawerLocation** property to a value from the {% typedoc_link enums:SideDrawerLocation %} enumeration:

- {% typedoc_link enums:SideDrawerLocation,member:Top %}
- {% typedoc_link enums:SideDrawerLocation,member:Bottom %}
- {% typedoc_link enums:SideDrawerLocation,member:Left %}
- {% typedoc_link enums:SideDrawerLocation,member:Right %}

```
import { SideDrawerLocation } from 'nativescript-ui-sidedrawer';

export default {
  template: `
  <Page>
    <RadSideDrawer ref="drawer" :drawerLocation="currentLocation">
      <StackLayout ~drawerContent class="sideStackLayout">
        <StackLayout class="sideTitleStackLayout">
          <Label text="Navigation Menu"></Label>
        </StackLayout>
        <ScrollView>
          <StackLayout class="sideStackLayout">
            <Button text="Close Drawer" @tap="onCloseDrawerTap()"></Button>
          </StackLayout>
        </ScrollView>
      </StackLayout>
      <StackLayout ~mainContent class="mainContent">
        <ScrollView>
          <StackLayout>
            <Button text="Left"
                    @tap="onLeftLocationTap()"></Button>
            <Button text="Top"
                    @tap="onTopLocationTap()"></Button>
            <Button text="Right"
                    @tap="onRightLocationTap()"></Button>
            <Button text="Bottom"
                    @tap="onBottomLocationTap()"></Button>
          </StackLayout>
        </ScrollView>
      </StackLayout>
    </RadSideDrawer>
  </Page>
  `,
  data () {
    return {
      currentLocation: SideDrawerLocation.Left,
    };
  },
  methods: {
    openDrawer() {
      this.$refs.drawer.showDrawer();
    },
    repaintAndOpenDrawer() {
      this.$nextTick(() => {
        this.openDrawer();
      });
    },
    onCloseDrawerTap() {
      this.$refs.drawer.closeDrawer();
    },
    onRightLocationTap() {
      this.currentLocation = SideDrawerLocation.Right;
      this.repaintAndOpenDrawer();
    },
    onLeftLocationTap() {
      this.currentLocation = SideDrawerLocation.Left;
      this.repaintAndOpenDrawer();
    },
    onBottomLocationTap() {
      this.currentLocation = SideDrawerLocation.Bottom;
      this.repaintAndOpenDrawer();
    },
    onTopLocationTap() {
      this.currentLocation = SideDrawerLocation.Top;
      this.repaintAndOpenDrawer();
    }
  },
};
```
