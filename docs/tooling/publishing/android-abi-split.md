---
title: Android ABI split
description: Learn how to reduce Android apk sizes by providing a different apk for each architecture.
position: 50
slug: android-abi-split
---

> **NOTE**: The recommended approach for reducing the app size by splitting it per architecture is the [Android App Bundle]({% slug android-app-bundle %}) which is supported out of the box through the `--aab` NativeScript CLI flag.

# Android ABI split

If the recommended Android App Bundle approach is not applicable for you, an ABI split could be manually configured as an alternative. The ABI split approach will produce different apk files for the different architectures.
To achieve this you need to enable ABI splits at **app/App_Resources/Android/app.gradle**

## Enable ABI split
```
android {
....
  defaultConfig {
    ....
    ndk {
      abiFilters.clear()
    }
  }
  splits {
    abi {
      enable true //enables the ABIs split mechanism
      reset() //reset the list of ABIs to be included to an empty string
      include 'arm64-v8a', 'armeabi-v7a', 'x86'
      universalApk true
    }
  }
....
```

> **Note:** In order to get a maximum app size reduction, you can combine the Android App Bundle with [a compiled V8 heap snapshot]({% slug bundling-with-webpack%}#snapshot-per-architecture).

## Publishing ABI split apk
Now you will need to upload all built apk files in Google Play Developer Console. To achieve this the different apks need to have different Version Codes otherwise Google Play won't allow adding them in the same version.
To use different Version Codes you can add the following code in your `App_Resources/Android/app.gradle` which will prefix the different architecture apk Version Codes with different prefixes:

```
project.ext.abiCodes = ['armeabi-v7a': 1, 'arm64-v8a': 2, 'x86': 3]

android.applicationVariants.all { variant ->
    variant.outputs.each { output ->
        def baseAbiVersionCode = project.ext.abiCodes.get(output.getFilter("ABI"), 0)
        if (baseAbiVersionCode != null) {
            output.versionCodeOverride = baseAbiVersionCode * 10000000 + variant.versionCode
        }
    }
}
```
