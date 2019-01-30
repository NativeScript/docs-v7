---
title: Custom Validation
page_title: RadDataForm Custom Validation | Progress NativeScript UI Documentation
description: This article explains how to customize the validation in RadDataForm for NativeScript.
slug: dataform-validation-custom
tags: raddataform, validation, dataform, custom
position: 4
publish: true
---

# RadDataForm: Custom Validation

If you followed the [getting started]({% slug dataform-start-source %} "RadDataForm getting started") section, you now know how to edit an object's properties with `RadDataForm` for NativeScript. From the [validation overview]({% slug dataform-validation-overview %} "RadDataForm validation overview") you should have become acquainted with the validation feature in {% typedoc_link classes:RadDataForm %}. This article will show you how to use custom validation in {% typedoc_link classes:RadDataForm %}.

* [Custom Validators](#custom-validators)
* [Manual Validation](#manual-validation)
* [References](#references)

## Custom Validators

If the validators provided by {% typedoc_link classes:RadDataForm %} don't fulfil your requirements you can create your own validator. All you need to do, is create a class extending the {% typedoc_link classes:PropertyValidator %} class and override its {% typedoc_link classes:PropertyValidator,member:validate %} method. Here's a sample implementation that validates if the input has an exact content:

#### Example 1: Create a custom validator

<snippet id='dataform-custom-validator'/>

In order to use your validator, you can add it to your `xml` just like the other validators:

#### Example 2: Use a custom validator in RadDataForm 

<snippet id='dataform-custom-validator-xml'/>

> Note that you will also need to point the location of your validator definition. For our example the declaration is this: `xmlns:v=\"dataform/validation/custom-validator/exact-text-validator\"`, since our validator is defined in the `exact-text-validator.ts` file in the `custom-validator` directory.

#### Figure 1: Using a custom validator to validate input for username on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Validators-Custom-Android](../../../img/ns_ui/dataform-validation-custom-01-android.png "Custom Validator in DataForm in Android") ![NativeScriptUI-DataForm-Validators-Custom-iOS](../../../img/ns_ui/dataform-validation-custom-01-ios.png "Custom Validator in DataForm in iOS")

## Manual Validation

Another option is to manually notify {% typedoc_link classes:RadDataForm %} for the validation state of its properties and not use the validators at all. Here's an example that manually validates the fields that require validation on a button tap and if they are valid, commits them:

#### Example 3: Custom validation

<snippet id='dataform-custom-validation'/>

Let's walk through that implementation. First, we are getting each `EntityProperty` that we want to validate. Then we check their {% typedoc_link classes:EntityProperty,member:valueCandidate %}. After we check this value, we call {% typedoc_link classes:RadDataForm,member:notifyValidated %} with `true` if the value is acceptable and with `false` otherwise. We are also setting the property's {% typedoc_link classes:EntityProperty,member:errorMessage %} to the text that we want to have displayed to inform the user why validation has failed. Finally, if all properties are valid, we [commit]({% slug dataform-start-result %} "RadDataForm Get the Result") the result and display a success message. Optionally, we show another message in the case of the failed validation, summarizing the validation errors.

#### Figure 2: Using a custom validation on button tap on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Validation-Custom-Android](../../../img/ns_ui/dataform-validation-custom-02-android.png "Custom Validation in DataForm in Android") ![NativeScriptUI-DataForm-Validation-Custom-iOS](../../../img/ns_ui/dataform-validation-custom-02-ios.png "Custom Validation in DataForm in iOS")

## References

Want to see this scenario in action?
Check our [SDK Examples](https://github.com/telerik/nativescript-ui-samples) repo on GitHub. You will find these and many other practical examples with NativeScript UI.

* [Custom Validator Example](https://github.com/telerik/nativescript-ui-samples/tree/master/dataform/app/examples/validation/custom-validator)
* [Custom Validation Example](https://github.com/telerik/nativescript-ui-samples/tree/master/dataform/app/examples/validation/custom-validation)

Related articles you might find useful:

* [**Validation Modes**]({% slug dataform-validation-modes %})
* [**Validators List**]({% slug dataform-validation-list %})
