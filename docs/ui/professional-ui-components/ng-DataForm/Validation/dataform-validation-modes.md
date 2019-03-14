---
title: Validation Modes
page_title: RadDataForm Validation Modes | Progress NativeScript UI Documentation
description: This article explains how to use the validation modes in RadDataForm for NativeScript.
slug: dataform-validation-modes-angular
tags: raddataform, validationmodes, dataform, angular, nativescript, professional, ui
position: 2
publish: true
---

# RadDataForm Validation Modes

If you followed the [getting started]({% slug dataform-start-source-angular %} "RadDataForm getting started") section, you now know how to edit an object's properties with `RadDataForm` for NativeScript. From the [validation overview]({% slug dataform-validation-overview-angular %} "RadDataForm validation overview") you should have become acquainted with the validation feature in {% typedoc_link classes:RadDataForm %}. This article will show you the different validation modes so you will be able to choose the one that fits best in your requirements.

* [Immediate Validation](#immediate-validation)
* [Validation on Lost Focus](#validation-on-lost-focus)
* [Manual Validation](#manual-validation)
* [References](#references)

You should have in mind that the {% typedoc_link classes:RadDataForm,member:validationMode %} property is dependent on the value of the {% typedoc_link classes:RadDataForm,member:commitMode %} property, meaning that {% typedoc_link classes:RadDataForm %} will not let you commit property changes before you validate them. In other words:
* If `commitMode` is {% typedoc_link enums:DataFormCommitMode,member:Immediate %}, validation is also immediate disregaring the value of the `validationMode` property
* If `commitMode` is {% typedoc_link enums:DataFormCommitMode,member:OnLostFocus %}, validation is immediate, if `validationMode` is {% typedoc_link enums:DataFormValidationMode,member:Immediate %}, or {% typedoc_link enums:DataFormValidationMode,member:OnLostFocus %} otherwise
* If `commitMode` is {% typedoc_link enums:DataFormCommitMode,member:Manual %}, validation will follow the value of `validationMode`.

## Immediate validation

This is the default `validationMode` in {% typedoc_link classes:RadDataForm %}. When the validation is {% typedoc_link enums:DataFormValidationMode,member:Immediate %} each field will be validated as soon as its value is changed.

## Validation on Lost Focus

When the validation is {% typedoc_link enums:DataFormValidationMode,member:OnLostFocus %} each field is validated when the focus moves to another editor. Since some editors (for example the {% typedoc_link enums:DataFormEditorType,member:Stepper %}) don't have a "focused state" their property changes will be validated immediately.

## Manual Validation

When the validation is {% typedoc_link enums:DataFormValidationMode,member:Manual %}, {% typedoc_link classes:RadDataForm %} will not attempt to validate the current input automatically. Instead, you are expected to call some of the validation methods on a button tap for example.

In order to manually start the validation in {% typedoc_link classes:RadDataForm %} you can use the methods `validateAll` or `validateAndCommitAll`. As their names imply, the difference between them is that if the validation is successful, the later will also [commit]({% slug dataform-start-result-angular %} "RadDataForm commit") the changes. Both methods return a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">Promise</a> which will be resolved with a boolean value which is the result from the validation. Here's an example that demonstrates how to validate the input when a button is tapped and handle the result when its available:


#### Example 1: Using validateAll to manually validate changes

<snippet id='angular-dataform-validate-all'/>

Another option for manual validation is to call the {% typedoc_link classes:RadDataForm,member:notifyValidated %} method to notify dataform that a field's value is or is not valid. More information about this approach is available on the [custom validation]({% slug dataform-validation-custom-angular %} "RadDataForm custom validation") article.

## References

Want to see this scenario in action?
Check our [SDK examples for Angular](https://github.com/telerik/nativescript-ui-samples-angular) repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Validation Modes Example](https://github.com/telerik/nativescript-ui-samples-angular/tree/master/dataform/app/examples/validation/validation-modes)

Related articles you might find useful:

* [**Custom Validation**]({% slug dataform-validation-custom-angular %})
* [**Validation Events**]({% slug dataform-validation-events-angular %})
