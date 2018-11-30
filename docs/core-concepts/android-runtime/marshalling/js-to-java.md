---
title: JavaScript to Java
description: View the available types of JavaScript to Java conversions in NativeScript, including string, boolean, number, array types, undefined and null.
position: 1
tags: javascript java conversion, nativescript java, nativescript js to java
slug: js-to-java
---

# JavaScript to Java Conversion

The article lists the available types in JavaScript and how they are projected to Java.

### String
JavaScript [String](http://www.w3schools.com/jsref/jsref_obj_string.asp) maps to [java.lang.String](http://developer.android.com/reference/java/lang/String.html):

```javascript
var context = ...;
var button = new android.widget.Button(context);
var text = "My Button"; // JavaScript string
button.setText(text); // text is converted to java.lang.String
```

### Boolean
JavaScript [Boolean](http://www.w3schools.com/js/js_booleans.asp) maps to Java primitive [boolean](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html).

```javascript
var context = ...;
var button = new android.widget.Button(context);
var enabled = false; // JavaScript Boolean
button.setEnabled(enabled); // enabled is converted to Java primitive boolean
```

### Undefined & Null
JavaScript [Undefined](http://www.w3schools.com/jsref/jsref_undefined.asp) & [Null](http://www.w3schools.com/js/js_typeof.asp) maps to Java [null literal](http://docs.oracle.com/javase/specs/jls/se7/html/jls-3.html#jls-3.10.7) (or null pointer).

```javascript
var context = ...;
var button = new android.widget.Button(context);
button.setOnClickListener(undefined); // the Java call will be made using the null keyword
```

### Number
Java has several primitive numeric types while JavaScript has the [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp) type only. Additionally, unlike JavaScript, Java is a language that supports [Method Overloading](http://en.wikipedia.org/wiki/Function_overloading), which makes the numeric conversion more complex. Consider the following Java class:

```java
class MyObject extends java.lang.Object {
    public void myMethod(byte value){
    }

    public void myMethod(short value){
    }

    public void myMethod(int value){
    }

    public void myMethod(long value){
    }

    public void myMethod(float value){
    }

    public void myMethod(double value){
    }
}
```

The following logic applies when calling `myMethod` on a `myObject` instance from JavaScript:

```javascript
var myObject = new MyObject();
```

* Implicit **integer** conversion:

```javascript
myObject.myMethod(10); // myMethod(int) will be called.
```

>**Note:** If there is no myMethod(int) implementation, the Runtime will try to choose the best possible overload with least conversion loss. If no such method is found an exception will be raised.

* Implicit **floating-point** conversion:

```javascript
myObject.myMethod(10.5); // myMethod(double) will be called.
```

>**Note:** If there is no myMethod(double) implementation, the Runtime will try to choose the best possible overload with least conversion loss. If no such method is found an exception will be raised.

* Explicitly call an overload: <br/>
To enable developers call a specific method overload, the Runtime exposes the following functions directly in the global context:

	* byte(number) → Java primitive byte

	>The number value will be truncated and only its first byte of the whole part will be used.

	* short(number) → Java primitive short

	>The number value will be truncated and only its first 2 bytes of the whole part will be used.

	* float(number) → Java primitive float

	>The number value will be converted (with a possible precision loss) to a 2^32 floating-point value.

	* long(number) → Java primitive long (in case the number literal fits JavaScript 2^53 limit)

	>The number value's whole part will be taken only.
	
	* long("number") → Java primitive long (in case the number literal doesn't fit JavaScript 2^53 limit)

```javascript
myObject.myMethod(byte(10)); // will call myMethod(byte)
myObject.myMethod(short(10)); // will call myMethod(short)
myObject.myMethod(float(10)); // will call myMethod(float)
myObject.myMethod(long(10)); // will call myMethod(long)
myObject.myMethod(long("123456")); // will convert "123456" to Java long and will call myMethod(long)
```

>**Note:** When an explicit cast function is called and there is no such implementation found, the Runtime will directly fail, without trying to find a matching overload.

### Array
A JavaScript [Array](http://www.w3schools.com/jsref/jsref_obj_array.asp) is implicitly converted to a [Java Array](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html), using the above described rules for type conversion of the array's elements. For example:

```java
class MyObject extends java.lang.Object {
    public void myMethod(java.lang.String[] items){
    }
}
```

```javascript
var items = ["One", "Two", "Three"];
var myObject = new MyObject();
myObject.myMethod(items); // will convert to Java array of java.lang.String objects

```

# See Also
* [Java to JavaScript](./java-to-js.md)