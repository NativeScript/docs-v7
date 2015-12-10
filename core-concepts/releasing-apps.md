---
title: Releasing NativeScript Applications to the App Store and Google Play Store
description: Learn how to release NativeScript applications to the App Store and Google Play Store
position: 10
slug: releasing-apps
---

# Releasing to App Store

The process of releasing NativeScript app to App Store is not much different than [releasing pure native iOS application](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/Introduction/Introduction.html). After making sure the NativeScript app is prepared by running

```
tns prepare ios
```

open the underlying project at `{app-name}/platforms/ios/{app-name}.xcodeproj` in Xcode.

> The underlying Xcode project is created and maintained by the NativeScript CLI. Under the hood, many CLI commands apply modifications to the project making them transparent to the NativeScript developer.

From here, you have to [configure your Xcode project for distribution](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html), [upload it to iTunes Connect](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/UploadingYourApptoiTunesConnect/UploadingYourApptoiTunesConnect.html) and [submit it to App Store](https://developer.apple.com/library/ios/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/SubmittingTheApp.html). The whole process is explained in details in Apple's [App Distribution Guide](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/Introduction/Introduction.html).

# Releasing to Google Play Store

