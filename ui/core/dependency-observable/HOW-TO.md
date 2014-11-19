---
nav-title: "dependency-observable How-To"
title: "dependency-observable How-To"
description: "Examples for using dependency-observable"
---
# DependencyObservable
DependencyObservable is a fundamental building block in the NativeScript visual tree (DOM).
It provides enhanced property system allowing for various value modifiers on a per property basis.
This enables cascading values - e.g. default vs. inherited vs. local.
Load the module using the following code:
``` JavaScript
var dependencyObservableModule = require("ui/core/dependency-observable");
```
### Creating a Property
The property backing mechanism in each DependencyObservable instance is implemented via the Property class.
Basically you create a new Property for a class (type):
``` JavaScript
var testProperty = new dependencyObservableModule.Property("test", "TestDO", new dependencyObservableModule.PropertyMetadata(false, dependencyObservableModule.PropertyMetadataOptions.None, onTestPropertyChanged));
```
