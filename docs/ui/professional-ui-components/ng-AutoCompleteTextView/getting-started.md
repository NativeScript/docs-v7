---
title: Getting Started
page_title: RadAutoCompleteTextView Getting Started | Progress NativeScript UI Documentation
description: A getting started page for RadAutoCompleteTextView for Android. This article explains what are the steps to create a RadAutoCompleteTextView instance from scratch.
slug: autocomplete-gettingstarted-angular
tags: radautocompletetextview, gettingstarted, autocomplete, list, angular, nativescript, professional, ui
position: 1
publish: true
---

# RadAutoCompleteTextView Getting Started

In this article, you will learn how to initialize **RadAutoCompleteTextView** and use it with its basic configuration inside an NativeScript + Angular applications. 

## Installation
**RadAutoCompleteTextView** is distributed through the `nativescript-ui-autocomplete` package, so before using it, you need to run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-autocomplete
```

## Initialization
Before proceeding, make sure that the {% typedoc_link classes:NativeScriptUIAutoCompleteTextViewModule %} from the *nativescript-ui-autocomplete* plugin has been imported in an `ngModule` in your app as explained [here]({% slug getting-started-angular %}).

To create a **RadAutoCompleteTextView** you should use the RadAutoCompleteTextView tag in your .html file.
Once you have added the tag you should specify value for the `items` property of the control.

<snippet id='angular-autocomplete-getting-started-html'/>

In order to provide suggestions that will be used by **RadAutoCompleteTextView** you need to provide a collection of items of type `TokenModel`:

<snippet id='angular-autocomplete-getting-started'/>

If necessarily, you can also use **RadAutoCompleteTextView**'s `hint` property to provide a text that will be displayed when there is no input; the `text` property that allows you to change the text or get the current user input or the `noResultsText` property to change the text displayed when no suggestions are found.

## Customize the Suggestions
When you start typing the input field, you will see the default suggestion view displayed below the input field. If you want, you can add a custom suggestion view and change its template (through a ng-template with the `tkSuggestionItemTemplate` directive) and/or fix its height (through the `suggestionViewHeight` property). Here's an example:

<snippet id='angular-autocomplete-plain-mode-html'/>

## Customize the TokenModel
If you need, you can extend the `TokenModel` with an id to track more easily the selected items or any other information that you need that is missing from the default model. Here's an example:

<snippet id='angular-autocomplete-custom-token-model-ts'/>

Then you can use the new type to populate the list of items that will be bound to  **RadAutoCompleteTextView**'s `items` property:

<snippet id='angular-autocomplete-custom-tokens-items-ts'/>

You can also display the properties added to your custom model in the template of the suggestions:

<snippet id='angular-autocomplete-custom-tokens-template-html'/>

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [RadAutoCompleteTextView Examples](https://github.com/NativeScript/nativescript-ui-samples/tree/master/autocomplete/app/examples/getting-started)

