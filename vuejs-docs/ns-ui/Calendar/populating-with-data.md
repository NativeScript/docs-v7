---
title: Populating with Data
page_title: RadCalendar Populating with data | Progress NativeScript UI Documentation
description: An data populating guide page for RadCalendar with Vue
slug: calendar-populating-with-data-vue
tags: radcalendar, data, populating, calendar, calendarevent
position: 6
publish: true
---

# RadCalendar - Populating with data
{% typedoc_link classes:RadCalendar %} allows you to define a list of events for a particular date. This is done by using the {% typedoc_link classes:RadCalendar,member:eventSource %} property. This article describes the steps you need to take in order to feed {% typedoc_link classes:RadCalendar %} with your custom events using an events source.

## The `CalendarEvent` class
Feeding events into {% typedoc_link classes:RadCalendar %} is done via instances of the {% typedoc_link CalendarEvent %} class. The {% typedoc_link CalendarEvent %} class is model describing a single event. It exposes properties allowing you to specify things like:

- start time of the event
- end time of the event
- whether the event is an 'all-day' event
- title of the event, etc.

To create instances of the {% typedoc_link CalendarEvent %} class you need to import the `calendar` module into your `.ts` file as shown below:

```
import { CalendarEvent } from 'nativescript-ui-calendar';
```

## Create an events service and bind the events to `RadCalendar`
Assuming we have imported the calendar module as instructed above, we can now create a function that will create the events:

```
import { Color } from 'tns-core-modules/color';
import { CalendarEvent } from 'nativescript-ui-calendar';

export const getEvents = (count: Number) => {
  let now = new Date();
  let startDate: Date,
      endDate: Date,
      event: CalendarEvent;
  let colors: Array<Color> = [
    new Color(200, 188, 26, 214),
    new Color(220, 255, 109, 130),
    new Color(255, 55, 45, 255),
    new Color(199, 17, 227, 10),
    new Color(255, 255, 54, 3),
  ];
  let events: Array<CalendarEvent> = new Array<CalendarEvent>();
  for (let i = 1; i < count; i++) {
    startDate = new Date(
      now.getFullYear(), now.getMonth(), i * 2, 1
    );
    endDate = new Date(
      now.getFullYear(), now.getMonth(), (i * 2), 3
    );
    event = new CalendarEvent(
      `event ${i}`, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]
    );
    events.push(event);
    if (i % 3 === 0) {
        const event = new CalendarEvent(`second ${i}`, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
        events.push(event);
    }
  }
  return events;
};
```

We can then use the {% typedoc_link classes:RadCalendar,member:getEvents() %} method of our service to populate the calendar using its {% typedoc_link classes:RadCalendar,member:eventSource %} property:

```
import { getEvents } from '../data';

export default {
  template: `
  <Page>
    <RadCalendar
      :eventSource="events"></RadCalendar>
  </Page>
  `,
  data () {
    return {
      events: getEvents(10),
    };
  },
};
```

## Event view modes
By default, events for each date cell are shown as dots (iOS) or squares with a summary (Android). You can customize this behavior by choosing one of the following event view modes:

- {% typedoc_link modules:CalendarEventsViewMode,member:None %} - the default option
- {% typedoc_link modules:CalendarEventsViewMode,member:Inline %} - event details are displayed in a list that appears in the calendar
- {% typedoc_link modules:CalendarEventsViewMode,member:Popover %} - event details are displayed in a popup over the calendar

> All of these values are exposed by the {% typedoc_link enums:CalendarEventsViewMode %} enum defined in the calendar module.

To change the events view mode you need to set the {% typedoc_link classes:RadCalendar,member:eventsViewMode %} property of {% typedoc_link classes:RadCalendar %} to one of these values.

```
import { CalendarEventsViewMode } from 'nativescript-ui-calendar';
import { getEvents } from '../data';

export default {
  template: `
  <Page>
    <ActionBar>
      <ActionItem text="None" android.position="popup" @tap="onNoneTap"></ActionItem>
      <ActionItem text="Inline" android.position="popup" @tap="onInlineTap"></ActionItem>
      <ActionItem text="Popover" android.position="popup" @tap="onPopoverTap"></ActionItem>
    </ActionBar>
    <StackLayout>
      <RadCalendar
        :eventSource="events"
        :eventsViewMode="eventsViewMode">
      </RadCalendar>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      events: getEvents(10),
      eventsViewMode: CalendarEventsViewMode.None,
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
    onNoneTap() {
      this.eventsViewMode = CalendarEventsViewMode.None;
    },
    onInlineTap() {
      this.eventsViewMode = CalendarEventsViewMode.Inline;
    },
    onPopoverTap() {
      this.eventsViewMode = CalendarEventsViewMode.Popover;
    },
  },
};
```