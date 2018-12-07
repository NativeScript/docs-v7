---
title: Android App Bundle
description: Learn what is Android App Bundle and how to use it.
position: 50
slug: android-app-bundle
---

# Android App Bundle
An Android App Bundle is a new publishing format that contains all the compiled code and resources of your app, but leaves the actual APK generation and signing to Google Play. The store then uses the app bundle to generate and serve optimized APKs based on the device configuration of the specific user. In general, the benefit of using Android App Bundles is that you no longer have to build, sign, and manage multiple APKs to support different devices, and users get smaller, more optimized downloads. For more information about the Android App Bundle, see the About Android App Bundles article in the official [Android Developer documentation](https://developer.android.com/guide/app-bundle/).

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

## Additional optimizations
The performance and size of the application can be improved even further by configuring the `nativescript-dev-webpack` plugin.

The default file format that the `nativescript-dev-webpack` plugin produces when you execute `tns build  android --bundle --env.uglify --env.snapshot --aab` is a `.blob` file.

> Note: The snapshot generation feature is limited to macOS and Linux platforms due to inability to build the `mksnapshot` tool when running on Windows. Currently, the --env.snapshot flag is ignored on Windows.

For each of the architectures that you specify in your `webpack.config.js`, the plugin will produce a `snapshot.blob` file inside `assets/snapshots/${target_arch}/snapshot.blob`. Those files are **not** subject to Android App Bundle and you will find a corresponding `blob` for each architecture in the resulting `.apks`. This will increase the size of the resulting `.apks`.

If you want to take advantage of Android App Bundle you will need to instruct the `nativescript-dev-webpack` plugin to produce a `.so` snapshot. For this purpose, you will need to have the Android NDK installed on your system. It is strongly recommended that the same version of the NDK is used to produce the snapshot file as the one used to compile the {N} runtime itself. Currently we use NDK r17c.

And here are the necessary changes that you need to do in your `webpack.config.js` in order to enable `.so` snapshot file generation:

```
if (env.snapshot) {
    plugins.push(new nsWebpack.NativeScriptSnapshotPlugin({
        chunk: "vendor",
        projectRoot: __dirname,
        webpackConfig: config,
        targetArchs: ["arm", "arm64", "ia32"],
        useLibs: true,
        androidNdkPath: "/Library/android-sdk-macosx/ndk-bundle"
    }));
}
```

The two important switches to note here are `useLibs: true` (which instructs the plugin to produce a `.so` file) and `androidNdkPath` (make sure you point this to a folder containing Android NDK r17c).

One final thing before building the application is to instruct gradle to actually include the resulting snapshot into the final apk. This can be done in your `App_Resources/Android/app.gradle`:

```
sourceSets {
    main {
        jniLibs.srcDirs = ["$projectDir/libs/jni", "$projectDir/snapshot-build/build/ndk-build/libs"]
    }
}
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
```
java -jar <toolPath>/bundletool.jar install-apks --apks="somePath/my_app.apks" --device-id=<deviceId>
```

You can find more information about using Android `bundletool` [here](https://developer.android.com/studio/command-line/bundletool).
