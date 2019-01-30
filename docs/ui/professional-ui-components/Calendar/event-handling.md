---
title: Event Handling
page_title: RadCalendar Event handling | Progress NativeScript UI Documentation
description: An event handling page for RadCalendar for NativeScript.
slug: calendar-event-handling
tags: radcalendar, event, handling, calendar, callbacks, nativescript, professional, ui
position: 4
publish: true
---

# RadCalendar Event Handling
{% typedoc_link classes:RadCalendar %} exposes a set of events which inform you about changes in the state of the component coming as a result of user interactions. By handling these events you can perform actions when a date has been selected, the view mode has been changed, etc. The following events are currently exposed by {% typedoc_link classes:RadCalendar %}:

- {% typedoc_link classes:RadCalendar,member:dateSelectedEvent %} - fired when a date has been selected - either programmatically or as a result of end-user interaction
- {% typedoc_link classes:RadCalendar,member:dateDeselectedEvent %} - fired when a date has been deselected - either programmatically or as a result of end-user interaction
- {% typedoc_link classes:RadCalendar,member:inlineEventSelectedEvent %} - fired when an event, part the list of inline events for a given cell, has been selected
- {% typedoc_link classes:RadCalendar,member:navigatedToDateEvent %} - fired when the user navigates to a given date
- {% typedoc_link classes:RadCalendar,member:navigatingToDateStartedEvent %} - fired when navigation to a given date is about to happen
- {% typedoc_link classes:RadCalendar,member:viewModeChangedEvent %} - fired when the view-mode changes to one of the modes described in [view modes]({% slug calendar-view-modes %})
- {% typedoc_link classes:RadCalendar,member:dayViewEventSelectedEvent %} - fired when an event, part the list of events in the day view area of the calendar, has been selected


## Providing Handlers
Handling {% typedoc_link classes:RadCalendar %}'s events is done in the familiar {N} way. Here's a XML snippet demonstrating a scenario in which we're subscribing for all exposed events:

<snippet id='calendar-handling-events-xml'/>

The event-handlers are defined in the code-behind file associated with the page as shown below:

<snippet id='calendar-handling-events'/>

## Event Arguments
All events exposed by {% typedoc_link classes:RadCalendar %} provide additional information to their handlers that is needed to properly handle them. Here's a brief description of the event arguments coming with each of the events:

- {% typedoc_link classes:RadCalendar,member:dateSelectedEvent %} and {% typedoc_link classes:RadCalendar,member:dateDeselectedEvent %} deliver their arguments in the form of an instance of {% typedoc_link classes:CalendarSelectionEventData %} class. This class exposes the following properties:
	- `eventName` - the name of the event
	- `date` - the selected date
	- `object` - the object that fires the event
- {% typedoc_link classes:RadCalendar,member:inlineEventSelectedEvent %} delivers its data by providing an instance of the {% typedoc_link classes:CalendarInlineEventSelectedData %}. This class defines the following properties:
	- `eventName` - the name of the event
	- `object` - the sender of the event
	- `eventData` - an instance of the {% typedoc_link classes:CalendarEvent %} class representing the selected event
- {% typedoc_link classes:RadCalendar,member:navigatedToDateEvent %} provides an instance of the `CalendarNavigationEventData` {% typedoc_link classes:CalendarNavigationEventData %} class with the following properties:
	- `eventName` - the name of the event
	- `object` - the sender of the event
	- `date` - the date the navigation leads to
- {% typedoc_link classes:RadCalendar,member:dayViewEventSelectedEvent %} delivers its data by providing an instance of the {% typedoc_link classes:CalendarDayViewEventSelectedData %}. This class defines the following properties:
	- `eventName` - the name of the event
	- `object` - the sender of the event
	- `eventData` - an instance of the {% typedoc_link classes:CalendarEvent %} class representing the selected event
	
## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Event-handlers Example](https://github.com/telerik/nativescript-ui-samples/tree/master/calendar/app/calendar/events)
	
	

