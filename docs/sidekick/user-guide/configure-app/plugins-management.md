---
title: Plugins Management
description: With NativeScript Sidekick you can search for and install NativeScript plugins to extend the functionality of your app.
position: 6
publish: true
slug: plugins-management
---

# Plugins Management

In {{ site.sk }}, you can easily find, install and update various {{ site.ns }} plugins and npm packages to extend the functionality of your app.

1.	[What are NativeScript plugins](#what-are-nativescript-plugins)
1.	[The NativeScript Marketplace](#the-nativescript-marketplace)
1.	[NativeScript plugins in Sidekick](#nativescript-plugins-in-sidekick)
	1.	[Install new plugins](#install-new-plugins)
	1.	[Update existing plugins](#update-existing-plugins)
	1.	[Remove existing plugins](#remove-existing-plugins)

## What are {{ site.ns }} plugins

The {{ site.ns }} plugins are npm packages with some added native functionality. They can be referenced in your application as `dependencies` or as `devDependencies`. 

The `dependencies` are plugins required by your app at run time. There are a lot of plugins that you can use as dependencies, including, but not limited to plugins that introduce an UI component (calendar, drop-down, picker), plugins that give you access to a native API (camera, geolocation), plugins that allow you to use a third-party SDK (Kinvey, Google Maps, Facebook). 

The `devDependencies` are the plugins or npm packages required by your app only during the development phase. Usually, those are plugins that introduce functionality like unit testing, TypeScript to JavaScript transpilation, obfuscation, to name a few.    

## The {{ site.ns }} Marketplace

Progress manages the [NativeScript Marketplace](https://market.nativescript.org/), a collection of free to use NativeScript plugins that can easily be integrated in your native mobile app. 

Some of the plugins are marked as `verified`, which means that they are created and maintained by Progress or trusted partners and satisfy a [long list of criteria](https://github.com/NativeScript/marketplace-feedback/blob/master/docs/verified-plugins.md). The verified plugins are high in quality and reliability and are always kept up-to-date with the latest versions of {{ site.ns }}.

## {{ site.ns }} plugins in {{ site.sk }}

In {{ site.sk }}, you can easily find, install, update and remove plugins, both as `dependencies` and as `devDependencies`. Plugins installed as `devDependencies` are marked with the `dev` tag and the green `verified` tag indicates that a plugin is verified.

### Install new plugins

1. Launch {{ site.ns-sk }} and open your app.
1. From the left toolbar, select **Plugins** to open the Plugins view.
1. Select the **Available** tab and type the name of the plugin in the search box.
1. Choose the plugin that you want to install.
1. Click the **Install** drop-down button to expand it.
	* Select **Install** to add the plugin as a `dependency`.
	* Select **Install as devDependency** to add the plugin as  a `devDependency`. 

### Update existing plugins

1. Launch {{ site.ns-sk }} and open your app.
1. From the left toolbar, select **Plugins** to open the Plugins view.
1. Select the **Installed** tab and select the plugin that you want to update.
1. Click the **Update** button to update the plugin to the latest available version. 

> **Note**: The **Update** button will be visible only when the selected plugin has a newer version and can be updated.

### Remove existing plugins

1. Launch {{ site.ns-sk }} and open your app.
1. From the left toolbar, select **Plugins** to open the Plugins view.
1. Select the **Installed** tab and select the plugin that you want to remove.
1. Click the **Uninstall** button to remove the selected plugin. 

## Next Steps

Update your code to utilize the newly installed plugins and then [deploy your app on a connected device]({% slug deploy-on-device %}) to test the new functionality.

## See Also

* [How to Create a NativeScript Plugin](https://docs.nativescript.org/plugins/building-plugins)