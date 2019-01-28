---
title: Selection modes
page_title: RadCalendar selection modes | Progress NativeScript UI Documentation
description: This article explains how to set the RadCalendar's selection mode  with Angular
slug: calendar-selection-modes
tags: calendar, angular, selection, modes
position: 4
publish: true
---

# RadCalendar: Selection modes
{% typedoc_link classes:RadCalendar %} supports the following selection modes exposed by the {% typedoc_link enums:CalendarSelectionMode %} enum:

- {% typedoc_link modules:CalendarViewMode,member:None %} - disables the selection in {% typedoc_link classes:RadCalendar %}
- {% typedoc_link modules:CalendarViewMode,member:Single %} - allows selection of single date
- {% typedoc_link modules:CalendarViewMode,member:Multiple %} - allows selection of several dates
- {% typedoc_link modules:CalendarViewMode,member:Range %} - allows selection of a date range

To change the selection mode of {% typedoc_link classes:RadCalendar %} you should use the {% typedoc_link classes:RadCalendar,member:selectionMode %} property and set it to one of the aforementioned values.

<snippet id='angular-calendar-selection-modes-html' />

For more information on how to handle selection events, you can take a look at the [Event Handling]({% slug calendar-event-handling %}) article.

> The Selection mode functionality could be used in the cases while we use `Month` or `Week` `viewMode`
