---
title: Header and Footer
page_title: RadListView Header and Footer | Progress NativeScript UI Documentation
description: This article explains how header and footer are configured in RadListView.
slug: listview-header-footer
tags: listview, header, footer
position: 11
publish: true
previous_url: controls/listview/header-footer
---
# RadListView: Header and Footer
{% typedoc_link classes:RadListView %} can be configured to display two special kinds of elements at the beginning and at the end of the data item list: a header and a footer respectively. The contents of these elements are defined in a similar manner to the way content of standard list items is defined - via templates. For that purpose {% typedoc_link classes:RadListView %} exposes the following properties:

- {% typedoc_link classes:RadListView,member:headerItemTemplate %}
- {% typedoc_link classes:RadListView,member:footerItemTemplate %}

Here's a simple example of how these properties are used:

#### __Example 1: Defining a header and a footer for RadListView in XML:__
<snippet id='listview-header-footer-xml'/>

> The views generated using the values of {% typedoc_link classes:RadListView,member:headerItemTemplate %} and {% typedoc_link classes:RadListView,member:footerItemTemplate %} have access to the binding context of {% typedoc_link classes:RadListView %} so you can bind their properties to values exposed by your business object assigned as a binding context.

Assuming that we're using the following view-model setup:

#### __Example 2: Using a model to define the header and footer content:__
<snippet id='listview-header-footer-model'/>

Here's how the list looks like:

#### __Fugure 1: RadListView's header and footer in action:__
![RadListView header and footer on Android](/controls/NativeScript/ListView/Images/list-view-header-footer_1.png "iOS") ![RadListView header and footer on iOS](/controls/NativeScript/ListView/Images/list-view-header-footer_2.png "Android")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Header & Footer Example](https://github.com/telerik/nativescript-ui-samples/tree/master/listview/app/examples/header-footer)
