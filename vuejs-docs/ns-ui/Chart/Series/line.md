---
title: Line
page_title: Line series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Line series and continues with a sample scenario of how Line series are used.
slug: chart-series-line-vue
tags: series, cartesian, line, vue, nativescript, professional, ui
position: 4
publish: true
---
# RadChart Line Series
{% typedoc_link classes:LineSeries %} are categorical type of series that represent the objects from the data source as dots connected with a line. To use Line series, you need to initialize a {% typedoc_link classes:RadCartesianChart %}, define a {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %} and bind the series to a set of data objects.

### Example
Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance.

Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.

<snippet id='chart-get-countries-data-vue'/>

All that is left is to declare the template of the vue component in which we:

- Declare a {% typedoc_link classes:RadCartesianChart %}
- Declare the {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %} between the {% typedoc_link classes:RadCartesianChart %} open and close tags
- After that set the **`tkCartesianHorizontalAxis`** and **`tkCartesianVerticalAxis`** directive to the axes
- Finally declare a {% typedoc_link classes:LineSeries %} instance to it, bind the {% typedoc_link classes:LineSeries,member:items%} to the source of data and set the **`tkCartesianSeries`** directive

<snippet id='chart-getting-started-vue'/>

Here's how your Line chart should look like:

![Cartesian chart: Line series](../../../../ui/img/ns_ui/line_series_android.png "Bar series on Android.") ![Cartesian chart: Line series](../../../../ui/img/ns_ui/line_series_ios.png "Bar series on iOS.")
