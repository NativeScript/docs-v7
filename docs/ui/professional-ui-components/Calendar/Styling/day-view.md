---
title: Day view mode
page_title: RadCalendar day view mode styling | Progress NativeScript UI Documentation
description: A day view mode style customization guide page for RadCalendar for NativeScript.
slug: calendar-dayview-styling
tags: radcalendar, cell, styling, day, calendar, cells, nativescript, professional, ui
position: 13
publish: true
---

# RadCalendar Day View Styling

In order to apply custom style for this mode, you need to initialize the `dayViewStyle` property of `RadCalendar` with instance of `CalendarDayViewStyle`.
To apply custom style to the cells that are displayed at the top you can use the same properties as in the [styling of the month view]({% slug calendar-monthview-styling %} "Read more about styling in Month view mode"). Additionally the `CalendarDayViewStyle` has `dayEventsViewStyle` and `allDayEventsViewStyle` .

The `dayEventsViewStyle` should be used with a  `DayEventsViewStyle` instance which has properties for the following styling options:

- `backgroundColor` -  defines the background color for the view with the events
- `timeLabelFormat` -  defines the format used to display the time labels in the timeline
- `timeLabelTextColor` -  defines the text color used to display the time labels in the timeline
- `timeLabelTextSize` -  defines the text size used to display the time labels in the timeline

The `allDayEventsViewStyle` should be used with a  `AllDayEventsViewStyle` instance which has properties for the following styling options:

- `backgroundColor` - defines the background color for the area where all day events are presented
- `allDayText` - defines the text that notifies that the top area contains all day events
- `allDayTextIsVisible` - defines wether the text that notifies that the top area contains all day events should be visible


## Example
Here's an example of using the properties mentioned above:

<snippet id='calendar-dayview-styling'/>

This is how the calendar looks like in that case:

![Calendar day view styling](../../../img/ns_ui/calendar_styling_day_ios.png "iOS")      ![Calendar day view styling](../../../img/ns_ui/calendar_styling_day_android.png "Android")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Styling Example](https://github.com/telerik/nativescript-ui-samples/tree/master/calendar/app/calendar/cell-styling)

Related articles you might find useful:

* [**Styling Inline Events**]({% slug calendar-features-styling-inlineevents %})
* [**Styling Month Name**]({% slug calendar-features-styling-monthname-view %})
* [**Styling Week View**]({% slug calendar-features-styling-week-view %})
* [**Styling Month View**]({% slug calendar-features-styling-month-view %})
* [**Styling Year View**]({% slug calendar-features-styling-year-view %})
