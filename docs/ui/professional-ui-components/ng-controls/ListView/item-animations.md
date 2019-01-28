---
title: Item Animations
page_title: RadListView Item animations | Progress NativeScript UI Documentation
description: This article gives insight into how item animations are used with RadListView.
slug: listview-features-item-animations-angular
tags: radlistview, animations, angular
position: 4
publish: true
---
# RadListView: Item animations
RadListView supports animations for items being added or removed from the list. To be able to utilize this functionality, you will need to bind the module to an `ObservableArray` instance which makes sure any collection changes are reported to the RadListView module.

## Enabling item animations
To enable item animations you first need to explicitly define item layout. More information about item layouts is available in the dedicated article: [Item Layouts Animations]({% slug listview-features-item-layouts-angular %} "RadListView item layouts"). The code snippet below demonstrates how a {% typedoc_link classes:ListViewLinearLayout %} is set, simply declare an ListViewLinearLayout instance and set the **`tkListViewLayout`** directive on it:

<snippet id='angular-listview-item-animations-html'/>

Note that the {% typedoc_link classes:ListViewLinearLayout,member:itemInsertAnimation %} and {% typedoc_link classes:ListViewLinearLayout,member:itemDeleteAnimation %} properties are set via bindings to {% typedoc_link enums:ListViewItemAnimation,member:Fade %}. This means that items being inserted or removed from the source collection will be animated using a fade-in or fade-out animation. There are four different animations that are currently available:

- {% typedoc_link enums:ListViewItemAnimation,member:Default %}
- {% typedoc_link enums:ListViewItemAnimation,member:Fade %}
- {% typedoc_link enums:ListViewItemAnimation,member:Scale %}
- {% typedoc_link enums:ListViewItemAnimation,member:Slide %}

The currently available item animation types are defined by the {% typedoc_link enums:ListViewItemAnimation %} enumeration.
