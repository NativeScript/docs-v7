## Class: "location".LocationManager  
Provides methods for querying geolocation (in case available) on the target platform.

##### Static Functions
 - **isEnabled()** _Boolean_  
     Checks whether the location services are switched ON for this device (on Android) or application (iOS).
   - _**return**_ - _Boolean_
 - **distance(** loc1 [_Location_](../location/Location.md), loc2 [_Location_](../location/Location.md) **)** _Number_  
     Measures the distance in meters between two locations.
   - **loc1** - [_Location_](../location/Location.md)  
     The first location.
   - **loc2** - [_Location_](../location/Location.md)  
     The second location.
   - _**return**_ - _Number_

##### Instance Properties
 - **desiredAccuracy** - _Number_.    
  The desired accuracy in meters. Defaults to DesiredAccuracy.HIGH
 - **updateDistance** - _Number_.    
  The update distance filter in meters. Specifies how often to update. Default on iOS is no filter, on Android it is 0 meters.
 - **minimumUpdateTime** - _Number_.    
  The minimum time interval between subsequent location updates, in milliseconds (ignored on iOS).
 - **isStarted** - _Boolean_.    
  True if the location listener is already started. In this case all other start requests will be ignored.
 - **lastKnownLocation** - [_Location_](../location/Location.md).    
  Returns last known location from device's location services or null of no known last location.

##### Instance Functions
 - **startLocationMonitoring(** onLocation _Function_..., onError? _Function_..., options? [_Options_](../location/Options.md) **)**  
     Starts location monitoring.
   - **onLocation** - _Function_(location [_Location_](../location/Location.md)) _Object_  
     A function that will be called upon every location update received.
   - **onError** - _(optional)_ - _Function_(error _Error_) _Object_  
     An optional error callback.
   - **options** - _(optional)_ - [_Options_](../location/Options.md)  
     An optional object specifying location update settings.
 - **stopLocationMonitoring()**  
     Stops location monitoring.