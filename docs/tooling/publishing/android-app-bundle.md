---
title: Android App Bundle
description: Learn what is Android App Bundle and how to use it.
position: 50
slug: android-app-bundle
---

# Android App Bundle
Android App Bundle is a new publishing format that contains all the compiled code and resources of your app, but leaves the actual APK generation and signing to Google Play. The store then uses the app bundle to generate and serve optimized APKs based on the device configuration of the specific user. In general, the benefit of using Android App Bundles is that you no longer have to build, sign, and manage multiple APKs to support different devices, and users get smaller, more optimized downloads. For more information about the Android App Bundle, see the About Android App Bundles article in the official [Android Developer documentation](https://developer.android.com/guide/app-bundle/).

> **Note:** In order to get a maximum app size reduction, you can combine the Android App Bundle with [a compiled V8 heap snapshot]({% slug bundling-with-webpack%}#snapshot-per-architecture).

## Produce Android App Bundle
You can perform a full build and produce a signed AAB using the NativeScript CLI:
```
tns build android --release --key-store-path <path-to-your-keystore> --key-store-password <your-key-store-password> --key-store-alias <your-alias-name> --key-store-alias-password <your-alias-password> --aab --copy-to <aab-location>.aab
```

## Changing the default target architectures

> **WARNING**: Filtering the target architectures does not reduce the app size, it just drops the support for the devices and emulators using the missing architecture.

By default, the generated `aab` file supports all of the available device architectures - `armeabi-v7a`, `arm64-v8a`, `x86` and `x86_64`. This behavior can be overridden from your `App_Resources/Android/app.gradle`'s `apiFilters` property:
```
android {
....
  defaultConfig {
    ....
    ndk {
      abiFilters.clear()
      abiFilters "x86_64", "x86", "arm64-v8a", "armeabi-v7a"
    }
  }
....
```

>**Note:** If you use the V8 snapshots feature and change the target architectures, you can also apply the same change in the snapshot plugin by providing [it's targetArchs option]({% slug bundling-with-webpack%}#other-options-target-archs) in order to avoid generating redundant snapshots and speed up the app build time.

## Testing the produced `.aab` file
Starting from NativeScript CLI 6.2.0, the Android App Bundle is supported out of the box by the `tns run` command:
```
tns run android --key-store-path <path-to-your-keystore> --key-store-password <your-key-store-password> --key-store-alias <your-alias-name> --key-store-alias-password <your-alias-password> --aab --copy-to <aab-location>.aab
``` 

## Testing the produced `.aab` file before NativeScript 6.2

For older NativeScript version, in order to test the `apk` files that Google Play will produce from the `.aab` for a specific device you will need to use the Android `bundletool` or upload to Google Play and use a test track.

If you use the `bundletool` you should first generate an `.apks` file that will later be used to deploy on a device.

```
java -jar <toolPath>/bundletool.jar build-apks --bundle=<somePath>/app.aab  --output="<somePath>/my_app.apks"
--ks=<path to keystore file> 
--ks-pass=pass:<keystore pass> 
--ks-key-alias=<key alias> 
--key-pass=pass:<key pass>
```

Then you can install the application on a connected device by executing:

>**Note:** Devices running Android 4.4 (API level 19) and lower don’t support downloading and installing split APKs. On such devices `bundletool` will not be able to deploy the application. When the bundle is released Google Play will serve a single multi-APK to such devices.

```
java -jar <toolPath>/bundletool.jar install-apks --apks="somePath/my_app.apks" --device-id=<deviceId>
```

You can find more information about using Android `bundletool` [here](https://developer.android.com/studio/command-line/bundletool).
