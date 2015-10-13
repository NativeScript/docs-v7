---
nav-title: "Class platform.device"
title: "Class platform.device"
description: "Class platform.device"
---
## Class: "platform".device

##### Static Properties
 - **manufacturer** - _String_.    
  Gets the manufacturer of the device.
For example: "Apple" or "HTC" or "Samsung".
 - **model** - _String_.    
  Gets the model of the device.
For example: "Nexus 5" or "iPhone".
 - **os** - _String_.    
  Gets the model of the device.
For example: "Android" or "iOS".
 - **osVersion** - _String_.    
  Gets the OS version.
For example: 4.4.4(android), 8.1(ios)
 - **sdkVersion** - _String_.    
  Gets the OS version.
For example: 19(android), 8.1(ios).
 - **deviceType** - _String_.    
  Gets the type current device.
Available values: "phone", "tablet".
 - **uuid** - _String_.    
  Gets the uuid.
On iOS this will return a new uuid if the application re-installed on the device.
If you need to receive the same uuid even after the application has been re-installed on the device,
use this plugin: https://www.npmjs.com/package/nativescript-ios-uuid
 - **language** - _String_.    
  Gets the preferred language. For example "en" or "en_US"