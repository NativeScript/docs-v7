---
title: Data Binding
description: NativeScript Documentation - Data Binding
position: 60
slug: data-binding
environment: angular
previous_url: /core-concepts/DataBinding
--- 

#Data Binding

DataBinding is a core concept for both NativeScript and Angular frameworks. By default `Data Binding` stands for a connection (`binding`) between `Data Model` (Model) and `User Interface` (UI). Since this `binding` involves mostly `data` we use the term `Data Binding` to denote such connection or relationship.

There are several ways of data flows (data bindings).

* one-way data binding - this is the most popular way of binding from Model to UI. A good example of such binding is a text stored in Model and displayed on UI in a text area control.
* one-way to source (to model) - this is a way of binding which updates Model due to some action on UI. The best example for this is an event like button click (tap).
* two-way data binding - this is a way of binding that combines both previous ways of binding. A typical example is a text box field that reads its value from Model, but also changes the Model based on user input.

`NativeScript-Angular` plugin simplifies the way which data binding will be used. NativeScript part of the binding infrastructure is used to bind Model values to the real native elements (Android and iOS). Angular part is used to provide correct binding context, change detection and notifications. Using data binding within NativeScript-Angular application generally do not differ from a standard Angular web application.

Let's see some examples how to use data binding with `NativeScript-Angular` plugin.

* one-way data binding - surround target (UI) property with square brackets 
```XML
<Label [text]='model.mytext' ></Label>
```
```TypeScript
this.model.mytext = 'Lorem ipsum ...';
// this is the component where label is added
```
* one-way to source data binding - surround source event with brackets
```XML
<Button (tap)='onButtonTap()'></Button>
```
```TypeScript
onButtonTap = function () {
	console.log('Button tapped');
}
// onButtonTap is a function inside component class where Button is placed
```
* two-way data binding - surround target property with square and normal brackets

> Before we can use the ngModel directive in a two-way data binding, we must import the NativeScriptFormsModule and add it to the Angular module's imports list:
> ```typescript
import {NativeScriptFormsModule} from "nativescript-angular/forms"
@NgModule({
	imports: [
		NativeScriptModule,
		NativeScriptRouterModule,
		NativeScriptFormsModule, // RIGHT HERE
	],
})
```

In Angular 1.x two-way data binding was the default way of binding. However with Angular the state of `two-way data binding` is not the same - due to too many performance problems caused by the uncertainty of what or who caused the change of the value within Model which sometimes results in way too many changes (and change notifications). So Angular does not have two-way data binding by default, instead it uses events to notify Model that something is changed.

```XML
<TextField [(ngModel)]='model.mytext'></TextField>
```
```TypeScript
this.model.mytext = 'Lorem Ipsum ...';
```
There are some limitations when using two-way data binding with Angular. Two-way binding is initialized with `ngModel` directive instead of the name of the property. This under the hood creates two simple data bindings one-way and one-way to source:

```XML
<TextField [(ngModel)]='model.mytext' ></TextField>
// becomes
<TextField [ngModel]='model.mytext' (ngModelChange)='model.mytext=$event' ></TextField>
```

This is the way Angular supports two-way data binding. It generally works in almost all cases with the limitation that we could use only one property with two-way data binding (in the case of TextField this is the `text` property). `ngModel` directive also provide an interface for safely updating property in both directions. For all NativeScript controls `NativeScript-Angular` plugin provides the underlying infrastructure to support native controls via `ngModel` directive (the same way as Angular syntax). It is done by using a single value property for every control that could be used with `ngModel` syntax. Following is the list of available properties:

* TextField, TextView, SearchBar - text property
* DatePicker - date property
* TimePicker - time property
* ListPicker, SegmentedBar - selectedIndex property
* Switch - checked property
* Slider - value property

Angular mustache (`{{ }}`) syntax for binding is also supported within a NativeScript-Angular application. It's just another way of one-way binding placed in the middle of a text.

```XML
{%raw%}<Label text='{{model.deliveryHour}}:{{model.deliveryMinute}}'></Label>{%endraw%}
```
```TypeScript
this.model.deliveryHour = 10;
this.model.deliveryMinute = 25;
```

> Note: Notice that property `text` of the Label element in previous example is not surrounded by any brackets.

### Data converters

Often data within Data Model is stored in a way that is optimized for best performance of tasks like search, replace and so on. Unfortunately, the way computers store data differs a lot with a human readable format. Probably the best example is `Date object`. In JavaScript `Date` actually is a very big number that represents milliseconds from 01.01.1970 which does not speak much to any human. Here comes the use of data converters which basically are functions that formats the data (from Model) in a human readable format (display in UI). Angular uses the same concept and names it `pipe` (like UNIX pipe) - value is passed to the pipe function which transforms it and the final result is displayed to the user. Using `pipe` is simple and with the same syntax like UNIX pipe.

```XML
<Label [text]='model.deliveryDate | date:"fullDate"' ></Label>
```
```TypeScript
this.model.deliveryDate = new Date(2016, 2, 24);
// this will display Thursday, March 24, 2016 for en-US locale
```

Pipes, like pipes in UNIX, can be chained and used one after another, while each pipe receives the result of the previous pipe or the value of the property:

```XML
<Label [text]='model.deliveryDate | date:"fullDate" | testPipe' ></Label>
```

> Note: Pipes do not work with `one-way to source` and `two-way` binding syntax.
