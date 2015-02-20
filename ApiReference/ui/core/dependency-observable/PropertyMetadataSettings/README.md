---
nav-title: "Module ui/core/dependency-observable.PropertyMetadataSettings"
title: "Module ui/core/dependency-observable.PropertyMetadataSettings"
description: "Module ui/core/dependency-observable.PropertyMetadataSettings"
---
## Namespace: "ui/core/dependency-observable".PropertyMetadataSettings
Lists the possible values for the PropertyMetadata.options property. Each actual numeric value is a power of two allowing for bitwise operations.

##### Variables
 - **None** - _Number_.    
  No options are specified. This is the default value.
 - **AffectsLayout**    
  A change in the Property associated with the metadata will invalidate the layout.
 - **Inheritable** - _Number_.    
  The Property associated with the metadata is inheritable and its value should be propagated down in the visual tree.
 - **AffectsStyle** - _Number_.    
  A change in the Property associated with the metadata will cause all CSS styles to be re-evaluated for for owning element.