---
title: Display modes
page_title: RadAutoCompleteTextView Display Modes | Progress NativeScript UI Documentation
description: This page is dedicated to the Display Modes provided by the RadAutoCompleteTextView control.
slug: autocomplete-display-modes-angular
tags: radautocompletetextview, displaymodes, angular, nativescript, professional, ui
position: 3
publish: true
---

# RadAutoCompleteTextView Display Modes

**RadAutoCompleteTextView** has two predefined display modes.

- {% typedoc_link enums:DisplayMode,member:Plain %}
- {% typedoc_link enums:DisplayMode,member:Tokens %}

Display mode can be changed with the `displayMode` property of the **RadAutoCompleteTextView**. The default value is `Plain`.

The next code snippet shows how to change that default value to `Tokens`:

<snippet id='angular-autocomplete-tokens-mode-html'/>
<snippet id='angular-autocomplete-tokens-mode'/>

## Plain mode
In plain mode the {% typedoc_link classes:RadAutoCompleteTextView %} displays chosen item as plain text. When this mode only one item can be chosen.

## Tokens mode
Tokens mode allows multiple choice of items. Chosen items are displayed as tokens which can be modified or completely changed with custom ones.

When **RadAutoCompleteTextView** is working in DisplayMode.Tokens mode, you can apply two different behaviors for token arrangement.

- {% typedoc_link enums:LayoutMode,member:Horizontal %}
- {% typedoc_link enums:LayoutMode,member:Wrap %}

The layout mode of the tokens can be changed with the {% typedoc_link enums:RadAutoCompleteTextView,member:layoutMode %} property. The default value is of this property is `Wrap`.

<snippet id='angular-autocomplete-layouts-wrap-html'/>
<snippet id='angular-autocomplete-layouts-wrap'/>

## Wrap layout
In wrap mode tokens are arranged on multiple lines. Every time a new line is started the {% typedoc_link classes:RadAutoCompleteTextView %} is expanding in order to show all tokens.

## Horizontal layout
In horizontal layout tokens are displayed on single line which can be scrolled horizontally in order to display all tokens.

## References
Want to see more examples using **RadAutoCompleteTextView**?
Check our SDK examples repository on GitHub. You will find this and a lot more practical examples with NativeScript UI.

* [RadAutoCompleteTextView Examples](https://github.com/telerik/nativescript-ui-samples/tree/master/autocomplete/app/)

Related articles you mind find useful:

* [**Completion Modes**]({% slug autocomplete-completion-modes-angular %})
* [**Suggest Modes**]({% slug autocomplete-suggest-modes-angular %})