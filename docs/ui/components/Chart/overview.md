---
title: Overview
page_title: Chart Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of the charts features.
slug: chart-overview
tags: radchart, overview, chart, nativescript, professional, ui
position: 1
publish: true
---

# RadChart Overview
`RadChart` for NativeScript is a charting component that has been designed for the mobile environment. It offers great performance in loading time, drawing capabilities and real-time updates. Its intuitive object model and public API allow you to easily setup complex chart objects and integrate them into your application. The control supports different chart types (and series) organized in hierarchies, depending on the coordinate system, used to plot the data points — for example Cartesian ({% typedoc_link classes:RadCartesianChart %}) and radial ({% typedoc_link classes:RadPieChart %}) coordinate systems.

A charting component in general is used to visualize (or plot) some data in a human-readable way through different representations like lines, areas, bars, pies, etc. Each series has a collection of data points—the data equivalent of a 2D point—and knows how to visualize them. Different series types may process certain types of data points—for example categorical series may contain categorical data points. An intuitive data binding mechanism transforms the raw data to appropriate data points depending on the chosen series.

## RadChart Types
Depending on the coordinate system that you want to use for visualization of the data points, you can use the following chart types:

- [RadCartesianChart]({% slug chart-types-cartesian %} "Read more about RadCartesianChart"): As the name hints, this concrete chart control uses the Cartesian coordinate system to plot the data points in its chart series. The X and Y axes define how each point’s coordinates in the plot area are calculated.
- [RadPieChart]({% slug chart-types-pie %} "Read more about RadPieChart"): This concrete chart control visualizes its data points using radial coordinate system. Each data point is represented as a slice from a pie. The ratio between the space consumed by each slice and the space consumed by the whole chart is the same as the ratio between the value of the data point that it represents and the total value of all data points in the series.
