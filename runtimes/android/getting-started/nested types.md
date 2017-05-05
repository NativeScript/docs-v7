---
nav-title: "Nested Types"
title: "Nested Types"
description: "NativeScript Android Runtime Nested Types"
position: 4
---

# Overview
Both Java and JavaScript are high-level languages meaning that they both provide strong abstraction from the computer details. It is relatively straightforward to express a high-level language to low-level one (for example to translate Java to Assembly). However, there are technical difficulties when it comes to translating one high-level concept to another. Such difficulties are largely known as *impedance mismatch*. This article explains how the deal with the impedance mismatch when it comes to working with Java inner and nested types.

# Java Nested Types
Here is a short example that summarizes the relation between Java nested and inner types.
```Java
public class Outer {
    public class Inner {
      // inner and nested class
    }
    
    public static class Nested {
      // nested but not inner class
    }
}
```
In short, an instance of inner types hold a reference to an instance of the outer type. You can find more information in the Java language specification (http://docs.oracle.com/javase/specs/jls/se8/html/). Here is a Java example how to instantiate the objects:

```Java
Outer outer = new Outer();
Outer.Inner inner1 = outer.new Inner();

Outer.Inner inner2 = new Outer().new Inner();

Outer.Nested nested = new Outer.Nested()
```

NativeScript for Android supports both nested and inner types. Here is the translated example from above:

```JavaScript
var outer = new Outer();

var inner1 = new outer.Inner();		
  		  
var inner2 = new new Outer().Inner();

var nested =  new Outer.Nested();
```

# Accessing Static Members
NativeScript for Android supports accessing static members of inner/nested types as well.
```JavaScript
var c = android.hardware.Camera.Parameters.ANTIBANDING_50HZ;
```
In the previous example the constant `ANTIBANDING_50HZ` which is defined in the inner class `Parameters` of the class `android.hardware.Camera` is assigned to the variable `c`.

