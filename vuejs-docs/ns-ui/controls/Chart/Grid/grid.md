---
title: Overview
page_title: Chart Grid Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of Charts Grid's features.
slug: chart-grid-vue
tags: chart, grid, vue
position: 1
publish: true
---

# Chart: Grid

In this article, you will learn how to display the grid lines in `Telerik Chart for NativeScript`.

## RadCartesianChartGrid

The {% typedoc_link classes:RadCartesianChartGrid %} represents a decoration over the plot area of RadCartesianChart. Adds major and minor lines, connected to each Major and Minor tick of each axis. You can set a new grid by declaring an `RadCartesianChartGrid` and setting the `tkCartesianGrid` directives on the instance.

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
      <RadCartesianChartGrid v-tkCartesianGrid></RadCartesianChartGrid>
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

### Features

#### Horizontal and Vertical Stroke color

{% typedoc_link classes:RadCartesianChartGrid %} offers the possibility to change the vertical and horizontal strokes colors. To modify the values use the {% typedoc_link classes:RadCartesianChartGrid,member:horizontalStrokeColor %} and {% typedoc_link classes:RadCartesianChartGrid,member:verticalStrokeColor %} properties.

#### Horizontal and Vertical Strip line color

{% typedoc_link classes:RadCartesianChartGrid %} offers the possibility to change the vertical and horizontal strip lines color. To modify the values use the {% typedoc_link classes:RadCartesianChartGrid,member:horizontalStripLineColor %} and {% typedoc_link classes:RadCartesianChartGrid,member:verticalStripLineColor %} properties.

#### Horizontal and Vertical Stroke width

Just like the Stroke color, {% typedoc_link classes:RadCartesianChartGrid %} offers the possibility to change the vertical and horizontal stroke widths. To modify the values use the {% typedoc_link classes:RadCartesianChartGrid,member:horizontalStrokeWidth %} and {% typedoc_link classes:RadCartesianChartGrid,member:verticalStrokeWidth %} properties.

#### Horizontal and Vertical lines visibility

{% typedoc_link classes:RadCartesianChartGrid %} offers the possibility to change the vertical and horizontal lines visibility. To show or hide the lines modify the {% typedoc_link classes:RadCartesianChartGrid,member:horizontalLinesVisible %} and {% typedoc_link classes:RadCartesianChartGrid,member:verticalLinesVisible %} properties.

#### Horizontal and Vertical strip lines visibility

{% typedoc_link classes:RadCartesianChartGrid %} offers the possibility to change the vertical and horizontal strip lines visibility. To show or hide the lines modify the {% typedoc_link classes:RadCartesianChartGrid,member:horizontalStripLinesVisible %} and {% typedoc_link classes:RadCartesianChartGrid,member:verticalStripLinesVisible %} properties.
