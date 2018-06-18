---
title: Create a Certificate for Development
description: Learn how to create a development certificate in the iOS Dev Center. 
position: 3
publish: true
slug: create-development-certificate
---

# Create a Certificate for Development

To run an app on an iOS device, you need to create it with a development or an Ad Hoc distribution provisioning profile. To create a development provisioning profile, you need a development certificate signed by Apple. With this development certificate, you can code sign an app during development in order to deploy it on device.

You can create a development certificate in the [iOS Dev Center](https://developer.apple.com/membercenter).

> If you are using a Free Apple account, you can use the [code signing assistance]({% slug code-signing-assistance %}) feature of Sidekick to automatically generate temporary development certificate and provisioning profile.

## Prerequisites

* Verify that you have created a certificate signing request and stored the corresponding `CSR` file on your machine. For more information, see [Create a Certificate Signing Request]({% slug create-csr %}).

## Procedure

1. Open [iOS Dev Center](https://developer.apple.com/membercenter) in your favorite browser and log in.
1. Click **Certificates, Identifiers &amp; Profiles**.
1. In the drop-down menu in the top left corner, verify that **iOS, tvOS, watchOS** is selected.
1. In the left-hand sidebar, select **Certificates** &#8594; **Development**.
1. Click **+**.
1. Select **iOS App Development** and click **Continue**.
1. On the About Creating a Certificate Signing Request (CSR) page, click **Continue**.
1. On the Generate your certificate page, click **Choose File**.
1. Browse to the location where the `CSR` file for your code signing request is stored, select it and confirm the upload.
1. Click **Continue**.
1. (Optional) Click **Download** to download your certificate.
1. Click **Done**.

## Next Steps

Create a **[development provisioning profile]({% slug create-development-provisioning %})** in the [iOS Dev Center](https://developer.apple.com/membercenter).