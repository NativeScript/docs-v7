---
nav-title: "NativeScript Styling"
title: "UI: Styling"
description: "NativeScript Documentation: Styling"
position: 17
---

# Styling
In this article we are going to explain how to change the looks and appearance of the views (elements) in a NativeScript application. Styling in NativeScript is done in a similar fashion as in a web application - using CSS or changing the style object of the elements in JS code.

## The Style Object
Like the [DOM Style Object](http://www.w3schools.com/jsref/dom_obj_style.asp), each View instance exposes a **style** property, which holds all the style properties for the view. When the view is shown all style properties are applied to the underlying native widget. At the end of this article there is a list with all the [supported properties](#supported-properties).

## Styling with CSS
NativeScript applications can also be styled by using subset of the CSS language. The CSS can be set on 3 different 'levels':

* [Application-wide CSS](#application-wide-css) - will be applied on every page in the application
* [Page CSS](#page-css) - will be applied to the UI elements in the page
* [Inline CSS](#inline-css) - similarly to HTML, you can also set inline styles when defining the UI trough XML

When the CSS is set in any of the above ways, what happens under the hood is that the CSS is parsed, selectors are evaluated and properties are applied to the `style` object of each selected view.

> __Note__: Currently the CSS support is limited only to the selectors and properties listed in this article*

### Application-Wide CSS
On application startup the CSS from `app.css` file (if such exists) will be loaded and it will be used across all pages in the application. It is a convenient place to store styles that will be used in multiple pages. 
The name file from which the application CSS is loaded can be changed. This should be done before the application is started (usually in the app.js/app.ts file).

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
> __Note__: Тhe path to style.css file should be related to the application root folder.

### Page CSS
When the XML declaration of a page is loaded the CSS file with the same name (if such exists) will be automatically loaded and applied to the page. The CSS can also be set manually using the `css` property of the page:

```JavaScript
page.css = "button { color: red }";
```
```TypeScript
page.css = "button { color: red }";
```

There are two options for adding additional CSS to a page.

- Adding a valid CSS from string
``` JavaScript
page.addCss("button {background-color: blue}");
```
``` TypeScript
page.addCss("button {background-color: blue}");
```

This snippets adds the new CSS to the style already applied to the page. Very useful in cases when a small CSS should be added to an element (for example using in some test purposes).

- Adding a valid CSS from a file
``` JavaScript
page.addCssFile(cssFileName);
```
``` TypeScript
page.addCssFile(cssFileName);
```

Again, this snippet adds new CSS to the style already applied to the page. However, this method loads the CSS from a file. This gives an option to load different separated CSS styles.

> __Note__: The cssFileName parameter should be a file path related to the application root folder.

### Inline CSS
Similarly to HTML, CSS can be defined inline to an element in the XML markup:

```XML
<Button text="inline style" style="background-color: red; margin: 5;"/>
```

## Supported Selectors
Native script supports a subset of [CSS selector syntax](http://www.w3schools.com/cssref/css_selectors.asp). We will look trough the supported selectors.

### Type Selector
Like [CSS element selectors](http://www.w3schools.com/cssref/sel_element.asp), type selectors in NativeScript select all views of a given type.
Type selectors are case-insensitive, so you can use both `button` and `Button`.

```CSS
button { background-color: gray }
```

### Class Selector
[Class selectors](http://www.w3schools.com/cssref/sel_class.asp) select all views with a given class.
The class is set using the `cssClass` property of the view.

CSS:
```CSS
.title { font-size: 32 }
```
Code:
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

CSS:
```
#login-button { background-color: blue }
```
JavaScript:
```JavaScript
var btn = new buttonModule.Button();
btn.id = "login-button"
```
```TypeScript
var btn = new buttonModule.Button();
btn.id = "login-button"
```

### State Selector
State selectors (a.k.a [Pseudo-classes selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)) select views that are in specified state.
```CSS
button:pressed { background-color: blue }
```

## Supported Properties
Here is list of the properties, that can be set in CSS or through the style property of each View:

| CSS Property    | JavaScript property | Description |
|:----------------|:-------------------|:----------------|
| color           | color              | Sets a solid-color value of the matched view's foreground. |
| background-color | backgroundColor    | Sets a solid-color value of the matched view's background. |
| font-size       | fontSize           | Sets the font size of the matched View (works in Device-independent units only). |
| text-align      | textAlignment      | Sets the alignment of the text in the matched view. Available values: "left" , "center", "right". |
| vertical-align  | verticalAlignment  | Sets the alignment of this view within its parent along the vertical axis. Available values: "top", "center", "bottom", "stretch". |
| horizontal-align | horizontalAlignment| Sets the alignment of this view within its parent along the horizontal axis. Available values: "left", "center", "right", "stretch". |
| margin          | margin             | Sets the margin of the view within its parent. |
| margin-top      | marginTop          | Sets the top margin of the view within its parent. |
| margin-right    | marginRight        | Sets the right margin of the view within its parent. |
| margin-bottom   | marginBottom       | Sets the bottom margin of the view within its parent. |
| margin-left     | marginLeft         | Sets the left margin of the view within its parent. |
| width           | width              | Sets the width of the view. |
| height          | height             | Sets the height of the view. |
| min-width       | minWidth           | Sets the minimum width of the view. |
| min-height      | minHeight          | Sets the minimum height of the view. |
| padding         | padding            | Sets the distance between the boundaries of layout container and its children. |
| padding-top     | paddingTop         | Sets the top padding of a layout container. |
| padding-right   | paddingRight       | Sets the right padding of a layout container. |
| padding-bottom  | paddingBottom      | Sets the bottom padding of a layout container. |
| padding-left    | paddingLeft        | Sets the left padding of a layout container. |
| visibility      | visibility         | Sets the visibility of the view. Available values: "visible", "collapsed". |
| opacity         | opacity            | Sets the of the view. Value can be in the [0, 1] range |
