---
title: Publish to Google Play
description: Use NativeScript Sidekick to publish your application to Google Play.
position: 1
publish: true
slug: android-publish
---

# Publish to Google Play

When your app is production-ready, you can build and publish it to Google Play.

> The initial publish to Google Play needs to be done manually. After you build your app in {{ site.sk }}, you need to upload the application package to the [Google Play Console](https://play.google.com/apps/publish/) on your own.

## Prerequisites

* Verify that you are a registered Google Play Developer.
* Verify that you have a valid Google Play self-signed code signing identity. For more information on how to generate a release certificate for Android, see the following [article](https://docs.nativescript.org/publishing/publishing-android-apps#certificates).

## Procedure for Initial Publish

#### Step 1: Build an application package in {{ site.ns-sk }}

1. Launch {{ site.ns-sk }} and open your app.
1. From the top toolbar, select **Build**.
1. Select **Android**.
1. Hover on the **Android** box and click on the cogwheel icon to open the **Manage Android Certificates** dialog. 
1. Next to **Certificate**, click **Browse** to choose a certificate stored on the file system or expand the **drop-down** to select a certificate stored in the Certificate Manager (Windows) or the Keychain (macOS).
1. Close the **Manage Android Certificates** dialog.
1. Under **Build Type**, select **Cloud** or **Local** build.
1. Under **Configuration**, select **Release**.
1. (Optional) If any issues are present, resolve them before you continue.
1. Click on **Build**.
1. If you have provided a certificate stored on the file system (step 5), you will be prompted to enter its password on every build. Certificates stored in the Certificate Manager or Keychain do not require password validation. 
1. When the build process is complete, you will be presented with a path to the produced `APK`. Remember the location of the application package so you can upload it to the Google Play Console in the next step.

<br/>

#### Step 2: Upload your app to the Google Play Console and publish your release

1. Open and log in the [Google Play Console](https://play.google.com/apps/publish/).
1. In the **All applications** tab, click on the **Create Application** button to create a new app.
1. In the **Create application** dialog, select a default language, provide an application title and click **Create** to proceed.
1. In the **Store listing** tab, complete the required fields and provide the needed assets, and then click **Save Draft**.
1. In the **Pricing & distribution** tab, complete the pricing and distribution settings for your app and click **Save Draft**.
1. In the **App releases** tab, select between the **Alpha**, **Beta** and **Production** tracks and click on the respective **Manage** button. The **Alpha** and **Beta** tracks are used for initial testing of your application. Only the **Production** track can be used to publish your app to Google Play.
1. In the screen of the selected track, click **Create Release**.
1. Under **APKs to add** provide the application package (`APK`) created in Step 1. Review your draft release and make any additional changes if needed.
1. Select **Review**. In the **Review and rollout release** screen, verify there are no issues with the release before rolling it out to users. Address any warnings or errors.
1. Click **Confirm rollout** to publish your app.
	
## Procedure for Publishing Updates to Existing Apps

#### Step 1: Configure a Service Account and obtain a JSON key

1. Open and log in the [Google Play Console](https://play.google.com/apps/publish/).
1. Select **Settings** tab, followed by the **API access** tab.
1. (Optional) Click **Create New Project**.
1. Click the **Create Service Account** button and follow the **Google API Console** link in the dialog.
1. Click the **Create Service account** button at the top of the developers console screen.
1. Provide a name for the service account.
1. Click **Select a role** and choose **Project** &#8594; **Service Account Actor**.
1. Check the **Furnish a new private key** checkbox.
1. Select **JSON** as the Key type.
1. Click **Create** to close the dialog. This should automatically download the required `JSON` file to your computer. 
1. Back on the Google Play developer console, click **Done** to close the dialog.
1. Click on **Grant Access** for the newly added service account.
1. Choose **Release Manager** from the **Role** drop-down.
1. Click **Add user** to close the dialog.

<br/>

#### Step 2: Upload your app from {{ site.sk }} to the Google Play Console

1. Launch {{ site.ns-sk }} and open your app.
1. From the top toolbar, select **Publish**.
1. Select **Google Play**.
1. Hover on the **Google Play** box and click on the cogwheel icon to open the **Manage Android Certificates for Google Play Store** dialog. 
1. Next to **Certificate**, click **Browse** to choose a certificate stored on the file system or expand the **drop-down** to select a certificate stored in the Certificate Manager (Windows) or the Keychain (macOS).
1. Close the **Manage Android Certificates for Google Play Store** dialog. 
1. Select a **Build Type**.
1. Click **Next** and wait for the build process to complete.
1. Provide the **Service Account JSON key** generated in Step 1.
1. Select between the Alpha, Beta or Production tracks.
1. Click **Upload**.

<br/>

#### Step 3: Review and publish your release

1. Open and log in the [Google Play Console](https://play.google.com/apps/publish/). 
1. Select your app.
1. On the left menu, select **Release management** &#8594; **App releases**.
1. Next to the release you want to rollout, select **Edit release**.
1. Review your draft release and make any additional changes if needed.
1. Click **Review**. In the **Review and rollout release** screen, verify there are no issues with the release before rolling it out to users. Address any warnings or errors.
1. For production releases, select your rollout percentage.
1. Click **Confirm rollout**.

