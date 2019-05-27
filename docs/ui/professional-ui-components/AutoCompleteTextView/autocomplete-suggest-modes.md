---
title: Suggest modes
page_title: RadAutoCompleteTextView Suggest Modes | Progress NativeScript UI Documentation
description: This page is dedicated to the Suggest Modes provided by the RadAutoCompleteTextView control.
slug: autocomplete-suggest-modes
tags: radautocompletetextview, suggestmodes, autocompletetextview, nativescript, professional, ui
position: 4
publish: true
---

# RadAutoCompleteTextView Suggest Modes

**RadAutoCompleteTextView** has three different modes for providing suggestions. 

- {% typedoc_link enums:AutoCompleteSuggestMode,member:Suggest %}
- {% typedoc_link enums:AutoCompleteSuggestMode,member:Append %}
- {% typedoc_link enums:AutoCompleteSuggestMode,member:SuggestAppend %}

The suggest mode can be changed with the {% typedoc_link classes:RadAutoCompleteTextView,member:suggestionMode %} property of the RadAutoCompleteTextView. The default value is {% typedoc_link enums:AutoCompleteSuggestMode,member:Suggest %}.

<snippet id='autocomplete-suggest-mode'/>

## Suggest Mode

In `Suggest` mode the autocomplete represents the filtered suggestions, matching the typed text, in a pop-up view, which contains list of the suggestions.

## Append Mode
In `Append` mode the autocomplete shows only the first suggestion matching the typed text, which is represented as direct suffix of the typed text.

## Suggest-Append Mode
In `SuggestAppend` mode the autocomplete combines both upper-mentioned modes. It shows all matching suggestions in a pop-up view and the first of them is appended to the typed text.

## References
Want to see more examples using **RadAutoCompleteTextView**?
Check our SDK examples repository on GitHub. You will find this and a lot more practical examples with NativeScript UI.

* [RadAutoCompleteTextView Examples](https://github.com/NativeScript/nativescript-ui-samples/tree/master/autocomplete/app/examples/)

Related articles you might find useful:

* [**Display Modes**]({% slug autocomplete-display-modes %})
* [**Completion Modes**]({% slug autocomplete-completion-modes %})
