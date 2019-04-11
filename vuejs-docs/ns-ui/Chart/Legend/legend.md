---
title: Getting Started
page_title: Angular Chart Legend Getting Started | Progress NativeScript UI Documentation
description: A getting started page of Angular Chart Legend for NativeScript. This article explains how to utilize the Legend functionality of the Chart component for NativeScript Angular.
slug: chart-legend-getting-started-vue
tags: legend, getting started, chart legend, vue, nativescript, professional, ui
position: 1
publish: true
---

# RadChart Legend
{% typedoc_link classes:RadCartesianChart %} and {% typedoc_link classes:RadPieChart %} both can display a legend annotating each of the series or datapoints within the chart. In this article you will learn how to show a legend in your chart and how to customize its behavior and appearance.

## Defining a Legend
To define a legend in your chart you need to use the {% typedoc_link classes:RadLegendViewDirective %}:

```
  <RadLegendView v-tkCartesianLegend position="Top" title="Series type"
                 height="150" enableSelection="true"></RadLegendView>
```

The {% typedoc_link classes:RadChartBase,member:legend %} property expects an instance of the {% typedoc_link classes:RadLegendView %} class which exposes several properties that can be used to customize the size, position and offset of the legend:

- {% typedoc_link classes:RadLegendView,member:position %} - used to define the position of the legend. Possible values for this property are defined by the {% typedoc_link enums:ChartLegendPosition %} enum
- {% typedoc_link classes:RadLegendView,member:horizontalOffset %} - used to define a horizontal offset for the legend. This offset is calculated considering the currently set {% typedoc_link classes:RadLegendView,member:offsetOrigin %}
- {% typedoc_link classes:RadLegendView,member:verticalOffset %} - used to define a vertical offset for the legend. This offset is calculated considering the currently set {% typedoc_link classes:RadLegendView,member:offsetOrigin %}
- {% typedoc_link classes:RadLegendView,member:offsetOrigin %} - used to define the point relative to which the offsets are calculated. Possible values for this property are defined by the {% typedoc_link enums:ChartLegendOffsetOrigin %} enum
- {% typedoc_link classes:RadLegendView,member:title %} - used to define a title for the legend
- {% typedoc_link classes:RadLegendView,member:titleColor %} - used to define the text color of the legend title
- {% typedoc_link classes:RadLegendView,member:titleSize %} - used to define the text size of the legend title
- {% typedoc_link classes:RadLegendView,member:enableSelection %} - determines whether Series or DataPoints in the Chart are automatically selected upon tapping on an item in the Legend

Here's a full example of a chart with a legend set on it:

<snippet id='chart-legend-vue'/>

The following images demonstrate how this setup looks like in a running application:

![Chart Legend: Android](../../../../ui/img/ns_ui/chart-legend-android.png "Chart Legend: Android") ![Chart Legend: iOS](../../../../ui/img/ns_ui/chart-legend-ios.png "Chart Legend: iOS")
