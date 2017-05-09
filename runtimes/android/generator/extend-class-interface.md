---
nav-title: "Extending Classes And Interfaces"
title: "Extending Classes And Interfaces"
description: "NativeScript Android Runtime Extending Classes And Interfaces"
position: 2
---

As part of the native Android development you often have to inherit from classes and/or implement interfaces. NativeScript supports these scenarios as well.

# Classes

```java
public class MyButton extends android.widget.Button {
	public MyButton(Context context) {
		super(context);
	}
	
	@Override
	public void setEnabled(boolean enabled) {
		super.setEnabled(enabled);
	}
}
MyButton btn = new MyButton(context);
```

Here is how the above is done in NativeScript:

``` JavaScript
var constructorCalled = false;
var MyButton = android.widget.Button.extend({
	//constructor
	init: function() {
		constructorCalled = true;
	},
	
	setEnabled: function(enabled) {
		this.super.setEnable(enabled);
	}
});

var btn = new MyButton(context);
// constructorCalled === true
```
``` TypeScript
class MyButton extends android.widget.Button.extend
	static constructorCalled: boolean = false;
	//constructor
	init() {
		MyButton.constructorCalled = true;

		// necessary when extending TypeScript constructors
		return global.__native(this);
	}

	setEnabled(enabled : boolean): void {
		this.super.setEnable(enabled);
	}
}

let btn = new MyButton(context);
// MyButton.constructorCalled === true
```

> **Note:** In the above setEnabled function the `this` keyword points to the JavaScript object that proxies the extended native instance. The `this.super` property provides access to the base class method implementation.

# Interfaces
The next example shows how to implement an interface in Java and NativeScript. The main difference between inheriting classes and implementing interfaces in NativeScript is the use of the `extend` keyword. Basically, you implement an interface by passing the *implementation* object to the interface constructor function. The syntax is identical to the [Java Anonymous Classes](http://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html).

```java
button.setOnClickListener(new View.OnClickListener() {
	public void onClick(View v) {
		// Perform action on click
	}
});
```

``` JavaScript
button.setOnClickListener(new android.view.View.OnClickListener({
	onClick: function() {
		// Perform action on click
	}
}));
```
``` TypeScript
button.setOnClickListener(new android.view.View.OnClickListener({
	onClick: function() {
		// Perform action on click
	}
}));
```

## Implementing multiple interfaces in NativeScript 

Suppose you have the following interfaces in Java:

```java
public interface Printer {
	void print(String content);
	void print(String content, int offset);
}

public interface Copier {
	String copy(String content);
}

public interface Writer {
	void write(Object[] arr);
	void writeLine(Object[] arr)
}
```

Implementing the interfaces is as easy in Java as writing:

```java
public class MyVersatileCopywriter implements Printer, Copier, Writer {
	public void print(String content) {	...	}

	public void print(String content, int offset) { ... }

	public String copy(String content) { ... }

	public void write(Object[] arr) { ... }

	public void writeLine(Object[] arr) { ... }
}
```

The same result can be achieved in NativeScript by [extending]({%slug how-extend-works}) any valid object that inherits [Java Object](https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html). 

- In JavaScript - Declare an **interfaces** array in the implementation
- Using Typescript syntax - apply a **decorator** to the extended class (note `@Interfaces([...]`))

Using Javascript syntax - attach `interfaces` array to implementation object of the extend call

``` JavaScript
var MyVersatileCopyWriter = java.lang.Object.extend({
	interfaces: [com.a.b.Printer, com.a.b.Copier, com.a.b.Writer], /* the interfaces that will be inherited by the resulting class */
	print: function() { ... }, /* implementing the 'print' methods from Printer */
	copy: function() { ... }, /* implementing the 'copy' method from Copier */
	write: function() { ... }, /* implementing the 'write' method from Writer */
	writeLine: function() { ... }, /* implementing the 'writeLine' method from Writer */
	toString: function() { ... } /* override `java.lang.Object's` `toString */
});
```
``` TypeScript
@Interfaces([com.a.b.Printer, com.a.b.Copier, com.a.b.Writer]) /* the interfaces that will be inherited by the resulting MyVersatileCopyWriter class */
class MyVersatileCopyWriter extends java.lang.Object { 
	constructor() {
		return global.__native(this);
	}

	print() { ... }
	copy() { ... }
	write() { ... }
	writeLine() { ... }
}
```


> When implementing Java interfaces in NativeScript, it is necessary to provide implementation (declare the methods - `print`, `copy`, `write`, `writeLine`) for **every** method present in the interfaces, otherwise compilation will fail. If you do not want to fully implement an interface you need to declare empty functions. Functions with empty bodies are considered valid method implementations (`print: function() {}`).


## Limitations
* Implementing two interfaces with the same method signature will generate just 1 method. It is the implementor's responsibility to define how the method will behave for both interfaces
* Implementing two interfaces with the same *method name*, *parameter number*, but **different return type** (`void a()` vs `boolean a()`) will result in a compilation error


### Notes
> Java method overloads are handled by the developer by explicitly checking the `arguments` count of the invoked function

``` JavaScript
var MyVersatileCopyWriter = ...extend({
	...
	print: function() {
		var content = "";
		var offset = 0;

		if (arguments.length == 2) {
			offset = arguments[1];
		}

		content = arguments[0];

		// do stuff
	}
	...
})
```
``` TypeScript
class MyVersatileCopyWriter extends ... {
	constructor() {
		return global.__native(this);
	}
	...
	print() {
		let content = "";
		let offset = 0;

		if (arguments.length == 2) {
			offset = arguments[1];
		}

		content = arguments[0];

		// do stuff
	}
	...
}
```



> In addition to implementing interface methods, you can override methods of the extended class, and also declare your own methods that the new class should have.


# See Also
* [How Extend Works](./how-extend-works.md)
* [Gotchas](./gotchas.md)
