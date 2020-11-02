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

<snippet id='sidedrawer-events-vue'/>
