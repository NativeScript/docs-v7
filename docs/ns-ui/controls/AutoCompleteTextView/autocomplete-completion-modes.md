---
title: Completion modes
page_title: RadAutoCompleteTextView Completion Modes | Telerik UI NativeScript
description: This page is dedicated to the Completion Modes provided by the RadAutoCompleteTextView control.
slug: autocomplete-completion-modes
tags: radautocompletetextview, completionmodes
position: 2
publish: true
---

# RadAutoCompleteTextView: Completion modes

**RadAutoCompleteTextView** has two modes for filtering suggestions. 

- {% typedoc_link enums:CompletionMode,member:StartsWith %}
- {% typedoc_link enums:CompletionMode,member:Contains %}

The completion mode can be changed with the `completionMode` property of the RadAutoCompleteTextView. The default value is `StartsWith`.

<snippet id='autocomplete-completion-mode'/>

## StartsWith Mode

In `StartsWith` mode the autocomplete shows only suggestions that start with the typed phrase.

## Contains Mode
In `Contains` mode the autocomplete shows only suggestions that contain the typed phrase.
`Contains` mode is not intended to work with the `Append` and  `SuggestAppend` modes.
 Since both these modes append the rest of the suggestion to the typed text, the combination between them and `Contains` won't be helpful but rather confusing. 

## References
Want to see more examples using **RadAutoCompleteTextView**?
Check our SDK examples repository on GitHub. You will find this and a lot more practical examples with NativeScript UI.

* [RadAutoCompleteTextView Examples](https://github.com/telerik/nativescript-ui-samples/tree/master/autocomplete/app/examples/)

Related articles you might find useful:

* [**Display Modes**]({% slug autocomplete-display-modes %})
* [**Suggest Modes**]({% slug autocomplete-suggest-modes %})