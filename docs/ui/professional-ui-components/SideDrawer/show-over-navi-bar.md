---
title: Use as application root and show over navigation bar
page_title: RadSideDrawer Use as root of the application and show over navigation bar | Progress NativeScript UI Documentation
description: This article explains how to use the RadSideDrawer as a root of the application making it appear over the navigation bar.
slug: sidedrawer-show-over-nav-bar
tags: sidedrawer, overnavigation, drawer, navigation, bar, root, nativescript, professional, ui
position: 3
publish: true
---

> With the **4.x.x** release of the **nativescript-ui-sidedrawer** plugin the {% typedoc_link classes:RadSideDrawer %} no longer has a dedicated `showOverNavigation` property. More details can be found below in the "Migrating from versions 3.x.x to the latest version" section.

# Share a single RadSideDrawer throughout the entire life cycle of the application

By popular desire we have revisited the way the {% typedoc_link classes:RadSideDrawer %} is, was and wanted to be used by the community. While there are a few cases where the current design API-wise was performing as desired we heard overwhelmingly from the community that the {% typedoc_link classes:RadSideDrawer %} is a fundamental element in most mobile applications and should be easily shown everywhere inside of it. In the 3.x.x versions in order to show the element on each `Page` you would have to duplicate it in each XML declaration leading to less than perfect experience and making maintenance quite redundant. Having this in mind we revisited the API of the {% typedoc_link classes:RadSideDrawer %} and implemented it in a way that the above "shared" use case is possible while not changing its API too much to avoid major breaking changes. 

With the **4.x.x** version of the plugin it is possible to use the {% typedoc_link classes:RadSideDrawer %} as **the root element** of your application. This way it will be persisted and "shared" throughout the entire life cycle of the application. In order to use the element as a root simply:

- Declare it where you used to declare your `Page` instance in NativeScript 3.x.x
- Set the {% typedoc_link classes:RadSideDrawer,member:drawerContent %} as usual
- Set the {% typedoc_link classes:RadSideDrawer,member:mainContent %} to a `Frame` instance and set its `defaultPage` to the first Page of your application

For example:

```
<nsDrawer:RadSideDrawer xmlns:nsDrawer="nativescript-ui-sidedrawer">
    <nsDrawer:RadSideDrawer.drawerContent>
        <GridLayout>
            <Label text="Side Menu"></Label>
        </GridLayout>
    </nsDrawer:RadSideDrawer.drawerContent>
    <nsDrawer:RadSideDrawer.mainContent>
       <Frame defaultPage="./main-content-page"></Frame>
    </nsDrawer:RadSideDrawer.mainContent>
</nsDrawer:RadSideDrawer> 
```

By design when navigation is executed in the NativeScript application that navigation will be executed inside the `Frame` instance which means that the {% typedoc_link classes:RadSideDrawer %} instance will be persisted during that navigation.

When using the {% typedoc_link classes:RadSideDrawer %} as a root element it will by design **always be shown over the navigation bar**. Also please be aware that using {% typedoc_link classes:RadSideDrawer %} as a root element is **not compatible with HMR builds.**

#### Figure 1. RadSideDrawer as a root element and over navigation bar (ActionBar)
![NativeScriptUI-Getting-Started-iOS](../../img/ns_ui/drawer-over-nav-ios.png "RadSideDrawer in iOS") ![NativeScriptUI-Getting-Started-Android](../../img/ns_ui/drawer-over-nav-android.png "RadSideDrawer in Android") 

## Migrating from Versions 3.x.x to the Latest Version

With the latest 4.x.x and above versions the {% typedoc_link classes:RadSideDrawer %} element has had a few changes to its API and usage. There have been two major changes:
- The `showOverNavigation` property has been removed and replaced by a change in the way the element is utilized. More details can be found below in the "Showing the RadSideDrawer over the navigation bar" section. 
- The {% typedoc_link classes:RadSideDrawer %} can be "shared" throughout the entire life cycle of the application

### Showing the RadSideDrawer over the Navigation Bar 

With the latest versions in showing {% typedoc_link classes:RadSideDrawer %} element above or below the navigation bar has been re-designed and is no longer controlled by a property but rather by the way the element is utilized in the application. While hearing a lot of feedback from the community we noticed that the majority of it was changing the `showOverNavigation` property from its default value of `false` to `true` and also was duplicating the element on each `Page`. This is why we have introduced improvements in both cases by allowing the element to be persisted throughout the entire life cycle of the application which also by design will shown over the navigation bar. It is no longer necessary to set any property, simply set the {% typedoc_link classes:RadSideDrawer %} as a root of your application. More details can be found above in the "Share a single RadSideDrawer throughout the entire life cycle of the application" section

### How to Migrate from Duplicated RadSideDrawer to a Single Root Element
If you were using the {% typedoc_link classes:RadSideDrawer %} element in 3.x.x you may have ended with duplicating its declaration in each `Page` you have in your app. With 4.x.x this is no longer needed but it is backward compatible and should work as expected. You can now truly "share" one declaration in the entire application which is also the recommended approach performance wise. Simply follow this common steps for migrating from 3.x.x to 4.x.x:
- Remove the duplicated `RadSideDrawer` declarations from your XML
- In the XML of the bootstrapped `Page`, replace that tag declaration with:

```
<nsDrawer:RadSideDrawer xmlns:nsDrawer="nativescript-ui-sidedrawer">
    ...
</nsDrawer:RadSideDrawer> 
```

- Set the {% typedoc_link classes:RadSideDrawer,member:mainContent %} to a `Frame` instance and set its `defaultPage` to the first Page of your application:

```
<nsDrawer:RadSideDrawer.mainContent>
    <Frame defaultPage="main-content-page"></Frame>
</nsDrawer:RadSideDrawer.mainContent>
```

- Change the bootstrapping of the application to the new `run` syntax:

```
import * as app from "application";

app.run({ moduleName: "main-page" });
```

If you find yourself in the need to access the {% typedoc_link classes:RadSideDrawer %} from one of your Pages you can use the new `application` module's `getRootView()` function:

```
import * as app from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

let sideDrawer = <RadSideDrawer>app.getRootView();
```
