---
title: Navigation (extended examples)
description: Learn how to configure your application navigation architecture, navigate forward and backward and use TabView, Modal View and SideDrawer
position: 44
slug: extended-navigation
environment: nativescript
---

# Navigation Examples

## Nesting Simple Forward Navigation (1)
Simple forward navigation nesting - nesting a Frame in a Layout, for example to show an ad banner on top/bottom.

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=65Uk0F&v=5)


## Nesting Simple Lateral Navigation (2)
Simple lateral navigation nesting - nesting a TabView in a Layout, for example to show an ad banner on top/bottom.

> **TODO** On iOS, the scenario would require to nest the TabView in some layout e.g. in GridLayout. The same seems not to be needed for plain Frame (see Simple Forward Navigation (1) for such scenario)

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=IeOEzc)

or

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=DrwJ2o&_ga=2.243685441.533655497.1554097996-1456678682.1516707790&v=8)


## Nesting Forward in Forward Navigation (3)
Nesting a Frame inside a Page/Frame, for example a secondary navigation level.

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=LMV24L&v=2)


## Nesting Lateral in Forward Navigation (4)
Nesting a TabView inside a Page/Frame, for example in a Login -> Page with a TabView scenario.

> **TODO**: Check the browse-page.xml for a specific iOS issue with non-hidden ActionBar on nested Frame.

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=1UMjJZ&v=4)


## Nesting Forward in Lateral Navigation (5)
TabView with nested Frames - classic scenario

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=DrwJ2o&v=12)


## Nesting Lateral in Lateral (6)
 TabView in a TabView (bottom/top) or TabView in a RadSidedrawer.

 [Playground Demo TypeScript]()


## Multiple Navigation Scenarios
Make an example where lots of these are combined. For example, RadSidedrawer + Login leading to a Page with TabView and in one TabView there is another TabView. In another there might be a Frame that has a secondary Frame navigation.

[Playground Demo TypeScript](https://play.nativescript.org/?template=play-tsc&id=fyNqnr&v=5)