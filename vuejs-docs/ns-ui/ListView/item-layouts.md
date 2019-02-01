---
title: Item Layouts
page_title: 'RadListView Item layouts | Progress NativeScript UI Documentation'
description: This article gives insight how different item layouts are used with RadListView.
slug: listview-features-item-layouts-vue
tags: radlistview, layouts, vue, nativescript, professional, ui
position: 4
publish: true
---

# RadListView Item Layouts
Often there are cases when you need to display your list of items in non-linear layout. For examples, you may want to have a grid of items. For that purpose, RadListView defines three types of item layouts which are fully UI virtualized and optimized for mobile. The following layout types are available:
- **Linear layout** - this is the most common layout used with a RadListView component. Items are ordered horizontally or vertically one at a time.
- **Grid layout** - this is a layout in which items are ordered in columns and rows. Depending on the scrolling orientation (vertical or horizontal), the amount of columns or rows is predefined.
- **Staggered layout** - this is a fancier version of the Grid layout where items are also ordered in rows or columns depending on the scrolling direction whereas no free spaces are preserved between neighboring items in the direction of scrolling.

## Using the `layout` property
This is the way to change the list layout. The `layout` property can have `linear`, `grid` or `staggered` values.

## Other related properties

- `orientation` - this property can have `vertical` or `horizontal` values, affecting to the scrolling direction.
- `gridSpanCount` - the columns or rows number in the current layout, depending on the scrolling direction.
- `itemHeight` and `itemWidth` - properties here for size tuning.

## Examples

The following code snippet demonstrates how to define a grid `RadListView` instance:

```
export default {
  template: `
  <Page>
    <StackLayout>
      <RadListView for="item in itemList"
                   layout="grid"
                   itemHeight="100">
        <v-template>
          <StackLayout orientation="vertical">
            <Label :text="item.name"></Label>
          </StackLayout>
        </v-template>
      </RadListView>
    </StackLayout>
  </Page>
  `,
  data() {
    return {
      itemList: [
        {name: 'Item 1', description: 'Item 1 description'},
        {name: 'Item 2', description: 'Item 2 description'},
        {name: 'Item 3', description: 'Item 3 description'},
      ],
    };
  },
};
```

Example of staggered layout:

```
const words = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

const getRandomString = () => {
  const length = Math.round((Math.random() * 15));
  let result = words[0];
  for (let i = 0; i < length; i++) {
      result += (words[i % words.length] + ' ');
  }
  return result;
}

const getRandomItems = (size: number) => {
  let items = [];

  for (let i=0 ; i<size; i++) {
    items.push({
      name: `Item ${i}`,
      description: getRandomString(),
    });
  }
  return items;
}

export default {
  template: `
  <Page>
    <StackLayout>
      <RadListView for="item in itemList"
                   layout="staggered"
                   gridSpanCount="3">
        <v-template>
          <StackLayout class="item" orientation="vertical">
            <Label :text="item.name"></Label>
            <Label :text="item.description" textWrap="true"></Label>
          </StackLayout>
        </v-template>
      </RadListView>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      itemList: getRandomItems(20),
    };
  },
};
```
