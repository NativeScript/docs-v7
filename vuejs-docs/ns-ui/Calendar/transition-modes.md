---
title: Calendar transition modes
page_title: RadCalendar transition modes | Progress NativeScript UI Documentation
description: A transition modes usage guide page for RadCalendar with Vue
slug: calendar-transition-modes-vue
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

```
import { CalendarTransitionMode } from 'nativescript-ui-calendar';

export default {
  template: `
  <Page>
    <ActionBar>
      <ActionItem text="None" android.position="popup" @tap="onNoneTap"></ActionItem>
      <ActionItem text="Slide" android.position="popup" @tap="onSlideTap"></ActionItem>
      <ActionItem text="Stack" android.position="popup" @tap="onStackTap"></ActionItem>
      <ActionItem text="Plain" android.position="popup" @tap="onPlainTap"></ActionItem>
      <ActionItem text="Free" android.position="popup" @tap="onFreeTap"></ActionItem>
      <ActionItem text="Combo" android.position="popup" @tap="onComboTap"></ActionItem>
      <ActionItem text="Overlap" android.position="popup" @tap="onOverlapTap"></ActionItem>
    </ActionBar>
    <StackLayout>
      <RadCalendar
        :transitionMode="transitionMode">
      </RadCalendar>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      transitionMode: CalendarTransitionMode.None,
    };
  },
  methods: {
    onNoneTap() {
      this.transitionMode = CalendarTransitionMode.None;
    },
    onSlideTap() {
      this.transitionMode = CalendarTransitionMode.Slide;
    },
    onStackTap() {
      this.transitionMode = CalendarTransitionMode.Stack;
    },
    onPlainTap() {
      this.transitionMode = CalendarTransitionMode.Plain;
    },
    onComboTap() {
      this.transitionMode = CalendarTransitionMode.Combo;
    },
    onOverlapTap() {
      this.transitionMode = CalendarTransitionMode.Overlap;
    },
  },
};
```