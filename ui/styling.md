---
title: Styling
description: How to use Cascading Style Sheets (CSS) in NativeScript to change the appearance of GUI elements
position: 50
slug: styling
previous_url: /styling
---

# Styling

This article includes the following topics:

* [Introduction](#introduction)
* [Applying CSS Styles](#applying-css-styles)
* [Supported Selectors](#supported-selectors)
* [Supported CSS Properties](#supported-css-properties)
* [Accessing NativeScript component properties with CSS](#accessing-nativeScript-component-properties-with-css)
* [Using Fonts](#using-fonts)
* [Import External CSS](#import-external-css)
* [CSS parser playground](http://iamdustan.com/reworkcss_ast_explorer/)

## Introduction

You change the looks and appearance of views (elements) in a NativeScript application similarly to how you do it in a web application&mdash;using Cascading Style Sheets (CSS) or changing the style object of the elements in JavaScript. Only a subset of the CSS language is supported.

Similarly to the [DOM Style Object](http://www.w3schools.com/jsref/dom_obj_style.asp), each View instance exposes a **style** property, which holds all the style properties for the view. When the view is displayed, all its style properties are applied to the underlying native widget.

## Applying CSS Styles
The CSS styles can be set on 3 different levels:

* [Application-wide CSS](#application-wide-css)&mdash;applies to every application page
* [PageSpecific CSS](#page-specific-css)&mdash;applies to the page's UI views
* [Inline CSS](#inline-css)&mdash;applies directly to a UI view

If there is CSS declared on different levels - all will be applied. The inline CSS will have the highest priority and the allication CSS - the lowest.

### Application-Wide CSS

When the  application starts, NativeScript checks if the file `app.css` exists. If it does, any CSS styles that it contains are loaded and used across all application pages. This file is a convenient place to store styles that will be used on multiple pages.

You can change the name of the file from which the application-wide CSS is loaded. You need to do the change before the application is started, usually in the app.js or app.ts file as shown below:

{% nativescript %}
``` JavaScript
var application = require("application");
application.cssFile = "style.css";

application.start({ moduleName: "main-page" });
```
``` TypeScript
import application = require("application");
application.cssFile = "style.css";

application.start({ moduleName: "main-page" });
```
{% endnativescript %}
{% angular %}
TODO...
{% endangular %}
> The path to the CSS file is relative to the application root folder.

{% nativescript %}
### Page-Specific CSS

When the page's XML declaration file is loaded, NativeScript looks for a CSS file with the same name (if such exists), reads any CSS styles that it finds and automatically loads and applies them to the page.

You can override CSS styles specified in the file by using the page's `css` property:

```JavaScript
page.css = "button { color: red }";
```
```TypeScript
page.css = "button { color: red }";
```

After you have set the default CSS for the page, you can add to it using two methods: adding CSS from a string and adding CSS from a file.
{% endnativescript %}
{% angular %}
TODO... Component-specific CSS: styles/styleUrls
{% endangular %}

#### Adding CSS From a String

This snippet adds a new style to the current set of styles. This is quite useful when you need to add a small CSS chunk to an element (one example is for testing purposes):

``` JavaScript
page.addCss("button {background-color: blue}");
```
``` TypeScript
page.addCss("button {background-color: blue}");
```

#### Adding CSS From a File

This snippet again adds new CSS styles to the current set. However, this method reads them from a file. It is useful for organizing styles in files and reusing them across multiple pages.

``` JavaScript
page.addCssFile(cssFileName);
```
``` TypeScript
page.addCssFile(cssFileName);
```

> The path to the CSS file is relative to the application root folder.

### Inline CSS

Similarly to HTML, CSS can be defined inline for a UI view in the XML markup:

```XML
<Button text="inline style" style="background-color: green;"/>
```

## Supported Selectors

> Currently the CSS support is limited only to the selectors and properties listed in the current article.

NativeScript supports a subset of the [CSS selector syntax](http://www.w3schools.com/cssref/css_selectors.asp). Let's go through the supported selectors:

* [Type Selector](#type-selector)
* [Class Selector](#class-selector)
* [ID Selector](#id-selector)

### Type Selector
Like [CSS element selectors](http://www.w3schools.com/cssref/sel_element.asp), type selectors in NativeScript select all views of a given type. Type selectors are case-insensitive, so you can use both `button` and `Button`.

```CSS
button { background-color: gray }
```

### Class Selector
[Class selectors](http://www.w3schools.com/cssref/sel_class.asp) select all views with a given class.
The class is set using the `cssClass` property of the view.


```CSS
.title { font-size: 32 }
```
```JavaScript
var label = new labelModule.Label();
label.cssClass = "title"
```
```TypeScript
var label = new labelModule.Label();
label.cssClass = "title"
```
```XML
<Label cssClass="title" />
```

### ID Selector
[Id selectors](http://www.w3schools.com/cssref/sel_id.asp) select all views with a given id.
The id is set using the `id` property of the view.


```CSS
#login-button { background-color: blue }
```
```JavaScript
var btn = new buttonModule.Button();
btn.id = "login-button"
```
```TypeScript
var btn = new buttonModule.Button();
btn.id = "login-button"
```
```XML
<Button id="login-button" />
```

## Supported CSS Properties

This is the list of the properties that can be set in CSS or through the style property of each View:

| CSS Property    | JavaScript Property | Description |
|:----------------|:-------------------|:----------------|
| color           | color              | Sets a solid-color value to the matched view’s foreground. |
| background-color | backgroundColor   | Sets a solid-color value to the matched view’s background. |
| background-image | backgroundImage   | Sets a image url to the matched view’s background image. |
| background-repeat | backgroundRepeat | Sets if/how the background image should be repeated. Possible values: "repeat", "repeat-x", "repeat-y", "no-repeat" |
| background-position | backgroundPosition | Sets the starting position of the background image. You can set the position with absolute, percent or aligment values. More info [here](http://www.w3schools.com/cssref/pr_background-position.asp).  |
| background-size | backgroundSize     | Sets the size of the background image. Possible values: "*length length*", "*percent% percent%*", "cover" or "contain". |
| border-color    | borderColor        | Sets a border color to the matched view’s. |
| border-width    | borderWidth        | Sets a border width to the matched view’s. |
| border-radius   | borderRadius       | Sets a border radius to the matched view’s. |
| font            | font               | Sets the font properties(this includes font-family, font-size, font-style and font-weight)  of the matched view. |
| font-family     | fontFamily         | Sets the font family of the matched view |
| font-size       | fontSize           | Sets the font size of the matched view (only supports device-independent units). |
| font-style      | fontStyle          | Sets the font style of the matched view. Possible values: "italic", "normal". |
| font-weight     | fontWeight         | Sets the font weight of the matched view Possible values: "bold", "normal". |
| text-align      | textAlignment      | Sets text alignment in the matched view. Possible values: "left" , "center", "right". |
| text-decoration | textDecoration     | Sets the text formatting. Possible values: "none", "line-through", "underline". |
| text-transform  | textTransform      | Sets the text transform. Possible values: "none", "capitalize", "uppercase", "lowercase". |
| letter-spacing  | letterSpacing      | Sets the text letter spacing. (On Android API Level 21 and above.) |
| z-index         | zIndex             | Sets the z-index. (On Android API Level 21 and above.) |
| vertical-align  | verticalAlignment  | Sets the vertical alignment of the current view within its parent. Possible values: "top", "center", "bottom", "stretch". |
| horizontal-align | horizontalAlignment| Sets the horizontal alignment of the current view within its parent. Possible values: "left", "center", "right", "stretch". |
| margin          | margin             | Sets the margin of the view within its parent. |
| margin-top      | marginTop          | Sets the top margin of the view within its parent. |
| margin-right    | marginRight        | Sets the right margin of the view within its parent. |
| margin-bottom   | marginBottom       | Sets the bottom margin of the view within its parent. |
| margin-left     | marginLeft         | Sets the left margin of the view within its parent. |
| width           | width              | Sets the view width. |
| height          | height             | Sets the view height. |
| min-width       | minWidth           | Sets the minimal view width. |
| min-height      | minHeight          | Sets the minimal view height. |
| padding         | padding            | Sets the distance between the boundaries of layout container and its children. |
| padding-top     | paddingTop         | Sets the top padding of a layout container. |
| padding-right   | paddingRight       | Sets the right padding of a layout container. |
| padding-bottom  | paddingBottom      | Sets the bottom padding of a layout container. |
| padding-left    | paddingLeft        | Sets the left padding of a layout container. |
| visibility      | visibility         | Sets the view visibility. Possible values: "visible", "collapse" (or"collapsed"). |
| opacity         | opacity            | Sets the view opacity. The value is in the [0, 1] range. |

## Accessing NativeScript component properties with CSS

You can set NativeScript component properties value that are not part of the CSS specification. For example:
```CSS
StackLayout {
   orientation: horizontal;
}
```

This feature is limited to properties with simple types like string, number and boolean and will set local property value similar to component markup declaration in XML. CSS cascading and inheritance are not supported. 

## Using Fonts
The `font-family` property can hold several values. The first supported font in the list will be used. There is also support for the following generic font-families:
* serif (ex. Times New Roman)
* sans-serif (ex. Helvetica)
* monospace (ex. Courier New)

Platform specifics:
* Android: The supported fonts depend very much on the system thus using the generic font-families or [custom-fonts](#custom-fonts) is recommended.
* iOS: You can check the [supported fonts in iOS 7](https://support.apple.com/en-us/HT202771).

### Custom Fonts
You can use custom fonts in you app(in .TTF or .OTF format). The NativeScript runtime will look for the font files under the `app/fonts/` directory and load them automatically.

Note: In iOS you should also do one-time registration of the font to be able to use it(usually in the app.ts/app.js file):

```JavaScript
var fontModule = require("ui/styling/font");
fontModule.ios.registerFont("MyFont.ttf");
```
```TypeScript
import fontModule = require("ui/styling/font");
fontModule.ios.registerFont("MyFont.ttf");
```

## Import External CSS
The @import CSS rule allows you to import external CSS from local file, resource or url. These rules must precede all other types of rules.

```CSS
@import { url('http://some-domain.com/your-style.css') }
@import { url('res://your-style.css') }
@import { url('~/your-style.css') }
```
