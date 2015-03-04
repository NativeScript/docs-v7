---
nav-title: "NativeScript Styling"
title: "UI: Styling"
description: "NativeScript Documentation: Styling"
position: 17
---

# Styling
In this article we are going to explain how to change the looks and appearance of the views (elements) in a NativeScript application. Styling in NativeScript is done in a similar fashion as in a web application - using CSS or changing the style object of the elements in JS code.

## The Style Object
Like the [DOM Style Object](http://www.w3schools.com/jsref/dom_obj_style.asp), each View instance exposes a **style** property, which holds all the style properties for the view. When the view is shown all style properties are applied to the underlying native widget.

## Styling with CSS
NativeScript applications can also be styled by using subset of the CSS language. This is done by setting the `css` property of the pages in the application. Actually, what happens under the hood is that the CSS is parsed, selectors are evaluated and properties are applied to the `style` object of each selected view.

Example:
```CSS
var pages = require("ui/pages");
var page = new pages.Page();
page.css = "button { color: red }";
```

> __Note__: Currently the CSS support is limited only to the selectors and properties listed in this article*

### Supported selectors
Native script supports a subset of [CSS selector syntax](http://www.w3schools.com/cssref/css_selectors.asp). We will look trough the supported selectors.

#### Type selector
Like [CSS element selectors](http://www.w3schools.com/cssref/sel_element.asp), type selectors in NativeScript select all views of a given type.
Type selectors are case-insensitive, so you can use both `button` and `Button`.

```CSS
button { background-color: gray }
```

#### Class selector
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

#### ID selector
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

#### State selector
State selectors (a.k.a [Pseudo-classes selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)) select views that are in specified state.
```CSS
button:pressed { background-color: blue }
```

#### Adding a css selectors
There are two options for adding a css selectors to an already existing selectors.
- Adding a valid css
``` JavaScript
page.addCss("button {background-color: blue}");
```
``` TypeScript
page.addCss("button {background-color: blue}");
```

This snippets adds the new selectors to the current selectors. Very useful in cases when a small css should be added to an element (for example using in some test purposes).

- Adding a valid css from a file
``` JavaScript
page.addCssFile(cssFileName);
```
``` TypeScript
page.addCssFile(cssFileName);
```

This snippet again adds new css selectors to the current. However this methods uses a file with css content. This gives an option to load different separated css styles.

> __Note__: The cssFileName parameter should be a file path related to the application root folder.

- Adding an application wide css
Another very helpful feature is the ability to set an application level css which will be applied before each page css.
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
> __Note__: Again, the path to style.css file should be related to the application root folder.

## Supported properties
Here is list of the properties, that can be set in CSS or through the style property of each View:

| CSS Property    | JavaScript property | Description |
|:----------------|:-------------------|:----------------|
| color           | color              | Sets a solid-color value of the matched view’s foreground. |
| background-color | backgroundColor    | Sets a solid-color value of the matched view’s background. |
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
