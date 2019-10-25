---
title: Axes Labels
page_title: Chart Axes Labels | Progress NativeScript UI Documentation
description: This article describes how to use charts axes labels.
slug: chart-axes-labels-vue
tags: radchart, chart, nativescript, professional, ui, axes, labels, vue
position: 6
publish: true
---

# Chart Axes Labels

If you followed the [getting started]({% slug chart-getting-started-vue %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. In this article, you will learn how to control the axes labels and customize their appearance.

* [Styling with Axes Properties](#styling-with-axes-properties)
* [References](#references)

## Styling with Axes Properties

All axes have properties which provide various customization options for the labels:

- {% typedoc_link classes:CartesianAxis,member:labelTextColor%} - Determines the color of the axis' labels.
- {% typedoc_link classes:CartesianAxis,member:labelSize%} - Determines the text size of the axis' labels.
- {% typedoc_link classes:CartesianAxis,member:labelFormat%} - Determines the format used to display the axis' labels. For example to format values to one symbol after decimal point and append the text `seconds`, you can use the following format: `%.1f seconds`.
- {% typedoc_link classes:CartesianAxis,member:labelMargin%} - Determines the margin for the labels. The margin is a single number value and determines the number of device independent pixels between a label and its corresponding axis tick. 
- {% typedoc_link classes:CartesianAxis,member:labelRotationAngle%} - Determines the angle of rotation for labels. Used only when *labelFitMode* property has a value of {% typedoc_link enums:ChartAxisLabelFitMode,member:Rotate%}.
- {% typedoc_link classes:CartesianAxis,member:labelFitMode%} - Determines the strategy used in attempt to fit the labels. The default value is {% typedoc_link enums:ChartAxisLabelFitMode,member:None%} which means the labels are positioned on single line but there are {% typedoc_link enums:ChartAxisLabelFitMode,member:Multiline%} and {% typedoc_link enums:ChartAxisLabelFitMode,member:Rotate%} options too.
- {% typedoc_link classes:CartesianAxis,member:labelLayoutMode%} - Determines the layout mode for axis labels. With this property you can position labels in the {% typedoc_link enums:ChartAxisLabelLayoutMode,member:Inner%} or {% typedoc_link enums:ChartAxisLabelLayoutMode,member:Outer%} side of chart.

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-vue) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Related articles you might find useful:

* [**Axes Styling**]({% slug chart-axes-styling-vue %})
* [**Axes Overview**]({% slug chart-axes-overview-vue %})
* [**Series Labels**]({% slug chart-series-labels-vue %})
