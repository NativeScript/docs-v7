---
title: Item Selection states
page_title: How to RadListView Item Selection states | Progress NativeScript UI Documentation
description: This article describes how to implement a visual state for selected or deselected items in RadListView.
slug: listview-howto-selection
tags: radlistview, customization, selection, states, nativescript, professional, ui
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
### The View Model
When implementing a visual state we normally associate a given property of a visual element with a property value on our model. We create a 'binding' which makes sure that once the model property changes the container's appearance is also changed. For that purpose we will create a model which introduces a `selected` property. We will update this property when an item is selected/deselected and will wire the background color of the container to it. Here's the model:

<snippet id='listview-howto-item-selection-model'/>

Using instances of this class we go on to bind {% typedoc_link classes:RadListView %} by creating a View Model which we assign as a `bindingContext` of the page. The View Model exposed a property called `dataItems` which returns an `ObservableArray` object containing the `DataItem` instances:

<snippet id='listview-howto-item-selection-page-model'/>

### The UI
Essential part of the implementation of Item Selection States is the template that defines the item's visual structure. To update the appearance of the containers according to the selection state we will update the background color of the root element of each container. For that purpose we will create a XML binding to the `selected` property defined on our model. This binding will return `red` when the item is selected and `white` when the item is deselected. Here's the XML:

<snippet id='listview-howto-item-selection-template-xml'/>

### Handling the 'itemSelected' and 'itemDeselected' events
The last part of the task is to update the `selected` property of the models when the selection state is changed. This is done using the corresponding selection events exposed by {% typedoc_link classes:RadListView %}:

- {% typedoc_link classes:RadListView,member:itemSelectedEvent %}
- {% typedoc_link classes:RadListView,member:itemDeselectedEvent %}

The snippet demonstrates how these events are subscribed for:

<snippet id='listview-howto-item-selection-events-xml'/>

Having the `selected` property defined on our business objects we update this property as follows:

<snippet id='listview-howto-item-selection-events'/>
