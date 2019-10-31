---
title: Legend
page_title: Vue Chart Legend | Progress NativeScript UI Documentation
description: A getting started page of Vue Chart Legend for NativeScript. This article explains how to utilize the Legend functionality of the Chart component for NativeScript Angular.
slug: chart-legend-vue
tags: legend, getting started, chart legend, vue, nativescript, professional, ui
position: 8
publish: true
---

# Chart Legend

If you followed the [getting started]({% slug chart-getting-started-vue %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. {% typedoc_link classes:RadCartesianChart %} and {% typedoc_link classes:RadPieChart %} both can display a legend. In {% typedoc_link classes:RadCartesianChart %} the legend annotates each of the series, while in {% typedoc_link classes:RadPieChart %} the legend annotates the data points within the chart. In this article you will learn how to show a legend in your chart and how to customize its behavior and appearance.

* [Define a Legend](#define-a-legend)
* [Legend Selection](#legend-selection)
* [References](#references)

## Define a Legend

To define a legend in your chart you need to use the {% typedoc_link classes:RadLegendViewDirective %}:

#### Example 1: A Cartesian Chart with a Legend:

<snippet id='chart-legend-vue'/>

#### Figure 1: Legend shown in action on Android (left) and iOS (right)

![Chart Legend: Android](../../../ui/img/ns_ui/chart-legend-android.png "Chart Legend: Android") ![Chart Legend: iOS](../../../ui/img/ns_ui/chart-legend-ios.png "Chart Legend: iOS")

The {% typedoc_link classes:RadChartBase,member:legend %} property expects an instance of the {% typedoc_link classes:RadLegendView %} class which exposes several properties that can be used to customize the size, position and offset of the legend:

- {% typedoc_link classes:RadLegendView,member:position %} - used to define the position of the legend. Possible values for this property are defined by the {% typedoc_link enums:ChartLegendPosition %} enum
- {% typedoc_link classes:RadLegendView,member:horizontalOffset %} - used to define a horizontal offset for the legend. This offset is calculated considering the currently set {% typedoc_link classes:RadLegendView,member:offsetOrigin %}
- {% typedoc_link classes:RadLegendView,member:verticalOffset %} - used to define a vertical offset for the legend. This offset is calculated considering the currently set {% typedoc_link classes:RadLegendView,member:offsetOrigin %}
- {% typedoc_link classes:RadLegendView,member:offsetOrigin %} - used to define the point relative to which the offsets are calculated. Possible values for this property are defined by the {% typedoc_link enums:ChartLegendOffsetOrigin %} enum
- {% typedoc_link classes:RadLegendView,member:title %} - used to define a title for the legend
- {% typedoc_link classes:RadLegendView,member:titleColor %} - used to define the text color of the legend title
- {% typedoc_link classes:RadLegendView,member:titleSize %} - used to define the text size of the legend title
- {% typedoc_link classes:RadLegendView,member:enableSelection %} - determines whether Series or DataPoints in the Chart are automatically selected upon tapping on an item in the Legend

## Legend Selection

{% typedoc_link classes:RadLegendView %} exposes the {% typedoc_link classes:RadLegendView,member:enableSelection %} property which can be used to turn off/on the automatic selection of Chart Series or Chart Data points when tapping on legend items.

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-vue) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Legend Example](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples)

Related articles you might find useful:

* [**Series Overview**]({% slug chart-series-overview-vue %})
* [**Selection**]({% slug chart-series-selection-vue %})
* [**Grid**]({% slug chart-grid-vue %})
