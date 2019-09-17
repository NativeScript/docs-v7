---
title: JavaScript to Kotlin
description: View the available types of JavaScript to Kotlin conversions in NativeScript, including string, boolean, number, array types, undefined and null.
position: 1
tags: javascript kotlin conversion, nativescript kotlin, nativescript js to kotlin
slug: js-to-kotlin
---

# JavaScript to Kotlin Conversion

The article lists the available types in JavaScript and how they are projected to Kotlin.

### String
JavaScript [String](http://www.w3schools.com/jsref/jsref_obj_string.asp) maps to [kotlin.String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html):

```javascript
var kotlinClass = new com.example.KotlinClassWithStringProperty();
var text = "My Button"; // JavaScript string
kotlinClass.setStringProperty(text); // text is converted to kotlin.String
```

### Boolean
JavaScript [Boolean](http://www.w3schools.com/js/js_booleans.asp) maps to Kotlin class [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html).

```javascript
var kotlinClass = new com.example.KotlinClassWithBooleanProperty();
var enabled = false; // JavaScript Boolean
kotlinClass.setBooleanProperty(enabled); // enabled is converted to Kotlin Boolean
```

### Undefined & Null
JavaScript [Undefined](http://www.w3schools.com/jsref/jsref_undefined.asp) & [Null](https://www.w3schools.com/js/js_type_conversion.asp) maps to Kotlin null literal (or null pointer).

```javascript
var kotlinClass = new com.example.KotlinClassWithNullableParameter(undefined); // the Kotlin call will be made using the null keyword
```

### Number
Kotlin has several numeric types while JavaScript has the [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp) type only. Additionally, unlike JavaScript, Kotlin is a language that supports [Method Overloading](http://en.wikipedia.org/wiki/Function_overloading), which makes the numeric conversion more complex. Consider the following Java class:

```kotlin
class MyObject : Any() {
    fun myMethod(value: Byte) {}

    fun myMethod(value: Short) {}

    fun myMethod(value: Int) {}

    fun myMethod(value: Long) {}

    fun myMethod(value: Float) {}

    fun myMethod(value: Double) {}
}
```

The following logic applies when calling `myMethod` on a `myObject` instance from JavaScript:

```javascript
var myObject = new MyObject();
```

* Implicit **integer** conversion:

```javascript
myObject.myMethod(10); // myMethod(Int) will be called.
```

>**Note:** If there is no myMethod(Int) implementation, the Runtime will try to choose the best possible overload with least conversion loss. If no such method is found an exception will be raised.

* Implicit **floating-point** conversion:

```javascript
myObject.myMethod(10.5); // myMethod(Double) will be called.
```

>**Note:** If there is no myMethod(Double) implementation, the Runtime will try to choose the best possible overload with least conversion loss. If no such method is found an exception will be raised.

* Explicitly call an overload: <br/>
To enable developers call a specific method overload, the Runtime exposes the following functions directly in the global context:

	* byte(number) → Kotlin Byte

	>The number value will be truncated and only its first byte of the whole part will be used.

	* short(number) → Kotlin Short

	>The number value will be truncated and only its first 2 bytes of the whole part will be used.

	* float(number) → Kotlin Float

	>The number value will be converted (with a possible precision loss) to a 2^32 floating-point value.

	* long(number) → Kotlin Long (in case the number literal fits JavaScript 2^53 limit)

	>The number value's whole part will be taken only.
	
	* long("number") → Kotlin Long (in case the number literal doesn't fit JavaScript 2^53 limit)

```javascript
myObject.myMethod(byte(10)); // will call myMethod(Byte)
myObject.myMethod(short(10)); // will call myMethod(Short)
myObject.myMethod(float(10)); // will call myMethod(Float)
myObject.myMethod(long(10)); // will call myMethod(Long)
myObject.myMethod(long("123456")); // will convert "123456" to Kotlin Long and will call myMethod(Long)
```

>**Note:** When an explicit cast function is called and there is no such implementation found, the Runtime will directly fail, without trying to find a matching overload.

### Array
A JavaScript [Array](http://www.w3schools.com/jsref/jsref_obj_array.asp) is implicitly converted to a [Kotlin Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html), using the above described rules for type conversion of the array's elements. For example:

```kotlin
class MyObject : Any() {
    fun myMethod(items: Array<String>) {}
}
```

```javascript
var items = ["One", "Two", "Three"];
var myObject = new MyObject();
myObject.myMethod(items); // will convert to Java array of java.lang.String objects

```

# See Also
* [Kotlin to JavaScript](./kotlin-to-js.md)
* [JavaScript to Java](./js-to-java.md)
* [Java to JavaScript](./java-to-js.md)
* [Accessing APIs](../metadata/accessing-packages.md)