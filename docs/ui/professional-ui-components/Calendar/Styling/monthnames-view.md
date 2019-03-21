---
title: MonthNames view mode
page_title: RadCalendar year view mode styling | Progress NativeScript UI Documentation
description: A MonthNames view mode style customization guide page for RadCalendar for NativeScript.
slug: calendar-monthnamesview-styling
tags: radcalendar, cell, styling, monthnames, month, calendar, cells, nativescript, professional, ui
position: 12
publish: true
---

# RadCalendar MonthNames View Mode Styling

In order to apply custom style for this mode, you need to initialize the `monthNamesViewStyle` property of `RadCalendar` with instance of `CalendarMonthNamesViewStyle`.
In this view we have two cell types that can be customized: the title bar cell and the month name cell. To apply custom style to title you need to initialize the `titleCellStyle` with instance of `CellStyle` class. To apply custom style to title you need to initialize the `monthNameCellStyle` with instance of `CellStyle` class.

All properties of `CellStyle` class are applicable to these two cells:

## Example

<snippet id='calendar-monthnamesview-styling'/>

This is how the calendar looks like now:

![Calendar year view styling](../../../img/ns_ui/calendar_styling_month_names_ios.png "iOS")      ![Calendar year view styling](../../../img/ns_ui/calendar_styling_month_names_android.png "Android")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Styling Example](https://github.com/telerik/nativescript-ui-samples/tree/master/calendar/app/calendar/cell-styling)

Related articles you might find useful:

* [**Styling Inline Events**]({% slug calendar-inlineevents-styling %})
* [**Styling Year View**]({% slug calendar-yearview-styling %})
* [**Styling Week View**]({% slug calendar-weekview-styling %})
* [**Styling Month View**]({% slug calendar-monthview-styling %})