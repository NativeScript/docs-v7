---
title: Overview
page_title: Chart Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of the charts's features.
slug: chart-overview-angular
tags: radchart, overview, chart, angular, nativescript, professional, ui
position: 1
publish: true
---

# Chart Overview

The NativeScript UI Chart is a charting component designed for the mobile environment. It offers great performance in loading time, drawing capabilities and real-time updates. Its intuitive object model and public API allow you to easily setup complex chart objects and integrate them into your application. The plugin provides two views that can be placed in a NativeScript layout - {% typedoc_link classes:RadCartesianChart %} - used to visualize (or plot) data on a cartesian coordinate system and {% typedoc_link classes:RadPieChart %} - used to visualize data in a way that resembles slices of a pie. An intuitive data binding mechanism transforms the raw data to appropriate data points. The plugin is distributed through the **nativescript-ui-chart** package on npmjs.

## Getting Started

[This article]({% slug chart-getting-started-angular %} "Chart Getting Started") contains the basic steps to start using the nativescript-ui-chart plugin - how to create a list of items and visualize them with one of the available chart series and appropriate axes.

## Series

The series are one of the main components of the chart and determine how the data will be presented. The chart supports over 10 different series types, some of the most popular being BarSeries, LineSeries and PieSeries. [This article]({% slug chart-series-overview-angular %} "Chart Series Overview") contains an overview of the different types and suggests the most appropriate depending on the data that has to be presented.

## Axes

When using Series that plot the data in Cartesian coordinates, the **RadCartesianChart** has to be used. It also requires two axes that determine what the horizontal and vertical coordinates represent. More information about the available axis types and examples for their usage is available in the [axes article]({% slug chart-axes-overview-angular %} "Chart Axes Overview").

## Grid

The RadCartesianChart can draw lines and stripes (the fill between the lines) behind the visualized series to illustrate better how the data relates to the values in the axes. This is controlled by the **RadCartesianChartGrid** which is demonstrated in [this article]({% slug chart-grid-angular %} "Chart Grid").

## Annotations

The RadCartesianChart can also show linear and rectangular shapes over its series in order to annotate specific values on the chart. This can be achieved by adding instances of **ChartGridLineAnnotation** and/or **ChartPlotBandAnnotation**. These types are demonstrated in [this article]({% slug chart-annotations-angular %} "Chart Annotations").

## Trackball

The trackball is another feature availalbe for RadCartesianChart. When it is enabled users are able to display information about a point on the chart by hold and drag gesture. More information is available in [this article]({% slug chart-trackball-angular %} "Chart Trackball").

## Legend

Both RadCartesianChart and RadPieChart support adding a **RadLegendView** which will contain information about the presented series. In the context of RadCartesianChart, the legend will contain information about the different series, while in the context of RadPieChart it will contain information about the different slices for the presented series. More information is available in [this article]({% slug chart-legend-angular %} "Chart Legend").


## Angular directives

When using the {% typedoc_link classes:RadCartesianChart %} and {% typedoc_link classes:RadPieChart %} with Angular you are going to work with multiple custom angular Chart specific directives. In short these directives are used by the angular framework to enable 'linking' between separate HTML tags into one 'complex' element. As the {% typedoc_link classes:RadCartesianChart %}) and ({% typedoc_link classes:RadPieChart %} are composed by many elements (axes, series, legend, labels etc.) we have created an easy way of declaring for example an {% typedoc_link classes:LineSeries %} as a simple standalone HTML tag and in order to 'link' it to its parent {% typedoc_link classes:RadCartesianChart %} you will only need to add the custom inline **`tkCartesianSeries`** directive.

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
