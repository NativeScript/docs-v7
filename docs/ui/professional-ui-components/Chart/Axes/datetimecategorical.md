---
title: DateTimeCategorical
page_title: Chart date time categorical axis | Progress NativeScript UI Documentation
description: A page describing the DateTimeCategoricalAxis in Telerik Chart for NativeScript. This article explains the most important things you need to know before using DateTimeCategorical axis.
slug: chart-axes-datetimecategorical
tags: chart, datetimecategorical, axes, axis, nativescript, professional, ui
position: 3
publish: true
---

# RadChart DateTimeCategoricalAxis

When [RadCartesianChart]({% slug chart-types-cartesian %} "Read more about RadCartesianChart") visualizes {% typedoc_link classes:CategoricalSeries %}, it needs an axis that can represent the different categories. The {% typedoc_link classes:CategoricalAxis%} is used to displays a range of categories. Categories are built depending on the **Category** value of each **CategoricalDataPoint** present in the owning **CategoricalSeries** chart series. The axis is divided into discrete slots and each data point is visualized in the slot corresponding to its categorical value.

The {% typedoc_link classes:DateTimeCategoricalAxis %} is a special axis that works with the CategoricalSeries and expects each CategoricalDataPoint to provide a valid  value as its Category. Once built, the groups are sorted in chronological order.

## Features

The {% typedoc_link classes:DateTimeCategoricalAxis %} extends {% typedoc_link classes:CategoricalAxis %} so you can use the same features. Additionally, you can set the date time format and component.

### Date Time Component

Defines the component of each Calendar structure that participates in the grouping process. The possible values: Second, Minute, Hour, Day, Week, Month, Year. To get or set the component use the {% typedoc_link classes:DateTimeCategoricalAxis,member:dateTimeComponent%} property.

### Date Time Format

Defines the format of the Calendar structure that will be used for the categories. To get or set the format value use the **dateTimeFormat** property.

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Axes Examples](https://github.com/telerik/nativescript-ui-samples/tree/master/chart/app/examples/axes)

Related articles you might find useful:

* [**Linear Axis**]({% slug chart-features-linear %})
* [**Logarithmic Axis**]({% slug chart-features-logarithmic %})
* [**Negative Values Axis**]({% slug chart-features-negative-value %})
* [**Categorical Axis**]({% slug chart-features-categorical %})
* [**DateTime Continuous Axis**]({% slug chart-features-datetimecontinuous %})