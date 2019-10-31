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

In order to support Dark theme for Android, the application's theme must inherit from a `DayNight` theme as explained [here](https://developer.android.com/guide/topics/ui/look-and-feel/darktheme#supporting_dark_theme_in_your_app).

However, Android 10 (API level 29) provides a feature for developers to quickly implement a Dark theme without explicitly setting a `DayNight` theme as mentioned. This features is called [Force Dark](https://developer.android.com/guide/topics/ui/look-and-feel/darktheme#force_dark).

Since release 6.2, NativeScript creates new applications with opt-in Force Dark functionality by default to provide support for Dark theme out of the box.

The opt-in to Force Dark happens by setting `android:forceDarkAllowed` to `true` in the activity's theme. In particular, every project created by the NativeScript CLI 6.2 or later, contains the snippet below in the `<project>/app/App_Recoures/Android/src/main/res/values/styles.xml` file:

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

> Note: If you want to update your project to opt-in to Force Dark, it is needed to put the following line in the `<project>/app/App_Recoures/Android/src/main/res/values/styles.xml` file as shown above: `<item name="android:forceDarkAllowed">true</item>`.

## Dark Mode for iOS

For iOS, the Dark mode is opt-in by default and every application built with Xcode 11 or above tooling, automatically support both Light and Dark system appearances.

The support in NativeScript framework has come since version 6.2 where the complete set of native widgets has been adapted to work out of the box for both modes.

However, if you need extra time to work on your application's dark Mode support, you can opt out by including the `UIUserInterfaceStyle` key in the application's the `<project>/app/App_Recoures/iOS/Info.plist` file:

```xml
    ...

    <key>UIUserInterfaceStyle</key>
	<string>Light</string>

    ...
```

> Important: Make sure to test your application carefully and thoroughly on both Light and Dark system appearance.

## How Does It Work

Since version 6.2, NativeScript detects the system appearance of the running mobile operating system and applies a respective CSS class to the application's [root view](https://docs.nativescript.org/ui/styling#root-views-css-classes). In particular, if you run the application on iOS 13.0 in Light mode, a `.ns-light` CSS class will be assign to the root view of your application. In analogy, if you change the system appearance from Light to Dark, the `.ns-light` class will be replaced with `.ns-dark` and vice verse.

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

The NativeScript Theme provides beautiful look and feel of your application for both Light and Dark system appearances. Please, refer to the Theme article for more information.

<!-- TODO: add a link to the theme article -->

> Note: make sure to use `@nativescript/theme` package version 2.2.0 or above.
