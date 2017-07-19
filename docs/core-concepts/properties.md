---
title: Property System
description: NativeScript Property System.
position: 80
slug: properties
publish: true
previous_url: /properties
environment: nativescript
---

# Property System 

This article contents:
* [Prerequisites](#prerequisites)
* [Property class](#property-class) 
* [CssProperty class](#cssproperty-class)
* [InheritedCssProperty class](#inheritedcssproperty-class) 
* [Registering the Property](#registering-the-property) 
* [Value Change Event](#value-change-event) 
* [NativeView Property](#nativeview-property) 
* [Views Lifecycle and Recycling](#views-lifecycle-and-recycling)
* [Iterating Over View Children](#iterating-over-view-children) 


## Prerequisites

- NativeScript 3.x.x or newer version

## Property class 

`Property` is a simple wrapper around [`Object.defineProperty`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) with some additional callbacks like `valueChange`, `valueConverter` and `equalityComparer`. When you define property you specify the owning type and the type of the property:

```TypeScript
export const textProperty = new Property<MyButtonBase, string>({ name: "text", defaultValue: "", affectsLayout: true });
```

`textProperty: Property<MyButtonBase, string>` - the owning type is `MyButtonBase` meaning that this property will be defined on instances of MyButtonBase. The type of the property is `string` so it will accept any text. 

The `valueChange` event is executed when the value of an property has changed. If the type of the property isn't `string` we will need to specify `valueConverter` and `equalityComparer`. The `valueConverter` is called if a string value is set to this property (for example from xml or css) and there you will have to convert that string to meaningful value if possible or throw exception if you can't. If `equalityComparer` is specified it will be called everytime a value is set to a property. There you can compare current and new value for equality. For example if your property is of type `Color` you can use `Color.equals` as `equalityComparer` function so even if new instance of `Color` is set the comparer will return `false` if current color and new color have the same `argb` value. 

There is one more option in the `Property` constructor: `affectsLayout: boolean`. 
When set to `true` setting new value to this property will trigger a new layout pass. This is done as performance optimization. Android has an integrated layout system so most of the time it will invalidate it self when needed. Thus we skip one native call by defining `affectsLayout` as `true` only for iOS for example using [isIOS](http://docs.nativescript.org/api-reference/modules/_platform_.html#isios) boolean property. Because iOS doesn't have integrated layout system if you know that this property could affect the layout you should specify it in the `Property` constructor. 
 
 
The flag `affectsLayout` should be `true` *(mainly for iOS)* when setting that property will change the element size and/or position. For example in our case setting button text to something different will either widen or shorten the width of the button so this will affect the element dimension hence with specify it as `affectsLayout: isIOS`. If this property won't change element position/size then you don't have to specify `affectsLayout` at all. For example `background-color` property doesn't change element position/size. 

> **Note**: In the platform specific implementation use `getDefault` and `setNative` symbols from the property object (example: textProperty), to define how this property is applied to native views.
> The `getDefault` method is called just once before the first call to `setNative` so that we know what is the default native value for this property. The value that you return will be passed to `setNative` method when we decide to recycle the native view. Recycling the native view of control is done only if `recycleNativeView` field is set to true.


[API Reference for Property Class](http://docs.nativescript.org/api-reference/classes/_ui_core_properties_.property.html)

## CssProperty Class

`CssProperty` is very similar to `Property` type with two small differences: 
- you have to additionally specify `cssName` which will be used to set this property through css  
- its value can be be set from inline styles, page css or application css 

```TypeScript
export const myOpacityProperty = new CssProperty<Style, number>({
    name: "myOpacity", cssName: "my-opacity", defaultValue: 1, valueConverter: (v) => {
        const x = parseFloat(v);
        if (x < 0 || x > 1) {
            throw new Error(`opacity accepts values in the range [0, 1]. Value: ${v}`);
        }

        return x;
    }
});
```
[API Reference for CssProperty Class](http://docs.nativescript.org/api-reference/classes/_ui_core_properties_.cssproperty.html)


## InheritedCssProperty Class

`InheritedCssProperty` is a property defined on Style type. These are inheritable CSS properties that could be set in CSS and propagates value on its children. These are properties like FontSize, FontWeight, Color, etc.

[API Reference for InheritedCssPropety](http://docs.nativescript.org/api-reference/classes/_ui_core_properties_.inheritedcssproperty.html)

## Registering the Property

After a property is defined it needs to be registered on a type like this: 
```
textProperty.register(MyButtonBase);
```

The `CssProperties` should be registered on the `Style` class like this:

```
// Augmenting Style definition so it includes our myOpacity property
declare module "tns-core-modules/ui/styling/style" {
    interface Style {
        myOpacity: number;
    }
}

// Defines 'myOpacity' property on Style class.
myOpacityProperty.register(Style);
 
myOpacityProperty.register(Style);
```

The registration defines that property for the type passed on to `register` method. 

> Note: Make sure that put your `register` call **after** your class definition or you will get an exception.

## Value Change Event

In order to get notification when some property value change a propertyNameChange has to be specified as eventName to addEventListener method (like `textField.addEventListener('textChange', handler...)`).

## NativeView Property

Use `nativeView` instead of `ios` and `android` properties. The `ios` and `android` properties are left for compatibility, however all view-lifecycle methods and native property callbacks (explained below) should work with the `nativeView` property.


## Views Lifecycle and Recycling

NativeScript 3.0 introduced nativeView recycling. With nativeView recycling is aimed to reduce instantiation of native views which is really expensive operation in Android. In order to be able to recycle it, we need all properties exposed from the View to be of our property system.

We have method that gets the default value for a property which is get the first time a property value is changed. Once we know that our View is not needed anymore we will reset the native view to its original state and put it in a map where some future Views of the same type could reuse it. There are 3 new important methods:

- `createNativeView` - you override this method, create and return your nativeView 
- `initNativeView` - in this method you setup listeners/handlers to the nativeView 
- `disposeNativeView` - in this method you clear the reference between nativeView and javascript object to avoid memory leaks as well as reset the native view to its initial state if you want to reuse that native view later.

In Android, avoid access to native types in the root of the module (note that `ClickListener` is declared and implemented in a function which is called at runtime). This is specific for the V8 snapshot feature which is generated on a host machine where android runtime is not running. What is important is that if you access native types, methods, fields, namespaces, etc. at the root of your module (e.g. not in a function) your code won't be compatible with V8 snapshot feature. The easiest workaround is to wrap it in a function like in the above `initializeClickListener` function.
 
In this implementation we use singleton listener (for Android - `clickListener`) and handler (for iOS - `handler`) in order to reduce the need to instantiate native classes and to reduce memory usage. If possible it is recommended to use such techniques to reduce native calls.

## Iterating Over View Children

There are two methods that allow you to traverse view-hierarchy:

For getting View children use:
```
public eachChildView(callback: (child: View) => boolean): void
```
This method was previously known as `_eachChildView()`. It will return View descendants only. For example TabView returns the view of each TabViewItem because is TabViewItem is of type ViewBase.

Getting ViewBase children use:
```
public eachChild(callback: (child: ViewBase) => boolean): void;
```
This method will return all views including ViewBase. It is used by the property system to apply native setters, propagate inherited properties, apply styles, etc. In the case of TabView – this method will return TabViewItems as well so that they could be styled through CSS.
