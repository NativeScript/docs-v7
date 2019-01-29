---
title: Provide the Source
page_title: RadDataForm Provide the Source | Progress NativeScript UI Documentation
description: A getting started page of RadDataForm for NativeScript. This article explains what are the steps to create a RadDataForm instance from scratch and provide the source object that will be edited
slug: dataform-gettingstarted-vue
tags: raddataform, gettingstarted, dataform, source, Vue
position: 0
publish: true
---

# RadDataForm: Provide the Source

This article will guide you through the process of adding a {% typedoc_link classes:RadDataForm %} instance to a page in a {N} + Vue application and using it to edit the properties of a business object.

* [Create the Source Object](#create-the-source-object)
* [Add RadDataForm to the Page](#add-raddataform-to-the-page)
* [References](#references)

## Create the Source Object

In order to use `RadDataForm` to edit an object, we need to have the object that we will edit. In this example, we will create a class `Person`, pass an instance of this class to `RadDataForm` and then we will be able to edit the person's properties.

#### Example 1: Declare the object that we will use as a source for RadDataForm

## Installation
Run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-dataform
```

## Install the RadDataForm Vue plugin

Add this to the main Javascript or Typescript file, usually called `main.js` or `main.ts`:

```
import RadDataFormPlugin from 'nativescript-ui-dataform/vue';

Vue.use(RadDataFormPlugin);
...
```

## Add RadDataForm to the Page
Before proceeding, make sure that the `nativescript-ui-dataform/vue` module is required inside your application. This module handles the registration of the custom directives and elements required by [nativescript-vue](https://nativescript-vue.org/).

After that simply add the {% typedoc_link classes:RadDataForm %} tag to the HTML and set its {% typedoc_link classes:RadDataForm,member:source%} accordingly:

- Add RadDataForm to a page

Note the [data binding](https://docs.nativescript.org/Vue/core-concepts/Vue-data-binding.html) of the `source` property of `RadDataForm` to the `person` property of our component.

- Define the property used for binding

See the following minimalist example:

```
export default {
  template: `
  <Page>
    <StackLayout>
      <RadDataForm
        :source="person">
      </RadDataForm>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      person: {
        name: 'John',
        age: 23,
        email: 'john@company.com',
        city: 'New York',
        street: '5th Avenue',
        streetNumber: 11,
      }
    };
  }
};
```

If you run the application now, you should see the default editor for each property of the provided source object.

#### Figure 1: The basic RadDataForm on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Getting-Started-Android](/controls/NativeScript/DataForm/images/dataform-start-source-android.png "DataForm in Android") ![NativeScriptUI-DataForm-Getting-Started-iOS](/controls/NativeScript/DataForm/images/dataform-start-source-ios.png "DataForm in iOS")
