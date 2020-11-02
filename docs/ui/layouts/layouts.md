---
title: Layout Process
description: Learn the basic principles of the NativeScript layout system - the layout properties, percentage support and iOS safe area support.
position: 30
tags: user interface layouts, nativescript layouts
slug: layouts
previous_url: /layouts
---

# User Interface Layout Process

NativeScript provides a recursive layout system that sizes and positions views on the screen.
Layout is the process of measuring and positioning of Layout containers and their child views. Layout is an intensive process whose speed and performance depend on the count of the children and the complexity of the layout container. For example, a simple layout container such as `AbsoluteLayout` might perform better than a more complex layout container, such as `GridLayout`.

Layout completes in two passes&mdash;a measure pass and a layout pass. To this end, each `View` provides a `measure` and `layout` methods. Additionally, each layout container provides its own `onMeasure` and `onLayout` to achieve its own specific layout.

> Looking for a fun and easy way to learn about NativeScript layout containers? Try the interactive tutorials available at [nslayouts.com](https://www.nslayouts.com/)!

## Measure Pass

During the measure pass, each `View` is measured to retrieve its desired size. The measure pass evaluates the following properties:

* width
* height
* minWidth
* minHeight
* visibility
* marginTop
* marginRight
* marginBottom
* marginLeft

## Layout Pass

During the layout pass, each `View` is placed in a specific layout slot. This slot is determined by the desired size of the view (retrieved from the measure pass) and the following properties:

- marginTop
- marginRight
- marginBottom
- marginLeft
- horizontalAlignment
- verticalAlignment

## Layout Properties

### Margins

The four margin properties (`marginTop`, `marginRight`, `marginBottom` and `marginLeft`) describe the distance between a view and its parent.

When you set margins through XML, you can choose between the following approaches.

* **Set one value**: Provide a single value that will be applied on all sides of the view.
* **Set two values**: Provide two values. The first value is applied to the top side, the second value is applied to the right side. Next, the first value is applied to the bottom and the second value to the left side (in that order).
* **Set four values**: Provide four values for each margin. The first value is applied to the top, the second value is applied to the right, the third value is applied to the bottom and the fourth value is applied to the left side (in that order).

### Paddings

The four padding properties (`paddingTop`, `paddingRight`, `paddingBottom` and `paddingLeft`) describe the distance between the layout container and its children.

When you set paddings through XML, you can choose between the following approaches.

* **Set one value**: Provide a single value that will be applied on all sides of the view.
* **Set two values**: Provide two values. The first value is applied to the top side, the second value is applied to the right side. Next, the first value is applied to the bottom and the second value to the left side (in that order).
* **Set four values**: Provide four values for each padding. The first value is applied to the top, the second value is applied to the right, the third value is applied to the bottom and the fourth value is applied to the left side (in that order).

### Alignments

Layout applies horizontal and vertical alignment only when an element is allocated more size than it needs.

The following table shows the valid values of `horizontalAlignment`.

| Member  | Description   |
| ------- | ------------- |
| left    | The view is aligned to the left of the layout slot of the parent element. |
| center  | The view is aligned to the center of the layout slot of the parent element. |
| right   | The view is aligned to the right of the layout slot of the parent element. |
| stretch | The view is stretched to fill the layout slot of the parent element; `width` takes precedence, if set. |

The following table shows the valid values of `verticalAlignment`.

| Member  | Description |
| ------- | ----------- |
| top     | The view is aligned to the top of the layout slot of the parent element. |
| center  | The view is aligned to the center of the layout slot of the parent element. |
| bottom  | The view is aligned to the bottom of the layout slot of the parent element. |
| stretch | The view is stretched to fill the layout slot of the parent element; `height` takes precedence, if set. |

## Percentage Support

NativeScript supports percentage values for `width`, `height` and `margin`.
When a layout pass begins, first the percent values are calculated based on parent available size. This means that on vertical `StackLayout` if you place two `Buttons` with `height='50%'` they will get all the available height (e.g., they will fill the `StackLayout` vertically.).
The same applies for margin properties. For example, if you set `marginLeft='5%'`, the element will have a margin that corresponds to 5% of the parent's available width.

## iOS Safe Area Support

The iOS `Safe Area` is a term that Apple introduced in iOS 11. It is the area of the screen that is free to use and won’t be obstructed by hardware and software parts of the system. The safe area is not a constant. It is affected by the notch, the rounded corners of the screen, the status bar and the home indicator, but also from parts of your application like the action bar and the tab bar. To get a better understanding refer to the [Apple docs](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/adaptivity-and-layout/).

Since version 5.0 NativeScript provides a default handling mechanism for the iOS `Safe Area`. The default behavior is that certain container `View` components (these that can have children) overflow the safe area and are laid out to the edges of the screen. These container components are:

* Layouts
* ListView
* ScrollView
* WebView
* Repeater

Internally, the workflow is as follows:

1. Measure pass - all components are measured in the safe area portion of the screen.
2. Layout pass - all components are laid out in full screen, but are inset to the safe area boundaries.
3. Layout pass - if the component borders the safe area, it is adjusted and expanded to the edges of the screen.

> **NOTE**: The above workflow can lead to containers being laid out with a bigger size than initially declared in the markup. You can prevent this behavior by setting the `iosOverflowSafeArea` property below to `false`.

### iosOverflowSafeArea Property

The above default behavior should provide good UX out of the box. Additionally, NativeScript 5.0 exposes a property `iosOverflowSafeArea` that can control how components handle the iOS `Safe Area`. Set this property value to `true` if you want the component to expand to the edges of the screen when it borders the safe area. Set it to `false` to explicitly prevent this behavior. The default value for container components is `true`. All other components are considered content that should be constrained to the safe area and default to `false`.

## Layouts

`LayoutBase` is the base class for all views that provide positioning of child elements.

You can use the various layout containers to position elements. They evaluate the base properties of `View` such as `width`, `height`, `minWidth` and alignments, and expose additional specific properties for positioning child views.

### Predefined Layouts

The following table shows predefined layouts that NativeScript provides.

| Layouts  | Description  | Screenshot |
| -------- | ------------ | ---------- |
| [FlexboxLayout][FlexboxLayout] | This layout is a non-conforming implementation of the [CSS Flexible Box Layout](https://www.w3.org/TR/css-flexbox-1/) | ![FlexboxLayout android](../img/gallery/android/flexboxLayoutPage.png "FlexboxLayout android")|
| [AbsoluteLayout][AbsoluteLayout] | This layout lets you set exact locations (left/top coordinates) for its children. | ![AbsoluteLayout android](../img/gallery/android/absoluteLayoutPage.png "AbsoluteLayout android")|
| [DockLayout][DockLayout] | This layout arranges its children at its outer edges and allows its last child to take up the remaining space. | ![DockLayout android](../img/gallery/android/dockLayoutPage.png "DockLayout android")|
| [GridLayout][GridLayout] | This layout defines a rectangular layout area that consists of columns and rows. | ![GridLayout android](../img/gallery/android/gridLayoutPage.png "GridLayout android")|
| [StackLayout][StackLayout] | This layout arranges its children horizontally or vertically. The direction is set with the orientation property. | ![StackLayout android](../img/gallery/android/stackLayoutPage.png "StackLayout android")|
| [WrapLayout][WrapLayout] | This layout positions its children in rows or columns, based on the orientation property, until the space is filled and then wraps them on a new row or column. | ![WrapLayout android](../img/gallery/android/wrapLayoutPage.png "WrapLayout android")|
