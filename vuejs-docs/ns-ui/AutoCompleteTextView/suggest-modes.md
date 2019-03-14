---
title: Suggest modes
page_title: RadAutoCompleteTextView Suggest Modes | Progress NativeScript UI Documentation
description: This page is dedicated to the Suggest Modes provided by the RadAutoCompleteTextView control.
slug: autocomplete-suggest-modes-vue
tags: radautocompletetextview, suggestmodes, vue, nativescript, professional, ui
position: 4
publish: true
---

# RadAutoCompleteTextView Suggest Modes

{% typedoc_link classes:RadAutoCompleteTextView %} has three different modes for providing suggestions.

- {% typedoc_link enums:AutoCompleteSuggestMode,member:Suggest %}
- {% typedoc_link enums:AutoCompleteSuggestMode,member:Append %}
- {% typedoc_link enums:AutoCompleteSuggestMode,member:SuggestAppend %}

The suggest mode can be changed with the {% typedoc_link classes:RadAutoCompleteTextView,member:suggestionMode %} property of the RadAutoCompleteTextView. The default value is {% typedoc_link enums:AutoCompleteSuggestMode,member:Suggest %}.

The next code snippet shows how to change that default value:

```
import { AutoCompleteSuggestMode } from 'nativescript-ui-autocomplete';
import { getCountries } from './data';

export default {
  template: `
  <Page>
    <StackLayout>
      <RadAutoCompleteTextView ref="autocomplete"
                               hint="select country"
                               :suggestMode="suggestMode"
                               :items="dataItems">
        <SuggestionView ~suggestionView suggestionViewHeight="300">
          <StackLayout v-suggestionItemTemplate orientation="vertical" padding="10">
            <v-template>
              <StackLayout orientation="horizontal">
                <Image :src="item.image" width="50"></Image>
                <Label :text="item.text" marginLeft="5" android:marginTop="15"></Label>
              </StackLayout>
            </v-template>
          </StackLayout>
        </SuggestionView>
      </RadAutoCompleteTextView>
      <Label text="SUGGEST MODES" marginTop="5"></Label>
      <StackLayout orientation="horizontal">
        <Button margin="5" text="Suggest" @tap="onSuggestSelected()"></Button>
        <Button margin="5" text="Append" @tap="onAppendSelected()"></Button>
        <Button margin="5" text="Suggest-Append" @tap="onSuggestAppendSelected()"></Button>
      </StackLayout>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      dataItems: getCountries(),
      suggestMode: AutoCompleteSuggestMode.Suggest,
    };
  },
  methods: {
    onSuggestSelected(args) {
      this.suggestMode = AutoCompleteSuggestMode.Suggest;
    },
    onAppendSelected(args) {
      this.suggestMode = AutoCompleteSuggestMode.Append;
    },
    onSuggestAppendSelected(args) {
      this.suggestMode = AutoCompleteSuggestMode.SuggestAppend;
    },
  },
};
```

## Suggest Mode

In `Suggest` mode the autocomplete represents the filtered suggestions, matching the typed text, in a pop-up view, which contains list of the suggestions.

## Append Mode
In `Append` mode the autocomplete shows only the first suggestion matching the typed text, which is represented as direct suffix of the typed text.

## Suggest-Append Mode
In `SuggestAppend` mode the autocomplete combines both upper-mentioned modes. It shows all matching suggestions in a pop-up view and the first of them is appended to the typed text.

## References

Related articles you might find useful:

* [**Display Modes**]({% slug autocomplete-display-modes-vue %})
* [**Completion Modes**]({% slug autocomplete-completion-modes-vue %})
