---
nav-title: Styling in NativeScript
title: "UI: Styling"
description: How to use Cascading Style Sheets (CSS) in NativeScript to change the appearance of GUI elements. 
position: 17
---

# Styling

This article includes the following topics:

* [Introduction](#introduction)
* [Supported Selectors](#supported-selectors)
* [Adding a CSS Selector](#adding-a-css-selector)
* [Supported Properties](#supported-properties)


## Introduction

You change the looks and appearance of views (elements) in a NativeScript application similarly to how you do it in a web application&mdash;using Cascading Style Sheets (CSS) or changing the style object of the elements in JavaScript. Only a subset of the CSS language is supported.

Similarly to the [DOM Style Object](http://www.w3schools.com/jsref/dom_obj_style.asp), each View instance exposes a **style** property, which holds all the style properties for the view. When the view is displayed, all its style properties are applied to the underlying native widget.

To apply a CSS style, you set the `css` property of the application page. Under the hood, your CSS code is parsed, selectors are evaluated, and properties are applied to the `style` object of each selected view.

Example:

```CSS
var pages = require("ui/pages");
var page = new pages.Page();
page.css = "button { color: red }";
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
```JS
var label = new labelModule.Label();
label.cssClass = "title"
```

### ID Selector
[Id selectors](http://www.w3schools.com/cssref/sel_id.asp) select all views with a given id.
The id is set using the `id` property of the view.


```CSS
#login-button { background-color: blue }
```
```JS
var btn = new buttonModule.Button();
btn.id = "login-button"
```

### State Selector
State selectors (a.k.a [Pseudo-classes selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)) select views that are in a specified state.

```CSS
button:pressed { background-color: blue }
```

## Adding a CSS Selector

There are several options for adding a CSS selector to an already existing selector:

* [Adding valid CSS inline](#adding-valid-css-inline)
* [Adding Valid CSS From a File](#adding-valid-css-from-a-file)
* [Adding Application-Wide CSS](#adding-application-wide-css)

### Adding Valid CSS Inline
 
This snippet adds a new selector to the current set of selectors. This is quite useful when you need to add a small CSS chunk to an element (one example is for testing purposes).

``` JavaScript
page.addCss("button {background-color: blue}");
```
``` TypeScript
page.addCss("button {background-color: blue}");
```

> The cssFileName parameter is a file path relative to the application root folder.

### Adding Valid CSS From a File
	
This snippet again adds new CSS selectors to the current set. However, this methods reads them from a file.

``` JavaScript
page.addCssFile(cssFileName);
```
``` TypeScript
page.addCssFile(cssFileName);
```

> The path to the CSS file is relative to the application root folder.

### Adding Application-Wide CSS
 
Another very helpful feature is the ability to set application level CSS which will be applied before each page's CSS.

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

## Supported Properties

This is the list of the properties that can be set in CSS or through the style property of each View:

| CSS Property    | JS Property        | Description |
|:----------------|:-------------------|:----------------|
| color           | color              | Sets a solid-color value to the matched view’s foreground. |
| background-color | backgroundColor    | Sets a solid-color value to the matched view’s background. |
| font-size       | fontSize           | Sets the font size of the matched view (only supports device-independent units). |
| text-align      | textAlignment      | Sets text alignment in the matched view. Possible values: "left" , "center", "right". |
| vertical-align  | verticalAlignment  | Sets the vertical alignment of the current view within its parent. Possible values: "top", "center", "bottom", "stretch". |
| horizontal-align | horizontalAlignment| Sets the horizontal alignment of the current view within its parent. Possible values: "left", "center", "right", "stretch". |
| margin          | margin             | Sets the margin of the view within its parent. |
| width           | width              | Sets the view width. |
| height          | height             | Sets the view height. |
| min-width       | minWidth           | Sets the minimal view width. |
| min-height      | minHeight          | Sets the minimal view height. |
| visibility      | visibility         | Sets the view visibility. Possible values: "visible" or "collapsed". |
| opacity         | opacity            | Sets the view opacity. The value is in the [0, 1] range. |
