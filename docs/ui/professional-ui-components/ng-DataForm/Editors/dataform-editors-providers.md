---
title: Value Providers
page_title: RadDataForm Value Providers | Progress NativeScript UI Documentation
description: A page demonstrating usage of Value Providers in RadDataForm for NativeScript.
slug: dataform-editors-providers-angular
tags: raddataform, valueprovider, dataform, angular, nativescript, professional, ui
position: 2
publish: true
---

# RadDataForm Values Providers

If you followed the [getting started]({% slug dataform-start-source-angular %} "RadDataForm getting started") section, you now know how to edit an object's properties with `RadDataForm` for NativeScript. In the [editors overview]({% slug dataform-editors-overview-angular %} "Editors Overview in RadDataForm for NativeScript") article it was mentioned that some editors need a list with predefined values that they accept. This article will demonstrate the options to define this list through the {% typedoc_link classes:EntityProperty %}'s {% typedoc_link classes:EntityProperty,member:valuesProvider %}. First, let's bind the {% typedoc_link classes:EntityProperty,member:valuesProvider %} of one of our properties to a property of our binding context and then we'll review the different options for setting the value of that property:

#### Example 1: Bind the valueProvider to a property from our binding context

<snippet id='angular-dataform-value-providers-html'/>

Here are the options to provide the list of values:

* [String with Comma-Separated Values](#string-with-comma-separated-values)
* [Array with Values](#array-with-values)
* [Map with Values and the Labels for Them](#map-with-values-and-the-labels-for-them)
* [Array with Key-Label Pairs](#array-with-key-label-pairs)
* [Array with Custom Objects](#array-with-custom-objects)

The first two options should be used when the value that is visible to the user is the same as the value that will be stored in the object edited by `RadDataForm`. If you want to differentiate between them and for example store an id that responds to the value that the user selected, you should use the other options.

## String with Comma-Separated Values

The most basic way to give the list of values is to create a string that contains all of them separated by a comma.

#### Example 2: Value Provider from a simple string

<snippet id='angular-dataform-valueprovider-string'/>

## Array with Values

You can also pass your list as a simple `Array`.

#### Example 3: Value Provider from a simple array of values

<snippet id='angular-dataform-valueprovider-array'/>

## Map with Values and the Labels for Them

When you need to differentiate between the value that is shown with the editor and the actual value that is stored in your source object, one of the options to create a `Map` with the correct relations.

#### Example 4: Value Provider from a Map

<snippet id='angular-dataform-valueprovider-map'/>

## Array with Key-Label Pairs

Another option is to pass an `Array` with items that have `key` and `label` properties. Then the `key` will be used to be stored in your source object and the `label` will be used to be presented with the editor.

#### Example 5: Value Provider from a key-label pairs

<snippet id='angular-dataform-valueprovider-pairsarray'/>

## Array with Custom Objects

If you want to use an `Array` with your custom objects and they don't have `key` and `label` properties, you can pass your array as `items` of the {% typedoc_link classes:EntityProperty,member:valuesProvider %} and also set the names of the properties that will be used as `key` and `label`.

#### Example 6: Value Provider from an array of custom objects

<snippet id='angular-dataform-valueprovider-customarray'/>

## References

Want to see these scenarios in action?
Check our [SDK Examples for Angular](https://github.com/telerik/nativescript-ui-samples-angular) repo on GitHub. You will find these and many other practical examples with NativeScript UI.

* [Value Providers Example](https://github.com/telerik/nativescript-ui-samples-angular/tree/master/dataform/app/examples/value-providers)
* [Editors Common Example](https://github.com/telerik/nativescript-ui-samples-angular/tree/master/dataform/app/examples/editors)

Related articles you might find useful:

* [**Editors Overview**]({% slug dataform-editors-overview-angular %})
* [**Editors List**]({% slug dataform-editors-list-angular %})
