---
title: Selection
page_title: Chart Selection | Progress NativeScript UI Documentation
description: This article describes how to use selection in chart series.
slug: chart-series-selection
tags: radchart, chart, nativescript, professional, ui, series, selection
position: 3
publish: true
---

# Chart Selection

If you followed the [getting started]({% slug chart-getting-started %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. In this article, you will learn how to enable selection of series or selection of single data points.

* [Getting Started](#getting-started)
* [Selection Events](#selection-events)
* [References](#references)

## Getting Started

You can make your charts more interactive by enabling selection.  When selection is enabled you can select, deselect and handle the selection events of either the data points or the series in **RadCartesianChart** and **RadPieChart**. 

The selection can be set on the whole chart with the {% typedoc_link classes:RadChartBase,member:seriesSelectionMode %} and {% typedoc_link classes:RadChartBase,member:pointSelectionMode %} properties. The values for these properties can be:
* {% typedoc_link enums:ChartSelectionMode,member:None %} - Selection is disabled.
* {% typedoc_link enums:ChartSelectionMode,member:Single%} - Only one series/point can be selected at a time.
* {% typedoc_link enums:ChartSelectionMode,member:Multiple%} - More one series/point can be selected simultaneously.

For finer tuning of the selection behavior you can also set the {% typedoc_link classes:ChartSeries,member:selectionMode %} property of each series. The individual series selection mode enables you to specify multiple data point selection for one series, single data point selection for another series and even disable selection for a third series all the same time. With the combination of the chart selection properties and series selectionMode property, any selection scenario can be implemented. The series selectionMode property can have the following values:
* {% typedoc_link enums:ChartSeriesSelectionMode,member:None%} - Selection is disabled.
* {% typedoc_link enums:ChartSeriesSelectionMode,member:NotSet%} - The selection mode will be determined by chart's properties.
* {% typedoc_link enums:ChartSeriesSelectionMode,member:DataPoint%} -  Only one point can be selected at a time.
* {% typedoc_link enums:ChartSeriesSelectionMode,member:DataPointMultiple%} - More than one point can be selected at a time.
* {% typedoc_link enums:ChartSeriesSelectionMode,member:Series%} - All data points are selected simultaneously.

#### Example 1: Enabling Data Point Selection

<snippet id='datapoint-selection'/>

#### Example 2: Enabling Series Selection

<snippet id='series-selection'/>

## Selection Events

To notify you when the selection state of an item is changed, the chart exposes the following events:
- `seriesSelected` - Fired after a series is selected. The event data argument provides information about the event name, the chart that the series belongs to and the *ChartSeries* class instance for the selected series
- `seriesDeselected` - Fired after a series is deselected. The event data argument provides information about the event name, the chart that the series belongs to and the *ChartSeries* class instance for the selected series
- `pointSelected` - Fired after a data point is selected. The event data argument provides information about the event name, the chart that the data point belongs to, the point index and the native data point class instances(TKChartData for iOS, DataPoint for Android)
- `pointDeselected` - Fired after a data point is deselected. The event data argument provides information about the event name, the chart that the data point belongs to, the point index and the native data point class instances(TKChartData for iOS, DataPoint for Android)

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Data Point Selection Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/chart/app/examples/behaviors)
* [Series Selection Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/chart/app/examples/behaviors)

Related articles you might find useful:

* [**Bar Series**]({% slug chart-series-bar %})
* [**Series Overview**]({% slug chart-series-overview %})
* [**Series Styling**]({% slug chart-series-styling %})

