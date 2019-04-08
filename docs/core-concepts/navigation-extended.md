---
title: Navigation (extended examples)
description: Learn how to configure your application navigation architecture, navigate forward and backward and use TabView, Modal View and SideDrawer
position: 44
slug: extended-navigation
environment: nativescript
---

# Navigation Examples

## Nesting Simple Forward Navigation (1)


![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-1.png?raw=true)

Simple forward navigation nesting - nesting a Frame in a Layout, for example to show an ad banner on top/bottom.

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=65Uk0F)
GridLayout > Frame (>> Pages) + Another Layout


## Nesting Simple Lateral Navigation (2)

![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-2.png?raw=true)

Simple lateral navigation nesting - nesting a TabView in a Layout, for example to show an ad banner on top/bottom.

> **TODO** On iOS, the scenario would require to nest the TabView in some layout e.g. in GridLayout. The same seems not to be needed for plain Frame (see Simple Forward Navigation (1) for such scenario)

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=IeOEzc)


## Nesting Forward in Forward Navigation (3)

![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-3.png?raw=true)

Nesting a Frame inside a Page/Frame, for example a secondary navigation level.

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=LMV24L)
Frame > Page > Page (>> Frame (>>> Page) )


## Nesting Lateral in Forward Navigation (4)

![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-4.png?raw=true)

Nesting a TabView inside a Page/Frame, for example in a Login -> Page with a TabView scenario.

> **TODO**: Check the browse-page.xml for a specific iOS issue with non-hidden ActionBar on nested Frame.


[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=1UMjJZ)
Frame > LoginPage > MainPage (>> TabView (>>> Frames) )


## Nesting Forward in Lateral Navigation (5)

![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-5.png?raw=true)

TabView with nested Frames - classic scenario

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=DrwJ2o)
TabView > Frames >> Pages


## Nesting Lateral in Lateral (6)

![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-6.png?raw=true)

TabView in a TabView (bottom/top).

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=soFhmN&v=6) (in progress)
TabView > TabView (>> Frames | Pages) + Pages (>> Frames)


> **TODO** The Second TabView is not appearing on iOS
> **TODO** Check if `tabTextFontSize` works for iOS
> **TODO** iosOverflowSafeArea="false" for the nested TaBvIEW

 ## Multiple Navigation Scenarios

![navigation-schema-backward](../img/navigation-extended/navigation-examples-page-7.png?raw=true)

Make an example where lots of these are combined. For example, RadSidedrawer + Login leading to a Page with TabView and in one TabView there is another TabView. In another there might be a Frame that has a secondary Frame navigation.

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=fyNqnr&v=6)
Drawer > Frame 