---
title: Location
page_title: RadSideDrawer Location | Progress NativeScript UI Documentation
description: This article discusses how drawer location is set on RadSideDrawer.
slug: sidedrawer-features-location
tags: sidedrawer, features, drawer, location
position: 4
publish: true
previous_url: controls/sidedrawer/locations
---
# RadSideDrawer: Location
Depending on the application scenario, {% typedoc_link classes:RadSideDrawer %} can be configured to display at a specific location on the screen. This also changes the way the transition animation is applied. There are four available drawer locations:

- {% typedoc_link enums:SideDrawerLocation,member:Top %}
- {% typedoc_link enums:SideDrawerLocation,member:Right %}
- {% typedoc_link enums:SideDrawerLocation,member:Bottom %}
- {% typedoc_link enums:SideDrawerLocation,member:Left %}

Changing the drawer location is done by setting one of the four possible values to the {% typedoc_link classes:RadSideDrawer,member:drawerLocation %} property. The four location options are defined by the {% typedoc_link enums:SideDrawerLocation %} enum. Setting the {% typedoc_link classes:RadSideDrawer,member:drawerLocation %} property can be done both programmatically and via XML:

<snippet id='sidedrawer-setting-location'/>
<snippet id='sidedrawer-setting-location-xml'/>

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Location Example](https://github.com/telerik/nativescript-ui-samples/tree/master/sidedrawer/app/examples/position)