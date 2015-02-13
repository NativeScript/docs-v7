---
nav-title: "Module ui/core/dependency-observable.PropertyMetadataOptions"
title: "Module ui/core/dependency-observable.PropertyMetadataOptions"
description: "Module ui/core/dependency-observable.PropertyMetadataOptions"
---
## Namespace: "ui/core/dependency-observable".PropertyMetadataOptions
Lists the possible values for the PropertyMetadata.options property. Each actual numeric value is a power of two allowing for bitwise operations.

##### Variables
 - **None** - _Number_.    
  No options are specified. This is the default value.
 - **AffectsMeasure** - _Number_.    
  A change in the Property associated with the metadata will invalidate the measure for owning element.
 - **AffectsArrange** - _Number_.    
  A change in the Property associated with the metadata will invalidate the arrange for owning element.
 - **AffectsParentMeasure** - _Number_.    
  A change in the Property associated with the metadata will invalidate the measure for the parent of the owning element.
 - **AffectsParentArrange** - _Number_.    
  A change in the Property associated with the metadata will invalidate the arrange for the parent of the owning element.
 - **Inheritable** - _Number_.    
  The Property associated with the metadata is inheritable and its value should be propagated down in the visual tree.
 - **AffectsStyle** - _Number_.    
  A change in the Property associated with the metadata will cause all CSS styles to be re-evaluated for for owning element.