---
title: Item Animations
page_title: RadListView Item Animations | Progress NativeScript UI Documentation
description: This article gives insight into how item animations are used with RadListView.
slug: listview-features-item-animations
tags: radlistview, animations
position: 4
publish: true
previous_url: controls/listview/item-animations
---
# RadListView: Item Animations
RadListView supports animations for items being added or removed from the list. To be able to utilize this functionality, you will need to bind the module to an `ObservableArray` instance which makes sure any collection changes are reported to the RadListView module.

## Enabling Item Animations
To enable item animations you first need to explicitly define item layout. More information about item layouts is available in the dedicated article: [Item Layouts Animations]({% slug listview-features-item-layouts %} "RadListView item layouts"). The code snippet below demonstrates how a {% typedoc_link classes:ListViewLinearLayout %} is set:

#### __Example 1: Enabling item animations on RadListView:__
<snippet id='listview-item-animations-xml'/>

Note how the {% typedoc_link classes:ListViewLinearLayout,member:itemInsertAnimation %} and {% typedoc_link classes:ListViewLinearLayout,member:itemDeleteAnimation %} properties are set to {% typedoc_link enums:ListViewItemAnimation,member:Fade %}. This means that items being inserted or removed from the source collection will be animated using a fade-in or fade-out animation. There are four different animations that are currently available:

- {% typedoc_link enums:ListViewItemAnimation,member:Default %}
- {% typedoc_link enums:ListViewItemAnimation,member:Fade %}
- {% typedoc_link enums:ListViewItemAnimation,member:Scale %}
- {% typedoc_link enums:ListViewItemAnimation,member:Slide %}

The currently available item animation types are defined by the {% typedoc_link enums:ListViewItemAnimation %} enumeration.

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Item Animations Example](https://github.com/telerik/nativescript-ui-samples/tree/master/listview/app/examples/item-animations)