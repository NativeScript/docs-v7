---
title: Item Selection states
page_title: How to RadListView Item Selection states | Progress NativeScript UI Documentation
description: This article describes how to implement a visual state for selected or deselected items in RadListView.
slug: listview-howto-selection-angular
tags: radlistview, customization, selection, states, angular, nativescript, professional, ui
position: 3
publish: true
---
# RadListView Item Selection States
When using Item Selection with RadListView one would want to have a different visual state for selected vs. deselected items. The default selection behavior of RadListView differs in terms of how selection is represented. It is a common scenario to unify the behavior by providing a single visual representation for the state of the items. This article represents a step-by-step guide for implementing visual states for the item containers depending on whether they are selected or not.

## Prerequisites
For the purposes of this article, we need to have a {% typedoc_link classes:RadListView %} instance defined on our page with the following properties set:
- {% typedoc_link classes:RadListView,member:selectionBehavior %} set to {% typedoc_link enums:ListViewSelectionBehavior,member:Press %}
- {% typedoc_link classes:RadListView,member:multipleSelection %} set to `true`

We also need to provide handlers and subscribe for the following events:
- {% typedoc_link classes:RadListView,member:itemSelectedEvent %}
- {% typedoc_link classes:RadListView,member:itemDeselectedEvent %}

## Implementing Selection States
### The item 'model'
When implementing a visual state we normally associate a given property of a visual element with a property value on our model or Angular 'Component'. We create a 'binding' which makes sure that once the model property changes the container's appearance is also changed. For that purpose we will create a `selected` property in our Component's 'data item' object. After that we will update this property when an item is selected/deselected and will wire the background color of the container to it.

Using instances of this class we go on and create an `ObservableArray` of objects that we will bind to the {% typedoc_link classes:RadListView,member:items %}.

<snippet id='listview-angular-data-item'/>
<snippet id='angular-listview-selection-states-component'/>

### The UI
Essential part of the implementation of 'Item Selection States' is the template that defines the item's visual structure. To update the appearance of the containers according to the selection state we will update the background color of the root element of each container. For that purpose we will create a HTML binding to the `selected` property defined on our `DataItem` objects. This binding will return `red` when the item is selected and `white` when the item is deselected. Here's the **`tkListItemTemplate`** of the {% typedoc_link classes:RadListView %}:

<snippet id='angular-listview-howto-item-selection-template-html'/>

### Handling the 'itemSelected' and 'itemDeselected' Events
The last part of the task is to update the `selected` property of the `DataItems` when the selection state is changed. This is done using the corresponding selection events exposed by {% typedoc_link classes:RadListView %}:

- {% typedoc_link classes:RadListView,member:itemSelectedEvent %}
- {% typedoc_link classes:RadListView,member:itemDeselectedEvent %}

The snippet demonstrates how these events are subscribed for:

<snippet id='angular-listview-howto-item-selection-events-html'/>

Having the `selected` property defined on our business objects we update this property as follows:

<snippet id='angular-listview-howto-item-selection-events'/>
