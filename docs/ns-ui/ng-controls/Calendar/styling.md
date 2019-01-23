---
title: Calendar styling
page_title: RadCalendar styling | Progress NativeScript UI Documentation
description: Style customization guide page for RadCalendar with Angular
slug: calendar-styling-angular
tags: radcalendar, cell, styling, calendar, cells
position: 8
publish: true
---

# RadCalendar styling

{% typedoc_link classes:RadCalendar %} has separate styling properties which should be used to customize the calendar appearance depending on the view mode. The code below is an example of how to use this properties. We are using a service that provides the styles:

<snippet id='angular-calendar-styling-html' />

The style properties are defined on the corresponding component and are initialized as follows:

<snippet id='calendar-styling-init'/>

As you can see, a styling service is used. The service creates the style objects and sets their properties. The following snippet demonstrates the styling service source:

<snippet id='calendar-styling-service'/>
