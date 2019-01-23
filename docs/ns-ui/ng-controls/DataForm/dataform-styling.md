---
title: Styling
page_title: RadDataForm Styling | Progress NativeScript UI Documentation
description: This article explains how the change the styling of the editors and groups in RadDataForm for NativeScript.
slug: dataform-styling-angular
tags: raddataform, styling, dataform, angular
position: 7
publish: true
---

# RadDataForm: Styling

If you followed the [getting started]({% slug dataform-start-source-angular %} "RadDataForm getting started") section, you now know how to edit an object's properties with `RadDataForm` for NativeScript. This article will show you how to change the style of each editor, its label or the groups if grouping is enabled. 

* [CSS](#css)
* [Styling Editors](#styling-editors)
* [Styling Group Headers](#styling-group-headers)
* [Styling Native Components](#styling-native-components)
* [References](#references)

## CSS

The easiest way to change the styles in RadDataForm is to apply [css styles](https://docs.nativescript.org/angular/ui/styling). You can use the following type selectors to define the styles for the different elements:

* **RadDataForm**: Can be used to apply styles the whole DataForm.
* **DataFormEditorLabel**: Can be used to style the labels of the editors.
* **DataFormEditorCore**: Can be used to style the different editors - TextField, DatePicker, etc.
* **PropertyEditor**: Can be used to style the full editor for a property, that includes the core editor (`DataFormEditorCore`) and its header text (`DataFormEditorLabel`).

> Please note that currently the group headers can't be styles with CSS.

#### Figure 1: RadDataForm with applied css on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Styling-04-Android](/controls/NativeScript/DataForm/images/dataform-styling-04-android.png "Styling of RadDataForm in Android") ![NativeScriptUI-DataForm-Styling-04-iOS](/controls/NativeScript/DataForm/images/dataform-styling-04-ios.png "Styling of RadDataForm in iOS")

Here's the css that is used for the form in the above pictures:

#### Example 1: Applying css with the RadDataForm type selector

```CSS
RadDataForm {
	background-color: #4CAF50;
	color: #3F51B5;
	padding: 5;
	margin: 5;
	border-color: #303F9F;
	border-width: 5;
	border-radius: 5;
}

PropertyEditor {
	background-color: transparent;
	separator-color: #303F9F;
}
```

The above example uses the `RadDataForm` and `PropertyEditor` selectors. Here's how you can use the other available selectors (`DataFormEditorCore` and `DataFormEditorLabel`) to match the separate elements of the form:

#### Example 2: Applying css with the PropertyEditor, DataFormEditorLabel and DataFormEditorCore type selectors

```CSS
PropertyEditor {
	background-color: #00BCD4;
	color: #303F9F;
	border-color: #303F9F;
	border-width: 5;
	border-radius: 5;
	margin: 10;
	padding: 10;
	font-size: 14;
}

DataFormEditorLabel {
	color:#212121;
	background-color: white;
	font-style: italic;
	padding: 10;
	margin: 10;
	border-color: #303F9F;
	border-width: 5;
	border-radius: 5;
	width: 150;
	position: left;
}

DataFormEditorCore {
	margin: 10;
	padding: 10;
	background-color: white;
	border-color: #303F9F;
	border-width: 5;
	border-radius: 5;
	font-family: 'Times New Roman', Times, serif;
}

PropertyEditor[type='Email'] {
	font-weight: bold;
}

EntityProperty[name='name'] DataFormEditorLabel {
	width: 0;
	visibility: collapsed;
}
```

Note how you can use `EntityProperty` with `name` to match only the editors for a specific property and also you can use `PropertyEditor` with `type` to match all editors of a specific type. Here's how the form will look when the above style is applied.

#### Figure 2: RadDataForm with applied css on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Styling-05-Android](/controls/NativeScript/DataForm/images/dataform-styling-05-android.png "Styling of RadDataForm in Android") ![NativeScriptUI-DataForm-Styling-05-iOS](/controls/NativeScript/DataForm/images/dataform-styling-05-ios.png "Styling of RadDataForm in iOS")

This is the list of supported css properties for the different selectors:

| property                     | description                                                                                     | RadDataForm         | PropertyEditor        | DataFormEditorLabel        | DataFormEditorCore        |
|:-------------------------|:--------------------------------------------------------------------|:----------------------:|:---------------------:|:-----------------------------:|:-----------------------------:|
| `color`                           | Sets the color for the foreground.                                         | yes                          | yes                         | yes                                     | yes                                    |
| `background-color` | Sets the color for the background.                                        | yes                         | yes                         | yes                                     | yes                                    |
| `border-color`         | Sets the color for the border.                                                 | yes                         | yes                         | yes                                     | yes                                    |
| `font-family`           | Sets the font family.                                                                | yes                         | yes                         | yes                                     | yes                                    |
| `font-style`             | Sets the font style (normal or italic) .                                      | yes                         | yes                         | yes                                     | yes                                    |
| `font-weight`           | Sets the font weight.                                                               | yes                         | yes                         | yes                                     | yes                                    |
| `font-size`               | Sets the font size (dip only).                                                    | yes                         | yes                         | yes                                     | yes                                    |
| `margin`                     | Sets the distance of the view within its parent.                       | yes                         | yes                         | yes                                     | yes                                   |
| `padding`                   | Sets the distance between the border and the content.          | yes                         | yes                         | yes                                     | yes                                  |
| `border-width`        | Sets the width of the border.                                                     | yes                         | yes                         | yes                                     | yes                                   |
| `border-radius`      | Sets the radius of the border.                                                   | yes                         | yes                         | yes                                     | yes                                    |
| `visibility`            | Sets the view visibility (visible or collapsed).                             | yes                         | no                         | yes                                      | no                                      |
| `position`                | Sets the position of the label relative to the editor. (left or top)  | no                         | no                         | yes                                     | no                                      |
| `width`                       | Sets the width of the view.                                                      | yes                         | no                         | only when position is left      | no                                     |
| `height`                     | Sets the height of the view.                                                     | yes                         | no                         | no                                       | no                                       |
| `separator-color`  | Sets the color of the line separator of the editor.                    | no                         | only on iOS            | no                                       | no                                      |

## Styling Editors

In order to change the style of an editor, you need to follow these steps:

- Declare the `TKEntityProperty` and set the `tkPropertyGroupProperties` inline directive to it in your HTML.
- Between its tags declare an `TKPropertyEditor` and set the `tkEntityPropertyEditor` inline directive to it.
- Finally between the `TKPropertyEditor` tags declare the `TKPropertyEditorStyle` and set the `tkPropertyEditorStyle` inline directive to it

Here's what you can update in editor through its style:

* {% typedoc_link classes:DataFormStyleBase,member:fillColor %}: The color that will be used as background of the editor.
* {% typedoc_link classes:DataFormStyleBase,member:strokeColor %}: The color of the border of the editor.
* {% typedoc_link classes:DataFormStyleBase,member:strokeWidth %}: The width of the border of the editor.
* {% typedoc_link classes:DataFormStyleBase,member:separatorColor %}: The color of the line separator of the editor /iOS only/.
* {% typedoc_link classes:DataFormStyleBase,member:labelTextSize %}: The size of the text of the editor's label.
* {% typedoc_link classes:DataFormStyleBase,member:labelFontName %}: The name of the font that is used for the text of the editor's label.
* {% typedoc_link classes:DataFormStyleBase,member:labelFontStyle %}: The {% typedoc_link enums:FontStyle %} for the text of the editor's label.
* {% typedoc_link classes:PropertyEditorStyle,member:editorHorizontalOffset %}: Horizontal offset to be applied to the editor.
* {% typedoc_link classes:PropertyEditorStyle,member:editorVerticalOffset %}: Vertical offset to be applied to the editor.
* {% typedoc_link classes:PropertyEditorStyle,member:labelHorizontalOffset %}: Horizontal offset to be applied to the editor's label.
* {% typedoc_link classes:PropertyEditorStyle,member:labelVerticalOffset %}: Vertical offset to be applied to the editor's label.
* {% typedoc_link classes:PropertyEditorStyle,member:labelHidden %}: Indicates whether this editor will have its label visible or hidden.
* {% typedoc_link classes:PropertyEditorStyle,member:labelPosition %}: Indicates the position of the label relative to the editor. It must be one of: {% typedoc_link enums:DataFormLabelPosition,member:Left %} (default on iOS) or {% typedoc_link enums:DataFormLabelPosition,member:Top %} (default on Android).
* {% typedoc_link classes:PropertyEditorStyle,member:labelWidth %}: The width of the label. It has effect only if the {% typedoc_link classes:PropertyEditorStyle,member:labelPosition %} is {% typedoc_link enums:DataFormLabelPosition,member:Left %}.

If you need to make changes to the styles runtime, you can get access the current style of an editor through the `TKEntityProperty`. Here's an example of how to change the `fillColor` for the editor of the property `name`.

#### Figure 3: RadDataForm with some of the editor's styling properties changed on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Styling-01-Android](/controls/NativeScript/DataForm/images/dataform-styling-01-android.png "Styling of RadDataForm in Android") ![NativeScriptUI-DataForm-Styling-02-iOS](/controls/NativeScript/DataForm/images/dataform-styling-01-ios.png "Styling of RadDataForm in iOS")

#### Example 3: Changing the fillColor of an editor

<snippet id='angular-dataform-getting-started-runtime-change'/>

Note that in this example we make the change when `RadDataForm` is already loaded and its editors are initialized (in this case on a button tap), otherwise the default {% typedoc_link classes:PropertyEditorStyle %} may not be initialized and {% typedoc_link classes:PropertyEditor,member:propertyEditorStyle %} will be `undefined`.

## Styling Group Headers

In order to change the style of the header of a group, you need to create an instance of `TKGroupTitleStyle` containing the `tkPropertyGroupTitleStyle` inline directive and declare it between the `TKPropertyGroup`'s tags. Here's what you can update in the header of a group through its style:

* {% typedoc_link classes:DataFormStyleBase,member:fillColor %}: The color that will be used as background of the group header.
* {% typedoc_link classes:DataFormStyleBase,member:strokeColor %}: The color of the border of the group header.
* {% typedoc_link classes:DataFormStyleBase,member:strokeWidth %}: The width of the border of the group header.
* {% typedoc_link classes:DataFormStyleBase,member:separatorColor %}: The color of the line separator of the group header /iOS only/.
* {% typedoc_link classes:DataFormStyleBase,member:labelTextSize %}: The size of the text of the group header.
* {% typedoc_link classes:DataFormStyleBase,member:labelFontName %}: The name of the font that is used for the text of the group header.
* {% typedoc_link classes:DataFormStyleBase,member:labelFontStyle %}: The {% typedoc_link enums:FontStyle %} for the text of the group header.

If you need to make changes to the styles runtime, you can get access the current style of a group title through the {% typedoc_link classes:PropertyGroup %}. Here's an example of how to change the `labelTextColor` for the group `Main Info`.

#### Example 4: Changing the labelTextColor of a group header

<snippet id='angular-dataform-groups-code'/>

Note that in this example we make the change when `RadDataForm` is already loaded and its groups are initialized (in this case on a button tap), otherwise the default {% typedoc_link classes:GroupTitleStyle %} may not be initialized and {% typedoc_link classes:PropertyGroup,member:titleStyle %} will be `undefined`.

#### Example 5: Using some of the abovementioned styling properties in HTML

<snippet id='angular-dataform-styling-html'/>

## Styling Native Components

#### Figure 3: RadDataForm with editors' colors updated independently on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Styling-02-Android](/controls/NativeScript/DataForm/images/dataform-styling-02-android.png "Advanced Styling of RadDataForm in Android") ![NativeScriptUI-DataForm-Styling-02-iOS](/controls/NativeScript/DataForm/images/dataform-styling-02-ios.png "Advanced Styling of RadDataForm in iOS")

If you need to provide a more customized styling which is not covered by the above properties, you can always fine-tune the native editors for each platform. In order to do this, you can use the `editorUpdate` event in `RadDataForm`. First you can use the `propertyName` from the passed arguments with the events to determine if the currently updated editor is the one you want to customize:

#### Example 6: Apply styling based on the name of a property

<snippet id='angular-dataform-styling-propertyname'/>

If you want the customization to reflect all editors of specific editor type you can do the check through the `EntityProperty` that you can get with `RadDataForm`'s {% typedoc_link classes:RadDataForm,member:getPropertyByName %} method. Then you can check the editor type:

#### Example 7: Apply styling based on the type of an editor

<snippet id='dataform-styling-editortype'/>

If the currently updating editor is the one we want to customize we can access the native editor through the {% typedoc_link classes:DataFormEventArgs,member:editor %} property of the arguments passed with the event. Then depending on the platform, we can access the actual view of the editor with the `getEditorView()` method on Android and with the `editor` property on iOS. Here's an example of changing the style of the {% typedoc_link enums:EditorType,member:Slider %} editor independently on each platform:

#### Example 8: Change the colors of native Slider editor on each platform

<snippet id='angular-dataform-styling-advanced'/>

In this example we used the properties of the native views that represent the `Slider` editor: [SeekBar](https://developer.android.com/reference/android/widget/SeekBar.html) on Android and [UISlider](https://developer.apple.com/documentation/uikit/uislider) in iOS.
Here's a list with each of the `RadDataForm` editors and the corresponding types of the native views used for that editor on each platform:

| Editor                | Android Native View     | iOS Native View        |
|:----------------------|:------------------------|:-----------------------|
| `Text`                | [EditText](https://developer.android.com/reference/android/widget/EditText.html)                | [TKTextField](https://docs.telerik.com/devtools/ios/api/Classes/TKTextField.html) |
| `MultilineText`       | [EditText](https://developer.android.com/reference/android/widget/EditText.html)                | [UITextView](https://developer.apple.com/documentation/uikit/uitextview) |
| `Email`               | [EditText](https://developer.android.com/reference/android/widget/EditText.html)                | [TKTextField](https://docs.telerik.com/devtools/ios/api/Classes/TKTextField.html) |
| `Password`            | [EditText](https://developer.android.com/reference/android/widget/EditText.html)                | [TKTextField](https://docs.telerik.com/devtools/ios/api/Classes/TKTextField.html) |
| `Phone`               | [EditText](https://developer.android.com/reference/android/widget/EditText.html)                | [TKTextField](https://docs.telerik.com/devtools/ios/api/Classes/TKTextField.html) |
| `Number`              | [EditText](https://developer.android.com/reference/android/widget/EditText.html)                | [TKTextField](https://docs.telerik.com/devtools/ios/api/Classes/TKTextField.html) |
| `Decimal`             | [EditText](https://developer.android.com/reference/android/widget/EditText.html)                | [TKTextField](https://docs.telerik.com/devtools/ios/api/Classes/TKTextField.html) |
| `Switch`              | [SwitchCompat](https://developer.android.com/reference/android/support/v7/widget/SwitchCompat.html)            | [UISwitch](https://developer.apple.com/documentation/uikit/uiswitch) |
| `Stepper`             | [RadNumberPicker](https://docs.telerik.com/devtools/android/controls/numberpicker/numberpicker-overview)          | [UIStepper](https://developer.apple.com/documentation/uikit/uistepper) |
| `Slider`              | [SeekBar](https://developer.android.com/reference/android/widget/SeekBar.html)                 | [UISlider](https://developer.apple.com/documentation/uikit/uislider) |
| `Picker`              | [Spinner](https://developer.android.com/reference/android/widget/Spinner.html)                 | [UIPickerView](https://developer.apple.com/documentation/uikit/uipickerview) |
| `SegmentedEditor`     | [RadioGroup](https://developer.android.com/reference/android/widget/RadioGroup.html)              | [UISegmentedControl](https://developer.apple.com/documentation/uikit/uisegmentedcontrol) |
| `List`                | [ListView](https://developer.android.com/reference/android/widget/ListView.html)                | [TKLabel](https://docs.telerik.com/devtools/ios/api/Classes/TKLabel.html) |
| `DatePicker`          | [EditText](https://developer.android.com/reference/android/widget/EditText.html)                | [UIDatePicker](https://developer.apple.com/documentation/uikit/uidatepicker) |
| `TimePicker`          | [EditText](https://developer.android.com/reference/android/widget/EditText.html)                | [UIDatePicker](https://developer.apple.com/documentation/uikit/uidatepicker) |
| `AutoCompleteInline`  | [RadAutoCompleteTextView](https://docs.telerik.com/devtools/android/controls/autocomplete/autocomplete-overview) | [TKAutoCompleteTextView](https://docs.telerik.com/devtools/ios/api/Classes/TKAutoCompleteTextView.html) |
| `Label`               | [TextView](https://developer.android.com/reference/android/widget/TextView.html)                | [UILabel](https://developer.apple.com/documentation/uikit/uilabel) |

Now that you know how to access the core editor view and what its type is you can dive deeper into the capabilities that the access to the native elements provides. For example you can further adjust the location of an editor and its background:

#### Figure 4: RadDataForm with editors' background updated manually on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Styling-03-Android](/controls/NativeScript/DataForm/images/dataform-styling-03-android.png "Editor Background Styling of RadDataForm in Android") ![NativeScriptUI-DataForm-Styling-03-iOS](/controls/NativeScript/DataForm/images/dataform-styling-03-ios.png "Editor Background Styling of RadDataForm in iOS")

This is achieved again by using the `editorUpdate` event in `RadDataForm` and the native editor taken from the parameters of the event arguments:

#### Example 9: Change the editor background of native editors on each platform

<snippet id='angular-dataform-background-update'/>

## References

Want to see these scenarios in action?
Check our [SDK examples for Angular](https://github.com/telerik/nativescript-ui-samples-angular) repo on GitHub. You will find these and many other practical examples with NativeScript UI.

* [Styling Common Example](https://github.com/telerik/nativescript-ui-samples-angular/tree/master/dataform/app/examples/styling)
* [Styling Advanced Example](https://github.com/telerik/nativescript-ui-samples-angular/tree/master/dataform/app/examples/styling/advanced)
* [Platform Adjustments Example](https://github.com/telerik/nativescript-ui-samples-angular/tree/master/dataform/app/examples/platform-specifics)
* [Editor Background Example](https://github.com/telerik/nativescript-ui-samples-angular/tree/master/dataform/app/examples/styling/editor-background)

Related articles you might find useful:

* [**Groups Overview**]({% slug dataform-groups-overview-angular %})
* [**Group Layouts**]({% slug dataform-groups-layouts-angular %})
