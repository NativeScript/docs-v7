---
nav-title: "Accessing APIs"
title: "Accessing APIs"
description: "NativeScript Android Runtime Metadata API Access"
position: 1
slug: accessing-android-apis
---

# Overview

One of NativeScript's strongest capabilities is the access to Android (also referred to as __'Java'__ or __'native'__) APIs inside JavaScript/TypeScript. That's possible thanks to build-time generated [Metadata](./overview.md) chunks which hold the information about the public classes from the Android SDK, Android support libraries, and any other Android libraries which may be imported into your Android NativeScript project.

> Note: 'Android classes' and 'Java classes' are used interchangeably throughout the article to refer to classes in the Java programming language. 

## Access Android Packages

The [Android packages](https://developer.android.com/reference/packages.html) are available in the JavaScript/TypeScript global context and are the entry point for accessing Android APIs. Think of them as of TypeScript/C# namespaces, or the way to access sets of classes. For example, the `android.view` package grants access to classes like `android.view.View` - the base of all view elements in Android.

In order to access a particular class in JavaScript/TypeScript the full package name leading up to the class name needs to be specified, or you may end up working with `undefined` variables.

* [java.lang](http://developer.android.com/reference/java/lang/package-summary.html)
* [android](http://developer.android.com/reference/android/package-summary.html)
* [android.view](http://developer.android.com/reference/android/view/package-summary.html)
* etc.

The above is accessed in JavaScript like:

```javascript
const javaLangPkg = java.lang;
const androidPkg = android;
const androidViewPkg = android.view;

// access classes from inside the packages later on

const View = androidViewPkg.View;
// or
const View = android.view.View;

const Object = javaLangPkg.Object; // === java.lang.Object;
```

To find out the package name of an Android class, refer to the [Android SDK Reference](https://developer.android.com/reference/packages.html), or to the supplied API Reference of a plugin, when importing 3rd-party Android components into your project. 

For example, if you need to work with the Google API for Google Maps, after following the installation guide, you may need to access packages from the plugin like `com.google.android.gms.maps`, which you can find a reference for at [Google APIs for Android Reference](https://developers.google.com/android/reference/com/google/android/gms/maps/package-summary)

> **Note:** To have access and Intellisense for the native APIs with **NativeScript + TypeScript** or **NativeScript + Angular** projects, you have to add a dev dependency to `tns-platform-declarations`. More details about accessing native APIs with TypeScript can be found [here]({% slug access-native-apis %}#intellisense-and-access-to-native-apis-via-typescript).


> **Note:** **(Experimental)** Alternatively, to get Intellisense for the native APIs based on the available Android Platform SDK and imported Android Support packages (added by default to your Android project), supply the `--androidTypings` flag with your `tns run | build android` command. The resulting `android.d.ts` file can then be used to provide auto-completion.


> **Note:** You cannot use APIs that are not present in the metadata. By default, if `--compileSdk` argument isn't provided while building, metadata will be built against the latest Android [Platform SDK](https://developer.android.com/about/versions/nougat/index.html) installed on the workstation. See [metadata limitations](./overview.md).

## Access Android Classes
Classes ([See OOP](https://docs.oracle.com/javase/tutorial/java/concepts/)) are the schematics to producing building blocks (Objects) in Android, as such, they are used to represent almost everything you see, as well as what you don't see, in an Android application - the Android layouts are objects built from classes, the buttons and text views also have class representations. Classes in Android (Java) have unique identifiers denoted by the full package name (see above), followed by the actual class name (usually capitalized - see above - 'View')

Accessing classes in Android you would normally add an `import` statement at the beginning of the Java file, to allow referring to the class only by its name. If the developer decides, they may be as expressive as possible by using the full class identifier too:

```Java
package my.awesome.application;

import android.view.View;

public class ... {
    public static void staticMethod(context) {
        View newView = new View(context);
        // or
        android.view.View newView2 = new android.view.View(context);
    }
}
```

Accessing Android classes, in the JavaScript/TypeScript of a NativeScript application, is kept as close to the original Java syntax as the JavaScript language allows:
```javascript
function arbitraryFunction(context) { // 'context' is a JavaScript wrapper (Proxy - see below) for the underlying android.content.Context Java instance
    const View = android.view.View;

    const newView = new View(context);
    // or
    const newView2 = new android.view.View(context);

    // newView and newView2 will be JavaScript wrappers (Proxies - see below) for the created Java android.view.View objects
}
```

## Proxies
The JavaScript objects that lie behind the Android APIs are called *Proxies*. There are two types of proxies:

### Package Proxy
Provides access to the classes, interfaces, constants and enumerations within each package. See `java.lang`.

### Class Proxy
Represents a thin wrapper over a class or an interface and provides access to its methods and fields. From a JavaScript perspective this type of proxy may be considered as a constructor function. For example `android.view.View` is a class proxy.

The result of the constructor calls (`new ...()`) will create native `android.view.View` instances on the Android side and a special hollow Object on the JavaScript side. This special object knows how to invoke methods and access fields on the corresponding native instance. For example we may retrieve the path value of the above created `File` using the corresponding `File` class API like:

## Access Methods, Fields and Constants
Thanks to the 'proxying' system, Java methods and fields can be accessed through the JavaScript wrappers of Java instances. For example, you may retrieve the result of a method call to the Java instance:

```javascript
const javaObj = new java.lang.Object();
const javaObjHashCode = javaObj.hashCode(); // result is `int` in Java, marshalled to a JavaScript number

console.log(javaObjHashCode); // prints out the hashCode number
```

Public and Private member, as well as static fields of an instance, or Java class can also be accessed. The [android.view.View](https://developer.android.com/reference/android/view/View.html) class will be used below:
```javascript
const context = ...; // retrieve context
const newView = new android.view.View(context);

newView.clearFocus(); // public member call to 'public void clearFocus()' as declared in Android

let newViewScaleX = newView.SCALE_X; // public static field access to 'public static final SCALE_X' as declared in Android

const focusUpDirection = android.view.View.FOCUS_UP; // public static field access to `FOCUS_UP` - represents an integer as declared in the Android source

let foundView = newView.focusSearch(android.view.View.FOCUS_UP); // public member call to 'public View focusSearch(int direction)'

const randomViewId = android.view.View.generateViewId(); // static method call to 'public static int generateViewId()' - generates a random integer suitable for Android Views
```

## Extend Classes and Interfaces
For a comprehensive guide on extending classes and implementing interfaces through JavaScript/TypeScript check out [the dedicated article](../generator/extend-class-interface.md).

## Full-fledged Example
Let's take a sample Android code, and transcribe it to JavaScript/TypeScript.

The following code (courtesy of [startandroid.ru](http://startandroid.ru/en/lessons/220-lesson-16-creating-layout-programmatically-layoutparams.html)) creates an Android layout, and adds a couple Button and TextView elements:
```Java
public class MainActivity extends Activity {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // creating LinearLayout
        LinearLayout linLayout = new LinearLayout(this);
        // specifying vertical orientation
        linLayout.setOrientation(LinearLayout.VERTICAL);
        // creating LayoutParams  
        LayoutParams linLayoutParam = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT); 
        // set LinearLayout as a root element of the screen 
        setContentView(linLayout, linLayoutParam);

        LayoutParams lpView = new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);

        TextView tv = new TextView(this);
        tv.setText("TextView");
        tv.setLayoutParams(lpView);
        linLayout.addView(tv);

        Button btn = new Button(this);
        btn.setText("Button");
        linLayout.addView(btn, lpView);


        LinearLayout.LayoutParams leftMarginParams = new LinearLayout.LayoutParams(
                LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);
        leftMarginParams.leftMargin = 50;

        Button btn1 = new Button(this);
        btn1.setText("Button1");
        linLayout.addView(btn1, leftMarginParams);


        LinearLayout.LayoutParams rightGravityParams = new LinearLayout.LayoutParams(
                LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);
        rightGravityParams.gravity = Gravity.RIGHT;

        Button btn2 = new Button(this);
        btn2.setText("Button2");
        linLayout.addView(btn2, rightGravityParams);
    }
}
```
```javascript
const MainActivity = android.app.Activity.extend("my.application.name.MainActivity", {
    onCreate: function (savedInstanceState) {
        super.onCreate(savedInstance);

        // creating LinearLayout
        let linLayout = new android.widget.LinearLayout(this);
        // specifying vertical orientation
        linLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
        // creating LayoutParams - accessing static class LayoutParams of LinearLayout
        let linLayoutParam = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.MATCH_PARENT); 
        // set LinearLayout as a root element of the screen 
        this.setContentView(linLayout, linLayoutParam);

        let lpView = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

        let tv = new android.widget.TextView(this);
        tv.setText("TextView");
        tv.setLayoutParams(lpView);
        linLayout.addView(tv);

        let btn = new android.widget.Button(this);
        btn.setText("Button");
        linLayout.addView(btn, lpView);


        let leftMarginParams = new android.widget.LinearLayout.LayoutParams(
                android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
        leftMarginParams.leftMargin = 50;

        let btn1 = new android.widget.Button(this);
        btn1.setText("Button1");
        linLayout.addView(btn1, leftMarginParams);


        let rightGravityParams = new android.widget.LinearLayout.LayoutParams(
                android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
        rightGravityParams.gravity = android.view.Gravity.RIGHT;

        let btn2 = new android.widget.Button(this);
        btn2.setText("Button2");
        linLayout.addView(btn2, rightGravityParams);
    }
});
```
```typescript
@JavaProxy("my.application.name.MainActivity");
class MainActivity extends android.app.Activity {
    constructor() {
        super();

        return global.__native(this);
    }

    onCreate(savedInstanceState) {
        super.onCreate(savedInstance);

        // creating LinearLayout
        let linLayout = new android.widget.LinearLayout(this);
        // specifying vertical orientation
        linLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
        // creating LayoutParams - accessing static class LayoutParams of LinearLayout
        let linLayoutParam = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.MATCH_PARENT); 
        // set LinearLayout as a root element of the screen 
        this.setContentView(linLayout, linLayoutParam);

        let lpView = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

        let tv = new android.widget.TextView(this);
        tv.setText("TextView");
        tv.setLayoutParams(lpView);
        linLayout.addView(tv);

        let btn = new android.widget.Button(this);
        btn.setText("Button");
        linLayout.addView(btn, lpView);


        let leftMarginParams = new android.widget.LinearLayout.LayoutParams(
                android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
        leftMarginParams.leftMargin = 50;

        let btn1 = new android.widget.Button(this);
        btn1.setText("Button1");
        linLayout.addView(btn1, leftMarginParams);


        let rightGravityParams = new android.widget.LinearLayout.LayoutParams(
                android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
        rightGravityParams.gravity = android.view.Gravity.RIGHT;

        let btn2 = new android.widget.Button(this);
        btn2.setText("Button2");
        linLayout.addView(btn2, rightGravityParams);
    }
};
```

The NativeScript code can further be shortened, and it starts to look a lot like Java:
```javascript
const LinearLayout = android.widget.LinearLayout;
const LayoutParams = android.widget.LinearLayout.LayoutParams;
const TextView = android.widget.TextView;
const Button = android.widget.Button;
const Gravity = android.view.Gravity;

const MainActivity = android.app.Activity.extend("my.application.name.MainActivity", {
    onCreate: function (savedInstanceState) {
        super.onCreate(savedInstance);

        // creating LinearLayout
        let linLayout = new LinearLayout(this);
        // specifying vertical orientation
        linLayout.setOrientation(LinearLayout.VERTICAL);
        // creating LayoutParams  
        let linLayoutParam = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT); 
        // set LinearLayout as a root element of the screen 
        setContentView(linLayout, linLayoutParam);

        let lpView = new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);

        let tv = new TextView(this);
        tv.setText("TextView");
        tv.setLayoutParams(lpView);
        linLayout.addView(tv);

        let btn = new Button(this);
        btn.setText("Button");
        linLayout.addView(btn, lpView);


        let leftMarginParams = new LinearLayout.LayoutParams(
                LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);
        leftMarginParams.leftMargin = 50;

        let btn1 = new Button(this);
        btn1.setText("Button1");
        linLayout.addView(btn1, leftMarginParams);


        let rightGravityParams = new LinearLayout.LayoutParams(
                LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);
        rightGravityParams.gravity = Gravity.RIGHT;

        let btn2 = new Button(this);
        btn2.setText("Button2");
        linLayout.addView(btn2, rightGravityParams);
    }
});
```
```typescript
const LinearLayout = android.widget.LinearLayout;
const LayoutParams = android.widget.LinearLayout.LayoutParams;
const TextView = android.widget.TextView;
const Button = android.widget.Button;
const Gravity = android.view.Gravity;

@JavaProxy("my.application.name.MainActivity");
class MainActivity extends android.app.Activity {
    constructor() {
        super();

        return global.__native(this);
    }

    onCreate: function (savedInstanceState) {
        super.onCreate(savedInstance);

        // creating LinearLayout
        let linLayout = new LinearLayout(this);
        // specifying vertical orientation
        linLayout.setOrientation(LinearLayout.VERTICAL);
        // creating LayoutParams  
        let linLayoutParam = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT); 
        // set LinearLayout as a root element of the screen 
        setContentView(linLayout, linLayoutParam);

        let lpView = new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);

        let tv = new TextView(this);
        tv.setText("TextView");
        tv.setLayoutParams(lpView);
        linLayout.addView(tv);

        let btn = new Button(this);
        btn.setText("Button");
        linLayout.addView(btn, lpView);


        let leftMarginParams = new LinearLayout.LayoutParams(
                LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);
        leftMarginParams.leftMargin = 50;

        let btn1 = new Button(this);
        btn1.setText("Button1");
        linLayout.addView(btn1, leftMarginParams);


        let rightGravityParams = new LinearLayout.LayoutParams(
                LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);
        rightGravityParams.gravity = Gravity.RIGHT;

        let btn2 = new Button(this);
        btn2.setText("Button2");
        linLayout.addView(btn2, rightGravityParams);
    }
});
```
## See Also
* [Metadata Overview and Limitations](./overview.md)
* [Extending Classes and Interfaces](../generator/extend-class-interface.md)
* [Execution Flow](../advanced-topics/execution-flow.md)