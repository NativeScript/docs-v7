---
title: Group Layouts
page_title: RadDataForm Group Layouts | Progress NativeScript UI Documentation
description: This article explains how the change the layout of the groups in RadDataForm for NativeScript.
slug: dataform-groups-layouts
tags: raddataform, styling, dataform, layout
position: 1
publish: true
---

# RadDataForm: Group Layouts

If you followed the [getting started]({% slug dataform-start-source %} "RadDataForm getting started") section, you now know how to edit an object's properties with `RadDataForm` for NativeScript. The [Groups Overview]({% slug dataform-groups-overview %} "RadDataForm Groups Overview") article demonstrated how to show the editors in groups. This article will show you how to change the layout of each group in the {% typedoc_link classes:RadDataForm,member:groups%}.

* [Overview](#overview)
* [Stack Layout](#stack-layout)
* [Grid Layout](#grid-layout)
* [References](#references)

## Overview

The available layouts are:

- **DataFormStackLayout** (default): This layout places all of the editors in a {% typedoc_link classes:PropertyGroup%} vertically ordered by the value of the {% typedoc_link classes:EntityProperty,member:index%} of their {% typedoc_link classes:EntityProperty%}.
- **DataFormGridLayout**: This layout places all of the editors in a {% typedoc_link classes:PropertyGroup%} in grid ordered by the values of the {% typedoc_link classes:EntityProperty,member:index%} and {% typedoc_link classes:EntityProperty,member:columnIndex%} of their {% typedoc_link classes:EntityProperty%}. 

## Stack Layout

This is the default layout. If you declare each {% typedoc_link classes:PropertyGroup%} in {% typedoc_link classes:RadDataForm%} without setting its {% typedoc_link classes:PropertyGroup,member:layout%} the default **DataFormStackLayout** will be used and `RadDataForm` will look like this:

#### Figure 1: This is how the editors in Stack Layout Group look in RadDataForm on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Stack-Layout-Android](../../../img/ns_ui/dataform-groups-layouts-01-android.png "DataFormStackLayout in Android") ![NativeScriptUI-DataForm-Stack-Layout-iOS](../../../img/ns_ui/dataform-groups-layouts-01-ios.png "DataFormStackLayout in iOS")

## Grid Layout

When you want to show more than one editor on one row, you can change the layout of a {% typedoc_link classes:PropertyGroup%} to a {% typedoc_link classes:DataFormGridLayout%}. 

In order to specify where each editor is placed in the {% typedoc_link classes:DataFormGridLayout%} you have to specify the {% typedoc_link classes:EntityProperty,member:index%} and {% typedoc_link classes:EntityProperty,member:columnIndex%} of its {% typedoc_link classes:EntityProperty%}. The next example demonstrates how you can achieve a Grid Layout with 2 rows and 2 columns:

#### Example 1: Change the layout of a group to Grid Layout

<snippet id='dataform-grid-layout-xml'/>

#### Figure 2: This is how the editors in Grid Layout Group look in RadDataForm on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Stack-Layout-Android](../../../img/ns_ui/dataform-groups-layouts-02-android.png "DataFormStackLayout in Android") ![NativeScriptUI-DataForm-Stack-Layout-iOS](../../../img/ns_ui/dataform-groups-layouts-02-ios.png "DataFormStackLayout in iOS")

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/telerik/nativescript-ui-samples) repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Layouts Example](https://github.com/telerik/nativescript-ui-samples/tree/master/dataform/app/examples/layouts)

Related articles you might find useful:

* [**Groups Overview**]({% slug dataform-groups-overview %})
* [**Styling**]({% slug dataform-styling %})
