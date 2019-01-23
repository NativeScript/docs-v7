---
title: Scatter
page_title: Scatter series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Scatter series and continues with a sample scenario of how Scatter series are used.
slug: chart-series-scatter-angular
tags: series, cartesian, scatter, angular
position: 9
publish: true
---

# Scatter series: Overview
Scatter series are used in the context of a {% typedoc_link classes:RadCartesianChart %} and two {% typedoc_link classes:LinearAxis %} instances. Besides the setup requirements that come from {% typedoc_link classes:CartesianSeries %}, {% typedoc_link classes:ScatterSeries %} require an additional {% typedoc_link classes:ScatterSeries,member:xProperty%} and {% typedoc_link classes:ScatterSeries,member:yProperty%} parameters instead of {% typedoc_link classes:ScatterSeries,member:valueProperty%} and {% typedoc_link classes:ScatterSeries,member:categoryProperty%}.

## Example
Just like with all angular 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance. We create a basic angular `Component` that contains a collection of objects provided by an custom service, which will be used by the chart to provide intuitive data visualization.

The service is a simple 'mock' of an backend call that will return an array of objects:

<snippet id='chart-angular-data-service'/>

Inside that service we have a single function which returns an array:

<snippet id='chart-angular-range-bar-source'/>

<snippet id='chart-angular-product'/>

All that is left is to declare the template of the angular component in which we:

- Declare a {% typedoc_link classes:RadCartesianChart %}
- Declare two {% typedoc_link classes:LinearAxis %} between the {% typedoc_link classes:RadCartesianChart %} open and close tags
- After that set the **`tkCartesianHorizontalAxis`** and **`tkCartesianVerticalAxis`** directive to the axes
- Finally declare a {% typedoc_link classes:ScatterSeries %} instance to it, bind the {% typedoc_link classes:ScatterSeries,member:items%} to the source of data and set the **`tkCartesianSeries`** directive

<snippet id='chart-angular-scatter-series-component'/>
<snippet id='chart-angular-scatter-series'/>

![Cartesian chart: Scatter series](images/scatter_series_android.png " Scatter series on Android.") ![Cartesian chart: Scatter series](images/scatter_series_ios.png "Scatter series on iOS.")
