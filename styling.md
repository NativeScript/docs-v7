---
nav-title: Styling in NativeScript
title: "UI: Styling"
description: How to use Cascading Style Sheets (CSS) in NativeScript to change the appearance of GUI elements. 
position: 17
---

# Styling

This article includes the following topics:

* [Introduction](#introduction)
* [Applying CSS Styles](#applying-css-styles)
* [Supported Selectors](#supported-selectors)
* [Supported Properties](#supported-properties)

## Introduction

You change the looks and appearance of views (elements) in a NativeScript application similarly to how you do it in a web application&mdash;using Cascading Style Sheets (CSS) or changing the style object of the elements in JavaScript. Only a subset of the CSS language is supported.

Similarly to the [DOM Style Object](http://www.w3schools.com/jsref/dom_obj_style.asp), each View instance exposes a **style** property, which holds all the style properties for the view. When the view is displayed, all its style properties are applied to the underlying native widget.

## Applying CSS Styles
The CSS styles can be set on 3 different levels:

* [Application-wide CSS](#application-wide-css)&mdash;applies to every application page
* [PageSpecific CSS](#page-specific-css)&mdash;applies to the page's UI views
* [Inline CSS](#inline-css)&mdash;applies directly to a UI view

Regardless of what level you apply the CSS on, it is parsed, its selectors are evaluated, and its properties are applied to the `style` object of each selected view.

### Application-Wide CSS

When the  application starts, NativeScript checks if the file `app.css` exists. If it does, any CSS styles that it contains are loaded and used across all applicaion pages. This file is a convenient place to store styles that will be used on multiple pages.

You can change the name of the file from which the application-wide CSS is loaded. You need to do the change before the application is started, uusually in the app.js or app.ts file as shown below:

``` JavaScript
var application = require("application");
application.mainModule = "main-page";
application.cssFile = "style.css";

application.start();
```
``` TypeScript
import application = require("application");
application.mainModule = "main-page";
application.cssFile = "style.css";

application.start();
```
> The path to the CSS file is relative to the application root folder.

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

NativeScript supports a subset of the [CSS selector syntax](http://www.w3schools.com/cssref/css_selectors.asp). Let's go trough the supported selectors:

* [Type Selector](#type-selector)
* [Class Selector](#class-selector)
* [ID Selector](#id-selector)
* [State Selector](#state-selector)

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

### State Selector
State selectors (a.k.a [Pseudo-classes selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)) select views that are in a specified state.

```CSS
button:pressed { background-color: blue }
```

## Supported Properties

This is the list of the properties that can be set in CSS or through the style property of each View:

| CSS Property    | JavaScript Property | Description |
|:----------------|:-------------------|:----------------|
| color           | color              | Sets a solid-color value to the matched view’s foreground. |
| background-color | backgroundColor    | Sets a solid-color value to the matched view’s background. |
| font-size       | fontSize           | Sets the font size of the matched view (only supports device-independent units). |
| text-align      | textAlignment      | Sets text alignment in the matched view. Possible values: "left" , "center", "right". |
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
| visibility      | visibility         | Sets the view visibility. Possible values: "visible" or "collapsed". |
| opacity         | opacity            | Sets the view opacity. The value is in the [0, 1] range. |
