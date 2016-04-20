---
title: Location
description: How to work with geographical location data in NativeScript.
position: 10
slug: location
previous_url: /location
---

# Location

> **IMPORTANT:** Starting with NativeScript 1.5.0, the built-in Location module is deprecated. To implement geolocation in your apps, use the `nativescript-geolocation` plugin, available via npm. This plugin provides an API similar to the [WC3 Geolocation API](http://dev.w3.org/geo/api/spec-source.html). 

The most important difference between the deprecated module and the new plugin is that location monitoring via the plugin returns an `id` which you can use to stop location monitoring. The `nativescript-geolocation` plugin also uses an accuracy criteria approach to deliver geolocation. This means that getting a location is powered by the most accurate location provider that is available. For example, if GPS signal is available and the GPS provider is enabled, the plugin uses GPS; if GPS is not connected, the device falls back to other available providers such as Wi-Fi networks or cell towers).

This approach does not limit location monitoring only to a specific location provider; it can still work with all of them.

You might want to start with this [example](https://github.com/nsndeck/locationtest) which demonstrates how to use the `nativescript-geolocation` plugin.

To make the plugin available in your app, run the following command:

```Shell
tns plugin add nativescript-geolocation
```

To import the module in your code use:
{% nativescript %}
```JavaScript
var geolocation = require("nativescript-geolocation");
```
{% endnativescript %}
```TypeScript
import geolocation = require("nativescript-geolocation");
```

## Getting Information About a Location Service

NativeScript has an universal way to check if location services are turned on - the `isEnabled` method. The method returns a boolean value (true if the location service is enabled).

> **NOTE:** For Android, `isEnabled` checks if the location service is enabled (any accuracy level). For iOS, the method checks if the location service is enabled for the application in foreground or background mode.

> **NOTE:** Keep in mind that location services do not work in emulators. You can test them only on a real devices.

## Requesting Permissions to Use Location Services

By default, the `nativescript-geolocation` plugin adds the required permissions in `AndroidManiest.xml` for Android and `Info.plist` for iOS. For iOS, the plugin adds two dummy string values which serve as message when the platform asks for permission to use location services. You can edit this message later. 

After you install the plugin, you can request to use location services in the app with the following code:
{% nativescript %}
```XML
<Page> 
    <StackLayout>
        <Button text="enable Location" tap="enableLocationTap"/>
    </StackLayout>
</Page>
```
```JavaScript
function enableLocationTap(args) {
    if (!geolocation.isEnabled()) {
        geolocation.enableLocationRequest();
    }
}
exports.enableLocationTap = enableLocationTap;
```
{% endnativescript %}
{% angular %}
```XML
<StackLayout>
    <Button text="enable Location" (tap)="enableLocationTap()"></Button>
</StackLayout>
```
{% endangular %}
```TypeScript
{% nativescript %}export function {% endnativescript %}public {% angular %}{% endangular %}enableLocationTap() { 
    if (!geolocation.isEnabled()) {
        geolocation.enableLocationRequest();
    }
}
```

## Getting Location

You can get location with `getCurrentLocation` or with `watchLocation`. Using `distance`, you can obtain the distance between two locations.

* [getCurrentLocation](#getcurrentlocation)
* [watchLocation](#watchlocation)
* [distance](#distance)

### `getCurrentLocation`

This method gets a single location. It accepts the `location options` parameter. 

`getCurrentLocation` returns a `Promise<Location>` where `Location` and `location options` are defined as follows.

#### Class: Location  
A data class that encapsulates common properties for a geolocation.

##### Instance Properties

Property | Type | Description
---|---|---
`latitude` | Number | The latitude of the geolocation, in degrees.
`longitude` | Number | The longitude of the geolocation, in degrees.
`altitude` | Number | The altitude (if available), in meters above sea level.
`horizontalAccuracy` | Number | The horizontal accuracy, in meters.
`verticalAccuracy` | Number | The vertical accuracy, in meters.
`speed` | Number | The speed, in meters/second over ground.
`direction` | Number | The direction (course), in degrees.
`timestamp` | Object | The time at which this location was determined.
`android` | Object | The Android-specific [location](http://developer.android.com/reference/android/location/Location.html) object.
 `ios` | CLLocation | The iOS-specific [CLLocation](https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocation_Class/) object.

#### Interface: Options  
Provides options for location monitoring.

##### Properties

Property | Type | Description
---|---|---
`desiredAccuracy` | Number | (Optional) Specifies desired accuracy in meters. Defaults to `DesiredAccuracy.HIGH`
`updateDistance` | Number | (Optional) Updates distance filter in meters. Specifies how often to update. Default on iOS is no filter, on Android it is 0 meters.
`minimumUpdateTime` | Number | (Optional) Specifies the minimum time interval between location updates, in milliseconds. Ignored on iOS.
`maximumAge` | Number | (Optional) Filters locations by how long ago they were received, in milliseconds. For example, if the `maximumAge` is 5000, you will get locations only from the last 5 seconds. 
`timeout` | Number | (Optional) Specifies how long to wait for a location, in milliseconds.


{% nativescript %}
```XML
<Page>
    <StackLayout>
        <Button text="Get Current Location" tap="buttonGetLocationTap"/>
    </StackLayout>
</Page>
```
```JavaScript
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
{% endnativescript %}
{% angular %}
```XML
<StackLayout>
    <Button text="Get Current Location" (tap)="buttonGetLocationTap()"></Button>
</StackLayout>
```
{% endangular %}
```TypeScript
{% nativescript %}export function {% endnativescript %}public {% angular %}{% endangular %}buttonGetLocationTap() {
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

### `watchLocation`

With this method, location watching does not stop automatically until `clearWatch` method is called. You might need to use this method in apps which require a GPS log or active location tracking.  
{% nativescript %}
```XML
<Page>
    <StackLayout>
		<Button row="2" text="start monitoring" tap="buttonStartTap"/>
		<Button row="3" text="stop monitoring" tap="buttonStopTap"/>
    </StackLayout>
</Page>
```
``` JavaScript
function buttonStartTap() {
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

function buttonStopTap() {
	if (watchId) {
		geolocation.clearWatch(watchId);
	}
}
exports.buttonStopTap = buttonStopTap;
```
{% endnativescript %}
{% angular %}
```XML
<StackLayout>
    <Button row="2" text="start monitoring" (tap)="buttonStartTap()"></Button>
    <Button row="3" text="stop monitoring" (tap)="buttonStopTap()"></Button>
</StackLayout>
```
{% endangular %}
``` TypeScript
{% nativescript %}export function {% endnativescript %}public {% angular %}{% endangular %}buttonStartTap() {
	watchId = geolocation.watchLocation(
	function (loc) {
		if (loc) {
			console.log("Received location: " + loc);
		}
	}, 
	function(e){
		console.log("Error: " + e.message);
	}, 
	{desiredAccuracy: 3, updateDistance: 10, updateTime: 1000 * 20}); // Should update every 20 seconds according to Googe documentation. Not verified.
}

{% nativescript %}export function {% endnativescript %}public {% angular %}{% endangular %}buttonStopTap() {
	if (watchId) {
		geolocation.clearWatch(watchId);
	}
}
```

### `distance`

This method lets you measure the distance between two locations in meters.

{% nativescript %}
```JavaScript
function getDistance(loc1, loc2) {
    console.log("Distance between loc1 and loc2 is: " + geolocation.distance(loc1, loc2));
}
```
{% endnativescript %}
```TypeScript
function getDistance(loc1, loc2) {
    console.log("Distance between loc1 and loc2 is: " + geolocation.distance(loc1, loc2));
}
```

## See Also

* [NativeScript Plugins](http://docs.nativescript.org/plugins/plugins)
* [Location Module (Deprecated)](http://docs.nativescript.org/ApiReference/location/README)
* [NativeScript-Geolocation in NPM](https://www.npmjs.com/package/nativescript-geolocation)
