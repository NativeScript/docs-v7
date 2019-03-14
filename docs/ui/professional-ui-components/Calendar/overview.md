---
title: Overview
page_title: RadCalendar Overview | Progress NativeScript UI Documentation
description: This article is a short description and summary of RadCalendar's features.
slug: calendar-overview
tags: radcalendar, overview, calendar, nativescript, professional, ui
position: 1
publish: true
---

# RadCalendar Overview
{% typedoc_link classes:RadCalendar %} for NativeScript is based on the corresponding native calendar components from the Progress UI for iOS and Progress UI for Android suites. It exposes a unified API covering all major features coming from the native components like:
- inline events
- different view modes
- cells customization
- selection

![RadCalendar: Overview](../../img/ns_ui/calendar-overview_ios.png "iOS")     ![RadCalendar: Overview](../../img/ns_ui/calendar-overview_android.png "Android")

## Features
### View modes
{% typedoc_link classes:RadCalendar %} supports four different view modes that are suitable for different application scenarios:

- {% typedoc_link enums:CalendarViewMode,member:Week %} - displays the dates within one week
- {% typedoc_link enums:CalendarViewMode,member:Month %} - displays the dates within one month
- {% typedoc_link enums:CalendarViewMode,member:MonthNames %} - displays the months within a year
- {% typedoc_link enums:CalendarViewMode,member:Year %} - displays a whole year
- {% typedoc_link enums:CalendarViewMode,member:Day %} - displays a timeline for a day with its events

For more information about View Modes take a look at the dedicated article: [Calendar view modes]({% slug calendar-view-modes %} "Read more about view modes of RadCalendar").

### Style customization
{% typedoc_link classes:RadCalendar %} has a convenient API for customization of cells and selection indicators. For more information see the dedicated article: [Calendar styling ]({% slug calendar-styling-overview %} "Read more about styling of RadCalendar").

### Calendar transitions
{% typedoc_link classes:RadCalendar %} can be customized to animate the transition between different views. For more information take a look at the [Transition modes]({% slug calendar-transition-modes %} "Read more about transition modes of RadCalendar") article.

### Event source
{% typedoc_link classes:RadCalendar %} allows you to define events for a given date by specifying a list of events via it's **eventSource** property. You can read more about feeding {% typedoc_link classes:RadCalendar %} with events in the dedicated article: [Populating with data]({% slug calendar-populating-with-data %}).
