---
title: Localization
page_title: RadCalendar Localization | Progress NativeScript UI Documentation
description: A how-to article about localizing RadCalendar for NativeScript.
slug: calendar-localization-vue
tags: radcalendar, localization, calendar, vue
position: 3
publish: true
---

# Localization: Overview
{% typedoc_link classes:RadCalendar %} uses the default locale of the operating system it is run on. If you want to explicitly change the locale of the component, you can do so by using the {% typedoc_link classes:RadCalendar,member:locale %} property. The {% typedoc_link classes:RadCalendar,member:locale %} property accepts string values representing language tags as per the [BCP-27](https://tools.ietf.org/html/bcp47) standard.

## Defining Locales on RadCalendar

The following snippet demonstrates how a locale can be set in the Vue instance:

```
export default {
  template: `
  <Page>
    <GridLayout
      orientation="vertical" rows="*, auto">
      <RadCalendar ref="calendar" :locale="locale"></RadCalendar>
      <StackLayout orientation="horizontal" row="1">
        <Button text="en-EN" @tap="changeLocale('en-EN')"></Button>
        <Button text="es-ES" @tap="changeLocale('es-ES')"></Button>
        <Button text="ru-RU" @tap="changeLocale('ru-RU')"></Button>
        <Button text="fr-FR" @tap="changeLocale('fr-FR')"></Button>
      </StackLayout>
    </GridLayout>
  </Page>
  `,
  data () {
    return {
      locale: 'en-EN',
    };
  },
  methods: {
    changeLocale(locale: String) {
      this.locale = locale;
    },
  }
};
```

The following two screenshots demonstrate how {% typedoc_link classes:RadCalendar %} looks like when a `ru-RU` is defined as a locale:

![RadCalendar: Localization on Android](../../../ui/img/ns_ui/calendar-localization-android.png "Android") ![RadCalendar: Localization on iOS](../../../ui/img/ns_ui/calendar-localization-ios.png "iOS")
