---
title: Layout Containers
description: Describes the available properties on each layout container and its children.
position: 40
slug: layout-containers
previous_url: /layout-containers
---

# Layout Containers
* [AbsoluteLayout](#absolutelayout)
* [DockLayout](#docklayout)
* [GridLayout](#gridlayout)
* [StackLayout](#stacklayout)
* [WrapLayout](#wraplayout)

## [AbsoluteLayout]({%ns_cookbook ui/layouts/absolute-layout%})
The AbsoluteLayout is the simplest layout in NativeScript. It uses absolute left-top coordinates to position its children. The AbsoluteLayout will not enforce any layout constraints on its children and will not resize them at runtime when its size changes.

### AbsoluteLayout Properties
None.

### Child Properties
| Property | Description |
| -------- | ------------|
| left     | Gets or sets the distance, in pixels, between the left edge of the child and the left edge of its parent AbsoluteLayout client area. |
| top     | Gets or sets the distance, in pixels, between the top edge of the child and the top edge of its parent AbsoluteLayout client area. |

### Sample
{% nativescript %}
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
{% endnativescript %}
{% angular %}
{%snippet absolute-layout%}
{% endangular %}

![AbsoluteLayout](../img/modules/layouts/absolute-layout.png "AbsoluteLayout")

### Sample (margin)
{% nativescript %}
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <AbsoluteLayout width="210" height="210" style.backgroundColor="lightgray">
    <Label text="no margin" left="10" top="10" width="100" height="100" backgroundColor="red"/>
    <Label text="margin=`30`" left="10" top="10" margin="30" width="100" height="90" backgroundColor="green"/>
  </AbsoluteLayout>
</Page>
```
{% endnativescript %}
{% angular %}
{%snippet absolute-layout-margin%}
{% endangular %}

![AbsoluteLayout](../img/modules/layouts/absolute-layout2.png "AbsoluteLayout")

## [DockLayout]({%ns_cookbook ui/layouts/dock-layout%})
The DockLayout is a layout that provides a docking mechanism for child elements to the left, right, top, bottom or center of the layout. To define the docking side of a child element, use its `dock` property. To dock a child element to the center of the DockLayout, it must be the last child of the DockLayout and the `stretchLastChild` property of the DockLayout must be set to `true`.

### DockLayout Properties
| Property | Description |
| -------- | ------------|
| stretchLastChild | Gets or sets a value that indicates whether the last child element within a DockLayout stretches to fill the remaining available space. The default value is `true`. |

### Child Properties
| Property | Description |
| -------- | ------------|
| dock     | Specifies the Dock position of a child element that is inside a DockLayout. Possible values are `left`, `top`, `right` and `bottom`. |

### Sample (stretchLastChild="false")
{% nativescript %}
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
{% endnativescript %}
{% angular %}
{%snippet dock-layout%}
{% endangular %}

![DockLayout](../img/modules/layouts/dock-layout1.png "DockLayout1")

### Sample (stretchLastChild="true")
{% nativescript %}
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
{% endnativescript %}
{% angular %}
{%snippet dock-layout-stretch-last%}
{% endangular %}

![DockLayout](../img/modules/layouts/dock-layout2.png "DockLayout1")

### Sample (multiple child elements on one side)
{% nativescript %}
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <DockLayout width="210" height="210" style.backgroundColor="lightgray" stretchLastChild="true">
    <Label text="left1" dock="left" backgroundColor="red"/>
    <Label text="left2" dock="left" backgroundColor="green"/>
    <Label text="left3" dock="left" backgroundColor="blue"/>
    <Label text="last child" backgroundColor="yellow"/>
  </DockLayout>
</Page>
```
{% endnativescript %}
{% angular %}
{%snippet dock-layout-one-side%}
{% endangular %}

![DockLayout](../img/modules/layouts/dock-layout3.png "DockLayout2")

## [GridLayout]({%ns_cookbook ui/layouts/grid-layout%})
The GridLayout is a layout that arranges its child elements in a table structure of rows and columns. A cell can contain multiple child elements, they can span over multiple rows and columns, and even overlap each other. The GridLayout has one column and one row by default. To add additional columns and rows, you have to specify column definition items (separated by commas) to the `columns` property and row definition items (separated by commas) to the `rows` property of the GridLayout. The width of a column and the height of a row can be specified as an absolute amount of pixels, as a percentage of the available space or automatically:
- **Absolute**: Fixed size of pixels.
- **Star (\*)**: Takes as much space as available (after filling all auto and fixed sized columns), proportionally divided over all star-sized columns. So 3*/7* means the same as 30*/70*.
- **Auto**: Takes as much space as needed by the contained child element(s).

### GridLayout Properties
| Property | Description |
| -------- | ------------|
| columns  | A string value representing column widths delimited with commas. Column widths can be either an absolute `number`, `auto` or `*`. A `number` indicates an absolute column width, `auto` makes the column as wide as its widest child, and `*` makes the column occupy all available horizontal space. |
| rows  | A string value representing row heights delimited with commas. Row heights can be either an absolute `number`, `auto` or `*`. A `number` indicates an absolute row height, `auto` makes the row as high as its highest child, and `*` makes the row occupy all available vertical space. |

### Child Properties
| Property | Description |
| -------- | ------------|
| row      | Gets or sets a value that indicates which row child content within a GridLayout it should appear in. |
| col      | Gets or sets a value that indicates which column child content within a GridLayout it should appear in. |
| rowSpan  | Gets or sets a value that indicates the total number of rows that child content spans within a GridLayout. |
| colSpan  | Gets or sets a value that indicates the total number of columns that child content spans within a GridLayout. |

### Sample
{% nativescript %}
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
{% endnativescript %}
{% angular %}
{%snippet grid-layout-sample%}
{% endangular %}

![GridLayout](../img/modules/layouts/grid-layout.png "GridLayout")

### Sample (star-sizing)
- Columns: One star plus two stars is equal to three stars. (\* + 2\* = 3\*). Divide GridLayout width (300) by 3 to get 100. So first column is 1 x 100 = 100 pixels wide and second column is 2 x 100 = 200 pixels wide. 100 + 200 = 300.
- Rows: Two stars plus three stars is equal to five stars. (2\* + 3\* = 5\*). Divide GridLayout height (300) by 5 to get 60. So first row is 2 x 60 = 120 pixels high and second row is 3 x 60 = 180 pixels high. 120 + 180 = 300.
{% nativescript %}
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <GridLayout columns="*,2*" rows="2*,3*" width="300" height="300" style.backgroundColor="lightgray" >
    <Label text="Label 1" col="0" row="0" backgroundColor="red"/>
    <Label text="Label 2" col="1" row="0" backgroundColor="green"/>
    <Label text="Label 3" col="0" row="1" backgroundColor="blue"/>
    <Label text="Label 4" col="1" row="1" backgroundColor="yellow"/>
  </GridLayout>
</Page>
```
{% endnativescript %}
{% angular %}
{%snippet grid-layout-star%}
{% endangular %}

![GridLayout](../img/modules/layouts/grid-layout1.png "GridLayout")

### Sample (fixed and auto)
- The first column and the first row are `auto`. This means that they are measured with infinite available space and then sized to their content.
- The second column and the second row have fixed sizes of 30 and 50 respectively. They will be exactly this wide/high regardless of their children's dimensions. They would still be exactly this wide/high even if they don't have any children.
{% nativescript %}
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <GridLayout columns="100,auto" rows="100,auto" width="210" height="210" style.backgroundColor="lightgray" >
    <Label text="Label 1" col="0" row="0" backgroundColor="red"/>
    <Label text="Label 2" col="1" row="0" backgroundColor="green"/>
    <Label text="Label 3" col="0" row="1" backgroundColor="blue"/>
    <Label text="Label 4" col="1" row="1" backgroundColor="yellow"/>
  </GridLayout>
</Page>
```
{% endnativescript %}
{% angular %}
{%snippet grid-layout-fexed-auto%}
{% endangular %}

![GridLayout](../img/modules/layouts/grid-layout2.png "GridLayout")

### Sample (no width and horizontalAlignment != stretch)
When the GridLayout has no explicit `width` set and its `horizontalAlignment` is not `stretch`, the star columns will not occupy the entire available space (200 from parent StackLayout).

{% nativescript %}
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <StackLayout width="200" height="200" style.backgroundColor="palegreen">
    <GridLayout columns="*,2*" horizontalAlignment="left" verticalAlignment="top" style.backgroundColor="lightgray" >
      <Label text="Label 1" col="0" backgroundColor="red"/>
      <Label text="Label 2" col="1" backgroundColor="green"/>
    </GridLayout>
  </StackLayout>
</Page>
```
{% endnativescript %}
{% angular %}
{%snippet grid-layout-no-width%}
{% endangular %}

![GridLayout](../img/modules/layouts/grid-layout3.png "GridLayout")

### Sample (column stretching)
Label 3 has a fixed width of 150 pixels. Label 1 is given more space than it actually needs, because Label 3 stretches the auto column.
{% nativescript %}
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <GridLayout columns="auto,100" rows="auto,auto" width="300" height="300" style.backgroundColor="lightgray" >
    <Label text="Label 1" col="0" row="0" backgroundColor="red"/>
    <Label text="Label 2" col="1" row="0" backgroundColor="green"/>
    <Label text="Label 3" width="150" col="0" row="1" backgroundColor="blue"/>
  </GridLayout>
</Page>
```
{% endnativescript %}
{% angular %}
{%snippet grid-layout-column-stretch%}
{% endangular %}

![GridLayout](../img/modules/layouts/grid-layout4.png "GridLayout")

### Sample (complex)
`Image` has fixed width and height of 72 and span the both rows. For the first `Label` is given more space by using `colSpan="2"`. Third `Lable` is given more space than it actually needs, because fourth `Label` stretches the auto column.

{% nativescript %}
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <GridLayout columns="auto, *, auto" rows="auto, 25" style.verticalAlignment="top" style.backgroundColor="lightgray">
    <Image src="~/cute.jpg" rowSpan="2" width="72" height="72" margin="3" style.verticalAlignment="top"/>
    <Label text="My cat loves the camera" textWrap="true" col="1" colSpan="2" minHeight="50" style.fontSize="20" margin="3"/>
    <Label text="John Smith" col="1" row="1" style.fontSize="14" style.horizontalAlignment="left" style.verticalAlignment="bottom" margin="3"/>
    <Label text="comments: 26" col="2" row="1" style.color="#10C2B0" style.fontSize="14" style.verticalAlignment="bottom" margin="3"/>
  </GridLayout>
</Page>
```
{% endnativescript %}
{% angular %}
{%snippet grid-layout-complex%}
{% endangular %}

![GridLayout](../img/modules/layouts/grid-layout5.png "GridLayout")


### Sample (Create grid dynamically via code behind)
```TypeScript
import { GridLayout, ItemSpec, GridUnitType } from "ui/layouts/grid-layout"

//Grid wrapper
var grid = new GridLayout();

//Create title Label and add is as a child to our grid
let titleLabel = new Label();
titleLabel.text = "NativeScript";
grid.addChild(titleLabel);

//Create info Label and add is as a child to our grid
let infoLabel = new Label();
infoLabel.text = "Truly native mobile apps";
infoLabel.backgroundColor = new Color("gray");
grid.addChild(infoLabel);

//Create the share button and add is as a child to our grid
let shareButton = new Button();
shareButton.text = "Share This!";
grid.addChild(shareButton);

// Add Grid Rows as if rows="*, 100, auto" cols="250, *"

// * - occupy the remaining available space 
grid.addRow(new ItemSpec(1, GridUnitType.star));

// 100 - fixed column width. If elements in this columns wants to be more - we will coerce their width to the column width.
grid.addRow(new ItemSpec(100, GridUnitType.pixel));

// auto - the column width will be the width of the widest element in that column.
grid.addRow(new ItemSpec(1, GridUnitType.auto));

grid.addColumn(new ItemSpec(250, GridUnitType.pixel));
grid.addColumn(new ItemSpec(1, GridUnitType.star));

// Assign views to their row (if not set default row is 0)
GridLayout.setRow(titleLabel, 0); // titleLabel set to row 0
GridLayout.setRow(infoLabel, 1);  // infoLabel set to row 1
GridLayout.setRow(shareButton, 2);// shareButton set to row 2

// Assign views to their col (if not set default column is 0)
GridLayout.setColumn(titleLabel, 0); // titleLabel set to column 0
GridLayout.setColumn(infoLabel, 0);  // infoLabel set to column 0
GridLayout.setColumn(shareButton, 1);// shareButton set to column 1

// Assign ColumnSpan for views 
GridLayout.setColumnSpan(infoLabel, 2); // infoLabel set with columnSpan = 2

```

## [StackLayout]({%ns_cookbook ui/layouts/stack-layout%})
The StackLayout stacks its child elements below or beside each other, depending on its orientation. It is very useful to create lists.

### StackLayout Properties
| Property    | Description |
| ----------- | ------------|
| orientation | Gets or sets a value indicating whether the child items should be stacked in the horizontal or vertical direction. Possible values are `vertical` and `horizontal`. The default value is `vertical`. |

### Child Properties
None.

### Sample (orientation="vertical")
{% nativescript %}
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
{% endnativescript %}
{% angular %}
{%snippet stack-layout-vertical%}
{% endangular %}

![StackLayout](../img/modules/layouts/stack-layout1.png "StackLayout")

### Sample (orientation="horizontal")
{% nativescript %}
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
{% endnativescript %}
{% angular %}
{%snippet stack-layout-horizontal%}
{% endangular %}

![StackLayout](../img/modules/layouts/stack-layout2.png "StackLayout")

### Sample (horizontal alignment of children)
{% nativescript %}
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <StackLayout orientation="vertical" width="210" height="210" style.backgroundColor="lightgray">
    <Label text="Label 1" horizontalAlignment="left" backgroundColor="red"/>
    <Label text="Label 2" horizontalAlignment="center" backgroundColor="green"/>
    <Label text="Label 3" horizontalAlignment="right" backgroundColor="blue"/>
    <Label text="Label 4" horizontalAlignment="stretch" backgroundColor="yellow"/>
  </StackLayout>
</Page>
```
{% endnativescript %}
{% angular %}
{%snippet stack-layout-vertical-align%}
{% endangular %}

![StackLayout](../img/modules/layouts/stack-layout3.png "StackLayout")

### Sample (vertical alignment of children)
{% nativescript %}
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
  <StackLayout orientation="horizontal" width="210" height="210" style.backgroundColor="lightgray">
    <Label text="Label 1" verticalAlignment="top" backgroundColor="red"/>
    <Label text="Label 2" verticalAlignment="center" backgroundColor="green"/>
    <Label text="Label 3" verticalAlignment="bottom" backgroundColor="blue"/>
    <Label text="Label 4" verticalAlignment="stretch" backgroundColor="yellow"/>
  </StackLayout>
</Page>
```
{% endnativescript %}
{% angular %}
{%snippet stack-layout-horizontal-align%}
{% endangular %}

![StackLayout](../img/modules/layouts/stack-layout4.png "StackLayout")

## [WrapLayout]({%ns_cookbook ui/layouts/wrap-layout%})
The WrapLayout is similar to the StackLayout, but it does not just stack all child elements to one column/row, it wraps them to new columns/rows if no space is left. The WrapLayout is often used with items of the same size, but this is not a requirement.
### WrapLayout Properties
| Property    | Description |
| ----------- | ------------|
| orientation | Gets or sets a value indicating the flow direction. If orientation is `horizontal`, items are arranged in rows. If orientation is `vertical`, items are arranged in columns. The default value is `horizontal`. |
| itemWidth   | Gets or sets the width used to measure and layout each child. Default value is Number.NaN, which does not restrict children. |
| itemHeight  | Gets or sets the height used to measure and layout each child. Default value is Number.NaN, which does not restrict children. |

### Child Properties
None.

### Sample (orientation="horizontal")
{% nativescript %}
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
{% endnativescript %}
{% angular %}
{%snippet wrap-layout-horizontal%}
{% endangular %}

![WrapLayout](../img/modules/layouts/wrap-layout1.png "WrapLayout")

### Sample (orientation="vertical")
{% nativescript %}
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
{% endnativescript %}
{% angular %}
{%snippet wrap-layout-vertical%}
{% endangular %}

![WrapLayout](../img/modules/layouts/wrap-layout2.png "WrapLayout")

### Sample (itemWidth="30" itemHeight="30")
{% nativescript %}
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
{% endnativescript %}
{% angular %}
{%snippet wrap-layout-item%}
{% endangular %}

![WrapLayout](../img/modules/layouts/wrap-layout3.png "WrapLayout")
