---
title: Overview
page_title: RadCalendar styling overview | Progress NativeScript UI Documentation
description: A cell style customization guide page for RadCalendar for NativeScript.
slug: calendar-styling-overview
tags: radcalendar, cell, styling, calendar, cells, nativescript, professional
position: 8
publish: true
---

# Calendar Styling Overview
Telerik Calendar for NativeScript has four different view modes which can be easily customized to meet your application's visual requirements.
Every one of the calendar view modes has its visual representation and different visual items that could be styled.
You can define and combine styles for any of the view modes for single calendar instance and if you navigate from one view to another different styles will be applied for visual items.
The cells and all visuals that the calendar control is built from differentiate by the content they visualize.
Every one of these visual parts is customizable.

The following calendar properties should be used for different view modes:
- `monthViewStyle` - defines styling of RadCalendar for [Month view mode]({% slug calendar-monthview-styling %} "Read more about styling in Month view mode"). Should be initialized with instance of `CalendarMonthViewStyle`
- `weekViewStyle` - defines styling of RadCalendar for [Week view mode]({% slug calendar-weekview-styling %} "Read more about styling in Week view mode"). Should be initialized with instance of `CalendarWeekViewStyle`
- `yearViewStyle` - defines styling of RadCalendar for [Year view mode]({% slug calendar-yearview-styling %} "Read more about styling in Year view mode"). Should be initialized with instance of `CalendarYearViewStyle`
- `monthNamesViewStyle` -  defines styling of RadCalendar for [MonthNames view mode]({% slug calendar-monthnamesview-styling %} "Read more about styling in MonthNames view mode"). Should be initialized with instance of `CalendarMonthNamesViewStyle`
- `dayViewStyle` - defines styling of RadCalendar for [Day view mode]({% slug calendar-dayview-styling %} "Read more about styling in Day view mode"). Should be initialized with instance of `CalendarDayViewStyle`

These classes have properties for different visual parts of RadCalendar in corresponding view.

## Example

<snippet id='calenar-monthview-styling'/>

![Calendar month view styling](../../../img/ns_ui/calendar_styling_month_ios.png "iOS")      ![Calendar month view styling](../../../img/ns_ui/calendar_styling_month_android.png "Android")
