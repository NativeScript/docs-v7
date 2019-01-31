---
title: Area
page_title: Area series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Area series and continues with a sample scenario of how Area series are used.
slug: chart-series-area-vue
tags: series, cartesian, area, vue
position: 6
publish: true
---

## Area series: overview
Area series work pretty much the same way as Line series with the only difference that the area between the categorical axis and the data points is filled with the corresponding color of the line. To use Area series, you need to initialize a {% typedoc_link classes:RadCartesianChart %}, define a {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %} and bind the series to a set of data objects.

### Example
Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance.

Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.

```
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable } from 'tns-core-modules/ui/core/view/view';

export const getCountriesData = () => {
  return new ObservableArray([
    { Country: 'Germany', Amount: 15, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
    { Country: 'France', Amount: 13, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
    { Country: 'Bulgaria', Amount: 24, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
    { Country: 'Spain', Amount: 11, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
    { Country: 'USA', Amount: 18, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
  ]);
};
```

All that is left is to declare the template of the vue component in which we:

- Declare a {% typedoc_link classes:RadCartesianChart %}
- Declare the {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %} between the {% typedoc_link classes:RadCartesianChart %} open and close tags
- After that set the **`tkCartesianHorizontalAxis`** and **`tkCartesianVerticalAxis`** directive to the axes
- Declare a {% typedoc_link classes:AreaSeries %} instance to it, bind the {% typedoc_link classes:AreaSeries,member:items%} to the source of data and set the **`tkCartesianSeries`** directive

```
import { getCountriesData } from '../data';

export default {
  template: `
  <Page>
    <RadCartesianChart>
      <AreaSeries v-tkCartesianSeries
                  categoryProperty="Country"
                  valueProperty="Amount"
                  :items="items" />

      <CategoricalAxis v-tkCartesianHorizontalAxis />
      <LinearAxis v-tkCartesianVerticalAxis />
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      items: getCountriesData(),
    };
  }
};
```

The final result is shown in the two images (android and ios) below.

![Cartesian chart: Area series](../../../../ui/img/ns_ui/area_series_android.png "Area series on Android.") ![Cartesian chart: Area series](../../../../ui/img/ns_ui/area_series_ios.png "Area series on iOS.")
