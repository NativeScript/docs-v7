---
title: Configure Proxy
description: Learn how to modify the proxy settings from within NativeScript Sidekick
position: 0
publish: true
slug: proxy
previous_url: /user-guide/configure-proxy
---

# Configure Proxy

{{ site.ns-sk }} requires access to the internet to work correctly. If your Windows machine is behind a proxy server and you have not provided the correct settings to the {{ site.ns-cli }}, {{ site.sk }} will throw and error on start-up and become unresponsive. 

> When you are running behind a proxy, before you can launch and use {{ site.sk }}, you need to configure the proxy settings in the {{ site.ns-cli }}. For more information, see [Configure Proxy Settings](https://github.com/NativeScript/nativescript-cli#configure-proxy-settings). If you do not provide a username and password while setting the proxy, you will be prompted to enter them when you launch {{ site.sk }}.

## Procedure

1. Launch {{ site.ns-sk }}.
1. Click on the settings icon, which is located in the top right corner.
1. In the **Settings** view, select the **Proxy** section.
1. Select the **Manual Settings** radio button.
1. In the **Proxy** text box, provide the protocol, IP address and port of your proxy.
1. (Optional) Enable **Strict SSL**. 
1. Click **Save**.

## Next Steps

Continue configuring {{ site.ns-sk }} by [choosing a preferred code editor]({% slug code-editor %}) or explore the [Getting Started Guide]({% slug gs-overview %}) to familiarize yourself further with the client.
