---
title: Transitions
page_title: RadSideDrawer Transitions | Progress NativeScript UI Documentation
description: This article is a short description and summary of RadSideDrawer's transitions.
slug: sidedrawer-transitions
tags: sidedrawer, transitions, drawer, nativescript, professional, ui
position: 5
publish: true
---

# RadSideDrawer Transitions
{% typedoc_link classes:RadSideDrawer %} comes with several predefined transitions which are used to animate the drawer and main content panes when switching between open and closed states. The following list presents the predefined transitions:

- {% typedoc_link classes:FadeTransition %} - provides a fading animation for the displayed drawer content.
- {% typedoc_link classes:PushTransition %} - provides an animation showing the main content being pushed out by the side content.
- {% typedoc_link classes:RevealTransition %} - provides an animation showing the main content uncovering the side content.
- {% typedoc_link classes:ReverseSlideOutTransition %} - provides an animation showing the drawer content reverse sliding out of the main content.
- {% typedoc_link classes:ScaleDownPusherTransition %} - provides a scale down animation of the drawer content.
- {% typedoc_link classes:ScaleUpTransition %} - provides a scale up animation of the drawer content from beneath the main content.
- {% typedoc_link classes:SlideAlongTransition %} - provides an animation of the side content sliding along the main content.
- {% typedoc_link classes:SlideInOnTopTransition %} - provides an animation of the side content sliding in on top of the main content.

To use a specific transition, you need to set an instance of it to the {% typedoc_link classes:RadSideDrawer,member:drawerTransition %} property of a {% typedoc_link classes:RadSideDrawer %} instance:

<snippet id='sidedrawer-setting-transition'/>

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Transitions Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/sidedrawer/app/examples/transitions)