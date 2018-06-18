---
title: Android Properties
description: Personalize your mobile app for Android devices by configuring Android-specific options in the Android tab in the App Settings panel.
position: 4
publish: true
slug: android-properties
---

# Android Properties

In the **Android Settings** tab, you can set, enable and modify Android specific properties.

* **Application Version**<br /> Sets the version number shown to the users. For more information about version code, see [versionCode in the Android Manifest API Guide](https://developer.android.com/guide/topics/manifest/manifest-element.html#vname).
* **Application Version Code**<br /> Sets the internal version of the application that is not visible to the user. The version code should be an integer. For every new version of your app, you need to increase the version code by one. For more information about version code, see [versionCode in the Android Manifest API Guide](https://developer.android.com/guide/topics/manifest/manifest-element.html#vcode).
* **Minimum SDK Version**<br /> Specifies the minimum API Level on which the application is able to run. The Android system will prevent the user from installing the application if the system's API Level is lower than the value specified in this attribute. For more information about minimum SDK version, see [minSdkVersion in the Android Manifest API Guide](https://developer.android.com/guide/topics/manifest/uses-sdk-element.html#min).
* **Target SDK Version**<br /> Specifies the API Level on which the application is designed to run. If not set, the default value equals that given to minSdkVersion. For more information about target SDK version, see [targetSdkVersion in the Android Manifest API Guide](https://developer.android.com/guide/topics/manifest/uses-sdk-element.html#target).
* **Select Orientation**<br /> Select the orientation in which your app will be displayed on the device. For more information about screen orientations, see [screenOrientation in the Android Manifest API Guide](https://developer.android.com/guide/topics/manifest/activity-element.html#screen).
* **Hardware Acceleration**<br /> You can enable hardware acceleration to increase the performance of the user interface of your app.
* **Permissions**<br /> The permissions determine which Android services your app needs to work properly. When installing your app on an Android device, users will be notified what permissions the application requires.