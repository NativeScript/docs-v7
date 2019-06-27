---
title: Overview
page_title: RadAutoCompleteTextView Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of RadAutoCompleteTextView's features and their usage with Vue.
slug: autocomplete-overview-vue
tags: autocomplete, overview, vue, nativescript, professional, ui
position: 0
publish: true
---

# RadAutoCompleteTextView Overview

**RadAutoCompleteTextView** can automatically complete user input string by comparing the text being entered to all strings in the associated data source. The control provides means for easy customization and data management. It is distributed through the `nativescript-ui-autocomplete` package on [npmjs](https://www.npmjs.com/package/nativescript-ui-autocomplete).

## Features
### Suggest modes
**RadAutoCompleteTextView** can display drop-down list below the input field to show the suggestions for a text that is typed, directly append one of the suggestions in the input field itself or in a combination of both. This is controlled through the different acceptable values for the `suggestMode` property:

- **Suggest** - Suggestions are shown in a drop-down list below the input field.
- **Append** - Only one suggestion is shown as an appended text to the input. 
- **SuggestAppend** - Both **Suggest** and **Append** modes are applied.

[This article]({% slug autocomplete-suggest-modes-vue %} "Describe the suggest modes in RadAutoCompleteTextView in NS") describes their usage.

### Display modes
When a suggestion is selected, **RadAutoCompleteTextView** can display its selection in one of two ways - as a simple text or as a token. This is controlled through the different acceptable values for the `displayModes` property:

- **Plain** - When **Plain** mode is active, only one item can be selected. The selected item is shown as a plain text in the input field.
- **Tokens** - In **Tokens** mode the **RadAutoCompleteTextView** allows multiple selection of suggestions. The selected items are displayed as tokens.

[This article]({% slug autocomplete-display-modes-vue %} "Describe the display modes in RadAutoCompleteTextView in NS") describes their usage.

### Layout Modes
When **RadAutoCompleteTextView**'s `displayMode` is **Tokens** and all selected tokens don't fit in one row, you can choose whether to layout them keep adding new token in the same (now scrollable) row, or add as many new rows as necessary to accommodate all tokens. This is controlled by the `layoutMode` property. Its acceptable values are:

- **Wrap** - When a row is filled, another row is added to accommodate new tokens.
- **Horizontal** - Tokens are added in a long scrollable row.

The layout modes are also listed in the [article about tokens]({% slug autocomplete-display-modes-vue %} "Describe the layout modes in RadAutoCompleteTextView in NS").

### Completion modes
There are two ways that **RadAutoCompleteTextView** can search for a matching suggestion for the input text - for items that start with the provided text or for items that contain the provided text but not necessarily in the beginning. This can be controlled with the `completionMode` property.

- **StartsWith** - Shows only suggestions which start with the typed text.
- **Contains** - Shows suggestions which contain the typed text but not necessarily in the beginning.

More information about the completion modes is available in [this article]({% slug autocomplete-completion-modes-vue %} "Describe the completion modes in RadAutoCompleteTextView in NS") describes their usage.

#### Figure 1. RadAutoCompleteTextView (iOS/Android)
![RadAutoCompleteTextView: Overview](../../../ui/img/ns_ui/autocomplete-overview-ios.png "RadAutoCompleteTextView in iOS") ![RadAutoCompleteTextView: Overview](../../../ui/img/ns_ui/autocomplete-overview-android.png "RadAutoCompleteTextView in Android") 


## Elements
Represent the major elements:

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| RadAutoCompleteTextView | The auto complete element |
| SuggestionView | The view that is shown in the drop down of the component |


## Directives
Represent the smaller elements that are visualized in {% typedoc_link classes:RadAutoCompleteTextView %}:

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| suggestionItemTemplate | Sets the template for the drop down |

