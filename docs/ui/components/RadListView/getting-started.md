---
title: Getting Started
page_title: RadListView Getting Started | Progress NativeScript UI Documentation
description: This article is a short description and summary of RadListView's features.
slug: listview-getting-started
tags: listview, overview, nativescript, professional, ui
position: 2
publish: true
---
# RadListView Getting Started
This article will guide you through the process of adding a RadListView in your application, binding it to a data-source and visualizing the items by using an item template of your choice. For more information on how each separate feature of {% typedoc_link classes:RadListView %} is used, please refer to the dedicated articles which are using the same scenario and extend it further.

## Installation
Run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-listview
```

## Adding a RadListView to Your Page
Then, in order to add a {% typedoc_link classes:RadListView %} instance in a page of your application, you need to define the following XML namespace:

- `xmlns:lv="nativescript-ui-listview"`.

After that, you can use the following XML construct to put {% typedoc_link classes:RadListView %} in your page:

#### __Example 1: Adding RadListView to your Page__

<snippet id='listview-first-look'/>

This will initialize a new {% typedoc_link classes:RadListView %} instance with a Linear Layout and put it as a direct child of your page.

> You can read more about layouts here: [Item layouts]({% slug listview-features-item-layouts %})

Now we want to prepare a list of items as a source and pass them to the RadListView. Let's create a view-model which will become the binding context of our page and will expose a collection of objects that we will use to populate the control. Create a new file called `view-model` in your application and paste the following code:

#### __Example 2: Creating the models used to feed RadListView with data__

<snippet id='listview-first-look-model'/>

Now, to provide a binding context for the page, we can use the `pageLoaded` event and assign an instance of the view-model to the `bindingContext` property of the page as follows:

#### __Example 3: Assigning the binding context to the RadListView page__

<snippet id='listview-first-look-context'/>

> Note that we have also set the {% typedoc_link classes:RadListView,member:listViewLayout %} property to an instance of the {% typedoc_link classes:ListViewLinearLayout %} class. This is needed for the {% typedoc_link classes:RadListView %} to work.

Building and running the application will produce the following result:

#### __Figure 1: Getting started with RadListView for NativeScript:__

![TelerikUI-RadListView-Getting-Started](../../img/ns_ui/list-view-getting-started_1.png "iOS") ![TelerikUI-RadListView-Getting-Started](../../img/ns_ui/list-view-getting-started_2.png "Android")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Getting Started Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/listview/app/examples/getting-started)

Related articles you might find useful:

* [**Pull to refresh**]({% slug listview-features-pull-to-refresh %})
* [**Swipe actions**]({% slug listview-features-swipe-actions %})
* [**Load on demand**]({% slug listview-features-load-on-demand %})
* [**Item reorder**]({% slug listview-features-item-reorder %})
* [**Item animations**]({% slug listview-features-item-animations %})
* [**Item layouts**]({% slug listview-features-item-layouts %})
* [**Multiple Item Templates**]({% slug listview-multiple-templates %})
