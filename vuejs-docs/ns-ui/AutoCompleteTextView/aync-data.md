---
title: Async data fetch
page_title: RadAutoCompleteTextView Display Modes | Progress NativeScript UI Documentation
description: This page is dedicated to the async data fetch API provided by the RadAutoCompleteTextView control.
slug: autocomplete-async-data-vue
tags: radautocompletetextview, asyncdata, vue
position: 6
publish: true
---

# Using Async Data Fetch with RadAutoCompleteTextView

There are multiple scenarios where we need to represent data loaded from remote provider like a web service.
Dynamic loading of items, based on the user input, could be quite useful when we are working with sets of data that are not available locally.
In order to satisfy this scenario, the autocomplete provides you with API, which allows you asynchronously to load your data and then pass it to the control.

In next section we will discuss the process of working with remote data in details.
For the purpose of the example we will use json data containing description of airports.

## Implementation

Populating the autocomplete asynchronously is quite straightforward task. All you need is a promise which should handle
the data fetch and return a collection of {% typedoc_link classes:TokenModel %} objects.
You should assign this promise to the {% typedoc_link classes:RadAutoCompleteTextView,member:loadSuggestionsAsync%} property.
The autocomplete executes this promise every time a symbol is typed and then generates
suggestions based on the collection returned by the promise.

- First you need to add the `RadAutoCompleteTextView` to your component's HTML.
- Setup the control in a way that suits you and bind it to source collection, which in our case is called `dataItems`.
- Do not forget to provide a `v-suggestionItemTemplate` which will represent each suggestion in the `SuggestionView`.
- Finally retrieve the `RadAutoCompleteTextView` instance that was initialized in the HTML in our case using @ViewChild with a identifier and set it's {% typedoc_link classes:RadAutoCompleteTextView,member:loadSuggestionsAsync %} property to a function which accepts one parameter (the typed text). In this function define a `Promise`, load the remote data in it and then return the `Promise`.

Later on the autocomplete will invoke the {% typedoc_link classes:RadAutoCompleteTextView,member:loadSuggestionsAsync%} function and when the promise is resolved,
it will use the returned items to complete it's population functionality.

<snippet id='autocomplete-asyncdata-vue'/>
