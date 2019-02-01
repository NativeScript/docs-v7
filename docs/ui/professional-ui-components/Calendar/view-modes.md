---
title: Calendar view modes
page_title: RadCalendar view modes | Progress NativeScript UI Documentation
description: A view modes usage guide page for RadCalendar for NativeScript.
slug: calendar-view-modes
tags: radcalendar, view, modes, calendar, cells, nativescript, professional, ui
position: 5
publish: true
---

# RadCalendar View Modes
{% typedoc_link classes:RadCalendar %} supports four view mode types that are useful in different application scenarios. Setting a view mode is done via the {% typedoc_link classes:RadCalendar,member:viewMode %} property. This property accepts values defined in the {% typedoc_link modules:CalendarViewMode %} enum. The following view modes are available:

- {% typedoc_link modules:CalendarViewMode,member:Week %} - displays the dates within one week
- {% typedoc_link modules:CalendarViewMode,member:Month %} - displays the dates within one month
- {% typedoc_link modules:CalendarViewMode,member:MonthNames %} - displays the months within a year
- {% typedoc_link modules:CalendarViewMode,member:Year %} - displays a whole year
- {% typedoc_link modules:CalendarViewMode,member:Day %} - displays a timeline for a day with its events

#### Figure 1: RadCalendar when its viewMode is set to Day on Android (left) and iOS (right)

![NativeScriptUI-Calendar-ViewMode-Day-Android](../../img/ns_ui/calendar-viewmode-day-android.png "Day ViewMode of RadCalendar in Android") ![NativeScriptUI-Calendar-ViewMode-Day-iOS](../../img/ns_ui/calendar-viewmode-day-ios.png "Day ViewMode of RadCalendar in iOS")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [View Modes Example](https://github.com/telerik/nativescript-ui-samples/tree/master/calendar/app/calendar/view-modes)
