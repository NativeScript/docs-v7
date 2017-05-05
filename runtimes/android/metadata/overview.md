---
nav-title: "Overview"
title: "Metadata Overview"
description: "NativeScript Android Runtime Metadata Overview"
position: 0
previous_url: /generator
---

# The Big Picture
![Metadata](metadata_diagram.png)

# What is Metadata
At its shortest, metadata is the mapping between the JavaScript and the Java/Android worlds. Besides a full list with all the available classes and methods, the metadata contains the [JNI](http://developer.android.com/training/articles/perf-jni.html) signature for each accessible method/field. It is pre-generated, in a binary format, and embedded in the application package (apk), storing the minimal required information thus providing small size and highly efficient read access. The generation process uses the Java's [Reflection Mechanism](http://en.wikipedia.org/wiki/Reflection_(computer_programming)) to iterate through all the publicly available types. The generator is triggered implicitly when building a NativeScript application, meaning that no user setup is required.

#See Also
* [Accessing APIs](./accessing-packages.md)
