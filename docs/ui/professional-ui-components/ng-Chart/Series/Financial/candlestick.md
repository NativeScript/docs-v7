---
title: Candlestick series
page_title: Candlestick series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Candlestick series and continues with a sample scenario of how Candlestick series are used.
slug: chart-series-candlestick-angular
tags: series, cartesian, candlestick, angular
position: 2
publish: true
---

# CandleStick series: overview
 This series operates with a special kind of data in the form of four parameters defining the stock market - open, high, low, and close. The high and low values show the price range (the highest and lowest prices) over one unit of time. The open and close values indicate the opening and closing price of the stock for the corresponding period. Candlestick series have body, which has a different color depending on the value of open and close prices of the financial data point. The width of the candlestick body is determined by the period between 2 candlesticks and the range of the axis. You should use the {% typedoc_link classes:LinearAxis,member:majorStep%} property of {% typedoc_link classes:LinearAxis %} to change the period between 2 candlesticks. Here is how to set up Candlestick series:

## Customization

Candlestick series have body, which has a different color depending on the value of open and close prices of the financial data point. The width of the candlestick body is determined by the period between 2 candlesticks and the range of the axis. You should use the {% typedoc_link classes:LinearAxis,member:majorStep%} property of {% typedoc_link classes:LinearAxis %} to change the period between 2 candlesticks. The following example shows how to set up Candlestick series:


## Example
Just like with all angular 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance. We create a basic angular `Component` that contains a collection of objects provided by an custom service, which will be used by the chart to provide intuitive data visualization.

The service is a simple 'mock' of an backend call that will return an array of objects:

<snippet id='chart-angular-data-service'/>

Inside that service we have a single function which returns an array:

<snippet id='chart-angular-categorical-source'/>

<snippet id='chart-angular-currency'/>

All that is left is to declare the template of the angular component in which we:

- Declare a {% typedoc_link classes:RadCartesianChart %}
- Declare the {% typedoc_link classes:DateTimeCategoricalAxis %} and {% typedoc_link classes:LinearAxis %} between the {% typedoc_link classes:RadCartesianChart %} open and close tags
- After that set the **`tkCartesianHorizontalAxis`** and **`tkCartesianVerticalAxis`** directive to the axes
- Finally declare a {% typedoc_link classes:CandlestickSeries %} instance to it, bind the {% typedoc_link classes:CandlestickSeries,member:items%} to the source of data and set the **`tkCartesianSeries`** directive

<snippet id='chart-angular-candlestick-series-component'/>
<snippet id='chart-angular-candlestick-series'/>

![Cartesian chart: Scatter Bubble series](images/candlestick_series_android.png " Scatter Bubble series on Android.") ![Cartesian chart: Scatter Bubble series](images/candlestick_series_ios.png "Scatter Bubble series on iOS.")
