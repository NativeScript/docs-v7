---
title: Publish to the App Store
description: Use NativeScript Sidekick to publish your application to the App Store.
position: 2
publish: true
slug: ios-publish
---

# Publish to the App Store

When your app is production-ready, you can build and publish it to the App Store. From {{ site.sk }}, you can build your app and upload it directly to iTunes Connect.

## Prerequisites

* Verify that you have matching certificate and provisioning profile for App Store distribution. For more information, see [Create a Certificate for Distribution]({% slug create-distribution-certificate %}) and [Create a Distribution Provisioning Profile]({% slug create-distribution-provisioning %}).
* Verify that you have registered a bundle ID in the iOS Dev Center. For more information, see [Register an App ID]({% slug create-app-id %}).
* Verify that you have created an App Record in iTunes Connect. For more information, see the [Creating an iTunes Connect Record for an App](https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/CreatingiTunesConnectRecord.html#//apple_ref/doc/uid/TP40011225-CH13-SW1) article from the official Apple documentation.

## Procedure

1. Launch {{ site.ns-sk }} and open your app.
1. From the top toolbar, select **Publish**.
1. Select **Apple App Store**.
1. Hover on the **Apple App Store** box and click on the cogwheel icon to open the **Manage iOS Provisioning and Certificates for Apple App Store** dialog. 
1. Next to **Certificate**, click **Browse** to choose a certificate stored on the file system or expand the **drop-down** to select a certificate stored in the Certificate Manager (Windows) or the Keychain (macOS).
1. Next to **Provision**, click **Browse** to choose a mobile provision stored on the file system.
1. Close the **Manage iOS Provisioning and Certificates for Apple App Store** dialog.
1. Select a **Build Type**.
1. Click **Next** and wait for the build process to complete.
1. Provide your Apple Username and Password.
1. Click **Upload** and wait for confirmation that the upload is completed successfully.
1. (Optional) In iTunes Connect, submit your app for review. For more information, see the [Submitting the App to App Review](https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/SubmittingTheApp.html) article from  the official Apple documentation.