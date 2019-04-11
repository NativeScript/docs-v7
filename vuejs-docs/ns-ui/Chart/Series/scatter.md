---
title: Scatter
page_title: Scatter series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Scatter series and continues with a sample scenario of how Scatter series are used.
slug: chart-series-scatter-vue
tags: series, cartesian, scatter, vue, nativescript, professional, ui
position: 9
publish: true
---

# RadChart Scatter Series
Scatter series are used in the context of a {% typedoc_link classes:RadCartesianChart %} and two {% typedoc_link classes:LinearAxis %} instances. Besides the setup requirements that come from {% typedoc_link classes:CartesianSeries %}, {% typedoc_link classes:ScatterSeries %} require an additional {% typedoc_link classes:ScatterSeries,member:xProperty%} and {% typedoc_link classes:ScatterSeries,member:yProperty%} parameters instead of {% typedoc_link classes:ScatterSeries,member:valueProperty%} and {% typedoc_link classes:ScatterSeries,member:categoryProperty%}.

## Example
Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance.

Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.

<snippet id='chart-get-scatter-data-vue'/>

All that is left is to declare the template of the vue component in which we:

- Declare a {% typedoc_link classes:RadCartesianChart %}
- Declare two {% typedoc_link classes:LinearAxis %} between the {% typedoc_link classes:RadCartesianChart %} open and close tags
- After that set the **`tkCartesianHorizontalAxis`** and **`tkCartesianVerticalAxis`** directive to the axes
- Finally declare a {% typedoc_link classes:ScatterSeries %} instance to it, bind the {% typedoc_link classes:ScatterSeries,member:items%} to the source of data and set the **`tkCartesianSeries`** directive

<snippet id='chart-scatter-vue'/>

![Cartesian chart: Scatter series](../../../../ui/img/ns_ui/scatter_series_android.png " Scatter series on Android.") ![Cartesian chart: Scatter series](../../../../ui/img/ns_ui/scatter_series_ios.png "Scatter series on iOS.")
