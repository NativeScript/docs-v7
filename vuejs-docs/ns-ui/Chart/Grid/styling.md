---
title: Grid Styling
page_title: Grid Styling | Progress NativeScript UI Documentation
description: This article explains how the visual appearance of Telerik Chart's grid for NativeScript can be customized.
slug: grid-styling-vue
tags: chart, grid, styling, vue, nativescript, professional, ui
position: 3
publish: true
---

# RadChart Grid Styling

Styling the chart grid is done by using the corresponding customization properties exposed by the Grid object. Here is a list of the properties that can be used to customized:

- {% typedoc_link classes:RadCartesianChartGrid,member:verticalLinesVisible %} - determines whether the grid lines associated with the vertical axis will be visible
- {% typedoc_link classes:RadCartesianChartGrid,member:horizontalLinesVisible %} - determines whether the grid lines associated with the horizontal axis will be visible

- {% typedoc_link classes:RadCartesianChartGrid,member:verticalStripLinesVisible %} - determines whether the alternating fills between the vertical grid lines are visible or not
- {% typedoc_link classes:RadCartesianChartGrid,member:horizontalStripLinesVisible %} - determines whether the alternating fills between the horizontal grid lines are visible or not

- {% typedoc_link classes:RadCartesianChartGrid,member:verticalStrokeWidth %} - determines the width of the stroke used to paint the vertical grid lines
- {% typedoc_link classes:RadCartesianChartGrid,member:horizontalStrokeWidth %} - determines the width of the stroke used to paint the horizontal grid lines

- {% typedoc_link classes:RadCartesianChartGrid,member:verticalStrokeColor %} - gets or sets the color used to draw the vertical lines of the grid
- {% typedoc_link classes:RadCartesianChartGrid,member:horizontalStrokeColor %} - gets or sets the color used to draw the horizontal lines of the grid

- {% typedoc_link classes:RadCartesianChartGrid,member:verticalStripLineColor %} - determines the color used to paint the fills between the vertical grid lines
- {% typedoc_link classes:RadCartesianChartGrid,member:horizontalStripLineColor %} - determines the color used to paint the fills between the horizontal grid lines

#### Example

To better illustrate the Grid customization, we will show a code snippet where its properties have been used for customizing it:

```
import { getCountriesData } from '../../data';

export default {
  template: `
  <Page>
    <RadCartesianChart>
      <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
      <LinearAxis v-tkCartesianVerticalAxis></LinearAxis>

      <BarSeries v-tkCartesianSeries
                 categoryProperty="Country"
                 valueProperty="Amount"
                 :items="items"></BarSeries>
      <RadCartesianChartGrid v-tkCartesianGrid
                             horizontalLinesVisible="true"
                             verticalLinesVisible="true"
                             horizontalStripLinesVisible="true"
                             verticalStripLinesVisible="true"
                             verticalStrokeColor="#804d0026"
                             horizontalStrokeColor="#ffffcc80"
                             horizontalStrokeWidth="2"
                             verticalStrokeWidth="3"
                             horizontalStripLineColor="#8059005c, #804d0026"></RadCartesianChartGrid>
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

This is how the chart looks like now:

iOS:

![Axis styling](images/grid_styling_ios.png "iOS")

Android:

![Axis styling](images/grid_styling_android.png "Android")
