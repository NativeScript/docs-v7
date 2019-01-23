---
title: Pie Chart Type
page_title: RadPieChart | Progress NativeScript UI Documentation
description: This article is a short description and summary of RadPieChart features.
slug: chart-types-pie
tags: chart, pie, overview, radpiechart
position: 2
publish: true
previous_url: controls/chart/types/pie
---

# RadPieChart
{% typedoc_link classes:RadPieChart %} is one of the two Chart types part of Progress NativeScript UI. This chart visualizes its data points using radial coordinate system. Each data point is represented as a slice from a pie. The ratio between the space consumed by each slice and the space consumed by the whole chart is the same as the ratio between the value of the data point that it represents and the total value of all data points in the series.

## Supported Series
{% typedoc_link classes:RadPieChart %} can visualize the following types of series:

- [PieSeries]({% slug chart-series-pie %} "Read more about PieSeries"): used to visualize a single series of data in a pie chart. The sweep of a pie's slices is directly proportional to the magnitude of the data point values
- [DonutSeries]({% slug chart-series-pie %} "Read more about DonutSeries"): extend {% typedoc_link classes:PieSeries %} and work in pretty much the same way besides having an empty segment in the center compared to `PieSeries`

## Create RadPieChart from scratch
Creating a new pie chart is very similar to creating a new Cartesian chart. For more information and guidance, take a look at the dedicated article: [Pie and Donut series]({% slug chart-series-pie %}).

## Additional customization
-  {% typedoc_link classes:PieSeries,member:outerRadiusFactor %}: this property can increase and decrease the diameter of the series. By default, it occupies the whole plot area and is equal to 1.
Setting the outerRadius to 0.9 will decrease the radius of the series by 10 percent.
Similarly, the value 1.1 will increase it. Leaving the property with value 1 will make the donut fill the available space.
- {% typedoc_link classes:PieSeries,member:expandRadius %}: this property defines the extent to which the selected pie segment is shifted.
Again, this property is measured in percents. A value of 1.1 defines that the selected segment will expand by 10% of the pie radius.
- {% typedoc_link classes:PieSeries,member:startAngle %} and {% typedoc_link classes:PieSeries,member:endAngle %}: these properties are used to define the pie range. The `startAngle` sets the angle in degrees from which the drawing of the pie segments will begin.
Its default value is 0. The `endAngle` determines whether the chart will appear as a full circle or a partial circle. Its default value is 360 degrees.
- {% typedoc_link classes:DonutSeries,member:innerRadius %}: {% typedoc_link classes:DonutSeries %} is a special case of pie series. You can visualize data as a donut if `innerRadius` property is specified.
