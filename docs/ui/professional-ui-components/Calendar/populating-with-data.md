---
title: Populating with Data
page_title: RadCalendar Populating with data | Progress NativeScript UI Documentation
description: An data populating guide page for RadCalendar for NativeScript.
slug: calendar-populating-with-data
tags: radcalendar, data, populating, calendar, calendarevent, nativescript, professional, ui
position: 3
publish: true
---

# Populating RadCalendar with Data
RadCalendar allows you to define a list of events for a particular date. This is done by using the `eventSource` property. This article describes the steps you need to take in order to feed {% typedoc_link classes:RadCalendar %} with your custom events using a events source.

### The CalendarEvent Class
Feeding events into {% typedoc_link classes:RadCalendar %} is done via instances of the {% typedoc_link classes:CalendarEvent %} class. The {% typedoc_link classes:CalendarEvent %} class is model describing a single event. It exposes properties allowing you to specify things like:

- start time of the event
- end time of the event
- whether the event is an 'all-day' event
- title of the event, etc.

To create instances of the {% typedoc_link classes:CalendarEvent %} class you need to import the `calendar` module into your `.ts` file as shown below:

<snippet id='calendar-calendar-require'/>

## Define a List of Events and Bind Them to `RadCalendar`
Assuming we have imported the calendar module as instructed above, we can now create an `Array` of events and assign it to the {% typedoc_link classes:RadCalendar,member:eventSource %} property of {% typedoc_link classes:RadCalendar %}:

<snippet id='calendar-calendar-event-instance'/>

> The `_eventTitles` array is with example purposes and contains several strings representing event names.

The `calendarEvents` property used at the end of this snippet is exposed by the view-model assigned as a binding context to the page. This allows us to directly bind the {% typedoc_link classes:RadCalendar,member:eventSource %} property of {% typedoc_link classes:RadCalendar %} in our XML file to it:

<snippet id='event-source-binding-xml'/>

Running the application, the following is shown on iOS and Android:

![TelerikUI-RadCalendar-Populating-With-Data](../../img/ns_ui/calendar-populating-with-data_android.png "iOS") ![TelerikUI-RadCalendar-Populating-With-Data](../../img/ns_ui/calendar-populating-with-data_ios.png "Android")

## Event View Modes
By default, events for each date cell are shown as dots (iOS) or squares with a summary (Android). You can customize this behavior by choosing one of the following event view modes:

- {% typedoc_link enums:CalendarEventsViewMode,member:None %} - the default option
- {% typedoc_link enums:CalendarEventsViewMode,member:Inline %} - event details are displayed in a list that appears in the calendar
- {% typedoc_link enums:CalendarEventsViewMode,member:Popover %} - event details are displayed in a popup over the calendar

> All of these values are exposed by the {% typedoc_link enums:CalendarEventsViewMode %} enum defined in the calendar module.

To change the events view mode you need to set the {% typedoc_link classes:RadCalendar,member:eventsViewMode %} property of {% typedoc_link classes:RadCalendar %} to one of these values. Here's how {% typedoc_link enums:CalendarEventsViewMode,member:Inline %} looks like:

![TelerikUI-RadCalendar-Event-View-Modes](../../img/ns_ui/calendar-event-view-modes_ios.png "iOS")  ![TelerikUI-RadCalendar-Event-View-Modes](../../img/ns_ui/calendar-event-view-modes_android.png "Android")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Populating With Data Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/calendar/app/calendar/populating-with-data)

