---
title: Navigation (extended examples)
description: Learn how to configure your application navigation architecture, navigate forward and backward and use TabView, Modal View and SideDrawer
position: 44
slug: extended-navigation
environment: nativescript
---

# Navigation Examples

The main goal of the following article is to demonstrate some good practices for creating nested navigation structure. The article does not aim to be a strict guide, but will help you to understand how you could create complex navigation structures while using forward (e.g., frames or outlets) & lateral navigation (e.g., drawers, tab views, etc.). In each of the article sections, you can find visual guides along with corresponding Playground demos.

## Nesting Simple Forward Navigation

{% nativescript %}
![nested-forward-navigation](../img/navigation-extended/navigation-examples-page-1.png?raw=true)

Nesting simple forward navigation: a `Frame` in a layout, for example to show an advertisment banner on top/bottom (static place).

```
GridLayout  
    > Frame (forward navigation)
        >> Pages
    > Another Layout
```

Code: [Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=65Uk0F)
{% endnativescript %}

{% angular %}
![ng-nested-forward-navigation](../img/navigation-extended/ng-navigation-examples-page-1.png?raw=true)

Nesting simple forward navigation: A `page-router-outlet` (mentioned in this article also as *P-R-O*) in a layout, for example to show an advertisment banner on top/bottom (static place).

```
GridLayout  
    > P-R-O (forward navigation)
        >> Components
    > Another Layout (static place)
```

Code: [Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=O9Hbts)
{% endangular %}

## Nesting Simple Lateral Navigation

{% nativescript %}
![nested-lateral-navigation](../img/navigation-extended/navigation-examples-page-2.png?raw=true)

Nesting simple lateral navigation: a TabView in a layoutt, for example to show an advertisment banner on top/bottom.
```
GridLayout  
    > TabView (lateral navigation)
        >> Pages | Layouts
    > Another Layout (static place)
```

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=IeOEzc)

{% endnativescript %}

{% angular %}
![ng-nested-lateral-navigation](../img/navigation-extended/ng-navigation-examples-page-2.png?raw=true)

Nesting simple lateral navigation: a TabView in a layoutt, for example to show an advertisment banner on top/bottom.
```
GridLayout  
    > TabView (lateral navigation)
        >> Layouts | P-R-Os
    > Another Layout (static place)
```
[Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=hBdlPB)
{% endangular %}

## Nesting Forward in Forward Navigation

{% nativescript %}
![nested-forward-in-forward-navigation](../img/navigation-extended/navigation-examples-page-3.png?raw=true)

Nesting a Frame inside a Page/Frame, for example a secondary navigation level.
```
Frame (root forward navigation)
    > Page (login)
    > Page (home)
        >> Frame (secondary forward navigaiton)
            >>> Page
```
[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=LMV24L) 
{% endnativescript %}

{% angular %}
![ng-nested-forward-in-forward-navigation](../img/navigation-extended/ng-navigation-examples-page-3.png?raw=true)


Nesting a P-R-O inside a layout, for example ro create a secondary navigation level.

```
P-R-O (root forward navigation)
    > login.component
    > home.component
        >> P-R-O (secondary forward navigaiton)
            >>> featured.component
            >>> item.component
```

[Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=VlXzEW)
{% endangular %}


## Nesting Lateral in Forward Navigation

{% nativescript %}
![navigation-lateral-in-forward](../img/navigation-extended/navigation-examples-page-4.png?raw=true)

Nesting a TabView inside a Page/Frame. Ffor example in a Login page wtih forward navigaiton to a page with a nested TabView.

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

Nesting a TabView (lateral navigaiton) inside a layout. For example in a Login component wtih forward navigaiton to a component with a nested TabView.

```
P-R-O (forward navigation)
    > login.component
    > home.component
        >> TabView (lateral navigaiton)
```

[Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=HzFEFL)
{% endangular %}

## Nesting Forward in Lateral Navigation (5)

{% nativescript %}
![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-5.png?raw=true)

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
![ng-navigation-lateral-in-forward](../img/navigation-extended/ng-navigation-examples-page-4.png?raw=true)

Root TabView with multiple nested page router outlets. Each outlet in each tab should be navigated through its unique outlet name.

```
TabView (lateral navigation)
    > P-R-O (outlet name: "featured")
    > P-R-O (outlet name: "browse")
    > P-R-O (outlet name: "search")
```

[Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=0qyGbe)
{% endangular %}

## Nesting Lateral in Lateral (6)

{% nativescript %}
![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-6.png?raw=true)

TabView in a TabView (bottom/top).

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=soFhmN&v=6) (in progress)
TabView > TabView (>> Frames | Pages) + Pages (>> Frames)

> **TODO** Check if `tabTextFontSize` works for iOS
> **TODO** iosOverflowSafeArea="false" for the nested TaBvIEW
{% endnativescript %}

{% angular %}
[Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=ObeDAp)
{% endangular %}


 ## Multiple Navigation Scenarios

{% nativescript %}
![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-7.png?raw=true)

Make an example where lots of these are combined. For example, RadSidedrawer + Login leading to a Page with TabView and in one TabView there is another TabView. In another there might be a Frame that has a secondary Frame navigation.

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=fyNqnr&v=6)
RadSideDrawer > Frame 

> **TODO** The Second TabView is not appearing on iOS
> **TODO** Check if `tabTextFontSize` works for iOS
> **TODO** iosOverflowSafeArea="false" for the nested TabView
{% endnativescript %}

{% angular %}
[Playground Demo Angular]()
{% endangular %}