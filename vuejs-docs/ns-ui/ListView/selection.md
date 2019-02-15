---
title: Item Selection
page_title: RadListView Item selection | Progress NativeScript UI Documentation
description: This article gives insight how RadListView item selection works in Vue context.
slug: listview-features-item-selection-vue
tags: listview, selection, multipleselection, vue, nativescript, professional, ui
position: 10
publish: true
---

# RadListView Item Selection
The Item Selection feature allows the end users to select items. A couple of selection modes are available, as well as events which are fired when the selection state of an item changes.

There are two _selection behaviors_ which define how item selection works:
- `None` - items cannot be selected
- `Press` - items are selected by tapping on them
- `LongPress` - items are selected by holding them

There are two main selection modes:
- _multiple selection_ - allows for selecting multiple items. `RadListView` keeps track of which items are selected and exposes them through a `getSelectedItems()` method. Multiple selection is enabled by setting the `multipleSelection` property to `true`.
- _single selection_ - only one item can be selected at a time. This mode is enabled by setting the `multipleSelection` property to `false`.

## Selection events
To notify you when the selection state of an item is changed, `RadListView` exposes the following events:
- `itemSelecting` - fired before an item is selected. Can be used to cancel the operation
- `itemSelected` - fired after an item is successfully selected. At this point the item is already in the selected items array returned by the `getSelectedItems()` method
- `itemDeselecting` - fired before an item is deselected. Can be used to cancel the operation
- `itemDeselected` - fired after an item has been successfully deselected. At this point the item is not part of the selected items array returned by the `getSelectedItems()` method.

## Example
The following snippets demonstrate how item selection is used.

```
import { ObservableArray } from 'tns-core-modules/data/observable-array';

export default {
  template: `
  <Page>
    <StackLayout>
      <RadListView ref="listView"
                   for="item in itemList"
                   selectionBehavior="Press"
                   :multipleSelection="true"
                   @itemSelected="onItemSelected"
                   @itemDeselected="onItemDeselected">
        <v-template>
          <StackLayout class="item" :class="item.class" orientation="vertical">
            <Label :text="item.name"></Label>
          </StackLayout>
        </v-template>
      </RadListView>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      itemList: new ObservableArray([
        {name: 'Item 1', class: ''},
        {name: 'Item 2', class: ''},
        {name: 'Item 3', class: ''},
      ]),
    };
  },
  methods: {
    onItemSelected({ index, object }) {
      const itemSelected = this.itemList.getItem(index);
      console.log(`Item selected: ${itemSelected.name}`);
      itemSelected.class = 'selected';
      this.itemList.setItem(index, itemSelected);
    },
    onItemDeselected({ index, object }) {
      let itemSelected = this.itemList.getItem(index);
      console.log(`Item deselected ${itemSelected.name}`);
      itemSelected.class = '';
    },
  }
};
```