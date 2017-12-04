---
nav-title: "Overview"
title: "Metadata Overview"
description: "NativeScript Android Runtime Metadata Overview"
position: 0
previous_url: /generator,/metadata-limitations
---

# Metadata Overview
The NativeScript Metadata is the mapping between the JavaScript and the Java/Android worlds. Besides a full list with all the available classes and methods, the metadata contains the [JNI](http://developer.android.com/training/articles/perf-jni.html) signature for each accessible Android method/field. It is pre-generated, in a binary format, and embedded in the application package (apk), storing the minimal required information thus providing small size and highly efficient read access. The generation process uses the Java's [Reflection Mechanism](http://en.wikipedia.org/wiki/Reflection_(computer_programming)) to iterate through all publicly available types in the Android libraries supplied to the NativeScript project. The generator works as part of the Android build process, meaning that no user interaction is required for it to work.

![Metadata](metadata_diagram.png)

# Metadata API Level

Only Android public APIs (**including those of any plugins added to the project**) present in the metadata will be accessible in JavaScript/TypeScript. That means, if an application is built with metadata for API level 23 (Android Marshmallow 6.0 – 6.0.1), the application user might have problems when running the application on an older device, for example with API levels 17 through 19 (Android KitKat 4.4 – 4.4.4).

Metadata is built automatically for the application. The metadata API level, or simply put, what API level the metadata is built for, is determined by the `--compileSdk` flag passed to the build. By default the nativescript CLI automatically detects the highest Android API level installed on the developer's machine and passes it to the build implicitly. This `--compileSdk` flag can be supplied explicitly when starting a build: `tns run android --compileSdk=1`.

# Metadata Limitations

Let's look at the Android [TextView](https://developer.android.com/reference/android/widget/TextView.html).
In API level 21 a method called getLetterSpacing was added. What that means is, an application developer can use the "getLetterSpacing" method only on two conditions:
* The built metadata is >= 21
* The device that the application will be running on is >= 21

## Possible Implications When Working With Android APIs

#### Implication A: Building against lower API level.

If an application is built with --compileSdk flag pointing to a lower Android API level, for example 19, the generated metadata will also be for API level 19. In that case making calls to API in Levels 21 and up will not be possible, because the metadata comprises of meta information about API level <= 19.

This problem is easily solved by not specifying a --compileSdk flag and using the default behavior.

#### Implication B: Building against higher API level.

What happens when an application is built with higher API level(e.g. 23), but runs on a device with a lower API level(e.g. 20)?
First the metadata is built for API level 23. If the javascript code calls a method introduced after API level 20 the Android runtime will try to call this method because it will recognize it in the metadata, but when the actual native call is made on the lower level device, an exception will be trown because this method won't be present on the device.

This problem is solved by detecting the API level at run-time and using the available API.

Detecting the API Level in JavaScript:

```javascript
if (android.os.Build.VERSION.SDK_INT >= 21) {
    // your api level-specific code
}
```

#See Also
* [Accessing APIs](./accessing-packages.md)
* [Extending Android classes]({%slug accessing-android-apis %})
