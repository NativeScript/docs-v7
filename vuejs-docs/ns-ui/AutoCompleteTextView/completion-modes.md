---
title: Completion modes
page_title: RadAutoCompleteTextView Completion Modes | Telerik UI NativeScript
description: This page is dedicated to the Completion Modes provided by the RadAutoCompleteTextView control.
slug: autocomplete-completion-modes-vue
tags: radautocompletetextview, completionmodes, vue
position: 2
publish: true
---

# RadAutoCompleteTextView: Completion modes

**RadAutoCompleteTextView** has two modes for filtering suggestions.

- {% typedoc_link enums:CompletionMode,member:StartsWith %}
- {% typedoc_link enums:CompletionMode,member:Contains %}

The completion mode can be changed with the `completionMode` property of the **RadAutoCompleteTextView**. The default value is `StartsWith`.

The next code snippet shows how to change that default value to `StartsWith`:

```
import { CompletionMode } from 'nativescript-ui-autocomplete';
import { getCountries } from './data';

export default {
  template: `
  <Page>
    <StackLayout>
      <RadAutoCompleteTextView ref="autocomplete"
                               hint="select country"
                               :completionMode="completionMode"
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
      <Label text="COMPLETION MODES"></Label>
      <StackLayout orientation="horizontal">
        <Button margin="5" text="StartsWith" @tap="onStartsWithSelected()"></Button>
        <Button margin="5" text="Contains" @tap="onContainsSelected()"></Button>
      </StackLayout>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      dataItems: getCountries(),
      completionMode: CompletionMode.Horizontal,
    };
  },
  methods: {
    onStartsWithSelected(args) {
      this.completionMode = CompletionMode.StartsWith;
    },
    onContainsSelected(args) {
      this.completionMode = CompletionMode.Contains;
    },
  },
};
```

## StartsWith Mode

In `StartsWith` mode the autocomplete shows only suggestions that start with the typed phrase.

## Contains Mode

In `Contains` mode the autocomplete shows only suggestions that contain the typed phrase.
`Contains` mode is not intended to work with the `Append` and  `SuggestAppend` modes.
 Since both these modes append the rest of the suggestion to the typed text, the combination between them and `Contains` won't be helpful but rather confusing.

## References

Related articles you might find useful:

* [**Display Modes**]({% slug autocomplete-display-modes-vue %})
* [**Suggest Modes**]({% slug autocomplete-suggest-modes-vue %})