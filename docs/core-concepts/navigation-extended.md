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
![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-1.png?raw=true)

Simple forward navigation nesting - nesting a Frame in a Layout, for example to show an ad banner on top/bottom.

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=65Uk0F)
GridLayout  
    > Frame (forward navigation)
        >> Pages
    > Another Layout
{% endnativescript %}

{% angular %}
[Playground Demo Angular](https://play.nativescript.org/?template=play-ng&id=O9Hbts)
```
GridLayout  
    > P-R-O (forward navigation)
        >> Components
    > Another Layout (static place)
```
{% endangular %}

## Nesting Simple Lateral Navigation (2)

{% nativescript %}
![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-2.png?raw=true)

Simple lateral navigation nesting - nesting a TabView in a Layout, for example to show an ad banner on top/bottom.

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=IeOEzc)
```
GridLayout  
    > TabView (lateral navigation)
        >> Pages | Layouts
    > Another Layout (static place)
```
{% endnativescript %}

{% angular %}
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