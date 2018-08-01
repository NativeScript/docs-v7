---
title: Property System
description: NativeScript provides own property system based on a wrapper around the well known JavaScript's `Object.defineProperty`. To deliver good developer experience in the context of mobile development with UI and CSS elements, we provided a number or extended classes known as Property System.
position: 95
slug: properties
publish: true
previous_url: /properties
environment: nativescript
---

# Property System

NativeScript provides own property system based on a wrapper around the well known JavaScript's `Object.defineProperty`. To deliver good developer experience in the context of mobile development with UI and CSS elements, we provided extended classes of the `Property` class. This article will cover the provided property classes and the base techniques when working with views and properties including initialization, registering, views lifecycles and recycling and handling changed events. Some commontly used methods of `View` are demonstrated as well.

## Property System Classes

The implementation of all property classes can be found under `tns-core-modules/ui/core/properties` module. Below, we are going to look at all exposed classes from that module.

### Property class 

`Property` is a simple wrapper around [`Object.defineProperty`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) with some additional callbacks like `valueChange`, `valueConverter` and `equalityComparer`. When you define property you specify the owning type and the type of the property:

```TypeScript
export const textProperty = new Property<MyButtonBase, string>({ 
    name: "text", 
    defaultValue: "", 
    affectsLayout: true 
});
textProperty.register(MyButtonBase);
```

Looking at `textProperty: Property<MyButtonBase, string>` - the owning type is `MyButtonBase` meaning that this property will be defined on instances of `MyButtonBase`. The type of the property is `string` so it will accept any text. 

The `valueChange` event is executed when the value of an property has changed. If the type of the property isn't `string` we will need to specify `valueConverter` and `equalityComparer`. The `valueConverter` is called if a string value is set to this property (for example from XML or CSS) and there you will have to convert that string to meaningful value if possible or throw exception if you can't. If `equalityComparer` is specified it will be called everytime a value is set to a property. There you can compare current and new value for equality. For example if your property is of type `Color` you can use `Color.equals` as `equalityComparer` function so even if new instance of `Color` is set the comparer will return `false` if current color and new color have the same `argb` value. 

There is one more option in the `Property` constructor: `affectsLayout: boolean`. 
When set to `true` setting new value to this property will trigger a new layout pass. This is done as performance optimization. Android has an integrated layout system so most of the time it will invalidate it self when needed. Thus we skip one native call by defining `affectsLayout` as `true` only for iOS for example using 'isIOS' boolean property. Because iOS doesn't have integrated layout system if you know that this property could affect the layout you should specify it in the `Property` constructor. 
 
The flag `affectsLayout` should be `true` *(mainly for iOS)* when setting that property will change the element size and/or position. For example in our case setting button text to something different will either widen or shorten the width of the button so this will affect the element dimension hence with specify it as `affectsLayout: isIOS`. If this property won't change element position/size then you don't have to specify `affectsLayout` at all. For example `background-color` property doesn't change element position/size. 

> **Note**: In the platform specific implementation use `getDefault` and `setNative` symbols from the property object (example: textProperty), to define how this property is applied to native views.
> The `getDefault` method is called just once before the first call to `setNative` so that we know what is the default native value for this property. The value that you return will be passed to `setNative` method when we decide to recycle the native view. Recycling the native view of control is done only if `recycleNativeView` field is set to true.


### CssProperty Class

The `CssProperty` is very similar to `Property` type with two small differences: 
- you have to additionally specify `cssName` which will be used to set this property through CSS  
- its value can be set from inline styles, page CSS or application CSS 

```TypeScript
export const myOpacityProperty = new CssProperty<Style, number>({
    name: "myOpacity", 
    cssName: "my-opacity", 
    defaultValue: 1, 
    valueConverter: (v) => {
        const x = parseFloat(v);
        if (x < 0 || x > 1) {
            throw new Error(`opacity accepts values in the range [0, 1]. Value: ${v}`);
        }

        return x;
    }
});
myOpacityProperty.register(Style);
```

> **Note:** For CSS properties that could be animated via keyframe animations, you can use the extended `CssAnimationProperty` which comes with the optional `keyframe` parameter.

### InheritedCssProperty Class

The `InheritedCssProperty` is a property defined on Style type. These are inheritable CSS properties that could be set in CSS and propagates value on its children. These are properties like FontSize, FontWeight, Color, etc.

```TypeScript
export const selectedBackgroundColorProperty = new InheritedCssProperty<Style, Color>({ 
    name: "selectedBackgroundColor", 
    cssName: "selected-background-color", 
    equalityComparer: Color.equals, 
    valueConverter: (v) => new Color(v) 
});
selectedBackgroundColorProperty.register(Style);
```

### ShorthandProperty Class

The shorthand property provides the capability to provide shorthand syntax rules for your CSS properties.
For example, instead of the explicit side-by-side syntax for all four margins
```CSS
margin-top:  0;
margin-right: 10;
margin-bottom: 0;
margin-left: 10;
```
The user would want to use the shorthand syntax for `margin` as follows:
```CSS
margin: 0 10 0 10;
```

Creating the shorthand `margin` property would require to have all CSS properties defined. This way, you could use them to set the syntax rule in our shorthand property getter.
```TypeScript
const marginProperty = new ShorthandProperty<Style, string | PercentLength>({
    name: "margin", 
    cssName: "margin",
    getter: function (this: Style) {
        if (PercentLength.equals(this.marginTop, this.marginRight) &&
            PercentLength.equals(this.marginTop, this.marginBottom) &&
            PercentLength.equals(this.marginTop, this.marginLeft)) {
            return this.marginTop;
        }
        return `${PercentLength.convertToString(this.marginTop)} ${PercentLength.convertToString(this.marginRight)} ${PercentLength.convertToString(this.marginBottom)} ${PercentLength.convertToString(this.marginLeft)}`;
    },
    converter: convertToMargins
});
marginProperty.register(Style);

export const marginLeftProperty = new CssProperty<Style, PercentLength>({ name: "marginLeft", cssName: "margin-left", defaultValue: zeroLength, affectsLayout: isIOS, equalityComparer: Length.equals, valueConverter: PercentLength.parse });
marginLeftProperty.register(Style);

export const marginRightProperty = new CssProperty<Style, PercentLength>({ name: "marginRight", cssName: "margin-right", defaultValue: zeroLength, affectsLayout: isIOS, equalityComparer: Length.equals, valueConverter: PercentLength.parse });
marginRightProperty.register(Style);

export const marginTopProperty = new CssProperty<Style, PercentLength>({ name: "marginTop", cssName: "margin-top", defaultValue: zeroLength, affectsLayout: isIOS, equalityComparer: Length.equals, valueConverter: PercentLength.parse });
marginTopProperty.register(Style);

export const marginBottomProperty = new CssProperty<Style, PercentLength>({ name: "marginBottom", cssName: "margin-bottom", defaultValue: zeroLength, affectsLayout: isIOS, equalityComparer: Length.equals, valueConverter: PercentLength.parse });
marginBottomProperty.register(Style);
```

### CoercibleProperty Class

The `CoercibleProperty` is a property that extends the base Property class by providing the capability to be coercible. For better illustration when a property might need to be coercible let's assume that we are working on `selectedIndex` property of some UI element that can hold different number of `items`. The base case would suggest that the `selectedIndex` would vary within the number of items, but what would cover the case where the items are changed dynamically (and the `selectedIndex` is not within the length range)? This is the case that can be handled by a property that can coerse the value.


Creating the `selectedIndex` as coercible property dependend on the number of items
```TypeScript
export const selectedIndexProperty = new CoercibleProperty<SegmentedBarBase, number>({
    name: "selectedIndex", defaultValue: -1,
    valueChanged: (target, oldValue, newValue) => {
        target.notify(<SelectedIndexChangedEventData>{ eventName: SegmentedBarBase.selectedIndexChangedEvent, object: target, oldIndex: oldValue, newIndex: newValue });
    },

    // in this case the coerse value will change depending on whether the actual number of items
    // is more or less than the value we want to appl for selectedIndex
    coerceValue: (target, value) => {
        let items = target.items;
        if (items) {
            let max = items.length - 1;
            if (value < 0) {
                value = 0;
            }
            if (value > max) {
                value = max;
            }
        } else {
            value = -1;
        }

        return value;
    },

    valueConverter: (v) => parseInt(v)
});
selectedIndexProperty.register(SegmentedBarBase);
```

When setting the `items` property we will coerse the `selectedIndex`
```TypeScript
[itemsProperty.setNative](value: SegmentedBarItem[]) {
    this.nativeViewProtected.clearAllTabs();

    const newItems = value;
    if (newItems) {
        newItems.forEach((item, i, arr) => this.insertTab(item, i));
    }

    selectedIndexProperty.coerce(this);
}
```

### Registering the Property

After a property is defined it needs to be registered on a type like this: 
```JavaScript
textProperty.register(MyButtonBase);
```

The `CssProperties` should be registered on the `Style` class like this:

```JavaScript
// Augmenting Style definition so it includes our myOpacity property
declare module "tns-core-modules/ui/styling/style" {
    interface Style {
        myOpacity: number;
    }
}

// Defines 'myOpacity' property on Style class.
myOpacityProperty.register(Style);
```

The registration defines that property for the type passed on to `register` method. 

> Note: Make sure that put your `register` call **after** your class definition or you will get an exception.

### Value Change Event

To get notification when some property value change a **propertyNameChange** has to be specified as eventName to `addEventListener` method.

```TypeScript
textField.addEventListener('textChange', handler...)
```

### NativeView Property

Use `nativeView` instead of `ios` and `android` properties. The `ios` and `android` properties are left for compatibility. However, all view-lifecycle methods and native property callbacks (explained below) should work with the `nativeView` property.


## Views Lifecycle and Recycling

NativeScript 3.0 introduced nativeView recycling. With nativeView recycling is aimed to reduce instantiation of native views which is really expensive operation in Android. In order to be able to recycle it, we need all properties exposed from the View to be of our property system.

We have method that gets the default value for a property which is get the first time a property value is changed. Once we know that our View is not needed anymore we will reset the native view to its original state and put it in a map where some future Views of the same type could reuse it. There are 3 new important methods:

- `createNativeView` - you override this method, create and return your nativeView 
- `initNativeView` - in this method you setup listeners/handlers to the nativeView 
- `disposeNativeView` - in this method you clear the reference between nativeView and javascript object to avoid memory leaks as well as reset the native view to its initial state if you want to reuse that native view later.

In Android, avoid access to native types in the root of the module (note that `ClickListener` is declared and implemented in a function which is called at runtime). This is specific for the V8 snapshot feature which is generated on a host machine where android runtime is not running. What is important is that if you access native types, methods, fields, namespaces, etc. at the root of your module (e.g. not in a function) your code won't be compatible with V8 snapshot feature. The easiest workaround is to wrap it in a function like in the above `initializeClickListener` function.
 
In this implementation, we use singleton listener (for Android - `clickListener`) and handler (for iOS - `handler`) to reduce the need to instantiate native classes and to reduce memory usage. If possible, it is recommended to use such techniques to reduce native calls.

### Iterating Over View Children

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

### View Class Common Methods

Each UI element extends the `View` class (e.g., like `StackLayout` or `Label`) and comes with a set of methods created to ease the UI development. Methods related to measuring and positioning should be called in `navigatedTo` event of the current `Page` to ensure that all layout measuring has passed.

 - [`getViewById`](https://docs.nativescript.org/api-reference/classes/_ui_core_view_.view#getviewbyid) - Returns the child view with the specified id.

 ```XML
 <Page navigatedTo="onNavigatedTo">
    <StackLayout id="myStack">
        <Label text="Tap the button" />
        <Button text="TAP" tap="{{ onTap }}" />
        <Label id="myLabel" text="{{ message }}" />
    </StackLayout>
 </Page>
 ```
 ```TypeScript
 export function onNavigatedTo(args: EventData) {
    const page = <Page>args.object;
    let stack = <StackLayout>page.getViewById("myStack"); // e.g. StackLayout<myStack>@file:///app/page.xml:2:5;
    let label = <Label>stack.getViewById("myLabel"); // e.g. Label<myLabel>@file:///app/main-page.xml:5:9;
 }
 ```
 ```JavaScript
 function onNavigatedTo(args) {
    const page = args.object;
    let stack = page.getViewById("myStack"); // e.g. StackLayout<myStack>@file:///app/page.xml:2:5;
    let label = stack.getViewById("myLabel"); // e.g. Label<myLabel>@file:///app/main-page.xml:5:9;
 }
 exports.onNavigatedTo = onNavigatedTo;
 ```

> **Angular Specific Note**: In Angular to use `getViewById` for root search, we might need to inject native `Page` object.
> As an alternative, in Angular, we can get reference to the native elements using the `ViewChild` directive and the `nativeElement` property.
 ```HTML
 <StackLayout #myNgStack id="myStackId">
    <Label text="Using ViewChild agains getViewById" />
</StackLayout>
 ```
 ```TypeScript
 import { ViewChild, ElementRef } from "@angular/core";
 export class MyComponent {
    @ViewChild("myNgStack") stackRef: ElementRef;
    myNativeStack: StackLayout;

    constructor(private _page: Page) { }

    ngAfterViewInit() {
        this._page.getViewById("myStackId");
        this.myNativeStack = this.stackRef.nativeElement;
        // this._page.getViewById("myStack") === this.myNativeStack
    }
 }
 ```

 - [`getActualSize`](https://docs.nativescript.org/api-reference/classes/_ui_core_view_.view#getactualsize) - Returns the actual size of the view in device-independent pixels. The returned value is of type [`Size`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.size).

 ```TypeScript
 let stackSize: Size = stack.getActualSize();
 let stackWidth = stackSize.width; // e.g. 411.42857142857144 DIP
 let stackHeight = stackSize.height; // e.g. 603.4285714285714 DIP
 ```
 ```JavaScript
 let stackSize = stack.getActualSize();
 let stackWidth = stackSize.width;
 let stackHeight = stackSize.height;
 ```

 - [`getLocationInWindow`](https://docs.nativescript.org/api-reference/classes/_ui_core_view_.view#getlocationinwindow) - Returns the location of this view in the window coordinate system. The returned value is of type [`Point`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.point).
 ```TypeScript
 let locationInWindow: Point = stack.getLocationInWindow();
 let locationWindowX = locationInWindow.x; // e.g. 10
 let locationWindowY = locationInWindow.y; // e.g. 80
 ```
 ```JavaScript
 let locationInWindow = stack.getLocationInWindow();
 let locationWindowX = locationInWindow.x;
 let locationWindowY = locationInWindow.y;
 ```

  - [`getLocationOnScreen`](https://docs.nativescript.org/api-reference/classes/_ui_core_view_.view#getlocationonscreen) - Returns the location of this view in the screen coordinate system. The returned value is of type [`Point`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.point).
 ```TypeScript
 let locationOnScreen : Point = stack.getLocationOnScreen();
 let locScreenX = locationOnScreen.x; // e.g. 10
 let locScreenY = locationOnScreen.y; // e.g. 67.42857142857143
 ```
 ```JavaScript
 var locationOnScreen = stack.getLocationOnScreen();
 var locScreenX = locationOnScreen.x;
 var locScreenY = locationOnScreen.y;
 ```

  - [`getLocationRelativeTo`](https://docs.nativescript.org/api-reference/classes/_ui_core_view_.view#getlocationrelativeto) - Returns the location of this view against another view's coordinate system. The returned value is of type [`Point`](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.point).
 ```TypeScript
 let labelLocationRelativeToStack: Point = label.getLocationRelativeTo(stack);
 let labelRelativeX = labelLocationRelativeToStack.x;
 let labelRelativeY = labelLocationRelativeToStack.y;
 ```
 ```JavaScript
 let labelLocationRelativeToStack = label.getLocationRelativeTo(stack);
 let labelRelativeX = labelLocationRelativeToStack.x;
 let labelRelativeY = labelLocationRelativeToStack.y;
 ```

[View](https://docs.nativescript.org/api-reference/classes/_ui_core_view_.view)
[Properties module](https://docs.nativescript.org/api-reference/modules/_ui_core_properties_.html)
[Property](http://docs.nativescript.org/api-reference/classes/_ui_core_properties_.property.html)
[CssProperty](http://docs.nativescript.org/api-reference/classes/_ui_core_properties_.cssproperty.html)
[CssAnimationProperty](https://docs.nativescript.org/api-reference/classes/_ui_core_properties_.cssanimationproperty.html)
[InheritedCssProperty](http://docs.nativescript.org/api-reference/classes/_ui_core_properties_.inheritedcssproperty.html)
[ShorthandProperty](https://docs.nativescript.org/api-reference/classes/_ui_core_properties_.shorthandproperty.html)
[CoercibleProperty](https://docs.nativescript.org/api-reference/classes/_ui_core_properties_.coercibleproperty.html)
[isIOS](http://docs.nativescript.org/api-reference/modules/_platform_.html#isios)