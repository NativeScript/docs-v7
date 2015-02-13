---
nav-title: "Class ui/core/dependency-observable.PropertyMetadata"
title: "Class ui/core/dependency-observable.PropertyMetadata"
description: "Class ui/core/dependency-observable.PropertyMetadata"
---
## Class: "ui/core/dependency-observable".PropertyMetadata  
Represents an Object that describes a Property instance.

##### Instance Properties
 - **options** - _Number_.    
  Gets the options parameter passed to the constructor of this instance. This is a read-only property.
 - **defaultValue** - _Object_.    
  Gets the default value parameter passed to the constructor of this instance. This is a read-only property.
 - **onValueChanged** - [_PropertyChangedCallback_](../../../ui/core/dependency-observable/PropertyChangedCallback.md).    
  Gets or sets the callback to be raised whenever the associated property changes for any DependencyObservable instance that uses the property to store a value.
 - **onValidateValue** - [_PropertyValidateValueCallback_](../../../ui/core/dependency-observable/PropertyValidateValueCallback.md).    
  Gets or sets the callback to be raised whenever the associated property is about to change for any DependencyObservable instance that uses the property to store a value.
 - **affectsMeasure** - _Boolean_.    
  Checks whether the PropertyMetadataOptions.AffectsMeasure bit is present in the options value.
 - **affectsArrange** - _Boolean_.    
  Checks whether the PropertyMetadataOptions.AffectsArrange bit is present in the options value.
 - **affectsParentMeasure** - _Boolean_.    
  Checks whether the PropertyMetadataOptions.AffectsParentMeasure bit is present in the options value.
 - **affectsParentArrange** - _Boolean_.    
  Checks whether the PropertyMetadataOptions.AffectsParentArrange bit is present in the options value.
 - **inheritable** - _Boolean_.    
  Checks whether the PropertyMetadataOptions.Inheritable bit is present in the options value.
 - **affectsStyle** - _Boolean_.    
  Checks whether the PropertyMetadataOptions.AffectsStyle bit is present in the options value.