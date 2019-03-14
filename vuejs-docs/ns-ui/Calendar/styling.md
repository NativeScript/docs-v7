---
title: Calendar styling
page_title: RadCalendar styling | Progress NativeScript UI Documentation
description: Style customization guide page for RadCalendar with Vue
slug: calendar-styling-vue
tags: radcalendar, cell, styling, calendar, cells, nativescript, professional, ui
position: 8
publish: true
---

# RadCalendar Styling

{% typedoc_link classes:RadCalendar %} has separate styling properties which should be used to customize the calendar appearance depending on the view mode. The code below is an example of how to use this properties. We are using computed properties that provides the styles:

```
import { Color } from "tns-core-modules/color";
import {
  AllDayEventsViewStyle,
  CalendarMonthViewStyle,
  CalendarWeekViewStyle,
  CalendarYearViewStyle,
  CalendarMonthNamesViewStyle,
  CalendarSelectionShape,
  CalendarCellAlignment,
  CalendarDayViewStyle,
  CellStyle,
  DayCellStyle,
  DayEventsViewStyle,
  MonthCellStyle,
  CalendarFontStyle,
} from 'nativescript-ui-calendar';

export default {
  template: `
  <Page>
    <StackLayout>
      <RadCalendar
        :monthViewStyle='monthViewStyle'
        :weekViewStyle='weekViewStyle'
        :monthNamesViewStyle='monthNamesViewStyle'
        :yearViewStyle='yearViewStyle'
        :dayViewStyle='dayViewStyle'
        :viewMode='viewMode'>
      </RadCalendar>
    </StackLayout>
  </Page>
  `,
  computed: {
    monthViewStyle(): CalendarMonthViewStyle {
      const monthViewStyle = new CalendarMonthViewStyle();
      monthViewStyle.backgroundColor = this.grayColor;
      monthViewStyle.showTitle = true;
      monthViewStyle.showWeekNumbers = true;
      monthViewStyle.showDayNames = true;
      monthViewStyle.selectionShape = CalendarSelectionShape.Round;
      monthViewStyle.selectionShapeSize = 15;
      monthViewStyle.selectionShapeColor = this.redColor;

      const todayCellStyle = new DayCellStyle();
      todayCellStyle.cellBackgroundColor = this.greenBlueColor;
      todayCellStyle.cellBorderWidth = 2;
      todayCellStyle.cellBorderColor = this.lightYellowColor;
      todayCellStyle.cellTextColor = this.darkBrownColor;
      todayCellStyle.cellTextFontName = this.preferredFontName;
      todayCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      todayCellStyle.cellTextSize = 14;
      monthViewStyle.todayCellStyle = todayCellStyle;

      const dayCellStyle = new DayCellStyle();
      dayCellStyle.showEventsText = true;
      dayCellStyle.eventTextColor = this.whiteColor;
      dayCellStyle.eventFontName = this.preferredFontName;
      dayCellStyle.eventFontStyle = CalendarFontStyle.BoldItalic;
      dayCellStyle.eventTextSize = 8;
      dayCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
      dayCellStyle.cellPaddingHorizontal = 10;
      dayCellStyle.cellPaddingVertical = 5;
      dayCellStyle.cellBackgroundColor = this.lightGreenColor;
      dayCellStyle.cellBorderWidth = 1;
      dayCellStyle.cellBorderColor = this.lightYellowColor;
      dayCellStyle.cellTextColor = this.brownColor;
      dayCellStyle.cellTextFontName = this.preferredFontName;
      dayCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      dayCellStyle.cellTextSize = 10;
      monthViewStyle.dayCellStyle = dayCellStyle;

      const weekendCellStyle = new DayCellStyle();
      weekendCellStyle.eventTextColor = this.blueVioletColor;
      weekendCellStyle.eventFontName = this.preferredFontName;
      weekendCellStyle.eventFontStyle = CalendarFontStyle.BoldItalic;
      weekendCellStyle.eventTextSize = 8;
      weekendCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
      weekendCellStyle.cellPaddingHorizontal = 10;
      weekendCellStyle.cellPaddingVertical = 5;
      weekendCellStyle.cellBackgroundColor = this.orangeColor;
      weekendCellStyle.cellBorderWidth = 1;
      weekendCellStyle.cellBorderColor = this.lightYellowColor;
      weekendCellStyle.cellTextColor = this.brownColor;
      weekendCellStyle.cellTextFontName = this.preferredFontName;
      weekendCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      weekendCellStyle.cellTextSize = 12;
      monthViewStyle.weekendCellStyle = weekendCellStyle;

      const selectedCellStyle = new DayCellStyle();
      selectedCellStyle.eventTextColor = this.blueColor;
      selectedCellStyle.eventFontName = this.preferredFontName;
      selectedCellStyle.eventFontStyle = CalendarFontStyle.Bold;
      selectedCellStyle.eventTextSize = 8;
      selectedCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
      selectedCellStyle.cellPaddingHorizontal = 10;
      selectedCellStyle.cellPaddingVertical = 5;
      selectedCellStyle.cellBackgroundColor = this.lightBrownColor;
      selectedCellStyle.cellBorderWidth = 2;
      selectedCellStyle.cellBorderColor = this.brownColor;
      selectedCellStyle.cellTextColor = this.blackColor;
      selectedCellStyle.cellTextFontName = this.preferredFontName;
      selectedCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      selectedCellStyle.cellTextSize = 18;
      monthViewStyle.selectedDayCellStyle = selectedCellStyle;

      const weekNumberCellStyle = new CellStyle();
      weekNumberCellStyle.cellBackgroundColor = this.lightGrayColor;
      weekNumberCellStyle.cellBorderWidth = 1;
      weekNumberCellStyle.cellBorderColor = this.lightYellowColor;
      weekNumberCellStyle.cellTextColor = this.brownColor;
      weekNumberCellStyle.cellTextFontName = this.preferredFontName;
      weekNumberCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      weekNumberCellStyle.cellTextSize = 8;
      monthViewStyle.weekNumberCellStyle = weekNumberCellStyle;

      const dayNameCellStyle = new CellStyle();
      dayNameCellStyle.cellBackgroundColor = this.lightYellowColor;
      dayNameCellStyle.cellBorderWidth = 1;
      dayNameCellStyle.cellBorderColor = this.brownColor;
      dayNameCellStyle.cellTextColor = this.brownColor;
      dayNameCellStyle.cellTextFontName = this.preferredFontName;
      dayNameCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      dayNameCellStyle.cellTextSize = 10;
      monthViewStyle.dayNameCellStyle = dayNameCellStyle;

      const titleCellStyle = new DayCellStyle();
      titleCellStyle.cellBackgroundColor = this.lightGrayColor;
      titleCellStyle.cellBorderWidth = 1;
      titleCellStyle.cellBorderColor = this.brownColor;
      titleCellStyle.cellTextColor = this.orangeColor;
      titleCellStyle.cellTextFontName = this.preferredFontName;
      titleCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      titleCellStyle.cellTextSize = 18;
      monthViewStyle.titleCellStyle = titleCellStyle;

      return monthViewStyle;
    },

    weekViewStyle(): CalendarWeekViewStyle {
      const weekViewStyle = new CalendarWeekViewStyle();
      weekViewStyle.backgroundColor = this.orangeColor;
      weekViewStyle.showTitle = true;
      weekViewStyle.showWeekNumbers = true;
      weekViewStyle.showDayNames = true;

      const todayCellStyle = new DayCellStyle();
      todayCellStyle.cellBackgroundColor = this.orangeColor;
      todayCellStyle.cellBorderWidth = 1;
      todayCellStyle.cellBorderColor = this.lightYellowColor;
      todayCellStyle.cellTextColor = this.brownColor;
      todayCellStyle.cellTextFontName = this.preferredFontName;
      todayCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      todayCellStyle.cellTextSize = 14;
      weekViewStyle.todayCellStyle = todayCellStyle;

      const dayCellStyle = new DayCellStyle();
      dayCellStyle.showEventsText = true;
      dayCellStyle.eventTextColor = this.whiteColor;
      dayCellStyle.eventFontName = this.preferredFontName;
      dayCellStyle.eventFontStyle = CalendarFontStyle.BoldItalic;
      dayCellStyle.eventTextSize = 8;
      dayCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
      dayCellStyle.cellPaddingHorizontal = 10;
      dayCellStyle.cellPaddingVertical = 5;
      dayCellStyle.cellBackgroundColor = this.lightGreenColor;
      dayCellStyle.cellBorderWidth = 1;
      dayCellStyle.cellBorderColor = this.lightYellowColor;
      dayCellStyle.cellTextColor = this.brownColor;
      dayCellStyle.cellTextFontName = this.preferredFontName;
      dayCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      dayCellStyle.cellTextSize = 10;
      weekViewStyle.dayCellStyle = dayCellStyle;

      const weekendCellStyle = new DayCellStyle();
      weekendCellStyle.eventTextColor = this.blueVioletColor;
      weekendCellStyle.eventFontName = this.preferredFontName;
      weekendCellStyle.eventFontStyle = CalendarFontStyle.BoldItalic;
      weekendCellStyle.eventTextSize = 8;
      weekendCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
      weekendCellStyle.cellPaddingHorizontal = 10;
      weekendCellStyle.cellPaddingVertical = 5;
      weekendCellStyle.cellBackgroundColor = this.lightYellowColor;
      weekendCellStyle.cellBorderWidth = 1;
      weekendCellStyle.cellBorderColor = this.lightYellowColor;
      weekendCellStyle.cellTextColor = this.brownColor;
      weekendCellStyle.cellTextFontName = this.preferredFontName;
      weekendCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      weekendCellStyle.cellTextSize = 12;
      weekViewStyle.weekendCellStyle = weekendCellStyle;

      const selectedCellStyle = new DayCellStyle();
      selectedCellStyle.eventTextColor = this.blueColor;
      selectedCellStyle.eventFontName = this.preferredFontName;
      selectedCellStyle.eventFontStyle = CalendarFontStyle.Bold;
      selectedCellStyle.eventTextSize = 8;
      selectedCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
      selectedCellStyle.cellPaddingHorizontal = 10;
      selectedCellStyle.cellPaddingVertical = 5;
      selectedCellStyle.cellBackgroundColor = this.brownColor;
      selectedCellStyle.cellBorderWidth = 2;
      selectedCellStyle.cellBorderColor = this.lightYellowColor;
      selectedCellStyle.cellTextColor = this.blackColor;
      selectedCellStyle.cellTextFontName = this.preferredFontName;
      selectedCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      selectedCellStyle.cellTextSize = 18;
      weekViewStyle.selectedDayCellStyle = selectedCellStyle;

      const weekNumberCellStyle = new CellStyle();
      weekNumberCellStyle.cellBackgroundColor = this.lightGrayColor;
      weekNumberCellStyle.cellBorderWidth = 2;
      weekNumberCellStyle.cellBorderColor = this.brownColor;
      weekNumberCellStyle.cellTextColor = this.brownColor;
      weekNumberCellStyle.cellTextFontName = this.preferredFontName;
      weekNumberCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      weekNumberCellStyle.cellTextSize = 8;
      weekViewStyle.weekNumberCellStyle = weekNumberCellStyle;

      const dayNameCellStyle = new CellStyle();
      dayNameCellStyle.cellBackgroundColor = this.lightGrayColor;
      dayNameCellStyle.cellBorderWidth = 1;
      dayNameCellStyle.cellBorderColor = this.lightYellowColor;
      dayNameCellStyle.cellTextColor = this.brownColor;
      dayNameCellStyle.cellTextFontName = this.preferredFontName;
      dayNameCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      dayNameCellStyle.cellTextSize = 10;
      weekViewStyle.dayNameCellStyle = dayNameCellStyle;

      const titleCellStyle = new DayCellStyle();
      titleCellStyle.cellBackgroundColor = this.orangeColor;
      titleCellStyle.cellBorderWidth = 1;
      titleCellStyle.cellBorderColor = this.lightYellowColor;
      titleCellStyle.cellTextColor = this.brownColor;
      titleCellStyle.cellTextFontName = this.preferredFontName;
      titleCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      titleCellStyle.cellTextSize = 18;
      weekViewStyle.titleCellStyle = titleCellStyle;

      return weekViewStyle;
    },

    yearViewStyle(): CalendarYearViewStyle {
      const yearViewStyle = new CalendarYearViewStyle();

      const titleCellStyle = new DayCellStyle();
      titleCellStyle.cellBackgroundColor = this.orangeColor;
      titleCellStyle.cellBorderWidth = 2;
      titleCellStyle.cellBorderColor = this.lightYellowColor;
      titleCellStyle.cellTextColor = this.brownColor;
      titleCellStyle.cellTextFontName = this.preferredFontName;
      titleCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      titleCellStyle.cellTextSize = 18;
      yearViewStyle.titleCellStyle = titleCellStyle;

      const monthCellStyle = new MonthCellStyle();
      monthCellStyle.weekendTextColor = this.orangeColor;
      monthCellStyle.todayTextColor = this.blackColor;
      monthCellStyle.dayTextColor = this.brownColor;
      monthCellStyle.dayFontName = this.preferredFontName;
      monthCellStyle.dayFontStyle = CalendarFontStyle.Bold;
      monthCellStyle.dayTextSize = 12;
      monthCellStyle.dayNameTextColor = this.lightGreenColor;
      monthCellStyle.dayNameFontName = this.preferredFontName;
      monthCellStyle.dayNameFontStyle = CalendarFontStyle.Bold;
      monthCellStyle.dayNameTextSize = 14;
      monthCellStyle.monthNameTextColor = this.orangeColor;
      monthCellStyle.monthNameFontName = this.preferredFontName;
      monthCellStyle.monthNameFontStyle = CalendarFontStyle.BoldItalic;
      monthCellStyle.monthNameTextSize = 15;
      yearViewStyle.monthCellStyle = monthCellStyle;

      return yearViewStyle;
    },

    dayViewStyle(): CalendarDayViewStyle {
      const dayViewStyle = new CalendarDayViewStyle();
      dayViewStyle.backgroundColor = this.orangeColor;
      dayViewStyle.showWeekNumbers = true;
      dayViewStyle.showDayNames = true;
      dayViewStyle.showTitle = true;

      const todayCellStyle = new DayCellStyle();
      todayCellStyle.cellBackgroundColor = this.orangeColor;
      todayCellStyle.cellBorderWidth = 1;
      todayCellStyle.cellBorderColor = this.lightYellowColor;
      todayCellStyle.cellTextColor = this.brownColor;
      todayCellStyle.cellTextFontName = this.preferredFontName;
      todayCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      todayCellStyle.cellTextSize = 14;
      dayViewStyle.todayCellStyle = todayCellStyle;

      const dayCellStyle = new DayCellStyle();
      dayCellStyle.showEventsText = true;
      dayCellStyle.eventTextColor = this.whiteColor;
      dayCellStyle.eventFontName = this.preferredFontName;
      dayCellStyle.eventFontStyle = CalendarFontStyle.BoldItalic;
      dayCellStyle.eventTextSize = 8;
      dayCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
      dayCellStyle.cellPaddingHorizontal = 10;
      dayCellStyle.cellPaddingVertical = 5;
      dayCellStyle.cellBackgroundColor = this.lightGreenColor;
      dayCellStyle.cellBorderWidth = 1;
      dayCellStyle.cellBorderColor = this.lightYellowColor;
      dayCellStyle.cellTextColor = this.brownColor;
      dayCellStyle.cellTextFontName = this.preferredFontName;
      dayCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      dayCellStyle.cellTextSize = 10;
      dayViewStyle.dayCellStyle = dayCellStyle;

      const weekendCellStyle = new DayCellStyle();
      weekendCellStyle.eventTextColor = this.blueVioletColor;
      weekendCellStyle.eventFontName = this.preferredFontName;
      weekendCellStyle.eventFontStyle = CalendarFontStyle.BoldItalic;
      weekendCellStyle.eventTextSize = 8;
      weekendCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
      weekendCellStyle.cellPaddingHorizontal = 10;
      weekendCellStyle.cellPaddingVertical = 5;
      weekendCellStyle.cellBackgroundColor = this.lightYellowColor;
      weekendCellStyle.cellBorderWidth = 1;
      weekendCellStyle.cellBorderColor = this.lightYellowColor;
      weekendCellStyle.cellTextColor = this.brownColor;
      weekendCellStyle.cellTextFontName = this.preferredFontName;
      weekendCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      weekendCellStyle.cellTextSize = 12;
      dayViewStyle.weekendCellStyle = weekendCellStyle;

      const selectedCellStyle = new DayCellStyle();
      selectedCellStyle.eventTextColor = this.blueColor;
      selectedCellStyle.eventFontName = this.preferredFontName;
      selectedCellStyle.eventFontStyle = CalendarFontStyle.Bold;
      selectedCellStyle.eventTextSize = 8;
      selectedCellStyle.cellAlignment = CalendarCellAlignment.VerticalCenter;
      selectedCellStyle.cellPaddingHorizontal = 10;
      selectedCellStyle.cellPaddingVertical = 5;
      selectedCellStyle.cellBackgroundColor = this.brownColor;
      selectedCellStyle.cellBorderWidth = 2;
      selectedCellStyle.cellBorderColor = this.lightYellowColor;
      selectedCellStyle.cellTextColor = this.blackColor;
      selectedCellStyle.cellTextFontName = this.preferredFontName;
      selectedCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      selectedCellStyle.cellTextSize = 18;
      dayViewStyle.selectedDayCellStyle = selectedCellStyle;

      const weekNumberCellStyle = new CellStyle();
      weekNumberCellStyle.cellBackgroundColor = this.lightGrayColor;
      weekNumberCellStyle.cellBorderWidth = 1;
      weekNumberCellStyle.cellBorderColor = this.lightYellowColor;
      weekNumberCellStyle.cellTextColor = this.brownColor;
      weekNumberCellStyle.cellTextFontName = this.preferredFontName;
      weekNumberCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      weekNumberCellStyle.cellTextSize = 8;
      dayViewStyle.weekNumberCellStyle = weekNumberCellStyle;

      const dayNameCellStyle = new CellStyle();
      dayNameCellStyle.cellBackgroundColor = this.lightYellowColor;
      dayNameCellStyle.cellBorderWidth = 1;
      dayNameCellStyle.cellBorderColor = this.brownColor;
      dayNameCellStyle.cellTextColor = this.brownColor;
      dayNameCellStyle.cellTextFontName = this.preferredFontName;
      dayNameCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      dayNameCellStyle.cellTextSize = 10;
      dayViewStyle.dayNameCellStyle = dayNameCellStyle;

      const titleCellStyle = new DayCellStyle();
      titleCellStyle.cellBackgroundColor = this.orangeColor;
      titleCellStyle.cellBorderWidth = 1;
      titleCellStyle.cellBorderColor = this.lightYellowColor;
      titleCellStyle.cellTextColor = this.brownColor;
      titleCellStyle.cellTextFontName = this.preferredFontName;
      titleCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      titleCellStyle.cellTextSize = 18;
      dayViewStyle.titleCellStyle = titleCellStyle;

      const dayEventsViewStyle = new DayEventsViewStyle();
      dayEventsViewStyle.backgroundColor = this.lightBlueColor;
      dayEventsViewStyle.timeLabelFormat = 'HH:mm';
      dayEventsViewStyle.timeLabelTextColor = this.brightBlueColor;
      dayEventsViewStyle.timeLabelTextSize = 12;
      dayViewStyle.dayEventsViewStyle = dayEventsViewStyle;

      const allDayEventsViewStyle = new AllDayEventsViewStyle();
      allDayEventsViewStyle.backgroundColor = this.cyanColor;
      allDayEventsViewStyle.allDayText = 'DAILY';
      allDayEventsViewStyle.allDayTextIsVisible = true;
      dayViewStyle.allDayEventsViewStyle = allDayEventsViewStyle;

      return dayViewStyle;
    },

    monthNamesViewStyle(): CalendarMonthNamesViewStyle {
      const monthNamesViewStyle = new CalendarMonthNamesViewStyle();

      const titleCellStyle = new DayCellStyle();
      titleCellStyle.cellBackgroundColor = this.orangeColor;
      titleCellStyle.cellBorderWidth = 2;
      titleCellStyle.cellBorderColor = this.lightYellowColor;
      titleCellStyle.cellTextColor = this.brownColor;
      titleCellStyle.cellTextFontName = this.preferredFontName;
      titleCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      titleCellStyle.cellTextSize = 18;
      monthNamesViewStyle.titleCellStyle = titleCellStyle;

      const monthNameCellStyle = new CellStyle();
      monthNameCellStyle.cellBackgroundColor = this.lightGreenColor;
      monthNameCellStyle.cellBorderWidth = 2;
      monthNameCellStyle.cellBorderColor = this.lightYellowColor;
      monthNameCellStyle.cellTextColor = this.brownColor;
      monthNameCellStyle.cellTextFontName = this.preferredFontName;
      monthNameCellStyle.cellTextFontStyle = CalendarFontStyle.Bold;
      monthNameCellStyle.cellTextSize = 20;
      monthNamesViewStyle.monthNameCellStyle = monthNameCellStyle;

      return monthNamesViewStyle;
    }
  },
  data () {
    return {
      brownColor: new Color("#745151"),
      lightYellowColor: new Color("#f1e8ca"),
      greenBlueColor: new Color("#66bbae"),
      darkBrownColor: new Color("#5b391e"),
      lightGreenColor: new Color("#9ebd9e"),
      orangeColor: new Color("#dd855c"),
      lightBrownColor: new Color("#dbcbbb"),
      lightGrayColor: new Color("#bbcbdb"),
      lightBlueColor: new Color("#B5B5F9"),
      brightBlueColor: new Color("#0023ff"),
      cyanColor: new Color("#00ffff"),
      whiteColor: new Color("White"),
      blackColor: new Color("Black"),
      grayColor: new Color("Gray"),
      redColor: new Color("Red"),
      blueColor: new Color("Blue"),
      blueVioletColor: new Color("BlueViolet"),
      preferredFontName: "Times New Roman"
    };
  }
};
```
