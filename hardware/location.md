---
nav-title: Location in NativeScript
title: "Location"
description: How to work with geographical location data in NativeScript.
position: 2
---

# Location

The NativeScript location module uses an accuracy criteria approach to deliver geolocation. This means that getting (or monitoring) a location is powered by the most accurate location provider that is available (for example if GPS signal is available and the GPS provider is enabled, then it will be used; if GPS is not connected, the device falls back to other available providers such as Wi-Fi networks or cell towers).

This approach does not limit location monitoring only to a specific location provider; it can still work with all of them.

It is a good idea to start with the [How-to](./ApiReference/location/HOW-TO.md) article. Here are some further explanations of how API is designed to work.

### Getting an information about location service

NativeScript has an universal way to check if location service is turned on. This can be done by static `isEnabled` method of the LocationManager class.

> Note: This method will get an information about if the location service is enabled (in android) (any accuracy level), or if the location service is enabled for the application (iOS) (either for foreground or background use).

### Request a permission to use location service

Unfortunately here NativeScript cannot give a common approach, since Android and iOS platforms differ significantly on that.
The good thing is that you can always use native API from NativeScript.

``` JavaScript
var buttonModule = require("ui/button");
var appModule = require("application");
var platformModule = require("platform");

var onRequestButtonTap = function(args: observable.EventData) {
    var button = <buttonModule.Button>(args.object);
    if (button.android) {
        console.log("Application run on Android");
        (<android.app.Activity>appModule.android.currentContext).startActivityForResult(new android.content.Intent(android.provider.Settings.ACTION_LOCATION_SOURCE_SETTINGS), 0);
    }
    else if (button.ios) {
        console.log("Application run on iOS");
        if (platformModule.device.osVersion.indexOf("8") === 0) {
            console.log("iOS version is greater or equal to 8.0");
            var iosLocationManager = CLLocationManager.alloc().init();
            iosLocationManager.requestWhenInUseAuthorization();
        }
    }
}
```
``` TypeScript
import buttonModule = require("ui/button");
import appModule = require("application");
import platformModule = require("platform");

var onRequestButtonTap = function(args: observable.EventData) {
    var button = <buttonModule.Button>(args.object);
    if (button.android) {
        console.log("Application run on Android");
        (<android.app.Activity>appModule.android.currentContext).startActivityForResult(new android.content.Intent(android.provider.Settings.ACTION_LOCATION_SOURCE_SETTINGS), 0);
    }
    else if (button.ios) {
        console.log("Application run on iOS");
        if (platformModule.device.osVersion.indexOf("8") === 0) {
            console.log("iOS version is greater or equal to 8.0");
            var iosLocationManager = CLLocationManager.alloc().init();
            iosLocationManager.requestWhenInUseAuthorization();
        }
    }
}
```

> Note (iOS): For iOS there is a change introduced in 8.0 version that changes the way location service is requested. There are two modes for using location service from an application (`WhenInUse` - denotes using location service only when application is running, and `Always` mode which allows using location service in a background application). According to business scenario location service request could be done via `requestWhenInUseAuthorization` or `requestAlwaysAuthorization` methods. Both methods require a specific setting in your application to be set in `application.plist` file. Application `plist` file should contain `NSLocationWhenInUseUsageDescrition` or `NSLocationAlwaysUsageDescription` string values respectively. For iOS versions below 8.0 there is a similar string value named `NSLocationUsageDescription` which is not mandatory.

> Note (Android): In order to request a location service in android a special permission should be set - either `android.permission.ACCESS_COARSE_LOCATION` or `android.permission.ACCESS_FINE_LOCATION`. Fine location permission enables usage of the GPS sensor, so this is the recommended option.

### Getting a location
For getting a location information NativeScript provides two different approaches.

* First approach is available using the `location` module, where there is a `getLocation` method which can be used to get a single location. This method accepts [`location options`](./ApiReference/location/Options.md) parameter. The `timeout` parameter denotes the time in milliseconds when location monitoring will be stopped (default value is 20 seconds). When `timeout` is set to 0 (zero), then last known location (if is newer than maximum age) will be returned.

* Second approach is using the location manager `startLocationMonitoring` method. The difference here is that location monitoring will not be stopped automatically (useful for a GPS log like application). `stopLocationMonitoring` method is used to stop location monitoring.

``` JavaScript
var locationModule = require("location");
var locationManager = new locationModule.LocationManager();
var locationOptions = {
    desiredAccuracy: 3,
    updateDistance: 0,
    minimumUpdateTime: 5000,
    maximumAge: 20000
};
locationManager.startLocationMonitoring(function(location){
    console.log("Location received: " + location);
    }, function (error) {
        console.log("Location error received: " + error);
    }, locationOptions);
```
``` TypeScript
import locationModule = require("location");
var locationManager = new locationModule.LocationManager();
var locationOptions = {
    desiredAccuracy: 3,
    updateDistance: 0,
    minimumUpdateTime: 5000,
    maximumAge: 20000
};
locationManager.startLocationMonitoring(function(location){
    console.log("Location received: " + location);
    }, function (error) {
        console.log("Location error received: " + error);
    }, locationOptions);
```

More information about the NativeScript location module can be found in the [API Reference](./ApiReference/location/location.md).
