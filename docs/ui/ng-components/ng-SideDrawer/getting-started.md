---
title: Getting Started
page_title: RadSideDrawer Getting Started | Progress NativeScript UI Documentation
description: This article explains how RadSideDrawer is used with Angular.
slug: sidedrawer-gettingstarted-angular
tags: sidedrawer, angular, nativescript, professional, ui
position: 2
publish: true
---

# RadSideDrawer Getting Started
This article explains how to create a simple RadSideDrawer with Angular.

> The `RadSideDrawer` is designed to be placed as a single child in your component's HTML.
 This rule excludes the use of a `<ActionBar>` which is not treated as a simple element by NativeScript and can be used with `RadSideDrawer` by placing it at the beginning of the HTML. 
 For example:
 ```HTML
 <ActionBar></ActionBar> <!-- ActionBar can be used with RadSideDrawer on the root level -->
 <RadSideDrawer></RadSideDrawer> <!-- RadSideDrawer should be single child (not counting ActionBar)-->
 <!-- 
    It is NOT allowed to have other elements on the root level with RadSideDrawer
    <StackLayout></StackLayout>
 -->    
 ```

## Installation
Run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-sidedrawer
```

## Initialization
Before proceeding, make sure that the {% typedoc_link classes:NativeScriptUISideDrawerModule %} from the *nativescript-ui-sidedrawer* plugin has been imported in an `ngModule` in your app. For example:

```TypeScript
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        ....
        NativeScriptUISideDrawerModule,
        ....
    ],
    declarations: [
        ....
    ]
})
export class SideDrawerExamplesModule { }
```

[Demo](https://github.com/NativeScript/nativescript-ui-samples-angular/blob/master/sidedrawer/app/examples/sidedrawer-examples.module.ts).

The RadSideDrawer consists of two visual parts:

- `mainContent` - the visual elements displayed in the host view where the drawer is shown.
- `drawerContent` - the visual elements displayed in the side drawer.

Defining `mainContent` and `drawerContent`  with Angular is done with the corresponding directives:

- `TKMainContent` - used with the `tkMainContent` selector
- `TKDrawerContent` - used with the `tkDrawerContent` selector

The following code snippet is a simple template with a basic setup for RadSideDrawer.

<snippet id='angular-sidedrawer-getting-started-html'/>
<snippet id='sidedrawer-getting-started-angular'/>
<snippet id='sidedrawer-getting-started-angular-css'/>

#### Figure 1. RadSideDrawer's 'tkMainContent'
![TelerikUI-SideDrawer-Getting-Started](../../img/ns_ui/drawer-getting-started-ios-1.png "Side drawer main content on iOS.") ![TelerikUI-SideDrawer-Getting-Started](../../img/ns_ui/drawer-getting-started-android-1.png "Side drawer main content on Android.")


#### Figure 2. RadSideDrawer's 'tkDrawerContent'
![TelerikUI-SideDrawer-Getting-Started](../../img/ns_ui/drawer-getting-started-ios-2.png "Drawer content on iOS.") ![TelerikUI-SideDrawer-Getting-Started](../../img/ns_ui/drawer-getting-started-android-2.png "Drawer content on Android.")


## References
Want to see this scenario in action?
Check our SDK examples repository on GitHub. You will find this and a lot more practical examples with NativeScript UI.

* [Getting Started Example](https://github.com/NativeScript/nativescript-ui-samples-angular/tree/master/sidedrawer/app/examples/getting-started)

Related articles you might find useful:

* [**Show over navigation bar**]({% slug sidedrawer-show-over-nav-bar-angular %})
* [**Transitions**]({% slug sidedrawer-transitions-angular %})
