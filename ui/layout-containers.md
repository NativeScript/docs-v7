---
title: Layout Containers
description: Describes the available properties on each layout container and its children.
position: 4
slug: layout-containers
previous_url: /layout-containers
---

# Layout Containers
* [AbsoluteLayout](#absolutelayout)
* [DockLayout](#docklayout)
* [GridLayout](#gridlayout)
* [StackLayout](#stacklayout)
* [WrapLayout](#wraplayout)

## [AbsoluteLayout]("http://docs.nativescript.org/ApiReference/ui/layouts/absolute-layout/HOW-TO.md")
The AbsoluteLayout us the simplest layout in NativeScript. It uses absolute left-top coordinates to position its children. The AbsoluteLayout will not enforce any layout constraints on its children and will not resize them at runtime when its size changes.

### AbsoluteLayout Properties
None.

### Child Properties
| Property | Description |
| -------- | ------------|
| left     | Gets or sets the distance, in pixels, between the left edge of the child and the left edge of its parent AbsoluteLayout client area. |
| top     | Gets or sets the distance, in pixels, between the top edge of the child and the top edge of its parent AbsoluteLayout client area. |

### Sample
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
 <AbsoluteLayout width="210" height="210" style.backgroundColor="lightgray">
   <Label text="10, 10" left="10" top="10" width="90" height="90" backgroundColor="red"/>
   <Label text="110, 10" left="110" top="10" width="90" height="90" backgroundColor="green"/>
   <Label text="110, 110" left="110" top="110" width="90" height="90" backgroundColor="blue"/>
   <Label text="10, 110" left="10" top="110" width="90" height="90" backgroundColor="yellow"/>
 </AbsoluteLayout>
</Page>
```

![AbsoluteLayout](http://docs.nativescript.org/img/modules/layouts/absolute-layout.png "AbsoluteLayout")

### Sample (margin)
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <AbsoluteLayout width="210" height="210" style.backgroundColor="lightgray">
    <Label text="no margin" left="10" top="10" width="100" height="100" backgroundColor="red"/>
    <Label text="margin=`30`" left="10" top="10" margin="30" width="100" height="90" backgroundColor="green"/>
  </AbsoluteLayout>
</Page>
```

![AbsoluteLayout](http://docs.nativescript.org/img/modules/layouts/absolute-layout2.png "AbsoluteLayout")

## [DockLayout]("http://docs.nativescript.org/ApiReference/ui/layouts/dock-layout/HOW-TO.md")

### DockLayout Properties
| Property | Description |
| -------- | ------------|
| stretchLastChild | Gets or sets a value that indicates whether the last child element within a DockLayout stretches to fill the remaining available space. The default value is true. |

### Child Properties
| Property | Description |
| -------- | ------------|
| dock     | Specifies the Dock position of a child element that is inside a DockLayout. Possible values are `left`, `top`, `right` and `bottom` |

### Sample (stretchLastChild="false")
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <DockLayout width="210" height="210" style.backgroundColor="lightgray" stretchLastChild="false">
    <Label text="left" dock="left" width="60" backgroundColor="red"/>
    <Label text="top" dock="top" height="60" backgroundColor="green"/>
    <Label text="right" dock="right" width="60" backgroundColor="blue"/>
    <Label text="bottom" dock="bottom" height="60" backgroundColor="yellow"/>
  </DockLayout>
</Page>
```

![DockLayout1](http://docs.nativescript.org/img/modules/layouts/dock-layout1.png "DockLayout1")

### Sample (stretchLastChild="true")
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <DockLayout width="210" height="210" style.backgroundColor="lightgray" stretchLastChild="true">
    <Label text="left" dock="left" backgroundColor="red"/>
    <Label text="top" dock="top" backgroundColor="green"/>
    <Label text="right" dock="right" backgroundColor="blue"/>
    <Label text="bottom" dock="bottom" backgroundColor="yellow"/>
  </DockLayout>
</Page>
```

![DockLayout2](http://docs.nativescript.org/img/modules/layouts/dock-layout2.png "DockLayout2")

## [GridLayout]("http://docs.nativescript.org/ApiReference/ui/layouts/grid-layout/HOW-TO.md")

### GridLayout Properties
| Property | Description |
| -------- | ------------|
| columns  | A string value representing column widths delimited with commas. Column widths can be either an absolute `number`, `auto` or `*`. A `number` indicates an absolute column width, `auto` makes the column as wide as its widest child, and `*` makes the column occupy all available horizontal space. |
| rows  | A string value representing row heights delimited with commas. Row heights can be either an absolute `number`, `auto` or `*`. A `number` indicates an absolute row height, `auto` makes the row as high as its highest child, and `*` makes the row occupy all available vertical space. |

### Child Properties
| Property | Description |
| -------- | ------------|
| row      | Gets or sets a value that indicates which row child content within a GridLayout should appear in. |
| col      | Gets or sets a value that indicates which column child content within a GridLayout should appear in. |
| rowSpan  | Gets or sets a value that indicates the total number of rows that child content spans within a GridLayout. |
| colSpan  | Gets or sets a value that indicates the total number of columns that child content spans within a GridLayout. |

### Sample
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <GridLayout columns="50, auto, *" rows="50, auto, *" width="210" height="210" style.backgroundColor="lightgray" >
    <Label text="Label 1" row="0" col="0" backgroundColor="red"/>
    <Label text="Label 2" row="0" col="1" colSpan="2" backgroundColor="green"/>
    <Label text="Label 3" row="1" col="0" rowSpan="2" backgroundColor="blue"/>
    <Label text="Label 4" row="1" col="1" backgroundColor="yellow"/>
    <Label text="Label 5" row="1" col="2" backgroundColor="orange"/>
    <Label text="Label 6" row="2" col="1" backgroundColor="pink"/>
    <Label text="Label 7" row="2" col="2" backgroundColor="purple"/>
  </GridLayout>
</Page>
```

![GridLayout](http://docs.nativescript.org/img/modules/layouts/grid-layout.png "GridLayout")

## [StackLayout]("http://docs.nativescript.org/ApiReference/ui/layouts/stack-layout/HOW-TO.md")

### StackLayout Properties
| Property    | Description |
| ----------- | ------------|
| orientation | Gets or sets a value indicating whether child items should be stacked in the horizontal or vertical direction. Possible values are `vertical` and `horizontal`. The default value is `vertical`. |

### Child Properties
None.

### Sample (orientation="vertical")
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <StackLayout orientation="vertical" width="210" height="210" style.backgroundColor="lightgray">
    <Label text="Label 1" width="50" height="50" backgroundColor="red"/>
    <Label text="Label 2" width="50" height="50" backgroundColor="green"/>
    <Label text="Label 3" width="50" height="50" backgroundColor="blue"/>
    <Label text="Label 4" width="50" height="50" backgroundColor="yellow"/>
  </StackLayout>
</Page>
```

![StackLayout](http://docs.nativescript.org/img/modules/layouts/stack-layout1.png "StackLayout")

### Sample (orientation="horizontal")
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <StackLayout orientation="horizontal" width="210" height="210" style.backgroundColor="lightgray">
    <Label text="Label 1" width="50" height="50" backgroundColor="red"/>
    <Label text="Label 2" width="50" height="50" backgroundColor="green"/>
    <Label text="Label 3" width="50" height="50" backgroundColor="blue"/>
    <Label text="Label 4" width="50" height="50" backgroundColor="yellow"/>
  </StackLayout>
</Page>
```

![StackLayout](http://docs.nativescript.org/img/modules/layouts/stack-layout2.png "StackLayout")

## [WrapLayout]("http://docs.nativescript.org/ApiReference/ui/layouts/wrap-layout/HOW-TO.md")

### WrapLayout Properties
| Property    | Description |
| ----------- | ------------|
| orientation | Gets or sets a value indicating the flow direction. If orientation is `horizontal` items are arranged in rows. If orientation is `vertical` items are arranged in columns. The default value is `horizontal`. |
| itemWidth   | Gets or sets the width used to measure and layout each child. Default value is Number.NaN which does not restrict children. |
| itemHeight  | Gets or sets the height used to measure and layout each child. Default value is Number.NaN which does not restrict children. |

### Child Properties
None.

### Sample (orientation="horizontal")
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <WrapLayout orientation="horizontal" width="210" height="210" style.backgroundColor="lightgray">
    <Label text="Label 1" width="70" height="70" backgroundColor="red"/>
    <Label text="Label 2" width="70" height="70" backgroundColor="green"/>
    <Label text="Label 3" width="70" height="70" backgroundColor="blue"/>
    <Label text="Label 4" width="70" height="70" backgroundColor="yellow"/>
  </WrapLayout>
</Page>
```

![WrapLayout](http://docs.nativescript.org/img/modules/layouts/wrap-layout1.png "WrapLayout")

### Sample (orientation="vertical")
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <WrapLayout orientation="vertical" width="210" height="210" style.backgroundColor="lightgray">
    <Label text="Label 1" width="70" height="70" backgroundColor="red"/>
    <Label text="Label 2" width="70" height="70" backgroundColor="green"/>
    <Label text="Label 3" width="70" height="70" backgroundColor="blue"/>
    <Label text="Label 4" width="70" height="70" backgroundColor="yellow"/>
  </WrapLayout>
</Page>
```

![WrapLayout](http://docs.nativescript.org/img/modules/layouts/wrap-layout2.png "WrapLayout")

### Sample (itemWidth="30" itemHeight="30")
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <WrapLayout itemWidth="30" itemHeight="30" width="210" height="210" style.backgroundColor="lightgray">
    <Label text="Label 1" width="70" height="70" backgroundColor="red"/>
    <Label text="Label 2" width="70" height="70" backgroundColor="green"/>
    <Label text="Label 3" width="70" height="70" backgroundColor="blue"/>
    <Label text="Label 4" width="70" height="70" backgroundColor="yellow"/>
  </WrapLayout>
</Page>
```

![WrapLayout](http://docs.nativescript.org/img/modules/layouts/wrap-layout3.png "WrapLayout")
