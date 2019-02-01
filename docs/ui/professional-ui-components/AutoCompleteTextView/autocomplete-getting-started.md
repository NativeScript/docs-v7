---
title: Getting Started
page_title: RadAutoCompleteTextView Getting Started | Progress NativeScript UI Documentation
description: A getting started page for RadAutoCompleteTextView for Android. This article explains what are the steps to create a RadAutoCompleteTextView instance from scratch.
slug: autocomplete-gettingstarted
tags: radautocompletetextview, gettingstarted, autocomplete, list, autocompletetextview, nativescript, professional, ui
position: 1
publish: true
---

# RadAutoCompleteTextView Getting Started

In this article, you will learn how to initialize **RadAutoCompleteTextView** and use it with it's basic configuration.

## Installation
Run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-autocomplete
```

## Initialization
Then, in order to add a {% typedoc_link classes:RadAutoCompleteTextView %} instance in a page of your application, you need to define the following XML namespace:

- `xmlns:au="nativescript-ui-autocomplete"` 

To create a **RadAutoCompleteTextView** you should use the RadAutoCompleteTextView tag in your .xml file.
Once you have added the tag you should specify value for the `items` property of the control.
The `items` property defines the collection of `TokenModel` objects which will be used to provide suggestions to the user input.
The `hint` property allows you to provide a text that will be displayed when there is no input.
The `text` property allows you to change the autocomplete text or get the current user input.
The `TokenModel` object is a data model used by the autocomplete to populate the suggestion view and the chosen items.

<snippet id='autocomplete-getting-started'/>

Additionally you need to create, in your model, the collection of `TokenModel` objects which will be used to populate the **RadAutoCompleteTextView**.

<snippet id='autocomplete-generate-data'/>

In order to setup the suggestion view, which will be used as a holder to show possible suggestion, you need to add a `SuggestionView` tag and then provide a template for the layout of each suggestion.

<snippet id='autocomplete-suggestion-view-xml'/>

The `suggestionViewHeight` property allows you to have control over the height of the suggestion view.
The `suggestionItemTemplate` is the holder which is used to produce layout for each item of the suggestion view. 

## References
Want to see more examples using **RadAutoCompleteTextView**?
Check our SDK examples repository on GitHub. You will find this and a lot more practical examples with NativeScript UI.

* [RadAutoCompleteTextView Examples](https://github.com/telerik/nativescript-ui-samples/tree/master/autocomplete/app/examples/)

