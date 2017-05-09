---
nav-title: "Metadata limitations"
title: "Metadata limitations"
description: "Limitations, caused by generated metadata"
position: 2
---

# Metadata API level

As Described in the [Execution Flow](accessing-packages.md), you may not use APIs that are not present in the metadata. That means, if an application is built with metadata for API level 23 (Android Marshmallow 6.0 – 6.0.1), the application developer might have problems when running this built app on an older device, for example with API level 19 (Android KitKat 4.4 – 4.4.4).

Metadata is built automatically for the application. The metadata API level, or simply put, for what API level is the metadata built, is determined by the --compileSdk flag passed to the build. By default the nativescript CLI automatically searches for the highest Android API level installed on the developer's machine and passes it to the build implicitly. This --compileSdk flag can be passed explicitly when starting a build: "tns run android --compileSdk=android-21".

# Metadata limitations

Let's look at the Android [TextView](https://developer.android.com/reference/android/widget/TextView.html).
In API level 21 a method called getLetterSpacing was added. What that means is, an application developer can use the "getLetterSpacing" method only on two conditions:
* The built metadata is >= 21
* The device that the application will be running on is >= 21

## Possible problems

#### Problem 1: Building with lower API level.

If an application is built with --compileSdk flag pointing to a lower Android API level, for example 19, the generated metadata will also be for API level 19. In that case making calls to API in Levels 21 and up will not be possible, because the metadata comprises of meta information about API level <= 19.

This problem is easily solved by not specifying a --compileSdk flag and using the default behavior.

#### Problem 2: Building with higher API level.

What happens when an application is built with higher API level(e.g. 23), but runs on a device with a lower API level(e.g. 20)?
First the metadata is built for API level 23. If the javascript code calls a method introduced after API level 20 the Android runtime will try to call this method because it will recognize it in the metadata, but when the actual native call is made on the lower level device, an exception will be trown because this method won't be present on the device.

This problem is solved by detecting the API level at run-time and using the available API.

Detecting API Level in JavaScript:

```javascript
if (android.os.Build.VERSION.SDK_INT >= 21) {
    // you api level specific code
}
```
