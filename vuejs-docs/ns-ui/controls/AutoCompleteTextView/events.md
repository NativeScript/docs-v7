---
title: Events
page_title: RadAutoCompleteTextView Events | Progress NativeScript UI Documentation
description: This page is dedicated to the events provided by the RadAutoCompleteTextView control.
slug: autocomplete-events-vue
tags: radautocompletetextview, events, vue
position: 5
publish: true
---

# RadAutoCompleteTextView: Events
In this article you are going to learn about the {% typedoc_link classes:RadAutoCompleteTextView %} events.
The events are designed to notify you whenever a particular action, in the workflow of the control, has happened. They are quite useful when it comes to executing logic based on the {% typedoc_link classes:RadAutoCompleteTextView %} state.

## Available events
The {% typedoc_link classes:RadAutoCompleteTextView %} control exposes these events:

* `tokenAdded` - triggered whenever a token is added.
* `tokenRemoved` - triggered whenever a token is removed.
* `tokenSelected` - triggered whenever a token is selected.
* `tokenDeselected` - triggered whenever a token is deselected.
* `textChanged` - triggered whenever the `text` property is changed.
* `didAutoComplete` - triggered whenever an item from the suggestions list is selected.
* `suggestionViewBecameVisible` - triggered whenever the suggestion view is shown.

All of these have identical logical structure and identical workflow, the only difference between them is the event which they are observing and notifing you about.

## Usage
In order to get notified when one of the above-mentioned events occur, you should use the following structure with the type of event you want to capture.

```
import { RadAutoCompleteTextView } from 'nativescript-ui-autocomplete';
import { getCountries } from '../data';

export default {
  template: `
  <Page>
    <StackLayout>
      <RadAutoCompleteTextView ref="autocomplete"
                               suggestMode="Suggest"
                               displayMode="Tokens"
                               :items="dataItems"
                               @suggestionViewBecameVisible="onSuggestionViewBecameVisible"
                               @didAutoComplete="onDidAutoComplete"
                               @textChanged="onTextChanged"
                               @tokenAdded="onTokenAdded"
                               @tokenRemoved="onTokenRemoved"
                               @tokenSelected="onTokenSelected"
                               @tokenDeselected="onTokenDeselected">
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

      <StackLayout orientation="vertical" marginTop="5">
        <Label marginBottom="12" :text="eventsText"></Label>
        <Label :text="eventName1"></Label>
        <Label :text="eventName2"></Label>
        <Label :text="eventName3"></Label>
        <Label :text="eventName4"></Label>
        <Label :text="eventName5"></Label>
      </StackLayout>

    </StackLayout>
  </Page>
  `,
  data () {
    return {
      dataItems: getCountries(),
      eventsText: '',
      eventName1: '',
      eventName2: '',
      eventName3: '',
      eventName4: '',
      eventName5: '',
      currentEventNumber: 0,
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onTokenAdded({ token }) {
      this.logEvent(`Added Token: ${token.text}`);
    },
    onTokenRemoved({ token }) {
      this.logEvent(`Removed Token: ${token.text}`);
    },
    onTokenSelected({ token }) {
      this.logEvent(`Selected Token: ${token.text}`);
    },
    onTokenDeselected({ token }) {
      this.logEvent(`Deselected Token: ${token.text}`);
    },
    onDidAutoComplete({ text }) {
      this.logEvent(`DidAutoComplete with text: ${text}`);
    },
    onTextChanged({ text }) {
      this.logEvent(`Text Changed: ${text}`);
    },
    onSuggestionViewBecameVisible({ object }) {
      let autoComplete: RadAutoCompleteTextView = object;
      let numberOfItems = autoComplete.filteredItems.length;
      let eventText = `${numberOfItems} Suggestions Visible`;
      if (numberOfItems > 0) {
          eventText += ' - First is ' + autoComplete.filteredItems[0].text;
      }
      this.logEvent(eventText);
    },
    logEvent(eventText: string) {
      this.currentEventNumber++;
      this.updateEventsText();

      switch (this.currentEventNumber) {
        case 1: this.eventName1 = eventText; return;
        case 2: this.eventName2 = eventText; return;
        case 3: this.eventName3 = eventText; return;
        case 4: this.eventName4 = eventText; return;
        case 5: this.eventName5 = eventText; return;
        default:
          this.eventName1 = this.eventName2;
          this.eventName2 = this.eventName3;
          this.eventName3 = this.eventName4;
          this.eventName4 = this.eventName5;
          this.eventName5 = eventText;
      }
    },
    updateEventsText(): void {
      let text;
      if (this.currentEventNumber > 5) {
          text = 'Latest 5 fired events:';
      } else if (this.currentEventNumber === 0) {
          text = 'Events will appear here:';
      } else if (this.currentEventNumber === 1) {
          text = 'Fired event:';
      } else {
          text = 'Fired events:';
      }
      this.eventsText = text;
    },
  },
};
```
