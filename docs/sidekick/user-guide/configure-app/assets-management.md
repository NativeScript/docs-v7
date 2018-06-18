---
title: Assets Management
description: 
position: 5
publish: true
slug: assets-management
---

# Assets Management

You can quickly configure the icons and splash screens of your app by providing a single `PNG` source file. {{ site.sk }} uses this image to generate the image resources for all mobile platforms.

> **TIP**: You must provide separate image sources for the icons and splash screens.

## Prerequisites

* The source image must be in `PNG` format.
* The source image must be at least `1024x1024` pixels.

> **TIP**: If the splash screen source image contains a logo-like image, the logo must be centered. Otherwise, it might not be resized properly.

## Procedure

> **IMPORTANT**: The application assets that {{ site.sk }} creates from your source image will overwrite any existing icons or splash screens.

1. Launch {{ site.ns-sk }} and open your app.
1. From the left toolbar, select **Assets** to open the Assets view.
1. To generate the icons of your app, complete the following steps.
	1. In the icon placeholder in the generator, click **Browse**.
	1. Browse and locate the image source that you want to use, select it and click **Open**.
	1. When prompted, choose for which platforms you want to generate icons.
	1. Click **Generate** and wait for the operation to complete.
1. To generate the splash screens of your app, complete the following steps.
	1. In the splash screen placeholder in the generator, click **Browse**.
	1. Browse and locate the image source that you want to use, select it and click **Open**.
	1. When prompted, choose for which platforms you want to generate splash screens.
	1. (Optional) Provide a custom background color in a hexadecimal format.
	1. Click **Generate** and wait for the operation to complete.
1. (Optional) Select the **Android** and **iOS** tabs to inspect the newly added app assets.

## Next Steps

[Deploy your app on a connected device]({% slug deploy-on-device %}) to check the newly added icons and splash screens.

## See Also

* [Creating App Icons and Launch Screens for iOS](https://docs.nativescript.org/publishing/creating-launch-screens-ios)
* [Creating Launch Screens for Android](https://docs.nativescript.org/publishing/creating-launch-screens-android)
* [Material Design Icons Styling](https://material.io/guidelines/style/icons.html#)