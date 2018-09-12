---
title: Integrating UI Components With Angular
description: Learn how to build NativeScript plugins that support Angular, and that integrate with NativeScript’s standard set of user interface components.
position: 55
slug: supporting-angular-explained
environment: angular
---

# Integrating UI Components With Angular

The standard NativeScript abstraction for a visual component is the `View` class in the "ui/core/view" package. It can be used to integrate with:

* Native Android and iOS UI components. Plugins for those typically create a `View` facade for JavaScript code.
* UI widgets written in JavaScript. Those too are exposed as `View` instances.

Angular applications do not typically use NativeScript `View` objects directly since visual tree manipulations are best left to the "renderer" abstraction. The renderer provides great flexibility in building platform-independent UIs, but that comes with a price; using advanced NativeScript components may require some glue code.

## Simple Elements

Angular templates look a lot like HTML. To extend the browser analogy, we can think of visual components as DOM elements that get parsed into a visual tree. Each element name is mapped to a `View` class. The renderer uses that mapping to create component instances and set their properties according to attribute values.

Most visual components have a simple markup interface: just a tag with zero or more attribute values. NativeScript already provides mappings for frameworks classes shipped with the `tns-core-modules` package, and lets you register additional mappings for other components.

Now, suppose you have a NativeScript UI plugin named `SimpleTag`:

{%snippet third-party-simple-view%}

This is a fully-functional "vanilla" NativeScript component. To register it as a valid tag for Angular templates, you need to use the element registry API:

{%snippet third-party-simple-view-registration%}

That maps the `SimpleTag` class to the "third-party-view" tag name. You can now use it in templates:

{%snippet third-party-simple-view-container%}

## Views and Templates

Some advanced NativeScript components do not fit the HTML DOM metaphor. Usually those are components that allow you to customize their appearance or structure by passing preconfigured `View` instances or templates that get instantiated multiple times. The canonical example for that is a rich list view component that allows you to customize item templates.

The problem with accepting `View` instances as a means of configuration is that it makes client code platform-bound. Angular apps usually limit direct manipulations to the underlying visual tree, and the recommended approach is to keep any modifications to that tree in templates (using bindings) and custom directives. Customization using template properties has a similar issue: both the NativeScript UI foundation and Angular provide templating services, and those two are incompatible. That requires translating from one templating service to another. That is why the best approach when integrating such components is to provide a wrapper component or directive that creates an **Angular** "view" from an **Angular** template, and then passes it to the underlying component.

To illustrate this approach, we'll assume that we have a `<document-form>` component that displays a document with a form-like UI. It allows you to customize its title by setting a preconfigured title `View` instance.

{%snippet third-party-document-form-component%}

To support that on the Angular side, we need an Angular template nested inside the `document-form` tag. To make template discovery and manipulation easier, we associate it with a directive named `DocumentTitleDirective`. Here is what the client code looks like:

{%snippet third-party-document-form-container%}

Note the standard Angular asterisk syntax, which is just shorthand for creating a template.

The actual integration code is hosted in the directive implementation. It works with the Angular `TemplateRef` instance and uses the `ViewContainer` API to create and attach a view:

{%snippet third-party-template-directive%}

Two things in the code above need mentioning:

1. Instantiated Angular views have a collection of root nodes that usually contain whitespace "text" nodes. We ignore those and get the first "real" element.
2. Since our parent component is higher in the component tree, we can use the DI system and inject a reference to it in the directive constructor.

## Tips and Tricks

While the following two approaches are not usually the best solutions, they can help while debugging application issues and/or speed up prototyping.

### Register a Wrapper Tag

You can register any class for a given tag, and that gives you a valuable injection mechanism. You can wrap certain components in your own View instance and pass that to the `registerElement` API. (Hint: for easy wrapping, just inherit from the real view.) Here is what people have used that for:

* Quickly prototype complex integrations by doing all configuration in plain JavaScript code.
* Stub missing or not-yet-implemented components.
* Debug or mock component initialization by passing a recording object.

### Attach a Directive

This approach is similar to the wrapper tag one since it is aimed at doing all component customization in code. Any directive can get a reference to its host tag by declaring an `ElementRef` constructor parameter and get the NativeScript `View` from that via the `ElementRef.nativeElement` property.

The directive approach is especially useful when trying to build a cross-platform solution that shares code with a web application since you can provide a different directive implementation in the web app. Directives compose really well too &mdash; you can split different parts of the integration code in different directives and apply more than one directive per component. 

## Summary

NativeScript UI plugins are not automatically integrated in Angular applications, but doing that is a straightforward task. Most libraries need a couple of `registerElement` calls and some of them conveniently ship a module that client code can `require` and have the registration happen automatically. Follow the steps in [this article]({% slug supporting-angular-in-ui-plugins %}) to provide Angular support for your UI plugin.
