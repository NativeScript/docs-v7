---
title: NativeScript Application Templates
description: a list of the available application templates
position: 70
slug: nativescript-application-templates
---

# NativeScript Application Templates

There are several available templates that can help you bootstrap your NativeScript application using the best coding practices, in all supported flavors, including Angular & TypeScript, Vanilla JavaScript or TypeScript.

1. [Blank](#blank)
2. [Navigation Drawer](#navigation-drawer)
3. [Tabs](#tabs)
4. [Master Detail with Firebase](#master-detail-with-firebase)
4. [Master Detail with Kinvey](#master-detail-with-kinvey)

To create a new app using one of the templates, you can use the following command:

```bash
$  tns create my-app-name --template tns-template-name
```

In the command above `tns-template-name` should be the template you wish to use. See bellow for the name of each template. Note that different versions of NativeScript can have different code in the application templates. If you create an app using an older version of the framework you might get less features from the ones included in the current NativeScript release.

## Blank

<img src="https://raw.githubusercontent.com/NativeScript/template-blank/master/tools/assets/blank-ios.png" height="400"> <img src="https://raw.githubusercontent.com/NativeScript/template-blank/master/tools/assets/blank-android.png" height="400">

{% nativescript %}
`tns-template-blank` - JavaScript
`tns-template-blank-ts` - TypeScript{% endnativescript %}{% angular %}
`tns-template-blank-ng` - Angular with TypeScript
{% endangular %}

A basic template with a single page and no custom styles. Useful for when minimal and clean code is needed.

## Navigation Drawer

<img src="https://raw.githubusercontent.com/NativeScript/template-drawer-navigation/master/tools/assets/phone-drawer-ios.png" height="400"> <img src="https://raw.githubusercontent.com/NativeScript/template-drawer-navigation/master/tools/assets/phone-drawer-android.png" height="400">

{% nativescript %}
`tns-template-drawer-navigation` - JavaScript
`tns-template-drawer-navigation-ts` - TypeScript{% endnativescript %}{% angular %}
`tns-template-drawer-navigation-ng` - Angular with TypeScript
{% endangular %}

This template a preconfigured {% nativescript %}[SideDrawer](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/SideDrawer/overview){% endnativescript %}{% angular %}[SideDrawer](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/SideDrawer/overview){% endangular %} component from the [Progress NativeScript UI](http://docs.telerik.com/devtools/nativescript-ui/introduction) suite with several pages.

## Tabs

<img src="https://raw.githubusercontent.com/NativeScript/template-tab-navigation/HEAD/tools/assets/phone-tab-ios.png" height="400"> <img src="https://raw.githubusercontent.com/NativeScript/template-tab-navigation/HEAD/tools/assets/phone-tab-android.png" height="400">

{% nativescript %}
`tns-template-tab-navigation` - JavaScript
`tns-template-tab-navigation-ts` - TypeScript{% endnativescript %}{% angular %}
`tns-template-tab-navigation-ng` - Angular with TypeScript
{% endangular %}

This template uses a [TabView](https://docs.nativescript.org/cookbook/ui/tab-view) component for navigation. It also includes several pages to show how to populate the tabs and perform the navigation.

## Master Detail with Firebase

<img src="https://raw.githubusercontent.com/NativeScript/template-master-detail-kinvey/master/tools/assets/phone-masterDetail-ios.png" height="400"> <img src="https://raw.githubusercontent.com/NativeScript/template-master-detail-kinvey/master/tools/assets/phone-masterDetail-detail-ios.png" height="400">

{% nativescript %}
`tns-template-master-detail` - JavaScript
`tns-template-master-detail-ts` - TypeScript{% endnativescript %}{% angular %}
`tns-template-master-detail-ng` - Angular with TypeScript
{% endangular %}

This Master-Detail template is a fundamental building block for any app that displays a collection of objects and their details, which also need to work both in online and offline mode. It utilizes [Firebase](https://firebase.google.com/) as a backend.

## Master Detail with Kinvey

<img src="https://raw.githubusercontent.com/NativeScript/template-master-detail/master/tools/assets/phone-masterDetail-ios.png" height="400"> <img src="https://raw.githubusercontent.com/NativeScript/template-master-detail/master/tools/assets/phone-masterDetail-detail-ios.png" height="400">

{% nativescript %}
`tns-template-master-detail-kinvey` - JavaScript
`tns-template-master-detail-kinvey-ts` - TypeScript{% endnativescript %}{% angular %}
`tns-template-master-detail-kinvey-ng` - Angular with TypeScript
{% endangular %}

This template is functionally identical to [Master Detail with Firebase](#master-detail-with-firebase). The only difference is that it utilizes [Kinvey](https://www.kinvey.com/) as a backend.