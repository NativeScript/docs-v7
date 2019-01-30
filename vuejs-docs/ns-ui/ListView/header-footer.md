---
title: Header and footer
page_title: RadListView Header and Footer | Progress NativeScript UI Documentation
description: This article explains how header and footer are configured in RadListView and Vue.
slug: listview-header-footer-vue
tags: listview, header, footer, vue, nativescript, professional, ui
position: 6
publish: true
---

# RadListView Overview
Header and Footer are a special kind of elements that are displayed at the beginning and at the end of the scrollable data list. They are part of the core functionality of `RadListView` and are exposed through two special `<v-template name="header">` and `<v-template name="footer">` components (See [v-template docs](https://nativescript-vue.org/en/docs/utilities/v-template/)). This article explains how Header and Footer are defined on {% typedoc_link classes:RadListViewComponent %}  with Vue.

## Defining Header and Footer
The following code snippet demonstrates a sample scenario in which a header and a footer are shown on a `RadListView` instance:

```
export default {
  template: `
  <Page>
    <StackLayout>
      <RadListView ref="listView"
                   for="item in itemList">
        <v-template name="header">
          <Label text="List header"></Label>
        </v-template>

        <v-template>
          <StackLayout class="item" orientation="vertical" style="margin-top: 20">
            <Label :text="item.title">
            </Label>
          </StackLayout>
        </v-template>

        <v-template name="footer">
          <Label text="List footer"></Label>
        </v-template>
      </RadListView>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      itemList: [
        {title: 'Item 1'},
        {title: 'Item 2'},
      ],
    };
  },
};
```