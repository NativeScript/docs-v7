---
title: Range Bar
page_title: Range Bar series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Range Bar series and continues with a sample scenario of how Range Bar series are used.
slug: chart-series-range-bar-vue
tags: series, cartesian, range, bar, vue, nativescript, professional, ui
position: 3
publish: true
---

# RadChart RangeBar Series
Range bar series are a special case of bar series where the width of each bar denotes the difference between data point's low and high value. The bars can be displayed either horizontally, or vertically, depending on whether the {% typedoc_link classes:CategoricalAxis %} is the vertical axis or the horizontal one. When the horizontal axis is categorical, the rectangles are displayed vertically. This means that they have equal width while their height represents the difference between the numerical values of each of the data points. The low value is the rectangle's start point, while the high value is the end point. On the other hand, when the vertical axis is categorical, the rectangles have equal height, while their width represents the difference between the values of the data point.

## Example
Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance.

Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.

```
import { ObservableArray } from 'tns-core-modules/data/observable-array';

export const getRangeBarData = () => {
  return new ObservableArray([
    { Name: 'Groceries', High: 30, Low: 12, Sales: 0, Margin: 0 },
    { Name: 'Tools', High: 135, Low: 124, Sales: 0, Margin: 0 },
    { Name: 'Electronics', High: 55, Low: 12, Sales: 0, Margin: 0 },
    { Name: 'Gardening', High: 50, Low: 29, Sales: 0, Margin: 0 }
  ]);
};
```

All that is left is to declare the template of the vue component in which we:

- Declare a {% typedoc_link classes:RadCartesianChart %}
- Declare the {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %} between the {% typedoc_link classes:RadCartesianChart %} open and close tags
- After that set the **`tkCartesianHorizontalAxis`** and **`tkCartesianVerticalAxis`** directive to the axes
- Finally declare a {% typedoc_link classes:RangeBarSeries %} instance to it, bind the {% typedoc_link classes:RangeBarSeries,member:items%} to the source of data and set the **`tkCartesianSeries`** directive

```
import { getRangeBarData } from '../../data';

export default {
  name: 'RangeBarSeriesExample',
  template: `
  <Page>
    <StackLayout>
      <RadCartesianChart>
        <RangeBarSeries v-tkCartesianSeries
                        showLabels="true"
                        legendTitle="Ranges"
                        categoryProperty="Name"
                        lowPropertyName="Low"
                        highPropertyName="High"
                        :items="items" />
        <CategoricalAxis v-tkCartesianHorizontalAxis />
        <LinearAxis v-tkCartesianVerticalAxis />
      </RadCartesianChart>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      items: getRangeBarData(),
    };
  }
};
```

Depending on the required Bar orientation, you can swap the axes' position and assign the {% typedoc_link classes:CategoricalAxis %} to the {% typedoc_link classes:RadCartesianChart,member:horizontalAxis%} property and the Linear to the {% typedoc_link classes:RadCartesianChart,member:verticalAxis%} property. This will change the orientation of the bars to vertical.

![Cartesian chart: Range bar series](images/range_bar_series_android.png "Range bar series on Android.") ![Cartesian chart: Range bar series](images/range_bar_series_ios.png "Range bar series on iOS.")
