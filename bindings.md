---
nav-title: "NativeScript Data Binding"
title: "App: Data Binding"
description: "NativeScript Documentation: Data Binding"
position: 6
---

#Data Binding

Data binding is the process of connecting application user interface (UI) to a data object (code). It enables changes propagation by reflecting UI modifications on the code and vise versa.

> In the following article **source** is used as any object in the code, and **target** as any UI control (like TextField).

* [Data Flow Direction](#data-flow-direction)
* [Basic Binding Concepts](#basic-binding-concepts)
* [Create a Binding](#create-a-binding)
    * [Two-Way Binding in Code](#two-way-binding-in-code)
    * [Binding in XML](#binding-in-xml)
* [Binding Source](#binding-source)
	* [Biding to a Property](#biding-to-a-property)
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

##Create a Binding

###Two-Way Binding in Code

The example below consists of a Label, TextField and a source property to which the UI controls are bound. Our purpose will be, when the user enters an input in the TextField, the property in the code to be updated together with the Label text. We will bind the TextField with a two-way binding, so the user input will change the property in the code. And the binding of the Label will be set to one-way in order to propagate changes only from the code to the UI. But, as we already mentined, when we make a change from the UI (TextField) to the source property, the binding will stop. This means that we will not have a constant flow of progating changes from the source property to the Label. Thus the property in the code should raise a **propertyChange** event, in order to notify the Label for the changes. To raise this event, we will use an inbuild class, which provides this functionality - Observable. 

First, we will create the **source** object, which will be instance of Observable, with a **textSource** property.

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

Next we need to create **target** objects to bind to the source property. In our case these will be a Label and a TextField, which inherit from the Bindable class (as all of the UI controls do). 

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
After that we need to bind them the the source object. 

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

To create a binding in XML, we will need a source object, which will be created the same way, as in the exmple above ([Two-Way Binding in Code](#two-way-binding-in-code)). Then we describe the binding in the XML (using a mustache syntax). With an XML declaration we set only the names of the properties - for the target: text and for source: textSource.The interesting thing here is that we don't specify explicitly the source of the binding. More about this topic will be discussed in the next article.


``` XML
<Page>
	<StackLayout>{%raw%}
		<TextField text="{{ textSource }}" />
{%endraw%}	</StackLayout>
</Page>
```

> Note: For an UI elements created with an XML declaration when data binding is set **twoWay** option is **true** by default.

##Binding source

###Biding to a Property 

An important part of the data binding is setting the source object. For a continuous flow of data chnages, the source property needs to emit a **propertyChange** event. NativeScript data binding works with any object that emits it. To add a binding **source**, it could be set as a second parameter of the method **bind(bindingOptions, source)**. However, this parameter is optional and could be omited, in which case for source is used a special property named **bindingContext** of the Bindable class. What is special about this property is that it is inheritable across the visual tree. This means that a UI control can use the **bindingContext** (as source) of the first **parent** element with an explicitly set **bindingContext**. With the previous example **bindingContext** can be set either on Page instance or StackLayout instance and the TextField will have a proper **source** for the binding of its "text" property.

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

There is an option to bind a function to execute on a specific event (MVVM command like). This option is available only through a XML declaration. To implement such a functionality, the source object should have an event handler function.

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
> Note: Be aware that if there is an event handler function **onTap** within the page code behind ([more info about xml declarations](./ui-with-xml.md)), and **onTap** function within the **bindingContext** object then there **will not** be 2 event handlers hooked for that button. If the function in the code behind should be execute, the following syntax should be used in the XML - **tap="onTap"** and if the function form the bindingContext - **tap="\{\{ onTap \}\}"**.

###Binding to a Plain Object

Very common case is to provide a list (array) of plain elements (numbers, dates, strings) to a `listview` items collection. All examples above demonstrated how to bind an UI element to a property of the bindingContext. If there is only plain data there is no property to bind, so the binding should be to the entire object. Here comes in place another feature of NativeScript binding - object or value binding. To refer to the entire object, which is Date() in our example, the keyword `$value` should be used.

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

Another common case in working with bindings is requesting access to the parent binding context. The problem comes with dynamically created elements (items) based on some data source. For example `ListView` creates its child items based on an item template, which describes how ListView element will look like. When this element is added to the visual tree, it gets for binding context an element from ListView `items` array (with the corresponding index). This process actually creates a new binding context chain for the child item and its inner UI elements. So no inner UI element cannot access binding context of the `ListView`. In order to solve this problem NativeScript binding infrastructure has two special keywords `$parent` and `$parents`. While the first one denotes the binding context of the direct parent visual element, the second one can be used as an array (with number or string index). This gives the option to choose either `N` levels of UI nesting or get a parent UI element with a given type. Lets see how this works in a real case example.

``` XML
<Page loaded="pageLoaded">
	<GridLayout rows="*" >{%raw%}
		<ListView items="{{ items }}">
			<ListView.itemTemplate>
				<GridLayout columns="auto, *">
					<Label text="{{ $value }}" col="0"/>
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

The previous example shows how to access a parent binding context of the first `ListView` element. Since the binding context of the Page, GridLayout and ListView is the same (inherited from Page), replacing `$parents['ListView']` with `$parents['GridLayout']` or `$parents['Page']` will not change the result. Also the same result will be achieved with `$parents[1].test` instead of `$parents['ListView'].test`. However string index syntax is better. It will work even when a new UI hierarchy level is introduced (e.g. by surrounding TextField in a another panel). The other keyword `$parent` is actually just a short-cut for `$parents[0]` and will return the direct UI predecessor's binding context.

##Using Expressions for Bindings

A great way of using bindings is the option to create a custom expression. Custom expressions could help in cases when a certain logic should be applied to the UI, while keeping the underlying business data and logic clear. To be more clear lets see a basic binding expression example. The result should be a TextField element that will display the value of the `sourceProperty` followed by " some static text" string.

``` XML
<Page>
	<StackLayout>{%raw%}
		<TextField text="{{ sourceProperty, sourceProperty + ' some static text' }}" />
{%endraw%}	</StackLayout>
</Page>
```

The full binding syntax contains three parameters - first parameter is the source property, which will be listened to for changes, second parameter is the expression that will be evaluated and the third parameter states if the binding is two-way or not. As mentioned earlier by default XML declaration creates a two-way binding by default, so in our example the third parameter could be omitted. We can also omit the first parameter, but this will mean that the expression will be evaluted everytime we have a change in the bindingContext and not only when the property, we are interested in, has changed. Thus, the recommended syntax is to include two parameters in the XML declaration, as in our example - the property of interest and the expression, which has to be evaluated. 


###Supported Expressions
NativeScript binding infrastructure supports different kind of expressions including:

| Feature | Example | Description |
|:--------|:--------|:------------|
| property access | `obj1.obj2.prop1` | The result will be the value of the `prop1` property of the object `obj2`. Despite the fact expressions in binding are based on `polymer expressions`, which supports re-evaluation of expression when any value within the dot (.) chain is changed. NativeScript uses expressions only in context of bindings (for now), so binding expression will be re-evaluated only when binding's `sourceProperty` is changed (due to performance considerations). Expression part will not observe and therefore will not initiate re-evaluation. |
| array access | `arrayVar[indexVar]` | Where arrayVar is an array and indexVar is a valid index for that array. |
| logical operators | `!var1` | Logical not. |
| unary operators | `+var1`, `-var2` | Converts var1 into a number. Converts var2 to number and negates it. |
| binary operators | `var1 + var2` | Supported operators - `+, -, *, /, %`. |
| comparison operators | `var1 > var2` | Supported operators - `<, >, <=, >=, ==, !=, ===, !==`. |
| logical comparison operators | `var1 && var2 || var3`. | Supported operators - `&&, ||`. |
| ternary operator | `var1 ? var2 : var3` | Evaluates value of `var1` and if truly returns `var2` else `var3` |
| grouping parenthesis | `(a + b) * (c + d)` | |
| function calls | `myFunc(var1, var2, ..., varN)`| Where myFunc is a function available in binding context (used as context for expression) or within `application level resources` and value of the `var1` and `varN` will be used as parameter(s). |
| filters | `expression | filter1(param1, ...) | filter 2` | Filters actually is an object or a function that is applied to the value of the expression. Within the context of binding this feature is used as converters. For more information see dedicated topic for converters.|


##Using Converters in Bindings

Speaking of a two-way binding there is a common problem that origins in the different way of storing and displaying data. Probably the best example here is the date and time objects. Generally date and time information is stored as a number or a sequence of numbers (very useful for indexing, searching and other database operations), but this is not the best possible option for displaying date to the application user. Also there is another problem when the user inputs a date (in our example user types into a TextField). The result of the user input will be a string (TextField.text property) - representation of a date in a convenient to user's culture way. This string should be converted to a correct date object. Lets see how this could be handled with NativeScript binding.

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

Note the special operator (|) within the expression. The above code snippet (both XML and JavaScript part) will display a date in a `DD.MM.YYYY` format (`toView` function), and when a new date is entered with the same format, it is converted to a valid `Date` object (`toModel` function). `Converter` object should have one or two functions (`toView` and `toModel`) executed every time when a data should be converted. `toView` function is called when data will be displayed to the end user as value of any UI view, and `toModel` function will be called when we have an editable element (like TextField) and the user enters a new value. In case of one way binding `Converter` object could have only `toView` function or it should be a function. All converter functions have an array of parameters, where the first parameter is the value, which will be converted and all other parameters are custom parameters defined in the converter definition.

> Remarks: Any run-time error within the converter methods (`toView` and `toModel`) will be handled automatically and application will not break, but data in view model will not be altered (in case of error) and an error message with more information will be logged to the console. To enable it use the built-in `trace` module with `Error` category. Date converter is simplified just for the sake of the example and it is not supposed to be used as a fully functional converter from date to string and vice versa.

Converter can accept not only static custom parameters, but any value from the `bindingContext`. For example:

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

Setting a converter function and parameter within the bindingContext is very useful, however this is not the case when `listview` items should be bound. The problem comes from the fact that the bindingContext of a `listview` item is a data item, which is a part of any collection (array), and to apply a converter - the converter and its parameters should be added to the data item, which will result in a multiplied converter instances. Tackling this problem with NativeScript is fairly simplified. Binding infrastructure seeks for an application level resources to find a proper converter and parameters. So the converters could be added in the resources in the application modul. To be more clear examine following example (both XML and JavaScript):

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
