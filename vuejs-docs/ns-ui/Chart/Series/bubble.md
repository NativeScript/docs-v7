---
title: Bubble
page_title: Bubble series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Bubble series and continues with a sample scenario of how Bubble series are used.
slug: chart-series-bubble-vue
tags: series, cartesian, bubble, vue, nativescript, professional, ui
position: 7
publish: true
---

# RadChart Bubble Series
Bubble series are {% typedoc_link classes:CategoricalSeries %} and are used in the context of a {% typedoc_link classes:RadCartesianChart %}, {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %}. Ontop of the requirements for a {% typedoc_link classes:CategoricalAxis %}, {% typedoc_link classes:BubbleSeries %} require an additional setup parameter which should come from the data source that defines the *bubble size*. The value for this parameter is supplied by defining the {% typedoc_link classes:BubbleSeries,member:bubbleSizeProperty%}.

## Customization
Ontop of the customization options that come from the {% typedoc_link classes:CategoricalSeries %} context, {% typedoc_link classes:BubbleSeries %} expose the {% typedoc_link classes:BubbleSeries,member:bubbleScale%} property which can be used to fine-tune the size of the bubbles according to specific application requirements. The way the {% typedoc_link classes:BubbleSeries,member:bubbleScale%} property works is by multiplying its value to the radius of calculated for each data-point's bubble.

### Example
Just like with all vue 'pages' let's start with the `Component` in which we will place our {% typedoc_link classes:RadCartesianChart %} instance.

Before that, we would create a basic JS or TS module that contains a collection of objects, which will be used by the chart to provide intuitive data visualization.

```
import { ObservableArray } from 'tns-core-modules/data/observable-array';

export const getHighDataModel = () => {
  return new ObservableArray([
    { Year: 2000, Amount: 15, Impact: 1, Country: '', SecondVal: 0, ThirdVal: 0 },
    { Year: 1456, Amount: 13, Impact: 7, Country: '', SecondVal: 0, ThirdVal: 0 },
    { Year: 1866, Amount: 25, Impact: 10, Country: '', SecondVal: 0, ThirdVal: 0 },
    { Year: 1900, Amount: 5, Impact: 3, Country: '', SecondVal: 0, ThirdVal: 0 },
    { Year: 1700, Amount: 17, Impact: 4, Country: '', SecondVal: 0, ThirdVal: 0 },
    { Year: 1600, Amount: 20, Impact: 1, Country: '', SecondVal: 0, ThirdVal: 0 },
  ]);
};

export const getMiddleDataModel = () => {
  return new ObservableArray([
    { Year: 1200, Amount: 15, Impact: 1, Country: '', SecondVal: 0, ThirdVal: 0 },
    { Year: 1156, Amount: 13, Impact: 7, Country: '', SecondVal: 0, ThirdVal: 0 },
    { Year: 1000, Amount: 25, Impact: 10, Country: '', SecondVal: 0, ThirdVal: 0 },
    { Year: 900, Amount: 5, Impact: 3, Country: '', SecondVal: 0, ThirdVal: 0 },
    { Year: 700, Amount: 17, Impact: 4, Country: '', SecondVal: 0, ThirdVal: 0 },
    { Year: 600, Amount: 20, Impact: 1, Country: '', SecondVal: 0, ThirdVal: 0 },
  ]);
};

export const getLowDataModel = () => {
  return new ObservableArray([
    { Year: 200, Amount: 15, Impact: 1, Country: '', SecondVal: 0, ThirdVal: 0 },
    { Year: 456, Amount: 13, Impact: 7, Country: '', SecondVal: 0, ThirdVal: 0 },
    { Year: 366, Amount: 25, Impact: 10, Country: '', SecondVal: 0, ThirdVal: 0 },
    { Year: 100, Amount: 5, Impact: 3, Country: '', SecondVal: 0, ThirdVal: 0 },
    { Year: 340, Amount: 17, Impact: 4, Country: '', SecondVal: 0, ThirdVal: 0 },
    { Year: 135, Amount: 20, Impact: 1, Country: '', SecondVal: 0, ThirdVal: 0 },
  ]);
};
```

All that is left is to declare the template of the vue component in which we:

- Declare a {% typedoc_link classes:RadCartesianChart %}
- Declare the {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %} between the {% typedoc_link classes:RadCartesianChart %} open and close tags
- After that set the `tkCartesianHorizontalAxis` and `tkCartesianVerticalAxis` directive to the axes
- Finally declare a `BubbleSeries` instance to it, bind the {% typedoc_link classes:BubbleSeries,member:items%} to the source of data and set the `tkCartesianSeries` directive

```
import { getLowDataModel, getMiddleDataModel, getHighDataModel } from '../data';

export default {
  template: `
  <Page>
    <RadCartesianChart>
      <BubbleSeries v-tkCartesianSeries
                    :items="highDataModel"
                    bubbleScale="5"
                    categoryProperty="Year"
                    valueProperty="Amount"
                    bubbleSizeProperty="Impact"></BubbleSeries>
      <BubbleSeries v-tkCartesianSeries
                    :items="middleDataModel"
                    bubbleScale="5"
                    categoryProperty="Year"
                    valueProperty="Amount"
                    bubbleSizeProperty="Impact"></BubbleSeries>
      <BubbleSeries v-tkCartesianSeries
                    :items="lowDataModel"
                    bubbleScale="5"
                    categoryProperty="Year"
                    valueProperty="Amount"
                    bubbleSizeProperty="Impact"></BubbleSeries>

      <CategoricalAxis v-tkCartesianHorizontalAxis
                       verticalLocation="Bottom"
                       labelFitMode="Rotate"
                       labelRotationAngle="1.2"></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis />
    </RadCartesianChart>
  </Page>
  `,
  data () {
    return {
      highDataModel: getHighDataModel(),
      middleDataModel: getMiddleDataModel(),
      lowDataModel: getLowDataModel()
    };
  }
};
```

![Cartesian chart: Bubble series](../../../../ui/img/ns_ui/bubble_series_android.png "Bubble series on Android.") ![Cartesian chart: Bubble series](../../../../ui/img/ns_ui/bubble_series_ios.png "Bubble series on iOS.")
