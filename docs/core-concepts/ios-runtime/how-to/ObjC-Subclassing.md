---
nav-title: "Subclassing Objective-C Classes"
title: "Subclassing Objective-C Classes"
description: "How to extend Objective-C classes and implement protocol from JavaScript."
position: 0
---

# Subclassing Objective-C Classes
For [Objective-C classes](../types/ObjC-Classes.md) we have JavaScript constructor functions and for [Objective-C protocols](../types/ObjC-Protocols.md) we have objects. They can be used to subclass an Objective-C class or implement Objective-C protocol from JavaScript.

### Subclassing an Objective-C Class
The constructor functions have a static method called **`extend`** used to declare Objective-C subclasses from JavaScript.

### Implementing Protocols
To implement a protocol use the **`extend`** method on an Objective-C class, the implemented protocols are provided in the `extend` arguments.

## Extend
The **`extend`** method has the following usage:

`var <DerivedClass> = <BaseClass>.extend(classMembers, [nativeSignature]);`

#### `classMembers`
The properties of the `classMembers` argument define the instance class members:
 * *methods* - define or override instance methods
 * *properties* - define or override instance properties

There are three type of methods, which can be contained in this object - base class overrides, native visible methods and pure JavaScript methods. The difference between native visible and pure Javascript methods is the that later are only accessible in your JavaScript code. Should you want the method to be visible and callable from the native libraries, you should provide a second parameter to `extend`. This parameter should provide the needed additional metadata about the method signature.

For more information how Objective-C method names are mapped to JavaScript property names check the ["Methods" section in "Objective-C Classes"](../types/ObjC-Classes.md#methods).

To override Objective-C properties you have to use JavaScript getters/setters (ECMA 5). If the property isn't read-only, you have to override both the getter and the setter.

This parameter of `extend` is set as prototype to the instances created by the constructor. You shouldn't reuse it for other `extend` calls.

#### `nativeSignature`
The `nativeSignature` argument is optional, it has the following properties:
 * **name** - optional, string with the derived class name
 * **protocols** - optional, array with the implemented protocols
 * **exposedMethods** - optional, dictionary with method names and `native method signature` objects

The `exposedMethods` property defines the Objective-C signatures of new methods, this is usually required from delegates and APIs that expect target with selector pairs. Methods that are overridden will infer their signatures from the base class or protocols they implement.

> **NOTE:** When exposing a new method to the Objective-C runtime (as opposed to overriding an existing method), its name in both the classMembers object and exposedMethods object has to be the exact same string. This string is also used as the selector of the method in Objective-C.

The native method signature object has two properties:
 * **returns** - required, type object
 * **params** - required, an array of type objects

The `type object` in general is one of the [runtime types](../types/Runtime-Types.md):
 * A constructor function, that identifies the Objective-C class
 * A primitive types in the `interop.types` object
 * In rare cases can be a reference type, struct type etc. described with the interop API

## Calling Base Methods
Calls to native base class methods in overrides are in the form:

`<BaseTypeName>.prototype.<MethodName>.apply(this, arguments);`

or

`this.super.<MethodName>(<arguments>);`

Getting or setting properties using the base getters and setters is possible through the `super` property.

### Subclass Example
The following example subclasses the `UIViewController`:
```javascript
var MyViewController = UIViewController.extend({
    // Override an existing method from the base class.
    // We will obtain the method signature from the protocol.
    viewDidLoad: function () {
        // Call super using the prototype:
        UIViewController.prototype.viewDidLoad.apply(this, arguments);
        // or the super property:
        this.super.viewDidLoad();

        // Add UI to the view here...
    },
    shouldAutorotate: function () { return false; },

    // You can override existing properties
    get modalInPopover() { return this.super.modalInPopover; },
    set modalInPopover(x) { this.super.modalInPopover = x; },

    // Additional JavaScript instance methods or properties that are not accessible from Objective-C code.
    myMethod: function() { },

    get myProperty() { return true; },
    set myProperty(x) { },
}, {
    name: "MyViewController"
});
```

### Protocol Implementation Example
The following example implements the `UIApplicationDelegate` protocol:
```javascript
var MyAppDelegate = UIResponder.extend({
    // Implement a method from UIApplicationDelegate.
    // We will obtain the method signature from the protocol.
    applicationDidFinishLaunchingWithOptions: function (application, launchOptions) {
        this._window = new UIWindow(UIScreen.mainScreen.bounds);
        this._window.rootViewController = MyViewController.alloc().init();
        this._window.makeKeyAndVisible();
        return true;
    }
}, {
    // The name for the registered Objective-C class.
    name: "MyAppDelegate",
    // Declare that the native Objective-C class will implement the UIApplicationDelegate Objective-C protocol.
    protocols: [UIApplicationDelegate]
});
```

You can implement only some methods of the protocol. If a not implemented method is called an exception will be raised at runtime. You can implement only some or none of the optional methods.

### Exposed Method Example
The following example shows how you can create a new instance method accessible from Objective-C APIs, that is declared in JavaScript:
```javascript
var MyViewController = UIViewController.extend({
    viewDidLoad: function () {
        // ...
        var aboutButton = UIButton.buttonWithType(UIButtonType.UIButtonTypeRoundedRect);
        // Pass this target and the aboutTap selector for touch up callback.
        aboutButton.addTargetActionForControlEvents(this, "aboutTap", UIControlEvents.UIControlEventTouchUpInside);
        // ...
    },
    // The aboutTap is a JavaScript method that will be accessible from Objective-C.
    aboutTap: function(sender) {
        var alertWindow = new UIAlertView();
        alertWindow.title = "About";
        alertWindow.addButtonWithTitle("OK");
        alertWindow.show();
    },
}, {
    name: "MyViewController",
    exposedMethods: {
        // Declare the signature of the aboutTap. We can not infer it, since it is not inherited from base class or protocol.
        aboutTap: { returns: interop.types.void, params: [ UIControl ] }
    }
});
```

### Overriding Initializers
Initializers should always return a reference to the object itself, and if it cannot be initialized, it should return `null`. This is why we need to check if `self` exists before trying to use it.
```javascript
var MyObject = NSObject.extend({
    init: function() {
        var self = this.super.init();
        if (self) {
            // The base class initialized successfully
            console.log("Initialized");
        }
        return self;
    }
});
```

## TypeScript Support

You can use TypeScript to inherit from native classes.

```typescript
// A native class with the name "JSObject" will be registered, so it should be unique
class JSObject extends NSObject implements NSCoding {
    public encodeWithCoder(aCoder) { /* ... */ }

    public initWithCoder(aDecoder) { /* ... */ }

    public "selectorWithX:andY:"(x, y) { /* ... */ }

    // An array of protocols to be implemented by the native class
    public static ObjCProtocols = [ NSCoding ];

    // A selector will be exposed so it can be called from native.
    public static ObjCExposedMethods = {
        "selectorWithX:andY:": { returns: interop.types.void, params: [ interop.types.id, interop.types.id ] }
    };
}
```

There should be no TypeScript constructor, because it will not be executed. Instead override one of the `init` methods.


## TypeScript Delegate Example

When working with native APIs, you'll find yourself having to setup delegates in order to recieve results or callbacks. For this example, we'll setup a delegate for the [Tesseract-OCR-iOS](https://github.com/gali8/Tesseract-OCR-iOS/wiki/Using-Tesseract-OCR-iOS/6510b29bbf18655f29a26f484b00a24cc66ed88b) API. 

Let's first take a look at what the delegate typescript declarations look like:
```typescript
interface G8TesseractDelegate extends NSObjectProtocol {
	preprocessedImageForTesseractSourceImage?(tesseract: G8Tesseract, sourceImage: UIImage): UIImage;
	progressImageRecognitionForTesseract?(tesseract: G8Tesseract): void;
	shouldCancelImageRecognitionForTesseract?(tesseract: G8Tesseract): boolean;
}
```

What we want to do is define a class `G8TesseractDelegateImpl` that extends `NSObject` and implements `G8TesseractDelegate` which looks like this:
```typescript
class G8TesseractDelegateImpl
	extends NSObject // native delegates mostly always extend NSObject
	implements G8TesseractDelegate {

	static ObjCProtocols = [G8TesseractDelegate] // define our native protocalls

	static new(): G8TesseractDelegateImpl {
		return <G8TesseractDelegateImpl>super.new() // calls new() on the NSObject
	}

	preprocessedImageForTesseractSourceImage(tesseract: G8Tesseract, sourceImage: UIImage): UIImage {
		console.info('preprocessedImageForTesseractSourceImage')
		return sourceImage
	}

	progressImageRecognitionForTesseract(tesseract: G8Tesseract) {
		console.info('progressImageRecognitionForTesseract')
	}

	shouldCancelImageRecognitionForTesseract(tesseract: G8Tesseract): boolean {
		console.info('shouldCancelImageRecognitionForTesseract')
		return false
	}

}
```

Now that we have our delegate class setup, we can create a new instance of `G8Tesseract` and start using it:
```typescript
function image2text(image: UIImage): string {
	let delegate: G8TesseractDelegateImpl = G8TesseractDelegateImpl.new()
	let tess: G8Tesseract = G8Tesseract.new()
	tess.delegate = delegate
	/*=============================
	=            NOTES            =
	=============================*/
	// The `tess.delegate` property is weak and won't be retained by the Objective-C runtime so you should manually keep the delegate JS object alive as long the tessaract instance is alive
	/*=====  End of NOTES  ======*/
	tess.image = image
	let results: boolean = tess.recognize()
	if (results == true) {
		return tess.recognizedText
	} else {
		return 'ERROR'
	}
}
```


## Limitations

* You shouldn't extend an already extended class
* You can't override static methods or properties
* You can't expose static methods or properties

