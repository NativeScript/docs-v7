---
title: Programmatic control
page_title: RadSideDrawer Programmatic control | Progress NativeScript UI Documentation
description: This article discusses the API for programmatic control of RadSideDrawer.
slug: sidedrawer-features-programmatic-angular
tags: sidedrawer, features, drawer, programmatic, angular, nativescript, professional, ui
position: 7
publish: true
---

# RadSideDrawer Programmatic Control
{% typedoc_link classes:RadSideDrawer %} exposes API for programmatic control of its state.

## The `showDrawer()`, `closeDrawer()` and `toggleDrawerState()` methods
The {% typedoc_link classes:RadSideDrawer,member:showDrawer() %} method is used to open the drawer. {% typedoc_link classes:RadSideDrawer,member:closeDrawer() %} method is used to close the drawer and {% typedoc_link classes:RadSideDrawer,member:toggleDrawerState() %} is used to switch to the opposite state depending on the current one - open or closed.

## The `gesturesEnabled` property
Using the {% typedoc_link classes:RadSideDrawer,member:gesturesEnabled %} property you can prevent the end users from opening or closing the {% typedoc_link classes:RadSideDrawer %} using gestures.
