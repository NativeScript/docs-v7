---
title: Transitions
page_title: RadSideDrawer Transitions| Progress NativeScript UI Documentation
description: This article is a short description and summary of RadSideDrawer's transitions used with Angular
slug: sidedrawer-transitions-angular
tags: sidedrawer, angular, transitions, nativescript, professional, ui
position: 5
publish: true
---

# RadSideDrawer Transitions

This article explains how to set the transition type of the **RadSideDrawer** with Angular.

## Set Transition with Angular

RadSideDrawer offers the following transition options:

- {% typedoc_link classes:FadeTransition %} - provides a fading animation for the displayed drawer content.
- {% typedoc_link classes:PushTransition %} - provides an animation showing the main content being pushed out by the side content.
- {% typedoc_link classes:RevealTransition %} - provides an animation showing the main content uncovering the side content.
- {% typedoc_link classes:ReverseSlideOutTransition %} - provides an animation showing the drawer content reverse sliding out of the main content.
- {% typedoc_link classes:ScaleDownPusherTransition %} - provides a scale down animation of the drawer content.
- {% typedoc_link classes:ScaleUpTransition %} - provides a scale up animation of the drawer content from beneath the main content.
- {% typedoc_link classes:SlideAlongTransition %} - provides an animation of the side content sliding along the main content.
- {% typedoc_link classes:SlideInOnTopTransition %} - provides an animation of the side content sliding in on top of the main content.

The trasition style of the **RadSideDrawer** can be manipulated through the `transition` property of the `RadSideDrawerComponent`.

<snippet id='angular-sidedrawer-transitions'/>

In the snippet above we have binded the `transition` property to the `sideDrawerTransition` variable. Now we should create the `sideDrawerTransition` variable and give it a value.

<snippet id='sidedrawer-angular-transition-definition'/>



 


