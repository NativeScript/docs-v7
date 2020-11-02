---
title: Editors
page_title: RadDataForm Editors | Progress NativeScript UI Documentation
description: An article which lists the editors supported by RadDataForm for NativeScript and demonstrates their usage.
slug: dataform-editors-vue
tags: raddataform, editors, dataform, vue, nativescript, professional, ui
position: 30
publish: true
---

# RadDataForm Editors

If you followed the [getting started]({% slug dataform-gettingstarted-vue %} "RadDataForm getting started") section, you now know how to edit an object's properties with `RadDataForm` for NativeScript. This article will explain how to change the editor that is used for a property, what editors are supported by {% typedoc_link classes:RadDataForm %} and how to use them.

* [Usage](#usage)
* [Converters](#converters)
* [Additional Parameters](#additional-parameters)
* [Editors List](#editors-list)
* [References](#references)

#### Figure 1: Some of the editors supported by RadDataForm on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Editors-Android](../../../ui/img/ns_ui/dataform-editors-overview-android.png "Editors in DataForm in Android") ![NativeScriptUI-DataForm-Editors-iOS](../../../ui/img/ns_ui/dataform-editors-overview-ios.png "Editors in DataForm in iOS")

## Usage

By default, {% typedoc_link classes:RadDataForm %} will load a default editor depending on the type of each property of the source object. If you need to change the type, you can provide another editor through HTML or code-behind. This is demonstrated in the following examples:

#### Example 1: Change the editor that is used for a property

<snippet id='dataform-editor-vue'/>

Note that the {% typedoc_link classes:EntityProperty,member:valuesProvider %} property will be taken into consideration only for editors that support predefined list of values. These editors are {% typedoc_link enums:DataFormEditorType,member:Picker %}, {% typedoc_link enums:DataFormEditorType,member:SegmentedEditor %}, {% typedoc_link enums:DataFormEditorType,member:List %} and {% typedoc_link enums:DataFormEditorType,member:AutoCompleteInline %}. You can read more about the providers [here]({% slug dataform-editors-providers-vue %} "RadDataForm value providers").

## Converters

In the example in the beginning of the article the {% typedoc_link classes:EntityProperty,member:valuesProvider %} of the `EntityProperty` was set to an array of strings and the value of the property of the source object that was edited was also of type `string`. In some scenarios you will need to save a value which differs from the one that an editor displays. Consider the following example where you have a class `Movie` with two properties - `name` and `id`. If you want to save the value of the `id` and also display the value of the `name` in an editor, you can create a converter that will convert between the two values. Here's a sample implementation of the aforementioned scenario:

#### Example 3: Use a converter to change the type of the editor value before it is saved in the source object

The following example is written in TypeScript:

<snippet id='dataform-data-converter-vue'/>

<snippet id='dataform-editor-vue'/>

As you can see in the `Movie` model you can have a property of type `number` which represents the `id` of a movie which gets converted to the `name` of the movie with the same `id`. Similarly, when an item is selected from the list, its `name` is converted to the `id` which is the value that gets committed to the source object. An instance of the created converter has to be set to the {% typedoc_link classes:EntityProperty,member:converter %} property of the `EntityProperty` object.

## Additional Parameters

The {% typedoc_link enums:DataFormEditorType,member:Stepper %} and {% typedoc_link enums:DataFormEditorType,member:Slider %} editors have additional properties which you can be setup through {% typedoc_link classes:PropertyEditorParams %}. The following example of the {% typedoc_link enums:DataFormEditorType,member:Stepper %} editor shows how to limit its bounds and define its step:

#### Example 4: Use editor params to adjust an editor

<snippet id='dataform-editor-vue'/>

## Editors List

You can find the list with all available editors [here]({% slug dataform-editors-list-vue %} "RadDataForm editors list").

## References

Related articles you might find useful:

* [**Editors List**]({% slug dataform-editors-list-vue %})
* [**Value Providers**]({% slug dataform-editors-providers-vue %})
