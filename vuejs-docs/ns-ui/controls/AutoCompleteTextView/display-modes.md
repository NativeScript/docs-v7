---
title: Display modes
page_title: RadAutoCompleteTextView Display Modes | Progress NativeScript UI Documentation
description: This page is dedicated to the Display Modes provided by the RadAutoCompleteTextView control.
slug: autocomplete-display-modes-vue
tags: radautocompletetextview, displaymodes, vue
position: 3
publish: true
---

# RadAutoCompleteTextView: Display Modes

**RadAutoCompleteTextView** has two predefined display modes.

- {% typedoc_link enums:DisplayMode,member:Plain %}
- {% typedoc_link enums:DisplayMode,member:Tokens %}

Display mode can be changed with the `displayMode` property of the **RadAutoCompleteTextView**. The default value is `Plain`.

The next code snippet shows how to change that default value to `Tokens`:

```
import { DisplayMode } from 'nativescript-ui-autocomplete';
import { getCountries } from './data';

export default {
  template: `
  <Page>
    <StackLayout>
      <RadAutoCompleteTextView ref="autocomplete"
                               hint="select country"
                               :displayMode="displayMode"
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
      <Label text="DISPLAY MODES"></Label>
      <StackLayout orientation="horizontal">
        <Button margin="5" text="Plain" @tap="onPlainSelected()"></Button>
        <Button margin="5" text="Tokens" @tap="onTokensSelected()"></Button>
      </StackLayout>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      dataItems: getCountries(),
      displayMode: DisplayMode.Tokens,
    };
  },
  methods: {
    onPlainSelected(args) {
      this.displayMode = DisplayMode.Plain;
      this.$refs.autocomplete.resetAutocomplete();
    },
    onTokensSelected(args) {
      this.displayMode = DisplayMode.Tokens;
      this.$refs.autocomplete.resetAutocomplete();
    },
  },
};

```

## Plain mode
In plain mode the {% typedoc_link classes:RadAutoCompleteTextView %} displays chosen item as plain text. When this mode only one item can be chosen.

## Tokens mode
Tokens mode allows multiple choice of items. Chosen items are displayed as tokens which can be modified or completely changed with custom ones.

When **RadAutoCompleteTextView** is working in DisplayMode.Tokens mode, you can apply two different behaviors for token arrangement.

- {% typedoc_link enums:LayoutMode,member:Horizontal %}
- {% typedoc_link enums:LayoutMode,member:Wrap %}

The layout mode of the tokens can be changed with the {% typedoc_link enums:RadAutoCompleteTextView,member:layoutMode %} property. The default value is of this property is `Wrap`.

```
import { LayoutMode } from 'nativescript-ui-autocomplete';
import { getCountries } from './data';

export default {
  template: `
  <Page>
    <StackLayout>
      <RadAutoCompleteTextView ref="autocomplete"
                               hint="select country"
                               :layoutMode="layoutMode"
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
      <Label text="LAYOUT MODES" marginTop="5"></Label>
      <StackLayout orientation="horizontal">
        <Button margin="5" text="Horizontal" @tap="onHorizontalSelected"></Button>
        <Button margin="5" text="Wrap" @tap="onWrapSelected"></Button>
      </StackLayout>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      dataItems: getCountries(),
      layoutMode: LayoutMode.Horizontal,
    };
  },
  methods: {
    onHorizontalSelected(args) {
      this.layoutMode = LayoutMode.Horizontal;
    },
    onWrapSelected(args) {
      this.layoutMode = LayoutMode.Wrap;
    },
  },
};
```

## Wrap layout
In wrap mode tokens are arranged on multiple lines. Every time a new line is started the {% typedoc_link classes:RadAutoCompleteTextView %} is expanding in order to show all tokens.

## Horizontal layout
In horizontal layout tokens are displayed on single line which can be scrolled horizontally in order to display all tokens.

## References

Related articles you mind find useful:

* [**Completion Modes**]({% slug autocomplete-completion-modes-vue %})
* [**Suggest Modes**]({% slug autocomplete-suggest-modes-vue %})