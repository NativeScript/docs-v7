---
title: Аxis styling
page_title: Axis Styling | Progress NativeScript UI Documentation
description: This article explains how the visual appearance of Telerik Chart's axis for NativeScript can be customized.
slug: axis-styling-vue
tags: chart, overview, styling, vue, nativescript, professional, ui
position: 8
publish: false
---

# RadChart Axes Styling
Styling the chart axes is done by using the corresponding customization properties exposed by the axes. All axes used in Telerik Chart for NativeScript define the following properties:

- {% typedoc_link classes:CartesianAxis,member:lineColor%} - defines the color of the axis' line
- {% typedoc_link classes:CartesianAxis,member:lineThickness%} - defines the thickness of the axis' line
- {% typedoc_link classes:CartesianAxis,member:lineHidden%} - defines if the axis line is hidden.
- {% typedoc_link classes:CartesianAxis,member:labelTextColor%} - defines the color of the axis' labels
- {% typedoc_link classes:CartesianAxis,member:labelSize%} - defines the text size of the axis' labels
- {% typedoc_link classes:CartesianAxis,member:labelFormat%} - defines the format used to display the axis' labels
- {% typedoc_link classes:CartesianAxis,member:labelMargin%} - defines the margin for the labels
- {% typedoc_link classes:CartesianAxis,member:labelRotationAngle%} - defines the angle of rotation for labels. Requires *Rotate* value for *labelFitMode* property
- {% typedoc_link classes:CartesianAxis,member:labelFitMode%} - defines the fit mode for labels. The default value is {% typedoc_link enums:ChartAxisLabelFitMode,member:None%} which means the labels are positioned on single line but there are {% typedoc_link enums:ChartAxisLabelFitMode,member:Multiline%} and {% typedoc_link enums:ChartAxisLabelFitMode,member:Rotate%} options too.
- {% typedoc_link classes:CartesianAxis,member:labelLayoutMode%} - defines the layout mode for axis labels. With this property you can position labels in the {% typedoc_link enums:ChartAxisLabelLayoutMode,member:Inner%} or {% typedoc_link enums:ChartAxisLabelLayoutMode,member:Outer%} side of chart.

For the properties not specified exclusively the default values from the chart palette are used.

#### Example

To better illustrate the usage of Axis properties, we will use a simple scenario in which the Axes are customized:

```
import { getCountriesData } from '../data';

export default {
  template: `
  <Page>
    <StackLayout>
      <RadCartesianChart>
        <LinearAxis v-tkCartesianHorizontalAxis labelTextColor="Green"></LinearAxis>
        <CategoricalAxis v-tkCartesianVerticalAxis
                         labelTextColor="#cb4b16" labelSize="10"
                         lineThickness="3" lineColor="Red"></CategoricalAxis>
        <BarSeries v-tkCartesianSeries
                   :items="items"
                   categoryProperty="Country"
                   valueProperty="Amount"
                   :items="items" />
      </RadCartesianChart>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      items: getCountriesData(),
    };
  }
};
```

This is how the chart looks like now:
![Axis styling](../../../../ui/img/ns_ui/axis_styling_android.png "Android") ![Axis styling](../../../../ui/img/ns_ui/axis_styling_ios.png "iOS")
