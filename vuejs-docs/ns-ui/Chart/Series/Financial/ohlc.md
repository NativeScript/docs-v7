---
title: OHLC Series
page_title: OHLC series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of OHLC series and continues with a sample scenario of how OHLC series are used.
slug: chart-ohlc-series-vue
tags: series, OHLC, vue, nativescript, professional, ui
position: 3
publish: true
---

## RadChart OHLC series
This series operates with a special kind of data in the form of four parameters defining the stock market - open, high, low, and close. The high and low values show the price range (the highest and lowest prices) over one unit of time. The open and close values indicate the opening and closing price of the stock for the corresponding period. The width of the ohlc bar is determined by the period between 2 bars and the range of the axis

### Customization

To present a better view over OHLC series we will take a look at the following example:

### Example
Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance.

Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.

<snippet id='chart-get-financial-data'/>

All that is left is to declare the template of the vue component in which we:

- Declare a {% typedoc_link classes:RadCartesianChart %}
- Declare the {% typedoc_link classes:DateTimeCategoricalAxis %} and {% typedoc_link classes:LinearAxis %} between the {% typedoc_link classes:RadCartesianChart %} open and close tags
- After that set the **`tkCartesianHorizontalAxis`** and **`tkCartesianVerticalAxis`** directive to the axes
- Finally declare a {% typedoc_link classes:OhlcSeries %} instance to it, bind the {% typedoc_link classes:OhlcSeries,member:items%} to the source of data and set the **`tkCartesianSeries`** directive

<snippet id='chart-ohlc-series-vue'/>

![Cartesian chart: OHLC series](../../../../../ui/img/ns_ui/ohlc_series_anroid.png " Scatter Bubble series on Android.") ![Cartesian chart: OHLC series](../../../../../ui/img/ns_ui/ohlc_series_ios.png "Scatter Bubble series on iOS.")
