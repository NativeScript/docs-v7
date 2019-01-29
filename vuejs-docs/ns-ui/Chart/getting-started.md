---
title: Getting Started
page_title: Chart Getting Started | Progress NativeScript UI Documentation
description: A getting started page of Chart for NativeScript. This article explains what are the steps to create a chart instance from scratch and use with Vue
slug: chart-getting-started-vue
tags: radchart, getting started, chart, Vue
position: 2
publish: true
---

# RadChart: Getting Started
In this article, you will learn to get started with the Chart plugin for NativeScript: how to initialize the chart, how to create the data series and how to use the different axes.

## Installation
Run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-chart
```

## Adding a RadCartesianChart to Your Component's template
Before proceeding, make sure that the `nativescript-ui-chart/vue` plugin is instaled in your main application file (usually `main.js` or `main.ts`). This plugin handles the registration of the custom directives and elements required by [nativescript-vue](https://nativescript-vue.org/).

```
import Vue from 'nativescript-vue';
import RadChartPlugin from 'nativescript-ui-chart/vue';

Vue.use(RadChartPlugin);
```

Now, you can use all the chart components and directives, as the `RadCartesianChart`, `RadPieChart`, etc. Look at this example component:

```
const getCountriesData = () => {
  return new ObservableArray([
    { Country: 'Germany', Amount: 15, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
    { Country: 'France', Amount: 13, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
    { Country: 'Bulgaria', Amount: 24, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
    { Country: 'Spain', Amount: 11, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
    { Country: 'USA', Amount: 18, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
  ]);
};

export default {
  template: `
  <Page>
    <RadCartesianChart>
      <LineSeries v-tkCartesianSeries
                  categoryProperty="Country"
                  valueProperty="Amount"
                  :items="items" />
      <CategoricalAxis v-tkCartesianHorizontalAxis />
      <LinearAxis v-tkCartesianVerticalAxis />
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      items: getCountriesData(),
    };
  }
};

```

This will produce a page showing a Chart that will look like:

![TelerikUI-Chart-Getting-Started](/controls/angular/Chart/Images/chart-getting-started-android.png "Android")  ![TelerikUI-Chart-Getting-Started](/controls/angular/Chart/Images/chart-getting-started-ios.png "iOS")
