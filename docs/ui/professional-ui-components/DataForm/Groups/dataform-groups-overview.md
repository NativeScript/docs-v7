---
title: Groups Overview
page_title: RadDataForm Groups | Progress NativeScript UI Documentation
description: This article explains how to show property values in groups and how to expand and collapse them.
slug: dataform-groups-overview
tags: raddataform, groups, dataform
position: 0
publish: true
---

# RadDataForm: Groups Overview

If you followed the [getting started]({% slug dataform-start-source %} "RadDataForm getting started") section, you now know how to edit an object's properties with `RadDataForm` for NativeScript. If your source object contains a lot of properties, it may be useful to show them in groups and optionally allow these groups to be collapsed. This article explains how.

* [Add Groups with XML](#add-groups-with-xml)
* [Groups Adjustments](#groups-adjustments)
* [Events](#events)
* [Add Groups with JSON](#add-groups-with-json)
* [References](#references)

#### Figure 1: Show the editors in groups in RadDataForm on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Groups-Android](/controls/NativeScript/DataForm/images/dataform-groups-overview-android.png "Groups in RadDataForm in Android") ![NativeScriptUI-DataForm-Groups-iOS](/controls/NativeScript/DataForm/images/dataform-groups-overview-ios.png "Groups in RadDataForm in iOS")

## Add groups with XML

Adding groups to `RadDataForm` and specifying which property belongs to each group is done very intuitively with the xml. Instead of adding each `EntityProperty` to `RadDataForm`'s {% typedoc_link classes:RadDataForm,member:properties %} collection, we add groups to `RadDataForm` and the we add each `EntityProperty` to its own group's collection of {% typedoc_link classes:PropertyGroup,member:properties %}. The following example demonstrates how.

#### Example 1: Add groups to RadDataForm

<snippet id='dataform-groups-xml'/>

## Groups Adjustments

Note the {% typedoc_link classes:PropertyGroup,member:collapsible %} property of the {% typedoc_link classes:PropertyGroup %} in the previous example. This allows you to specify whether the groups can be collapsed by tapping on their header. You can use the {% typedoc_link classes:PropertyGroup,member:collapsed %} property to control the current state of the group. If you want to hide the header, you can use PropertyGroup's {% typedoc_link classes:PropertyGroup,member:titleHidden %} property. To hide the whole group, you can use PropertyGroup's {% typedoc_link classes:PropertyGroup,member:hidden %} property. If you need to make changes to some of the properties of a {% typedoc_link classes:PropertyGroup %}, you can get it by its name through {% typedoc_link classes:RadDataForm,member:getGroupByName %} method and make your changes as shown in the following example:

#### Example 2: Adjust group's property through code-behind

<snippet id='dataform-groups-code'/>

## Events

{% typedoc_link classes:RadDataForm %} provides the following group related events:
- **groupUpdate** - fired when the a group is being setup and can be used for customizations of the native groups
- **groupExpanded** and **groupCollapsed** - to notify you when a group is collapsed or expanded, if the group supports collapsing. 

These events provide event arguments which have a property {% typedoc_link classes:DataFormEventData,member:groupName %} which you can use to determine the name of the group related with the event and a property {% typedoc_link classes:DataFormEventData,member:group %}, which can be used to get the native group element.

## Add groups with JSON

If you are using [JSON metadata](https://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/DataForm/GettingStarted/dataform-start-properties#adjust-editors-with-json) to setup the `RadDataForm`, you can also apply grouping to the properties. Just add `groupName` to each property inside the `propertyAnnotations` array.

#### Example 3: Sample JSON metadata for RadDataForm

```JSON
{
	"propertyAnnotations":
	[
		{
			"name": "city",
			"index": 3,
			"groupName": "Address",
			"editor": "Picker",
			"valuesProvider": ["New York", "Washington", "Los Angeles"]
		},
		{
			"name": "street",
			"index": 4,
			"groupName": "Address"
		},
		{	
			"name": "streetNumber",
			"index": 5,
			"editor": "Number",
			"groupName": "Address"
		},
		{
			"name": "age",
			"index": 1,
			"editor": "Number",
			"groupName": "Main Info"
		},
		{
			"name": "email",
			"index": 2,
			"editor": "Email",
			"groupName": "Main Info"
		},
		{
			"name": "name",
			"index": 0,
			"groupName": "Main Info"
		}
	]
}
```

> Please note that the groups are created this way, are not available for the getGroupByName method.

In order to achieve the same look as the group in the above image, we need to also make the new groups collapsible. This can be done through the native groups that are accessible through the `groupUpdate` event:

```
public onGroupUpdate(args) {
	if (ios) {
		let nativeGroup: TKEntityPropertyGroupView = args.group;
		nativeGroup.collapsible = true;
	} else {
		let nativeGroup: com.telerik.widget.dataform.visualization.ExpandableEditorGroup = args.group;
		nativeGroup.setExpandable(true);
	}
}
```

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/telerik/nativescript-ui-samples) repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Groups Example](https://github.com/telerik/nativescript-ui-samples/tree/master/dataform/app/examples/groups)
* [Runtime Updates Example](https://github.com/telerik/nativescript-ui-samples/tree/master/dataform/app/examples/runtime-updates)

Related articles you might find useful:

* [**Group Layouts**]({% slug dataform-groups-layouts %})
* [**Styling**]({% slug dataform-styling %})
