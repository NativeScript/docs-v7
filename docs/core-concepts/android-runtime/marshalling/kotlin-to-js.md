---
nav-title: "Kotlin to JavaScript"
title: "Kotlin to JavaScript"
description: "NativeScript Android Runtime Data Conversion (Marshalling)"
position: 2
---

# Kotlin to JavaScript Conversion
The article lists the available types in Kotlin and how they are projected to JavaScript. 

Keep in mind that some of Kotlin's fundamental types are translated to a Java type by the Kotlin compiler when targeting Android or the JVM. Those types are the following:

| **Kotlin non-nullable type** | **Java type**     | **Kotlin nullable type** | **Java type**         |
|------------------------------|-------------------|--------------------------|-----------------------|
|kotlin.Any                    | java.lang.Object  | kotlin.Any?              | java.lang.Object      |
|kotlin.String                 | java.lang.String  | kotlin.String?           | java.lang.String      |
|kotlin.Char                   | char              | kotlin.Char?             | java.lang.Character   |
|kotlin.Boolean                | boolean           | kotlin.Boolean?          | java.lang.Boolean     |
|kotlin.Byte                   | byte              | kotlin.Byte?             | java.lang.Byte        |
|kotlin.Short                  | short             | kotlin.Short?            | java.lang.Short       |
|kotlin.Int                    | int               | kotlin.Int?              | java.lang.Integer     |
|kotlin.Long                   | long              | kotlin.Long?             | java.lang.Long        |
|kotlin.Float                  | float             | kotlin.Float?            | java.lang.Float       |


Although the conversion of Kotlin types in NativeScript is quite the same as the [Java conversion]((./java-to-js.md)), let's take a look at some examples.

## String & Character
Both [kotlin.String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) and [kotlin.Char](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char/index.html) types are projected as JavaScript [String](http://www.w3schools.com/jsref/jsref_obj_string.asp):

```javascript
var kotlinClass = new com.example.KotlinClassWithStringAndCharProperty();
var str1 = kotlinClass.getStringProperty(); // returns kotlin.String, converted to JS String
var str2 = kotlinClass.getCharProperty(); // returns kotlin.Char, converted to JS String
```
```kotlin
package com.example

class KotlinClassWithStringAndCharProperty {
    val stringProperty: String = "string property"
    val charProperty: Char = 'c'
}
```

## Boolean
Kotlin's boolean type [kotlin.Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) is projected as JavaScript [Boolean](http://www.w3schools.com/jsref/jsref_obj_boolean.asp):

```javascript
var kotlinClass = new com.example.KotlinClassWithBooleanProperty();
var enabled = kotlinClass.getBooleanProperty(); // returns Kotlin Boolean, converted to JS Boolean
```
```kotlin
package com.example

class KotlinClassWithBooleanProperty {
    val booleanProperty: Boolean = false
}
```

## Byte
Kotlin's byte type [kotlin.Byte](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte/index.html) is projected as JavaScript [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp):

```javascript
var kotlinClass = new com.example.KotlinClassWithByteProperty();
var jsByteValue = kotlinClass.getByteProperty(); // returns Kotlin Byte, converted to Number
```
```kotlin
package com.example

class KotlinClassWithByteProperty {
    val byteProperty: Byte = 42
}
```

## Short
Kotlin's short type [kotlin.Short](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-short/index.html) is projected as JavaScript [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp):

```javascript
var kotlinClass = new com.example.KotlinClassWithShortProperty();
var jsShortValue = kotlinClass.getShortProperty(); // returns Kotlin Short, converted to Number
```
```kotlin
package com.example

class KotlinClassWithShortProperty {
    val shortProperty: Short = 42
}
```

## Integer
Kotlin's integer type [kotlin.Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) is projected as JavaScript [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp):

```javascript
var kotlinClass = new com.example.KotlinClassWithIntProperty();
var jsIntValue = kotlinClass.getIntProperty(); // returns Kotlin Int, converted to Number
```
```kotlin
package com.example

class KotlinClassWithIntProperty {
    val intProperty: Int = 42
}
```

## Float
Kotlin's float type [kotlin.Float](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-float/index.html) is projected as JavaScript [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp):

```javascript
var kotlinClass = new com.example.KotlinClassWithFloatProperty();
var jsFloatValue = kotlinClass.getFloatProperty(); // returns Kotlin Float, converted to Number
```
```kotlin
package com.example

class KotlinClassWithFloatProperty {
    val floatProperty: Float = 42.0f
}
```

## Double
Kotlin's double type [kotlin.Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html) is projected as JavaScript [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp):

```javascript
var kotlinClass = new com.example.KotlinClassWithDoubleProperty();
var jsDoubleValue = kotlinClass.getDoubleProperty(); // returns Kotlin double, converted to Number
```
```kotlin
package com.example

class KotlinClassWithDoubleProperty {
    val doubleProperty: Double = 42.0
}
```

## Long
Kotlin's long type [kotlin.Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) is a special type which is projected to JavaScript by applying the following rules:

* If the value is in the interval (-2^53, 2^53) then it is converted to [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp)
* Else a special object with the following characteristics is created:
	* Has Number.NaN set as a prototype
	* Has value property set to the string representation of the Kotlin long value
	* Its valueOf() method returns NaN
	* Its toString() method returns the string representation of the Kotlin long value

```kotlin
package com.example

class KotlinClassWithLongProperties {
    val longNumber54Bits: Long
        get() = (1 shl 54).toLong()
    val longNumber53Bits: Long
        get() = (1 shl 53).toLong()
}
```

```javascript
var kotlinClass = new com.example.KotlinClassWithLongProperties();
var jsNumber = kotlinClass.getLongNumber53Bits(); // result is JavaScript Number
var specialObject = kotlinClass.getLongNumber54Bits(); // result is the special object described above
```

## Array
Array in Kotlin is a special object that has an implicit Class associated. A Kotlin Array is projected to JavaScript as a special JavaScript proxy object with the following characteristics:

* Has length property
* Has registered indexed getter and setter callbacks, which:
	* If the array contains elements of type convertible to a JavaScript type, then accessing the n-th element will return a converted type
	* If the array contains elements of type non-convertible to JavaScript, then accessing the n-th element will return a proxy object over the Kotlin type (see [Accessing APIs](../metadata/accessing-packages.md))

```javascript
var kotlinClass = new com.example.KotlinClassWithStringArrayProperty();
var kotlinArray = kotlinClass.getStringArrayProperty(); // kotlinArray is a special object as described above
var firstStringElement = kotlinArray[0]; // the indexed getter callback is triggered and the kotlin.String is returned as a JS string
```
```kotlin
package com.example

class KotlinClassWithStringArrayProperty {
    val stringArrayProperty: Array<String> = arrayOf("element1", "element2", "element3")
}
```

>**Note:** A Kotlin Array is intentionally not converted to a JavaScript [Array](http://www.w3schools.com/jsref/jsref_obj_array.asp) for the sake of performance, especially when it comes to large arrays.

### Creating arrays

Occasionally you have to create Kotlin arrays from JavaScript. Because of the translation of the fundamental Kotlin types to Java types in Android, creating Kotlin array could be done the same way Java arrays are created. This is described in [Java to JavaScript](./java-to-js.md#L111)

## Null
The Kotlin null literal (or null pointer) is projected to JavaScript [Null](https://www.w3schools.com/js/js_type_conversion.asp):

```javascript
var kotlinClass = new com.example.KotlinClassWithNullableProperty();
var nullableValue = kotlinClass.getNullableProperty(); // if there is no value, the method will return JS null
```
```kotlin
package com.example

class KotlinClassWithNullableProperty() {
    val nullableProperty: Any? = null
}
```

## Kotlin Types
All Kotlin types are projected to JavaScript using the Package and Class proxies as described in [Accessing APIs](../metadata/accessing-packages.md)

## Kotlin Companion objects
Kotlin's [companion objects](https://kotlinlang.org/docs/tutorials/kotlin-for-py/objects-and-companion-objects.html#companion-objects) could be accessed in JavaScript the same way they can be accessed in Java - by accessing the `Companion` field:
```javascript
var companion = com.example.KotlinClassWithCompanion.Companion;
var data = companion.getDataFromCompanion();
``` 
```kotlin
package com.example

class KotlinClassWithCompanion {
    companion object {
        fun getDataFromCompanion() = "some data"
    }
}
```

## Kotlin Object
Kotlin's [objects](https://kotlinlang.org/docs/tutorials/kotlin-for-py/objects-and-companion-objects.html#object-declarations) could be accessed in JavaScript the same way they can be accessed in Java - by accessing the INSTANCE field:
```javascript
var objectInstance = com.example.KotlinObject.INSTANCE;
var data = objectInstance.getDataFromObject();
```
```kotlin
package com.example

object KotlinObject {
    fun getDataFromObject() = "some data"
}
```

## Accessing Kotlin properties
Kotlin's [properties](https://kotlinlang.org/docs/reference/properties.html#properties-and-fields) could be accessed in JavaScript the same way they can be accessed in Java - by using their compiler-generated get/set methods. Non-boolean Kotlin properties could be used in NativeScript applications as JS fields as well.
```javascript
var kotlinClass = new com.example.KotlinClassWithStringProperty();

var propertyValue = kotlinClass.getStringPropert();
kotlinClass.setStringProperty("example");

propertyValue = kotlinClass.stringProperty;
kotlinClass.stringProperty = "second example";

```
```kotlin
package com.example

class KotlinClassWithStringProperty(var stringProperty: kotlin.String)
```

## Accessing Kotlin package-level functions
Currently using Kotlin [package-level functions](https://kotlinlang.org/docs/reference/java-to-kotlin-interop.html#package-level-functions) could not be achieved easily. In order to use a package-level function, the class where it's defined should be known. Let's take a look at an example:
```javascript
var randomNumber = com.example.FunctionsKt.getRandomNumber();
```
```kotlin
package com.example

fun getRandomNumber() = 42
```

In the example above, the class `FunctionsKt` is autogenerated by the Kotlin compiler and its name is based on the name of the file where the functions are defined. Kotlin supports annotating a file to have a user provided name and this simplifies using package-level functions:
```javascript
var randomNumber = com.example.UtilityFunctions.getRandomNumber();
```
```kotlin
@file:JvmName("UtilityFunctions")
package com.example

fun getRandomNumber() = 42
```



## Accessing Kotlin extension functions
Currently using Kotlin extension functions could not be achieved easily. In order to use an extension function, the class where it's defined should be known. Also, when invoking it, the first parameter should be an instance of the type for which the function is defined. Let's take a look at an example:
```javascript
var arrayList = new java.util.ArrayList();
arrayList.add("firstElement");
arrayList.add("secondElement");
com.example.Extensions.switchPlaces(arrayList, 0, 1);
```
```kotlin
package com.example

import java.util.ArrayList

fun ArrayList<String>.switchPlaces(firstElementIndex: Int, secondElementIndex: Int) {
    val temp = this[firstElementIndex]
    this[firstElementIndex] = this[secondElementIndex]
    this[secondElementIndex] = temp
}
```

In the example above, the class `ExtensionsKt` is autogenerated by the Kotlin compiler and its name is based on the name of the file where the functions are defined. Kotlin supports annotating a file to have a user provided name and this simplifies using package-level functions:
```javascript
var arrayList = new java.util.ArrayList();
arrayList.add("firstElement");
arrayList.add("secondElement");
com.example.ExtensionFunctions.switchPlaces(arrayList, 0, 1);
```
```kotlin
@file:JvmName("ExtensionFunctions")
package com.example

import java.util.ArrayList

fun ArrayList<String>.switchPlaces(firstElementIndex: Int, secondElementIndex: Int) {
    val temp = this[firstElementIndex]
    this[firstElementIndex] = this[secondElementIndex]
    this[secondElementIndex] = temp
}
```


# See Also
* [JavaScript to Kotlin](./js-to-kotlin.md)
* [JavaScript to Java](./js-to-java.md)
* [Java to JavaScript](./java-to-js.md)
* [Accessing APIs](../metadata/accessing-packages.md)
