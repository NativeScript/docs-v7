---
nav-title: "Class ui/core/dependency-observable"
title: "Class ui/core/dependency-observable"
description: "Class ui/core/dependency-observable"
---
# Module: "ui/core/dependency-observable"

``` JavaScript
// To import the "ui/core/dependency-observable" module:
var uicoredependency_observable = require("ui/core/dependency-observable");
```

Class | Description
------|------------
[Property](../../../ui/core/dependency-observable/Property.md) | Represents a special Property which supports changed callback, metadata and value validation.
[PropertyMetadata](../../../ui/core/dependency-observable/PropertyMetadata.md) | Represents an Object that describes a Property instance.
[PropertyEntry](../../../ui/core/dependency-observable/PropertyEntry.md) | Represents an Object that is used to back a value for a Property in a DependencyObservable Object instance.
[DependencyObservable](../../../ui/core/dependency-observable/DependencyObservable.md) | Represents an extended Observable Object that uses Property instances for value backing mechanism.
This routine allows for various value modifiers per Property, which is used for inheritance, data-binding and styling purposes.

Object | Description
------|------------
[PropertyChangeData](../../../ui/core/dependency-observable/PropertyChangeData.md) | The data for the event raised when a value of a Property changes for a DependencyObservable instance.
[PropertyChangedCallback](../../../ui/core/dependency-observable/PropertyChangedCallback.md) | Defines the signature of the function that handles the propertyChanged event.
[PropertyValidateValueCallback](../../../ui/core/dependency-observable/PropertyValidateValueCallback.md) | Defines the signature of the function that handles the validateValue event.
[PropertyEqualityComparer](../../../ui/core/dependency-observable/PropertyEqualityComparer.md) | Defines the signature of the function that compares if two property values are equal.

Namespace | Description
------|------------
[PropertyMetadataOptions](../../../ui/core/dependency-observable/PropertyMetadataOptions/) | Lists the possible values for the PropertyMetadata.options property. Each actual numeric value is a power of two allowing for bitwise operations.
[ValueSource](../../../ui/core/dependency-observable/ValueSource/) | Lists the possible values for the PropertyEntry.valueSource property.