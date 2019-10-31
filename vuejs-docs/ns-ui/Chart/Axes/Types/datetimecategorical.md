---
title: DateTimeCategorical Axis
page_title: Chart Date Time Categorical Axis | Progress NativeScript UI Documentation
description: A page describing the DateTimeCategoricalAxis in Telerik Chart for NativeScript. This article explains the most important things you need to know before using DateTimeCategorical axis.
slug: chart-axes-datetimecategorical-vue
tags: chart, datetimecategorical, axes, axis, vue, nativescript, professional, ui
position: 2
publish: true
---

# Chart DateTimeCategoricalAxis

If you followed the [getting started]({% slug chart-getting-started-vue %} "Chart Getting Started") article, you now know how to create a chart and add it to a NativeScript page. In this article, you will learn more about the date time categorical axis and how to use it in your chart.

* [Getting Started](#getting-started)
* [Properties](#properties)
* [References](#references)

## Getting Started

When {% typedoc_link classes:RadCartesianChart %} visualizes {% typedoc_link classes:CategoricalSeries %}, it needs an axis that can represent the different categories. The {% typedoc_link classes:CategoricalAxis%} is used to displays a range of categories. Categories are built depending on the **Category** value of each **CategoricalDataPoint** present in the owning **CategoricalSeries** chart series. The axis is divided into discrete slots and each data point is visualized in the slot corresponding to its categorical value.

The {% typedoc_link classes:DateTimeCategoricalAxis %} is a special axis that works with the CategoricalSeries and expects each CategoricalDataPoint to provide a valid date time value as its Category. Once built, the groups are sorted in chronological order.

## Properties

The {% typedoc_link classes:DateTimeCategoricalAxis %} extends {% typedoc_link classes:CategoricalAxis %} so you can use the same features. Additionally, you can set the date time format and component.

### Date Time Component

Defines the component of each Calendar structure that participates in the grouping process. The possible values are from the {% typedoc_link enums:ChartAxisDateTimeComponent %} enumeration. To get or set the component use the {% typedoc_link classes:DateTimeCategoricalAxis,member:dateTimeComponent%} property.

### Date Time Format

Defines the format of the Calendar structure that will be used for the categories. To get or set the format value use the **dateTimeFormat** property.

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples-vue) repository on GitHub. You will find this and many other practical examples with NativeScript UI.

Related articles you might find useful:

* [**Bar Series**]({% slug chart-series-bar-vue %})
* [**Series Overview**]({% slug chart-series-overview-vue %})
* [**Categorical Axis**]({% slug chart-axes-categorical-vue %})
