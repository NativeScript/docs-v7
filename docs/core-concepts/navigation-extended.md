---
title: Navigation (extended examples)
description: Learn how to nest navigation widgets and implement complex navigation scenarios
position: 44
slug: extended-navigation
environment: nativescript
---

# Nested Navigation

The main goal of the following article is to demonstrate some good practices for creating nested navigation structure. The article does not aim to be a strict guide, but will help you to understand how you could create complex navigation structures while using forward (e.g., frames or outlets) & lateral navigation (e.g., drawers, tab views, etc.). In each of the article sections, you can find visual guides along with corresponding Playground demos.

## Nesting Simple Forward Navigation

{% nativescript %}
![nested-forward-navigation](../img/navigation-extended/navigation-examples-page-1.png?raw=true)

Nesting simple forward navigation: a `Frame` in a layout, for example, to show an advertisement banner on the top/bottom (static content).
The root page is using a layout (e.g., a `GridLayout`) as a wrapper for the nested forward navigation (`Frame`) and for the static place (layout).
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

Nesting simple forward navigation: A `page-router-outlet` (mentioned in this article also as *P-R-O*) in a layout, for example, to show an advertisement banner on the top/bottom (static place).
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

Nesting simple lateral navigation: a TabView in a layout, for example, to show an advertisement banner on the top/bottom.
```
GridLayout  
    > TabView (lateral navigation)
        >> Pages | Layouts
    > Static Content
```

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=IeOEzc)

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

Nesting a TabView inside a Page/Frame. For example in a Login page with forward navigation to a page with a nested TabView.
```
Frame 
    > LoginPage 
    > MainPage 
        >> TabView
```

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=1UMjJZ)

{% endnativescript %}

{% angular %}
![ng-navigation-lateral-in-forward](../img/navigation-extended/ng-navigation-examples-page-4.png?raw=true)

Nesting a TabView (lateral navigation) inside a page router outlet. For example in a Login component with forward navigation to a component with a nested TabView.
```
P-R-O (forward navigation)
    > login.component
    > home.component
        >> TabView (lateral navigation)
```

[Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=HzFEFL)
{% endangular %}

## Nesting Forward in Lateral Navigation

{% nativescript %}
![navigation-lateral-in-forward-schema](../img/navigation-extended/navigation-examples-page-5.png?raw=true)

Root TabView with multiple nested Frames.
```
TabView (lateral navigation)
    > Frame (id="featured" defaultPage="featured-page")
    > Frame (id="browse" defaultPage="browse-page")
    > Frame (id="search" defaultPage="search-page")
```

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=DrwJ2o)
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
TabView (lateral navigation)
    TabViewItem > TabView (lateral navigation)
                    >> another content (e.g. layout or Frame)
    TabViewItem > another content (e.g. layout or Frame)
    TabViewItem > another content (e.g. layout or Frame)
```

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=soFhmN&v=6) (in progress)
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

Make an example where lots of these are combined. For example, RadSidedrawer + Login leading to a Page with TabView and in one TabView there is another TabView. In another, there might be a Frame that has secondary Frame navigation.

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=fyNqnr&v=6)
RadSideDrawer > Frame 
{% endnativescript %}
