---
title: Cartesian Chart Type
page_title: RadCartesianChart | Progress NativeScript UI Documentation
description: This article is a short description and summary of RadCartesianCharts's features.
slug: chart-types-cartesian-angular
tags: chart, cartesian, overview, radcartesianchart, angular
position: 1
publish: true
---

# RadCartesianChart
{% typedoc_link classes:RadCartesianChart %} is one of the two chart types part of Progress NativeScript UI. This chart visualizes its data points using the Cartesian coordinate system. The X and Y axes define how the coordinates of each point in the plot area are calculated and the series type define the way these data points are visualized.

## Supported Series
`RadCartesianChart` can visualize the following types of series:

- [LineSeries]({% slug chart-series-line-angular %} "Read more about LineSeries"): Visualizes a collection of data points using a Line.
- [SplineSeries]({% slug chart-series-spline-angular %} "Read more about SplineSeries"): Visualizes a collection of data points using a Curve.
- [SplineAreaSeries]({% slug chart-series-spline-area-angular %} "Read more about SplineSeries"): Visualizes a collection of data points using a Curve.
- [AreaSeries]({% slug chart-series-area-angular %} "Read more about AreaSeries"): Represents a chart series that are visualized like an area figure in the Cartesian space.
- [BarSeries]({% slug chart-series-bar-angular %} "Read more about BarSeries"): Represents a chart series that plot their points using rectangular shapes, named "Bars". RadCartesianChart can display BarSeries both horizontally and vertically. If the series are more than one, they can be stacked.
- [RangeBarSeries]({% slug chart-series-range-bar-angular %} "Read more about RangeBarSeries"): Represents a chart series that are a special case of bar series where the width of each bar denotes the difference between data point's low and high value.
- [BubbleSeries]({% slug chart-series-bubble-angular %} "Read more about BubbleSeries"): Represents a categorical bubble series. This type of chart series uses 3 parameters from the business entity to visualize the data points: category, Y-value and size of the bubble.
- [ScatterBubbleSeries]({% slug chart-series-scatter-bubble-angular %} "Read more about ScatterBubbleSeries"): Represents a scatter bubble series. ScatterBubbleSeries like all other scatter series require two numerical axes to function properly.
- [ScatterSeries]({% slug chart-series-scatter-angular %} "Read more about ScatterSeries"): Represents a chart series that represent the data as points using two dimensional values (x,y) for horizontal and vertical axes respectively.
- [CandlestickSeries]({% slug chart-series-candlestick-angular %} "Read more about CandlestickSeries"): Represents a series that operate with a special kind of data in the form of four parameters defining the stock market - open, high, low, and close.
- [OhlcSeries]({% slug chart-ohlc-series-angular %} "Read more about OhlcSeries"): Represents a series that operate with a special kind of data in the form of four parameters defining the stock market - open, high, low, and close.

## Supported Axes
`RadCartesianChart` needs to have two axes which will be used to calculate correctly the position of each data point. Usually one of the axes will be used to display the category of each data point and the other will represent its value. Here are the supported axes:

### Categorical axes
- [CategoricalAxis]({% slug chart-axes-categorical-angular %} "Read more about CategoricalAxis"): Arranges the plotted data points in categories where the key of each category is the point's value (if available) for that axis or its index within the points collection. The point's coordinate, specified by this axis is discrete and is calculated depending on the size of the category slot where the point resides.
- [DateTimeCategoricalAxis]({% slug chart-axes-datetimecategorical-angular %} "Read more about DateTimeCategoricalAxis"): This is a special categorical axis that expects each data point to provide a DateTime structure as its value for this axis. The points are grouped by a user-defined date-time component (Year, Month, Day, etc.) and then the groups are sorted chronologically.

### Linear axes
- [LinearAxis]({% slug chart-axes-linear-angular  %} "Read more about LinearAxis"): Calculates the coordinate of each data point, depending on the actual numerical value this point provides for the axis. A LinearAxis exposes Minimum and Maximum properties to allow for explicit definition of the range of values visible on this axis. If these properties are not specified, the axis will automatically calculate the range, depending on the minimum and maximum data point values.

## Creating a `RadCartesianChart`
In order to setup an instance of `RadCartesianChart` you need to follow the instructions in the dedicated [Getting Started]({% slug chart-getting-started-angular %} "Chart Getting Started.") article.
