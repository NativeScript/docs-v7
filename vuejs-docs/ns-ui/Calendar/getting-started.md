---
title: Getting started
page_title: RadCalendar Getting started | Progress NativeScript UI Documentation
description: This article is a short description and summary of RadCalendar's features and their usage with Vue
slug: calendar-getting-started-vue
tags: calendar, overview, vue, nativescript, professional, ui
position: 2
publish: true
---

# RadCalendar for Vue - Getting Started
This article will guide you through the process of adding a RadCalendar in your application. For more information on how each separate feature of {% typedoc_link classes:RadCalendar %} is used, please refer to the dedicated articles.

## Installation
Run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-calendar
```

## Adding a RadCalendar to Your Template
Before proceeding, make sure that the {% typedoc_link classes:NativeScriptUICalendarModule %} from the *nativescript-ui-calendar* plugin has been imported in the main JS in your app with the following sentences:

```
import Vue from 'nativescript-vue';
import RadCalendarPlugin from 'nativescript-ui-calendar/vue';

Vue.use(RadCalendarPlugin);

...
```

To add a {% typedoc_link classes:RadCalendar %} in an Vue template you need to use `<RadCalendar></RadCalendar>` tag. The following code snippet demonstrates how to display a {% typedoc_link classes:RadCalendar %} in your application:

```
export default {
  template: `
  <Page>
    <RadCalendar></RadCalendar>
  </Page>
  `,
};
```
