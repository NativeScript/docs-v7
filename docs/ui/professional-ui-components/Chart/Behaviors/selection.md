---
title: Selection
page_title: Chart Selection behavior | Progress NativeScript UI Documentation
description: A page describing the selection behavior in Telerik Chart for NativeScript
slug: chart-selection
tags: chart, behavior, selection, series, datapoint, nativescript, professional, ui
position: 1
publish: true
---

# RadChart Selection

You can make your charts more interactive by enabling selection. 
When selection is enabled you can select, deselect and handle the selection events of either the data points or the series in [RadCartesianChart]({% slug chart-types-cartesian %} "Read more about RadCartesianChart") and 
[RadPieChart]({% slug chart-types-pie %} "Read more about RadPieChart"). 

The selection can be set on the whole chart with the {% typedoc_link classes:RadChartBase,member:seriesSelectionMode %} and {% typedoc_link classes:RadChartBase,member:pointSelectionMode %} properties. The values for these properties can be:
* {% typedoc_link enums:ChartSelectionMode,member:None %} - disable selection
* {% typedoc_link enums:ChartSelectionMode,member:Single%} - single selection
* {% typedoc_link enums:ChartSelectionMode,member:Multiple%} - multiple selection

For finer tuning of the selection behavior you can also set the {% typedoc_link classes:ChartSeries,member:selectionMode %} property of each series. The individual series selection mode enables you to specify multiple data point selection for one series, single data point selection for another series and even disable selection for a third series all the same time. With the combination of the chart selection properties and series selectionMode property, any selection scenario can be implemented. The series selectionMode property can have the following values:
* {% typedoc_link enums:ChartSeriesSelectionMode,member:None%} - disable selection for the series
* {% typedoc_link enums:ChartSeriesSelectionMode,member:NotSet%} - fall back to the global chart selection properties
* {% typedoc_link enums:ChartSeriesSelectionMode,member:DataPoint%} -  single data point selection
* {% typedoc_link enums:ChartSeriesSelectionMode,member:DataPointMultiple%} - multiple data point selection
* {% typedoc_link enums:ChartSeriesSelectionMode,member:Series%} - whole series selection

## Handling Selection Events

To notify you when the selection state of an item is changed, **RadChartView** exposes the following events:
- `seriesSelected` - fired after a series is selected. 
The event data argument provides information about the event name, the chart that the series belongs to and the *ChartSeries* class instance for the selected series
- `seriesDeselected` - fired after a series is deselected. 
The event data argument provides information about the event name, the chart that the series belongs to and the *ChartSeries* class instance for the selected series
- `pointSelected` - fired after a data point is selected. 
The event data argument provides information about the event name, the chart that the data point belongs to, the point index and the native data point class instances(TKChartData for iOS, DataPoint for Android)
- `pointDeselected` - fired after a data point is deselected. 
The event data argument provides information about the event name, the chart that the data point belongs to, the point index and the native data point class instances(TKChartData for iOS, DataPoint for Android)

## Example 
The following example demonstrates how to enable data point selection 
<snippet id='datapoint-selection'/>

## Example 
The following example demonstrates how to enable series selection 
<snippet id='series-selection'/>

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Behaviors Examples](https://github.com/telerik/nativescript-ui-samples/tree/master/chart/app/examples/behaviors)

Related articles you might find useful:

* [**Pan & Zoom**]({% slug chart-features-behaviors-pan-and-zoom %})
