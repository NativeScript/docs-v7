---
title: Nested Navigation
description: Learn how to nest navigation widgets and implement complex navigation scenarios
position: 44
slug: nested-navigation
---


The main goal of the following article is to demonstrate some good practices for creating nested navigation structure. The article does not aim to be a strict guide, but will help you to understand how you could create complex navigation structures while using forward (e.g., frames or outlets) & lateral navigation (e.g., drawers, tabs, bottom navigation, etc.). In each of the article sections, you can find visual guides along with corresponding Playground demos.

## Simple Rule

There is one simple rule when it comes to nesting navigation widgets.

{% nativescript %}
> **Important:** When nesting a frame or a tabs/bottom-navigation, they should never have direct siblings in the markup. Instead, wrap them in a layout and nest this layout.
{% endnativescript %}
{% angular %}
> **Important:** When nesting an outlet or a tabs/bottom-navigation, they should never have direct siblings in the markup. Instead, wrap them in a layout and nest this layout.
{% endangular %}

If these components have siblings, they will span over them in most scenarios. The reason for this is on iOS the navigation controllers always take all the space provided by their parent regardless of their own layout parameters.

You can check out how this is done in the examples below.

## Nesting Simple Forward Navigation

{% nativescript %}
![nested-forward-navigation](../img/navigation-extended/navigation-examples-page-1.png?raw=true)

Nesting simple forward navigation: a `Frame` in a layout, for example, to show an advertisement banner on the top/bottom (static content).
The root page is using a layout (e.g., a `GridLayout`) as a wrapper for the nested forward navigation (`Frame`) and for the static content (layout).
```
GridLayout  
    > Frame (forward navigation)
        >> Pages
    > Static Content
```

Code: [Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=65Uk0F)
{% endnativescript %}

{% angular %}
![ng-nested-forward-navigation](../img/navigation-extended/ng-navigation-examples-page-1.png?raw=true)

Nesting simple forward navigation: A `page-router-outlet` (mentioned in this article also as *P-R-O*) in a layout, for example, to show an advertisement banner on the top/bottom (static content).
```
GridLayout  
    > P-R-O (forward navigation)
        >> Components
    > Static Content
```

Code: [Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=O9Hbts)
{% endangular %}

## Nesting Simple Lateral Navigation

{% nativescript %}
![nested-lateral-navigation](../img/navigation-extended/navigation-examples-page-2.png?raw=true)

Nesting simple lateral navigation: a BottomNavigation in a layout, for example, to show an advertisement banner on the top/bottom.
```
GridLayout  
    > BottomNavigation (lateral navigation)
        >> Pages | Layouts
    > Static Content
```

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=IeOEzc&v=5)

{% endnativescript %}

{% angular %}
![ng-nested-lateral-navigation](../img/navigation-extended/ng-navigation-examples-page-2.png?raw=true)

Nesting simple lateral navigation: a TabView in a layout, for example, to show an advertisement banner on the top/bottom.
```
GridLayout  
    > TabView (lateral navigation)
        >> Layouts | P-R-Os
    > Static Content
```
[Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=hBdlPB)
{% endangular %}

## Nesting Forward in Forward Navigation

{% nativescript %}
![nested-forward-in-forward-navigation](../img/navigation-extended/navigation-examples-page-3.png?raw=true)

Nesting a Frame inside a Page/Frame, for example, a secondary navigation level.

> **Note:** Each `Frame` comes with its own `ActionBar` by default. It's typical that you want to keep one `ActionBar` on top of the screen when nesting navigations. Set the `actionBarVisibility` property of the `Frame` to `never` to hide the `ActionBar` where needed.

```
Frame (root forward navigation)
    > Page (login)
    > Page (home)
        >> Frame (secondary forward navigation)
            >>> Page
```
[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=LMV24L) 
{% endnativescript %}

{% angular %}
![ng-nested-forward-in-forward-navigation](../img/navigation-extended/ng-navigation-examples-page-3.png?raw=true)


Nesting a page router outlet inside another page router outlet, for example, to create a secondary navigation level.

> **Note:** Each page router outlet comes with its own `ActionBar` by default. It's typical that you want to keep one `ActionBar` on top of the screen when nesting outlets. Set the `actionBarVisibility` property of the page router outlet to `never` to hide the `ActionBar` where needed.
```
P-R-O (root forward navigation)
    > login.component
    > home.component
        >> P-R-O (secondary forward navigation)
            >>> featured.component
            >>> item.component
```

[Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=VlXzEW)
{% endangular %}


## Nesting Lateral in Forward Navigation

{% nativescript %}
![navigation-lateral-in-forward](../img/navigation-extended/navigation-examples-page-4.png?raw=true)

Nesting a BottomNavigation inside a Page/Frame. For example in a Login page with forward navigation to a page with a nested BottomNavigation.
```
Frame 
    > LoginPage 
    > MainPage 
        >> BottomNavigation
```

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=1UMjJZ&v=9)

{% endnativescript %}

{% angular %}
![ng-navigation-lateral-in-forward](../img/navigation-extended/ng-navigation-examples-page-4.png?raw=true)

Nesting a BottomNavigation (lateral navigation) inside a page router outlet. For example in a Login component with forward navigation to a component with a nested BottomNavigation.
```
P-R-O (forward navigation)
    > login.component
    > home.component
        >> BottomNavigation (lateral navigation)
```

[Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=HzFEFL&v=6)
{% endangular %}

## Nesting Forward in Lateral Navigation

{% nativescript %}
![navigation-lateral-in-forward-schema](../img/navigation-extended/navigation-examples-page-5.png?raw=true)

Root BottomNavigation with multiple nested Frames.
```
BottomNavigation (lateral navigation)
    > Frame (id="featured" defaultPage="featured-page")
    > Frame (id="browse" defaultPage="browse-page")
    > Frame (id="search" defaultPage="search-page")
```

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=DrwJ2o&v=13)
TabView > Frames >> Pages
{% endnativescript %}

{% angular %}
![ng-navigation-lateral-in-forward-schema](../img/navigation-extended/ng-navigation-examples-page-4.png?raw=true)

Example of a root TabView with multiple nested page router outlets. Each outlet in each tab should be navigated through its unique outlet name.
Notice that in the routing module, you should set a default route for each outlet used within the lateral navigation.

```TypeScript
// default route example
{ path: "", redirectTo: "/(featured:featured//browse:browse//search:search)", pathMatch: "full" },
```
In the above route, we are setting the **feature** outlet to default to *featured* component, the **browse** outlet to default to *browse* component, and the **search** outlet to default to *search* component.

```
TabView (lateral navigation)
    > P-R-O (outlet name: "featured")
    > P-R-O (outlet name: "browse")
    > P-R-O (outlet name: "search")
```

[Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=0qyGbe)
{% endangular %}

## Nesting Lateral in Lateral

{% nativescript %}
![navigation-lateral-in-lateral-schema](../img/navigation-extended/navigation-examples-page-6.png?raw=true)

In this example, the root TabView is explicitly set to bottom for Android (by design the tabs are always placed at the bottom on iOS, but on Android, we can change the placement).

```
BottomNavigation (lateral navigation)
    TabContentItem > Tabs (lateral navigation)
                    >> another content (e.g. layout or Frame)
    TabContentItem > another content (e.g. layout or Frame)
    TabContentItem > another content (e.g. layout or Frame)
```

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=soFhmN&v=14)
{% endnativescript %}

{% angular %}
![ng-navigation-lateral-in-lateral-schema](../img/navigation-extended/ng-navigation-examples-page-6.png?raw=true)

```
TabView (lateral navigation)
    tabItem > TabView (lateral navigation)
                >> another content (e.g. layout or P-R-O)
    tabItem > another content (e.g. layout or P-R-O)
    tabItem > another content (e.g. layout or P-R-O)
```
[Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=ObeDAp)
{% endangular %}


## Combining Nested Navigation Scenarios

{% nativescript %}
![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-7.png?raw=true)

The following example demonstrates a scenario where we have combined several nested navigations (both lateral and forward navigations on different nested levels). For example, a `RadSidedrawer` + Login page leading to a page with a `TabView` and in one `TabView` there are inner forward navigations in each tab item. There is also a modal page with its own forward navigation.

```
RadSideDrawer (lateral navigation)
    drawer content 
        > Frame id="root-frame" (forward navigation)
            >> Page (e.g. login-page)
            >> Page (e.g. main-page) with BottomNavigation (lateral navigation)
                 TabContentItem >>> Frame (featured)
                            >>>> Page (featured-page)
                 TabContentItem >>> Frame (browse)
                            >>>> Page (browse-page)
                 TabContentItem >>> Frame (search)
                            >>>> Page (search-page)

    drawer link 
        > Modal page root (Frame - forward navigation)
            >> Modal Page 

    drawer link        
        >> Page (e.g. info-page loaded via "root-frame")

```
[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=fyNqnr&v=8)


{% endnativescript %}
