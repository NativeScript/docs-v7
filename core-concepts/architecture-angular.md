---
title: Application Architecture
description: Learn the core concepts of building Angular 2 apps with NativeScript
position: 0
slug: architecture-angular
environment: angular
---

# Application Architecture

In this article we are going to go through the core concepts of the Angular 2 framework, with an an emphasis on the specifics of using Angular 2 with NativeScript.

>**Note:** The best place to learn about Angular 2 concepts is on [angular.io](https://angular.io/docs/ts/latest/). We are going to refer to it in many sections in this article.

* [Components](#components)
* [Template Syntax](#template-syntax)
* [Data Binding](#data-binding)
* [Directives](#directives)
* [Dependency Injection](#dependency-injection)
* [Navigation](#navigation)

# Components

Components are the main building block of Angluar 2 applications. They define the application UI and the logic that controls it. Let's take look at the following component:

``` TypeScript
import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: `
        <StackLayout orientation="vertical">
            <Label [text]="message" (tap)="onTap()"></Label>
        </StackLayout>`
})
export class AppComponent {
    public message: string = "Hello, Angular!";
    public onTap() {
        this.message = "OHAI";
    }
}
```

Each component has two parts - the **component class** and the **component template**:
* **The component class** (`class AppComponent` in the example) defines the application logic of the component - its behavior. 
* **The component template** defines the UI of the component - also called a *view*. It is the topic of the next section.

The class and the view communicate with each other using data binding and events.

You can learn more about components on [angular.io](https://angular.io/docs/ts/latest/guide/architecture.html#!#component)

There are almost no differences between creating component classes in Angular 2 web apps and NativeScript apps.

# Template Syntax
The template defines the view of the component - what is actually rendered. 
In NativeScript applications the template is defined with XML using [NativeScript UI elements]({% slug components %}). It is different from HTML. So instead of `<input>`, `<span>`, `<div>` etc. - we have `<text-field>`, `<label>` and layouts.

The important thing is that although the elements are different - all the of [Angular’s template syntax](https://angular.io/docs/ts/latest/guide/template-syntax.html) works exactly the same. So you can still use template expressions, bindings, templates as well as all the build in directives.

>When defining the template you can use both CamelCase and kebab-case. So, both `<StackLayout>` and `<stack-layout>` are valid inside a template definition. 

There is no text-node element in NativeScript so the following template will render an empty `StackLayout`:
``` XML
<StackLayout orientation="vertical">
    {%raw%} {{ message }} {%endraw%} 
</StackLayout>`,
```

To fix it you can just use a `Label` to show the message:
``` XML
<StackLayout orientation="vertical">
    {%raw%}<Label text="{{ message }}"></Label>{%endraw%} 
</StackLayout>`
```

# Data Binding
Data binding is a mechanism for connecting the parts of the view (template) with parts of the component class. There are several forms of data binding in an angular app. 

``` XML
<StackLayout orientation="vertical">
    <Label [text]="message"></Label>
    <Button text="tap me" (tap)="onTap()"></Button>
    <TextField [(ngModel)]="message"></TextField>
</StackLayout>
```

Let's examine:

* `[text]="message"` - *binds* the `text` property of the `Label` to the `message` property of the component. Whenever the message is updated the label will be updated as well. This kind of binding is called “one-way binding” - the data flows in one direction from the component to the view.
* `(tap)="onTap()"` - means that when the button is tapped the `onTap` method in the component should be called. This kind of binding is called “event binding” - here the data flows from the view to the component.
* `[(ngModel)]="message"` - This is an example of “two-way-binding”. When the user types something in the `TextField` - the `message` property of the component will be changed and vice versa - if your code changes the `message` property - the UI will be updated. Data flows in both directions, thus the name.
    
This topic is covered in depth in the [data binding article]({% slug data-binding %}).

# Directives
Directives allow you to create and attach behavior to the visual tree. There are three kinds of directives:

* `Components` - We already talked about them. `Components` are actually directives which have their own template.
* [Structural Directives](https://angular.io/docs/ts/latest/guide/structural-directives.html) - alter the visual tree by adding, removing or replacing elements. The most commonly used structural directives are [`*ngIf`](https://angular.io/docs/ts/latest/guide/displaying-data.html#!#ngIf) and [`*ngFor`](https://angular.io/docs/ts/latest/guide/displaying-data.html#!#ngFor).
* [Attribute Directive](https://angular.io/docs/ts/latest/guide/attribute-directives.html) - change the appearance or behavior of UI elements. One of the most commonly used attribute directives is [`ngClass`](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngClass).

When it comes to NativeScript specifics - there are again almost no differences as far as directives are concerned. You are free to use all the built-in Angular 2 directives; you’re also free to write your own.

# Dependency Injection

Angular ships with its own dependency injection (DI for short) framework. It is extremely powerful and fully usable in NativeScript.
You can read more about it on [angular.io](https://angular.io/docs/ts/latest/guide/dependency-injection.html).

# Navigation

The navigation inside a NativeScript application is done with the [Angular 2 Router](https://angular.io/docs/ts/latest/guide/router.html#). However, you can choose between two router-outlets:
* `router-outlet` - the built in Angular 2 router outlet. It replaces the content of the outlet with the templates of different component.
* `page-router-outlet` - uses NativeScript [page navigation]({% slug navigation %}#pages). 

To use the Router you will have to pass the `NS_ROUTER_PROVIDERS` providers when bootstrapping you app:

``` TypeScript
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {NS_ROUTER_PROVIDERS} from "nativescript-angular/router";

// ...

nativeScriptBootstrap(NavigationTestRouter, [NS_ROUTER_PROVIDERS]);
```

Navigation is covered in detail in the [navigation article]({% slug navigation %}).
 