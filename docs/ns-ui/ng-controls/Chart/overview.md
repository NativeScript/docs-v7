---
title: Overview
page_title: Chart Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of the charts's features.
slug: chart-overview-angular
tags: radchart, overview, chart, angular
position: 1
publish: true
---

# Chart: Overview
`RadChart` for NativeScript is a charting component that has been designed for the mobile environment. It offers great performance in loading time, drawing capabilities and real-time updates. Its intuitive object model and public API allow you to easily setup complex chart objects and integrate them into your application. The control supports different chart types (and series) organized in hierarchies, depending on the coordinate system, used to plot the data points — for example Cartesian ({% typedoc_link classes:RadCartesianChart %}) and radial ({% typedoc_link classes:RadPieChart %}) coordinate systems.

A charting component in general is used to visualize (or plot) some data in a human-readable way through different representations like lines, areas, bars, pies, etc. Each series has a collection of data points—the data equivalent of a 2D point—and knows how to visualize them. Different series types may process certain types of data points—for example categorical series may contain categorical data points. An intuitive data binding mechanism transforms the raw data to appropriate data points depending on the chosen series.

## Chart Types
Depending on the coordinate system that you want to use for visualization of the data points, you can use the following chart types:

- [RadCartesianChart]({% slug chart-types-cartesian-angular %} "Read more about RadCartesianChart"): As the name hints, this concrete chart control uses the Cartesian coordinate system to plot the data points in its chart series. The X and Y axes define how each point’s coordinates in the plot area are calculated.
- [RadPieChart]({% slug chart-types-pie-angular %} "Read more about RadPieChart"): This concrete chart control visualizes its data points using radial coordinate system. Each data point is represented as a slice from a pie. The ratio between the space consumed by each slice and the space consumed by the whole chart is the same as the ratio between the value of the data point that it represents and the total value of all data points in the series.

# Angular directives

When using the {% typedoc_link classes:RadCartesianChart %} and {% typedoc_link classes:RadPieChart %} with Angular you are going to work with multiple custom angular RadChart specific directives. In short these directives are used by the angular framework to enable 'linking' between separate HTML tags into one 'complex' element. As the {% typedoc_link classes:RadCartesianChart %}) and ({% typedoc_link classes:RadPieChart %} are composed by many elements (axes, series, legend, labels etc.) we have created an easy way of declaring for example an {% typedoc_link classes:LineSeries %} as a simple standalone HTML tag and in order to 'link' it to its parent {% typedoc_link classes:RadCartesianChart %} you will only need to add the custom inline **`tkCartesianSeries`** directive.

Here is a full list of the available custom Angular {% typedoc_link classes:RadCartesianChart %} and {% typedoc_link classes:RadPieChart %} directives and components:

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
| DonutSeries | {% typedoc_link classes:DonutSeriesDirective %} |
| CandlestickSeries | {% typedoc_link classes:CandlestickSeriesDirective %} |
| OhlcSeries | {% typedoc_link classes:OhlcSeriesDirective %} |
| RadCartesianChartGrid | {% typedoc_link classes:CartesianChartGridDirective %} |
| ChartGridLineAnnotation | {% typedoc_link classes:ChartGridLineAnnotationDirective %} |
| ChartPlotBandAnnotation | {% typedoc_link classes:ChartPlotBandAnnotationDirective %} |
| Trackball | {% typedoc_link classes:TrackballDirective %} |
| PointLabelStyle | {% typedoc_link classes:PointLabelStyleDirective %} |



## Inline Directives
Represent the 'link' mechanism of the smaller with the major elements

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| tkCartesianHorizontalAxis | {% typedoc_link classes:TKCartesianHorizontalAxisDirective %} |
| tkCartesianVerticalAxis | {% typedoc_link classes:TKCartesianVerticalAxisDirective %} |
| tkCartesianSeries | {% typedoc_link classes:TKCartesianSeriesDirective %} |
| tkPieSeries | {% typedoc_link classes:TKPieChartSeriesDirective %} |
| tkLineVerticalAxis | {% typedoc_link classes:TKLineVerticalAxisDirective %} |
| tkLineHorizontalAxis | {% typedoc_link classes:TKLineHorizontalAxisDirective %} |
| tkBarVerticalAxis | {% typedoc_link classes:TKBarVerticalAxisDirective %} |
| tkBarHorizontalAxis | {% typedoc_link classes:TKBarHorizontalAxisDirective %} |
| tkRangeBarVerticalAxis | {% typedoc_link classes:TKRangeBarVerticalAxisDirective %} |
| tkRangeBarHorizontalAxis | {% typedoc_link classes:TKRangeBarHorizontalAxisDirective %} |
| tkAreaVerticalAxis | {% typedoc_link classes:TKAreaVerticalAxisDirective %} |
| tkAreaHorizontalAxis | {% typedoc_link classes:TKAreaHorizontalAxisDirective %} |
| tkSplineVerticalAxis | {% typedoc_link classes:TKSplineVerticalAxisDirective %} |
| tkSplineHorizontalAxis | {% typedoc_link classes:TKSplineHorizontalAxisDirective %} |
| tkSplineAreaVerticalAxis | {% typedoc_link classes:TKSplineAreaVerticalAxisDirective %} |
| tkSplineHorizontalAxis | {% typedoc_link classes:TKSplineAreaHorizontalAxisDirective %} |
| tkBubbleVerticalAxis | {% typedoc_link classes:TKBubbleVerticalAxisDirective %} |
| tkBubbleHorizontalAxis | {% typedoc_link classes:TKBubbleHorizontalAxisDirective %} |
| tkScatterBubbleVerticalAxis | {% typedoc_link classes:TKScatterBubbleVerticalAxisDirective %} |
| tkScatterBubbleHorizontalAxis | {% typedoc_link classes:TKScatterBubbleHorizontalAxisDirective %} |
| tkCandlestickVerticalAxis | {% typedoc_link classes:TKCandlestickVerticalAxisDirective %} |
| tkCandlestickHorizontalAxis | {% typedoc_link classes:TKCandlestickHorizontalAxisDirective %} |
| tkOhlcVerticalAxis | {% typedoc_link classes:TKOhlcVerticalAxisDirective %} |
| tkOhlcHorizontalAxis | {% typedoc_link classes:TKOhlcHorizontalAxisDirective %} |
| tkScatterVerticalAxis | {% typedoc_link classes:TKScatterVerticalAxisDirective %} |
| tkScatterHorizontalAxis | {% typedoc_link classes:TKScatterHorizontalAxisDirective %} |
| tkCartesianGrid | {% typedoc_link classes:TKCartesianGridDirective %} |
| tkCartesianPalette | {% typedoc_link classes:TKCartesianPaletteDirective %} |
| tkCartesianPaletteEntry | {% typedoc_link classes:TKCartesianPaletteEntryDirective %} |
| tkPiePalette | {% typedoc_link classes:TKPiePaletteDirective %} |
| tkPiePaletteEntry | {% typedoc_link classes:TKPiePaletteEntryDirective %} |
| tkPieLegend | {% typedoc_link classes:TKPieLegendDirective %} |
| tkCartesianLegend | {% typedoc_link classes:TKCartesianLegendDirective %} |
| tkCartesianTrackball | {% typedoc_link classes:TKCartesianTrackballDirective %} |
| tkCartesianAnnotations | {% typedoc_link classes:TKCartesianAnnotationsDirective %} |
| tkPieLabelStyle | {% typedoc_link classes:TKPieLabelStyleDirective %} |
| tkDonutLabelStyle | {% typedoc_link classes:TKDonutLabelStyleDirective %} |
| tkLineLabelStyle | {% typedoc_link classes:TKLineLabelStyleDirective %} |
| tkBarLabelStyle | {% typedoc_link classes:TKBarLabelStyleDirective %} |
| tkRangeBarLabelStyle | {% typedoc_link classes:TKRangeBarLabelStyleDirective %} |
| tkAreaLabelStyle | {% typedoc_link classes:TKAreaLabelStyleDirective %} |
| tkSplineLabelStyle | {% typedoc_link classes:TKSplineLabelStyleDirective %} |
| tkSplineAreaLabelStyle | {% typedoc_link classes:TKSplineAreaLabelStyleDirective %} |
| tkBubbleLabelStyle | {% typedoc_link classes:TKBubbleLabelStyleDirective %} |
| tkScatterBubbleLabelStyle | {% typedoc_link classes:TKScatterBubbleLabelStyleDirective %} |
| tkCandlestickLabelStyle | {% typedoc_link classes:TKCandlestickLabelStyleDirective %} |
| tkOhlcLabelStyle | {% typedoc_link classes:TKOhlcStyleDirective %} |
| tkScatterLabelStyle | {% typedoc_link classes:TKScatterStyleDirective %} |