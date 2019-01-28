---
title: Callbacks
page_title: RadSideDrawer Callbacks| Progress NativeScript UI Documentation
description: This article is a short description and summary of RadSideDrawer's callbacks used with Angular
slug: sidedrawer-callbacks-angular
tags: sidedrawer, angular, callbacks
position: 6
publish: true
---

# RadSideDrawer: Callbacks

This article explains how to use the events provided by the **RadSideDrawer** with Angular in order to receive information of the drawer's state.

# Subscribing to events with Angular

The **RadSideDrawer** allows you to receive events and execute code when sideDrawer's state is changed.
There are four events that the drawer fires:

- `drawerOpening`
- `drawerClosed`
- `drawerClosing`
- `drawerClosed` 

In order to receive these events you need to subscribe for them in the XML where you define the **RadSideDrawer**

<snippet id='angular-sidedrawer-callbacks'/>

Then you need to provide the actual methods that will be executed when the events are fired.

<snippet id='sidedrawer-angular-callbacks-definition'/>


 


