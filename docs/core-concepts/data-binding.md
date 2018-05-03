---
title: Data Binding
description: NativeScript Documentation - Data Binding
position: 70
slug: binding
previous_url: /bindings,core-concepts/bindings
environment: nativescript
---

#Data Binding

The purpose of this article is to explain what is Data Binding and how it is working in NativeScript. Also in the article could be found samples, which demonstrates different use cases of the data binding usage.


* [Data flow direction](#data-flow-direction)
* [Basic binding concepts](#basic-binding-concepts)
* [How to create a binding](#how-to-create-a-binding)
    * [Two-way binding in code](#two-way-binding-in-code)
    * [Binding in XML](#binding-in-xml)
* [Binding source](#binding-source)
	* [Binding to a property](#binding-to-a-property)
	* [Binding to an event in XML](#binding-to-an-event-in-xml)
	* [Binding to a plain object](#binding-to-a-plain-object)
	* [Binding to a parent binding context](#binding-to-a-parent-binding-context)
* [Using expressions for bindings](#using-expressions-for-bindings)
* [Using converters in bindings](#using-converters-in-bindings)
* [Stop binding](#stop-binding)


Data binding is the process of connecting application user interface (UI) to a data object (code). It enables changes propagation by reflecting UI modifications in the code and vice versa.

> In the following article, **source** is used as any object in the code and **target** as any UI control (like TextField).

##Data flow direction

Part of the data binding settings is the way data flows. NativeScript data binding supports the following data transmissions.

* **One-Way**: This is the default setting, which ensures that the target property updates when a change in the source property occurs. However, UI modification will not update the code and it will stop the binding connection.

* **Two-Way**: This setting ensures the reflection of changes in both directions &mdash; from target to source and source to target. You can use two-way data binding when you need to handle user input.

##Basic binding concepts

Generally, almost every UI control could be bound to a data object (all NativeScript controls are created with data binding in mind). After your code has met the following requirements, you can use data-binding out of the box.

* The target object has to be a successor of the **Bindable** class. All NativeScript UI controls already inherit from this class.
* For **two-way** data binding, the target property should be a **dependency property**.
* For **one-way** binding, using a plain property is sufficient.
* The data object should raise a **propertyChange** event for every change in the value of its property in order to notify all of the listeners interested in the change.

##How to create a binding

###Two-way binding in code

The example below consists of a `Label`, `TextField` and a source property to which the UI controls are bound. The purpose of the sample is to demonstrate how the `Label` text is changed, while editing the input of the `TextField`. 

> You can find a runnable version of this example in NativeScript Playground for JavaScript [here](https://play.nativescript.org/?template=play-js&id=4zwcfW&v=2) and for TypeScript [here](https://play.nativescript.org/?template=play-tsc&id=8gVPMi&v=4).

First, the **source** object is created with a **textSource** property. A constant flow of propagating changes from the source property to the Label is necessary. Thus, the property in the code has to raise a **propertyChange** event in order to notify the `Label` for the changes. To raise this event, a built-in class is used, which provides this functionality - `Observable`.

``` JavaScript
const fromObject = require("data/observable").fromObject;
const source = fromObject({
	textSource: "Text set via twoWay binding"
});
```
``` TypeScript
import { fromObject } from "data/observable";
const source = fromObject({
	textSource: "Text set via twoWay binding"
});
```

Next, **target** objects are created to bind to the source property. In this case, these will be a `Label` and a `TextField`, which inherit the `Bindable` class (as all of the UI controls do).

``` JavaScript
// create the TextField
const TextField = require("ui/text-field").TextField;
const targetTextField = new TextField();

// create the Label
const Label = require("ui/label").Label;
const targetLabel = new Label();
```
``` TypeScript
// create the TextField
import { TextField } from "ui/text-field";
const targetTextField = new TextField();

// create the Label
import { Label } from "ui/label";
const targetLabel = new Label();
```
After that, the target objects bind to the source object. The TextField uses a two-way binding, so the user input could change the property in the code. And the binding of the Label is set to one-way in order to propagate changes only from the code to the UI.

### Example 1: Binding label text property.
``` JavaScript
// binding the TextField
const textFieldBindingOptions = {
	sourceProperty: "textSource",
	targetProperty: "text",
	twoWay: true
};
targetTextField.bind(textFieldBindingOptions, source);

// binding the Label
	const labelBindingOptions = {
	sourceProperty: "textSource",
	targetProperty: "text",
	twoWay: false
};
targetLabel.bind(labelBindingOptions, source);
```
``` TypeScript
import { BindingOptions } from "ui/core/bindable";
// binding the TextField
const textFieldBindingOptions: BindingOptions = {
	sourceProperty: "textSource",
	targetProperty: "text",
	twoWay: true
};
targetTextField.bind(textFieldBindingOptions, source);

// binding the Label
const labelBindingOptions: BindingOptions = {
	sourceProperty: "textSource",
	targetProperty: "text",
	twoWay: false
};
targetLabel.bind(labelBindingOptions, source);
```

###Binding in XML

To create a binding in XML, a source object is needed, which will be created the same way, as in the example above ([Two-Way Binding in Code](#two-way-binding-in-code)). Then the binding is described in the XML (using a mustache syntax). With an XML declaration, only the names of the properties are set - for the target: text, and for source: textSource. The interesting thing here is that the source of the binding is not specified explicitly. More about this topic will be discussed in the [Binding source](#binding-source) article.

``` XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
	<StackLayout>{%raw%}
		<TextField text="{{ textSource }}" />
{%endraw%}	</StackLayout>
</Page>
```

> Note: When creating UI elements with an XML declaration, the data binding is two-way by default.

##Binding source

###Binding to a property

An important part of the data binding is setting the source object. For a continuous flow of data changes, the source property needs to emit a **propertyChange** event. NativeScript data binding works with any object that emits this event. Adding a binding **source** happens by passing it as a second parameter in the method **bind(bindingOptions, source)**. This parameter is optional and could be omitted, in which case a property named **bindingContext** of the `Bindable` class is used as the source. What is special about this property is that it is inheritable across the visual tree. This means that a UI control can use the `bindingContext` of the first of its **parent** elements, which has an explicitly set **bindingContext**. In the example from [Two-Way Binding in Code](#two-way-binding-in-code), the `bindingContext` can be set either on a `Page` instance or a `StackLayout` instance and the `TextField` will inherit it as a proper source for the binding of its "text" property.

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
###Binding to an event in XML


There is an option to bind a function to execute on a specific event (MVVM command like). This option is available only through an XML declaration. To implement such a functionality, the source object should have an event handler function.

### Example 2: Binding function on button tap event.
``` XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
	<StackLayout>{%raw%}
		<Button text="Test Button For Binding" tap="{{ onTap }}" />
{%endraw%}	</StackLayout>
</Page>
```
``` JavaScript
source.set("onTap", function(eventData) {
	console.log("button is tapped!");
});
page.bindingContext = source;
```
``` TypeScript
source.set("onTap", function(eventData) {
	console.log("button is tapped!");
});
page.bindingContext = source;
```

> Note: Be aware that if there is a button with an event handler function **onTap** within the page code-behind ([more info about XML declarations]({%slug ui-basics %}), and **onTap** function within the **bindingContext** object, then there **will not** be two event handlers hooked up for that button. For executing the function in the code behind, the following syntax should be used in the XML - **tap="onTap"** and for the function from the bindingContext - **tap="\{\{ onTap \}\}"**.

###Binding to a plain object

A very common case is to provide a list (array) of plain elements (numbers, dates, strings) to a `ListView` items collection. All examples above demonstrate how to bind a UI element to a property of the bindingContext. If there is only plain data, there is no property to bind, so the binding should be to the entire object. Here comes another feature of NativeScript binding - object or value binding. To refer to the entire object, which is Date() in the example, the keyword `$value` should be used.

> You can find a runnable version of this example in NativeScript Playground for JavaScript [here](https://play.nativescript.org/?template=play-js&id=9pGhIY&v=2) and for TypeScript [here](https://play.nativescript.org/?template=play-tsc&id=pOnwov&v=2).

### Example 3: Bind ListView to a property of the bindingContext .
``` XML
<Page navigatingTo="onNavigatingTo" xmlns="http://schemas.nativescript.org/tns.xsd">
	<StackLayout>{%raw%}
		<ListView items="{{ items }}" height="200">
			<ListView.itemTemplate>
				<Label text="{{ $value }}" />
			</ListView.itemTemplate>
		</ListView>
{%endraw%}	</StackLayout>
</Page>
```
``` JavaScript
const fromObject = require("data/observable").fromObject;

function onNavigatingTo(args) {
    const list = [];
    for (let i = 0; i < 5; i++) {
        list.push(new Date());
    }

    const source = fromObject({
        items: list
    });

    source.set("items", list);

    const page = args.object;
    page.bindingContext = source;
}
```
``` TypeScript
import { EventData, fromObject } from "data/observable";
import { Page } from "ui/page";

export function onNavigatingTo(args: EventData) {
    const list = [];
    for (let i = 0; i < 5; i++) {
        list.push(new Date());
    }

    const source = fromObject({
        items: list
    });

    const page = <Page>args.object;
    page.bindingContext = source;
}
``` 
###Binding to a parent binding context

Another common case in working with bindings is requesting access to the parent binding context. It is because it might be different from the bindingContext of the child and might contain information, which the child has to use. Generally, the bindingContext is inheritable, but not when the elements (items) are created dynamically based on some data source. For example, `ListView` creates its child items based on an `itemТemplate`, which describes what the `ListView` element will look like. When this element is added to the visual tree, it gets for binding context an element from a ListView `items` array (with the corresponding index). This process creates a new binding context chain for the child item and its inner UI elements. So, the inner UI element cannot access the binding context of the 'ListView'. In order to solve this problem, NativeScript binding infrastructure has two special keywords: `$parent` and `$parents`. While the first one denotes the binding context of the direct parent visual element, the second one can be used as an array (with a number or string index). This gives you the option to choose either `N` levels of UI nesting or get a parent UI element with a given type. Let's see how this works in a realistic example.

> You can find a runnable version of this example in NativeScript Playground for JavaScript [here](https://play.nativescript.org/?template=play-js&id=kfnG5j) and for TypeScript [here](https://play.nativescript.org/?template=play-tsc&id=FGkvTn).

### Example 4: Creating ListView child items based on the itemTemplate.
``` XML
<Page navigatingTo="onNavigatingTo" xmlns="http://schemas.nativescript.org/tns.xsd">
	<GridLayout rows="*" >{%raw%}
		<ListView items="{{ items }}">
			<!--Describing how the element will look like-->
			<ListView.itemTemplate>
				<GridLayout columns="auto, *">
					<Label text="{{ $value }}" col="0"/>
					<!--The TextField has a different bindingCotnext from the ListView, but has to use its properties. Thus the parents['ListView'] has to be used.-->
					<TextField text="{{ $parents['ListView'].test, $parents['ListView'].test }}" col="1"/>
				</GridLayout>
			</ListView.itemTemplate>
		</ListView>
	{%endraw%}</GridLayout>
</Page>
```
``` JavaScript
const fromObject = require("data/observable").fromObject;

function onNavigatingTo(args) {
    const page = args.object;
    const viewModel = fromObject({
        items: [1, 2, 3],
        test: "Test for parent binding!"
    });

    page.bindingContext = viewModel;
}
exports.onNavigatingTo = onNavigatingTo;
```
``` TypeScript
import { EventData, fromObject } from "data/observable";
import { Page } from "ui/page";

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const viewModel = fromObject({
        items: [1, 2, 3],
        test: "Test for parent binding!"
    });

    page.bindingContext = viewModel;
}
```
##Using expressions for bindings

You can create a custom expression for bindings. Custom expressions could help in cases when a certain logic should be applied to the UI, while keeping the underlying business data and logic clear. To be more specific, let's see a basic binding expression example. The result should be a `TextField` element that will display the value of the `sourceProperty` followed by " some static text" string.

``` XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
	<StackLayout>
		<TextField text="{%raw%}{{ sourceProperty, sourceProperty + ' some static text' }}{%endraw%}" />
	</StackLayout>
</Page>
```

> Note: Binding expression could be used without explicitly named `source property` ( TextField text="{%raw%}{{ sourceProperty + ' some static text' }}{%endraw%}" ). In that case `$value` is used as a `source property`. However this could lead to problems when a nested property should be observed for changes (e.g. `item.nestedProp`). `$value` represents `bindingContext` and when any property of the `bindingContext` is changed expression will be evaluated. Since `nestedProp` is not a property of the `bindingContext` in `item.nestedProp` then there will be no propertyChange listener attached and changes to `nestedProp` will not be populated to UI. So it is a good practice to specify which property should be used as `source property` in order to eliminate such issues.

The full binding syntax contains three parameters - the first parameter is the source property, which will be listened to for changes. The second parameter is the expression that will be evaluated. The third parameter states whether the binding is two-way or not. As mentioned earlier, XML declaration creates a two-way binding by default, so in the example, the third parameter could be omitted. Keeping the other two properties means that the custom expression will be evaluated only when the sourceProperty changes. The first parameter could also be omitted; if you do that, then the custom expression will be evaluated every time the bindingContext changes. Thus, the recommended syntax is to include two parameters in the XML declaration, as in our example - the property of interest and the expression, which has to be evaluated.


###Supported expressions
NativeScript supports different kind of expressions including:

| Feature | Example | Description |
|:--------|:--------|:------------|
| property access | `obj1.obj2.prop1` | Resulting in the value of the `prop1` property of the object `obj2`. Expressions in binding are based on `polymer expressions`, which supports re-evaluation of expression when any value within the dot (.) chain is changed. NativeScript uses expressions only in context of bindings (for now), so a binding expression will be re-evaluated only when the binding `sourceProperty` is changed (due to performance considerations). The expression part will not observe and therefore will not initiate re-evaluation. |
| array access | `arrayVar[indexVar]` | Taking the value of an element in an array (arrayVar) accessed by a valid index for that array (indexVar). |
| logical operators | `!var1` | Reversing the logical state of the operand - logical not. |
| unary operators | `+var1`, `-var2` | Converts var1 into a number. Converts var2 to a number and negates it. |
| binary operators | `var1 + var2` | Adding the value of var2 to var1. Supported operators: `+, -, *, /, %`. |
| comparison operators | `var1 > var2` | Comparing whether the value of var1 is more than the value of var2. Other supported operators - `<, >, <=, >=, ==, !=, ===, !==`. |
| logical comparison operators | `var1>1 && var2>1`. | Evaluating whether the value of var1 is more than 1 AND the value of var2 is more than 2. Supported operators: `&&, ||`. |
| ternary operator | `var1 ? var2 : var3` | Evaluating the value of `var1` and if true, returns `var2`, else returns `var3`. |
| grouping parenthesis | `(a + b) * (c + d)` | |
| function calls | `myFunc(var1, var2, ..., varN)`| Where myFunc is a function available in binding context (used as context for expression) or within `application level resources`. The value of the `var1` and `varN` will be used as parameter(s). |
| filters | `expression \| filter1(param1, ...) | filter 2` | A filter is an object or a function that is applied to the value of the expression. Within the context of binding, this feature is used as converters. For more information, see the dedicated topic [Using Converters in Bindings](#using-converters-in-bindings).|

> Note: Special characters need to be escaped as follows:
> - `"   &quot;`
> - `'   &apos;`
> - `<   &lt;`
> - `>   &gt;`
> - `&   &amp;`

##Using converters in bindings

Speaking of a two-way binding, there is a common problem - having different ways of storing and displaying data. Probably the best example here is the date and time objects. Date and time information is stored as a number or a sequence of numbers (very useful for indexing, searching and other database operations), but this is not the best possible option for displaying date to the application user. Also there is another problem when the user inputs a date (in the example below, the user types into a TextField). The result of the user input will be a string, which will be formatted in accordance with the user's preferences. This string should be converted to a correct date object. Let's see how this could be handled with NativeScript binding.

> You can find a runnable version of this example in NativeScript Playground for JavaScript [here](https://play.nativescript.org/?template=play-js&id=d7Eu2Z) and for TypeScript [here](https://play.nativescript.org/?template=play-tsc&id=qktQye).

### Example 5: Handle textField date input and formatted in accordance preferences.
``` XML
<Page navigatingTo="onNavigatingTo" xmlns="http://schemas.nativescript.org/tns.xsd">
	<StackLayout>{%raw%}
		<TextField text="{{ testDate, testDate | dateConverter('DD.MM.YYYY') }}" />
{%endraw%}	</StackLayout>
</Page>
```
``` JavaScript
const fromObject = require("data/observable").fromObject;

function onNavigatingTo(args) {
    const dateConverter = {
        toView(value, format) {
            let result = format;
            const day = value.getDate();
            result = result.replace("DD", day < 10 ? `0${day}` : day);
            const month = value.getMonth() + 1;
            result = result.replace("MM", month < 10 ? `0${month}` : month);
            result = result.replace("YYYY", value.getFullYear());

            return result;
        },
        toModel(value, format) {
            const ddIndex = format.indexOf("DD");
            const day = parseInt(value.substr(ddIndex, 2), 10);
            const mmIndex = format.indexOf("MM");
            const month = parseInt(value.substr(mmIndex, 2), 10);
            const yyyyIndex = format.indexOf("YYYY");
            const year = parseInt(value.substr(yyyyIndex, 4), 10);
            const result = new Date(year, month - 1, day);

            return result;
        }
    };

    const page = args.object;
    const viewModel = fromObject({
        dateConverter,
        testDate: new Date()
    });

    page.bindingContext = viewModel;
}
exports.onNavigatingTo = onNavigatingTo;
```
``` TypeScript
import { EventData, fromObject } from "data/observable";
import { Page } from "ui/page";

export function onNavigatingTo(args: EventData) {
    const dateConverter = {
        toView(value, format) {
            let result = format;
            const day = value.getDate();
            result = result.replace("DD", day < 10 ? "0" + day : day);
            const month = value.getMonth() + 1;
            result = result.replace("MM", month < 10 ? "0" + month : month);
            result = result.replace("YYYY", value.getFullYear());

            return result;
        },
        toModel(value, format) {
            const ddIndex = format.indexOf("DD");
            const day = parseInt(value.substr(ddIndex, 2), 10);
            const mmIndex = format.indexOf("MM");
            const month = parseInt(value.substr(mmIndex, 2), 10);
            const yyyyIndex = format.indexOf("YYYY");
            const year = parseInt(value.substr(yyyyIndex, 4), 10);
            const result = new Date(year, month - 1, day);

            return result;
        }
    };

    const page = <Page>args.object;
    const viewModel = fromObject({
        dateConverter,
        testDate: new Date()
    });

    page.bindingContext = viewModel;
}
```

Note the special operator (|) within the expression. The above code snippet (both XML and JavaScript) will display a date in a `DD.MM.YYYY` format (`toView` function), and when a new date is entered with the same format, it is converted to a valid `Date` object (`toModel` function). A `Converter` object should have one or two functions (`toView` and `toModel`) executed every time when a data should be converted. A `toView` function is called when data will be displayed to the end user as a value of any UI view, and a `toModel` function will be called when there is an editable element (like TextField) and the user enters a new value. In the case of one-way binding, the `Converter` object could have only a `toView` function or it should be a function. All converter functions have an array of parameters where the first parameter is the value that will be converted, and all other parameters are custom parameters defined in the converter definition.

> Remarks: Any run-time error within the converter methods (`toView` and `toModel`) will be handled automatically and the application will not break, but the data in the view-model will not be altered (in case of error) and an error message with more information will be logged to the console. To enable it, use the built-in `trace` module with an `Error` category. A date converter is simplified just for the sake of the example and it is not supposed to be used as a fully functional converter from date to string and vice versa.

A converter can accept not only static custom parameters, but any value from the `bindingContext`. For example:

### Example 6: Converting the new date input to a valid Date object.
``` XML
<Page navigatingTo="onNavigatingTo" xmlns="http://schemas.nativescript.org/tns.xsd">
	<StackLayout>{%raw%}
		<TextField text="{{ testDate, testDate | dateConverter(dateFormat) }}" />
{%endraw%}	</StackLayout>
</Page>
```
``` JavaScript
const fromObject = require("data/observable").fromObject;

function onNavigatingTo(args) {
  const dateConverter = {
    toView(value, format) {
      let result = format;
      const day = value.getDate();
      result = result.replace("DD", day < 10 ? `0${day}` : day);
      const month = value.getMonth() + 1;
      result = result.replace("MM", month < 10 ? `0${month}` : month);
      result = result.replace("YYYY", value.getFullYear());

      return result;
    },
    toModel(value, format) {
      const ddIndex = format.indexOf("DD");
      const day = parseInt(value.substr(ddIndex, 2), 10);
      const mmIndex = format.indexOf("MM");
      const month = parseInt(value.substr(mmIndex, 2), 10);
      const yyyyIndex = format.indexOf("YYYY");
      const year = parseInt(value.substr(yyyyIndex, 4), 10);
      const result = new Date(year, month - 1, day);

      return result;
    }
  };

  const page = args.object;
  const viewModel = fromObject({
    dateConverter,
	dateFormat: "DD.MM.YYYY",
    testDate: new Date()
  });

  page.bindingContext = viewModel;
}
```
``` TypeScript
import { EventData, fromObject } from "data/observable";
import { Page } from "ui/page";

export function onNavigatingTo(args: EventData) {
    const dateConverter = {
        toView(value, format) {
            let result = format;
            const day = value.getDate();
            result = result.replace("DD", day < 10 ? "0" + day : day);
            const month = value.getMonth() + 1;
            result = result.replace("MM", month < 10 ? "0" + month : month);
            result = result.replace("YYYY", value.getFullYear());

            return result;
        },
        toModel(value, format) {
            const ddIndex = format.indexOf("DD");
            const day = parseInt(value.substr(ddIndex, 2), 10);
            const mmIndex = format.indexOf("MM");
            const month = parseInt(value.substr(mmIndex, 2), 10);
            const yyyyIndex = format.indexOf("YYYY");
            const year = parseInt(value.substr(yyyyIndex, 4), 10);
            const result = new Date(year, month - 1, day);

            return result;
        }
    };

    const page = <Page>args.object;
    const viewModel = fromObject({
        dateConverter,
		dateFormat: "DD.MM.YYYY",
        testDate: new Date()
    });

    page.bindingContext = viewModel;
}
```
Setting a converter function and a parameter within the bindingContext is very useful for ensuring proper conversion of data. However, this is not the case when `listview` items should be bound. The problem comes from the fact that the bindingContext of a `listview` item is a data item, which is a part of `any` collection (array), and to apply a converter - the converter and its parameters should be added to the data item, which will result in multiple converter instances. Tackling this problem with NativeScript is fairly simple. Binding infrastructure seeks for an application level resources to find a proper converter and parameters. So you could add the converters in the resources in the application module. To be more clear, examine the following example (both XML and JavaScript):

> You can find a runnable version of this example in NativeScript Playground for JavaScript [here](https://play.nativescript.org/?template=play-js&id=TbTyMK) and for TypeScript [here](https://play.nativescript.org/?template=play-tsc&id=hvvCkn).

### Example 7: Adding converters in the application module resources.
``` XML
<Page navigatingTo="onNavigatingTo" xmlns="http://schemas.nativescript.org/tns.xsd">
	<StackLayout>{%raw%}
		<ListView items="{{ items }}" height="200">
			<ListView.itemTemplate>
				<Label text="{{ itemDate | dateConverter(dateFormat) }}" />
			</ListView.itemTemplate>
		</ListView>
{%endraw%}	</StackLayout>
</Page>
```
``` JavaScript
const appModule = require("application");
const fromObject = require("data/observable").fromObject;

function onNavigatingTo(args) {
    const list = [];
    for (let i = 0; i < 5; i++) {
        list.push({ itemDate: new Date() });
    }

    const dateConverter = (value, format) => {
        let result = format;
        const day = value.getDate();
        result = result.replace("DD", day < 10 ? `0${day}` : day);
        const month = value.getMonth() + 1;
        result = result.replace("MM", month < 10 ? `0${month}` : month);
        result = result.replace("YYYY", value.getFullYear());

        return result;
    };

    appModule.getResources().dateConverter = dateConverter;
    appModule.getResources().dateFormat = "DD.MM.YYYY";

    const page = args.object;
    const viewModel = fromObject({
        items: list
    });

    page.bindingContext = viewModel;
}
exports.onNavigatingTo = onNavigatingTo;
```
``` TypeScript
import * as application from "application";
import { EventData, fromObject } from "data/observable";
import { Page } from "ui/page";

export function onNavigatingTo(args: EventData) {
    const list = [];
    for (let i = 0; i < 5; i++) {
        list.push({ itemDate: new Date() });
    }

    const dateConverter = (value, format) => {
        let result = format;
        const day = value.getDate();
        result = result.replace("DD", day < 10 ? "0" + day : day);
        const month = value.getMonth() + 1;
        result = result.replace("MM", month < 10 ? "0" + month : month);
        result = result.replace("YYYY", value.getFullYear());

        return result;
    };

    application.getResources().dateConverter = dateConverter;
    application.getResources().dateFormat = "DD.MM.YYYY";

    const page = <Page>args.object;
    const viewModel = fromObject({
        items: list
    });

    page.bindingContext = viewModel;
}
```
> Note: The application module is static and could be reached within the entire application; it just needs to be required. Another difference here is that `dateConverter` is a function instead of an object with two functions `toView` and `toModel`. Since the usual operation is converting data from model to view, if a function is provided as converter, it acts as a `toView` function.

##Stop binding

Generally there is no need to stop binding explicitly since a Binding object uses weak references, which prevents any memory leaks. However, there are some scenarios where binding must be stopped. In order to stop an existing data binding, just call the **unbind** method with the target property name as the argument.

``` JavaScript
targetTextField.unbind("text");
```
``` TypeScript
targetTextField.unbind("text");
```

**API Reference for** [Binding](http://docs.nativescript.org/api-reference/classes/_ui_core_bindable_.bindable.html). 


### See also

* [Architecture and Navigation](https://docs.nativescript.org/core-concepts/navigation)
