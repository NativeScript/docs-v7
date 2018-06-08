---
nav-title: "Gotchas"
title: "Gotchas"
description: "NativeScript Android Runtime Extend Limitations"
position: 4
---

# Implicit Class Names

As explained in [How Extend Works](./how-extend-works.md), everytime you inherit from a class or implement an interface, the Runtime generates a new class. By default you don't have to specify a class name and NativeScript will pick one for you. This, however, has some important implications.

### The Problem

Let's have a look the following code fragment:

```javascript
function buttonFactory() {
	var MyButton = new android.widget.Button.extend({
    	setEnabled: function(enabled) {
      		// do something
    	}
	});
}
```

Java classes must have unique names. And because the `extend` function generates a new class each time when is called, the second time you call the `buttonFactory` function it will throw an error. In this example the error message is:

> Extend name android_widget_button_mainpage_l10_c20 already used

The message tells us that we are trying to generate a class with an already existing name. It also gives us an important information - the file (*mainpage.js*), the line (*10*) and the column (*20*) number where the `extend` call is made.

### The Workaround

Having in mind the full [extend syntax](./how-extend-works.md), we can take advantage of the first parameter to specify a unique class name each time when `extend` is called. The updated code would look like the following:

```javascript
function buttonFactory(className) {
	var MyButton = new android.widget.Button.extend(className, {
    	setEnabled: function(enabled) {
      		// do something
    	}
	});
};

var className = getUniqueClassName(...);
var newButton = buttonFactory(className);
```

> **Note:** Ideally, you will use extend only when needed, once per the <file, line number, column number> combination.

# See Also
* [How Extend Works](./how-extend-works.md)