---
title: Theme
description: Learn about the NativeScript core theme, and how to apply the theme’s class names to UI components in your applications
position: 55
---

# Theme

NativeScript’s [styling infrastructure](https://docs.nativescript.org/ui/styling) makes it possible to create and use CSS themes for your native applications, much like you would use a framework like Bootstrap on the web.

The NativeScript project provides a core theme that you can add to any of your projects. The theme includes two color schemes, light and dark, as well as a series of convenience class names to help you build elegant user interfaces quickly.

The core theme is in beta. If you discover any issues please report them at <https://github.com/nativescript/theme/issues>.

* [Installation](#installation)
* [Color Schemes](#color-schemes)
* [Class Names](#class-names)
* [Contributing](#contributing)

## Installation

Run the following command to add the NativeScript core theme to your application:

```
npm install nativescript-theme-core --save
```

The install process downloads the necessary files from npm, and then moves the appropriate CSS files from your project’s `node_modules` folder to your project’s `app` folder.

## Color Schemes

The NativeScript core theme includes color schemes, light and dark. The theme install process places the following line of code at the top of your app’s `app.css` file, which includes all the necessary CSS rules to make the light color scheme work.

``` CSS
@import '~/css/core.light.css';
```

To switch to the dark color scheme, change the line of code above to alternatively import `core.dark.css`.

``` CSS
/* Remove this line of code */
@import '~/css/core.light.css';

/* And add this one */
@import '~/css/core.dark.css';
```

## Class Names

The NativeScript core theme contains a wide variety of CSS class names you can use to quickly style your applications. Here’s a complete list of the class names and what they do.

### Headings

The following heading class names can be used to create headings, much like you would use `<h1>` or `<h2>` elements on the web.

* `h1`
* `h2`
* `h3`
* `h4`
* `h5`
* `h6`

Here are a few examples for how you could use these class names.

``` XML
<Label class="h1">This is a big heading</Label>
<Label class="h6">This is a small heading</Label>
```

### Text

A number of utility class names are available for changing the display of text you use in your applications. Here’s what they do.

* `body`: A class name for long-form content in your apps, such as paragraph text.

``` XML
<Label class="body" text="I’m a longer sentence with instructions on how you use a particular feature"></Label>
```

* `footnote`: A class name that decreases the text size of a given UI element. Useful for footnotes that describe images or other features in your apps.

``` XML
<Label class="footnote" text="The image above is the NativeScript logo"></Label>
```

* `text-left`: A class name that applies `text-align: left` to a UI element.
* `text-right`: A class name that applies `text-align: right` to a UI element.
* `text-center`: A class name that applies `text-align: center` to a UI element.

``` XML
<Label class="text-left" text="My text is left aligned"></Label>
<Label class="text-right" text="My text is right aligned"></Label>
<Label class="text-center" text="My text is center aligned"></Label>
```

* `text-lowercase`: A class name to lowercase all characters in the text of a given UI element. For instance, `<Label class="text-lowercase" text="HI">` will display as “hi”.
* `text-uppercase`: A class name to uppercase all characters in the text of a given UI element. For instance, `<Label class="text-uppercase" text="hi">` will display as “HI”.
* `text-capitalize`: A class name to uppercase the first letter in the text of a given UI element. For instance, `<Label class="text-capitalize" text="hi">` will display as “Hi”.

### Font

The NativeScript core theme does not change the base font family you use to develop your apps, however, the theme does provide a series of font-related class names.

* `font-weight-normal`: A class name to display a font in its normal `font-weight`.

``` XML
<Label class="font-weight-normal" text="This text will NOT appear bold"></Label>
```

* `font-weight-bold`: A class name to display a font in its bold `font-weight`.

``` XML
<Label class="font-weight-bold" text="This text will appear bold"></Label>
```

* `font-italic`: A class name to display a font in italic text.

``` XML
<Label class="font-italic" text="This text will appear italicized"></Label>
```

### Padding and Margin

A number of class names are available to control the spacing of UI components within your application. The first set of class names allow you to quickly add margin or padding to a given UI component.

The class names follow a convention of `margin/padding` - `top/bottom/left/right` - `amount`. So for example, `<Button class="m-t-2">` renders a button with a `margin-top` of `2`, and `<Button class="p-b-5">` renders a button with a `padding-bottom` of `5`. Below is a full list of the class names available, along with the rules that they output.

Note that for each of these rules the “m” can be swapped with a “p” to apply padding, and that these rules are available for the values of 0, 2, 5, 10, 15, 20, 25, 30; therefore, `m-r-0` and `m-r-2` are valid class names, but `m-r-8` is not.

* `m-0` = `{ margin:0 }`
* `m-t-0` = `{ margin-top:0 }`
* `m-r-0` = `{ margin-right:0 }`
* `m-b-0` = `{ margin-bottom:0 }`
* `m-l-0` = `{ margin-left:0 }`
* `m-x-0` = `{ margin-right:0; margin-left:0 }`
* `m-x-auto` = `{ horizontal-align: center }`
* `m-y-0` = `{ margin-top:0; margin-bottom:0 }`

### Dividers

A divider is a common way to separate areas of your user interface. The NativeScript provides two class names that can be applied to empty `<StackLayout>` elements to create a simple divider with a height of `1`.

* `hr-light`: Creates a light colored divider.

``` XML
<StackLayout class="hr-light"></StackLayout>
```

* `hr-dark`: Creates a dark colored divider.

``` XML
<StackLayout class="hr-dark"></StackLayout>
```

### Utilities

The NativeScript core theme provides a set of utility class names that can be applied to UI components in your application.

* `pull-left`: A class name to pull text to the left-hand side of its container.
* `pull-right`: A class name to pull text to the right-hand side of its container.

``` XML
<StackLayout>
  <Label class="pull-left" text="This text should appear on the left-hand side of the screen"></Label>
</StackLayout>
<StackLayout>
  <Label class="pull-right" text="This text should appear on the right-hand side of the screen"></Label>
</StackLayout>
```

### Contextual Colors

You can convey meaning through color with a handful of utility classes that are included in the NativeScript core theme.

* `text-primary`: A class name that makes text appear active or clickable.
* `text-muted`: A class name that makes text appear subdued, such as captions or informational messages.
* `text-danger`: A class name that makes text stand out, for components such as errors.

``` XML
<Label class="text-primary" text="https://nativescript.org" tap="{{ openUrl }}"></Label>
<Label class="text-muted" text="This is a caption that the user can read, but it doesn’t need to stand out"></Label>
<Label class="text-danger" text="This is an error message the user needs to notice"></Label>
```

* `bg-primary`: A class name that applies the theme’s primary background color.
* `bg-danger`: A class name that applies the theme’s danger color.

``` XML
<StackLayout class="bg-primary">
  <Label text="I want to draw your attention here."></Label>
</StackLayout>
<StackLayout class="bg-danger">
  <Label text="A critical error has occurred!"></Label>
</StackLayout>
```

### Buttons

The NativeScript theme includes a handful of class names to change the look and feel of buttons in your applications.

* `btn`: A class name that applies the base styles of the NativeScript core theme, including dimensions and spacing.
* `btn-primary`: A class name that applies the primary color pattern of the theme to the button.

``` XML
<Button class="btn btn-primary" text="I use the theme’s primary color pattern"></Button>
```

* `btn-outline`: A class name that makes a button appear with a border and a transparent background.

``` XML
<Button class="btn btn-outline" text="I have a border! And a transparent background!"></Button>
```

* `btn-rounded-sm`: A class names that makes a button appear with a small rounded corners.
* `btn-rounded-lg`: A class name that makes a button appear with large rounded corners.

``` XML
<Button class="btn btn-rounded-sm" text="Small rounded corners"></Button>
<Button class="btn btn-rounded-sm" text="Large rounded corners"></Button>
```

### Forms

You can use the following form-related class names to improve the look of forms in your NativeScript apps.

* `form`: A class name that adds spacing to a layout container that will act as the main container for your form.

``` XML
<StackLayout class="form">
  <!-- The contents of the form -->
</StackLayout>
```

* `input-field`: A class name that should be applied to each individual field within a form.

``` XML
<StackLayout class="form">
  <StackLayout class="input-field">
    <!-- The first field, for example “Email address” -->
  </StackLayout>
  <StackLayout class="input-field">
    <!-- The second field, for example “Password” -->
  </StackLayout>
</StackLayout>
```

* `input`: A class name that applies the base stying to TextField UI components.
* `input-border`: A class name that adds a border to a TextField UI component.
* `input-rounded`: A class name that adds a rounded border to a TextField UI component.

``` XML
<StackLayout class="form">
  <StackLayout class="input-field">
    <TextField class="input"></TextField>
  </StackLayout>
  <StackLayout class="input-field">
    <TextField class="input-border"></TextField>
  </StackLayout>
  <StackLayout class="input-field">
    <TextField class="input-rounded"></TextField>
  </StackLayout>
</StackLayout>
```

* `label`: A class name that applies the base styling to Label UI components.

``` XML
<StackLayout class="form">
  <StackLayout class="input-field">
    <Label class="label" text="Email:"></Label>
    <TextField class="input"></TextField>
  </StackLayout>
  <StackLayout class="input-field">
    <Label class="label" text="Password:"></Label>
    <TextField class="input"></TextField>
  </StackLayout>
</StackLayout>
```

<!--

### Images

* `img-rounded`
* `img-circle`
* `img-thumbnail`

### Listview

* `list-group`
* `list-group-item`
* `list-group-item.active`
* `list-group-item-heading`
* `list-group-item-text`
``` xml
<ListView items="{{ sampleItems }}" class="list-group">
  <ListView.itemTemplate>
    <GridLayout class="list-group-item" rows="auto" columns="auto, *">
        <Image row="0" col="0" src="{{ imagealt }}" class="thumb img-rounded" />
        <StackLayout row="0" col="1" >
          <Label text="{{ title }}" class="list-group-item-heading" />
          <Label text="{{ content }}" textWrap="true"  class="list-group-item-text" />
        </StackLayout>
      </GridLayout>
  </ListView.itemTemplate>
</ListView>
```
``` xml
<ListView items="{{ sampleItems }}" class="list-group">
    <ListView.itemTemplate>
      <StackLayout>
          <Label class="list-group-item" text="{{ title }}"/>  
      </StackLayout>
    </ListView.itemTemplate>
  </ListView>
```

### Progress & Activity

* `progress`
* `activity-indicator`
``` xml
<Progress class="progress" />
<ActivityIndicator class="activity-indicator" />
```

### SideDrawer

* `sidedrawer-center`
* `sidedrawer-left`
* `sidedrawer-header`
* `sidedrawer-header-image`
* `sidedrawer-header-brand`
* `sidedrawer-list-item`
* `sidedrawer-list-item-icon` 
* `sidedrawer-list-item-text`
```xml
<StackLayout class="sidedrawer-left">
  <StackLayout class="sidedrawer-header">
  <Image src="~/sample.png" class="sidedrawer-header-image"/>
  <Label text="NativeScript Theme Project" textWrap="true" class="sidedrawer-header-brand" />
</StackLayout>
<StackLayout class="sidedrawer-content">
  <GridLayout class="sidedrawer-list-item" rows="auto" columns="auto,*">
    <Label class="sidedrawer-list-item-icon" row="0" col="0" />
    <Label text="Home" class="sidedrawer-list-item-text" row="0" col="1" />
  </GridLayout>
</StackLayout>
```

### Sliders

* `slider`
```xml
<Slider minValue="1" maxValue="100" value="50" class="slider" />
```

### Switches

* `switch`
```xml
<Switch checked="true" class="switch"/>
```

### Tabs

* `tab-view`
``` xml
<TabView class="tab-view">
```

-->

## Contributing

The NativeScript core theme is open source and available on GitHub at <https://github.com/NativeScript/theme>. Issues and contributions are welcome!
