---
title: Release Notes
description: This article contains a list of all minor Sidekick releases for a specific major version.
position: 4
publish: true
slug: whats-new
---

# Release Notes

## v1.10.0 - 23 May 2018

> To run {{ site.ns-sk }}, you need to have {{ site.ns-cli }} version **4.0.2** or later installed on your machine.

* **New user interface for the main {{ site.sk }} view**<br/>
We have updated the user interface of the main {{ site.sk }} view to be more intuitive and easy to use. The most notable change is related to the run on device feature - to access the `Run on Device` view, you need to open the `Devices` tab from the left side toolbar.  

## v1.9.0 - 13 April 2018

* **Generate application assets for all mobile platform from a single image**<br/>
Provide a single icon or splash screen source image and {{ site.sk }} will use it to generate app assets (icons and splash screens) for all mobile platforms. For more information about the app assets generation, see [Assets Management]({% slug assets-management %}).

* **Enable webpack for cloud and local builds in debug configuration**<br/>
Enable the webpack option in `debug` builds to bundle your code and improve the performance of your application during the development process. For more information about webpack and how to use it in {{ site.sk }}, see [Bundle Your Code with Webpack]({% slug webpack %}).

## v1.8.0 - 27 March 2018

* **Manage the dev dependencies of your app directly from {{ site.sk }}**<br/>
The `Plugins` tab of `App Settings` now lists the `devDependencies` of your app. They are marked by the `dev` tag and you can add new or remove existing ones from your project the same way you do with the ordinary dependencies. For more information about plugins management in {{ site.sk }}, see [Plugins Management]({% slug plugins-management %}).  

* **Quickly access the folder that stores the {{ site.sk }} logs**<br/>
To access the folder containing the logs, you should open {{ site.sk }} and select `Help` &#8594; `Show Logs` from the top menu. You can inspect the logs to identify build errors or share them in GitHub issues or support tickets.

## v1.7.0 - 09 March 2018

* **Enterprise authentication for your mobile app**<br/>
You can connect your app to an enterprise authentication provider via OAuth 2, OpenID Connect or SAML-Redirect. For more information about the enterprise authentication and how to configure it, see [Using Enterprise Authentication]({% slug enterprise-auth %}). 

## v1.6.0 - 09 March 2018

* **The {{ site.ns-cli }} logs are now visible in {{ site.sk }}**<br/>
You can find the logs inside the `All` tab of the `Output` pane. The {{ site.ns-cli }} logs contain the `(CLI)` prefix to make them distinguishable from the {{ site.sk }} logs.

## v1.5.0 - 16 February 2018

* **Introducing industry specific app templates**<br/>
The `Patient Care` and `Health Survey` templates can be accessed from the `Industry` tab in the `Create App` view. Both templates leverage the Progress Health Cloud and use Kinvey for back-end.

* **New user interface for the app creation view**<br/>
The `Create App` dialog is no longer a separate window and the user interface is updated to reflect the addition of the industry specific templates. For more information about creating apps, see [Create App From Template]({% slug create-app-from-template %}).

## v1.4.0 - 12 February 2018

* **Switch between available accounts**<br/>
Members of multiple shared accounts can use the newly introduce user interface to quickly switch between all available accounts. For more information, see [Switch Accounts]({% slug switch-account %}).

## v1.3.0 - 01 February 2018

* **Open apps in your favorite code editor directly from {{ site.sk }}**<br/>
You can use the newly added `Open in Editor` button to quickly open the code of your application in a predefined code editor. For more information, see [Configure Code Editor]({% slug code-editor %}).

## v1.2.0 - 23 January 2018

* **Enable webpack for cloud and local builds in release configuration**<br/>
Enable the webpack option in `release` builds to bundle your code and improve the performance of your application. For more information about webpack and how to use it in {{ site.sk }}, see [Bundle Your Code with Webpack]({% slug webpack %}).

## v1.1.0 - 21 December 2017

* **Modify your proxy settings**<br/>
On Windows systems, you can configure the proxy settings of {{ site.sk }} and the {{ site.ns-cli }} directly from the client. For more information, see [Configure Proxy Settings]({% slug proxy %}). 

* **Initial environment verification**<br/> 
When you launch the {{ site.ns-sk }} client, it will check if you have Node.js and {{ site.ns-cli }} installed on your machine. If any of those dependencies are missing, {{ site.sk }} will offer to download and install them automatically. This verification is available only when you run {{ site.sk }} on Windows and macOS systems.

## v1.0.0 - 07 November 2017

* **{{ site.ns-sk }} is officially released!**<br /> 
With the official release, we are introducing subscriptions. You can choose between several types of subscriptions, each offering different benefits. For more information, see the [official {{ site.ns-sk }} purchase page](https://www.nativescript.org/nativescript-sidekick/purchase).
