---
nav-title: "Module connectivity"
title: "Module connectivity"
description: "Module connectivity"
---
# Module: "connectivity"

``` JavaScript
// To import the "connectivity" module:
var connectivity = require("connectivity");
```

Namespace | Description
------|------------
[connectionType](../connectivity/connectionType/) | Defines the different connection types.

##### Functions
 - **getConnectionType()** _Number_  
     Gets the type of connection.
Returns a value from the connectivity.connectionType enumeration.
To use this method on Android you need to have the android.permission.ACCESS_NETWORK_STATE permission added to the AndroidManifest.xml file.
   - _**return**_ - _Number_
 - **startMonitoring(** connectionTypeChangedCallback _Function_... **)**  
     Starts monitoring the connection type.
   - **connectionTypeChangedCallback** - _Function_(newConnectionType _Number_)
 - **stopMonitoring()**  
     Stops monitoring the connection type.