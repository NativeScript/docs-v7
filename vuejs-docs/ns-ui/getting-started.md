---
title: Getting started
page_title: Getting Started with Progress NativeScript UI for Vue | Progress NativeScript UI Documentation
description: This is a getting started guide for using NativeScript UI with Vue
slug: getting-started-vue
tags: getting started, vue, ui, nativescript
position: 2
publish: true
---
# Getting Started
The following article assumes that you already have the latest version of NativeScript and have [created a NativeScript application]({% slug introduction %}).

## Installation

- Open a console window and go to the root directory of your NativeScript application.
- Install the package that contains the component that you want to use by typing nativescript command that adds a plugin. For example, if you want to use the chart, type  
````
$ tns plugin add nativescript-ui-chart
````
- Then import/require the installed component in your app

```TypeScript
import * as chartModule from "nativescript-ui-chart";
```
```JavaScript
var chartModule = require("nativescript-ui-chart");
```

## Getting Started with Vue
To use a plugin which is part from Progress NativeScript UI with Vue you need to first install the corresponding plugin by executing `tns plugin add nativescript-ui-<plugin-name>`, for example `tns plugin add nativescript-ui-chart`

After installing the NPM package, we only need to install the Vue plugin by importing the `nativescript-ui-chart/vue` module and calling `Vue.use()`:

```
import Vue from 'nativescript-vue';
import RadChartPlugin from 'nativescript-ui-chart/vue';

Vue.use(RadChartPlugin);
```

Once the module is required inside the NativeScript + Vue application you can take advantage of its contents by utilizing the RadCartesianChart. See this example of `App.vue` file:

```
<template>
  <Page>
    <RadCartesianChart>
      <BarSeries v-tkCartesianSeries
                 categoryProperty="Country"
                 valueProperty="Amount"
                 :items="items" />
      <CategoricalAxis v-tkCartesianHorizontalAxis />
      <LinearAxis v-tkCartesianVerticalAxis />
    </RadCartesianChart>
  </Page>
</template>

<script>
  import { ObservableArray } from 'tns-core-modules/data/observable-array'

  export const getCountriesData = () => {
    return new ObservableArray([
      { Country: 'Germany', Amount: 15 },
      { Country: 'France', Amount: 13 },
      { Country: 'Bulgaria', Amount: 24 },
      { Country: 'Spain', Amount: 11 },
      { Country: 'USA', Amount: 18 }
    ])
  }

  export default {
    data() {
      return {
        items: getCountriesData(),
      }
    }
  }
</script>
```
