---
nav-title: "connectivity How-To"
title: "How-To"
description: "Examples for using connectivity"
---
# Connectivity
Obtaining connectivity information requires the "connectivity" module.
``` JavaScript
var connectivity = require("connectivity");
```
### Getting connection type
``` JavaScript
var connectionType = connectivity.getConnectionType();
switch (connectionType) {
    case connectivity.connectionType.none:
        //console.log("No connection");
        break;
    case connectivity.connectionType.wifi:
        //console.log("WiFi connection");
        break;
    case connectivity.connectionType.mobile:
        //console.log("Mobile connection");
        break;
}
```
### Monitoring connection type.
``` JavaScript
connectivity.starMonitoring(function onConnectionTypeChanged(newConnectionType) {
    switch (newConnectionType) {
        case connectivity.connectionType.none:
            //console.log("Connection type changed to none.");
            break;
        case connectivity.connectionType.wifi:
            //console.log("Connection type changed to WiFi.");
            break;
        case connectivity.connectionType.mobile:
            //console.log("Connection type changed to mobile.");
            break;
    }
});
//...
connectivity.stopMonitoring();
```
