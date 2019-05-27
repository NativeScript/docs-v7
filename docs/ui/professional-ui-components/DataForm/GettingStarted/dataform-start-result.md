---
title: Get the Result
page_title: RadDataForm Get the Result | Progress NativeScript UI Documentation
description: This article explains how to get the result from the edits of the source object made by the RadDataForm editors
slug: dataform-start-result
tags: raddataform, gettingstarted, dataform, result, commit, nativescript, professional, ui
position: 2
publish: true
---

# RadDataForm - Get the Result

If you followed the articles about [providing the source]({% slug dataform-start-source %} "RadDataForm provide source") and [describing the properties]({% slug dataform-start-properties %} "RadDataForm describe properties"), you now know how to edit an object's properties with `RadDataForm` for NativeScript. Now to get the result of these modifications, you need to commit the modifications and get the updated object.

* [Commit Changes](#commit-changes)
* [Commit Modes](#commit-modes)
* [Commit Events](#commit-events)
* [References](#references)

## Commit Changes

When you set the `source` property of `RadDataForm`, an editor is created for each of the properties of the source object and the values of these properties are loaded into the corresponding editor. When you make changes to the values of the editors, they are not necessarily immediately saved in the source object. The changes are saved when the values are validated (if there are validators) and then committed. To commit a value in the context of `RadDataForm` means to save the current editor value in the source object. When this commit happens is determined by the value of the {% typedoc_link classes:RadDataForm,member:commitMode %} property.

## Commit Modes

The commit modes in `RadDataForm` define when the changes in the editors will be reflected in the source object. You can set your preferred value to the {% typedoc_link classes:RadDataForm,member:commitMode %} property. Here are the options:

* {% typedoc_link enums:DataFormCommitMode,member:Immediate %}: This is the default mode. All changes are committed immediately when the editor's value is changed.
* {% typedoc_link enums:DataFormCommitMode,member:OnLostFocus %}: The changes are committed when another editor gets focused.
* {% typedoc_link enums:DataFormCommitMode,member:Manual %}: The changes are committed only when the {% typedoc_link classes:RadDataForm,member:commitAll %} or the {% typedoc_link classes:RadDataForm,member:validateAndCommitAll %} methods is called.

Once the modifications are committed the source object will be updated so you can use it to check the result. You can also use the {% typedoc_link classes:RadDataForm,member:editedObject %} property of `RadDataForm` which returns a stringified JSON representation of the modified object.
When the commit is **Manual**, the commit happens when one of the {% typedoc_link classes:RadDataForm,member:commitAll %} or {% typedoc_link classes:RadDataForm,member:validateAndCommitAll %} methods is called. The first is of type `void` while the second returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">Promise</a> which will be resolved with a boolean value which is the result from the validation. When there is no validation, the two methods do not differ significantly. When there is validation, you need to ensure that the values are validated before calling `commitAll` or you can use `validateAndCommitAll` which will do the both. You can read more about the validation in `RadDataForm` [here]({% slug dataform-validation-overview %} "Validation in RadDataForm for NativeScript").

## Commit Events

`RadDataForm` provides **propertyCommit** and **propertyCommitted** events that you can use to get notified that some modifications are committed or are about to be. 
The **propertyCommit** event notifies you before the actual commit so you can optionally cancel it by setting the {% typedoc_link classes:DataFormEventData,member:returnValue %} of the arguments to `false` as shown in the following example.

#### Example 1: Cancel the commit for an editor

<snippet id='dataform-commit-cancel'/>

The other event - **propertyCommitted** - is called after the property is committed so you can use it to get the new value from the source object or through the `RadDataForm`'s {% typedoc_link classes:RadDataForm,member:editedObject %} property. 

## References

Want to see these scenarios in action?
Check our [SDK Examples](https://github.com/NativeScript/nativescript-ui-samples) repo on GitHub. You will find these and many other practical examples with NativeScript UI.

* [Commit Modes Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/dataform/app/examples/commit-modes)
* [Events Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/dataform/app/examples/events)
* [Scrollable Form Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/dataform/app/examples/scrolling)

Related articles you might find useful:

* [**Editors Overview**]({% slug dataform-editors-overview %})
* [**Validation Overview**]({% slug dataform-validation-overview %})
