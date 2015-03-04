---
nav-title: Data Binding in NativeScript
title: "App: Data Binding"
description: How to bind a data source to a GUI control.
position: 8
---

# Data Binding

## Overview

Data binding is the process of connecting an application User Interface (UI) to a data object (business model). With the correct data binding settings in place and if the data object provides proper notifications, then when the data changes the application UI will reflect the changes accordingly (source to target). Depending on settings and requirements there is a possibility to update data from UI to data object (target to source).

> In this article, the term **source** is used to mean any business logic object and **target** to mean any UI control (such as TextField).

## Basic Data Binding Concepts

Every UI control could be bound to a data object because all controls are created with data binding in mind. There are, however, a few restrictions for data binding to work out of the box:

* The target object must be a successor of class **Bindable**.
* The target property must be a **dependency property** in order to use a target-to-source data binding, or  a two-way data binding. You can use a plain property if you don't need a two-way binding.
* The data object must raise a **propertyChange** event for every change in the property value.

## Direction of Data Flow

An important part of setting up a data binding is determining the way data flows. The NativeScript data binding supports these data transmissions types:

* **OneWay**&mdash;This setting indicates that a change in the source object will update the target property, but a change in the target property will not be propagated back to the source. Any update to the target property (except binding) will break the binding connection. This is the **default** setting.

* **TwoWay**&mdash;This setting indicates that both changes in source object will reflect in the target and changes in the target will update the source object. It is very useful in case you need to handle user input (for example the user enters texts in a `TextField` control which updates an underlying data property of the source object).

## Creating a Binding

You have two approaches to creating a binding: in code or in XML. These are explained below.

### Creating a Data Binding in App Code

1. Create a source object that raises a `propertyChange` event for every change in any of its properties. NativeScript provides a built-in class `Observable` that does just that. The following code example creates an observable object instance:

		``` JavaScript
		var observableModule = require("data/observable");
		var source = new observableModule.Observable();
		```
		``` TypeScript
		import observableModule = require("data/observable");
		var source = new observableModule.Observable();
		```

2. Create a target object. In the following example we create a target object as an instance of the `Bindable` class (from which all UI controls derive).

		``` JavaScript
		var textFieldModule = require("ui/text-field");
		var targetTextField = new textFieldModule.TextField();
		```
		``` TypeScript
		import textFieldModule = require("ui/text-field");
		var targetTextField = new textFieldModule.TextField();
		```

3. Finally, create the data binding:

		``` JavaScript
		var bindingOptions = {
			sourceProperty: "textSource",
			targetProperty: "text",
			twoWay: true
		};
		targetTextField.bind(bindingOptions, source);
		source.set("textSource", "Text set via binding");
		```
		``` TypeScript
		var bindingOptions = {
			sourceProperty: "textSource",
			targetProperty: "text",
			twoWay: true
		};
		targetTextField.bind(bindingOptions, source);
		source.set("textSource", "Text set via binding");
		```
The above updates the `targetTextField.text` property with the *"Text set via binding"* value. The `twoWay` option ensures that every change in the `targetTextField.text` property (resulting from user input) will be stored within the `source.text` property. You can get the new value of the text property using this clause:

	``` JavaScript
	source.get("textSource");
	```
	``` TypeScript
	source.get("textSource");
	```

### Creating a Data Binding in XML

1. Create a source object as described in [Creating a Data Binding in App Code](#creating-a-data-binding-in-app-code).

2. Describe the binding in XML using Mustache:

		``` XML
		<Page>
			<StackLayout>{%raw%}
				<TextField text= {{ textSource }} />
{%endraw%}		</StackLayout>
		</Page>
		```

> When you set a data binding for an UI element declared in XML, the `twoWay` option is set to *true* by default. You don't need to set it explicitly.

When using an XML declaration you only set property names for the target (`text`) and the source (`textSource`). Specifying a source for the binding is done on a later stage (the so called late binding). Read on to learn how to set the source.

## Specifying a Binding Source

Data binding in NativeScript works with any object that emits a `propertyChange` event. When creating a binding object, the source can be set as the second parameter of `bind(bindingOptions, source)` or can be omitted.

In case it is omitted, a special property named `bindingContext` of the `Bindable` class is used as a source. This property is inheritable across the visual tree. This means that a control can use as source the `bindingContext` of the first **parent** element in which `bindingContext` is explicitly set. 

In the previous example, `bindingContext` can be set either on the Page instance or the `StackLayout` instance and `TextField` will still have a proper source for its `text` property binding.

``` JavaScript
page.bindingContext = source;
//or
stackLayout.bindingContext = source;
```
``` TypeScript
page.bindingContext = source;
//or
stackLayout.bindingContext = source;
```

### Create a Data Binding to an Event in XML

When using an XML declaration, you can bind a function to execute on a specific event (MVVM command-like). You do this by setting the source property value to an event handler function as follows:


``` JavaScript
page.bindingContext = source;
source.set("onTap", function(eventData) {
		console.log("button is tapped!");
});
```
``` TypeScript
page.bindingContext = source;
source.set("onTap", function(eventData) {
	console.log("button is tapped!");
	});
```

This is what the XML declaration looks like:

``` XML
<Page>
	<StackLayout>{%raw%}
		<Button text="Test Button For Binding" tap="{{ onTap }}" />
{%endraw%}	</StackLayout>
</Page>
```

> Be aware that if there is an event handler function `onTap` within the page code behind ([more info about XML declarations](./ui-with-xml.md)) *and* an `onTap` function within the `bindingContext` object, then you get two event handlers hooked to that button, both of which are executed on tap event.

## Unbinding

Under normal circumstances you don't need to unbind from a data object, because the Binding object uses weak references which prevents memory leaks. However there are business cases where you may need to perform unbinding.

To break a binding, call the `unbind` method with the target property name as argument.

``` JavaScript
targetTextField.unbind("text");
```
``` TypeScript
targetTextField.unbind("text");
```
More information about binding can be found in the [API Reference](./ApiReference/ui/core/bindable/Bindable.md).
