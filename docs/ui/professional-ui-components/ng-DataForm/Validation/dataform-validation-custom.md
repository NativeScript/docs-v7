---
title: Custom Validation
page_title: RadDataForm Custom Validation | Progress NativeScript UI Documentation
description: This article explains how to customize the validation in RadDataForm for NativeScript.
slug: dataform-validation-custom-angular
tags: raddataform, validation, dataform, custom, angular, nativescript, professional, ui
position: 4
publish: true
---

# RadDataForm Custom Validation

If you followed the [getting started]({% slug dataform-start-source-angular %} "RadDataForm getting started") section, you now know how to edit an object's properties with `RadDataForm` for NativeScript. From the [validation overview]({% slug dataform-validation-overview-angular %} "RadDataForm validation overview") you should have become acquainted with the validation feature in {% typedoc_link classes:RadDataForm %}. This article will show you how to use custom validation in {% typedoc_link classes:RadDataForm %}.

* [Custom Validators](#custom-validators)
* [Manual Validation](#manual-validation)
* [References](#references)

## Custom Validators

If the validators provided by {% typedoc_link classes:RadDataForm %} don't fulfil your requirements you can create your own validator. All you need to do, is create a class extending the {% typedoc_link classes:PropertyValidator %} class and override its {% typedoc_link classes:PropertyValidator,member:validate %} method. Here's a sample implementation that validates if the input has an exact content:

#### Example 1: Create a custom validator

<snippet id='angular-dataform-custom-validator'/>

In order to use you validator, you can add it to your `html` just like the other validators:

#### Example 2: Use a custom validator in RadDataForm 

<snippet id='dataform-custom-validator-html'/>

> Note that you will also need to import the custom validator and register it in order to be able to use it like the other validators:

#### Example 3: Import the custom validator 

<snippet id='angular-dataform-custom-validator-register'/>

#### Figure 1: Using a custom validator to validate input for username on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Validators-Custom-Android](../../../img/ns_ui/dataform-validation-custom-01-android.png "Custom Validator in DataForm in Android") ![NativeScriptUI-DataForm-Validators-Custom-iOS](../../../img/ns_ui/dataform-validation-custom-01-ios.png "Custom Validator in DataForm in iOS")

## Manual Validation

Another option is to manually notify {% typedoc_link classes:RadDataForm %} for the validation state of its properties and not use the validators at all. Here's an example that manually validates the fields that require validation on a button tap and if they are valid, commits them:

#### Example 4: Custom validation

<snippet id='angular-dataform-custom-validation'/>

Let's walk through that implementation. First, we are getting each `EntityProperty` that we want to validate. Then we check their {% typedoc_link classes:EntityProperty,member:valueCandidate %}. After we check this value, we call {% typedoc_link classes:RadDataForm,member:notifyValidated %} with `true` if the value is acceptable and with `false` otherwise. We are also setting the property's {% typedoc_link classes:EntityProperty,member:errorMessage %} to the text that we want to have displayed to inform the user why validation has failed. Finally, if all properties are valid, we [commit]({% slug dataform-start-result-angular %} "RadDataForm Get the Result") the result and display a success message. Optionally, we show another message in the case of the failed validation, summarizing the validation errors.

#### Figure 2: Using a custom validation on button tap on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Validation-Custom-Android](../../../img/ns_ui/dataform-validation-custom-02-android.png "Custom Validation in DataForm in Android") ![NativeScriptUI-DataForm-Validation-Custom-iOS](../../../img/ns_ui/dataform-validation-custom-02-ios.png "Custom Validation in DataForm in iOS")

## References

Want to see this scenario in action?
Check our [SDK examples for Angular](https://github.com/NativeScript/nativescript-ui-samples-angular) repo on GitHub. You will find these and many other practical examples with NativeScript UI.

* [Custom Validator Example](https://github.com/NativeScript/nativescript-ui-samples-angular/tree/master/dataform/app/examples/validation/custom-validator)
* [Custom Validation Example](https://github.com/NativeScript/nativescript-ui-samples-angular/tree/master/dataform/app/examples/validation/custom-validation)

Related articles you might find useful:

* [**Validation Modes**]({% slug dataform-validation-modes-angular %})
* [**Validators List**]({% slug dataform-validation-list-angular %})
