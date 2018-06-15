---
title: Frequently Asked Questions
description: Frequently asked questions about some of the issues and features in NativeScript Sidekick.
position: 1
publish: true
slug: frequently-asked-questions
---

# Frequently Asked Questions

### Additional components are required to run {{ site.ns-sk }}

After updating the {{ site.ns-sk }} client, you might see the following error message on launch:

![](/images/troubleshooting/additional-components-required.png)

To resolve this issue, you need to update the {{ site.ns-cli }} to the required (in most cases, the latest available) version. To do this, you should open a command prompt (on Windows) or a terminal (on macOS and Linux) and run the following command:

<pre class="add-copy-button"><code class="language-terminal">npm install -g nativescript</code></pre>

After the installation process is complete, you will no longer see the error mentioned above when launching {{ site.sk }}.

### CertificateStoreUtilities has stopped working

On a Windows machine, when you build in the cloud for iOS or Android with a certificate stored in the Windows Certificate Manager, you might encounter the following error:

![](/images/troubleshooting/certificatestoreutilities-stopped-working.png)

This issue will occur when the selected certificate is not a valid iOS or Android certificate or when you have not enabled the "Mark this key as exportable..." option when importing the certificate to the Windows Certificate Manager. To resolve the latter, you need to enable the option when importing the certificate as shown in the image below:

![](/images/troubleshooting/mark-key-as-exportable.png)

Marking the key as exportable will resolve the error, as long as the provided certificate is a valid iOS or Android one.