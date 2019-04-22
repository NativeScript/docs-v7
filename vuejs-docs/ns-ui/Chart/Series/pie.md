---
title: Pie
page_title: Pie series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Pie series and continues with a sample scenario of how Pie series are used.
slug: chart-series-pie-vue
tags: series, cartesian, pie, vue, nativescript, professional, ui
position: 10
publish: true
---

# RadChart Pie Series
Unlike all other series, {% typedoc_link classes:PieSeries %} do not require axes. They visualize each data point as pie slices with arc size directly proportional to the magnitude of the raw data point's value. Pie slices represent data in one direction contrasting with the other series which represent data in two dimensions.

### Example
Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance.

Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.

<snippet id='chart-get-pie-data-vue'/>

All that is left is to declare the template of the vue component in which we:

- Declare two {% typedoc_link classes:RadPieChart %} instances
- Declare a {% typedoc_link classes:PieSeries %} instance to one of them and {% typedoc_link classes:DonutSeries %} to the other, bind the {% typedoc_link classes:PieSeries,member:items%} of both {% typedoc_link classes:RadPieChart %} instances to the source of data and set the **`tkPieSeries`** directive

<snippet id='chart-pieseries-selection-vue'/>

This is how the example looks like:
![Cartesian chart: Pie series](../../../../ui/img/ns_ui/pie_series_android.png "Pie series on Android.") ![Cartesian chart: Pie series](../../../../ui/img/ns_ui/pie_series_ios.png "Pie series on iOS.")
