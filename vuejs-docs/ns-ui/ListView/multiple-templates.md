---
title: Item Templates
page_title: RadListView Item Templates | Progress NativeScript UI Documentation
description: This article discusses the item templates feature of RadListView.
slug: listview-multiple-templates-vue
tags: radlistview, multiple, template, templates, vue
position: 8
publish: true
---

# RadListView: Item template/templates
By default when using the {% typedoc_link classes:RadListView %} in order for the items from its data source to be visualized all that you need to do is declare your own `<v-template>` in the Vue component template with the desired markup. This will make sure that each of the business objects of the passed to the {% typedoc_link classes:RadListView,member:items%} property are visualized using that template, but there are scenarios where you may want to use different template for specific business objects (different sections, important business objects, more detailed objects etc.). In such scenarios the multiple item templates is possible for fix the need.

## Using multiple item templates
In order to setup the {% typedoc_link classes:RadListView %} to use different templates for its items representation you will need to create multiple separate `<v-template name="somename">` elements.

For choose what template is selected for rendering each item there are two different approaches:

- Using the `if` attribute in the `<v-template>` templates. The easiest way.
- Setting the the {% typedoc_link classes:RadListView,member:itemTemplateSelector%} property and implementing the function.

#### Example 1: Using the `if` attribute in `<v-template>`

```
export default {
  template: `
  <Page>
    <GridLayout orientation="vertical" rows="auto, *">
      <RadListView for="item in itemList">
        <v-template name="red" if="item.type === 'red'">
          <StackLayout class="red" orientation="vertical">
            <Label :text="item.name"></Label>
          </StackLayout>
        </v-template>
        <v-template name="green" if="item.type === 'green'">
          <StackLayout class="green" orientation="vertical">
            <Label :text="item.name"></Label>
          </StackLayout>
        </v-template>
        <v-template name="blue" if="item.type === 'blue'">
          <StackLayout class="blue" orientation="vertical">
            <Label :text="item.name"></Label>
          </StackLayout>
        </v-template>
      </RadListView>
    </GridLayout>
  </Page>
  `,

  data () {
    return {
      itemList: [
        {name: 'Item 1', type: 'red'},
        {name: 'Item 2', type: 'green'},
        {name: 'Item 3', type: 'blue'},
        {name: 'Item 4', type: 'red'},
        {name: 'Item 5', type: 'green'},
        {name: 'Item 6', type: 'blue'},
      ],
    };
  },
};
```

#### Example 2: Setting up `itemTemplateSelector`

In the code snippets bellow we are declaring multiple `<v-template></v-template>` instances in the HTML. After that we are creating a `templateSelector` function in our Vue `Component` that simply returns the property of the business object that will be used to determine the template of its item representation and finally we are binding that function to the {% typedoc_link classes:RadListView,member:itemTemplateSelector%} property:

```
export default {
  template: `
  <Page>
    <GridLayout orientation="vertical" rows="auto, *">
      <RadListView for="item in itemList"
                   :itemTemplateSelector="templateSelector">
        <v-template name="red">
          <StackLayout class="red">
            <Label :text="item.name"></Label>
          </StackLayout>
        </v-template>
        <v-template name="green">
          <StackLayout class="green">
            <Label :text="item.name"></Label>
          </StackLayout>
        </v-template>
        <v-template name="blue">
          <StackLayout class="blue">
            <Label :text="item.name"></Label>
          </StackLayout>
        </v-template>
      </RadListView>
    </GridLayout>
  </Page>
  `,

  data () {
    return {
      itemList: [
        {name: 'Item 1', description: 'Item 1 description'},
        {name: 'Item 2', description: 'Item 2 description'},
        {name: 'Item 3', description: 'Item 3 description'},
        {name: 'Item 4', description: 'Item 4 description'},
        {name: 'Item 5', description: 'Item 5 description'},
        {name: 'Item 6', description: 'Item 6 description'},
      ],
    };
  },

  methods: {
    templateSelector (item, index, items) {
      return ['red', 'green', 'blue'][index % 3]
    },
  }
};
```