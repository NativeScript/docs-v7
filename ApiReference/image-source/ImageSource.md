---
nav-title: "Class image-source.ImageSource"
title: "Class image-source.ImageSource"
description: "Class image-source.ImageSource"
---
## Class: "image-source".ImageSource  
Encapsulates the common abstraction behind a platform specific object (typically a Bitmap) that is used as a source for images.

##### Instance Properties
 - **height** - _Number_.    
  Gets the height of this instance. This is a read-only property.
 - **width** - _Number_.    
  Gets the width of this instance. This is a read-only property.
 - **ios** - _UIImage_.    
  The iOS-specific [UIImage](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImage_Class/) instance. Will be undefined when running on Android.
 - **android** - _Object_.    
  The Android-specific [image](http://developer.android.com/reference/android/graphics/Bitmap.html) instance. Will be undefined when running on iOS.

##### Instance Functions
 - **loadFromResource(** name _String_ **)** _Boolean_  
     Loads this instance from the specified resource name.
   - **name** - _String_  
     The name of the resource (without its extension).
   - _**return**_ - _Boolean_
 - **loadFromFile(** path _String_ **)** _Boolean_  
     Loads this instance from the specified file.
   - **path** - _String_  
     The location of the file on the file system.
   - _**return**_ - _Boolean_
 - **loadFromData(** data _Object_ **)** _Boolean_  
     Loads this instance from the specified native image data.
   - **data** - _Object_  
     The native data (byte array) to load the image from. This will be either Stream for Android or NSData for iOS.
   - _**return**_ - _Boolean_
 - **setNativeSource(** source _Object_ **)** _Boolean_  
     Sets the provided native source object (typically a Bitmap).
This will update either the android or ios properties, depending on the target os.
   - **source** - _Object_  
     The native image object. Will be either a Bitmap for Android or a UIImage for iOS.
   - _**return**_ - _Boolean_
 - **saveToFile(** path _String_, format _String_, quality? _Number_ **)** _Boolean_  
     Saves this instance to the specified file, using the provided image format and quality.
   - **path** - _String_  
     The path of the file on the file system to save to.
   - **format** - _String_  
     The format (encoding) of the image.
   - **quality** - _(optional)_ - _Number_  
     Optional parameter, specifying the quality of the encoding. Defaults to the maximum available quality.
   - _**return**_ - _Boolean_
 - **toBase64String(** format _String_, quality? _Number_ **)** _String_  
     Converts the image to base64 encoded string, using the provided image format and quality.
   - **format** - _String_  
     The format (encoding) of the image.
   - **quality** - _(optional)_ - _Number_  
     Optional parameter, specifying the quality of the encoding. Defaults to the maximum available quality.
   - _**return**_ - _String_