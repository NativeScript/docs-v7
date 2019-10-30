---
title: Categorical
page_title: Chart Categorical Axis | Progress NativeScript UI Documentation
description: A page describing the CategoricalAxis in Telerik Chart for NativeScript
slug: chart-axes-categorical-angular
tags: chart, categorical, axes, axis, angular, nativescript, professional, ui
position: 1
publish: true
---

# Chart Categorical Axis

If you followed the [getting started]({% slug chart-getting-started-angular %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. In this article, you will learn more about the categorical axis and how to use it in your chart.

* [Getting Started](#getting-started)
* [Properties](#properties)
* [References](#references)

## Getting Started

When {% typedoc_link classes:RadCartesianChart %} visualizes **CategoricalSeries**, it needs an axis that can represent the different categories. The {% typedoc_link classes:CategoricalAxis %} is used to displays a range of categories. Categories are built depending on the **Category** value of the **CategoricalSeries**'s items. The axis is divided into discrete slots and each data point is visualized in the slot corresponding to its categorical value.

#### Example 1: Categorical Axis

<snippet id='chart-angular-bar-series-component'/>
<snippet id='chart-angular-bar-series'/>

## Properties

### Plot Mode

The {% typedoc_link classes:CategoricalAxis %} allows you to define how exactly the axis will be plotted on the viewport of the chart. The possible values are:

* {% typedoc_link enums:ChartAxisPlotMode,member:BetweenTicks%} - Points are plotted in the middle of the range, defined between each two ticks.
* {% typedoc_link enums:ChartAxisPlotMode,member:OnTicks%} - Points are plotted over each tick.

You can get and set the current value with the {% typedoc_link classes:CategoricalAxis,member:plotMode%} property.

### Major Tick Interval

Defines the step at which major ticks are generated. This property also affects axis labels as they are generated on a per major tick basis. You can get or set the value with the {% typedoc_link classes:CategoricalAxis,member:majorTickInterval %} property. For example, if you don't want to display all ticks, but instead only half of them (display the first, third, fifth, etc. ticks), you should set the major tick interval to 2.

#### Figure 1: This is how the axis in this example looks like on Android (left) and iOS (right)

![Cartesian chart: Pie series](../../../../img/ns_ui/categorical_axis_android.png "CategoricalAxis on Android.") ![Cartesian chart: Pie series](../../../../img/ns_ui/categorical_axis_ios.png "CategoricalAxis on iOS.")

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-angular) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Examples used in this article:

* [Bar Series Example](https://github.com/NativeScript/nativescript-ui-samples-angular/tree/master/chart/app/examples/series/bar)

Related articles you might find useful:

* [**Bar Series**]({% slug chart-series-bar-angular %})
* [**Series Overview**]({% slug chart-series-overview-angular %})
* [**Axes Overview**]({% slug chart-axes-overview-angular %})
