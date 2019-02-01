---
title: Selection modes
page_title: RadCalendar selection modes | Progress NativeScript UI Documentation
description: This article explains how to set the RadCalendar's selection mode with Vue
slug: calendar-selection-modes-vue
tags: calendar, vue, selection, modes, nativescript, professional, ui
position: 4
publish: true
---

# RadCalendar Selection modes
{% typedoc_link classes:RadCalendar %} supports the following selection modes exposed by the {% typedoc_link enums:CalendarSelectionMode %} enum:

- {% typedoc_link modules:CalendarViewMode,member:None %} - disables the selection in {% typedoc_link classes:RadCalendar %}
- {% typedoc_link modules:CalendarViewMode,member:Single %} - allows selection of single date
- {% typedoc_link modules:CalendarViewMode,member:Multiple %} - allows selection of several dates
- {% typedoc_link modules:CalendarViewMode,member:Range %} - allows selection of a date range

To change the selection mode of {% typedoc_link classes:RadCalendar %} you should use the {% typedoc_link classes:RadCalendar,member:selectionMode %} property and set it to one of the aforementioned values.

```
import { CalendarSelectionMode } from 'nativescript-ui-calendar';

export default {
  template: `
  <Page>
    <ActionBar>
      <ActionItem text="None" android.position="popup" @tap="onNoneTap"></ActionItem>
      <ActionItem text="Single" android.position="popup" @tap="onSingleTap"></ActionItem>
      <ActionItem text="Multiple" android.position="popup" @tap="onMultipleTap"></ActionItem>
      <ActionItem text="Range" android.position="popup" @tap="onRangeTap"></ActionItem>
    </ActionBar>
    <StackLayout>
      <RadCalendar
        :selectionMode="selectionMode">
      </RadCalendar>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      selectionMode: CalendarSelectionMode.None,
    };
  },
  methods: {
    onNoneTap() {
      this.selectionMode = CalendarSelectionMode.None;
    },
    onSingleTap() {
      this.selectionMode = CalendarSelectionMode.Single;
    },
    onMultipleTap() {
      this.selectionMode = CalendarSelectionMode.Multiple;
    },
    onRangeTap() {
      this.selectionMode = CalendarSelectionMode.Range;
    },
  },
};

```

> The Selection mode functionality could be used in the cases while we use `Month` or `Week` `viewMode`