---
title: Publishing NativeScript Apps in the App Store and Google Play
description: Learn how to make your NativeScript apps available to end users by publishing them in the App Store and Google Play.
position: 10
slug: releasing-apps
---

# Publishing in the App Store

Publishing NativeScript apps in the App Store is similar to [releasing pure native iOS apps](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/Introduction/Introduction.html).

 1. Verify that the iOS native project inside your app contains your latest changes and resources by running the following command.
 
     ```
     tns prepare ios
     ```
 2. Open the iOS native project in Xcode. Your native project is located at: `{app-name}/platforms/ios/{app-name}.xcodeproj`.
 3. [Configure the project for distribution](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html).
 4. [Upload the app to iTunes Connect](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/UploadingYourApptoiTunesConnect/UploadingYourApptoiTunesConnect.html).
 5. [Submit it to the App Store](https://developer.apple.com/library/ios/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/SubmittingTheApp.html).

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
 