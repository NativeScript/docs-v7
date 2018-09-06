---
nav-title: "Overview"
title: "Data Conversion (Marshalling)"
description: "NativeScript Android Runtime Data Conversion (Marshalling)"
position: 0
---

# Data Conversion
Being two different worlds, Java and JavaScript use different data types. For example `java.lang.String` is not the same as the JavaScript's `String`. The NativeScript Runtime provides implicit type conversion that projects types and values from [JavaScript to Java](./js-to-java.md) and [vice-versa](./java-to-js.md). There are several corner cases - namely with different method overloads, where an explicit input is required to call the desired method but these cases are not common and a typical application will seldom (if ever) need such explicit conversion.

# See Also
* [Converting JavaScript to Java](./js-to-java.md)
* [Converting Java to JavaScript](./java-to-js.md)