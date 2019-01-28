---
title: Events
page_title: RadSideDrawer Events | Progress NativeScript UI Documentation
description: This article discusses the events exposed by RadSideDrawer.
slug: sidedrawer-callbacks
tags: sidedrawer, events, drawer,
position: 6
publish: true
previous_url: controls/sidedrawer/callbacks
---

# SideDrawer: Events
{% typedoc_link classes:RadSideDrawer %} fires several events informing about changes in the component's state. The following events are exposed by {% typedoc_link classes:RadSideDrawer %}:
- {% typedoc_link classes:RadSideDrawer,member:drawerOpeningEvent %} - fired when the drawer is about to open
- {% typedoc_link classes:RadSideDrawer,member:drawerOpenedEvent %} - fired when the drawer has been opened
- {% typedoc_link classes:RadSideDrawer,member:drawerClosingEvent %} - fired when the drawer is about to closed
- {% typedoc_link classes:RadSideDrawer,member:drawerClosedEvent %} - fired when the drawer has closed

## Handling RadSideDrawer's events
You can subscribe for {% typedoc_link classes:RadSideDrawer %}'s events in the classical {N} way - either in your XML file or programmatically. The following snippets demonstrates a scenario in which all four events are handled by assigning handlers in the XML definition. The source of the handlers is also demonstrated:

<snippet id='sidedrawer-events-xml'/>
<snippet id='sidedrawer-events-handlers'/>

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Callbacks Example](https://github.com/telerik/nativescript-ui-samples/tree/master/sidedrawer/app/examples/callbacks)

