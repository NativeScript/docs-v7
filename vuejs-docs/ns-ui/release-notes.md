---
title: Release notes
page_title: Release notes | Progress NativeScript UI Documentation
description: This is a list of release notes for each version of Progress NativeScript UI
slug: release-notes
tags: release, notes, ui, nativescript, breaking, changes
position: 3
publish: true
---


# Individual release notes

Since version 3.5.0, each component from `nativescript-pro-ui` has been moved to its [own plugin](https://www.nativescript.org/blog/professional-components-from-nativescript-ui-the-big-breakup). The release notes for the new plugins are published in [GitHub](https://github.com/telerik/nativescript-ui-feedback/tree/master/releases). Here are the links for the release notes of each of the plugins:

-  [AutoComplete](https://github.com/telerik/nativescript-ui-feedback/blob/master/releases/autocomplete.md)
-  [Calendar](https://github.com/telerik/nativescript-ui-feedback/blob/master/releases/calendar.md)
-  [Chart](https://github.com/telerik/nativescript-ui-feedback/blob/master/releases/chart.md)
-  [DataForm](https://github.com/telerik/nativescript-ui-feedback/blob/master/releases/dataform.md)
-  [Gauge](https://github.com/telerik/nativescript-ui-feedback/blob/master/releases/gauge.md)
-  [ListView](https://github.com/telerik/nativescript-ui-feedback/blob/master/releases/listview.md)
-  [SideDrawer](https://github.com/telerik/nativescript-ui-feedback/blob/master/releases/sidedrawer.md)

# nativescript-pro-ui - DEPRECATED

## Release notes: 3.4.0

### New:
**RadListView**
- Added [support]({% slug listview-data-operations %}) for grouping, sorting and filtering ([#424](https://github.com/telerik/nativescript-ui-feedback/issues/424))

### Fixed:
**RadAutoComplete**
- Fixed issue that webpacking with uglify was breaking the build ([#383](https://github.com/telerik/nativescript-ui-feedback/issues/383))
- Fixed issue with duplicated tokens when navigating backwards ([#443](https://github.com/telerik/nativescript-ui-feedback/issues/443))

**RadChart**
- Fixed issue that LegendView was not shown sometimes ([#442](https://github.com/telerik/nativescript-ui-feedback/issues/442))
- Fixed issue that PieSeries were not visible when app was built for release ([#423](https://github.com/telerik/nativescript-ui-feedback/issues/423))

**RadListView**
- Fixed issue with crushin when swiping on a footer ([#357](https://github.com/telerik/nativescript-ui-feedback/issues/357))
- Fixed issue with load on demand not visible on iOS and disappearing occasionally on android ([#413](https://github.com/telerik/nativescript-ui-feedback/issues/413))

**RadSideDrawer**
- Fixed issue with crushin when restoring the state of SideDrawer ([#467](https://github.com/telerik/nativescript-ui-feedback/issues/467))

## Release notes: 3.3.0

### New:
**RadListView**
- Added a new event: {% typedoc_link classes:RadListView,member:dataPopulatedEvent %} that can be used for initial scroll ([#329](https://github.com/telerik/nativescript-ui-feedback/issues/329))

### Fixed:
**RadCalendar**
- Fixed issue with `selectedDateRange` that was not always in sync with UI ([#336](https://github.com/telerik/nativescript-ui-feedback/issues/336))

**RadChart**
- Fixed issue with binding to `legendTitle` ([#380](https://github.com/telerik/nativescript-ui-feedback/issues/380))

**RadDataForm**
- Fixed issue with hiding groups initially ([#371](https://github.com/telerik/nativescript-ui-feedback/issues/371))

**RadGauges**
- Fixed issue that indicator’s properties were not bindable ([#446](https://github.com/telerik/nativescript-ui-feedback/issues/446))
- Fixed issue with changes of the min and max properties in indicators ([#287](https://github.com/telerik/nativescript-ui-feedback/issues/287))

**RadListView**
- Fixed issue with reordering an item on the same place as it was ([#322](https://github.com/telerik/nativescript-ui-feedback/issues/322))
- Fixed issue with flickering when using manual load on demand ([#462](https://github.com/telerik/nativescript-ui-feedback/issues/462))
- Fixed issue with list offsetting when using auto load on demand ([#463](https://github.com/telerik/nativescript-ui-feedback/issues/463))

**RadSideDrawer**
- Fixed issue with state restoration ([#388](https://github.com/telerik/nativescript-ui-feedback/issues/388))

## Release notes: 3.2.0

### New:
**RadAutoComplete**
- Added a new property: {% typedoc_link classes:RadAutoCompleteTextView,member:hint %} ([#282](https://github.com/telerik/nativescript-ui-feedback/issues/282))

**RadCalendar**
- New display mode: {% typedoc_link modules:CalendarViewMode,member:Day %} ([#237](https://github.com/telerik/nativescript-ui-feedback/issues/237))

**RadChart**
- Added a new property: {% typedoc_link classes:CategoricalAxis,member:lastLabelVisibility %}

**RadSideDrawer**
 - Added a new event: {% typedoc_link classes:RadSideDrawer,member:drawerPanEvent %}

### Fixed:
**RadAutoComplete**
- Fixed issue that token was not correctly displaying when added with the {% typedoc_link classes:RadAutoCompleteTextView,member:addToken %} method

**RadCalendar**
- Fixed issue that selection was not visible when using custom cell style

**RadChart**
- Fixed issue that `majorTickInterval` was not working with `CategoricalAxis` on iOS

**RadDataForm**
- Fixed issue with editor of type List on iOS ([#217](https://github.com/telerik/nativescript-ui-feedback/issues/217))
- Fixed issue with commit of boolean values ([#324](https://github.com/telerik/nativescript-ui-feedback/issues/324))
- Fixed issue with validation mode set through metadata ([#325](https://github.com/telerik/nativescript-ui-feedback/issues/325))
- Fixed issue with multiple propertyCommitted event calls on iOS

**RadListView**
- Fixed issue with throwing ClassNotFoundException ([#356](https://github.com/telerik/nativescript-ui-feedback/issues/356))
- Fixed issue that two items could be swiped at the same time on iOS

## Release notes: 3.1.4
### Fixed:
**RadListView**
- Resolved issue with iOS 11 and Xcode 9, where component is not visible ([#318](https://github.com/telerik/nativescript-ui-feedback/issues/318))

# nativescript-telerik-ui-pro - DEPRECATED

## Release notes: 3.1.1
### Fixed:
**RadListView**
- Fixed an exception being thrown when the user taps below the footer (or outside of an item) in a list with a header and footer

## Release notes: 3.1.0
### New:
**RadListView**
- API for snap-scrolling to a given item. More information here: [RadListView: Scrolling]({% slug listview-features-scrolling %})
- {% typedoc_link classes:RadListView,member:scrollDragEndedEvent %} added
- support for cancelling an attempt to reorder an item

**RadChart**
- Exposed API for customizing Trackball for a specific data point: [Chart: Trackball]({% slug chart-trackball %})
- Aligned Trackball behavior between iOS and Android
- Introduced new Trackball example in the SDK and SDK Angular repositories
- Missing documentation about Trackball added
- Missing documentation about Chart Legend added
- Aligned Legend selection across iOS and Android and introduced the {% typedoc_link classes:RadLegendView,member:enableSelection %} property
- Exposed API for adjusting Bar Size on Bar series: {% typedoc_link classes:BarSeries,member:minBarSize %}, {% typedoc_link classes:BarSeries,member:maxBarSize %}

**RadDataForm**
- Added a new editor - {% typedoc_link enums:EditorType,member:Label %}. The new editor is included in the [editors list]({% slug dataform-editors-list %}).
- Added a new validator - {% typedoc_link classes:RegExValidator %}. The new validator is included in the [validators list]({% slug dataform-validation-list %}).([#173](https://github.com/telerik/nativescript-ui-feedback/issues/173))
- Added a new validator - {% typedoc_link classes:IsTrueValidator %}. The new validator is included in the [validators list]({% slug dataform-validation-list %}). ([#176](https://github.com/telerik/nativescript-ui-feedback/issues/176))
- Added a property {% typedoc_link classes:PropertyEditorStyle,member:labelPosition %} to control if labels are above editors or on the same row. More information in [this article]({% slug dataform-styling %}).([#59](https://github.com/telerik/nativescript-ui-feedback/issues/59))
- Added a property {% typedoc_link classes:PropertyEditorStyle,member:labelWidth %} to control the width of the labels. More information in [this article]({% slug dataform-styling %}).([#179](https://github.com/telerik/nativescript-ui-feedback/issues/179))
- Added a way ro create [custom validators]({% slug dataform-validation-custom %}). ([#53](https://github.com/telerik/nativescript-ui-feedback/issues/53))
- Added support for using validators through [JSON Metadata]({% slug dataform-validation-overview %}). ([#201](https://github.com/telerik/nativescript-ui-feedback/issues/201))
- Added support for [async validation]({% slug dataform-validation-events %}). ([#175](https://github.com/telerik/nativescript-ui-feedback/issues/175))
- Added a way to [manually show error]({% slug dataform-validation-custom %}) for a field. ([#175](https://github.com/telerik/nativescript-ui-feedback/issues/175))
- Added support for cross-property (check if [two properties have the same value]({% slug dataform-validation-events %})) validation. ([#173](https://github.com/telerik/nativescript-ui-feedback/issues/173))

## Fixed:
**RadAutoComplete**
- Fixed issue in Android where when using Async Data Fetch is triggered but the Page navigated from before it is finished
- Fixed issue where events are not passing the correct token ([#268](https://github.com/telerik/nativescript-ui-feedback/issues/268))
- Fixed issue in iOS that tokens could not contain non-latin symbols. ([#280](https://github.com/telerik/nativescript-ui-feedback/issues/280))

**RadChart**
- Fixed various issues with {% typedoc_link classes:PieSeries,member:showPercentage %} and {% typedoc_link classes:PointLabelStyle,member:textFormat %}. Now, the following behavior is observed: when setting `showPercentage` to `true` without a `textFormat` the Chart automatically appends a `%` symbol behind the data point values and converts the values to percentages
- Fixed an issue with selecting items in {% typedoc_link classes:RadLegendView %} not updating selection in the Chart
- Fixed an issue with GridLineAnnotation value parsing
- Fixed issues with default Date format and {% typedoc_link classes:DateTimeContinuousAxis %} and {% typedoc_link classes:Trackball %}
- Fixed issues with Pie Series and selection not working when {% typedoc_link classes:PieSeries,member:startAngle %} and {% typedoc_link classes:PieSeries,member:endAngle %} are set
- Fixed an issue with Legend not updating items when Chart source is updated
- Fixed an issue with removing Legend by setting the {% typedoc_link classes:RadChartBase,member:legend %} property to `null`
- Fixed issue with Axis label styles not re-applying when dynamically changing series and axes
- Fixed an issue with {% typedoc_link classes:Trackball %} not showing when used with {% typedoc_link classes:DateTimeCategoricalAxis %}
- Fixed an issue with {% typedoc_link classes:Trackball %} crashing when used with {% typedoc_link classes:DateTimeContinuousAxis %}
- Fixed an issue with Axis Label rendering when `majorStep` is dynamically changed
- Fixed wrong default date format of the label in the trackball when used with DateTimeContinuousAxis
- On Android setting `legend` to null raises error making it impossible to remove the legend at runtime
- Fixed an issue when setting the `value` of `ChartGridLineAnnotation` when used with `DateTimeContinuousAxis` causes exception
- Fixed an issue when setting the `minimum` and/or `maximum` to a JavaScript Date object via binding
- Fixed issue with the axe's label rendering, while changing the `majorStep` at runtime ([#233](https://github.com/telerik/nativescript-ui-feedback/issues/233))
- Fixed issue where the `category` property of `DateTimeCategoricalAxis` was settable to Date and/or String on Android but to only String on iOS
- Fixed issues while using webpack ([#140](https://github.com/telerik/nativescript-ui-feedback/issues/140))

**RadListView**
- Issues with multiple template selection
- Fixed an issue with missing {% typedoc_link classes:ListViewEventData,member:view %} property value
- Fixed an issue with {% typedoc_link classes:RadListView,member:itemReorderedEvent %} fired even after reorder operation was cancelled
- Fixed an issue with Header and Footer acquiring the size of the {% typedoc_link classes:ListViewLinearLayout,member:itemWidth %} {% typedoc_link classes:ListViewLinearLayout,member:itemHeight %} properties
- Fixed various Angular issues
- Fixed issues with scroll position not being correctly restored during backward navigation (on Android)
- Deprecate "swipe to execute" behavior
- Fixed issue where multiple RadListView templates weren't working ([#241](https://github.com/telerik/nativescript-ui-feedback/issues/241))
- Fixed issue that caused the scroll position to be lost when navigating back to view which includes the RadListView ([#269](https://github.com/telerik/nativescript-ui-feedback/issues/269))
- Updated specification on using the property `ItemHeight` with `ListViewGridLayout`

**RadSideDrawer**
- Fixed multiple issues when app navigation is done via the `drawerContent`

**RadDataForm**
- Fixed an issue when {% typedoc_link classes:EntityProperty,member:valuesProvider %} was updated runtime. ([#224](https://github.com/telerik/nativescript-ui-feedback/issues/224))
- Fixed an issue on iOS that the `propertyCommitted` event was called on initial loading of the form.
- Fixed an issue with distinguishing whether an editor is in [readOnly]({% slug dataform-readonly %}) mode or not. ([#220](https://github.com/telerik/nativescript-ui-feedback/issues/220))
- Fixed an issue with applying {% typedoc_link classes:EntityProperty,member:converter %} to initial property value.
- Fixed an issue on iOS with {% typedoc_link enums:EditorType,member:DatePicker %} editor for `null` values. ([#182](https://github.com/telerik/nativescript-ui-feedback/issues/182))
- Fixed an issue with styling of editors of type {% typedoc_link enums:EditorType,member:Switch %}. ([#57](https://github.com/telerik/nativescript-ui-feedback/issues/57))

# Release notes: 3.0.1
## General
- Fixed an issue with Webpack support for Angular

# Release notes: 3.0.0

## Breaking Changes:
**RadAutoComplete**
- The control now has a focused state which uses the application’s accent color (on Android)
- There is a default implementation of the clear button (on iOS)
- The property {% typedoc_link classes:RadAutoCompleteTextView,member:showCloseButton %}’s default value is now `true`
- The property {% typedoc_link classes:SuggestionView,member:suggestionViewHeight %}’s default value is now `undefined` which causes default measuring logic depending on the available space

**RadListView**
- {% typedoc_link classes:RadListView,member:itemSwipingEvent %}, {% typedoc_link classes:RadListView,member:itemSwipeProgressStartedEvent %}, {% typedoc_link classes:RadListView,member:itemSwipeProgressChangedEvent %}, {% typedoc_link classes:RadListView,member:itemSwipeProgressEndedEvent %} supply an instance of the {% typedoc_link classes:SwipeActionsEventData %} class that changes the way the Swipe View content, the Main View content and the {% typedoc_link classes:RadListView %} instance are accessed as follows:
- the `itemIndex` property no longer exists. Now {% typedoc_link classes:ListViewEventData,member:index %} returns the index of the item participating in the event
- the {% typedoc_link classes:SwipeActionsEventData,member:object %} no longer returns the Swipe View. It now returns the {% typedoc_link classes:RadListView %} instance firing the event
- the {% typedoc_link classes:SwipeActionsEventData,member:swipeView %} property returns the Swipe View content
- the {% typedoc_link classes:SwipeActionsEventData,member:mainView %} returns the Main View content

## New:
**RadCalendar**
- exposed API for styling the selection shape: https://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/Calendar/Styling/month-view#styling-month-view

**RadDataForm**
- {% typedoc_link classes:PropertyGroup %} now has a {% typedoc_link classes:PropertyGroup,member:collapsible %} property to control whether its collapsed or not
- {% typedoc_link classes:EntityProperty %}’s {% typedoc_link classes:EntityProperty,member:valuesProvider %} now has support for custom objects with keys and values. More info [**here**]({% slug dataform-valueproviders %}).

**RadAutoComplete**
- Added {% typedoc_link classes:RadAutoCompleteTextView,member:tokenDeselectedEvent %}, {% typedoc_link classes:RadAutoCompleteTextView,member:didAutoCompleteEvent %} and {% typedoc_link classes:RadAutoCompleteTextView,member:suggestionViewBecameVisibleEvent %} events 
- {% typedoc_link classes:AutoCompleteEventData %} now contains information about the {% typedoc_link classes:AutoCompleteEventData,member:token %} and its {% typedoc_link classes:AutoCompleteEventData,member:text %}

**RadListView**
- the following scrolling events are now available: {% typedoc_link classes:RadListView,member:scrollStartedEvent %}, {% typedoc_link classes:RadListView,member:scrolledEvent %}, {% typedoc_link classes:RadListView,member:scrollEndedEvent %}
- API for programmatically scrolling with a given amount of pixels: {% typedoc_link classes:RadListView,member:scrollWithAmount() %}
- API for querying the current scroll offset of the list: {% typedoc_link classes:RadListView,member:getScrollOffset() %}
- API for multiple templates support: https://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/ListView/multiple-templates
- API for styling the Pull-to-Refresh indicator: https://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/ListView/pull-to-refresh#styling-the-pull-to-refresh-indicator
- API for turning `scrollToIndex` animation `on` or `off`


## Fixed:
**RadCalendar**
- fixed an issue on Android with `showTitle` styling attribute conflicting with the same defined on the SDK's ActionBar
- fixed an issue with {% typedoc_link classes:RadCalendar,member:selectedDateRange %} returning wrong selected dates on Android
- fixed various styling issues

**RadListView**
- fixed issues with Data Binding support for Header & Footer on iOS Angular
- fixed an issue with setting the {% typedoc_link classes:ListViewLinearLayout,member:itemInsertAnimation %} property via XML
- fixed an issue with loosing event subscriptions on list items when navigating from one page to another and then going back on Angular
- fixed an issue with selection behaving erroneously on Android when List Header is defined
- fixed an issue with Pull-to-Refresh event firing before releasing the finger on iOS
- fixed an issue with Load On Demand template not working on Angular
- fixed a crash when no {% typedoc_link classes:RadListView,member:listViewLayout %} is not defined
- fixed issues with Pull-to-Refresh sensitivity
- fixed an issue with item animations and inserting items at the beginning of the list
- fixed an issue with not being able to cancel the {% typedoc_link classes:RadListView,member:itemSelectingEvent %}
- fixed an issue with swipe limits being ignored on Android when set to 0
- fixed an issue with swipe limits being inverted on Android

**RadDataForm**
- {% typedoc_link classes:EntityProperty %}’s {% typedoc_link classes:EntityProperty,member:readOnly %} property couldn’t be changed runtime (
- {% typedoc_link classes:PropertyGroup %}’s {% typedoc_link classes:PropertyGroup,member:titleHidden %} property couldn’t be changed runtime
- {% typedoc_link classes:PropertyGroup %}’s properties didn’t support data binding
- The index attribute in JSON {% typedoc_link classes:RadDataForm,member:metadata %} had no effect (on iOS)

**RadAutoComplete**
- The control could be scrolled in all directions and was giving misleading edge glows when scroll should have been disabled
- The properties {% typedoc_link classes:RadAutoCompleteTextView,member:showCloseButton %} and {% typedoc_link classes:RadAutoCompleteTextView,member:closeButtonImageSrc %} had inconsistent behavior between Android and iOS
- The property {% typedoc_link classes:RadAutoCompleteTextView,member:completionMode %} couldn’t be changed runtime
- The control’s height was not updated correctly when the {% typedoc_link classes:RadAutoCompleteTextView,member:layoutMode %} was updated
- The {% typedoc_link classes:RadAutoCompleteTextView,member:suggestionView %} had layout issues causing it to sometimes stay open or stay over the keyboard
- Exception when trying to remove duplicated tokens (on iOS)


# Release notes: 2.0.0

## General
- This release officially supports the {N} 3.0 major version. Note: because of breaking changes that come from 3.0 itself the nativescript-telerik-ui 2.0.0 plugin also introduces some breaking changes to its public APIs, all of them are described below:

## Breaking changes

**RadChart**
- Changed the type of `majorStep` from `number` to `string`

**RadDataForm**
- `style` property of `PropertyEditor` renamed to `propertyEditorStyle`

**RadRadialGauge**
- `style` property of `GaugeScale` renamed to `scaleStyle`
- `style` property of `RadialNeedle` renamed to `needleStyle`
- `style` property of `BarIndicator` renamed to `indicatorStyle`

**RadSideDrawer**
- `showOverNavigation` has been reworked. This feature has been simplified and the previous `DrawerPage` has been removed. Now all you need to do is set `showOverNavigation` to `true`, more details [**here**]({% slug sidedrawer-show-over-nav-bar-angular %}).

## New

**RadCalendar**
- {% typedoc_link classes:RadCalendar,member:locale %} property introduced

**RadListView**
- exposed native event parameners in the arguments of the {% typedoc_link classes:RadListView,member:itemTapEvent %}

## Fixed

**RadDataForm**
- The `titleStyleProperty` default value was previously incorrectly set to `false` which is not compatible with the property which is of type `GroupTitleStyle`, changed to `undefined`
- Renamed `TKPropertyEditorirective` to `TKPropertyEditorDirective`. This shouldn't effect the public API since the selector `<TKPropertyEditor></TKPropertyEditor>` is not changed

**RadListView**
- RadListView with `loadOnDemandMode` will crash after navigation back from details page ([#69](https://github.com/telerik/nativescript-ui-feedback/issues/69))
- Fixed Item Header and Item Footer layout glitch when using {% typedoc_link classes:ListViewGridLayout %}

**RadSideDrawer**
- `showOverNavigation` not working in {N} + Angular projects ([#61](https://github.com/telerik/nativescript-ui-feedback/issues/61)). This feature has been simplified, more information can be found [**here**]({% slug sidedrawer-show-over-nav-bar-angular %}).


# Release notes: 1.6.2

## Fixed

**RadListView**
- Fixed missing RecyclerView reference when creating a release build

# Release notes: 1.6.1

## General
- The _nativescript-telerik-ui/pro_ plugin is compatible with Angular Ahead-of-time compilation

## New

**RadAutoCompleteTextView**
- Added a way to show a close button in Tokens (iOS)

## Fixed

**RadCalendar**
- When the calendar is in year viewMode (in xml), first the month view is loaded then the year mode (Android)
- The viewModeChanged event was not called when changing between Year and MonthNames (Android)
- When screen is rotated with inline events open, the view is not updated correctly (Android)
- Week numbers were not calculated correctly (iOS)
- Tapping on a month in year view now animates to month view (on iOS for parity with Android)
- Opened event remains open after eventViewMode change (iOS)

**RadDataForm**
-  Not all validation messages are shown after checking for errors via {% typedoc_link classes:RadDataForm,member:hasValidationErrors() %} (iOS)

**RadListView**
- Setting {% typedoc_link classes:ListViewGridLayout,member:spanCount %} to an odd number and when in landscape orientation there is a vertical white line between some items ([#54](https://github.com/telerik/nativescript-ui-feedback/issues/54))
- The item's height is stretched to the entire view port (Android)

# Release notes: 1.6.0

## New

**RadDataForm**
- Added property converters
- Added {% typedoc_link classes:PropertyGroup,member:titleHidden %} to control whether editor group title was visible
- Added custom editors
- Added {% typedoc_link classes:RadDataForm,member:hasValidationErrors() %} method to the RadDataForm that returns the validation status of the entire form
- Added `AutoCompleteInline` editor


## Fixed

**RadAutoCompleteTextView**
- Various fixes and improvements

**RadDataForm**
- That editor styles were lost when data form was read only (android)
- Property value was clamped when outside of the default Stepper editor range (iOS)
- Original entity's property values were not updated after commit (iOS)
- Exception when valuesProvider was set an array of numbers
- The custom "PropertyEditorStyle" is lost if the RadDataForm's isReadOnly is set to true (android)

**RadSideDrawer**
- Setting "drawerTransition" via XML throws exception
- Using an `<router-outlet></router-outlet>` in the `tkMainContent`

**RadListView**
- 'swipeActions' stops working if you navigate to a new Page and come back (android)
- App crashes when navigating back to a ListView with a header/footer

# Release notes: 1.5.1

## General
- The nativescript-telerik-ui/pro plugin is compatible with webpack and no longer throws exceptions when packing

## New

**RadChart**
- Added Angular directives that allow changing the style of the PieSeries in RadPieChart via its {% typedoc_link classes:Palette %} and {% typedoc_link classes:PaletteEntry %}:
- Fixed a bug that caused dates to render incorrectly on DateTimeContinuousAxis due to DST (Daylight Savings Time).

```
tkPiePalette - Directive identifying the palette objects of the RadPieChart component.
tkPiePaletteEntry - Directive identifying an object of `entries` collection of the Palette.
```

**RadListView**
- Swipe Actions: an improved version of the already familiar Swipe-to-Execute experience. For more information: [RadListView: Swipe Actions]({% slug listview-features-swipe-actions %})

**RadDataForm**
- Angular directives released. Take a look at the dedicated article for more information: [DataForm for Angular]({% slug dataform-gettingstarted-angular %})

- Added [group layouts](https://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/DataForm/Groups/dataform-groups-layouts)
- Added [image labels](https://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/DataForm/dataform-imagelabels)
- Added {% typedoc_link classes:RadDataForm,member:metadata %} property for dataform setup through json file
- Added [editor params](https://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/DataForm/dataform-editors#editor-params) for easier setup of editors through xml

**RadAutoCompleteTextView** (Beta)
New added **RadAutoCompleteTextView** control (Beta version) with the following features.

- Suggest modes
- Display modes
- Layout modes
- Completion modes

## Fixed
**RadCalendar**
- Fixed issue causing the `inlineEventSelectedEvent` to not be fire

**RadListView**
- Fixed issue with `isItemSelected()` wrongly returning `false` for a selected item
- Fixed issue where `.scrollToIndex()` does not work on iOS with horizontal layout
- Fixed issue with `isItemSelected()` wrongly returning `false` for a selected item
- Fixed issue with cell not closing in swipe actions on tap outside the swiped cell

**RadChart**
- Fixed issues with `DateTimeContinuousAxis`
- Fixed issue in the `pointSelected/pointDeselected` events causing the `pointIndex` of the ChartEventData to be undefined
- Fixed issue causing the `series` of the `ChartEventData` in the `pointSelected` event to be undefined

**RadSideDrawer**
- Styles/CSS not loading in Angular

**RadDataForm**
- Fixed an issue that {% typedoc_link classes:EntityProperty,member:displayName %} couldn't be empty
- Fixed an issue that {% typedoc_link classes:RadDataForm,member:commitMode %} and {% typedoc_link classes:RadDataForm,member:validationMode %} couldn't be changed from xml
- Fixed an issue with different values that are picked from {% typedoc_link enums:EditorType,member:List %}, {% typedoc_link enums:EditorType,member:Picker %} and {% typedoc_link enums:EditorType,member:SegmentedEditor %} editors in android and ios
- Fixed an issue that {% typedoc_link classes:EntityProperty,member:readOnly %} was not applied on android
- Fixed an issue that {% typedoc_link enums:EditorType,member:Phone %} was not showing the Phone keyboard on iOS
- Fixed an issue that {% typedoc_link enums:PropertyGroup,member:hidden %} was not applied correctly on iOS

# Release notes: 1.4.0
## New
**RadChart**
- Added Angular 2 inline directives for setting the `Axis` of each `Series` (multiple axis):

```
tkLineVerticalAxis - sets vertical axis to LineSeries
tkLineHorizontalAxis - sets horizontal axis to LineSeries
tkBarVerticalAxis - sets vertical axis to BarSeries
tkBarHorizontalAxis - sets horizontal axis to BarSeries
tkRangeBarVerticalAxis - sets vertical axis to RangeBarSeries
tkRangeBarHorizontalAxis - sets horizontal axis to RangeBarSeries
tkAreaVerticalAxis - sets vertical axis to AreaSeries
tkAreaHorizontalAxis - sets horizontal axis to AreaSeries
tkSplineVerticalAxis - sets vertical axis to SplineSeries
tkSplineHorizontalAxis - sets horizontal axis to SplineSeries
tkSplineAreaVerticalAxis - sets vertical axis to SplineAreaSeries
tkSplineHorizontalAxis - sets horizontal axis to SplineAreaSeries
tkBubbleVerticalAxis - sets vertical axis to BubbleSeries
tkBubbleHorizontalAxis - sets horizontal axis to BubbleSeries
tkScatterBubbleVerticalAxis - sets vertical axis to ScatterBubbleSeries
tkScatterBubbleHorizontalAxis - sets horizontal axis to ScatterBubbleSeries
tkCandlestickVerticalAxis - sets vertical axis to CandlestickSeries
tkCandlestickHorizontalAxis - sets horizontal axis to CandlestickSeries
tkOhlcVerticalAxis - sets vertical axis to OhlcSeries
tkOhlcHorizontalAxis - sets horizontal axis to OhlcSeries
tkScatterVerticalAxis - sets vertical axis to ScatterSeries
tkScatterHorizontalAxis - sets horizontal axis to ScatterSeries
```

**RadDataForm**
-	Added support for runtime property changes of the entity properties
-	Added support for data binding of the properties of `EntityProperty`

## Fixed
**RadChart**
- Setting `verticalAxis/horizontalAxis` of an Series object (Multiple axes) at runtime (angular) does not work while running on iOS
- In the `pointSelected/pointDeselected` events on iOS the `pointIndex` of the ChartEventData is undefined
- The `series` of the `ChartEventData` in the `pointSelected` event on Android is null
- When running on {N} + Angular 2 in Android the `Palette` is shared between the entire series families causing the default to be overridden

**RadDataForm**
-	fixed an issue with `index` property not being applied correctly

**RadListView**
- Setting styles to `headerItemTemplate` and `footerItemTemplate` via css (class) are not applied on Android


**RadSideDrawer**
- When running on {N} + Angular 2 and using the RadListView causes its `pullToRefreshInitiated` and `itemSelected` events to stop working
- In {N} + Angular 2 application setting the `transition` property via binding initialized in `ngOnInit` causes incorrect offset

# Release notes: 1.3.1
## New
**RadListView**
- Added support for {% typedoc_link classes:ListViewLinearLayout %} in Angular 2
- Added support for {% typedoc_link classes:ListViewGridLayout %} in Angular 2
- Added support for {% typedoc_link classes:ListViewStaggeredLayout %} in Angular 2
- Added support for {% typedoc_link classes:ReorderHandle %} in Angular 2

**RadChart**
- Full Angular 2 support

**RadSideDrawer**
- Added support for displaying the Drawer over the Action Bar on Android and iOS

**RadDataForm**
- an entirely new component

## Fixed
**RadListView**
- fixed a discrepancy between the behaviors of swipe-to-execute on Android and iOS

**RadSideDrawer**
- fixed an issue where using `router-outlet` (child routes) was not working when placed inside `tkMainContent`
- In Angular 2 placing `RadListView` instances inside `RadSideDrawer` no longer brakes event handlers attached to `RadListView`'s events

**RadCalendar**
- fixed an issue with applying a `displayDate` in XML
- fixed an issue where `viewMode` was not properly updated
- fixed an issue with the `navigatedToDate` event not being called
- fixed an issue with cells being outside of the viewport still being selected with a gesture

## Breaking
**RadListView**
-	The Angular 2 custom RadListView directives have gone through a makeover and have been renamed. Now all nativescript-telerik-ui Angular 2 inline directives all share the ‘tk’ prefix, more details about the custom directives can be found [here](https://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/ListView/overview#angular-directives):

```
listItemTemplate -> tkListItemTemplate
listViewHeader -> tkListViewHeader
listViewFooter -> tkListViewFooter
listItemSwipeTemplate -> tkListItemSwipeTemplate
listLoadOnDemandTemplate -> tkListLoadOnDemandTemplate
radListViewLayout -> tkListViewLayout
```

**RadChart**
-	The Angular 2 custom RadChart directives have gone through a makeover and have been renamed. Now all nativescript-telerik-ui Angular 2 inline directives all share the ‘tk’ prefix, more details about the custom directives can be found [here](https://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/Chart/overview#angular-directives):

```
cartesianSeries -> tkCartesianSeries
pieSeries -> tkPieSeries
cartesianGrid -> tkCartesianGrid
cartesianPalette -> tkCartesianPalette
cartesianHorizontalAxis -> tkCartesianHorizontalAxis
cartesianVerticalAxis -> tkCartesianVerticalAxis
pieLegend -> tkPieLegend
cartesianLegend -> tkCartesianLegend
cartesianTrackball -> tkCartesianTrackball
cartesianAnnotations -> tkCartesianAnnotations
pieLabelStyle -> tkPieLabelStyle
donutLabelStyle -> tkDonutLabelStyle
lineLabelStyle -> tkLineLabelStyle
barLabelStyle -> tkBarLabelStyle
rangeBarLabelStyle -> tkRangeBarLabelStyle
areaLabelStyle -> tkAreaLabelStyle
splineLabelStyle -> tkSplineLabelStyle
splineAreaLabelStyle -> tkSplineAreaLabelStyle
bubbleLabelStyle -> tkBubbleLabelStyle
scatterBubbleLabelStyle -> tkScatterBubbleLabelStyle
candlestickLabelStyle -> tkCandlestickLabelStyle
ohlcLabelStyle -> tkOhlcLabelStyle
scatterLabelStyle -> tkScatterLabelStyle
cartesianPaletteEntry -> tkCartesianPaletteEntry
```

**RadSideDrawer**
-	The Angular 2 custom RadChart directives have gone through a makeover and have been renamed. Now all nativescript-telerik-ui Angular 2 inline directives all share the ‘tk’ prefix, more details about the custom directives can be found [here](https://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/SideDrawer/overview#angular-directives):

```
drawerMain -> tkMainContent
drawerSide -> tkDrawerContent
```

-   The `tkMainContent` and `tkDrawerContent` directives are no longer set on a &lt;template&gt; element but rather on the layout container (StackLayout, GridLayout etc.) directly.

# Release notes: 1.2.0
## New
**RadChart**
- Angular 2 RC3 support (beta)
- Selection behavior of series and data points is improved for iOS and Android. See updated documentation [article]({% slug chart-selection %} "Read more about selection behavior of chart component")
- Major improvements in dynamic updates of chart elements in case of changes applied from the code behind.

**RadCalendar**
- Angular 2 RC3 support

**RadListView**
- Major performance improvements for the iOS platform
- Support for Angular 2 RC3 added
- Typescript definitions for Angular 2 RC3 added

**RadSideDrawer**
- Ability to show over NavigationBar on iOS added, Android support is on its way
- Support for Angular 2 RC3 added
- Typescript definitions for Angular 2 added

## Fixes
**RadListView**
- Cannot find module 'nativescript-telerik-ui/listview/angular/listview-directives' fixed

**RadSideDrawer**
- Cannot find module 'nativescript-telerik-ui/sidedrawer/angular/side-drawer-directives' fixed

## Breaking changes
**RadChart**
- {% typedoc_link classes:RadChartBase,member:series %} , {% typedoc_link classes:RadChartBase,member:annotations %} and {% typedoc_link classes:RadChartBase,member:palettes %} properties of RadChart are changed to `ObservableArray` instances.
You need to access items using getItem() methods instead of **[]** operator
- {% typedoc_link classes:RadChartBase,member:selectionMode %} property is deprecated.
 Use {% typedoc_link classes:RadChartBase,member:seriesSelectionMode %} property of `RadCartesianChart` with values of {% typedoc_link modules:SeriesSelectionMode %} module and use {% typedoc_link classes:RadChartBase,member:pointSelectionMode %} property with values exported from {% typedoc_link modules:ChartSelectionMode %} module instead.
- You need to use {% typedoc_link classes:ChartSeries,member:selectionMode %} property of `ChartSeries` with values of {% typedoc_link modules:SeriesSelectionMode %} module.


# Release notes: 1.1.1
## New
**RadChart**
- Styling of series and datapoint selection

## Fixes
**RadChart**
- DateTime axes fixes
- various fixes and optimizations

**RadListView**
- fixed an issue with item height not being calculated correctly on Android


**RadCalendar**
- Major performance optimizations for Android

# Release notes: 1.1.0
## New
**RadListView**
- Angular 2.0 directives released. Take a look at the dedicated article for more information: [ListView for Angular]({% slug listview-getting-started-angular %})

**RadSideDrawer**
- Angular 2.0 directives released. Take a look at the dedicated article for more information: [SideDrawer for Angular]({% slug sidedrawer-gettingstarted-angular %})

# Release notes: 1.0.0
## New
**RadListView**
- `itemLoading` event which is fired for each item that is being visualized in the viewport of the control
- support for Header and Footer exposed through `itemHeaderTemplate` and `itemFooterTemplate`
- support for Load on Demand item customization via `loadOnDemandItemTemplate`
- `reorderMode` property for switching between `HoldAndDrag` and `Drag` reorder modes. More information about this is available here: [ListView: Item Reorder]({% slug listview-features-item-reorder %})
- selection indication for Android by default

**RadCalendar**
- possibility to change calendar transitions through `transitionMode`
- support for changing transition's direction using `horizontalTransition`
- support for inline and popover events through `eventsViewMode`
- support for custom styling of calendar in all view modes
- support for event color via `eventColor` property of `CalendarEvent` class

**RadCartesianChart**
- trackball support using `trackball` property

**RadSideDrawer**
- support for disabling swipe to open/close behavior through `gesturesEnabled`

## Fixes
**RadListView**
- fixed issue with control not showing then Pull-to-Refresh is enabled
- fixed issue with missing selection indicator on Android
- fixed issue with list not refreshing when `ObservableArray` is used as a source and `unshift` is called at index 0

**RadCalendar**
- fixed date selection binding issue

**RadChart**
- fixes for runtime updates of changed properties

## Breaking changes
**RadListView**
- `swipeCells` renamed to `itemSwipe`
- `cellReorder` renamed to `itemReorder`

# Release notes: 0.2.5

## New
**RadListView**
- support for load-on-demand view customization via the `loadOnDemandItemTemplate` property
- support for one additional item reorder mode: Drag. Set by using the `reorderMode` property: [**RadListView Item Reorder**]({% slug listview-features-item-reorder %})

## Fixes
**RadListView**
- fixed an issue on iOS which prevented RadListView from correctly calculating items' size on orientation changes
- fixed an issue with multiple layout calls causing performance degradation on iOS
i
# Release notes: 0.2.4

## New
- migrated to {N} 1.6.0

# Release notes: 0.2.3

## New
**RadListView**
- new `itemReorderStarted` event that is fired before an item reorder action is performed by the user

**RadCartesianChart**
- new `labelRotationAngle` and `labelFitMode` added as additional customization options for labels in cartesian axes

## Fixes
- Missing legend positioned in Left or Right for Android Chart
- Crash of Pie chart for iOS when items collection is updated in runtime.

**RadSideDrawer**
- External CSS styling not applying for main and drawer contents.

# Release notes: v0.2.0

## New
**RadCalendar** is now included in nativescript-telerik-ui for more information on the control check out the corresponding documentation article: [**RadCalendar Overview**]({% slug calendar-overview %})

## Fixes
**RadSideDrawer**
- error when hiding modal page with RadSideDrawer

## Features
**RadListView**
- `notifySwipeToExecuteFinished()` - a method used to reset the swipe-to-execute state of RadListView

## Breaking changes:
**RadListView**
- `didLoadDataOnDemand()` is renamed to `notifyLoadOnDemandFinished()`
- `didPullToRefresh()` is renamed to `notifyPullToRefreshFinished()`


# Release notes: v0.1.3

## Fixes:
**RadListView**
- A bug causing faulty behavior with inserting, deleting or updating items via an `ObservableArray`.
- A bug on iOS with dynamic item sizing

# Release notes: v0.1.2

## Overview
With **0.1.2** we're introducing support for NativeScript 1.5. Additionally, there are a bunch of fixes and improvements on the existing controls, as well as brand new features. For more information, take a look at the following sections.

## Features:

**RadListView**
- Selection API introduced. For more information, check out the corresponding documentation article: [**ListView Selection**]({% slug listview-features-item-selection %})
- No need to manually manage the `RecyclerView` reference

**RadCartesianChart** and **RadPieChart**
- Selection behavior and API introduced. For more information, check out the corresponding documentation article: [**RadCartesianChart Selection**]({% slug chart-selection %})
- Pan & Zoom behaviors and API introduced. For more information, check out the corresponding documentation article: [**RadCartesianChart Pan&Zoom**]({% slug chart-pan-and-zoom %})
- Pie series improved. For more information, check out the corresponding documentation article: [**PieSeries Customization**]({% slug chart-types-pie %})
- Chart annotations implemented. For more information, check out the corresponding documentation article: [**Chart Annotations**]({% slug chart-annotations %})

**RadSideDrawer**
- SideDrawer overrides bindingContext on mainContent and drawerContent if set manually.

## Breaking changes:

**RadListView:**
All events are now renamed as follows:
- `shouldSelectItem` becomes `itemSelecting`
- `shouldDeselectItem` becomes `itemDeselecting`
- `didSelectItem` becomes `itemSelected`
- `didDeselectItem` becomes `itemDeselected`
- `didReorderItem` becomes `itemReordered`
- `shouldSwipeCell` becomes `itemSwiping`
- `didSwipeCell` becomes `itemSwipeProgressChanged`
- `startSwipeCell` becomes `itemSwipeProgressStarted`
- `didFinishSwipeCell` becomes `itemSwipeProgressEnded`
- `didPull` becomes `pullToRefreshInitiated`
- `shouldLoadMoreData` becomes `loadMoreDataRequested`

**RadCartesianChart:**
- Point labels styling properties are moved to dedicated PointLabelStyle class. For more information check out the article [**Styling Point Labels**]({% slug chart-labels-styling %})

**RadSideDrawer**
- Removed SideDrawerDelegate. Introduced events on its place. For more information on events in RadSideDrawer check this article: [**SideDrawer callbacks**]({% slug sidedrawer-callbacks %})

# Release notes: v0.1.0
## Features:
**RadListView** - a new component in Progress NativeScript UI. **RadListView** is based on the familiar native List controls from Progress UI for Android and Progress UI for iOS. It exposes their major features through a unified API. Currently available features are:
- swipe-to-execute
- item layouts (linear, grid, staggered)
- pull-to-refresh
- item reorder
- load-on-demand
- observable array support
- item animations

**SideDrawer:**
- toggleDrawerState method

## Fixes:
**Chart:**
- issue on Android with attempting to insert a Chart node into the children collection of another parent node

**SideDrawer:**
- only uppercase drawerLocation values are respected
- iOS: Releasing swipe gesture in order to navigate back to the main page causes a crash

## Breaking changes:
**Chart:**
All top-level types are now renamed as follows:
- `CartesianChart` becomes `RadCartesianChart`
- `PieChart` becomes `RadPieChart`


**SideDrawer:**
All top-level types are now renamed as follows:
- `SideDrawer` becomes {% typedoc_link classes:RadSideDrawer %}
