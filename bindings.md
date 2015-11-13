---
nav-title: "NativeScript Data Binding"
title: "Data Binding"
description: "NativeScript Documentation: Data Binding"
position: 10
---

#Data Binding

Data binding is the process of connecting application user interface (UI) to a data object (code). It enables changes propagation by reflecting UI modifications on the code and vise versa.

> In the following article **source** is used as any object in the code, and **target** as any UI control (like TextField).

* [Data Flow Direction](#data-flow-direction)
* [Basic Binding Concepts](#basic-binding-concepts)
* [How to Create a Binding](#how-to-create-a-binding)
    * [Two-Way Binding in Code](#two-way-binding-in-code)
    * [Binding in XML](#binding-in-xml)
* [Binding Source](#binding-source)
	* [Binding to a Property](#binding-to-a-property)
	* [Binding to an Event in XML](#binding-to-an-event-in-xml)
	* [Binding to a Plain Object](#binding-to-a-plain-object)
	* [Binding to a Parent Binding Context](#binding-to-a-parent-binding-context)
* [Using Expressions for Bindings](#using-expressions-for-bindings)
* [Using Converters in Bindings](#using-converters-in-bindings)
* [Stop Binding](#stop-binding)

##Data Flow Direction

Part of the data binding settings is the way data flows. NativeScript data binding supports the following data transmissions.

* **One-Way** - this is the default setting, which ensures that the target property updates when a change in the source property occurs. However, UI modification will not update the code and it will stop the binding connection.

* **Two-Way** - this setting ensures the reflection of changes in both directions - from target to source and source to target. You can use two-way data binding when you need to handle user input. 

##Basic Binding Concepts

Generally almost every UI control could be bound to a data object (all NativeScript controls are created with data binding in mind). After your code has ,et the following requirements, you can use data-binding out of the box.

* The target object has to be a successor of the **Bindable** class. All NativeScript UI controls already inherit from this class.
* For **two-way** data binding, the target property should to be a **dependency property**. 
* For **one-way** binding, using a plain property is sufficient.
* The data object should raise a **propertyChange** event for every change in the value of its property in order to notify all of the listeners, interested in the change.

##How to Create a Binding

###Two-Way Binding in Code

The example below consists of a `Label`, `TextField` and a source property to which the UI controls are bound. The purpose will be, when the user enters an input in the `TextField`, to update the property in the code and the `Label` text. 

First, the **source** object is created with a **textSource** property. A constant flow of progating changes from the source property to the Label is necessary. Thus the property in the code has to raise a **propertyChange** event, in order to notify the `Label` for the changes. To raise this event, an built-in class is used, which provides this functionality - `Observable`.

``` JavaScript
var observableModule = require("data/observable");
var source = new observableModule.Observable();
source.textSource = "Text set via twoWay binding";
```
``` TypeScript
import observableModule = require("data/observable");
var source = new observableModule.Observable();
source.textSource = "Text set via twoWay binding";
```

Next, **target** objects are created to bind to the source property. In this case these will be a `Label` and a `TextField`, which inherit from the `Bindable` class (as all of the UI controls do). 

``` JavaScript
//create the TextField
var textFieldModule = require("ui/text-field");
var targetTextField = new textFieldModule.TextField();

//create the Label
var labelModule = require("ui/label");
var targetLabel = new labelModule.Label();
```
``` TypeScript
//create the TextField
import textFieldModule = require("ui/text-field");
var targetTextField = new textFieldModule.TextField();

//create the Label
import labelModule = require("ui/label");
var targetLabel = new labelModule.Label();
```
After that the target objects bind to the source object. The TextField uses a two-way binding, so the user input could change the property in the code. And the binding of the Label is set to one-way in order to propagate changes only from the code to the UI. 

``` JavaScript
//binding the TextField
var textFieldBindingOptions = {
	sourceProperty: "textSource",
	targetProperty: "text",
	twoWay: true
};
targetTextField.bind(textFieldBindingOptions, source);

//binding the Label
var labelBindingOptions = {
	sourceProperty: "textSource",
	targetProperty: "text",
	twoWay: false
};
targetLabel.bind(labelBindingOptions, source);
```
``` TypeScript
//binding the TextField
var textFieldBindingOptions = {
	sourceProperty: "textSource",
	targetProperty: "text",
	twoWay: true
};
targetTextField.bind(textFieldBindingOptions, source);

//binding the Label
var labelBindingOptions = {
	sourceProperty: "textSource",
	targetProperty: "text",
	twoWay: false
};
targetLabel.bind(labelBindingOptions, source);
```

###Binding in XML

To create a binding in XML, a source object is needed, which will be created the same way, as in the exmple above ([Two-Way Binding in Code](#two-way-binding-in-code)). Then the binding is described in the XML (using a mustache syntax). With an XML declaration only the names of the properties are set- for the target: text and for source: textSource. The interesting thing here is that the source of the binding is not specified explicitly. More about this topic will be discussed in the next article ([Binding source](#binding-source)).


``` XML
<Page>
	<StackLayout>{%raw%}
		<TextField text="{{ textSource }}" />
{%endraw%}	</StackLayout>
</Page>
```

> Note: When creating UI elements with an XML declaration, the data-binding is two-way by default. 

##Binding source

###Binding to a Property 

An important part of the data binding is setting the source object. For a continuous flow of data changes, the source property needs to emit a **propertyChange** event. NativeScript data-binding works with any object that emits this event. Adding a binding **source** happens by passing it as a second parameter in the method **bind(bindingOptions, source)**. This parameter is optional and could be omited, in which case for source is used a property named **bindingContext** of the `Bindable` class. What is special about this property is that it is inheritable across the visual tree. This means that a UI control can use the `bindingContext` of the first of its **parent** elements, which has an explicitly set **bindingContext**. In the example from [Two-Way Binding in Code](#two-way-binding-in-code), the `bindingContext` can be set either on a `Page` instance or a `StackLayout` instance and the `TextField` will inherit it as a proper source for the binding of its "text" property.

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
###Binding to an Event in XML

There is an option to bind a function to execute on a specific event (MVVM command like). This option is available only through an XML declaration. To implement such a functionality, the source object should have an event handler function.

``` XML
<Page>
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
> Note: Be aware that if there is a button with an event handler function **onTap** within the page code-behind ([more info about XML declarations](./ui-with-xml.md)), and **onTap** function within the **bindingContext** object, then there **will not** be two event handlers hooked for that button. For executing the function in the code behind, the following syntax should be used in the XML - **tap="onTap"** and for the function from the bindingContext - **tap="\{\{ onTap \}\}"**.

###Binding to a Plain Object

A very common case is to provide a list (array) of plain elements (numbers, dates, strings) to a `ListView` items collection. All examples above demonstrate how to bind an UI element to a property of the bindingContext. If there is only plain data there is no property to bind, so the binding should be to the entire object. Here comes another feature of NativeScript binding - object or value binding. To refer to the entire object, which is Date() in the example, the keyword `$value` should be used.

``` XML
<Page>
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
var appModule = require("application");
var list = [];
var i;
for(i = 0; i < 5; i++) {
	list.push(new Date());
}
source.set("items", list);
```
``` TypeScript
import appModule = require("application");
var list = [];
var i;
for(i = 0; i < 5; i++) {
	list.push(new Date());
}
source.set("items", list);
```
###Binding to a Parent Binding Context

Another common case in working with bindings is requesting access to the parent binding context. It is because it might be different from the bindingContext of the child and might contain information, which the child has to use. Generally, the bindingContext is inheritable, but not when the elements (items) are created dynamically based on some data source. For example, `ListView` creates its child items based on an `itemТemplate`, which describes how the `ListView` element will look like. When this element is added to the visual tree, it gets for binding context an element from ListView `items` array (with the corresponding index). This process creates a new binding context chain for the child item and its inner UI elements. So, no inner UI element cannot access binding context of the `ListView`. In order to solve this problem NativeScript binding infrastructure has two special keywords `$parent` and `$parents`. While the first one denotes the binding context of the direct parent visual element, the second one can be used as an array (with number or string index). This gives the option to choose either `N` levels of UI nesting or get a parent UI element with a given type. Let's see how this works in a real case example.

``` XML
<Page loaded="pageLoaded">
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
var observable = require("data/observable");
var pageModule = require("ui/page");

var viewModel = new observable.Observable();

function pageLoaded(args) {
    var page = args.object;
    viewModel.set("items", [1, 2, 3]);
    viewModel.set("test", "Test for parent binding!");
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;
```
``` TypeScript
import observable = require("data/observable");
import pageModule = require("ui/page");

var viewModel = new observable.Observable();

export function pageLoaded(args: observable.EventData) {
    var page = <pageModule.Page>args.object;
    viewModel.set("items", [1, 2, 3]);
    viewModel.set("test", "Test for parent binding!");
    page.bindingContext = viewModel;
}
```
##Using Expressions for Bindings

A great functionality is to create a custom expression for bindings. Custom expressions could help in cases when a certain logic should be applied to the UI, while keeping the underlying business data and logic clear. To be more specific let's see a basic binding expression example. The result should be a `TextField` element that will display the value of the `sourceProperty` followed by " some static text" string.

``` XML
<Page>
	<StackLayout>{%raw%}
		<TextField text="{{ sourceProperty, sourceProperty + ' some static text' }}" />
{%endraw%}	</StackLayout>
</Page>
```

The full binding syntax contains three parameters - the first parameter is the source property, which will be listened to for changes, the second parameter is the expression that will be evaluated and the third parameter states if the binding is two-way or not. As mentioned earlier XML declaration creates a two-way binding by default, so in the example the third parameter could be omitted. Keeping the other two properties, means that the custom expression will be evaluated only when the sourceProperty changes. The first parameter could also be omitted, then the custom expression will be evaluated everytime the bindingContext changes. Thus, the recommended syntax is to include two parameters in the XML declaration, as in our example - the property of interest and the expression, which has to be evaluated. 


###Supported Expressions
NativeScript supports different kind of expressions including:

| Feature | Example | Description |
|:--------|:--------|:------------|
| property access | `obj1.obj2.prop1` | Resulting in the value of the `prop1` property of the object `obj2`. Expressions in binding are based on `polymer expressions`, which supports re-evaluation of expression when any value within the dot (.) chain is changed. NativeScript uses expressions only in context of bindings (for now), so binding expression will be re-evaluated only when binding `sourceProperty` is changed (due to performance considerations). The expression part will not observe and therefore will not initiate re-evaluation. |
| array access | `arrayVar[indexVar]` | Taking the value of an element in an array (arrayVar) accessed by a valid index for that array (indexVar). |
| logical operators | `!var1` | Reversing the logical state of the operand - logical not. |
| unary operators | `+var1`, `-var2` | Converting var1 into a number. Converting var2 to a number and negates it. |
| binary operators | `var1 + var2` | Adding the value of var2 to var1. Supported operators: `+, -, *, /, %`. |
| comparison operators | `var1 > var2` | Comparing whether the value of var1 is more than the value of var2. Other supported operators - `<, >, <=, >=, ==, !=, ===, !==`. |
| logical comparison operators | `var1>1 && var2>1`. | Evealuating whether the value of var1 is more than 1 AND the value of var2 is more than 2. Supported operators: `&&, ||`. |
| ternary operator | `var1 ? var2 : var3` | Evaluating the value of `var1` and if true returns `var2` else returns `var3` |
| grouping parenthesis | `(a + b) * (c + d)` | |
| function calls | `myFunc(var1, var2, ..., varN)`| Where myFunc is a function available in binding context (used as context for expression) or within `application level resources`. The value of the `var1` and `varN` will be used as parameter(s). |
| filters | `expression \| filter1(param1, ...) | filter 2` | A filter is an object or a function that is applied to the value of the expression. Within the context of binding this feature is used as converters. For more information see dedicated topic [Using Converters in Bindings](#using-converters-in-bindings).|


##Using Converters in Bindings

Speaking of a two-way binding there is a common problem - having different ways of storing and displaying data. Probably the best example here is the date and time objects. Date and time information is stored as a number or a sequence of numbers (very useful for indexing, searching and other database operations), but this is not the best possible option for displaying date to the application user. Also there is another problem when the user inputs a date (in the example below the user types into a TextField). The result of the user input will be a string, which will be formatted in accordance with the user's preferences. This string should be converted to a correct date object. Lets see how this could be handled with NativeScript binding.

``` XML
<Page>
	<StackLayout>{%raw%}
		<TextField text="{{ testDate, testDate | dateConverter('DD.MM.YYYY') }}" />
{%endraw%}	</StackLayout>
</Page>
```
``` JavaScript
var dateConverter = {
	toView: function (value, format) {
		var result = format;
		var day = value.getDate();
		result = result.replace("DD", day < 10 ? "0" + day : day);
		var month = value.getMonth() + 1;
		result = result.replace("MM", month < 10 ? "0" + month : month);
		result = result.replace("YYYY", value.getFullYear());
		return result;
	},
	toModel: function (value, format) {
		var ddIndex = format.indexOf("DD");
		var day = parseInt(value.substr(ddIndex, 2));
		var mmIndex = format.indexOf("MM");
		var month = parseInt(value.substr(mmIndex, 2));
		var yyyyIndex = format.indexOf("YYYY");
		var year = parseInt(value.substr(yyyyIndex, 4));
		var result = new Date(year, month - 1, day);
		return result;
	}
}

source.set("dateConverter", dateConverter);
source.set("testDate", new Date());
page.bindingContext = source;
```
``` TypeScript
var dateConverter = {
	toView: function (value, format) {
		var result = format;
		var day = value.getDate();
		result = result.replace("DD", day < 10 ? "0" + day : day);
		var month = value.getMonth() + 1;
		result = result.replace("MM", month < 10 ? "0" + month : month);
		result = result.replace("YYYY", value.getFullYear());
		return result;
	},
	toModel: function (value, format) {
		var ddIndex = format.indexOf("DD");
		var day = parseInt(value.substr(ddIndex, 2));
		var mmIndex = format.indexOf("MM");
		var month = parseInt(value.substr(mmIndex, 2));
		var yyyyIndex = format.indexOf("YYYY");
		var year = parseInt(value.substr(yyyyIndex, 4));
		var result = new Date(year, month - 1, day);
		return result;
	}
}

source.set("dateConverter", dateConverter);
source.set("testDate", new Date());
page.bindingContext = source;
```

Note the special operator (|) within the expression. The above code snippet (both XML and JavaScript) will display a date in a `DD.MM.YYYY` format (`toView` function), and when a new date is entered with the same format, it is converted to a valid `Date` object (`toModel` function). A `Converter` object should have one or two functions (`toView` and `toModel`) executed every time when a data should be converted. A `toView` function is called when data will be displayed to the end user as a value of any UI view, and a `toModel` function will be called when there is an editable element (like TextField) and the user enters a new value. In the case of one-way binding, the `Converter` object could have only a `toView` function or it should be a function. All converter functions have an array of parameters, where the first parameter is the value, which will be converted and all other parameters are custom parameters defined in the converter definition.

> Remarks: Any run-time error within the converter methods (`toView` and `toModel`) will be handled automatically and the application will not break, but the data in the view-model will not be altered (in case of error) and an error message with more information will be logged to the console. To enable it use the built-in `trace` module with a `Error` category. A date converter is simplified just for the sake of the example and it is not supposed to be used as a fully functional converter from date to string and vice versa.

A converter can accept not only static custom parameters, but any value from the `bindingContext`. For example:

``` XML
<Page>
	<StackLayout>{%raw%}
		<TextField text="{{ testDate, testDate | dateConverter(dateFormat) }}" />
{%endraw%}	</StackLayout>
</Page>
```
``` JavaScript
...
source.set("dateFormat", "DD.MM.YYYY");
page.bindingContext = source;
```
``` TypeScript
...
source.set("dateFormat", "DD.MM.YYYY");
page.bindingContext = source;
```

Setting a converter function and a parameter within the bindingContext is very useful for ensuring proper convertion of data, however this is not the case when `listview` items should be bound. The problem comes from the fact that the bindingContext of a `listview` item is a data item, which is a part of `any` collection (array), and to apply a converter - the converter and its parameters should be added to the data item, which will result in a multiple converter instances. Tackling this problem with NativeScript is fairly simple. Binding infrastructure seeks for an application level resources to find a proper converter and parameters. So the converters could be added in the resources in the application module. To be more clear examine the following example (both XML and JavaScript):

``` XML
<Page>
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
var appModule = require("application");
var list = [];
var i;
for(i = 0; i < 5; i++) {
	list.push({ itemDate: new Date()});
}
source.set("items", list);

var dateConverter = function(value, format) {
	var result = format;
	var day = value.getDate();
	result = result.replace("DD", day < 10 ? "0" + day : day);
	var month = value.getMonth() + 1;
	result = result.replace("MM", month < 10 ? "0" + month : month);
	result = result.replace("YYYY", value.getFullYear());
	return result;
};

appModule.resources["dateConverter"] = dateConverter;
appModule.resources["dateFormat"] = "DD.MM.YYYY";
```
``` TypeScript
import appModule = require("application");
var list = [];
var i;
for(i = 0; i < 5; i++) {
	list.push({ itemDate: new Date()});
}
source.set("items", list);

var dateConverter = function(value, format) {
	var result = format;
	var day = value.getDate();
	result = result.replace("DD", day < 10 ? "0" + day : day);
	var month = value.getMonth() + 1;
	result = result.replace("MM", month < 10 ? "0" + month : month);
	result = result.replace("YYYY", value.getFullYear());
	return result;
};

appModule.resources["dateConverter"] = dateConverter;
appModule.resources["dateFormat"] = "DD.MM.YYYY";
```

> Note: Application module is static and could be reached within the entire application just need to be required. Another difference here is that `dateConverter` is a function instead of an object with two functions `toView` and `toModel`. Since the usual operation is converting data from model to view therefore if a function is provided as converter it acts as `toView` function.

##Stop Binding

Generally there is no need to stop binding explicitly, since Binding object uses weak references, which prevents any memory leaks. However, there are some scenarios, where binding must be stopped. In order to stop existing data binding just call **unbind** method with target property name as argument.

``` JavaScript
targetTextField.unbind("text");
```
``` TypeScript
targetTextField.unbind("text");
```
More information about binding can be found in [API-Ref](./ApiReference/ui/core/bindable/Bindable.md).
