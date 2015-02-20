---
nav-title: "location How-To"
title: "How-To"
description: "Examples for using location"
---
# Location
Using the location requires the Location module.
``` JavaScript
var locationModule = require("location");
```
## Other functions
### Test are location services available for this device
``` JavaScript
var isEnabled = LocationManager.isEnabled();
```
### Get distance between two locations
``` JavaScript
var Location = require("location").Location;
var locSofia = new Location();
locSofia.longitude = 42.696552;
locSofia.latitude = 23.32601;
var locNewYork = new Location();
locNewYork.longitude = 40.71448;
locNewYork.latitude = -74.00598;
var distance = LocationManager.distance(locSofia, locNewYork);
```
## Getting location
### Receive continuous location updates
``` JavaScript
var locationManager = new LocationManager();
locationManager.startLocationMonitoring(function (location) {
    console.log('Location received: ' + location);
}, function (error) {
    console.log('Location error received: ' + error);
});
```
### Get last known location
``` JavaScript
var locationManager = new LocationManager();
var lastKnownLocation = locationManager.lastKnownLocation;
```
### Get location once
if there is `options.timeout` you will receive error on timeout. If `options.timeout` is 0 then the result is the same as the result from `LocationManager.lastKnownLocation`
and there will be no wait. You can use `options.maximumAge` to specify you don't want to receive locations older than specified time in ms.

``` JavaScript
var locationModule = require("location");
// options can also look like { maximumAge: 2000, timeout: 20 }
locationModule.getLocation({ maximumAge: 30000, timeout: 0 }).then(function (location) {
    console.log('Location received: ' + location);
}, function (error) {
    console.log('Location error received: ' + error);
});
```
