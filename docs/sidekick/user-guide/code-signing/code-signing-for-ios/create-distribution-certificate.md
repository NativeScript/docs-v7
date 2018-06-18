---
title: Create a Certificate for Distribution
description: Follow the procedure to create a distribution certificate in the iOS Dev Center and then use it to code sign your app. 
position: 4
publish: true
slug: create-distribution-certificate
---

# Create a Certificate for Distribution

To publish an app in the App Store or to distribute it to a limited number of devices, you need to code sign it with a distribution provisioning profile. To create a distribution provisioning profile, you need a distribution certificate signed by Apple.

You can create a distribution certificate in the [iOS Dev Center](https://developer.apple.com/membercenter).

## Prerequisites

* Verify that you have created a certificate signing request and stored the corresponding `CSR` file on your machine. For more information, see [Create a Certificate Signing Request]({% slug create-csr %}).

## Procedure

1. Open [iOS Dev Center](https://developer.apple.com/membercenter) in your favorite browser and log in.
1. Click **Certificates, Identifiers &amp; Profiles**.
1. In the drop-down menu in the top left corner, verify that **iOS, tvOS, watchOS** is selected.
1. In the left-hand sidebar, select **Certificates** &#8594; **Production**.
1. Click **+**.
1. Select the type of distribution certificate that you want to create and click **Continue**.
	* If you are enrolled in the iOS Developer Program, select **App Store and Ad Hoc** and click **Continue**.
	* If you are enrolled in the iOS Developer Enterprise Program, select **In-House and Ad Hoc** and click **Continue**.
1. On the About Creating a Certificate Signing Request (CSR) page, click **Continue**.
1. On the Generate your certificate page, click **Choose File**.
1. Browse to the location where the `CSR` file for your certificate signing request is stored, select it and confirm the upload.
1. Click **Continue**.
1. (Optional) Click **Download** to download your certificate.

## Next Steps

Create a **[distribution provisioning profile]({% slug create-distribution-provisioning %})** in the [iOS Dev Center](https://developer.apple.com/membercenter).