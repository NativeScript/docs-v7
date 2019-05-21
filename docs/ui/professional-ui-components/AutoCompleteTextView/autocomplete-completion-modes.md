---
title: Completion modes
page_title: RadAutoCompleteTextView Completion Modes | Telerik UI NativeScript
description: This page is dedicated to the Completion Modes provided by the RadAutoCompleteTextView control.
slug: autocomplete-completion-modes
tags: radautocompletetextview, completionmodes, autocompletetextview, nativescript, professional, ui
position: 2
publish: true
---

# RadAutoCompleteTextView Completion Modes

**RadAutoCompleteTextView** has two modes for filtering suggestions. 

- {% typedoc_link enums:AutoCompleteCompletionMode,member:StartsWith %}
- {% typedoc_link enums:AutoCompleteCompletionMode,member:Contains %}

The completion mode can be changed with the {% typedoc_link classes:RadAutoCompleteTextView,member:completionMode %} property of the RadAutoCompleteTextView. The default value is {% typedoc_link enums:AutoCompleteCompletionMode,member:StartsWith %}.

<snippet id='autocomplete-completion-mode'/>

## StartsWith Mode

In `StartsWith` mode the autocomplete shows only suggestions that start with the typed phrase.

## Contains Mode
In `Contains` mode the autocomplete shows the suggestions that contain the typed phrase, but not necessarily in the beginning.
The completion mode `Contains` is not intended to work with the `Append` and  `SuggestAppend`  suggest modes.
 Since these suggest modes append the rest of the suggestion to the typed text, the combination between them and `Contains` won't be helpful but rather confusing. 

## References
Want to see more examples using **RadAutoCompleteTextView**?
Check our SDK examples repository on GitHub. You will find this and a lot more practical examples with NativeScript UI.

* [RadAutoCompleteTextView Examples](https://github.com/NativeScript/nativescript-ui-samples/tree/master/autocomplete/app/examples/)

Related articles you might find useful:

* [**Display Modes**]({% slug autocomplete-display-modes %})
* [**Suggest Modes**]({% slug autocomplete-suggest-modes %})
