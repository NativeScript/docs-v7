---
title: Layouts
description: Learn the basic principles of designing and positioning the UI elements inside your apps.
position: 30
slug: layouts
previous_url: /layouts
---

# User Interface Layouts

NativeScript provides a recursive layout system which sizes and positions [views][views] on the screen.

* [Layout Process](#layout-process)
	* [Measure Pass](#measure-pass)
	* [Layout Pass](#layout-pass)
	* [Alignment](#alignment)
	* [Margins](#margins)
* [Layouts](#layouts)
	* [Layout Paddings](#layout-paddings)
	* [Predefined Layouts](#predefined-layouts)
* [Percent Support](#percentage-support)

## Layout Process

Layout is the process of measuring and positioning the child views of a [Layout][Layout] container. Layout is an intensive process whose speed and performance depend on the count of the children and the complexity of the layout container. For example, a simple layout container such as [AbsoluteLayout][AbsoluteLayout] might perform better than a more complex layout container, such as [GridLayout][GridLayout].

Layout completes in two passes - a measure pass and a layout pass. Every layout container provides its own `onMeasure()` and `onLayout()` methods to achieve its own specific layout.

### Measure Pass

During the measure pass, each [View][View] is measured to retrieve its desired size. The measure pass evaluates the following properties:

* width
* height
* minWidth
* minHeight
* visibility
* marginTop
* marginRight
* marginBotton
* marginLeft

### Layout Pass

During the layout pass, each [View][View] is placed in a specific layout slot. This slot is determined by the desired size of the view (retrieved from the measure pass) and the following properties:

- marginTop
- marginRight
- marginBottom
- marginLeft
- horizontalAlignment
- verticalAlignment

### Alignment

Layout applies horizontal and vertical alignment only when an element is allocated more size than it needs.

The following table shows the valid values of `horizontalAlignment`.

| Member  | Description   |
| ------- | ------------- |
| left    | The view is aligned to the left of the layout slot of the parent element. |
| center  | The view is aligned to the center of the layout slot of the parent element. |
| right   | The view is aligned to the right of the layout slot of the parent element. |
| stretch | The view is stretched to fill the layout slot of the parent element. `width` takes precedence, if set. |

The following table shows the valid values of `verticalAlignment`.

| Member  | Description |
| ------- | ----------- |
| top     | The view is aligned to the top of the layout slot of the parent element. |
| center  | The view is aligned to the center of the layout slot of the parent element. |
| bottom  | The view is aligned to the bottom of the layout slot of the parent element. |
| stretch | The view is stretched to fill the layout slot of the parent element. `height` takes precedence, if set. |

### Margins

The four margin properties (`marginTop`, `marginRight`, `marginBottom` and `marginLeft`) describe the distance between a view and its parent.

When you set margins through XML, you can choose between the following approaches.

* **Set one value**: Provide a single value which will be applied on all sides of the view.
* **Set two values**: Provide two values. The first value is applied to the top side, the second value is applied to the right side. Next, the first value is applied to the bottom and the second value - the left side (in that order).
* **Set four values**: Provide four values for each margin. The first value is applied to the top, the second value is applied to the right, the third value is applied to the bottom and the fourth value is applied to the left side (in that order).

## Layouts

`Layout` is the base class for all views that provide positioning of child elements.

You can use the various layout containers to position elements. They evaluate the base properties of [View][View] such as `width`, `height`, `minWidth` and alignments, and expose additional properties for positioning child views (such as the four paddings).

### Layout Paddings

The four padding properties (`paddingTop`, `paddingRight`, `paddingBottom` and `paddingLeft`) describe the distance between the layout container and its children.

When set paddings through XML, you can choose between the following approaches.

* **Set one value**: Provide a single value which will be applied on all sides of the view.
* **Set two values**: Provide two values. The first value is applied to the top side, the second value is applied to the right side. Next, the first value is applied to the bottom and the second value - the left side (in that order).
* **Set four values**: Provide four values for each padding. The first value is applied to the top, the second value is applied to the right, the third value is applied to the bottom and the fourth value is applied to the left side (in that order).

### Predefined Layouts

The following table shows predefined layouts that NativeScript provides.

| Layouts  | Description  | Screenshot |
| -------- | ------------ | ---------- |
| [AbsoluteLayout][AbsoluteLayout] | This layout lets you set exact locations (left/top coordinates) for its children. | ![AbsoluteLayout android]({{site.baseurl}}/img/gallery/android/absoluteLayoutPage.png "AbsoluteLayout android")|
| [DockLayout][DockLayout] | This layout arranges its children at its outer edges and allows its last child to take up the remaining space. | ![DockLayout android]({{site.baseurl}}/img/gallery/android/dockLayoutPage.png "DockLayout android")|
| [GridLayout][GridLayout] | This layout defines a rectangular layout area that consists of columns and rows. | ![GridLayout android]({{site.baseurl}}/img/gallery/android/gridLayoutPage.png "GridLayout android")|
| [StackLayout][StackLayout] | This layout arranges its children horizontally or vertically. The direction is set with the orientation property. | ![StackLayout android]({{site.baseurl}}/img/gallery/android/stackLayoutPage.png "StackLayout android")|
| [WrapLayout][WrapLayout] | This layout positions its children in rows or columns, based on the orientation property, until the space is filled and then wraps them on a new row or column. | ![WrapLayout android]({{site.baseurl}}/img/gallery/android/wrapLayoutPage.png "WrapLayout android")|

[views]: {%slug components %}
[View]: {{site.baseurl}}/ApiReference/ui/core/view/View.md
[Layout]: {{site.baseurl}}/ApiReference/ui/layouts/layout/Layout.md
[AbsoluteLayout]: {{site.baseurl}}/ApiReference/ui/layouts/absolute-layout/HOW-TO.md
[DockLayout]: {{site.baseurl}}/ApiReference/ui/layouts/dock-layout/HOW-TO.md
[GridLayout]: {{site.baseurl}}/ApiReference/ui/layouts/grid-layout/HOW-TO.md
[StackLayout]: {{site.baseurl}}/ApiReference/ui/layouts/stack-layout/HOW-TO.md
[WrapLayout]: {{site.baseurl}}/ApiReference/ui/layouts/wrap-layout/HOW-TO.md

### Percentage Support

> **NOTE:** Experimental feature v1.6+ 

With version 1.6.0 NativeScript support percentage values for `width`, `height` and `margins`.
When layout pass begins first the percent values are calculated based on parent available size. This means that on vertical `StackLayout` if you place two `Buttons` with `height='50%'` they will get all the available height (e.g. they will fill the `StackLayout` vertically.).
Same applies for margin properties. For example if you set `marginLeft='5%'` the element will have margin which corresponds to 5% from parent available width.
