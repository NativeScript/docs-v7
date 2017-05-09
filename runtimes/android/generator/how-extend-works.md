---
nav-title: "How Extend Works"
title: "How Extend Works"
description: "NativeScript Android Runtime Extend Workflow"
position: 3
slug: how-extend-works
---

# The Extend Function
Let's consider the following code snippet:

```javascript
var myViewGroup = android.view.ViewGroup.extend({
	onMeasure: function (widthMeasureSpec, heightMeasureSpec) {
		// call the base class implementation
        this.super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        // do something additionally
        // myMeasureMethod(widthMeasureSpec, heightMeasureSpec);
    },
    onLayout: function (changed, left, top, right, bottom): void {
        // call the base class implementation
        this.super.onLayout(changed, left, top, right, bottom);
        // do something additionally
        // myOnLayoutMethod(left, top, right, bottom);
    }
})
```

At a low level, the Runtime adds the `extend` function on each Android [Class Proxy](../metadata/accessing-packages.md). The function is associated with a [V8 method callback](http://izs.me/v8-docs/namespacev8.html#a2084c6d4a8bbd7cb65af83251aa59d04), which, when triggered, will first validate the arguments passed and then the [Binding (Proxy) generator](../generator/overview.md) will attempt to create a new dynamic Android Type. This type will allow the JavaScript defined method overrides to be properly called. 

# Extend Function Syntax
The full `extend` syntax is as follows:

```javascript
extend(<className>, <implementationObject>);
```

### The *className* Parameter
This parameter is **optional** and specifies the name for the new class. In case not specified (which is the most common scenario), the Runtime will attempt to generate an implicit unique class name, based on the following criteria:

* The base class name
* The name of the file where the type is declared
* The line and the column at which the `extend` function is called

> Based on these criteria, a typical implicit class name will look like `android_view_ViewGroup_myFile_l10_c20`. There are several corner cases, as described in the [Gotchas](./gotchas.md) section, where generating implicit class names may lead to errors.

### The *implementationObject* Parameter
This is a JavaScript [Object Literal](http://www.w3schools.com/js/js_objects.asp) that provides the methods to be overridden in the newly generated class. If we consider the example at the top, the implementation object is:

```javascript
var implObject = {
	onMeasure: function (widthMeasureSpec, heightMeasureSpec) {
		// call the base class implementation
        this.super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        // do something additionally
        // myMeasureMethod(widthMeasureSpec, heightMeasureSpec);
    },
    onLayout: function (changed, left, top, right, bottom): void {
        // call the base class implementation
        this.super.onLayout(changed, left, top, right, bottom);
        // do something additionally
        // myOnLayoutMethod(left, top, right, bottom);
    }
}
```

# The New Class (Type)
The new type inherits the specified class (`android.view.ViewGroup` in this concrete example) and defines overrides as specified by the JavaScript object literal, passed to the `extend` function:

```java
public class android_view_ViewGroup_myFile_l10_c20 extends android.view.ViewGroup {
	@Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
    	// populate the arguments list in an array to pass to the JavaScript world
    	java.lang.Object[] params = new java.lang.Object[2];
		params[0] = widthMeasureSpec;
		params[1] = heightMeasureSpec;
		
		// call the associated JavaScript method
		return excuteJavaScriptMethod(this, “onMeasure”, params);
	}

	@Override
	protected void onLayout(boolean changed, int left, int top, int right, int bottom) {
		// populate the arguments list in an array to pass to the JavaScript world
		java.lang.Object[] params = new java.lang.Object[5];
		params[0] = changed;
		params[1] = left;
		params[2] = top;
		params[3] = right;
		params[4] = bottom;

		// call the associated JavaScript method
		return excuteJavaScriptMethod(this, “onLayout”, params);
	}	
}
```

>**Note:** The arguments in the above example are converted to JavaScript data types as described in the [Java to JavaScript](../marshalling/java-to-js.md) data conversion article

# See Also
* [Gotchas](./gotchas.md)
* [Data Conversion Overview](../marshalling/overview.md)
* [JavaScript to Java Data Conversion](../marshalling/js-to-java.md)
