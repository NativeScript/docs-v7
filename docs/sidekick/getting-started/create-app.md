---
title: Chapter 1 - Create and Configure Your App
description: 
position: 11
publish: true
slug: gs-create-app
---

# Chapter 1 - Create and Configure Your App

In this chapter, you are going to learn how to create a {{ site.ns }} app in {{ site.sk }}. Then, you will see how easy it is to modify the settings of the newly created app. Finally, you are going to use {{ site.sk }} to find a {{ site.ns }} plugin and include it in your app. Let's get started.

## Table of contents

* [1.1: Create a new app](#11-create-a-new-app)
* [1.2: Modify the app settings](#12-modify-the-app-settings)
* [1.3: Include a plugin](#13-include-a-plugin)

## 1.1: Create a new app

The initial launch of {{ site.ns-sk }} will present you with a view containing the "Create" and "Open" buttons and the "You haven't created any apps yet" message. Later on, from this view you will be able to see and manage all apps that are associated with {{ site.sk }}. 

To start creating a new {{ site.ns }} app, click on the **Create** button. This will open the **Create App** dialog where you need to set the name of your app, select a folder in which it will be placed and provide an application identifier (App ID). For more information about these settings, see [General Settings]({% slug general-properties %}). Do not worry if you get something wrong, most of these settings can be modified later on from the **App Settings** panel.

Additionally, you need to select a project type and a starting template. For this tutorial, we recommend that you select the **Angular & TypeScript** project type and the **Master-Detail with Firebase** template. We believe this template offers the most fulfilling experience and will show you the true power of {{ site.ns }}.

Make sure that you have provided all the required information and click on the **Create App** button.

## 1.2: Modify the app settings

{{ site.sk }} will open the newly created app automatically and show the **General** tab of the **App Settings** panel. In this tab, you will see some familiar settings, as well as some new ones. For example, the **Application Version** property can be used to create a uniform versioning for your Android and iOS builds. However, did you notice that the Application Version field is disabled and cannot be edited? Let's fix this. 

To enable the Application Version field, you need to open the **Android** tab in **App Settings**, set the **Application Version Code** to `10000` and press **Save**. Now, if you go back to the **General** tab, you will see that **Application Version** is enabled. If you change this value to 1.1.0, the **Application Version** and **Application Build Version** in the **iOS** tab, and the **Application Version** and **Application Version Code** in the **Android** tab will be updated accordingly. The exact formula used to calculate these values is shown in [General Settings]({% slug general-properties %}). 

You can also modify platform specific settings. For a detailed explanation on each property, see [Android Settings]({% slug android-properties %}) and [iOS Settings]({% slug ios-properties %}).

## 1.3: Include a plugin

The **Plugins** tab in **App Settings** lets you install, update, configure, and remove npm packages and plugins without the need to use {{ site.ns-cli }} commands. Under **Installed**, you can see the currently installed plugins and their version. Selecting any of the plugins will give you the option to update it or delete it. Under **Available**, you can search for plugins directly in npm. Let's try it now. 

All you have to do is type the name of the plugin in the search box and let {{ site.sk }} do its magic. Based on your search parameter, you will be presented with one or several results that match your input. Select the one that you need and click **Install** to download and include the plugin in your app.

Let's move to the next chapter and see how you can build your new app.

<div class="next-chapter-link-container">
  <a href="build">Continue to Chapter 2 - Build Your App</a>
</div>




