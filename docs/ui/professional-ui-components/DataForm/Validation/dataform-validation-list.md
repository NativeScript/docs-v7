---
title: Validators List
page_title: RadDataForm Validators List | Progress NativeScript UI Documentation
description: This article explains how to use the validators in RadDataForm for NativeScript.
slug: dataform-validation-list
tags: raddataform, validation, dataform, validators
position: 1
publish: true
---

# RadDataForm: Validators List

If you followed the [getting started]({% slug dataform-start-source %} "RadDataForm getting started") section, you now know how to edit an object's properties with `RadDataForm` for NativeScript. From the [validation overview]({% slug dataform-validation-overview %} "RadDataForm validation overview") you should have become acquainted with the validation feature in {% typedoc_link classes:RadDataForm %}. This article will present you with the validators that you can use to validate your fields.

All validators have an {% typedoc_link classes:PropertyValidator,member:errorMessage %} property which allows you to change the message that is displayed below the field when it is not valid.

* [NonEmptyValidator](#nonemptyvalidator)
* [RangeValidator](#rangevalidator)
* [MinimumLengthValidator](#minimumlengthvalidator)
* [MaximumLengthValidator](#maximumlengthvalidator)
* [EmailValidator](#emailvalidator)
* [PhoneValidator](#phonevalidator)
* [IsTrueValidator](#istruevalidator)
* [RegExValidator](#regexvalidator)
* [Custom Validators](#custom-validators)
* [References](#references)

## NonEmptyValidator

The {% typedoc_link classes:NonEmptyValidator %} can be used with fields that are required so that empty input is not accepted as a valid value.

#### Figure 1: The `NonEmptyValidator` on Android (left) and iOS (right)

![NativeScriptUI-DataForm-NonEmptyValidator-Android](../../../img/ns_ui/dataform-validation-list-01-android.png "NonEmptyValidator in RadDataForm in Android") ![NativeScriptUI-DataForm-NonEmptyValidator-iOS](../../../img/ns_ui/dataform-validation-list-01-ios.png "NonEmptyValidator in RadDataForm in iOS")

## RangeValidator

The {% typedoc_link classes:RangeValidator %} can be used with numeric values to determine if they fall within a specified range. The range is defined with the {% typedoc_link classes:RangeValidator,member:minimum %} and {% typedoc_link classes:RangeValidator,member:maximum %} properties.

#### Figure 2: The `RangeValidator` on Android (left) and iOS (right)

![NativeScriptUI-DataForm-RangeValidator-Android](../../../img/ns_ui/dataform-validation-list-02-android.png "RangeValidator in RadDataForm in Android") ![NativeScriptUI-DataForm-RangeValidator-iOS](../../../img/ns_ui/dataform-validation-list-02-ios.png "RangeValidator in RadDataForm in iOS")

## MinimumLengthValidator

The {% typedoc_link classes:MinimumLengthValidator %} can be used with text values to determine whether the length of the current input has at least the length specified by the {% typedoc_link classes:MinimumLengthValidator,member:length %} property.

#### Figure 3: The `MinimumLengthValidator` on Android (left) and iOS (right)

![NativeScriptUI-DataForm-MinimumLengthValidator-Android](../../../img/ns_ui/dataform-validation-list-03-android.png "MinimumLengthValidator in RadDataForm in Android") ![NativeScriptUI-DataForm-MinimumLengthValidator-iOS](../../../img/ns_ui/dataform-validation-list-03-ios.png "MinimumLengthValidator in RadDataForm in iOS")

## MaximumLengthValidator

The {% typedoc_link classes:MaximumLengthValidator %} can be used with text values to determine whether the length of the current input is shorter or equal to the value specified with the {% typedoc_link classes:MaximumLengthValidator,member:length %} property.

#### Figure 4: The `MaximumLengthValidator` on Android (left) and iOS (right)

![NativeScriptUI-DataForm-MaximumLengthValidator-Android](../../../img/ns_ui/dataform-validation-list-04-android.png "MaximumLengthValidator in RadDataForm in Android") ![NativeScriptUI-DataForm-MaximumLengthValidator-iOS](../../../img/ns_ui/dataform-validation-list-04-ios.png "MaximumLengthValidator in RadDataForm in iOS")

## EmailValidator

The {% typedoc_link classes:EmailValidator %} can be used with text values to determine whether the current input looks like an email. The email is defined with the following regular expression: `[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}\\@[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}(\\.[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})+`. If you want to use different criteria for matching an email, you can use the {% typedoc_link classes:RegExValidator %} and specify your preferred regular expression.

#### Figure 5: The `EmailValidator` on Android (left) and iOS (right)

![NativeScriptUI-DataForm-EmailValidator-Android](../../../img/ns_ui/dataform-validation-list-05-android.png "EmailValidator in RadDataForm in Android") ![NativeScriptUI-DataForm-EmailValidator-iOS](../../../img/ns_ui/dataform-validation-list-05-ios.png "EmailValidator in RadDataForm in iOS")

## PhoneValidator

The {% typedoc_link classes:PhoneValidator %} can be used with text values to determine whether the current input looks like a phone number. The phone number is defined with the following regular expression: `(\\+[0-9]+[\\- \\.]*)?(\\([0-9]+\\)[\\- \\.]*)?([0-9][0-9\\- \\.]+[0-9])`. If you want to use different criteria for matching a phone number, you can use the {% typedoc_link classes:RegExValidator %} and specify your preferred regular expression.

#### Figure 6: The `PhoneValidator` on Android (left) and iOS (right)

![NativeScriptUI-DataForm-PhoneValidator-Android](../../../img/ns_ui/dataform-validation-list-06-android.png "PhoneValidator in RadDataForm in Android") ![NativeScriptUI-DataForm-PhoneValidator-iOS](../../../img/ns_ui/dataform-validation-list-06-ios.png "PhoneValidator in RadDataForm in iOS")

## IsTrueValidator

The {% typedoc_link classes:IsTrueValidator %} can be used with boolean values to determine whether the current input is positive. For example, this can be used to verify that the user has confirmed agreeing with some list with terms and conditions.

#### Figure 7: The `IsTrueValidator` on Android (left) and iOS (right)

![NativeScriptUI-DataForm-IsTrueValidator-Android](../../../img/ns_ui/dataform-validation-list-07-android.png "IsTrueValidator in RadDataForm in Android") ![NativeScriptUI-DataForm-IsTrueValidator-iOS](../../../img/ns_ui/dataform-validation-list-07-ios.png "IsTrueValidator in RadDataForm in iOS")

## RegExValidator

The {% typedoc_link classes:RegExValidator %} can be used with text values to determine whether the current input matches the regular expression given as value of the {% typedoc_link classes:RegExValidator,member:regEx %} property of the validator. Here's an example that validates that the input contains exactly 4 digits:

#### Example 1: Use the RegExValidator to validate if input contains 4 digits

<snippet id='dataform-validation-regex-xml'/>

#### Figure 8: The `RegExValidator` on Android (left) and iOS (right)

![NativeScriptUI-DataForm-RegExValidator-Android](../../../img/ns_ui/dataform-validation-list-08-android.png "RegExValidator in RadDataForm in Android") ![NativeScriptUI-DataForm-RegExValidator-iOS](../../../img/ns_ui/dataform-validation-list-08-ios.png "RegExValidator in RadDataForm in iOS")

## Custom Validators

If the provided list doesn't fulfil your requirements, you can define your own validators or create custom validation rules. More information is available on [this article]({% slug dataform-validation-custom %} "RadDataForm custom validation").


## References
Want to see this scenario in action?
Check our [SDK Examples](https://github.com/telerik/nativescript-ui-samples) repo on GitHub. You will find many practical examples with NativeScript UI.

* [Validation Example](https://github.com/telerik/nativescript-ui-samples/tree/master/dataform/app/examples/validation)

Related articles you might find useful:

* [**Validation Events**]({% slug dataform-validation-events %})
* [**Custom Validation**]({% slug dataform-validation-custom %})
