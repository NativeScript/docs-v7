---
title: Overview
page_title: RadAutoCompleteTextView Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of RadAutoCompleteTextView's features and their usage with Angular.
slug: autocomplete-overview-angular
tags: autocomplete, overview, angular
position: 0
publish: true
---

# RadAutoCompleteTextView: Overview

**RadAutoCompleteTextView** can automatically complete user input string by comparing the text being entered to all strings in the associated data source. The control provides means for easy customization and data management.

## Features
### Suggest modes
**RadAutoCompleteTextView** supports three different suggest modes:

- **Suggest** - Suggestions are shown in a drop-down list below the input field.
- **Append** - Only one suggestion is shown as an appended text to the input. 
- **SuggestAppend** - Both **Suggest** and **Append** modes are applied.

### Display modes
**RadAutoCompleteTextView** supports two display modes.

- **Plain** - When **Plain** mode is active, only one item can be selected. The selected item is shown as a plain text in the input field.
- **Tokens** - In **Tokens** mode the **RadAutoCompleteTextView** allows multiple selection of suggestions. The selected items are displayed as tokens.

### Tokens layout modes
**RadAutoCompleteTextView** provides two different layouts of tokens when **Tokens** display mode is used.

- **Wrap** - Tokens are aligned in a grid manner. 
- **Horizontal** - Tokens are aligned horizontally.

### Completion modes
**RadAutoCompleteTextView** has two possible modes on which the filtering function is based.

- **StartsWith** - Shows only suggestions which start with the typed text.
- **Contains** - Shows suggestions which contain the typed text.

#### Figure 1. RadAutoCompleteTextView (iOS/Android)
![RadAutoCompleteTextView: Overview](../../img/ns_ui/autocomplete-overview-ios.png "RadAutoCompleteTextView in iOS") ![RadAutoCompleteTextView: Overview](../../img/ns_ui/autocomplete-overview-android.png "RadAutoCompleteTextView in Android") 

# Angular directives

When using the {% typedoc_link classes:RadAutoCompleteTextView %} with Angular you are going to work with multiple custom angular `RadAutoCompleteTextView` specific directives. In short these directives are used by the angular framework to enable 'linking' between separate HTML tags into one 'complex' element.

Here is a full list of the available custom Angular {% typedoc_link classes:RadAutoCompleteTextView %} directives and components:

## Components
Represent the major elements:

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| RadAutoCompleteTextView | {% typedoc_link classes:RadAutoCompleteTextViewComponent %} |


## Directives
Represent the smaller elements that are visualized in {% typedoc_link classes:RadAutoCompleteTextView %}:

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| SuggestionView | {% typedoc_link classes:SuggestionView %} |

## Inline Directives
Represent the 'link' mechanism of the smaller with the major elements

| Selector          | Class (more details)                                  |
|-------------------|-------------------------------------------------------|
| tkAutoCompleteSuggestionView | {% typedoc_link classes:TKAutoCompleteSuggestionViewDirective %} |
| tkSuggestionItemTemplate | {% typedoc_link classes:TKSuggestionItemTemplateDirective %} |

