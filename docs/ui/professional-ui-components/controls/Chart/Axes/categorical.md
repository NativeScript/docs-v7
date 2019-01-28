---
title: Categorical
page_title: Chart categorical axis | Progress NativeScript UI Documentation
description: A page describing the CategoricalAxis in Telerik Chart for NativeScript
slug: chart-axes-categorical
tags: chart, categorical, axes, axis
position: 2
publish: true
previous_url: controls/chart/axes/categorical
---

# Chart Axes: CategoricalAxis

When [RadCartesianChart]({% slug chart-types-cartesian %} "Read more about RadCartesianChart") visualizes **CategoricalSeries**, it needs an axis that can represent the different categories. The {% typedoc_link classes:CategoricalAxis %} is used to displays a range of categories. Categories are built depending on the **Category** value of each **CategoricalDataPoint** present in the owning **CategoricalSeries** chart series. The axis is divided into discrete slots and each data point is visualized in the slot corresponding to its categorical value.

<snippet id='categorical-axis-example'/>

### Features

##### Plot Mode

The {% typedoc_link classes:CategoricalAxis %} allows you to define how exactly the axis will be plotted on the viewport of the chart. The possible values are:

* {% typedoc_link modules:AxisPlotMode,member:BetweenTicks%}: Points are plotted in the middle of the range, defined between each two ticks.
* {% typedoc_link modules:AxisPlotMode,member:OnTicks%}: Points are plotted over each tick.

You can get and set the current value with the {% typedoc_link classes:CategoricalAxis,member:plotMode%} property.

##### Major Tick Interval

Defines the step at which major ticks are generated. This property also affects axis labels as they are generated on a per major tick basis. You can get or set the value with the {% typedoc_link classes:CategoricalAxis,member:majorTickInterval %} property. For example, if you don't want to display all ticks, but instead only half of them (display the first, third, fifth, etc. ticks), you should set the major tick interval to 2.

This is how the axis in this example looks like:
![Cartesian chart: Pie series](./images/categorical_axis_android.png "CategoricalAxis on Android.") ![Cartesian chart: Pie series](./images/categorical_axis_ios.png "CategoricalAxis on iOS.")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Categorical Axis Example](https://github.com/telerik/nativescript-ui-samples/tree/master/chart/app/examples/series/area)

Related articles you might find useful:

* [**Linear Axis**]({% slug chart-features-linear %})
* [**Logarithmic Axis**]({% slug chart-features-logarithmic %})
* [**Negative Values Axis**]({% slug chart-features-negative-value %})
* [**DateTime Categorical Axis**]({% slug chart-features-datetimecategorical %})
* [**DateTime Continuous Axis**]({% slug chart-features-datetimecontinuous %})
