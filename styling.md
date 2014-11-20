# Styling in NativeScript
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

*__Note__: Currently the CSS support is limited only to the selectors and properties listed in this article*

### Supported selectors
Native script supports a subset of [CSS selector syntax](http://www.w3schools.com/cssref/css_selectors.asp). We will look trough the supported selecors.

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
JavaScript:
```JS
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
```JS
var btn = new buttonModule.Button();
btn.id = "login-button"
```

#### State selector
State selectors (a.k.a [Pseudo-classes selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)) select views that are in specified state.
```CSS
button:pressed { background-color: blue }
```

## Supported properties
Here is list of the properties, that can be set in CSS or through the style property of each View:

| CSS Property    | JS property     | Description |
|:----------------|:----------------|:----------------|
| color           | color           | Allows for solid-color modification of the matched View’s foreground.|
| background-color| backgroundColor | Allows for solid-color modification of the matched View’s background.|
| font-size       | fontSize        | Allows for modification of the matched View’s font size (works in Device-independent units only).|

