---
title: Pie
page_title: Pie series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Pie series and continues with a sample scenario of how Pie series are used.
slug: chart-series-pie-vue
tags: series, cartesian, pie, vue, nativescript, professional, ui
position: 10
publish: true
---

# RadChart Pie Series
Unlike all other series, {% typedoc_link classes:PieSeries %} do not require axes. They visualize each data point as pie slices with arc size directly proportional to the magnitude of the raw data point's value. Pie slices represent data in one direction contrasting with the other series which represent data in two dimensions.

### Example
Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance.

Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.

```
import { ObservableArray } from 'tns-core-modules/data/observable-array';

export const getPieData = () => {
  return new ObservableArray([
      { Brand: 'Audi', Amount: 10 },
      { Brand: 'Mercedes', Amount: 76 },
      { Brand: 'Fiat', Amount: 60 },
      { Brand: 'BMW', Amount: 24 },
      { Brand: 'Crysler', Amount: 40 }
  ]);
};
```

All that is left is to declare the template of the vue component in which we:

- Declare two {% typedoc_link classes:RadPieChart %} instances
- Declare a {% typedoc_link classes:PieSeries %} instance to one of them and {% typedoc_link classes:DonutSeries %} to the other, bind the {% typedoc_link classes:PieSeries,member:items%} of both {% typedoc_link classes:RadPieChart %} instances to the source of data and set the **`tkPieSeries`** directive

```
import * as frameModule from 'tns-core-modules/ui/frame';
import { getPieData } from '../../data';

const description = 'Pie Series';

export default {
  name: 'PieSeriesExample',
  description: description,
  template: `
  <Page>
    <StackLayout>
      <RadPieChart height="300" allowAnimation="true" row="0">
        <PieSeries v-tkPieSeries
                   selectionMode="DataPoint"
                   expandRadius="0.4"
                   outerRadiusFactor="0.7"
                   valueProperty="Amount"
                   legendLabel="Brand"
                   :items="items" />

        <RadLegendView v-tkPieLegend position="Right" title="Brands"
                       offsetOrigin="TopRight" width="110"
                       enableSelection="true"></RadLegendView>
      </RadPieChart>

      <RadPieChart height="300" allowAnimation="true" row="1">
        <DonutSeries v-tkPieSeries selectionMode="DataPoint"
                     outerRadiusFactor="0.9"
                     expandRadius="0.4"
                     outerRadiusFactor="0.7"
                     innerRadiusFactor="0.4"
                     valueProperty="Amount"
                     legendLabel="Brand"
                     :items="items" />

        <RadLegendView v-tkPieLegend position="Right" title="Brands"
                       offsetOrigin="TopRight" width="110"
                       enableSelection="true"></RadLegendView>
      </RadPieChart>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      items: getPieData(),
    };
  }
};
```

This is how the example looks like:
![Cartesian chart: Pie series](../../../../ui/img/ns_ui/pie_series_android.png "Pie series on Android.") ![Cartesian chart: Pie series](../../../../ui/img/ns_ui/pie_series_ios.png "Pie series on iOS.")
