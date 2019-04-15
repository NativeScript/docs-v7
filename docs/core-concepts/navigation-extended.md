---
title: Navigation (extended examples)
description: Learn how to configure your application navigation architecture, navigate forward and backward and use TabView, Modal View and SideDrawer
position: 44
slug: extended-navigation
environment: nativescript
---

# Navigation Examples

## Nesting Simple Forward Navigation (1)

{% nativescript %}
![nested-forward-navigation](../img/navigation-extended/navigation-examples-page-1.png?raw=true)

Example for nesting simple forward navigation: a `Frame` in a layout, for example to show an advertisment banner on top/bottom.

```
GridLayout  
    > Frame (forward navigation)
        >> Pages
    > Another Layout
```

Code: [Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=65Uk0F)
{% endnativescript %}

{% angular %}
![nested-forward-navigation](../img/navigation-extended/ng-navigation-examples-page-1.png?raw=true)

Example for nesting simple forward navigation: A `page-router-outlet` (mentioned in this article also as *P-R-O*) in a layout, for example to show an advertisment banner on top/bottom.

```
GridLayout  
    > P-R-O (forward navigation)
        >> Components
    > Another Layout (static place)
```

Code: [Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=O9Hbts)
{% endangular %}

## Nesting Simple Lateral Navigation (2)

{% nativescript %}
![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-2.png?raw=true)

Example for nesting simple lateral navigation: a TabView in a layoutt, for example to show an advertisment banner on top/bottom.
```
GridLayout  
    > TabView (lateral navigation)
        >> Pages | Layouts
    > Another Layout (static place)
```

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=IeOEzc)

{% endnativescript %}

{% angular %}
![nested-lateral-navigation](../img/navigation-extended/ng-navigation-examples-page-2.png?raw=true)

Example for nesting simple lateral navigation: a TabView in a layoutt, for example to show an advertisment banner on top/bottom.
```
GridLayout  
    > TabView (lateral navigation)
        >> Layouts | P-R-Os
    > Another Layout (static place)
```
[Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=hBdlPB)
{% endangular %}

## Nesting Forward in Forward Navigation (3)

{% nativescript %}
![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-3.png?raw=true)

Nesting a Frame inside a Page/Frame, for example a secondary navigation level.

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=LMV24L) 
Frame > Page > Page (>> Frame (>>> Page) )
{% endnativescript %}

{% angular %}
[Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=VlXzEW)
{% endangular %}


## Nesting Lateral in Forward Navigation (4)

{% nativescript %}
![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-4.png?raw=true)

Nesting a TabView inside a Page/Frame, for example in a Login -> Page with a TabView scenario.

> **TODO**: Check the browse-page.xml for a specific iOS issue with non-hidden ActionBar on nested Frame.

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=1UMjJZ)
Frame > LoginPage > MainPage (>> TabView (>>> Frames) )
{% endnativescript %}

{% angular %}
[Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=HzFEFL)
{% endangular %}

## Nesting Forward in Lateral Navigation (5)

{% nativescript %}
![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-5.png?raw=true)

TabView with nested Frames - classic scenario

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=DrwJ2o)
TabView > Frames >> Pages
{% endnativescript %}

{% angular %}
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