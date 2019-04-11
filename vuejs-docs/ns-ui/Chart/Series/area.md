---
title: Area
page_title: Area series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Area series and continues with a sample scenario of how Area series are used.
slug: chart-series-area-vue
tags: series, cartesian, area, vue, nativescript, professional, ui
position: 6
publish: true
---

## RadChart Area Series
Area series work pretty much the same way as Line series with the only difference that the area between the categorical axis and the data points is filled with the corresponding color of the line. To use Area series, you need to initialize a {% typedoc_link classes:RadCartesianChart %}, define a {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %} and bind the series to a set of data objects.

### Example
Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance.

Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.

<snippet id='chart-get-countries-data-vue'/>

All that is left is to declare the template of the vue component in which we:

- Declare a {% typedoc_link classes:RadCartesianChart %}
- Declare the {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %} between the {% typedoc_link classes:RadCartesianChart %} open and close tags
- After that set the **`tkCartesianHorizontalAxis`** and **`tkCartesianVerticalAxis`** directive to the axes
- Declare a {% typedoc_link classes:AreaSeries %} instance to it, bind the {% typedoc_link classes:AreaSeries,member:items%} to the source of data and set the **`tkCartesianSeries`** directive

<snippet id='chart-get-countries-data-vue'/>

The final result is shown in the two images (android and ios) below.

![Cartesian chart: Area series](../../../../ui/img/ns_ui/area_series_android.png "Area series on Android.") ![Cartesian chart: Area series](../../../../ui/img/ns_ui/area_series_ios.png "Area series on iOS.")
