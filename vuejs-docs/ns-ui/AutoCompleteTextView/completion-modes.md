---
title: Completion modes
page_title: RadAutoCompleteTextView Completion Modes | Telerik UI NativeScript
description: This page is dedicated to the Completion Modes provided by the RadAutoCompleteTextView control.
slug: autocomplete-completion-modes-vue
tags: radautocompletetextview, completionmodes, vue, nativescript, professional, ui
position: 2
publish: true
---

# RadAutoCompleteTextView Completion Modes

**RadAutoCompleteTextView** has two modes for filtering suggestions.

- {% typedoc_link enums:AutoCompleteCompletionMode,member:StartsWith %}
- {% typedoc_link enums:AutoCompleteCompletionMode,member:Contains %}

The completion mode can be changed with the {% typedoc_link classes:RadAutoCompleteTextView,member:completionMode %} property of the **RadAutoCompleteTextView**. The default value is {% typedoc_link enums:AutoCompleteCompletionMode,member:StartsWith %}.

The next code snippet shows how you can set the `completionMode`:

<snippet id='autocomplete-completionmode-vue'/>

## StartsWith Mode

In `StartsWith` mode the autocomplete shows only suggestions that start with the typed phrase.

<snippet id='autocomplete-start-with-vue'/>

## Contains Mode

In `Contains` mode the autocomplete shows the suggestions that contain the typed phrase, but not necessarily in the beginning.
The completion mode `Contains` is not intended to work with the `Append` and  `SuggestAppend`  suggest modes.
Since these suggest modes append the rest of the suggestion to the typed text, the combination between them and `Contains` won't be helpful but rather confusing.

<snippet id='autocomplete-contains-vue'/>

## References

Related articles you might find useful:

* [**Display Modes**]({% slug autocomplete-display-modes-vue %})
* [**Suggest Modes**]({% slug autocomplete-suggest-modes-vue %})
