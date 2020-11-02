---
title: Getting started
page_title: RadListView Getting started | Progress NativeScript UI Documentation
description: This article is a short description and summary of RadListView's features and their usage with Vue
slug: listview-getting-started-vue
tags: listview, overview, vue, nativescript, professional, ui
position: 2
publish: true
---

# RadListView for Vue - Getting started
{% typedoc_link classes:RadListView %} for Vue is exposed through the {% typedoc_link classes:RadListViewComponent %} class. This article will guide you through the process of adding a {% typedoc_link classes:RadListViewComponent %} in your application, binding it to a data-source and visualizing the items by using an item template of your choice. For more information on how each separate feature of {% typedoc_link classes:RadListViewComponent %} is used, please refer to the dedicated articles which are using the same scenario and extend it further.

## Installation
Run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-listview
```

## Adding a RadListView to your Vue app
The first step is installing the Vue plugin for `RadListView` integration, adding that fragment in the top of the main file entry (usually `main.js` or `main.ts`):

<snippet id='listview-vue-import'/>

To add an instance of {% typedoc_link classes:RadListViewComponent %} in an Vue template you need to use the `<RadListView></RadListView>` tag. You will also need to bind the control to a source of items and define an item template which will determine how each business object from the source collection will be visualized. The following Vue instance demonstrates this:

<snippet id='listview-getting-started-vue'/>

## Using `ObservableArray`

 There are some caveats as the inner `RadListView` object does not know about Vue and does not observe the re-active Vue data. So, in order to fix the problem and update the list if some item changes, the Vue plugin does automatically refresh the control entirely if it detects any changes on the list.

 This may cause some minor UI issues as scrolling to the first position when list changes, and this may not be a desired behavior.

 If you want to get rid of this minor caveats, you can use `ObservableArray` instead of regular arrays. Using an **ObservableArray** instance as a source for `RadListView` will ensure that changes in the source collection will be automatically taken care of by the control

 The previous code would be like this:

 ```
import { ObservableArray } from 'tns-core-modules/data/observable-array';
 export default {
  template: `
  <Page>
    <StackLayout>
      <RadListView ref="listView"
                   for="item in itemList"
                   @itemTap="onItemTap">
        <v-template>
          <StackLayout orientation="vertical">
            <Label :text="item.name"></Label>
            <Label :text="item.description"></Label>
          </StackLayout>
        </v-template>
      </RadListView>
    </StackLayout>
  </Page>
  `,
  data() {
    return {
      itemList: new ObservableArray([
        {name: 'Item 1', description: 'Item 1 description'},
        {name: 'Item 2', description: 'Item 2 description'},
        {name: 'Item 3', description: 'Item 3 description'},
      ]),
    };
  },
  methods: {
    onItemTap({ item }) {
      console.log(`Tapped on ${item.name}`);
    },
  }
};
```

## References

Related articles you might find useful:

* [**Overview**]({% slug listview-overview-vue %})
* [**Pull to refresh**]({% slug listview-features-pull-to-refresh-vue %})
* [**Swipe actions**]({% slug listview-features-swipe-actions-vue %})
* [**Item layouts**]({% slug listview-features-item-layouts-vue %})
