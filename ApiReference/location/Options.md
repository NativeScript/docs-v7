---
nav-title: "Class location.Options"
title: "Class location.Options"
description: "Class location.Options"
---
## Object: "location".Options  
Provides options for location monitoring.

##### Properties
 - **desiredAccuracy** - _(optional)_ - _Number_.    
  Specifies desired accuracy in meters. Defaults to DesiredAccuracy.HIGH
 - **updateDistance** - _(optional)_ - _Number_.    
  Update distance filter in meters. Specifies how often to update. Default on iOS is no filter, on Android it is 0 meters
 - **minimumUpdateTime** - _(optional)_ - _Number_.    
  Minimum time interval between location updates, in milliseconds (ignored on iOS)
 - **maximumAge** - _(optional)_ - _Number_.    
  how old locations to receive in ms.
 - **timeout** - _(optional)_ - _Number_.    
  how long to wait for a location in ms.