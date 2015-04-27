---
nav-title: "Object camera.CameraOptions"
title: "Object camera.CameraOptions"
description: "Object camera.CameraOptions"
---
## Object: "camera".CameraOptions

##### Properties
 - **width** - _(optional)_ - _Number_.    
  Defines the desired width (in device independent pixels) of the taken image. It should be used with height property.
If `keepAspectRatio` actual image width could be different in order to keep the aspect ratio of the original camera image.
The actual image width will be greater than requested if the display density of the device is higher (than 1) (full HD+ resolutions).
 - **height** - _(optional)_ - _Number_.    
  Defines the desired height (in device independent pixels) of the taken image. It should be used with width property.
If `keepAspectRatio` actual image width could be different in order to keep the aspect ratio of the original camera image.
The actual image height will be greater than requested if the display density of the device is higher (than 1) (full HD+ resolutions).
 - **keepAspectRatio** - _(optional)_ - _Boolean_.    
  Defines if camera picture aspect ratio should be kept during picture resizing.
This property could affect width or heigth return values.