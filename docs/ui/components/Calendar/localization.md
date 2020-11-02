---
title: Localization
page_title: RadCalendar Localization | Progress NativeScript UI Documentation
description: A how-to article about localizing RadCalendar for NativeScript.
slug: calendar-localization
tags: radcalendar, localization, calendar, nativescript, professional, ui
position: 7
publish: true
---

# RadCalendar Localizaiton
{% typedoc_link classes:RadCalendar %} uses the default locale of the operating system it is run on. If you want to explicitly change the locale of the component, you can do so by using the {% typedoc_link classes:RadCalendar,member:locale %} property. The {% typedoc_link classes:RadCalendar,member:locale %} property accepts string values representing language tags as per the [BCP-27](https://tools.ietf.org/html/bcp47) standard.

## Defining Locales on RadCalendar
Setting a locale different from the default can be achieved either in XML or programmatically. The following snippet demonstrates how a locale can be set in XML:

<snippet id='calendar-localization-xml'/>

The following two screenshots demonstrate how {% typedoc_link classes:RadCalendar %} looks like when a `ru-RU` is defined as a locale:

![RadCalendar: Localization on Android](../../img/ns_ui/calendar-localization-android.png "Android") ![RadCalendar: Localization on iOS](../../img/ns_ui/calendar-localization-ios.png "iOS")

## References
Want to see this scenario in action?
Check our SDK examples repository on GitHub. You will find this and a lot more practical examples with NativeScript UI.

* [RadCalendar Localization Example](https://github.com/NativeScript/nativescript-ui-samples/tree/master/calendar/app/calendar/calendar-localization)