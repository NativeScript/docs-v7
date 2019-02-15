---
title: Transitions
page_title: RadSideDrawer Transitions| Progress NativeScript UI Documentation
description: This article is a short description and summary of RadSideDrawer's transitions used with Vue
slug: sidedrawer-transitions-vue
tags: sidedrawer, vue, transitions
position: 4
publish: true
---

# RadSideDrawer: Transitions

This article explains how to set the transition type of the **RadSideDrawer** with Vue.

# Set transition with Vue

RadSideDrawer offers the following transition options:

- {% typedoc_link classes:FadeTransition %} - provides a fading animation for the displayed drawer content.
- {% typedoc_link classes:PushTransition %} - provides an animation showing the main content being pushed out by the side content.
- {% typedoc_link classes:RevealTransition %} - provides an animation showing the main content uncovering the side content.
- {% typedoc_link classes:ReverseSlideOutTransition %} - provides an animation showing the drawer content reverse sliding out of the main content.
- {% typedoc_link classes:ScaleDownPusherTransition %} - provides a scale down animation of the drawer content.
- {% typedoc_link classes:ScaleUpTransition %} - provides a scale up animation of the drawer content from beneath the main content.
- {% typedoc_link classes:SlideAlongTransition %} - provides an animation of the side content sliding along the main content.
- {% typedoc_link classes:SlideInOnTopTransition %} - provides an animation of the side content sliding in on top of the main content.

The trasition style of the **RadSideDrawer** can be manipulated through the `transition` property of the `RadSideDrawerComponent`, which we have binded to the `transition` data.

```
import {
  PushTransition,
  FadeTransition,
  RevealTransition,
  ReverseSlideOutTransition,
  ScaleDownPusherTransition,
  ScaleUpTransition,
  SlideAlongTransition,
  SlideInOnTopTransition
 } from 'nativescript-ui-sidedrawer';

export default {
  template: `
  <Page>
    <RadSideDrawer ref="drawer" :drawerTransition="transition">
      <StackLayout ~drawerContent class="sideStackLayout">
        <StackLayout class="sideTitleStackLayout">
          <Label text="Navigation Menu"></Label>
        </StackLayout>
        <Button text="Close Drawer" @tap="onCloseDrawerTap()"></Button>
      </StackLayout>
      <ScrollView ~mainContent>
        <StackLayout class="mainStackLayout">
          <Button text="Fade Transition"
                  @tap="onFadeTransitionTap()"></Button>
          <Button text="Push Transition"
                  @tap="onPushTransitionTap()"></Button>
          <Button text="Reveal Transition"
                  @tap="onRevealTransitionTap()"></Button>
          <Button text="ReverseSlideOut Transition"
                  @tap="onReverseSlideOutTransitionTap()"></Button>
          <Button text="ScaleDownPusher Transition"
                  @tap="onScaleDownPusherTransitionTap()"></Button>
          <Button text="ScaleUp Transition"
                  @tap="onScaleUpTransitionTap()"></Button>
          <Button text="SlideAlong Transition"
                  @tap="onSlideAlongTransitionTap()"></Button>
          <Button text="SlideInOnTop Transition"
                  @tap="onSlideInOnTopTransitionTap()"></Button>
        </StackLayout>
      </ScrollView>
    </RadSideDrawer>
  </Page>
  `,
  data () {
    return {
      title: description,
      transition: new PushTransition(),
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    openDrawer() {
      this.$refs.drawer.showDrawer();
    },
    onCloseDrawerTap() {
      this.$refs.drawer.closeDrawer();
    },
    repaintAndOpenDrawer() {
      this.$nextTick(() => {
        this.openDrawer();
      });
    },
    onFadeTransitionTap() {
      this.transition = new FadeTransition();
      this.repaintAndOpenDrawer();
    },
    onPushTransitionTap() {
      this.transition = new PushTransition();
      this.repaintAndOpenDrawer();
    },
    onRevealTransitionTap() {
      this.transition = new RevealTransition();
      this.repaintAndOpenDrawer();
    },
    onReverseSlideOutTransitionTap() {
      this.transition = new ReverseSlideOutTransition();
      this.repaintAndOpenDrawer();
    },
    onScaleDownPusherTransitionTap() {
      this.transition = new ScaleDownPusherTransition();
      this.repaintAndOpenDrawer();
    },
    onScaleUpTransitionTap() {
      this.transition = new ScaleUpTransition();
      this.repaintAndOpenDrawer();
    },
    onSlideAlongTransitionTap() {
      this.transition = new SlideAlongTransition();
      this.repaintAndOpenDrawer();
    },
    onSlideInOnTopTransitionTap() {
      this.transition = new SlideInOnTopTransition();
      this.repaintAndOpenDrawer();
    },
  },
};
```
