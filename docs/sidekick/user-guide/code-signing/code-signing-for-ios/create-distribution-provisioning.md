---
title: Create a Distribution Provisioning Profile
description: To publish apps in the App Store, you need to create an App Store distribution provisioning profile.
position: 8
publish: true
slug: create-distribution-provisioning
---

# Create a Distribution Provisioning Profile

In the App Store you can publish only apps created with an App Store distribution provisioning profile. App Store distribution provisioning profiles do not contain provisioned devices. You cannot debug on device apps that are created with this type of provisioning profile.

You can create a distribution provisioning profile in the [iOS Dev Center](https://developer.apple.com/membercenter).

## Prerequisites

* Verify that you have a valid certificate for production created for your Apple developer account. For more information, see [Create a Certificate for Distribution]({% slug create-distribution-certificate %}).
* Verify that you have registered an App ID for your app. For more information, see [Register an App ID]({% slug create-app-id %}).

## Procedure

1. Open [iOS Dev Center](https://developer.apple.com/membercenter) in your favorite browser and log in.
1. Click **Certificates, Identifiers &amp; Profiles**.
1. In the drop-down menu in the top left corner, verify that **iOS, tvOS, watchOS** is selected.
1. In the left-hand sidebar, select **Provisioning&nbsp;Profiles** &#8594; **App Store**.
1. Click **+**.
1. Select **App&nbsp;Store** and click **Continue**.
1. Select an **App ID** to associate with the provisioning profile and click **Continue**.
1. Select one or more certificates for distribution to include in the provisioning profile and click **Continue**.<br/>Only certificates for distribution are listed.
1. Enter a name for the profile and click **Continue**.
1. (Optional) Click **Download** to download the provisioning profile.

## Next Steps

Now that you have created a distribution certificate and provisioning profile, you can build your app in Release configuration and publish the produced app package to the App Store. For more information, see [Cloud Builds]({% slug cloud-build %}) and [Local Builds]({% slug local-build %}).