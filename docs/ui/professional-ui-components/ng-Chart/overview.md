---
title: Overview
page_title: Chart Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of the charts's features.
slug: chart-overview-angular
tags: radchart, overview, chart, angular, nativescript, professional, ui
position: 1
publish: true
---

# RadChart Overview
`RadChart` for NativeScript is a charting component that has been designed for the mobile environment. It offers great performance in loading time, drawing capabilities and real-time updates. Its intuitive object model and public API allow you to easily setup complex chart objects and integrate them into your application. The control supports different chart types (and series) organized in hierarchies, depending on the coordinate system, used to plot the data points — for example Cartesian ({% typedoc_link classes:RadCartesianChart %}) and radial ({% typedoc_link classes:RadPieChart %}) coordinate systems.

A charting component in general is used to visualize (or plot) some data in a human-readable way through different representations like lines, areas, bars, pies, etc. Each series has a collection of data points—the data equivalent of a 2D point—and knows how to visualize them. Different series types may process certain types of data points—for example categorical series may contain categorical data points. An intuitive data binding mechanism transforms the raw data to appropriate data points depending on the chosen series.

## RadChart Types
Depending on the coordinate system that you want to use for visualization of the data points, you can use the following chart types:

- [RadCartesianChart]({% slug chart-types-cartesian-angular %} "Read more about RadCartesianChart"): As the name hints, this concrete chart control uses the Cartesian coordinate system to plot the data points in its chart series. The X and Y axes define how each point’s coordinates in the plot area are calculated.
- [RadPieChart]({% slug chart-types-pie-angular %} "Read more about RadPieChart"): This concrete chart control visualizes its data points using radial coordinate system. Each data point is represented as a slice from a pie. The ratio between the space consumed by each slice and the space consumed by the whole chart is the same as the ratio between the value of the data point that it represents and the total value of all data points in the series.

## Angular directives

When using the {% typedoc_link classes:RadCartesianChart %} and {% typedoc_link classes:RadPieChart %} with Angular you are going to work with multiple custom angular RadChart specific directives. In short these directives are used by the angular framework to enable 'linking' between separate HTML tags into one 'complex' element. As the {% typedoc_link classes:RadCartesianChart %}) and ({% typedoc_link classes:RadPieChart %} are composed by many elements (axes, series, legend, labels etc.) we have created an easy way of declaring for example an {% typedoc_link classes:LineSeries %} as a simple standalone HTML tag and in order to 'link' it to its parent {% typedoc_link classes:RadCartesianChart %} you will only need to add the custom inline **`tkCartesianSeries`** directive.

Here is a full list of the available custom Angular {% typedoc_link classes:RadCartesianChart %} and {% typedoc_link classes:RadPieChart %} directives and components:

### Components
Represent the major elements:

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| RadCartesianChart | {% typedoc_link classes:RadCartesianChartComponent %} |
| RadPieChart       | {% typedoc_link classes:RadPieChartComponent %}       |

### Directives
Represent the smaller elements that are visualized in {% typedoc_link classes:RadCartesianChart %} and {% typedoc_link classes:RadPieChart %}:

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| RadLegendView | {% typedoc_link classes:RadLegendView %} |
| CategoricalAxis | {% typedoc_link classes:CategoricalAxis %} |
| LinearAxis | {% typedoc_link classes:LinearAxis %} |
| DateTimeCategoricalAxis | {% typedoc_link classes:DateTimeCategoricalAxis %} |
| DateTimeContinuousAxis | {% typedoc_link classes:DateTimeContinuousAxis %} |
| LogarithmicAxis | {% typedoc_link classes:LogarithmicAxis %} |
| LineSeries | {% typedoc_link classes:LineSeries %} |
| AreaSeries | {% typedoc_link classes:AreaSeries %} |
| SplineSeries | {% typedoc_link classes:SplineSeries %} |
| SplineAreaSeries | {% typedoc_link classes:SplineAreaSeries %} |
| BarSeries | {% typedoc_link classes:BarSeries %} |
| RangeBarSeries | {% typedoc_link classes:RangeBarSeries %} |
| BubbleSeries | {% typedoc_link classes:BubbleSeries %} |
| ScatterBubbleSeries | {% typedoc_link classes:ScatterBubbleSeries %} |
| ScatterSeries | {% typedoc_link classes:ScatterSeries %} |
| Palette | {% typedoc_link classes:Palette %} |
| PieSeries | {% typedoc_link classes:PieSeries %} |
| DonutSeries | {% typedoc_link classes:DonutSeries %} |
| CandlestickSeries | {% typedoc_link classes:CandlestickSeries %} |
| OhlcSeries | {% typedoc_link classes:OhlcSeries %} |
| RadCartesianChartGrid | {% typedoc_link classes:CartesianChartGrid %} |
| ChartGridLineAnnotation | {% typedoc_link classes:ChartGridLineAnnotation %} |
| ChartPlotBandAnnotation | {% typedoc_link classes:ChartPlotBandAnnotation %} |
| Trackball | {% typedoc_link classes:Trackball %} |
| PointLabelStyle | {% typedoc_link classes:PointLabelStyle %} |



### Inline Directives
Represent the 'link' mechanism of the smaller with the major elements

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| tkCartesianHorizontalAxis | {% typedoc_link classes:TKCartesianHorizontalAxis %} |
| tkCartesianVerticalAxis | {% typedoc_link classes:TKCartesianVerticalAxis %} |
| tkCartesianSeries | {% typedoc_link classes:TKCartesianSeries %} |
| tkPieSeries | {% typedoc_link classes:TKPieChartSeries %} |
| tkLineVerticalAxis | {% typedoc_link classes:TKLineVerticalAxis %} |
| tkLineHorizontalAxis | {% typedoc_link classes:TKLineHorizontalAxis %} |
| tkBarVerticalAxis | {% typedoc_link classes:TKBarVerticalAxis %} |
| tkBarHorizontalAxis | {% typedoc_link classes:TKBarHorizontalAxis %} |
| tkRangeBarVerticalAxis | {% typedoc_link classes:TKRangeBarVerticalAxis %} |
| tkRangeBarHorizontalAxis | {% typedoc_link classes:TKRangeBarHorizontalAxis %} |
| tkAreaVerticalAxis | {% typedoc_link classes:TKAreaVerticalAxis %} |
| tkAreaHorizontalAxis | {% typedoc_link classes:TKAreaHorizontalAxis %} |
| tkSplineVerticalAxis | {% typedoc_link classes:TKSplineVerticalAxis %} |
| tkSplineHorizontalAxis | {% typedoc_link classes:TKSplineHorizontalAxis %} |
| tkSplineAreaVerticalAxis | {% typedoc_link classes:TKSplineAreaVerticalAxis %} |
| tkSplineHorizontalAxis | {% typedoc_link classes:TKSplineAreaHorizontalAxis %} |
| tkBubbleVerticalAxis | {% typedoc_link classes:TKBubbleVerticalAxis %} |
| tkBubbleHorizontalAxis | {% typedoc_link classes:TKBubbleHorizontalAxis %} |
| tkScatterBubbleVerticalAxis | {% typedoc_link classes:TKScatterBubbleVerticalAxis %} |
| tkScatterBubbleHorizontalAxis | {% typedoc_link classes:TKScatterBubbleHorizontalAxis %} |
| tkCandlestickVerticalAxis | {% typedoc_link classes:TKCandlestickVerticalAxis %} |
| tkCandlestickHorizontalAxis | {% typedoc_link classes:TKCandlestickHorizontalAxis %} |
| tkOhlcVerticalAxis | {% typedoc_link classes:TKOhlcVerticalAxis %} |
| tkOhlcHorizontalAxis | {% typedoc_link classes:TKOhlcHorizontalAxis %} |
| tkScatterVerticalAxis | {% typedoc_link classes:TKScatterVerticalAxis %} |
| tkScatterHorizontalAxis | {% typedoc_link classes:TKScatterHorizontalAxis %} |
| tkCartesianGrid | {% typedoc_link classes:TKCartesianGrid %} |
| tkCartesianPalette | {% typedoc_link classes:TKCartesianPalette %} |
| tkCartesianPaletteEntry | {% typedoc_link classes:TKCartesianPaletteEntry %} |
| tkPiePalette | {% typedoc_link classes:TKPiePalette %} |
| tkPiePaletteEntry | {% typedoc_link classes:TKPiePaletteEntry %} |
| tkPieLegend | {% typedoc_link classes:TKPieLegend %} |
| tkCartesianLegend | {% typedoc_link classes:TKCartesianLegend %} |
| tkCartesianTrackball | {% typedoc_link classes:TKCartesianTrackball %} |
| tkCartesianAnnotations | {% typedoc_link classes:TKCartesianAnnotations %} |
| tkPieLabelStyle | {% typedoc_link classes:TKPieLabelStyle %} |
| tkDonutLabelStyle | {% typedoc_link classes:TKDonutLabelStyle %} |
| tkLineLabelStyle | {% typedoc_link classes:TKLineLabelStyle %} |
| tkBarLabelStyle | {% typedoc_link classes:TKBarLabelStyle %} |
| tkRangeBarLabelStyle | {% typedoc_link classes:TKRangeBarLabelStyle %} |
| tkAreaLabelStyle | {% typedoc_link classes:TKAreaLabelStyle %} |
| tkSplineLabelStyle | {% typedoc_link classes:TKSplineLabelStyle %} |
| tkSplineAreaLabelStyle | {% typedoc_link classes:TKSplineAreaLabelStyle %} |
| tkBubbleLabelStyle | {% typedoc_link classes:TKBubbleLabelStyle %} |
| tkScatterBubbleLabelStyle | {% typedoc_link classes:TKScatterBubbleLabelStyle %} |
| tkCandlestickLabelStyle | {% typedoc_link classes:TKCandlestickLabelStyle %} |
| tkOhlcLabelStyle | {% typedoc_link classes:TKOhlcStyle %} |
| tkScatterLabelStyle | {% typedoc_link classes:TKScatterStyle %} |
