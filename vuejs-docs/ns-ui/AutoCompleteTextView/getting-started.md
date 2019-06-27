---
title: Getting Started
page_title: RadAutoCompleteTextView Getting Started | Progress NativeScript UI Documentation
description: A getting started page for RadAutoCompleteTextView for Android. This article explains what are the steps to create a RadAutoCompleteTextView instance from scratch.
slug: autocomplete-gettingstarted-vue
tags: radautocompletetextview, gettingstarted, autocomplete, list, vue, nativescript, professional, ui
position: 1
publish: true
---

# RadAutoCompleteTextView Getting Started

In this article, you will learn how to initialize **RadAutoCompleteTextView** and use it with its basic configuration inside an NativeScript + Vue applications.

## Installation
**RadAutoCompleteTextView** is distributed through the `nativescript-ui-autocomplete` package, so before using it, you need to run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-autocomplete
```

## Initialization
Before proceeding, make sure that the {% typedoc_link classes:NativeScriptUIAutoCompleteTextViewModule %} from the *nativescript-ui-autocomplete* plugin has been imported in the main JS in your app with the following sentences:

<snippet id='autocomplete-import-vue'/>

To create a **RadAutoCompleteTextView** you should use the RadAutoCompleteTextView tag in your component's template.
Once you have added the tag you should specify value for the `items` property of the control.

<snippet id='autocomplete-gettingstarted-vue'/>

In order to provide suggestions that will be used by **RadAutoCompleteTextView** you need to provide a collection of items of type `TokenModel`.

<snippet id='autocomplete-gettingstarted-data-vue'/>

If necessarily, you can also use **RadAutoCompleteTextView**'s `hint` property to provide a text that will be displayed when there is no input; the `text` property that allows you to change the text or get the current user input or the `noResultsText` property to change the text displayed when no suggestions are found.

## Customize the Suggestions
When you start typing the input field, you will see the default suggestion view displayed below the input field. If you want, you can add a custom suggestion view and change its template (through a v-template) and/or fix its height (through the `suggestionViewHeight` property). Here's an example:

<snippet id='autocomplete-suggestionview-vue'/>

## Customize the TokenModel
If you need, you can extend the `TokenModel` with an id to track more easily the selected items or any other information that you need that is missing from the default model. Here's an example:

<snippet id='autocomplete-custom-token-model-ts-vue'/>

Then you can use the new type to populate the list of items that will be bound to  **RadAutoCompleteTextView**'s `items` property:

<snippet id='autocomplete-custom-tokens-items-ts-vue'/>

You can also display the properties added to your custom model in the template of the suggestions:

<snippet id='autocomplete-custom-tokens-template-vue'/>

The {% typedoc_link classes:SuggestionView,member:suggestionViewHeight%} property allows you to have control over the height of the suggestion view.
The `hint` property allows you to provide a text that will be displayed when there is no input.
The `text` property allows you to change the autocomplete text or get the current user input.
