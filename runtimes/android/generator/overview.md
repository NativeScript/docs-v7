---
nav-title: "Overview"
title: "Binding Generator Overview"
description: "NativeScript Android Runtime Binding (Dynamic Type) Generator"
position: 1
---

# Creating New Classes
It is one thing to access native Android APIs and another to inherit existing classes and/or create interface implementations and literally every application needs such functionality. Consider the following code snippet:

```javascript
var myObject = java.lang.Object.extend({
	hashCode: function(){
		return 10;
	}
});
```

In this example we *extend* (or *inherit* in terms of [OOP](http://en.wikipedia.org/wiki/Object-oriented_programming)) `java.lang.Object` and create a new type, overriding the `hashcode` method. In Android, the same code would look like:

```java
public class MyObject { // implicit base class is java.lang.Object
	@Override
	public int hashCode(){
		return 10;
	}
}
```

When a class is inherited in Android, the compiler creates a new class, containing the user-defined logic. But what about NativeScript where the JavaScript code is processed at runtime, meaning this happens **after** the Compiler step?

# Binding (Dynamic Type) Generator
This is one of the major modules within the NativeScript Android Runtime and it is responsible for the generation of new Android Types (Classes). When an `extend` call is received, the generator takes the provided JavaScript literal, containing the method overrides, and creates a new Java class at runtime. When an overridden method is called upon an instance of such dynamic type, the Runtime will directly call the provided JavaScript method implementation (if any):

```javascript
var myObjectInstance = new myObject();
var hashCode = myObjectInstance.hashCode(); // will return 10, as specified in the extend function
```

# See Also
* [How Extend Works](./how-extend-works.md)
* [Extending Classes and Interfaces](./extend-class-interface.md)