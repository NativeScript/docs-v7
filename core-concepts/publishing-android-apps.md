---
title: Publishing for Android
description: Learn how to publish your app in the Play Store for Android users.
position: 14
slug: publishing-android-apps
---

# Publishing a NativeScript Android App in Google Play

0. [Overview](#overview)
1. [Creating Android NativeScript app](#creating-android-nativescript-app)
  1. [Application Id and Package Name](#application-id-and-package-name)
  2. [App name](#app-name)
  3. [App icons](#app-icons)
2. [Certificates](#certificates)
  1. [Debug certificate](#debug-certificate)
  2. [Release certificate](#release-certificate)
3. [Google Play Developer Console](#google-play-developer-console)
  1. [Creating an app](#creating-an-app)
  2. [Builds](#builds)
    1. [Build versioning](#build-versioning)
    2. [Build signed release APK](#build-signed-release-apk)
    3. [Submit with the Google Play Developer Console](#submit-with-the-google-play-developer-console)
    4. [Submit with Telerik AppManager](#submit-with-telerik-appmanager)
    5. [Submission automation](#submission-automation)
4. [Publish](#publish)

## Overview
You can publish a NativeScript app in *Google Play* the same way [you would release a purely native Android app](http://developer.android.com/tools/publishing/publishing_overview.html).

 1. Verify that the Android native project inside your app contains your latest changes and resources by running the following command.
 
     ```
     tns prepare android
     ```
 2. Make sure that you have a `.keystore` file to sign your app with. For more information, see [How to create  a .keystore file](http://developer.android.com/tools/publishing/app-signing.html#signing-manually)?
 3. Build your project in release mode by running the following command:
 
    ```
    tns build android --release --key-store-path <path-to-your-keystore> --key-store-password <your-key-store-password> --key-store-alias <your-alias-name> --key-store-alias-password <your-alias-password> 
    ```

>Note: At the end of `<path-to-your-keystore>` you should also add the exact name of your keystore. 

>Example(Windows): `tns build android --release --key-store-path C:\keystore\Telerik.keystore --key-store-password sample_password --key-store-alias Telerik --key-store-alias-password sample_password` .

>Example(Mac): `tns build android --release --key-store-path ~/Desktop/keystore/Telerik.keystore --key-store-password sample_password --key-store-alias Telerik --key-store-alias-password sample_password` .
 4. Obtain the release `.apk` located at `<app_name>/platforms/android/build/outputs/apk/<app_name>-release.apk`.
 5. Publish your Android app by uploading the `.apk` file to the Google Developer Console. For more information, see [How to publish an Android app?](http://developer.android.com/distribute/googleplay/start.html)

## Creating Android NativeScript app
### Application Id and Package Name
Both *Package Name*, and *Application Id*, are unique identifiers, provided by you for your app.
 - *Package Name* is used to identify resources such as the `R`.
 - *Application Id* is used to identify your app on devices and at the *Google Play*.
In the NativeScript framework, both are set to the `nativescript.id` in `package.json`.
The NativeScript CLI build system will set them as the `package` attribute in the generated project in `platforms/android/src/main/AndroidManifest.xml`.
In the `app/App_Resources/Android/AndroidManifest.xml` it will use a placeholder: `package="__PACKAGE__"`. Do **not** modify the `package` attribute there.

> **NOTE:** To edit the *Package Name* and the *Application Id*, modify the `package.json` of your app and set the `nativescript.id` key.
You may need to delete `platforms/android` and rebuild using the CLI command `tns prepare android`.

[Read more about "ApplicationId versus PackageName"](http://tools.android.com/tech-docs/new-build-system/applicationid-vs-packagename).

### App name
This is the display name for your app. It is purely cosmetic but highly important. For example, it appears under the app icon.
The value can be stored in the `app/App_Resources/Android/AndroidManifest.xml` file, as an `android:label="<App Name>"` attribute, on the `<application>` element.

You can check out more information about [the elements you can define in the `AndroidManifest.xml` here](http://developer.android.com/guide/topics/manifest/application-element.html).

### App icons
App icons are defined similar to the app name.
The icon name is defined in the `app/App_Resources/Android/AndroidManifest.xml` file, as an `android:icon="@drawable/icon"` attribute, on the `<application>` element.

The actual .PNG icons stay at the Android resources in `app/App_Resource/Android/<DPI>/icon.png`, DPIs:

| directory         | DPI | screen                                | size          |
|-------------------|-----|---------------------------------------|---------------|
| `drawable-ldpi`   | 120 | Low density screen                    | 36px  x 36px  |
| `drawable-mdpi`   | 160 | Medium density screen                 | 48px  x 48px  |
| `drawable-hdpi`   | 240 | High density screen                   | 72px  x 72px  |
| `drawable-xhdpi`  | 320 | Extra-high density screen             | 96px  x 96px  |
| `drawable-xxhdpi` | 480 | Extra-extra-high density screen       | 144px x 144px |
| `drawable-xxxhdpi`| 640 | Extra-extra-extra-high density screen | 192px x 192px |

### Splash screen
Android has no built-in mechanism to provide splash screen image.
[Here is a blog post that describes how to implement a splash screen in the NativeScript framework.](https://www.nativescript.org/blog/details/splash-screen-for-your-android-applications)

## Certificates
### Debug certificate
These are automatically generated by the Android SDK tools for you.

In debug mode, you sign your app with a debug certificate.
This certificate has a private key with a known password.
The process is handled by the Android tooling.

You can read more at ["Signing in Debug Mode"](http://developer.android.com/tools/publishing/app-signing.html).

### Release certificate
The release certificate for Android is created by you; it does not have to be signed by a certificate authority.
It is easier to create a release certificate for Android than it is for iOS. You should, however, be more careful with your certificate.

A few pitfalls are:
 - You create the certificate only once. If you lose it, you will not be able to publish any updates to your app, because you must always sign all versions of your app with the same key.
 - If your certificate expires, you will not be able to renew it. Ensure long validity when creating a new certificate (for 20+ years).
 - If a third party obtains your private key, that party could sign and distribute apps that maliciously replace your authentic apps or corrupt them.

You can generate a private key for a release certificate using the [keytool](http://docs.oracle.com/javase/6/docs/technotes/tools/solaris/keytool.html).
```
keytool -genkey -v -keystore <my-release-key>.keystore -alias <alias_name> -keyalg RSA -keysize 2048 -validity 10000
```

This will run an interactive session collecting information about your name, organization and most importantly &mdash; keystore and alias passwords.

## Google Play Developer Console
You will need a developer account and you will need to log into the [Google Play Developer Console](https://play.google.com/apps/publish/).

### Creating an app
Go to the **All applications** section and click the **+ Add new application** button.

1.You will get prompted to provide the app title

2.You can then proceed with the store listings.

3.You can fill in app description, screenshots and so on.

You can also submit an APK. Read about how to obtain an APK from a NativeScript app.

### Builds

<h4 id="build-versioning">Build versioning</h4>
We have already explained how the *Application Id* is set in your project, how icons are added to your app and how you can set the display name.

Before the build, you need to set two important things: the *versionCode* and the *android:versionName*.

When a build is uploaded, its *versionCode* should be larger than previous builds.
A new build with a higher *versionCode* is considered an upgrade to builds that have a lower *versionCode*.
The *versionCode* is an integer so you should carefully consider a strategy for versioning.

Both values are stored in `app/App_Resources/Android/AndroidManifest.xml`.
> **NOTE:** `android:versionName` is a string value, which is used to represent the application version to the user whereas `android:versionCode`, which is integer value showing version of the application code relative to the other versions.
You can read more about ["Versioning Your Applications"](http://developer.android.com/tools/publishing/versioning.html).

In the `app/App_Resources/Android/AndroidManifest.xml`, the *versionCode* and *versionName* appear as:
```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
      package="org.nativescript.name"
      android:versionCode="2"
      android:versionName="1.1">
      ...
```

<h4 id="build-signed-release-apk">Build signed release APK</h4>

You can perform a full build and produce a signed APK using the NativeScript CLI:
```
tns build android --release --key-store-path <path-to-your-keystore> --key-store-password <your-key-store-password> --key-store-alias <your-alias-name> --key-store-alias-password <your-alias-password> --copy-to <apk-location>.apk
```
You can then use the produced `<apk-location>.apk` for upload to *Google Play*.

<h4 id="submit-with-the-google-play-developer-console">Submit with the Google Play Developer Console</h4>

To submit your app to the *Google Play Developer Console*:

1. Log into the [Google Play Developer Console](https://play.google.com/apps/publish).
2. Select your application and go to the **APK** section.
3. Choose *Production*, *Beta* or *Alpha* stage and click the **Upload new APK**.
4. Select the APK produced by the CLI.

You can read more about these stages at ["Set up alpha/beta tests"](https://support.google.com/googleplay/android-developer/answer/3131213?hl=en).

Once you upload your APK, it will go through a review. When approved, you can move it to production to make it available on *Google Play*.

<h4 id="submit-with-telerik-appmanager">Submit with Telerik AppManager</h4>

It is worth mentioning that the NativeScript platform is integrated in the *Telerik Platform*. And the *Telerik Platform* has everything you need in the cloud, easing the submission process. This includes managing your distribution certificates and provisioning profiles, as well as support for cloud builds and *App Store* submission.

Read more about the app submission process in the *Telerik Platform* in ['Introduction to Telerik AppManager'](http://docs.telerik.com/platform/appmanager/getting-started/introduction).

<h4 id="submission-automation">Submission automation</h4>

Some tools allow the submission process to be automated - [MIT Licensed one: fastlane](https://github.com/fastlane/fastlane).
You can also hack your own scripts around the [Google Play Developer API](https://developers.google.com/android-publisher/api-ref/edits/apks/upload).

## Publish
Once you successfully upload your APK, and it passes Google review, you will be able to move your APK to production, and it will go live on *Google Play*.
