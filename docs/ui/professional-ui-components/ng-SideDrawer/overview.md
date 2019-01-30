---
title: Overview
page_title: RadSideDrawer Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of RadSideDrawer's features.
slug: sidedrawer-overview-angular
tags: sidedrawer, overview, drawer, angular
position: 1
publish: true
---

# RadSideDrawer: Overview

{% typedoc_link classes:RadSideDrawer %} is a component can show a hidden view that contains navigation UI or common settings. A popular application that uses the drawer UI is the Android Playstore app.
The hidden view can be displayed with a flick gesture and can be shown from any of the four edges of the screen. The view is also displayed with a transition which can be chosen from a set of pre-defined transitions.

The next screenshots showcase how the {% typedoc_link classes:RadSideDrawer %} could look on both iOS and Android:

![TelerikUI-SideDrawer-Overview](../../img/ns_ui/drawer-overview-android.png "Side drawer overview.") ![TelerikUI-SideDrawer-Overview](../../img/ns_ui/drawer-overview-ios.png "Side drawer overview.")

# Angular directives

When using the {% typedoc_link classes:RadSideDrawer %} with Angular you are going to work with custom angular RadSideDrawer specific directives. In short these directives are used by the angular framework to enable 'linking' between separate HTML tags into one 'complex' element.

Here is a full list of the available custom Angular {% typedoc_link classes:RadListView %} directives and components:

## Components
Represent the major elements:

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| RadSideDrawer | {% typedoc_link classes:RadSideDrawerComponent %} |

## Inline Directives
Represent the 'link' mechanism of the smaller with the major elements

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| tkDrawerContent | {% typedoc_link classes:TKDrawerContentDirective %} |
| tkMainContent | {% typedoc_link classes:TKMainContentDirective %} |