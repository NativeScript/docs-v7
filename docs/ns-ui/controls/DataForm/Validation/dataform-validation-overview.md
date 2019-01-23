---
title: Validation Overview
page_title: RadDataForm Validation Overview | Progress NativeScript UI Documentation
description: This article explains how to use the validation in RadDataForm for NativeScript.
slug: dataform-validation-overview
tags: raddataform, validation, dataform
position: 0
publish: true
---

# RadDataForm: Validation Overview

If you followed the [getting started]({% slug dataform-start-source %} "RadDataForm getting started") section, you now know how to edit an object's properties with `RadDataForm` for NativeScript. Sometimes you may need to validate if the user's input follows some requirements - for example, not leave an empty field in a registration form or provide a valid email. This article will present you the validation feature in {% typedoc_link classes:RadDataForm %} and show you how you can use the existing validators and create custom ones.

* [Getting Started](#getting-started)
* [JSON Metadata](#json-metadata)
* [Validators List](#validators-list)
* [Validation Modes](#validation-modes)
* [Validation Events](#validation-events)
* [Custom Validation](#custom-validation)
* [References](#references)

#### Figure 1: How validated field looks on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Validation-Android](/controls/NativeScript/DataForm/images/dataform-validation-overview-android.png "Validation in DataForm in Android") ![NativeScriptUI-DataForm-Validation-iOS](/controls/NativeScript/DataForm/images/dataform-validation-overview-ios.png "Validation in DataForm in iOS")

## Getting Started

The above image demonstrates the {% typedoc_link classes:MinimumLengthValidator %} for a property of type password. Here's the code to add this validator:

#### Example 1: How to add a MinimumLengthValidator for a property

<snippet id='dataform-validation-xml'/>

You can use more than one validator for a single field and they will be checked consequently. If some of the validators fail, then the property value is not valid, if all of the validators succeed, then the property value is valid.

## JSON Metadata

If you are using [JSON Metadata]({% slug dataform-start-properties %} "Describe the Properties") to setup your properties, you can also declare the validators that you'd like to use through the `validators` key. The value of the `validators` should be an array of validators, where each validator is an object that has a `name` and optionally `params`. The `params`, if present, is another object containing key value pairs, where the keys are the properties of the validator. Here's an example:

#### Example 2: How to add validators with JSON for a property

```JSON
{
    "isReadOnly": false,
    "commitMode": "immediate",
    "validationMode": "immediate",
    "propertyAnnotations":
    [
        {
            "name": "username",
            "index": 0,
            "validators": [
                { "name": "NonEmpty" }, 
                { "name": "MaximumLength", "params": { "length": 10 } }
            ]
        },
        {
            "name": "password",
            "index": 1,
            "editor": "Password",
            "validators": [{
                "name": "MinimumLength",
                "params": {
                    "length": 6
                }
            }]
        },
        {
            "name": "email",
            "displayName": "E-Mail",
            "index": 2,
            "editor": "Email",
            "validators": [{
                "name": "RegEx",
                "params": {
                    "regEx": "^[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}\\@telerik.com$",
                    "errorMessage": "Please provide your @telerik.com email."
                }
            }]
        }
    ]
}
```

## Validators List

[This article]({% slug dataform-validation-list %} "RadDataForm validators") contains the list with all built-in validators that you can use with {% typedoc_link classes:RadDataForm %} for NativeScript.

## Validation Modes

You can choose when the validation of the changes happens by changing `RadDataForm`'s {% typedoc_link classes:RadDataForm,member:validationMode %} property. You can read more about the different modes in [this article]({% slug dataform-validation-modes %} "RadDataForm validation modes").

## Validation Events

You can use the validation events to get notified when {% typedoc_link classes:RadDataForm %} validates its fields. You can also use these events for manual and/or asynchronous validation. You can read more about the validation events in [this article]({% slug dataform-validation-events %} "RadDataForm validation events").

## Custom Validation

If the existing validators don't provide the required validation, you can create custom ones. You can also have your completely custom validation for all fields. More information is available in [this article]({% slug dataform-validation-custom %} "RadDataForm custom validation").

## References

Want to see these scenarios in action?
Check our [SDK Examples](https://github.com/telerik/nativescript-ui-samples) repo on GitHub. You will find these and many other practical examples with NativeScript UI.

* [Validation Example](https://github.com/telerik/nativescript-ui-samples/tree/master/dataform/app/examples/validation)
* [Validators JSON Example](https://github.com/telerik/nativescript-ui-samples/tree/master/dataform/app/examples/validation/metadata)

Related articles you might find useful:

* [**Validators List**]({% slug dataform-validation-list %})
* [**Validation Modes**]({% slug dataform-validation-modes %})
