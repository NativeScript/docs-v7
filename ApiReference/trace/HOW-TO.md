---
nav-title: "trace How-To"
title: "trace How-To"
description: "Examples for using trace"
---
# Trace
Tracing information about your app requires the "trace" module.
``` JavaScript
var trace = require("trace");
```
# Tracing all categories of events.
``` JavaScript
trace.setCategories(trace.categories.All);
trace.enable();
```
# Tracing specific categories of events.
``` JavaScript
trace.setCategories(trace.categories.concat(trace.categories.Binding, trace.categories.Debug, trace.categories.Layout, trace.categories.NativeLifecycle, trace.categories.Navigation, trace.categories.Style, trace.categories.ViewHierarchy, trace.categories.VisualTreeEvents));
trace.enable();
```
# Write your own trace message.
``` JavaScript
trace.setCategories(trace.categories.Debug);
trace.enable();
trace.write("My Debug Message", trace.categories.Debug);
```
