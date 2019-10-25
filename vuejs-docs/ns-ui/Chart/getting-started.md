---
title: Getting Started
page_title: Chart Getting Started | Progress NativeScript UI Documentation
description: A getting started page of Chart for NativeScript. This article explains what are the steps to create a chart instance from scratch and use with Vue
slug: chart-getting-started-vue
tags: radchart, getting started, chart, Vue, nativescript, professional, ui
position: 2
publish: true
---

# Chart Getting Started

In this article, you will learn to start using NativeScript UI Chart: how to initialize the chart, how to create the data series and how to use the different axes.

* [Plugin Installation](#plugin-installation)
* [Add Chart to Component Template](#add-chart-to-component-template)
* [References](#references)

## Plugin Installation

Run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-chart
```

## Add Chart to Component Template

Before proceeding, make sure that the `nativescript-ui-chart/vue` plugin is installed in your main application file (usually `main.js` or `main.ts`). This plugin handles the registration of the custom directives and elements required by [nativescript-vue](https://nativescript-vue.org/).

#### Example 1: Register Chat Vue component

<snippet id='chart-imports-vue'/>

Now, you can use all the chart components and directives, as the `RadCartesianChart`, `RadPieChart`, etc. Look at this example component:

#### Example 2: Code of component:

<snippet id='chart-bar-series-vue'/>

#### Figure 1: Chart with BarSeries on Android (left) and iOS (right)

![Cartesian chart: Bar series](../../img/ns_ui/bar_series_android.png "Bar series on Android.") ![Cartesian chart: Bar series](../../img/ns_ui/bar_series_ios.png "Bar series on iOS.")

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-vue) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Chart Bar Series Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/series)

Related articles you might find useful:

* [**Bar Series**]({% slug chart-series-bar-vue %})
* [**Line Series**]({% slug chart-series-line-vue %})
* [**Axes Overview**]({% slug chart-axes-overview-vue %})
