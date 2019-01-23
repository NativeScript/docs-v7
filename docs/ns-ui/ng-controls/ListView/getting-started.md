---
title: Getting started
page_title: RadListView Getting started | Progress NativeScript UI Documentation
description: This article is a short description and summary of RadListView's features and their usage with Angular
slug: listview-getting-started-angular
tags: listview, overview, angular
position: 2
publish: true
---

# RadListView for Angular: Getting started
{% typedoc_link classes:RadListView %} for Angular is exposed through the {% typedoc_link classes:RadListViewComponent %} class. This article will guide you through the process of adding a {% typedoc_link classes:RadListViewComponent %} in your application, binding it to a data-source and visualizing the items by using an item template of your choice. For more information on how each separate feature of {% typedoc_link classes:RadListViewComponent %} is used, please refer to the dedicated articles which are using the same scenario and extend it further.

## Installation
Run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-listview
```

## Adding a RadListView to your template
Before proceeding, make sure that the {% typedoc_link classes:NativeScriptUIListViewModule %} from the *nativescript-ui-listview* plugin has been imported in an `ngModule` in your app as explained [here]({% slug getting-started-angular %}).

To add an instance of {% typedoc_link classes:RadListViewComponent %} in an Angular template you need to use the `<RadListView></RadListView>` tag. You will also need to bind the control to a source of items and define an item template which will determine how each business object from the source collection will be visualized. The following snippet demonstrates this:

<snippet id='listview-getting-started-angular-xml'/>

The source collection here is exposed through a property on the component called {% typedoc_link classes:RadListViewComponent,member:dataItems %}. Here's how the component looks like:

<snippet id='listview-getting-started-angular'/>

Following the Angular best practices, we have separated the data from the UI by providing the data items via a service called `DataItemService` that exposes a `getDataItems()` method which in retrieves the source collection.

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Getting Started Example](https://github.com/telerik/nativescript-ui-samples-angular/tree/master/listview/app/examples/getting-started)

Related articles you might find useful:

* [**Pull to refresh**]({% slug listview-features-pull-to-refresh-angular %})
* [**Swipe actions**]({% slug listview-features-swipe-actions-angular %})
* [**Load on demand**]({% slug listview-features-load-on-demand-angular %})
* [**Item reorder**]({% slug listview-features-item-reorder-angular %})
* [**Item animations**]({% slug listview-features-item-animations-angular %})
* [**Item layouts**]({% slug listview-features-item-layouts-angular %})
* [**Multiple Item Templates**]({% slug listview-multiple-templates-angular %})
