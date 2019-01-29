---
title: Overview
page_title: Chart Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of the charts's features.
slug: chart-overview-vue
tags: radchart, overview, chart, Vue
position: 1
publish: true
---

# Chart: Overview
`RadChart` for NativeScript is a charting component that has been designed for the mobile environment. It offers great performance in loading time, drawing capabilities and real-time updates. Its intuitive object model and public API allow you to easily setup complex chart objects and integrate them into your application. The control supports different chart types (and series) organized in hierarchies, depending on the coordinate system, used to plot the data points — for example Cartesian ({% typedoc_link classes:RadCartesianChart %}) and radial ({% typedoc_link classes:RadPieChart %}) coordinate systems.

A charting component in general is used to visualize (or plot) some data in a human-readable way through different representations like lines, areas, bars, pies, etc. Each series has a collection of data points—the data equivalent of a 2D point—and knows how to visualize them. Different series types may process certain types of data points—for example categorical series may contain categorical data points. An intuitive data binding mechanism transforms the raw data to appropriate data points depending on the chosen series.

## Chart Types
Depending on the coordinate system that you want to use for visualization of the data points, you can use the following chart types:

- RadCartesianChart: As the name hints, this concrete chart control uses the Cartesian coordinate system to plot the data points in its chart series. The X and Y axes define how each point’s coordinates in the plot area are calculated.
- RadPieChart: This concrete chart control visualizes its data points using radial coordinate system. Each data point is represented as a slice from a pie. The ratio between the space consumed by each slice and the space consumed by the whole chart is the same as the ratio between the value of the data point that it represents and the total value of all data points in the series.

# Vue directives

When using the {% typedoc_link classes:RadCartesianChart %} and {% typedoc_link classes:RadPieChart %} with Vue you are going to work with multiple custom Vue RadChart specific directives. In short these directives are used by the Vue framework to enable 'linking' between separate HTML tags into one 'complex' element. As the {% typedoc_link classes:RadCartesianChart %}) and ({% typedoc_link classes:RadPieChart %} are composed by many elements (axes, series, legend, labels etc.) we have created an easy way of declaring for example an {% typedoc_link classes:LineSeries %} as a simple standalone HTML tag and in order to 'link' it to its parent {% typedoc_link classes:RadCartesianChart %} you will only need to add the custom inline **`tkCartesianSeries`** directive.

Here is a full list of the available custom Vue {% typedoc_link classes:RadCartesianChart %} and {% typedoc_link classes:RadPieChart %} directives and components:

## Components
Represent the major elements:

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| RadCartesianChart | {% typedoc_link classes:RadCartesianChartComponent %} |
| RadPieChart       | {% typedoc_link classes:RadPieChartComponent %}       |

## Directives
Represent the smaller elements that are visualized in {% typedoc_link classes:RadCartesianChart %} and {% typedoc_link classes:RadPieChart %}:

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| RadLegendView | {% typedoc_link classes:RadLegendViewDirective %} |
| CategoricalAxis | {% typedoc_link classes:CategoricalAxis %} |
| LinearAxis | {% typedoc_link classes:LinearAxisDirective %} |
| DateTimeCategoricalAxis | {% typedoc_link classes:DateTimeCategoricalAxisDirective %} |
| DateTimeContinuousAxis | {% typedoc_link classes:DateTimeContinuousAxisDirective %} |
| LogarithmicAxis | {% typedoc_link classes:LogarithmicAxisDirective %} |
| LineSeries | {% typedoc_link classes:LineSeriesDirective %} |
| AreaSeries | {% typedoc_link classes:AreaSeriesDirective %} |
| SplineSeries | {% typedoc_link classes:SplineSeriesDirective %} |
| SplineAreaSeries | {% typedoc_link classes:SplineAreaSeriesDirective %} |
| BarSeries | {% typedoc_link classes:BarSeriesDirective %} |
| RangeBarSeries | {% typedoc_link classes:RangeBarSeriesDirective %} |
| BubbleSeries | {% typedoc_link classes:BubbleSeriesDirective %} |
| ScatterBubbleSeries | {% typedoc_link classes:ScatterBubbleSeriesDirective %} |
| ScatterSeries | {% typedoc_link classes:ScatterSeriesDirective %} |
| Palette | {% typedoc_link classes:PaletteDirective %} |
| PieSeries | {% typedoc_link classes:PieSeriesDirective %} |
| Donut Series | {% typedoc_link classes:Donut SeriesDirective %} |
| CandlestickSeries | {% typedoc_link classes:CandlestickSeriesDirective %} |
| OhlcSeries | {% typedoc_link classes:OhlcSeriesDirective %} |
| RadCartesianChartGrid | {% typedoc_link classes:CartesianChartGridDirective %} |
| ChartGridLineAnnotation | {% typedoc_link classes:ChartGridLineAnnotationDirective %} |
| ChartPlotBandAnnotation | {% typedoc_link classes:ChartPlotBandAnnotationDirective %} |
| Trackball | {% typedoc_link classes:TrackballDirective %} |
| PointLabelStyle | {% typedoc_link classes:PointLabelStyleDirective %} |



## Inline Directives
Represent the 'link' mechanism of the smaller with the major elements. Note that for using the directive, you need to prefix the HTML attribute with a `v-` prefix. See [Vue.js directives](https://vuejs.org/v2/guide/custom-directive.html).

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| tkCartesianHorizontalAxis | Sets the horizontal axis of the RadCartesianChart |
| tkCartesianVerticalAxis | Sets the vertical axis of the RadCartesianChart |
| tkCartesianSeries | Sets the series of the RadCartesianChart |
| tkPieSeries | Sets the series of the RadPieChart |
| tkLineVerticalAxis | Sets the vertical axis of the LineSeries |
| tkLineHorizontalAxis | Sets the horizontal axis of the LineSeries |
| tkBarVerticalAxis | Sets the vertical axis of the BarSeries |
| tkBarHorizontalAxis | Sets the horizontal axis of the BarSeries |
| tkRangeBarVerticalAxis | Sets the vertical axis of the RangeBarSeries |
| tkRangeBarHorizontalAxis | Sets the horizontal axis of the RangeBarSeries |
| tkAreaVerticalAxis | Sets the vertical axis of the AreaSeries |
| tkAreaHorizontalAxis | Sets the horizontal axis of the AreaSeries |
| tkSplineVerticalAxis | Sets the vertical axis of the SplineSeries |
| tkSplineHorizontalAxis | Sets the horizontal axis of the SplineSeries |
| tkSplineAreaVerticalAxis | Sets the vertical axis of the SplineAreaSeries  |
| tkSplineHorizontalAxis | Sets the horizontal axis of the SplineAreaSeries |
| tkBubbleVerticalAxis | Sets the vertical axis of the BubbleSeries |
| tkBubbleHorizontalAxis | Sets the horizontal axis of the BubbleSeries |
| tkScatterBubbleVerticalAxis | Sets the vertical axis of the ScatterBubbleSeries |
| tkScatterBubbleHorizontalAxis | Sets the horizontal axis of the ScatterBubbleSeries |
| tkCandlestickVerticalAxis | Sets the vertical axis of the CandlestickSeries |
| tkCandlestickHorizontalAxis | Sets the horizontal axis of the CandlestickSeries |
| tkOhlcVerticalAxis | Sets the vertical axis of the OhlcSeriesSeries |
| tkOhlcHorizontalAxis | Sets the horizontal axis of the OhlcSeriesSeries |
| tkScatterVerticalAxis | Sets the vertical axis of the ScatterSeriesSeries |
| tkScatterHorizontalAxis | Sets the horizontal axis of the ScatterSeriesSeries |
| tkCartesianGrid | Sets the grid of the RadCartesianChart |
| tkCartesianPalette | Sets the palettes of the RadCartesianChart |
| tkCartesianPaletteEntry | Sets the entries of the Palette of the RadCartesianChart |
| tkPiePalette |  Sets the palettes of the RadPieChart |
| tkPiePaletteEntry | Sets the entries of the Palette of the RadPieChart |
| tkPieLegend | Sets the legend of the RadPieChart |
| tkCartesianLegend | Sets the legend of the RadCartesianChart  |
| tkCartesianTrackball | Sets the trackball of the RadCartesianChart  |
| tkCartesianAnnotations | Sets the annotations of the RadCartesianChart  |
| tkPieLabelStyle | Sets the labelStyle of the RadPieChart |
| tkDonutLabelStyle | Sets the labelStyle of the DonutSeries |
| tkLineLabelStyle | Sets the labelStyle of the LineSeries |
| tkBarLabelStyle | Sets the labelStyle of the BarSeries |
| tkAreaLabelStyle | {Sets the labelStyle of the AreaSeries |
| tkSplineLabelStyle | Sets the labelStyle of the SplineSeries |
| tkSplineAreaLabelStyle | Sets the labelStyle of the SplineAreaSeries |
| tkBubbleLabelStyle | Sets the labelStyle of the BubbleSeries |
| tkScatterBubbleLabelStyle | Sets the labelStyle of the ScatterBubbleSeries |
| tkCandlestickLabelStyle | Sets the labelStyle of the CandlestickSeries |
| tkOhlcLabelStyle | Sets the labelStyle of the OhlcSeries |
| tkScatterLabelStyle | Sets the labelStyle of the ScatterSeries |
