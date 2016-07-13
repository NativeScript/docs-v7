---
title: Creating Launch Screen and App Icons for Android
description: How to set up and modify Launch Screen and App Icons for Android
position: 17
slug: launch-screen-android
---


# Creating Launch Screens for Android 

Launch screens are essential as they provide user's first experience with your mobile application.
Based on [Google's Material Design launch screens guidelines](https://material.google.com/patterns/launch-screens.html#launch-screens-branded-launch) there are two 
main types of launch screens

- Placeholder UI - a simple seemless transaction type screen
- Branded Launch Screens - screen providing the user with momentary brand exposure and focus on the content

Instead of displaying a blank white canvas while your app is loading, 
creating a launch screen will not only "fill the gap" but also provide basic introduction
for your users. Essentially, there are some basic rules applicable for both types of launch screens 
which are good to follow to create good first impressions:

- avoid using text (except for your Logo and tagline)
- avoid using animations (you launch should be as light as possible)
- avoid reusing your launch screen inside your application
- follow Goggle's [Material design](https://material.google.com) rules

## Setting launch screen and App Icons

In NativeScript, your application template (created with `tns create myApp`) ships with a basic launch screen template.
In this article, we are going to introduce the workflow to create/modify your own launch screen.

### How to set your launch screen

The default template in NativeScript (created with `tns create myApp`) provides you with predefined 
**splash_screen.xml** file with the NativeScript logo on blue background and with sample app icons. 
To modify that template and create your own launch screen using your own assets and design, you will need to access
the files located under **app/App_Resources/Android** folder.
Here is the list of all the files and folders you may need to modify:

* **drawable** folders: In your **app/App_Resources/Android** you will find a number of folders named drawable-X (where x is the different DPI for the different devices)
These folders will store your properly scaled images for your app icons, launch screens and main application (optional).
Here is the full list for your drawable resources folders.

    * **drawable-ldpi** - Resources for low-density (ldpi) screens (~120dpi).
    * **drawable-mdpi** - Resources for medium-density (mdpi) screens (~160dpi). (This is the baseline density.)
    * **drawable-hdpi** - Resources for high-density (hdpi) screens (~240dpi).
    * **drawable-nodpi** - Resources for all densities. These are density-independent resources. The system does not scale resources tagged with this qualifier, regardless of the current screen's density.
        > **Important:** In NativeScript this is the folder which holds **splash_screen.xml**  - the file that creates your launch screen. 
    
    * **drawable-xdpi** - Resources for extra-high-density (xhdpi) screens (~320dpi).
    * **drawable-xxdpi** - Resources for extra-extra-high-density (xxhdpi) screens (~480dpi).
    * **drawable-xxxdpi** - Resources for extra-extra-extra-high-density (xxxhdpi) uses (~640dpi). Use this for the launcher icon only.

* **values** folder: XML files that contain simple values, such as strings, integers, and colors.
Here is the full list of the files that ships with the basic NativeScript template.  

    * **colors.xml** - XML file in which the app colors are declared.
    * **strings.xml** - XML file in which the app string are declared.
    * **styles.xml** - XML file in which the app styles are declared.

* **values-v21** folder: XML files that contain simple values, such as strings, integers, and colors.
Used when you need to provide themes supported only on API Level 21+ (e.g. Theme.Material)   

* **AndroidManifest.xml** file: Every application must have an AndroidManifest.xml file (with precisely that name) in its root directory. The manifest file presents essential information about your app to the Android system, information the system must have before it can run any of the app's code.   
In order to change the default launch screen or create your own follow this steps:

1. Provide your properly scaled images accordingly to the **drawable** folders.
This folders can be used not only for your launch screen images but also for your app icons and for yours
in-app images (you can refer to this resource from your application logic with `"res://image-name"` )

![Setting images in drawable resource folders](../img/launch-screen/android/launch-android-005.png "Setting images in drawable resource folders")

2. Define the colors you want to use in **values/colors.xml** and in **values-v21/colors.xml**

![Setting colors in values folders](../img/launch-screen/android/launch-android-002.png "Setting colors in values folders")

3. Define the strings you want to use in **values/strings.xml** and in **values-v21/strings.xml**

![Setting colors in values folders](../img/launch-screen/android/launch-android-003.png "Setting colors in values folders")

4. Define the styles and themes you want to use in **values/styles.xml** and in **values-v21/styles.xml**
Note that styles applied in values-v21 folder will be aplied only to devices with API 21+.
To set you launch screen file which you have created in folder **drawable-nodpi** with name **splash_screen.xml**
add the following line

`<item name="android:windowBackground">@drawable/splash_screen</item>`

![Setting styles in values folders](../img/launch-screen/android/launch-android-004.png "Setting styles in values folders")

> **Note:** If your project comes with no folders **values** , **values-v21** and/or **drawable-xxx** you can create
them manually and add the files needed accordingly. Or you can use [the default set of styles and themes used in NativeScript](https://github.com/NativeScript/nativescript-marketplace-demo/tree/production/app/App_Resources/Android) 

Notice that you can **NOT** have custom folders inside your App_Resources.
Only folders that are required by the Android convention are allowed and they must be created with the exact names
provided (e.g. **values**, **values-v21**, **drawable**). When adding new folders in your App_Resources you should reset your
platform folder.

`tns platform remove android`

`tns platform add android`

Once your launch screen is fully set, rebuild your application and your launch screen is ready.
In some occasions you might need to reset your platform folder as mentioned above.