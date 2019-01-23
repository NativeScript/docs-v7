---
title: Financial Series
page_title: Financial series | Progress NativeScript UI Documentation
description: This article gives a basic introduction of Financial series and continues with a sample scenario of how Financial series are used.
slug: chart-series-financial
tags: series, cartesian, financial
position: 1
publish: true
previous_url: controls/chart/series/financial/overview
---

# Financial series: overview
Financial series is the common name of two series types supported by Chart for NativeScript: {% typedoc_link classes:OhlcSeries %} and {% typedoc_link classes:CandlestickSeries %} Both series are of categorical nature and need a {% typedoc_link classes:CategoricalAxis %} and {% typedoc_link classes:LinearAxis %} to be able to visualize data. In contrast to the other major categorical series, the 'Financial series' depend on more parameters for their data points which are defined by the following properties exposed by these series:

- {% typedoc_link classes:OhlcSeries,member:openProperty%}
- {% typedoc_link classes:OhlcSeries,member:closeProperty%}
- {% typedoc_link classes:OhlcSeries,member:highProperty%}
- {% typedoc_link classes:OhlcSeries,member:lowProperty%}

Being also categorical series, the {% typedoc_link classes:CategoricalSeries,member:categoryProperty%} needs to be defined as well. You can find more information about Ohlc and Candlestick on the following links: <a href="https://en.wikipedia.org/wiki/Open-high-low-close_chart" target="_blank">Ohlc</a>; <a href="https://en.wikipedia.org/wiki/Candlestick_chart" target="_blank">Candlestick</a>

For examples on how to use `OhlcSeries` and `CandlestickSeries` take a look at the following articles:
- [Ohlc]({% slug chart-ohlc-series %} "Ohlc series")
- [Candlestick]({% slug chart-series-candlestick %} "Candlestick series")
