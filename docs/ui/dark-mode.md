---
title: Dark Mode
description: The article describes the Dark Mode support in NativeScript.
position: 51
tags: nativescript dark mode, nativescript styling, nativescript css
slug: dark-mode
---

# Overview

Android 10 (API level 29) and iOS 13 introduce system-wide dark appearance for all user interface elements, known as [Dark theme](https://developer.android.com/guide/topics/ui/look-and-feel/darktheme) for Android and [Dark Mode](https://developer.apple.com/documentation/appkit/supporting_dark_mode_in_your_interface) for iOS. They have many benefits as to allow users to toggle their interface and focus on the application’s content based on ambient lighting conditions as well as to reduce power usage amount depending on the device's screen technology.

## Dark Theme for Android

By default, existing NativeScript applications won't be affected by the Dark theme for Android. With no changes, they will look the same way as on Light theme.

In order to support Dark theme for Android, the application's theme must inherit from a `DayNight` theme as explained [here](https://developer.android.com/guide/topics/ui/look-and-feel/darktheme#supporting_dark_theme_in_your_app).

However, Android 10 (API level 29) provides a feature for developers to quickly implement a Dark theme without explicitly setting a `DayNight` theme as mentioned. This features is called [Force Dark](https://developer.android.com/guide/topics/ui/look-and-feel/darktheme#force_dark).

Since release 6.2, NativeScript creates new applications with Force Dark functionality enabled by default to provide support for Dark theme out of the box.

Force Dark is enabled by setting `android:forceDarkAllowed` to `true` in the activity's theme. In particular, every project created by the NativeScript CLI 6.2 or later, contains the snippet below in the `<project>/app/App_Recoures/Android/src/main/res/values/styles.xml` file:

```xml
    ...

    <!-- theme to use AFTER launch screen is loaded-->
    <style name="AppThemeBase" parent="Theme.AppCompat.Light.NoActionBar">
        <item name="android:forceDarkAllowed">true</item>
        <item name="toolbarStyle">@style/NativeScriptToolbarStyle</item>

        <item name="colorPrimary">@color/ns_primary</item>
        <item name="colorPrimaryDark">@color/ns_primaryDark</item>
        <item name="colorAccent">@color/ns_accent</item>
    </style>

    <style name="AppTheme" parent="AppThemeBase">
    </style>

    ...
```

> Important: Make sure to test your application carefully and thoroughly on both Light and Dark system appearance.

If you want to update your project to opt in to Force Dark, it is needed to put the following line `<item name="android:forceDarkAllowed">true</item>` in the `<project>/app/App_Recoures/Android/src/main/res/values/styles.xml` file as shown above.

> Note: Make sure that `uiMode` value is included in the `android:configChanges` attribute of the main application activity in the `<project>/app/App_Recoures/Android/src/main/AndroidManifest.xml` file. Ohterwise, application will crash on interacting after changing the system appearance. A complete values string would look like: `android:configChanges="keyboard|keyboardHidden|orientation|screenSize|smallestScreenSize|screenLayout|locale|uiMode"`.

## Dark Mode for iOS

Existing NativeScript applications built with version pre-6.2 won't be affected by the Dark mode for iOS - they will continue to look the same way in both modes.

Since iOS 13, the Dark mode is enabled by default and every application built with Xcode 11 or above tooling, automatically reacts to system appearance changes.

The support in NativeScript framework has come since version 6.2 where the complete set of native widgets has been adapted to work out of the box for both Light and Dark system appearance. Accordingly, if so far your application looked the same way in both modes, with an update to 6.2 its look might change in Dark mode and could appear to be broken.

However, if you need extra time to work on your application's Dark mode support, you can opt out by including the `UIUserInterfaceStyle` key in the application's the `<project>/app/App_Recoures/iOS/Info.plist` file:

```xml
    ...

    <key>UIUserInterfaceStyle</key>
	<string>Light</string>

    ...
```

> Important: Make sure to test your application carefully and thoroughly on both Light and Dark system appearance.

## How Does It Work

Since version 6.2, NativeScript detects the system appearance of the running mobile operating system and applies a respective CSS class to the application's [root view](https://docs.nativescript.org/ui/styling#root-views-css-classes). In particular, if you run the application on iOS 13.0 in Light mode, a `.ns-light` CSS class will be assign to the root view of your application. In analogy, if you change the system appearance from Light to Dark, the `.ns-light` class will be replaced with `.ns-dark` and vice versa.

To illustrate this behavior, the sample CSS styles below will paint the Pages of your application in *light blue* color on Light system appearance and in *dark blue* on dark system appearance:

```css
.ns-light Page {
    background-color: lightblue;
}

.ns-dark Page {
    background-color: darkblue;
}
```

In addition, the application module provides `systemAppearance` property and `systemAppearanceChanged` event. Through, them you could easily detect the current system appearance mode and update application behavior or style on a change.

## NativeScript Theme Integration

The NativeScript Theme provides beautiful look and feel of your application for both Light and Dark system appearances. Please, refer to the Theme [repository](https://github.com/NativeScript/theme) for more information.

> Note: make sure to use `@nativescript/theme` package version 2.2.0 or above.
