---
title: Data Operations - Grouping, Filtering & Sorting
page_title: Data Operations | Progress NativeScript UI Documentation
description: This article describes how to enable data operations when using RadListView.
slug: listview-data-operations
tags: listview, data, operations, grouping, filtering, sorting, angular
position: 13
publish: true
---

# What are "data operations"
This article will guide you through the process of enabling one or all of the data operations available as built-in functionality into the RadListView. The component provides all of the basic data operations with an easy to use API that enables powerful configuration of the grouping, filtering and sorting criteria to achieve any desired configuration of the displayed items in the RadListView.

By 'data operations' in the context of the {% typedoc_link classes:RadListView %} we mean doing operations on the 'raw' source collection that is set to the {% typedoc_link classes:RadListView,member:items %} property. Those operations can be grouping, sorting and filtering. Each one can be used separately or combined with the others, this way you can filter the items and group them without changing the 'raw' business object collection you have provided to the {% typedoc_link classes:RadListView,member:items %}.

## Grouping
In order to enable grouping you simply need to set the {% typedoc_link classes:RadListView,member:groupingFunction %} property to a function that simply returns the object which will be used as criteria for grouping functionality. Here is a simple example of such function:
<snippet id='listview-data-operations-grouping-angular'/>

## Grouping template
Setting up custom grouping template.
<snippet id='listview-data-operations-grouping-template-angular'/>

## Sorting
Sorting is enabled by simply setting the {% typedoc_link classes:RadListView,member:sortingFunction %} property to a function that takes one parameter and returns `true` if the item passed as parameter should be included and `false` otherwise. Here is a simple example of such function:
<snippet id='listview-data-operations-sorting-angular'/>

## Filtering
To enable filtering in the {% typedoc_link classes:RadListView %} simply set its {% typedoc_link classes:RadListView,member:filteringFunction %} property to a function that takes two parameters and returns 0 (the params are equal), 1 (first param is greater) or -1 (second param is greater). Here is a simple example of such function:
<snippet id='listview-data-operations-filtering-angular'/>


## __Example 1: Implementing grouping, filtering and sorting__

In this example we are going to enable all of the data operations on the same RadListView with the following criteria:
- Filter the business objects which `name` property contains the string "Special Item"
- Sort the business objects by the value of their `id` property
- Group the business objects by the value of their `category` property

<snippet id='listview-angular-multiple-operations-html'/>
<snippet id='listview-angular-multiple-operations-code'/>
<snippet id='listview-angular-multiple-operations-css'/>

This will produce the following UI with the filtered, sorted and grouped objects:

#### __Figure 1: Grouping, filtering and sorting enabled in RadListView:__

![RadListView Data-Operations on iOS](/controls/NativeScript/ListView/Images/list-view-multiple-operations-ios.png "iOS") ![RadListView Data-Operations on Android](/controls/NativeScript/ListView/Images/list-view-multiple-operations-android.png "Android")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Multiple Data Operations Example](https://github.com/telerik/nativescript-ui-samples-angular/tree/master/listview/app/examples/multiple-operations)

Related articles you might find useful:

* [**Multiple Item Templates**]({% slug listview-multiple-templates %})
