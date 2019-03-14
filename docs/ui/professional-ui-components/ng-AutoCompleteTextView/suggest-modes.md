---
title: Suggest modes
page_title: RadAutoCompleteTextView Suggest Modes | Progress NativeScript UI Documentation
description: This page is dedicated to the Suggest Modes provided by the RadAutoCompleteTextView control.
slug: autocomplete-suggest-modes-angular
tags: radautocompletetextview, suggestmodes, angular, nativescript, professional, ui
position: 4
publish: true
---

# RadAutoCompleteTextView Suggest Modes

{% typedoc_link classes:RadAutoCompleteTextView %} has three different modes for providing suggestions. 

- {% typedoc_link enums:AutoCompleteSuggestMode,member:Suggest %}
- {% typedoc_link enums:AutoCompleteSuggestMode,member:Append %}
- {% typedoc_link enums:AutoCompleteSuggestMode,member:SuggestAppend %}

The suggest mode can be changed with the {% typedoc_link classes:RadAutoCompleteTextView,member:suggestionMode %} property of the RadAutoCompleteTextView. The default value is {% typedoc_link enums:AutoCompleteSuggestMode,member:Suggest %}.

The next code snippet shows how to change that default value to {% typedoc_link enums:AutoCompleteSuggestMode,member:Append %}:

<snippet id='angular-autocomplete-append-mode-html'/>
<snippet id='angular-autocomplete-append-mode'/>

## Suggest Mode

In `Suggest` mode the autocomplete represents the filtered suggestions, matching the typed text, in a pop-up view, which contains list of the suggestions.

## Append Mode
In `Append` mode the autocomplete shows only the first suggestion matching the typed text, which is represented as direct suffix of the typed text.

## Suggest-Append Mode
In `SuggestAppend` mode the autocomplete combines both upper-mentioned modes. It shows all matching suggestions in a pop-up view and the first of them is appended to the typed text.

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [RadAutoCompleteTextView Examples](https://github.com/telerik/nativescript-ui-samples-angular/tree/master/autocomplete/app/examples/)

Related articles you might find useful:

* [**Display Modes**]({% slug autocomplete-display-modes-angular %})
* [**Completion Modes**]({% slug autocomplete-completion-modes-angular %})
