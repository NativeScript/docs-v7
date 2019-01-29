---
title: Calendar transition modes
page_title: RadCalendar transition modes | Progress NativeScript UI Documentation
description: A transition modes usage guide page for RadCalendar with Angular
slug: calendar-transition-modes-angular
tags: radcalendar, transition, modes, calendar
position: 6
publish: true
---

# Transitions: Overview
{% typedoc_link classes:RadCalendar %} supports different animations when switching between months, weeks or years. These are also called *transitions*. Defining a transition is done by setting the {% typedoc_link classes:RadCalendar,member:transitionMode %} property to one of the values enlisted by the {% typedoc_link enums:CalendarTransitionModes %} enum.

## Available transition modes:
-  {% typedoc_link modules:CalendarTransitionModes,member:None %} - Transitions with gestures are disabled and no animation is applied when transitioning programatically. Available in iOS and Android.
- {% typedoc_link modules:CalendarTransitionModes,member:Slide %} - Slide animation is applied when transitioning between views in {% typedoc_link classes:RadCalendar %}. Available in iOS and Android.
- {% typedoc_link modules:CalendarTransitionModes,member:Stack %} -  Stack animation is applied when transitioning between views in {% typedoc_link classes:RadCalendar %}. Available in iOS and Android.
- {% typedoc_link modules:CalendarTransitionModes,member:Flip %} -  Flip animation is applied when transitioning between views in {% typedoc_link classes:RadCalendar %}. Available only in iOS.
- {% typedoc_link modules:CalendarTransitionModes,member:Fold %} -  Fold animation is applied when transitioning between views in {% typedoc_link classes:RadCalendar %}. Available only in iOS.
- {% typedoc_link modules:CalendarTransitionModes,member:Float %} -  Float animation is applied when transitioning between views in {% typedoc_link classes:RadCalendar %}. Available only in iOS.
- {% typedoc_link modules:CalendarTransitionModes,member:Rotate %} -  Rotate animation is applied when transitioning between views in {% typedoc_link classes:RadCalendar %}. Available only in iOS.
- {% typedoc_link modules:CalendarTransitionModes,member:Plain %} -  Allows non inertial scrolling between views in {% typedoc_link classes:RadCalendar %}. Available only in Android.
- {% typedoc_link modules:CalendarTransitionModes,member:Free %} -  Allows inertial scrolling between views in {% typedoc_link classes:RadCalendar %}. Available only in Android.
- {% typedoc_link modules:CalendarTransitionModes,member:Combo %} -  Applies inertial slide animation when transitioning between views in {% typedoc_link classes:RadCalendar %}. Available only in Android.
- {% typedoc_link modules:CalendarTransitionModes,member:Overlap %} -  Views overlap when transitioning in {% typedoc_link classes:RadCalendar %}. Available only in Android.

<snippet id='angular-calendar-transition-modes-html' />
