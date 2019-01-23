---
title: Getting started
page_title: Getting started | Progress NativeScript UI Documentation
description: Getting started with Progress NativeScript UI
slug: getting-started
tags: getting, started, ui, nativescript
position: 1
publish: true
---

# System requirements

- Android API Level 17+
- iOS 9+
- The latest verison of NativeScript

# Installing Progress NativeScript Pro UI
The following article assumes that you already have the latest version of NativeScript and have [created a NativeScript application](https://docs.nativescript.org/getting-started).

1. Open a console window and go to the root directory of your NativeScript application.
2. Install the package that contains the component that you want to use by typing nativescript command that adds a plugin. For example, if you want to use the chart, type  `tns plugin add nativescript-ui-chart`.
This will install the publicly available, free NativeScript UI Chart plugin by fetching it from npmjs.org.

**After installing the corresponding package, you can access the component that it contains by using the following code:**

```TypeScript

import * as listviewModule from "nativescript-ui-listview";
import * as sidedrawerModule from "nativescript-ui-sidedrawer";
import * as calendarModule from "nativescript-ui-calendar";
import * as chartModule from "nativescript-ui-chart";
import * as dataformModule from "nativescript-ui-dataform";
import * as gaugeModule from "nativescript-ui-gauge";
import * as autocompleteModule from "nativescript-ui-autocomplete";

```
```JavaScript

var listviewModule = require("nativescript-ui-listview");
var sidedrawerModule = require("nativescript-ui-sidedrawer");
var calendarModule = require("nativescript-ui-calendar");
var chartModule = require("nativescript-ui-chart");
var dataformModule = require("nativescript-ui-dataform");
var gaugeModule = require("nativescript-ui-gauge");
var autocompleteModule = require("nativescript-ui-autocomplete");

```

>If you are working on a NativeScript Angular project, make sure to go through the [Angular Getting Started]({%slug getting-started-angular%}) article as well.

