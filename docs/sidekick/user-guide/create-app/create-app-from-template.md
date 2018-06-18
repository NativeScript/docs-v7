---
title: Create App From Template
description: 
position: 1
publish: true
slug: create-app-from-template
---

# Create App From Template

To help you get started with mobile app development, {{ site.ns-sk }} provides a selection of templates from which you can create an app. 

In the **General** templates tab, you can find the **Blank**, **Drawer Navigation**, **Tab Navigation**, **Master-Detail with Firebase** and **Master-Detail with Kinvey** templates. Each of the templates is available for all of the three flavors - **JavaScript**, **TypeScript** and **Angular & TypeScript**. We recommend the Master-Detail with Kinvey or Firebase templates because they use an actual back-end service and offer a more complete experience.

The **Angular & TypeScript** flavor also contains the **Enterprise Auth** template. For more information about the enterprise authentication and how to configure it, see [Using Enterprise Authentication]({% slug enterprise-auth %}). 

Under the **Industry** templates tab, you can find industry specific templates. Currently, you can choose between two apps that leverage the Progress Health Cloud - **Patient Care** and **Health Survey**.  

## Procedure

1. Run the {{ site.ns-sk }} client.
1. Click on the **Create** button or select **File** &#8594; **Create**.
1. Select a **Template Category**.
1. Select a **Project Type**. Applicable only for the **General** template category.
1. Select a **Template**. 
1. In the **App Name** text box, type a name for your app.
1. In **Project Folder**, click **Browse** to set a storage location for your app.
1. (Optional) In the **App ID** text box, {{ site.sk }} has automatically generated an App ID (the unique application identifier of your app) in the format `org.nativescript.<App Name>`.
	* To enter your own App ID, disable the **Automatically set App ID** check box. In the text box below, type an App ID for your app. For more information about the App ID and how it should be structured, see [Application Identifier in General Settings]({% slug general-properties %}).
1. Click on the **Create** button to create your app. 

## Next Steps

Continue by [Configuring your App]({% slug configuring-your-app %}) to fit your specific requirements or directly [Deploy and Test Your App on a Connected Device]({% slug deploy-on-device %}).

