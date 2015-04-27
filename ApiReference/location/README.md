---
nav-title: "Module location"
title: "Module location"
description: "Module location"
---
# Module: "location"

``` JavaScript
// To import the "location" module:
var location = require("location");
```

Class | Description
------|------------
[Location](../location/Location.md) | A data class that encapsulates common properties for a geolocation.
[LocationManager](../location/LocationManager.md) | Provides methods for querying geolocation (in case available) on the target platform.

Object | Description
------|------------
[Options](../location/Options.md) | Provides options for location monitoring.
[AndroidLocationManager](../location/AndroidLocationManager.md) | Provides Android specific data related to location.
[iOSLocationManager](../location/iOSLocationManager.md) | Provides iOS specific data related to location.

##### Functions
 - **getLocation(** options? [_Options_](../location/Options.md) **)** _Promise_...  
     Fires a single shot location search. If you specify timeout in options (milliseconds), location search will stop on timeout.
If you specify timeout = 0 it just requests the last known location.
However if you specify maximumAge and the location received is older it won't be received.
   - **options** - _(optional)_ - [_Options_](../location/Options.md)  
     - An optional object specifying location update settings.
   - _**return**_ - _Promise_ of [_Location_](../location/Location.md)