---
title: DateTimeContinuous Axis
page_title: Chart Date Time Continuous Axis | Progress NativeScript UI Documentation
description: A page describing the DateTimeContinuousAxis in Telerik Chart for NativeScript. This article explains the most important things you need to know before using DateTimeContinuous axis.
slug: chart-axes-datetimecontinuous-vue
tags: chart, datetimecontinuous, axes, axis, vue, nativescript, professional, ui
position: 3
publish: true
---

# Chart DateTimeContinuousAxis

If you followed the [getting started]({% slug chart-getting-started-vue %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. In this article, you will learn more about the date time continuous axis and how to use it in your chart.

* [Getting Started](#getting-started)
* [Binding Specifics](#binding-specifics)
* [Properties](#properties)
* [References](#references)

## Getting Started

When {% typedoc_link classes:RadCartesianChart %} visualizes {% typedoc_link classes:CategoricalSeries %}, it needs an axis that can represent the different categories. The {% typedoc_link classes:CategoricalAxis%} is used to displays a range of categories. Categories are built depending on the **Category** value of each **CategoricalDataPoint** present in the owning **CategoricalSeries** chart series. The axis is divided into discrete slots and each data point is visualized in the slot corresponding to its categorical value.

{% typedoc_link classes:DateTimeContinuousAxis %} is another axis that can be used with categorical data but instead of categories, the axis builds time slots depending on its {% typedoc_link classes:DateTimeContinuousAxis,member:Minimum%}, {% typedoc_link classes:DateTimeContinuousAxis,member:Maximum%} and {% typedoc_link classes:DateTimeContinuousAxis,member:MajorStep%} values. {% typedoc_link classes:DateTimeContinuousAxis %} also expects valid data time values so that the data could be plotted correctly. Think of DateTimeContinuousAxis as a timeline where each data point has a certain position, depending on the date it represents. The timeline range properties' values are automatically calculated if not set explicitly by the user: the default value of the major step is the smallest difference between any two date values. Because this axis behaves like a numerical one, there might be empty time slots if no data falling into them is found.

## Binding Specifics

> When binding the chart to data that contains Date objects, developers need to convert these date objects to time in **milliseconds**. 

This is necessary because the Telerik UI library calls JSON.stringify() on the data objects before they are passed to the underlying native implementation. Then, the native implementation
parses back the string to a native Android or iOS object. This call to stringify may produce incorrect results when called on a Date object. To be safe, convert the Date data beforehand to time in milliseconds. For more details take a look at our "Date time axis" example from our sdk repository [here](https://github.com/NativeScript/nativescript-ui-samples-vue/blob/master/chart/app/examples/axes/DateTimeAxes.ts)

## Properties

### Date Format
By using the {% typedoc_link classes:DateTimeContinuousAxis,member:dateFormat %} property you can specify the format used to parse the date values passed as parameters to the {% typedoc_link classes:DateTimeContinuousAxis,member:minimum %} and {% typedoc_link classes:DateTimeContinuousAxis,member:maximum %} properties. It is also used to format the date-labels on the axis.

### Maximum

Defines the maximum available value. To get or set the maximum use the {% typedoc_link classes:DateTimeContinuousAxis,member:minimum %} property.

### Minimum

Defines the minimum available value. To get or set the maximum use the {% typedoc_link classes:DateTimeContinuousAxis,member:maximum %} property.

### Major Step

The major step represents the value difference between two visible ticks on the axis. The major step unit is used to determine what exactly the value of the major step represents. To get or set the major step use the **majorStep** property.

### Plot Mode

{% typedoc_link classes:DateTimeContinuousAxis %} allows you to define how exactly the axis will be plotted on the viewport of the chart. The possible values are:

* {% typedoc_link enums:ChartAxisPlotMode,member:BetweenTicks%} - Points are plotted in the middle of the range, defined between each two ticks.
* {% typedoc_link enums:ChartAxisPlotMode,member:OnTicks%} - Points are plotted over each tick.

You can get and set the current value with the {% typedoc_link classes:CategoricalAxis,member:plotMode%} property.

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-vue) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [DateTime Continuous Axis Examples](https://github.com/NativeScript/nativescript-ui-samples-vue/tree/master/chart/app/examples/axes)

Related articles you might find useful:

* [**Line Series**]({% slug chart-series-line-vue %})
* [**Series Overview**]({% slug chart-series-overview-vue %})
* [**Axes Overview**]({% slug chart-axes-overview-vue %})
