---
title: Pie
page_title: Pie series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Pie series and continues with a sample scenario of how Pie series are used.
slug: chart-series-pie-angular
tags: series, cartesian, pie, angular, nativescript, professional, ui
position: 10
publish: true
---

# RadChart Pie Series
Unlike all other series, {% typedoc_link classes:PieSeries %} do not require axes. They visualize each data point as pie slices with arc size directly proportional to the magnitude of the raw data point's value. Pie slices represent data in one direction contrasting with the other series which represent data in two dimensions.

#### Example
Just like with all angular 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadPieChart %} instance. We create a basic angular `Component` that contains a collection of objects provided by an custom service, which will be used by the chart to provide intuitive data visualization.

The service is a simple 'mock' of an backend call that will return an array of objects:

<snippet id='chart-angular-data-service'/>

Inside that service we have a single function which returns an array:

<snippet id='chart-angular-categorical-source'/>

<snippet id='chart-angular-country'/>

All that is left is to declare the template of the angular component in which we:

- Declare two {% typedoc_link classes:RadPieChart %} instances
- Declare a {% typedoc_link classes:PieSeries %} instance to one of them and {% typedoc_link classes:DonutSeries %} to the other, bind the {% typedoc_link classes:PieSeries,member:items%} of both {% typedoc_link classes:RadPieChart %} instances to the source of data and set the **`tkPieSeries`** directive

<snippet id='chart-angular-pie-series-component'/>
<snippet id='chart-angular-pie-series'/>

This is how the example looks like:
![Cartesian chart: Pie series](../../../img/ns_ui/pie_series_android.png "Pie series on Android.") ![Cartesian chart: Pie series](../../../img/ns_ui/pie_series_ios.png "Pie series on iOS.")
