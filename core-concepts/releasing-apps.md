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
 5. [Submit it to App Store](https://developer.apple.com/library/ios/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/SubmittingTheApp.html).

# Publishing in Google Play

