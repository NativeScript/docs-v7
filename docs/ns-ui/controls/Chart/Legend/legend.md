---
title: Getting Started
page_title: Chart Legend Getting Started | Progress NativeScript UI Documentation
description: A getting started page of Chart Legend for NativeScript. This article explains how to utilize the Legend functionality of the Chart component for NativeScript.
slug: chart-legend-getting-started
tags: legend, getting started, chart legend
position: 1
publish: true
---

# Chart: Legend
{% typedoc_link classes:RadCartesianChart %} and {% typedoc_link classes:RadPieChart %} both can display a legend annotating each of the series or datapoints within the chart. In this article you will learn how to show a legend in your chart and how to customize its behavior and appearance.

## Defining a Legend
To define a legend in your chart you need to set the {% typedoc_link classes:RadChartBase,member:legend %} property as shown below:

<snippet id='legend-definition-xml'/>

The {% typedoc_link classes:RadChartBase,member:legend %} property expects an instance of the {% typedoc_link classes:RadLegendView %} class which exposes several properties that can be used to customize the size, position and offset of the legend:

- {% typedoc_link classes:RadLegendView,member:position %} - used to define the position of the legend. Possible values for this property are defined by the {% typedoc_link modules:ChartLegendPosition %} enum
- {% typedoc_link classes:RadLegendView,member:horizontalOffset %} - used to define a horizontal offset for the legend. This offset is calculated considering the currently set {% typedoc_link classes:RadLegendView,member:offsetOrigin %}
- {% typedoc_link classes:RadLegendView,member:verticalOffset %} - used to define a vertical offset for the legend. This offset is calculated considering the currently set {% typedoc_link classes:RadLegendView,member:offsetOrigin %}
- {% typedoc_link classes:RadLegendView,member:offsetOrigin %} - used to define the point relative to which the offsets are calculated. Possible values for this property are defined by the {% typedoc_link modules:ChartLegendOffsetOrigin %} enum
- {% typedoc_link classes:RadLegendView,member:title %} - used to define a title for the legend
- {% typedoc_link classes:RadLegendView,member:titleColor %} - used to define the text color of the legend title
- {% typedoc_link classes:RadLegendView,member:titleSize %} - used to define the text size of the legend title
- {% typedoc_link classes:RadLegendView,member:enableSelection %} - determines whether Series or DataPoints in the Chart are automatically selected upon tapping on an item in the Legend

Here's a full example of a chart with a legend set on it:

<snippet id='legend-example'/>

The following images demonstrate how this setup looks like in a running application:

![Chart Legend: Android](images/chart-legend-android.png "Chart Legend: Android") ![Chart Legend: iOS](images/chart-legend-ios.png "Chart Legend: iOS")

## Legend Selection
{% typedoc_link classes:RadLegendView %} exposes the {% typedoc_link classes:RadLegendView,member:enableSelection %} property which can be used to turn off/on the automatic selection of Chart Series or Chart Datapoints when tapping on legend items.

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Legend Examples](https://github.com/telerik/nativescript-ui-samples/tree/master/chart/app/examples/legend)
