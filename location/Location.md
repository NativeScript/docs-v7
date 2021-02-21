## Class: "location".Location  
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
 - **timestamp** - _Date_.    
  The time at which this location was determined.
 - **android** - _Location_.    
  The android-specific location object.
 - **ios** - _CLLocation_.    
  The ios-specific location object.