---
title: Overview
page_title: RadCalendar Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of RadCalendar's features and their usage with Angular
slug: calendar-overview-angular
tags: calendar, overview, angular
position: 1
publish: true
---

# RadCalendar for Angular: Overview
{% typedoc_link classes:RadCalendar %} for NativeScript is based on the corresponding native calendar components from the Progress UI for iOS and Progress UI for Android suites. It exposes a unified API covering all major features coming from the native components like:
- inline events
- different view modes
- cells customization
- selection

## Features
### View modes
{% typedoc_link classes:RadCalendar %} supports four different view modes that are suitable for different application scenarios:

- {% typedoc_link modules:CalendarViewMode,member:Week %} - displays the dates within one week
- {% typedoc_link modules:CalendarViewMode,member:Month %} - displays the dates within one month
- {% typedoc_link modules:CalendarViewMode,member:MonthNames %} - displays the months within a year
- {% typedoc_link modules:CalendarViewMode,member:Year %} - displays a whole year
- {% typedoc_link modules:CalendarViewMode,member:Day %} - displays a timeline for a day with its events

For more information about View Modes take a look at the dedicated article: [Calendar view modes]({% slug calendar-view-modes-angular %} "Read more about view modes of RadCalendar").

### Style customization
{% typedoc_link classes:RadCalendar %} has a convenient API for customization of cells and selection indicators. For more information see the dedicated article: [Calendar styling ]({% slug calendar-styling-angular %} "Read more about styling of RadCalendar").

### Calendar transitions
{% typedoc_link classes:RadCalendar %} can be customized to animate the transition between different views. For more information take a look at the [Transition modes]({% slug calendar-transition-modes-angular %} "Read more about transition modes of RadCalendar") article.

### Event source
{% typedoc_link classes:RadCalendar %} allows you to define events for a given date by specifying a list of events via it's {% typedoc_link classes:RadCalendar,member:eventSource %} property. You can read more about feeding {% typedoc_link classes:RadCalendar %} with events in the dedicated article: [Populating with data]({% slug calendar-populating-with-data-angular %}).

# Angular directives

When working with {% typedoc_link classes:RadCalendar %} with Angular you will need to use the custom Angular directives. Simply use the **`RadCalendar`** selector to declare an {% typedoc_link classesRadCalendar %} in the HTML of your Component.
Here is a full list of the available custom Angular {% typedoc_link classes:RadCalendar %} directives and components:

## Components
Represent the major elements:

| Selector          | Class (more details)                      |
|-------------------|-------------------------------------------|
| RadCalendar | {% typedoc_link classes:RadCalendarComponent %} |
