---
title: Location
description: How to work with geographical location data in NativeScript.
position: 1
slug: location
previous_url: /location
---

# Location

With the 1.5.0 release nativescript location module has been deprecated. There is a plugin called `nativescript-geolocation` (available on npmjs.com) which can be used instead. This plugin provide API similar to WC3 geolocation API [WC3-API](http://dev.w3.org/geo/api/spec-source.html). The most important change is that location monitoring returns and `id` which can be used to stop location monitoring. Plugin again uses an accuracy criteria approach to deliver geolocation. This means that getting (or monitoring) a location is powered by the most accurate location provider that is available (for example if GPS signal is available and the GPS provider is enabled, then it will be used; if GPS is not connected, the device falls back to other available providers such as Wi-Fi networks or cell towers).

This approach does not limit location monitoring only to a specific location provider; it can still work with all of them.

It is a good idea to start with this [example](https://github.com/nsndeck/locationtest) which demonstrates how to use the `nativescript-geolocation` plugin.

### Getting an information about location service

NativeScript has an universal way to check if location service is turned on. This can be done by `isEnabled` method which returns a boolean value (true is the location service is enabled).

> Note: This method will get an information about if the location service is enabled (in android) (any accuracy level), or if the location service is enabled for the application (iOS) (either for foreground or background use).

> Note: Keep in mind that location services does not work with emulator (only on a real device).

### Request a permission to use location service

By default plugin adds necessary permissions within `AndroidManifest.xml` file for Android and `Info.plist` file for iOS. For iOS plugin adds two dummy string values which will be used as message when platform asks for permission to use location services (this messages could be edited at any time later). With the plugin installed getting a request for using location services is as simple as a method call:


```XML
<Page> 
    <StackLayout>
        <Button text="enable Location" tap="enableLocationTap"/>
    </StackLayout>
</Page>
```
```JavaScript
var geolocation = require("nativescript-geolocation");
function enableLocationTap(args) {
    if (!geolocation.isEnabled()) {
        geolocation.enableLocationRequest();
    }
}
exports.enableLocationTap = enableLocationTap;
```
```TypeScript
import geolocation = require("nativescript-geolocation");
export function enableLocationTap(args) {
    if (!geolocation.isEnabled()) {
        geolocation.enableLocationRequest();
    }
}
```

### Getting a location
For getting a location information NativeScript provides two different approaches.

* First approach is available using the `nativescript-geolocation` plugin, where there is a `getCurrentLocation` method which can be used to get a single location. This method accepts `location options` parameter. Here is another difference with the previous `location` module and the difference is that this method returns a Promise<Location> where Location and location options are defined as follows:

## Class: Location  
A data class that encapsulates common properties for a geolocation.

##### Instance Properties
 - **latitude** - _Number_.    
  The latitude of the geolocation, in degrees.
 - **longitude** - _Number_.    
  The longitude of the geolocation, in degrees.
 - **altitude** - _Number_.    
  The altitude (if available), in meters above sea level.
 - **horizontalAccuracy** - _Number_.    
  The horizontal accuracy, in meters.
 - **verticalAccuracy** - _Number_.    
  The vertical accuracy, in meters.
 - **speed** - _Number_.    
  The speed, in meters/second over ground.
 - **direction** - _Number_.    
  The direction (course), in degrees.
 - **timestamp** - _Object_.    
  The time at which this location was determined.
 - **android** - _Object_.    
  The android-specific [location](http://developer.android.com/reference/android/location/Location.html) object.
 - **ios** - _CLLocation_.    
  The ios-specific [CLLocation](https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocation_Class/) object.

## Interface: Options  
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

```XML
<Page>
    <StackLayout>
        <Button text="Get Current Location" tap="buttonGetLocationTap"/>
    </StackLayout>
</Page>
```
```JavaScript
var geolocation = require("nativescript-geolocation");
function buttonGetLocationTap(args) {
	var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
	then(function(loc) {
		if (loc) {
			console.log("Current location is: " + loc);
		}
	}, function(e){
		console.log("Error: " + e.message);
	});
}
exports.buttonGetLocationTap = buttonGetLocationTap;
```
```TypeScript
import geolocation = require("nativescript-geolocation");
export function buttonGetLocationTap(args) {
	var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
	then(function(loc) {
		if (loc) {
			console.log("Current location is: " + loc);
		}
	}, function(e){
		console.log("Error: " + e.message);
	});
}
```

* Second approach is using the `watchLocation` method. The difference here is that location watching will not be stopped automatically (useful for a GPS log like application) until `clearWatch` method is called. 

```XML
<Page>
    <StackLayout>
		<Button row="2" text="start monitoring" tap="buttonStartTap"/>
		<Button row="3" text="stop monitoring" tap="buttonStopTap"/>
    </StackLayout>
</Page>
```
``` JavaScript
var geolocation = require("nativescript-geolocation");
function buttonStartTap(agrs) {
	watchId = geolocation.watchLocation(
	function (loc) {
		if (loc) {
			console.log("Received location: " + loc);
		}
	}, 
	function(e){
		console.log("Error: " + e.message);
	}, 
	{desiredAccuracy: 3, updateDistance: 10, updateTime: 1000 * 20}); // should update every 20 sec according to google documentation this is not so sure.
}
exports.buttonStartTap = buttonStartTap;

function buttonStopTap(agrs) {
	if (watchId) {
		geolocation.clearWatch(watchId);
	}
}
exports.buttonStopTap = buttonStopTap;
```
``` TypeScript
import geolocation = require("nativescript-geolocation");
export function buttonStartTap(agrs) {
	watchId = geolocation.watchLocation(
	function (loc) {
		if (loc) {
			console.log("Received location: " + loc);
		}
	}, 
	function(e){
		console.log("Error: " + e.message);
	}, 
	{desiredAccuracy: 3, updateDistance: 10, updateTime: 1000 * 20}); // should update every 20 sec according to google documentation this is not so sure.
}

export function buttonStopTap(agrs) {
	if (watchId) {
		geolocation.clearWatch(watchId);
	}
}
```

Furthermore there is another interesting method which is called distance which returns distance between two locations in meters:

```JavaScript
var geolocation = require("nativescript-geolocation");
function getDistance(loc1, loc2) {
    console.log("Distance between loc1 and loc2 is: " + geolocation.distance(loc1, loc2));
}
```
```TypeScript
import geolocation = require("nativescript-geolocation");
function getDistance(loc1, loc2) {
    console.log("Distance between loc1 and loc2 is: " + geolocation.distance(loc1, loc2));
}
```
