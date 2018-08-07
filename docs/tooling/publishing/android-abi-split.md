---
title: Android ABI split
description: How to reduce android apk sizes providing different apk for different architectures.
position: 50
slug: android-abi-split
---

# Android ABI split

To reduce the size of the android application downloaded from Google Play we can produce different apk files for different architectures.
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

## ABI split with snapshots
However if you want to improve the performance of your application with the `nativescript-dev-webpack` plugin you will need to make some additional changes.

The default file format that the `nativescript-dev-webpack` plugin produce when you execute `tns build  android --bundle --env.uglify --env.snapshot` is a `.blob` file.

For each of the architectures that you specify in your `webpack.config.js`, the plugin will produce a `snapshot.blob` file inside `assets/snapshots/${target_arch}/snapshot.blob`. Those files are **not** subject to ABI splits and you will find a corresponding `blob` for each architecture in the resulting .apk split file. I suppose this is the behavior you are currently experiencing.

If you want to take advantage of ABI splits you will need to instruct the `nativescript-dev-webpack` plugin to produce a `.so` snapshot. For this purpose you will need to have the Android NDK installed on your system. It is strongly recommended that the same version of the NDK is used to produce the snapshot file as the one used to compile the {N} runtime itself. Currently we use NDK r16b.

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

The 2 important switches to note here are `useLibs: true` (which instructs the plugin to produce a `.so` file) and `androidNdkPath` (make sure you point this to a folder containing Android NDK r12b).

One final thing before building the application is to instruct gradle to actually include the resulting snapshot into the final apk. This can be done in your `App_Resources/Android/app.gradle`:

```
splits {
    abi {
        enable true
        reset()
        include 'arm64-v8a', 'armeabi-v7a', 'x86'
        universalApk true
    }
}

sourceSets {
    main {
        jniLibs.srcDirs = ["$projectDir/libs/jni", "$projectDir/snapshot-build/build/ndk-build/libs"]
    }
}
```

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
