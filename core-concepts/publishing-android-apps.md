---
title: Publishing for Android
description: Learn how to publish your app at the Play Store for Android users.
position: 11
slug: publishing-android-apps
---

# Publishing in Google Play

 1. Verify that the Android native project inside your app contains your latest changes and resources by running the following command.
 
     ```
     tns prepare android
     ```
 2. Make sure that you have a `.keystore` file to sign your app with. For more information, see [How to create  a .keystore file?](http://developer.android.com/tools/publishing/app-signing.html#signing-manually)
 3. Build your project in release mode by running the following command:
 
    ```
    tns build android --release --key-store-path [path_to_your_keystore] --key-store-password [your_key_store_password] --key-store-alias [your_alias_name] --key-store-alias-password [your_alias_password] 
    ```
 4. Obtain the release `.apk` located at `<app_name>/platforms/android/build/outputs/apk/<app_name>-release.apk`.
 5. Publish your Android app by uploading the `.apk` file to the Google Developer Console. For more information, see [How to publish an Android app?](http://developer.android.com/distribute/googleplay/start.html)
 