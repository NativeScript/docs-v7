---
title: Localization
page_title: RadCalendar Localization | Progress NativeScript UI Documentation
description: A how-to article about localizing RadCalendar for NativeScript.
slug: calendar-localization-vue
tags: radcalendar, localization, calendar, vue, nativescript, professional, ui
position: 3
publish: true
---

# RadCalendar Localization
{% typedoc_link classes:RadCalendar %} uses the default locale of the operating system it is run on. If you want to explicitly change the locale of the component, you can do so by using the {% typedoc_link classes:RadCalendar,member:locale %} property. The {% typedoc_link classes:RadCalendar,member:locale %} property accepts string values representing language tags as per the [BCP-27](https://tools.ietf.org/html/bcp47) standard.

## Defining Locales on RadCalendar

The following snippet demonstrates how a locale can be set in the Vue instance:

<snippet id='calendar-localization-vue'/>

The following two screenshots demonstrate how {% typedoc_link classes:RadCalendar %} looks like when a `ru-RU` is defined as a locale:

![RadCalendar: Localization on Android](../../../ui/img/ns_ui/calendar-localization-android.png "Android") ![RadCalendar: Localization on iOS](../../../ui/img/ns_ui/calendar-localization-ios.png "iOS")
