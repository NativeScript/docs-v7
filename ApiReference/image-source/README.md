---
nav-title: "Module image-source"
title: "Module image-source"
description: "Module image-source"
---
# Module: "image-source"

``` JavaScript
// To import the "image-source" module:
var image_source = require("image-source");
```

Class | Description
------|------------
[ImageSource](../image-source/ImageSource.md) | Encapsulates the common abstraction behind a platform specific object (typically a Bitmap) that is used as a source for images.

Enum | Description
------|------------
[ImageFormat](../image-source/ImageFormat.md) | Defines the recognized image formats.

##### Functions
 - **fromResource(** name _String_ **)** [_ImageSource_](../image-source/ImageSource.md)  
     Creates a new ImageSource instance and loads it from the specified resource name.
   - **name** - _String_  
     The name of the resource (without its extension).
   - _**return**_ - [_ImageSource_](../image-source/ImageSource.md)
 - **fromFile(** path _String_ **)** [_ImageSource_](../image-source/ImageSource.md)  
     Creates a new ImageSource instance and loads it from the specified file.
   - **path** - _String_  
     The location of the file on the file system.
   - _**return**_ - [_ImageSource_](../image-source/ImageSource.md)
 - **fromData(** data _Object_ **)** [_ImageSource_](../image-source/ImageSource.md)  
     Creates a new ImageSource instance and loads it from the specified resource name.
   - **data** - _Object_  
     The native data (byte array) to load the image from. This will be either Stream for Android or NSData for iOS.
   - _**return**_ - [_ImageSource_](../image-source/ImageSource.md)
 - **fromNativeSource(** source _Object_ **)** [_ImageSource_](../image-source/ImageSource.md)  
     Creates a new ImageSource instance and sets the provided native source object (typically a Bitmap).
The native source object will update either the android or ios properties, depending on the target os.
   - **source** - _Object_  
     The native image object. Will be either a Bitmap for Android or a UIImage for iOS.
   - _**return**_ - [_ImageSource_](../image-source/ImageSource.md)
 - **fromUrl(** url _String_ **)** _Promise_...  
     Downloads the image from the provided Url and creates a new ImageSource instance from it.
   - **url** - _String_  
     The link to the remote image object. This operation will download and decode the image.
   - _**return**_ - _Promise_ of [_ImageSource_](../image-source/ImageSource.md)