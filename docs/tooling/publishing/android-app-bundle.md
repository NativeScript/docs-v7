---
title: Android App Bundle
description: Learn what is Android App Bundle and how to use it.
position: 50
slug: android-app-bundle
---

# Android App Bundle
An Android App Bundle is a new publishing format that contains all the compiled code and resources of your app, but leaves the actual APK generation and signing to Google Play. The store then uses the app bundle to generate and serve optimized APKs based on the device configuration of the specific user. In general, the benefit of using Android App Bundles is that you no longer have to build, sign, and manage multiple APKs to support different devices, and users get smaller, more optimized downloads. For more information about the Android App Bundle, see the About Android App Bundles article in the official [Android Developer documentation](https://developer.android.com/guide/app-bundle/).

## Produce Android App Bundle
You can perform a full build and produce a signed AAB using the NativeScript CLI:
```
tns build android --release --key-store-path <path-to-your-keystore> --key-store-password <your-key-store-password> --key-store-alias <your-alias-name> --key-store-alias-password <your-alias-password> --aab --copy-to <aab-location>.aab
```

## Available configurations
By default, the 'arm64-v8a' CPU architecture is excluded from the build of NativeScript application. The following configuration will enable it, but there is a chance that on older devices with this architecture this might affect the startup times.

```
android {
....
  defaultConfig {
    ....
    ndk {
      abiFilters.clear()
    }
  }
....
```

## Testing the produced `.aab` file
In order to test the `apk` files that Google Play will produce from the `.aab` for a specific device you will need to use the Android `bundletool` or upload to Google Play and use a test track.

If you use the `bundletool` you should first generate an `.apks` file that will later be used to deploy on a device.

```
java -jar <toolPath>/bundletool.jar build-apks --bundle=<somePath>/app.aab  --output="<somePath>/my_app.apks"
--ks=<path to keystore file> 
--ks-pass=pass:<keystore pass> 
--ks-key-alias=<key alias> 
--key-pass=pass:<key pass>
```

Then you can install the application on a connected device by executing:

> Note: Devices running Android 4.4 (API level 19) and lower don’t support downloading and installing split APKs. On such devices `bundletool` will not be able to deploy the application. When the bundle is released Google Play will serve a single multi-APK to such devices.

```
java -jar <toolPath>/bundletool.jar install-apks --apks="somePath/my_app.apks" --device-id=<deviceId>
```

You can find more information about using Android `bundletool` [here](https://developer.android.com/studio/command-line/bundletool).
