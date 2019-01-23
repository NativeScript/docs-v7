---
title: Read Only
page_title: RadDataForm ReadOnly | Progress NativeScript UI Documentation
description: An article which demonstrates how to disable editing in RadDataForm for NativeScript.
slug: dataform-readonly
tags: raddataform, readonly, dataform, disabled
position: 6
publish: true
---

# RadDataForm: Read Only

If you followed the [getting started]({% slug dataform-start-source %} "RadDataForm getting started") section, you now know how to edit an object's properties with `RadDataForm` for NativeScript. This article will explain how to disable editing in the editors.

* [Disable All Editors](#disable-all-editors)
* [Disable Specific Editors](#disable-specific-editors)
* [References](#references)

## Disable All Editors

`RadDataForm` has a {% typedoc_link classes:RadDataForm,member:isReadOnly %} property which allows you to disable all of its editors. 

#### Example 1: Make all editors read only

<snippet id='dataform-form-readonly-xml'/>

#### Figure 1: RadDataForm in read only mode on Android (left) and iOS (right)

![NativeScriptUI-DataForm-ReadOnly-Android](/controls/NativeScript/DataForm/images/dataform-readonly-android.png "ReadOnly mode of RadDataForm in Android") ![NativeScriptUI-DataForm-ReadOnly-iOS](/controls/NativeScript/DataForm/images/dataform-readonly-ios.png "ReadOnly mode of RadDataForm in iOS")

## Disable Specific Editors

If you need to disable only a specific editor, you can use {% typedoc_link classes:EntityProperty %}'s {% typedoc_link classes:EntityProperty,member:readOnly %} property.

#### Example 2: Make only a specific editor read only

<snippet id='dataform-property-readonly-xml'/>

## References
Want to see these scenarios in action?
Check our [SDK Examples](https://github.com/telerik/nativescript-ui-samples) repository on GitHub. You will find these and many other practical examples with NativeScript UI.

* [ReadOnly Example](https://github.com/telerik/nativescript-ui-samples/tree/master/dataform/app/examples/editors/readonly)
* [Editors Common Example](https://github.com/telerik/nativescript-ui-samples/tree/master/dataform/app/examples/editors)

Related articles you might find useful:

* [**Styling**]({% slug dataform-styling %})
* [**Image Labels**]({% slug dataform-imagelabels %})
