---
title: Display modes
page_title: RadAutoCompleteTextView Display Modes | Progress NativeScript UI Documentation
description: This page is dedicated to the Display Modes provided by the RadAutoCompleteTextView control.
slug: autocomplete-display-modes
tags: radautocompletetextview, displaymodes, autocompletetextview , nativescript, professional, ui
position: 3
publish: true
---

# RadAutoCompleteTextView Display Modes

**RadAutoCompleteTextView** has two predefined display modes.

- {% typedoc_link enums:AutoCompleteDisplayMode,member:Plain %}
- {% typedoc_link enums:AutoCompleteDisplayMode,member:Tokens %}

Display mode can be changed with the {% typedoc_link classes:RadAutoCompleteTextView,member:displayMode %} property of the **RadAutoCompleteTextView**. The default value is {% typedoc_link enums:AutoCompleteDisplayMode,member:Plain %}.

<snippet id='autocomplete-display-mode'/>

## Plain Mode
In plain mode **RadAutoCompleteTextView** displays chosen item as plain text. With this mode only one item can be chosen.

## Tokens Mode
Tokens mode allows multiple choice of items. Chosen items are displayed as tokens which can be modified or completely changed with custom ones.

When **RadAutoCompleteTextView**'s `displayMode` is `Tokens`, you can apply two different behaviors for token arrangement.

- {% typedoc_link enums:AutoCompleteLayoutMode,member:Horizontal %}
- {% typedoc_link enums:AutoCompleteLayoutMode,member:Wrap %}

The layout mode of the tokens can be changed with the {% typedoc_link enums:RadAutoCompleteTextView,member:layoutMode %} property.
The default value of this property is {% typedoc_link enums:AutoCompleteLayoutMode,member:Wrap %}.

<snippet id='autocomplete-layout-mode'/>

## Wrap Layout
In wrap mode tokens are arranged on multiple lines. Every  time a new line is started the **RadAutoCompleteTextView** is expanding in order to show all tokens.

## Horizontal Layout
In horizontal mode tokens are displayed on single line which can be scrolled horizontally in order to display all tokens.

## References
Want to see more examples using **RadAutoCompleteTextView**?
Check our SDK examples repository on GitHub. You will find this and a lot more practical examples with NativeScript UI.

* [RadAutoCompleteTextView Examples](https://github.com/NativeScript/nativescript-ui-samples/tree/master/autocomplete/app/examples/)

Related articles you might find useful:

* [**Completion Modes**]({% slug autocomplete-completion-modes %})
* [**Suggest Modes**]({% slug autocomplete-suggest-modes %})
