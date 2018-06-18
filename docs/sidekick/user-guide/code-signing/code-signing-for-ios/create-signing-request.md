---
title: Create a Certificate Signing Request
description: This document explains how you can create a certificate signing request by using NativeScript Sidekick.
position: 2
publish: true
slug: create-csr
---

# Create a Certificate Signing Request

Creating a certificate signing request (CSR) is a prerequisite for creating a certificate in the [iOS Dev Center](https://developer.apple.com/membercenter). If you do not have a tool to create a certificate signing request, you can still create it by using {{ site.sk }}.

## Prerequisites

* Verify that you have installed {{ site.ns-sk }}. For more information, see [Set Up Your System and Install Sidekick]({% slug installation %}).

## Procedure

1. Start {{ site.ns-sk }}.
1. In the main menu bar, click **Tools** &#8594; **Certificate Signing Request**. 
1. Specify name, email and country.
1. Click **Create CSR**.
1. Specify name and download location for the `CSR` file and confirm the download by clicking **Save**.
1. Use the `CSR` file to create a [Certificate for Development]({% slug create-development-certificate %}) or a [Certificate for Distribution]({% slug create-distribution-certificate %}).
1. In {{ site.sk }}, open the **Create Signing Request** dialog again.
1. Click **Import CER**, select the `CER` file created in step 6 and click **Open**.
1. When prompted, provide a password for the newly created `P12` file and then choose a location in which to store it.

## Next Steps

Create a **[development provisioning profile]({% slug create-development-provisioning %})** or a **[distribution provisioning profile]({% slug create-distribution-provisioning %})** in the [iOS Dev Center](https://developer.apple.com/membercenter).
