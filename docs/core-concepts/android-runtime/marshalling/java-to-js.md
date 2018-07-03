---
nav-title: "Java to JavaScript"
title: "Java to JavaScript"
description: "NativeScript Android Runtime Data Conversion (Marshalling)"
position: 2
---

# Java to JavaScript Conversion
The article lists the available types in Java and how they are projected to JavaScript.

### String & Character
Both [java.lang.String](http://developer.android.com/reference/java/lang/String.html) and [java.lang.Character](http://docs.oracle.com/javase/7/docs/api/java/lang/Character.html) types are projected as JavaScript [String](http://www.w3schools.com/jsref/jsref_obj_string.asp):

```javascript
var file = new java.io.File("/path/to/file");
var path = file.getPath(); // returns java.lang.String, converted to JS String
```

### Boolean & Primitive boolean
Both the primitive [boolean](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html) and reference [java.lang.Boolean](http://docs.oracle.com/javase/7/docs/api/java/lang/Boolean.html) types are projected as JavaScript [Boolean](http://www.w3schools.com/jsref/jsref_obj_boolean.asp):

```javascript
var context = ...
var button = new android.widget.Button(context);
var enabled = button.isEnabled(); // returns primitive boolean, converted to JS Boolean
```

### Byte & Primitive byte
Both the primitive [byte](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html) and reference [java.lang.Byte](http://docs.oracle.com/javase/7/docs/api/java/lang/Byte.html) types are projected as JavaScript [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp):

```javascript
var byte = new java.lang.Byte("1");
var jsByteValue = byte.byteValue(); // returns primitive byte, converted to Number
```

### Short & Primitive short
Both the primitive [short](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html) and reference [java.lang.Short](http://docs.oracle.com/javase/7/docs/api/java/lang/Short.html) types are projected as JavaScript [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp):

```javascript
var short = new java.lang.Short("1");
var jsShortValue = short.shortValue(); // returns primitive short, converted to Number
```

### Integer & Primitive int
Both the primitive [int](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html) and reference [java.lang.Integer](http://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html) types are projected as JavaScript [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp):

```javascript
var int = new java.lang.Integer("1");
var jsIntValue = int.intValue(); // returns primitive int, converted to Number
```

### Float & Primitive float
Both the primitive [float](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html) and reference [java.lang.Float](http://docs.oracle.com/javase/7/docs/api/java/lang/Float.html) types are projected as JavaScript [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp):

```javascript
var float = new java.lang.Float("1.5");
var jsFloatValue = float.floatValue(); // returns primitive float, converted to Number
```

### Double & Primitive double
Both the primitive [double](http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html) and reference [java.lang.Double](http://docs.oracle.com/javase/7/docs/api/java/lang/Double.html) types are projected as JavaScript [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp):

```javascript
var double = new java.lang.Double("1.5");
var jsDoubleValue = double.doubleValue(); // returns primitive double, converted to Number
```

### Long & Primitive long
[java.lang.Long](http://docs.oracle.com/javase/7/docs/api/java/lang/Long.html) and its primitive equivalent are special types which are projected to JavaScript by applying the following rules:

* If the value is in the interval (-2^53, 2^53) then it is converted to [Number](http://www.w3schools.com/jsref/jsref_obj_number.asp)
* Else a special object with the following characteristics is created:
	* Has Number.NaN set as a prototype
	* Has value property set to the string representation of the Java long value
	* Its valueOf() method returns NaN
	* Its toString() method returns the string representation of the Java long value

```java
public class TestClass {
	public long getLongNumber54Bits(){
		return 1 << 54;
	}
	public long getLongNumber53Bits(){
		return 1 << 53;
	}
}
```

```javascript
var testClass = new TestClass();
var jsNumber = testClass.getLongNumber53Bits(); // result is JavaScript Number
var specialObject = testClass.getLongNumber54Bits(); // result is the special object described above
```

### Array
Array in Java is a special [java.lang.Object](http://docs.oracle.com/javase/7/docs/api/java/lang/Object.html) that have an implicit Class associated. A Java Array is projected to JavaScript as a special JavaScript proxy object with the following characteristics:

* Has length property
* Has registered indexed getter and setter callbacks, which:
	* If the array contains elements of type convertible to a JavaScript type, then accessing the i-th element will return a converted type
	* If the array contains elements of type non-convertible to JavaScript, then accessing the i-th element will return a proxy object over the Java/Android type (see [Accessing APIs](../metadata/accessing-packages.md))

```javascript
var directory = new java.io.File("path/to/myDir");
var files = directory.listFiles(); // files is a special object as described above
var singleFile = files[0]; // the indexed getter callback is triggered and a proxy object over the java.io.File is returned
```

>**Note:** A Java Array is intentionally not converted to a JavaScript [Array](http://www.w3schools.com/jsref/jsref_obj_array.asp) for the sake of performance, especially when it comes to large arrays.


Occasionally you have to create Java arrays from JavaScript. For this scenario we added method `create` to built-in JavaScript [`Array` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Here are some examples how to use `Array.create` method:

```javascript
// the following statement is equivalent to byte[] byteArr = new byte[10];
var byteArr = Array.create("byte", 10);

// the following statement is equivalent to String[] stringArr = new String[10];
var stringArr = Array.create(java.lang.String, 10);
```
Here is the full specification for `Array.create` method
```javascript
Array.create(elementClassName, length)
```
```javascript
Array.create(javaClassCtorFunction, length)
```
The first signature accepts `string` for `elementClassName`. This option is useful when you have to create Java array of primitive types (e.g. `char`, `boolean`, `byte`, `short`, `int`, `long`, `float` and `double`). It is also useful when you have to create Java jagged arrays. For this scenario `elementClassName` must be the standard JNI class notation. Here are some examples:
```JavaScript
// equivalent to int[][] jaggedIntArray2 = new int[10][];
var jaggedIntArray2 = Array.create("[I", 10);

// equivalent to boolean[][][] jaggedBooleanArray3 = new boolean[10][][];
var jaggedBooleanArray3 = Array.create("[[Z", 10);

// equivalent to Object[][][][] jaggedObjectArray4 = new Object[10][][][];
var jaggedObjectArray4 = Array.create("[[[Ljava.lang.Object;", 10);
```
The second signature uses `javaClassCtorFunction` which must the JavaScript constructor function for a given Java type. Here are some examples:
```JavaScript
// equivalent to String[] stringArr = new String[10];
var stringArr = Array.create(java.lang.String, 10);

// equivalent to Object[] objectArr = new Object[10];
var objectArr = Array.create(java.lang.Object, 10);
```

### Array of Primitive Types
The automatic marshalling works only for cases with arrays of objects. In cases where you have a method that takes an array of primitive types, we need to convert as follows:
```Java
public static void myMethod(int[] someParam)
```
Then we need to invoke it as follows:
```JavaScript
let arr = Array.create("int", 3);
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;

SomeObject.myMethod(arr); // assuming the method is accepting an array of primitive types
```

### Two-Dimensional Arrays of Primitive Types

The above scenario gets more tricky with two-dimensional arrays. Consider a Java method that accepts as an argument a two-dimensional array:
```Java
public static void myMethod(java.lang.Integer[][] someParam)
```
The JavaScritp marshaled code will look like this:
```JavaScript
let arr = Array.create("[Ljava.lang.Integer;", 2);
let elements = Array.create("java.lang.Integer", 3);
elements[0] = new java.lang.Integer(1);
elements[1] = new java.lang.Integer(2);
elements[2] = new java.lang.Integer(3);
arr[0] = elements;

SomeObject.myMethod(arr); // assuming the method is accepting a two-dimensional array of primitive types
```

### Null
The Java [null literal](http://docs.oracle.com/javase/specs/jls/se7/html/jls-3.html#jls-3.10.7) (or null pointer) is projected to JavaScript [Null](http://www.w3schools.com/js/js_typeof.asp):

```javascript
var context = ...
var button = new android.widget.Button(context);
var background = button.getBackground(); // if there is no background drawable method will return JS null
```

### Android Types
All Android-declared types are projected to JavaScript using the Package and Class proxies as described in [Accessing APIs](../metadata/accessing-packages.md)

# See Also
* [JavaScript to Java](./js-to-java.md)
* [Accessing APIs](../metadata/accessing-packages.md)
