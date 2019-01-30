---
title: Negative Values
page_title: Negative values| Progress NativeScript UI Documentation
description: A page describing the LogarithmicAxis in Telerik Chart for NativeScript. This article explains the usage of negative values in an axis.
slug: negative-values-axis-angular
tags: chart, negative, values, axes, axis, angular
position: 7
publish: false
---

# RadChart Axes: Negative Values

By default the {% typedoc_link classes:LinearAxis %} supports the use of negative values. You can set the {% typedoc_link classes:LinearAxis,member:minimum%} minimum and/or the {% typedoc_link classes:LinearAxis,member:maximum%} to negative values

## Example

```
const getNegativeValues = () => {
  return new ObservableArray([
      { Period: 1, Amount: 10 },
      { Period: 2, Amount: -10 },
      { Period: 3, Amount: 20 },
      { Period: 4, Amount: -20 },
      { Period: 5, Amount: 30 },
      { Period: 6, Amount: -30 },
      { Period: 7, Amount: 40 },
      { Period: 8, Amount: -40 },
      { Period: 9, Amount: 50 },
      { Period: 10, Amount: -50 }
  ]);
};

export default {
  template: `
  <Page>
    <RadCartesianChart>
      <LinearAxis v-tkCartesianVerticalAxis allowZoom="true" minimum="-50" maximum="50"></LinearAxis>
      <CategoricalAxis v-tkCartesianHorizontalAxis allowZoom="true"></CategoricalAxis>

      <SplineAreaSeries v-tkCartesianSeries
                        seriesName="SplineArea"
                        categoryProperty="Period"
                        valueProperty="Amount"
                        :items="items"></SplineAreaSeries>
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      items: getNegativeValues(),
    };
  }
};
```

This is how the chart will look like with negative values on the Y axis:

![Cartesian chart: Negative Values](images/negative_values_android.png "Negative values in Android.") ![Cartesian chart: Negative Values](images/negative_values_ios.png "Negative values in iOS.")