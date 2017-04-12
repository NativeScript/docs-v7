---
title: Theme
description: Learn about the NativeScript core theme, and how to apply the theme’s class names to UI components in your applications
position: 55
---

# Theme

NativeScript’s [styling infrastructure](https://docs.nativescript.org/ui/styling) makes it possible to create and use CSS themes for your native applications, much like you would use a framework like Bootstrap on the web.

The NativeScript project provides a core theme that you can add to any of your projects. The theme includes two color schemes, light and dark, as well as a series of convenience class names to help you build elegant user interfaces quickly.

* [Installation](#installation)
* [Color Schemes](#color-schemes)
* [SASS Usage](#sass-usage)
* [Class Names](#class-names)
    - [Headings](#headings)
    - [Text](#text)
    - [Font](#font)
    - [Padding and Margin](#padding-and-margin)
    - [Dividers](#dividers)
    - [Utilities](#utilities)
    - [Contextual Colors](#contextual-colors)
    - [Page](#page)
    - [ActionBar](#actionbar)
    - [Buttons](#buttons)
    - [Forms](#forms)
    - [Images](#images)
    - [ListViews](#listviews)
    - [Progress and Activity](#progress-and-activity)
    - [SideDrawers](#sidedrawers)
    - [Sliders](#sliders)
    - [Switches](#switches)
    - [TabViews](#tabviews)
* [Status Bar Considerations](#status-bar-considerations)
* [Uninstalling](#uninstalling)
* [Contributing](#contributing)

## Installation

As of NativeScript version 2.4, the core theme is installed by default when you start an app using `tns create`. However, if you wish to add the theme to a NativeScript app built before 2.4, run the following command:

```
npm install nativescript-theme-core --save
```

After you install the theme, you need to add a single `@import` CSS rule to your `app.css` file in order to include the theme in your app. But first you need to decide which of the theme’s color schemes you’d like to use.

## Color Schemes

The NativeScript core theme includes two standard color schemes, light and dark. Here’s what they look like on Android (left) and iOS (right).

![Light and dark color schemes](/img/theme/color-schemes-light-and-dark.png)

To use the light color scheme, add the following line of code to the top of your `app.css` file:

``` CSS
@import '~nativescript-theme-core/css/core.light.css';
```

And in order to use the dark scheme, add this line of code to your `app.css` instead:


``` CSS
@import '~nativescript-theme-core/css/core.dark.css';
```

> **TIP**: When using the dark color scheme, make sure that you, 1) apply the [`page` class name](#page) to ensure your app’s text displays appropriately, and 2) [alter your app’s status bar colors](#status-bar-considerations).

You may want to alternatively use one of the 11 other color schemes included in the NativeScript core theme. To do so, switch your `app.css` file to use one of the following imports.

``` CSS
@import '~nativescript-theme-core/css/aqua.css';
@import '~nativescript-theme-core/css/blue.css';
@import '~nativescript-theme-core/css/brown.css';
@import '~nativescript-theme-core/css/forest.css';
@import '~nativescript-theme-core/css/grey.css';
@import '~nativescript-theme-core/css/lemon.css';
@import '~nativescript-theme-core/css/lime.css';
@import '~nativescript-theme-core/css/orange.css';
@import '~nativescript-theme-core/css/purple.css';
@import '~nativescript-theme-core/css/ruby.css';
@import '~nativescript-theme-core/css/sky.css';
```

> **TIP**: [This image](/img/theme/color-schemes-all.png) shows all 13 color schemes on iOS and Android, and can help you decide which color scheme is a good fit for your app.

## SASS Usage

The NativeScript core theme is written in SASS, and you can use the theme’s `.scss` files directly. Using SASS is a great way to customize the theme in a way that’s not possible in CSS, such as using the theme’s SASS variables to change your app’s appearance.

To get started, first verify that your app has the [NativeScript SASS plugin](https://github.com/toddanglin/nativescript-dev-sass) installed by running the following command:

```
tns install sass
```

With SASS set up and ready to use, next you’ll need to import the theme’s `.scss` files into your own. Start by creating the following files in your app:

```
.
├── _app-common.scss
├── app.android.scss
└── app.ios.scss
```

After that, paste the following code into your `app.android.scss` file.

``` CSS
@import 'app-common';
@import '~nativescript-theme-core/scss/platforms/index.android';

// Place any CSS rules you want to apply only on Android here
```

> **TIP**: If you are using an older version of the `nativescript-dev-sass` plugin (before 1.0.0), the tilde ("`~`") in the `@import` is **not** required for referencing theme stylesheets. As of 1.0.0, the "~" is required to tell the node sass compiler to resovle the import file path relative to the `node_modules` directory.

And the following code into your `app.ios.scss` file.

``` CSS
@import 'app-common';
@import '~nativescript-theme-core/scss/platforms/index.ios';

// Place any CSS rules you want to apply only on iOS here
```

Finally, paste the following code into your `_app-common.scss` file.

``` CSS
// Import the theme’s variables. If you’re using a color scheme
// other than “light”, switch the path to the alternative scheme,
// for example '~nativescript-theme-core/scss/dark'.
@import '~nativescript-theme-core/scss/light';

// Customize any of the theme’s variables here, for instance $btn-color: red;

// Import the theme’s main ruleset.
@import '~nativescript-theme-core/scss/index';

// Place any CSS rules you want to apply on both iOS and Android here.
// This is where the vast majority of your CSS code goes.
```

The power of this approach is you have the ability to customize the [theme’s SASS variables](https://github.com/NativeScript/theme/blob/master/app/scss/_variables.scss) directly. You also have separate files set up for iOS- and Android-specific code, should you need to style your app differently on each platform.

### Using custom `.scss` file

While using SASS in NativeScript Angular 2 project and create custom `.scss` file for specific component, you should refer the path to the compiled CSS file in `styleUrls` in the component typescript file.
For example:

File structure:

```
.
├── custom.scss
├── custom.css
└── app.component.ts
```

app.component.ts

```
import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls:['./custom.css']
})
export class AppComponent { }
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

### Page

The NativeScript core theme includes a single class name to apply to Page UI components.

* `page`: A class name that alters text colors when using the dark color scheme.

``` XML
<Page class="page">
  <Label class="body" text="I will show up in the dark color scheme."></Label>
</Page>
```

* **NOTE**: You can also apply the `page` class name to a page’s top-level layout container, for instance `<GridLayout class="page">...</GridLayout>`. This is useful in Angular apps, where the `<Page>` component is not included in your component markup.

### ActionBar

The NativeScript core theme includes a few class names to apply to ActionBar UI components.

* `action-bar`: A class name that applies the theme’s color scheme to ActionBar components.

{% nativescript %}
``` XML
<Page class="page">
  <Page.actionBar>
    <ActionBar class="action-bar" title="My App">
    </ActionBar>
  </Page.actionBar>
</Page>
```
{% endnativescript %}
{% angular %}
``` XML
<ActionBar class="action-bar" title="My App">
</ActionBar>
```
{% endangular %}

* `action-bar-title`: A class name that applies the theme’s color scheme when using a [custom title view](/ui/action-bar#using-a-custom-title-view).

{% nativescript %}
``` XML
<Page class="page">
  <Page.actionBar>
    <ActionBar class="action-bar">
      <StackLayout class="action-bar-title">
        <Label text="Your App"></Label>
      </StackLayout>
    </ActionBar>
  </Page.actionBar>
</Page>
```
{% endnativescript %}
{% angular %}
``` XML
<ActionBar class="action-bar">
  <StackLayout class="action-bar-title">
    <Label text="Your App"></Label>
  </StackLayout>
</ActionBar>
```
{% endangular %}

* `action-item`: A class name that applies the theme’s color scheme to custom ActionItem UI components.

{% nativescript %}
``` XML
<Page class="page">
  <Page.actionBar>
    <ActionBar class="action-bar" title="My App">
      <ActionBar.actionItems>
        <ActionItem>
          <ActionItem.actionView>
            <Button text="Action" class="action-item"></Button>
          </ActionItem.actionView>
        </ActionItem>
      </ActionBar.actionItems>
    </ActionBar>
  </Page.actionBar>
</Page>
```
{% endnativescript %}
{% angular %}
``` XML
<ActionBar class="action-bar" title="My App">
  <ActionItem>
    <Button text="Action" class="action-item"></Button>
  </ActionItem>
</ActionBar>
```
{% endangular %}

> **TIP**: You can use the various ActionBar class names to create an ActionBar-like look without actually using the ActionBar UI components. You may find this approach useful for using in [modal pages](/core-concepts/navigation#modal-pages), for instance.
> ```
> <GridLayout rows="auto" columns="75,*,75" class="action-bar p-10">
>  <Button text="Close" class="text-left action-item" row="0" col="0"></Button> 
>  <Label text="My Modal" class="text-center action-bar-title" row="0" col="1"></Label>
> </GridLayout>
> ```

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
<Button class="btn btn-rounded-lg" text="Large rounded corners"></Button>
```

* `btn-active`: A class name that makes a button appear highlighted when tapped.

``` XML
<Button class="btn btn-active" text="I’m highlighted when tapped"></Button>
```

> **WARNING**: By default, iOS uses a delay before highlighting buttons used within ScrollView controls. Therefore, use caution when applying the `btn-active` class name to `<Button>` elements that are children of `<ScrollView>`s. For more detail see [this Stack Overflow thread](http://stackoverflow.com/questions/7541159/is-it-possible-to-remove-the-delay-of-uibuttons-highlighted-state-inside-a-uisc).

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
    <TextField class="input input-border"></TextField>
  </StackLayout>
  <StackLayout class="input-field">
    <TextField class="input input-rounded"></TextField>
  </StackLayout>
</StackLayout>
```

> **TIP** The NativeScript core theme handles styling disabled TextField components. To disable a TextField, set its `isEnabled` attribute to `false`. For example, `<TextField class="input" isEnabled="false"></TextField>`.

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

### Images

The NativeScript core theme provides a few CSS class names for altering the appearance of images.

* `img-rounded`: A class name that applies a small `border-radius` to Image UI components.
* `img-circle`: A class name that applies a large `border-radius` to Image UI components, making the image appear as a circle.

``` XML
<Image src="~/path/to/image.png" height="20" width="20" class="img-rounded"></Image>
<Image src="~/path/to/image.png" height="20" width="20" class="img-circle"></Image>
```

> **NOTE**: You can only add `border-radius` to an image if it has an explicit `height` and `width` set.

### ListViews

ListViews are a common UI component in mobile apps, and the NativeScript core theme provides a series of class names to make your listviews look great.

* `list-group`: A class name that should be applied to ListView UI components that you wish to style with any of the subsequent class names.

``` XML
<ListView class="list-group">
  <!-- The contents of the ListView -->
</ListView>
```

* `list-group-item`: A class name that should be applied to the container of each item template—usually a stack or grid layout. The class name adds a bit of spacing and the theme’s color scheme.

``` XML
<ListView class="list-group">
  <ListView.itemTemplate>
    <GridLayout class="list-group-item">
      <!-- The contents of the template -->
    </GridLayout>
  </ListView.itemTemplate>
</ListView>
```

* `list-group-item.active`: Apply the `active` class name to any list view item that you want to stand out to the user. You will likely want to conditionally apply this class name.

``` XML
<ListView class="list-group">
  <ListView.itemTemplate>
    <GridLayout class="list-group-item active">
      <!-- The contents of the template -->
    </GridLayout>
  </ListView.itemTemplate>
</ListView>
```

* `list-group-item.thumb`: Use the `thumb` class name to add thumbnail images to list view items.

``` XML
<ListView class="list-group">
  <ListView.itemTemplate>
    <GridLayout class="list-group-item" rows="*" columns="auto, *">
      <Image row="0" col="0" src="..." class="thumb img-circle"></Image>
      <Label row="0" col="1" text="Your text"></Label>
    </GridLayout>
  </ListView.itemTemplate>
</ListView>
```

* `list-group-item-heading`: A class name to apply to elements that should appear as headings in multi-line item templates. Used in combination with the `list-group-item-text` class name.
* `list-group-item-text`: A class name to apply to body text within a multi-line item template.

``` XML
<ListView class="list-group">
  <ListView.itemTemplate>
    <StackLayout class="list-group-item">
      <Label class="list-group-item-heading" text="A Heading"></Label>
      <Label class="list-group-item-text" text="The rest of the content" textWrap="true"></Label>
    </StackLayout>
  </ListView.itemTemplate>
</ListView>
```

### Progress and Activity

You can use the following class names to apply the NativeScript core theme’s color scheme to your Progress and ActivityIndicator UI components.

* `progress`: A class name for applying the core theme’s color scheme to a Progress UI component.
* `activity-indicator`: A class name for applying the core theme’s color scheme to an ActivityIndicator UI component.

``` XML
<Progress class="progress"></Progress>
<ActivityIndicator class="activity-indicator"></ActivityIndicator>
```

### SideDrawers

SideDrawers are a common way to implement navigation in your NativeScript apps. The NativeScript core theme includes class names to help you style the free-to-use [RadSideDrawer](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/SideDrawer/overview) that’s a part of the [UI for NativeScript](http://www.telerik.com/nativescript-ui) component suite.

> **NOTE**: The UI snippets you see below should be placed within a RadSideDrawer’s `drawerContent`. Refer to the [control’s documentation](http://docs.telerik.com/devtools/nativescript-ui/Controls/NativeScript/SideDrawer/getting-started) for more information on how to structure drawers within your apps.

The first two sidedrawer class names control the alignment of content within the sidedrawer.

* `sidedrawer-center`: A class name that aligns content in the center.
* `sidedrawer-left`: A class name that aligns content on the left-hand side of the screen.

``` XML
<StackLayout class="sidedrawer-center">
<!-- Contents of the sidedrawer -->
</StackLayout>
```

---

``` XML
<StackLayout class="sidedrawer-left">
  <!-- Contents of the sidedrawer -->
</StackLayout>
```

* `sidedrawer-header`: A class name to designate a section of your sidedrawer as the header. Useful if you want to show an image or logo above your app’s drawer navigation.

``` XML
<StackLayout class="sidedrawer-left">
  <StackLayout class="sidedrawer-header">
    <!-- The contents of the header -->
  </StackLayout>
</StackLayout>
```

* `sidedrawer-header-image`: A class name to apply to an image or logo that you show within the sidedrawer header. The theme takes care of aligning the image for you. 
* `sidedrawer-header-brand`: A class name to apply to text heading that appears in your sidedrawer’s header.

``` XML
<StackLayout class="sidedrawer-left">
  <StackLayout class="sidedrawer-header">
    <Image class="sidedrawer-header-image img-circle" src="~/my-app-logo.png"></Image>
    <Label class="sidedrawer-header-brand" text="Name of My App"></Label>
  </StackLayout>
</StackLayout>
```

* `sidedrawer-content`: A class name used to designate a section of your sidedrawer as the main content. This section is commonly used to display a list of navigation links.

``` XML
<StackLayout class="sidedrawer-left">
  <StackLayout class="sidedrawer-header">...</StackLayout>
  <StackLayout class="sidedrawer-content">...</StackLayout>
</StackLayout>
```

* `sidedrawer-list-item`: A class name to apply to each individual item, or link, that appears within your sidedrawer’s content.
* `sidedrawer-list-item-text`: A class name to apply to the text used within each sidedrawer’s list item.
* `sidedrawer-list-item-icon`: A class name you can use to show an icon next to each list item’s text.

``` XML
<StackLayout class="sidedrawer-left">
  <StackLayout class="sidedrawer-header">
    <!-- The contents of the header -->
  </StackLayout>
  <StackLayout class="sidedrawer-content">

    <!-- A list item with no icon -->
    <GridLayout class="sidedrawer-list-item" rows="*" columns="*">
      <Label row="0" col="0" text="A Link"></Label>
    </GridLayout>

    <!-- A list item with an icon -->
    <GridLayout class="sidedrawer-list-item" rows="auto" columns="auto, *">
      <Image class="sidedrawer-list-item-icon" row="0" col="0" src="~/path/to/icon.png"></Image>
      <Label class="sidedrawer-list-item-text" row="0" col="1" text="A Link"></Label>
    </GridLayout>

  </StackLayout>
</StackLayout>
```

### Sliders

The NativeScript core theme includes a class name for styling Slider UI components.

* `slider`: A class name to apply the theme’s color scheme to sliders. The class name handles styling disabled slider controls.

```XML
<Slider minValue="1" maxValue="100" value="50" class="slider"></Slider>
<Slider minValue="1" maxValue="100" value="50" class="slider" isEnabled="false"></Slider>
```

### Switches

The NativeScript core theme also includes a class name for styling Switch UI components.

* `switch`: A class name to apply the theme’s color scheme to switches. The class name handles styling disabled switch controls.

```XML
<Switch checked="true" class="switch"></Switch>
<Switch checked="false" class="switch"></Switch>
<Switch checked="false" class="switch" isEnabled="false"></Switch>
```

### TabViews

Finally, the NativeScript core theme includes a class name for styling TabView UI controls.

* `tab-view`: A class name to apply the theme’s color scheme to TabViews.

``` XML
<TabView class="tab-view">
  <!-- The contents of the TabView -->
</TabView>
```

## Status Bar Considerations

When using the NativeScript core theme, you may wish to alter the colors you use in the status bar to match the rest of your application.

### iOS

On iOS you can set the status bar colors to one of two values: `UIBarStyleDefault`, the default which uses black text, or `UIBarStyleBlack`, an alternative option that uses white text. For the purposes of the NativeScript core theme, **you only need to change your status bar colors on iOS if you’re using the dark color scheme**. If you are, [refer to our docs](/ui/change-status-bar-style-ios) on how to change your status bar colors to `UIBarStyleBlack`.

### Android

Android API levels 21+ (Lollipop and above) let you set the status bar to use any color that you’d like. To do so in NativeScript, find your `app/App_Resources/values/colors.xml` file, and update its `ns_primaryDark` color to use the appropriate color based on your color scheme of choice.

| Color Scheme | ns_primaryDark value |
| ------------ | -------------------- |
| Light        | #F8F8F8              |
| Dark         | #303030              |
| Aqua         | #00caab              |
| Blue         | #3d5afe              |
| Brown        | #795548              |
| Forest       | #006968              |
| Grey Dark    | #5c687c              |
| Purple       | #8130ff              |
| Lemon        | #ffea00              |
| Lime         | #aee406              |
| Orange       | #f57c00              |
| Ruby         | #ff1744              |
| Sky          | #30bcff              |

Additionally, when using the light color scheme, include the following code in your `app.js` file. The code sets Android’s `SYSTEM_UI_FLAG_LIGHT_STATUS_BAR` flag, which makes all icons in the status bar use a color that’s visible on the light background.

``` JavaScript
var application = require("application");
var platform = require("platform");

if (platform.isAndroid && platform.device.sdkVersion >= "21") {
  application.android.onActivityStarted = function() {
    var window = application.android.startActivity.getWindow();
    var decorView = window.getDecorView();
    decorView.setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
  }
}

// Your application.start() call goes here.
```
``` TypeScript
import * as application from "application";
import * as platform from "platform";
declare var android: any;

if (platform.isAndroid && platform.device.sdkVersion >= "21") {
  application.android.onActivityStarted = function() {
    let window = application.android.startActivity.getWindow();
    let decorView = window.getDecorView();
    decorView.setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
  }
}

// Your application.start() call goes here.
```

## Uninstalling

If you wish to remove the NativeScript core theme from your application, you can do so using the following command:

```
npm uninstall nativescript-theme-core --save
```

This command removes the core theme as a dependency in your `package.json` file.

## Contributing

The NativeScript core theme is open source and available on GitHub at <https://github.com/NativeScript/theme>. Issues and contributions are welcome!
