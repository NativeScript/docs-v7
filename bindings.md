---
nav-title: "NativeScript Data Binding"
title: "App: Data Binding"
description: "NativeScript Documentation: Data Binding"
position: 6
---

#Data Binding

##Overview

Data binding is the process of connecting application user interface (UI) to a data object (business model). With a correct data binding settings and if data object provides proper notifications then when data changes application UI will reflect changes accordingly (source to target). Depending on settings and requirements there is a possibility to update data from UI to data object (target to source).

> **source** is used as any business logic object, and **target** as any UI control (like TextField).

##Basic data binding concepts

Generally almost every UI control (since all controls are created with data binding in mind) could be bound to a data object. However there are few restrictions for data binding to work out of the box.

* Target object should be a successor of **Bindable** class. This is the case with all NativeScript UI controls.
* Target property should be a **dependency property** in order to use data binding from target to source (or two way data binding). A plain property could be used if there is no need of **twoWay** binding.
* Data (business) object should raise **propertyChange** event for every change in the value of the property.

##Direction of data flow

Part of the data binding settings is the way data (values) flows. NativeScript data binding supports following data transmissions.

* **OneWay** - this is a setting that indicates that a change in the source object will update target property, but a change in target property will not be propagated back to source (data object). Any update to the target property (except binding) will stop the binding connection. - this is the **default** option.

* **TwoWay** - this setting indicates that both changes in source object will be reflected to the target and changes from target will update the source object. Very useful in cases when user input should be handled (for example user writes a text - text is written within a TextField control and is updated to a underlying data property of the source object).
In order to use this option binding options should set **twoWay as true**. Following examples show how to do that.

##Creating a binding

* Creating binding in code.

In order to create a working binding first we should have a source object. Source object should raise **propertyChange** event for every change of any property. NativeScript has a built-in class that fulfills that requirement (Observable). Following is a code snippet that creates an observable object instance.

``` JavaScript
var observableModule = require("data/observable");
var source = new observableModule.Observable();
```
``` TypeScript
import observableModule = require("data/observable");
var source = new observableModule.Observable();
```

Creating a target object. For the sake of example we will also create a target object an instance of Bindable class (all UI controls derives from it).

``` JavaScript
var textFieldModule = require("ui/text-field");
var targetTextField = new textFieldModule.TextField();
```
``` TypeScript
import textFieldModule = require("ui/text-field");
var targetTextField = new textFieldModule.TextField();
```

Create a data binding.

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

This example will update **targetTextField.text** property with a *"Text set via binding"* value, **twoWay** option ensures that every change of the **targetTextField.text** property (via user input) will be stored within **source.text** property. The new value of the text property could be get via:

> Note: Using **set** method of the Observable class is required, since it emits a **propertyChange** event for the property **testSource**. 

``` JavaScript
source.get("textSource");
```
``` TypeScript
source.get("textSource");
```

* Create a data binding in xml

	1. Create a source object. "source" object from the previous case (creating binding with code) will be used for following examples.

	2. Describe a binding within xml (using a mustache syntax).

``` XML
<Page>
	<StackLayout>{%raw%}
		<TextField text= {{ textSource }} />
{%endraw%}	</StackLayout>
</Page>
```

> Note: For an UI elements created with an xml declaration when data binding is set **twoWay** option is **true** by default.

With an xml declaration we set only properties names both for target (text) and source (textSource). The interesting thing here is that there is no source of the binding (actually it is not set directly).

##Binding source

The important part of the data binding is setting the source object. NativeScript data binding works with any object that emits a **propertyChange** event. On the process of creating binding **source** can be set as second parameter of the bind(bindingOptions, source) or could be omitted. In the case (when source argument is omitted) for source is used a special property named **bindingContext** of the Bindable class. The special about this property is that it is inheritable across the visual tree. This means that control can use the **bindingContext** (as source) of the first **parent** element with a explicitly set **bindingContext**. With the previous example **bindingContext** can be set either on Page instance or StackLayout instance and TextField will have a proper **source** for its "text" property binding.

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

* Create a data binding to an event in xml

There is an option to bind a function to execute on a specific event (MVVM command like). This option is available only through an xml declaration. The different part is that the source property should have an event handler function as value.

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

and how xml will look like:

``` XML
<Page>
	<StackLayout>{%raw%}
		<Button text="Test Button For Binding" tap="{{ onTap }}" />
{%endraw%}	</StackLayout>
</Page>
```

> Note: Be aware that if there is an event handler function **onTap** within the page code behind ([more info about xml declarations](./ui-with-xml.md)), and **onTap** function within the **bindingContext** object then there will be 2 event handlers hooked for that button and both will be executed on tap event.

##Using expressions for bindings

A great way of using bindings is the option to create a custom expression (that will be evaluated every time when the source property is changed). Custom expression could help in cases when a certain logic should be applied to the UI while keeping the underlying business data and logic clear. To be more clear lets see a basic binding expression example.

``` XML
<Page>
	<StackLayout>{%raw%}
		<TextField text="{{ sourceProperty, sourceProperty + ' some static text' }}" />
{%endraw%}	</StackLayout>
</Page>
```

As seen from the example adding an expression extends a binding syntax a little bit. Actually it is a full binding syntax - first parameter is the source property (which will be listened for changes), second parameter is the expression that will be evaluated, there is one more (third) parameter which states if the binding is `twoWay` or not (as mentioned earlier by default xml declaration creates a `twoWay` binding). The result of the upper example is a TextField element that will display the value of the `sourceProperty` followed by " some static text" string.

##Using converters in bindings

Speaking of a `twoWay` binding there is a common problem that origins in the different way of storing and displaying data. Probably the best example here is the date and time objects. Generally date and time information is stored as a number or a sequence of numbers (very useful for indexing, searching and other database operations), but this is not the best possible option for displaying date to the application user. Also there is another problem when user inputs a date (in our example user types into a TextField). The result of user input will be a string (TextField.text property) - representation of a date in a convenient to user's culture way usually using the same format as for display `DD.MM.YYYY`. This string should be converted to a correct date object. Lets see how this could be handled with NativeScript binding.

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
		result = result.replace("DD", month < 10 ? "0" + day : day);
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
		result = result.replace("DD", month < 10 ? "0" + day : day);
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

Note the special operator (|) within the expression. The above code snippet (both XML and JavaScript part) will display a date in a `DD.MM.YYYY` format (`toView` function), and when a new date is entered with the same format is converted to a valid `Date` object (`toModel` function). `Converter` object should have one or two functions (`toView` and `toModel`) executed every time when a data should be converted. `toView` function is called when data will be displayed to the end user as value of any UI view, and `toModel` function will be called when we have an editable element (like TextField) and user enters a new value. In case of one way binding `Converter` object could have only `toView` function or to be a function. All convert functions have an array of parameters where the first parameter is the value which will be converted and all other parameters are custom parameters defined in the converter definition.

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

Setting a converter function and parameter within the bindingContext is very useful, however this is not the case when `listview` items should be bound. The problem comes from the fact that bindingContext of a `listview` item is a data item part of any collection (array) (and to apply a converter - converter and its parameters should be added to the data item which will result in a multiplied converter instances). Tackling this problem with NativeScript is fairly simplified. Binding infrastructure seeks for a application level resources to find a proper converter and parameters. To be more clear examine following example (both XML and JavaScript):

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
	result = result.replace("DD", month < 10 ? "0" + day : day);
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
	result = result.replace("DD", month < 10 ? "0" + day : day);
	var month = value.getMonth() + 1;
	result = result.replace("MM", month < 10 ? "0" + month : month);
	result = result.replace("YYYY", value.getFullYear());
	return result;
};

appModule.resources["dateConverter"] = dateConverter;
appModule.resources["dateFormat"] = "DD.MM.YYYY";
```

> Note: Application module is static and could be reached within the entire application just need to be required. Another difference here is that `dateConverter` is a function instead of an object with two functions `toView` and `toModel`. Since the usual operation is converting data from model to view therefore if a function is provided as converter it acts as `toView` function.

##Supported expressions
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

##Using plain object as binding context (source)

Very common case is to provide a list (array) of plain elements (numbers, dates, strings) to `listview` items collection. All example above demonstrated how to bind an UI element to a property of the bindingContext. In case with plain data there is no property to bind instead the entire object should be used. Here comes in place another feature of NativeScript binding - object or value binding. To refer to the entire object `$value` keyword should be used.

``` XML
<Page>
	<StackLayout>{%raw%}
		<ListView items="{{ items }}" height="200">
			<ListView.itemTemplate>
				<Label text="{{ $value | dateConverter(dateFormat) }}" />
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

var dateConverter = function(value, format) {
	var result = format;
	var day = value.getDate();
	result = result.replace("DD", month < 10 ? "0" + day : day);
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
	list.push(new Date());
}
source.set("items", list);

var dateConverter = function(value, format) {
	var result = format;
	var day = value.getDate();
	result = result.replace("DD", month < 10 ? "0" + day : day);
	var month = value.getMonth() + 1;
	result = result.replace("MM", month < 10 ? "0" + month : month);
	result = result.replace("YYYY", value.getFullYear());
	return result;
};

appModule.resources["dateConverter"] = dateConverter;
appModule.resources["dateFormat"] = "DD.MM.YYYY";
```

> Note: The **items list** now contains pure Date() objects (not a wrapper with an **itemDate** property), and Label binding using **$value** instead of **itemDate**. In cases when an object is supplied (not a plain element) then the entire object will be returned by **$value**.

##Using a parent binding context as binding source

Another common case in working with bindings is access to parent binding context. The problem comes with dynamically created elements (items) based on some data source. For example `ListView` creates its child items based on an item template, which describes how ListView element will look like. When this element is added to visual tree it gets for binding context an element from ListView `items` array (with the corresponding index). This process actually creates a new binding context chain for child item and its inner UI elements. So any inner UI element cannot access binding context of the `ListView`. In order to solve this problem NativeScript binding infrastructure has two special keywords `$parent` and `$parents`. While the first one denotes the binding context of the direct parent visual element, the second one can be used as an array (with number or string index). This gives the option to choose either `N` levels of UI nesting or get a parent UI element with a given type. Lets see how this works in a real case example.

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

The previous example shows how to access parent binding context of the first `ListView` element. Since the binding context of the Page, GridLayout and ListView is the same (inherited from Page), replacing `$parents['ListView']` with `$parents['GridLayout']` or `$parents['Page']` will not change the result. Also same result will be achieved with `$parents[1].test` instead of `$parents['ListView'].test`. However string index syntax is better. It will work even when a new UI hierarchy level is introduced (by surrounding TextField in a another panel).
The other keyword `$parent` is actually just a short-cut for `$parents[0]` and will return the direct UI predecessor's binding context.

##Stop binding

Generally there is no need to stop binding explicitly, since Binding object uses weak references which prevents any memory leaks. However there are some scenarios (business logic) where binding must be stopped. In order to stop existing data binding just call **unbind** method with target property name as argument.

``` JavaScript
targetTextField.unbind("text");
```
``` TypeScript
targetTextField.unbind("text");
```
More information about binding can be found in [API-Ref](./ApiReference/ui/core/bindable/Bindable.md).
