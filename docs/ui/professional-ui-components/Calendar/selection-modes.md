---
title: Selection modes
page_title: RadCalendar selection modes | Progress NativeScript UI Documentation
description: This article explains how to set the RadCalendar's selection mode
slug: calendar-selection-modes
tags: calendar, angular, selection, modes, nativescript, professional, ui
position: 4
publish: true
---

# RadCalendar Selection Modes
{% typedoc_link classes:RadCalendar %} supports the following selection modes exposed by the {% typedoc_link enums:CalendarSelectionMode %} enum:

- {% typedoc_link enums:CalendarSelectionMode,member:None %} - disables the selection in {% typedoc_link classes:RadCalendar %}
- {% typedoc_link enums:CalendarSelectionMode,member:Single %} - allows selection of single date
- {% typedoc_link enums:CalendarSelectionMode,member:Multiple %} - allows selection of several dates
- {% typedoc_link enums:CalendarSelectionMode,member:Range %} - allows selection of a date range

To change the selection mode of {% typedoc_link classes:RadCalendar %} you should use the {% typedoc_link classes:RadCalendar,member:selectionMode %} property and set it to one of the aforementioned values.

<snippet id='angular-calendar-selection-modes-html' />

For more information on how to handle selection events, you can take a look at the [Event Handling]({% slug calendar-event-handling %}) article.

Depending on the currect selection mode, you can use the following properties to get/set the selected dates:

- Single selection - {% typedoc_link classes:RadCalendar,member:selectedDate%}, which accepts values of type `Date`.
- Multiple selection - {% typedoc_link classes:RadCalendar,member:selectedDates%}, which accepts values of type `Date` array.
- Range selection - {% typedoc_link classes:RadCalendar,member:selectedDateRange%}, which accepts values of type {% typedoc_link classes:DateRange %}.

To programmatically clear the selection, you can either set `null` to the relevant property, or call {% typedoc_link classes:RadCalendar,member:clearSelection %}.
Here's an example:

<snippet id='calendar-programmatic-selection-ts' />

> The Selection mode functionality could be used in the cases while we use `Month` or `Week` `viewMode`
