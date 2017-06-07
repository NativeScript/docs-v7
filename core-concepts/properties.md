---
title: Properties
description: What is a property in NativeScript, what types of properties are available, and how to use them.
position: 80
slug: properties
publish: false
previous_url: /properties
environment: nativescript
---

# Properties

This article contents:

* [Overview](#overview)
* [Prerequisites](#prerequisites)
* [Basic UI plugin structure](#basic-ui-plugin-structure)
* [Property class](#property-class) 
* [CssProperty class](#cssproperty-class) 
* [Registering the Property](#registering-the-property) 
* [Platform-specific code](#platform-specific-code) 

## Overview

Being a TypeScript framework, NativeScript uses TypeScript properties. After transpilation, these result in ECMAScript v.5 compliant JavaScript with setter and getter methods to support working with class members, thus ensuring readable and manageable code. This article will guide you through the process of creating basic UI plugin using the property system. All the code is in TypeScript and requires NativeScript 3.x.x or newer version.

## Prerequisites

- NativeScript 3.x.x or newer version
- Plugin structure as follows

```
src/
├── index.d.ts
├── my-button.d.ts
├── my-button-base.ts
├── my-button.ios.ts
├── my-button.android.ts
├── package.json
├── references.d.ts
├── tsconfig.json
└── platforms/
    ├── android/
    │   ├── include.gradle
    └── ios/
        └── Info.plist
```
> Note: For more details about the plugin infrastructure in NativeScript refer to [this article]({%slug plugins-infrastructure%}).

## Basic UI Plugin Structure

The first file `index.d.ts` defines the public API of the control (in our case MyButton).

_index.d.ts_
```
export * from "./my-button";
```
For better code readability the exported logic comes from `my-button.d.ts`
It has dual purpose: as a contract when implementing the public API and to give intellisense when "my-button" is used in some editors/IDEs.

_my-button.d.ts_
```
import { View, Style, Property, CssProperty, EventData } from "tns-core-modules/ui/core/view";

export const textProperty: Property<MyButton, string>;
export const myOpacityProperty: CssProperty<Style, number>;

export class MyButton extends View {
    // static field used from component-builder module to find events on controls.
    static tapEvent: string; 

    // Defines the text property.
    text: string;

    // Overload 'on' method so that it provides intellisense for 'tap' event.
    on(event: "tap", callback: (args: EventData) => void, thisArg?: any);

    // Needed when 'on' method is overriden.
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any);
}
```

In the file above, we declare that our control will have `text` and `myOpacity` properties. We also provide intellisense when `myButton.on` method is called so that it is known that a tap event is exposed. There is also definition of two properties - `text: Property` and `myOpacity: CssProperty`.
Further info on what `Property` and `CssProperty` means is covered [here](#property-class).    

The next file is `my-button-base.ts`. In the base file we define all common fields, properties and methods that are applicable for both Android and iOS. At the top of the file we declare our new properties `text: Property` and `myOpacity: CssProperty`.

_my-button-base.ts_
```
import { MyButton as ButtonDefinition } from "./my-button";
import { View, Style, Property, CssProperty, isIOS } from "tns-core-modules/ui/core/view";

export const textProperty = new Property<MyButtonBase, string>({ name: "text", defaultValue: "", affectsLayout: isIOS });

// using myOpacity instead of opacity as it will override the one defined in `tns-core-modules`
export const myOpacityProperty = new CssProperty<Style, number>({
    name: "myOpacity", cssName: "my-opacity", defaultValue: 1, valueConverter: (v) => {
        const x = parseFloat(v);
        if (x < 0 || x > 1) {
            throw new Error(`opacity accepts values in the range [0, 1]. Value: ${v}`);
        }

        return x;
    }
});

export abstract class MyButtonBase extends View implements ButtonDefinition {
    public static tapEvent = "tap";
    text: string;

    // Exposing myOpacity style property through MyButton.
    // This is all optional. If not exposed users will have to set it
    // through style: <control:MyButton style.myOpacity='0.4' />.
    get myOpacity(): number {
        return this.style.myOpacity;
    }
    set myOpacity(value: number) {
        this.style.myOpacity = value;
    }
}

// Augmenting Style definition so it includes our myOpacity property
declare module "tns-core-modules/ui/styling/style" {
    interface Style {
        myOpacity: number;
    }
}

// Defines 'text' property on MyButtonBase class.
textProperty.register(MyButtonBase);

// Defines 'myOpacity' property on Style class.
myOpacityProperty.register(Style);
 
// If set to true - nativeView will be kept in memory and reused when some other instance 
// of type MyButtonBase needs nativeView. Set to true only if you are sure that you can reset the
// nativeView to its initial state. When true will improve application performance. 
MyButtonBase.prototype.recycleNativeView = false; 
```

Now that we have created the basic plugin structure it is time to explain how the property system works and what are `Property` and `CssProperty`.

## Property class 

`Property` is a simple wrapper around [`Object.defineProperty`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) with some additional callbacks like `valueChange`, `valueConverter` and `equalityComparer`. 
When you define property you specify the owning type and the type of the property:

`textProperty: Property<MyButtonBase, string>` - here the owning type is MyButtonBase meaning that this property will be defined on instances of MyButtonBase. The type of the property is `string` so it will accept any text. 

If the type of the property not `string` we will probably need to specify `valueConverter` and `equalityComparer`. The `valueConverter` will be called if a string value is set to your property (for example from xml or css) and there you will have to convert that string to meaningful value if possible or throw exception if you can't. If `equalityComparer` is specified it will be called everytime a value is set to a property. There you can compare current and new value for equality. For example if your property is of type `Color` you can use `Color.equals` as `equalityComparer` function so even if new instance of `Color` is set the comparer will return `false` if current color and new color have the same `argb` value. 

There is one more property in the `Property` constructor: `affectsLayout: boolean`. When set to `true` setting new value to this property will trigger a new layout pass. `textProperty` sets `affectsLayout: isIOS`. This means that this property will request new layout pass only for `ios`. This is done as performance optimization. `android` has an integrated layout system so most of the time it will invalidate it self when needed. Thus we skip one native call by defining `affectsLayout` as `true` only for `ios`. But `ios` doesn't have integrated layout system so if you know that your property could affect the layout you should specify it in the `Property` constructor.  
 
Here is again the definition of `textProperty` from _my-button-base.ts_ file: 
``` 
export const textProperty = new Property<MyButtonBase, string>({ name: "text", defaultValue: "", affectsLayout: isIOS }); 
``` 
 
`affectsLayout` flag should be `true` *(mainly for ios)* when setting that property will change the element size and/or position. For example in our case setting button text to something different will either widen or shorten the width of the button so this will affect the element dimension hence with specify it as `affectsLayout: isIOS`. If this property won't change element position/size then you don't have to specify `affectsLayout` at all. For example `background-color` property doesn't change element position/size. 

## CssProperty class 

`CssProperty` is very similar to `Property` type with two small differences: 
- you have to additionally specify `cssName` which will be used to set this property through css  
- its value can be be set from inline styles, page css or application css 

## Registering the Property

After a property is defined it needs to be registered on a type like this: 
```
textProperty.register(MyButtonBase);
```

The `CssProperties` should be registered on the `Style` class like this:

```
myOpacityProperty.register(Style);
```

The registration defines that property for the type passed on to `register` method. 

> Note: Make sure that put your `register` call **after** your class definition or you will get an exception.

## Platform-specific code 

Now let’s define the platform-specific code 
 
_my-button.android.ts_
``` 
import { MyButtonBase, textProperty, myOpacityProperty } from "./my-button-base";

let clickListener: android.view.View.OnClickListener;

// NOTE: ClickListenerImpl is in function instead of directly in the module because we 
// want this file to be compatible with V8 snapshot. When V8 snapshot is created
// JS is loaded into memory, compiled & saved as binary file which is later loaded by
// android runtime. Thus when snapshot is created we don't have android runtime and
// we don't have access to native types.
function initializeClickListener(): void {
    // Define ClickListener class only once.
    if (clickListener) {
        return;
    }

    // Interfaces decorator with implemented interfaces on this class
    @Interfaces([android.view.View.OnClickListener])
    class ClickListener extends java.lang.Object implements android.view.View.OnClickListener {
        public owner: MyButton;

        constructor() {
            super();
            // Required by android runtime when native class is extended through TypeScript.
            return global.__native(this);
        }

        public onClick(v: android.view.View): void {
            // When native button is clicked we raise 'tap' event.
            const owner = (<any>v).owner;
            if (owner) {
                owner.notify({ eventName: MyButtonBase.tapEvent, object: owner });
            }
        }
    }

    clickListener = new ClickListener();
}

export class MyButton extends MyButtonBase {

    // added for TypeScript intellisense.
    nativeView: android.widget.Button;

    /**
     * Creates new native button.
     */
    public createNativeView(): Object {
        // Initialize ClickListener.
        initializeClickListener();

        // Create new instance of android.widget.Button.
        const button = new android.widget.Button(this._context);

        // set onClickListener on the nativeView.
        button.setOnClickListener(clickListener);

        return button;
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        // Attach the owner to nativeView.
        // When nativeView is tapped we get the owning JS object through this field.
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    /**
     * Clean up references to the native view and resets nativeView to its original state.
     * If you have changed nativeView in some other way except through setNative callbacks
     * you have a chance here to revert it back to its original state 
     * so that it could be reused later.
     */
    disposeNativeView(): void {
        // Remove reference from native view to this instance.
        (<any>this.nativeView).owner = null;

        // If you want to recycle nativeView and have modified the nativeView 
        // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
        // you have to reset it to its initial state here.
        super.disposeNativeView();
    }

    // transfer JS text value to nativeView.
    [textProperty.setNative](value: string) {
        this.nativeView.setText(value);
    }

    // gets the default native value for opacity property.
    // Alpha could be controlled from Android theme.
    // Thus we take the default native value from the nativeView.
    // If view is recycled the value returned from this method
    // will be passed to [myOppacityProperty.setNative]
    [myOpacityProperty.getDefault](): number {
        return this.nativeView.getAlpha()
    }

    // set opacity to the native view.
    [myOpacityProperty.setNative](value: number) {
        return this.nativeView.setAlpha(value);
    }
}
```

_my-button.ios.ts_
``` 
import { MyButtonBase, textProperty, myOpacityProperty } from "./my-button-base";

// class that handles all native 'tap' callbacks
class TapHandler extends NSObject {

    public tap(nativeButton: UIButton, nativeEvent: _UIEvent) {
        // Gets the owner from the nativeView.
        const owner: MyButton = (<any>nativeButton).owner;
        if (owner) {
            owner.notify({ eventName: MyButtonBase.tapEvent, object: owner });
        }
    }

    public static ObjCExposedMethods = {
        "tap": { returns: interop.types.void, params: [interop.types.id, interop.types.id] }
    };
}

const handler = TapHandler.new();

export class MyButton extends MyButtonBase {

    // added for TypeScript intellisense.
    nativeView: UIButton;

    /**
     * Creates new native button.
     */
    public createNativeView(): Object {
        // Create new instance
        const button = UIButton.buttonWithType(UIButtonType.System);

        // Set the handler as callback function.
        button.addTargetActionForControlEvents(handler, "tap", UIControlEvents.TouchUpInside);

        return button;
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        // Attach the owner to nativeView.
        // When nativeView is tapped we get the owning JS object through this field.
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    /**
     * Clean up references to the native view and resets nativeView to its original state.
     * If you have changed nativeView in some other way except through setNative callbacks
     * you have a chance here to revert it back to its original state 
     * so that it could be reused later.
     */
    disposeNativeView(): void {
        // Remove reference from native listener to this instance.
        (<any>this.nativeView).owner = null;
        
        // If you want to recycle nativeView and have modified the nativeView 
        // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
        // you have to reset it to its initial state here.
        super.disposeNativeView();
    }

    // transfer JS text value to nativeView.
    [textProperty.setNative](value: string) {
        this.nativeView.setTitleForState(value, UIControlState.Normal);
    }

    // gets the default native value for opacity property.
    // If view is recycled the value returned from this method
    // will be passed to [myOppacityProperty.setNative]
    [myOpacityProperty.getDefault](): number {
        return this.nativeView.alpha;
    }

    // set opacity to the native view.
    [myOpacityProperty.setNative](value: number) {
        return this.nativeView.alpha = value;
    }
}
``` 
Most of the platform specific code is documented. Few things are important.
In Android, we want to support V8 snapshot feature so we have to avoid access to native types in the root of the module *(note that ClickListener is declared and implemented in a function which is called at runtime)*. This is specific of V8 snapshot which is generated on a host machine where android runtime is not running. What is important is that if you access native types, methods, fields, namespaces, etc. at the root of your module (e.g. not in a function) your code won't be compatible with V8 snapshot feature. The easiest workaround is to wrap it in a function like in the above `initializeClickListener` function.
 
There are three important methods: 
- `createNativeView` - you override this method, create and return your nativeView 
- `initNativeView` - in this method you setup listeners/handlers to the nativeView 
- `disposeNativeView` - in this method you clear the reference between nativeView and javascript object to avoid memory leaks as well as reset the native view to its initial state if you want to reuse that native view later.
 
In this implementation we use singleton listener (for android - `clickListener`) and handler (for ios - `handler`) in order to reduce the need to instantiate native classes and to reduce memory usage. If possible it is recommended to use such techniques to reduce native calls.