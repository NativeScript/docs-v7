---
title: Getting started
page_title: Getting started | Progress NativeScript UI Documentation
description: Getting started with Progress NativeScript UI
slug: getting-started
tags: getting, started, ui, nativescript
position: 1
publish: true
---

# Getting Started
The following article assumes that you already have the latest version of NativeScript and have [created a NativeScript application]({% slug introduction %}).

## Installation

- Open a console window and go to the root directory of your NativeScript application.
- Install the package that contains the component that you want to use by typing nativescript command that adds a plugin. For example, if you want to use the chart, type  
````
$ tns plugin add nativescript-ui-chart
````
- Then import/require the installed component in your app

```TypeScript
import * as chartModule from "nativescript-ui-chart";
```
```JavaScript
var chartModule = require("nativescript-ui-chart");