---
title: iOS Properties
description: Sidekick allows mobile developers to personalize an app for iOS devices. Configure the iOS-specific options in the iOS tab in the App Settings panel.
position: 3
publish: true
slug: ios-properties
---

# iOS Properties

In the **iOS Settings** tab, you can set, enable and modify iOS specific properties.

* **Application Version**<br /> The current version of your app. This sets the CFBundleShortVersionString key in Info.plist. For more information about iOS versioning, see [Version Numbers and Build Numbers in the Apple documentation](https://developer.apple.com/library/content/technotes/tn2420/_index.html).
* **Application Build Version**<br /> The build number of your app. This sets the CFBundleVersion key in the Info.plist file. For more information about iOS versioning, see [Version Numbers and Build Numbers in the Apple documentation](https://developer.apple.com/library/content/technotes/tn2420/_index.html).
* **Deployment Target**<br /> The deployment target determines the minimum iOS version on which your app can run on device.
* **Device Families**<br /> The device family determines on which iOS devices users can run your app. For example: if only iPad is enabled, your app will not launch on iPhone.
* **Background Modes**<br /> The background mode determines whether your app needs to use an iOS service while in the background to work properly. Select only required services. For example: for a media player, enable Audio.
* **Supported Interface Orientations**<br /> The supported interface orientation toggles the availability of these modes on the devices running your app. For example: if only portrait is enabled, your app will never go into landscape view on the device.