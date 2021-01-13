---
title: Utils
description: Learn how to use different utils methods provided in the Utils core module
position: 100
slug: utils
---

# Utils

To use the functionality provided by `Utils`:

```JavaScript
import { Utils } from "@nativescript/core";
```
```TypeScript
import { Utils } from "@nativescript/core";
```

### isFileOrResourcePath() function

Verify if the specified `path` points to a resource or a local file. The function returns a boolean value of:

- `true` - if the path has a valid path structure
- `false` - if the path is not a file path 

```JavaScript
var path = "res://icon";
var value = Utils.isFileOrResourcePath(path);
```
```TypeScript
const path: string  = "res://icon";
const value: boolean = Utils.isFileOrResourcePath(path);
```

### isDataURI() function

Checks if the specified URI is a [data URI](http://en.wikipedia.org/wiki/Data_URI_scheme).

- Returns `true` if the string is data URL, otherwise `false`

```JavaScript
var url = "<url>";
var value = Utils.isDataURI(url);
```
```TypeScript
const url: string = "<url>"; 
const value:boolean = Utils.isDataURI(url);
```

### openUrl() function

Open an URL on device with the default browser

```JavaScript
Utils.openUrl("https://docs.nativescript.org/core-concepts/utils")
```
```TypeScript
Utils.openUrl("https://docs.nativescript.org/core-concepts/utils")
```


### escapeRegexSymbols() function

 Escapes special regex symbols (., *, ^, $, etc.) in string in order to create a valid regex from it.

 ```JavaScript
var sampleString = "All of these should be escaped: ^ $ * ";
var newString = Utils.escapeRegexSymbols(sampleString);
```
```TypeScript
var sampleString: string = "All of these should be escaped: ^ $ * ";
var newString: string = Utils.escapeRegexSymbols(sampleString);
```

### convertString() function

Converts a string value to a number or boolean;

 ```JavaScript
var stringToBoolean = "true";
var booleanValue = Utils.convertString(stringToBoolean);

var stringToNumber = "23";
var numberValue = Utils.convertString(stringToNumber);
```
```TypeScript
const stringToBoolean :string = "true";
const booleanValue :boolean = Utils.convertString(stringToBoolean);

const stringToNumber: string = "23";
const numberValue :number = Utils.convertString(stringToNumber);
```
### getDisplayDensity() function

Returns the display density of the device.

```JavaScript
var displayDensity = Utils.layout.getDisplayDensity();
```
```TypeScript
const displayDensity = Utils.layout.getDisplayDensity();
```

### toDevicePixels() function

Converts value from device independent pixels to device pixels.

```JavaScript
var devicePixels = Utils.layout.toDevicePixels(<dip>);
```
```TypeScript
const devicePixels = Utils.layout.toDevicePixels(<dip>);
```

### toDeviceIndependentPixels() function

Convert value to device independent pixels.

```JavaScript
var deviceIndependentPixels = Utils.layout.toDeviceIndependentPixels(<px>);
```
```TypeScript
const deviceIndependentPixels = Utils.layout.toDeviceIndependentPixels(<px>);
```

### round() method

Rounds value used in layout.

```JavaScript
var value = Utils.layout.round(<number_value>);
```
```TypeScript
var value = Utils.layout.round(<number_value>);
```
> If we set `123.56px` as a input the returned value will be `124px`. 

### executeOnMainThread() method

The method checks if the current thread is the main thread. It will directly call the passed function if it is, or dispatches it to the main thread otherwise.

```JavaScript
Utils.executeOnMainThread(() => {
    // ...
})
```
```TypeScript
Utils.executeOnMainThread(() => {
    // ...
})
```

### mainThreadify() method

The method returns a function wrapper which executes the supplied function on the main thread. The wrapper behaves like the original function and passes all of its arguments BUT discards its return value.

```JavaScript
Utils.mainThreadify(() => {
    // ...
})
```
```TypeScript
Utils.mainThreadify(() => {
    // ...
})
```

## Platform specific methods

### Android

#### getApplication() function

Returns an instance of native Android application The returned value will be of type [`android.app.Application`](https://developer.android.com/reference/android/app/Application.html).

 ```JavaScript
var application = Utils.android.getApplication();
```
```TypeScript
const application = Utils.android.getApplication();
```

#### getApplicationContext() function

Returns the Android application context. The returned value will be of type [`android.content.Context`](https://developer.android.com/reference/android/content/Context.html).

 ```JavaScript
var context = Utils.android.getApplicationContext();
```
```TypeScript
const context = Utils.android.getApplicationContext();
```

#### getInputMethodManager() function

Returns an instance of native Android input method manager. The returned value will be an 
[`android.view.inputmethod.InputMethodManager`](https://developer.android.com/reference/android/view/inputmethod/InputMethodManager.html)

 ```JavaScript
var inputMethodManager = Utils.android.getInputMethodManager();
```
```TypeScript
const inputMethodManager = Utils.android.getInputMethodManager();
```

#### showSoftInput() function

Show keyboard for a specific element.

 ```XML
<TextField id="textfieldid" hint="Target field" />
<Button text="Show keyboard" tap="showKeyboard" class="btn btn-primary btn-active"/>
```
```JavaScript
export function showKeyboard(args) {
    var button = args.object;
    var page = button.page;
    var textField = page.getViewById("textfieldid");
    Utils.android.showSoftInput(textField.android);
}
```
```TypeScript
import { Page, TextField, Button, Utils } from "@nativescript/core";

export function showKeyboard(args: EventData) {
    var button: Button = <Button>args.object;
    var page: Page = <Page>button.page;
    var textField: TextField = <TextField> page.getViewById("textfieldid");
    Utils.android.showSoftInput(textField.android);
}
```

#### dismissSoftInput() function

Hides the soft input method, usually a soft keyboard.

 ```XML
<TextField id="textfieldid" hint="Target field" />
<Button text="Hide keyboard" tap="dismissSoftInput" class="btn btn-primary btn-active"/>
```
```JavaScript
export function dismissSoftInput(args) {
    Utils.android.dismissSoftInput();
}
```
```TypeScript
export function dismissSoftInput(args: EventData) {
    Utils.android.dismissSoftInput();
}
```

#### stringArrayToStringSet() function

Converts a string array into a String [hash set](http://developer.android.com/reference/java/util/HashSet.html).

```JavaScript
var stringArr = ["a", "b", "c"]
var stringSet = Utils.android.collections.stringArrayToStringSet(stringArr);
```
```TypeScript
const stringArr = ["a", "b", "c"]
const stringSet = Utils.android.collections.stringArrayToStringSet(stringArr);
```

#### stringSetToStringArray() function

Converts a string hash set into array of strings

```JavaScript
var hashSet = new java.util.HashSet();
var string1 = new java.lang.String("item1");
var string2 = new java.lang.String("item2");
var string3 = new java.lang.String("item3");
    
hashSet.add(string1);
hashSet.add(string2);
hashSet.add(string3);

var stringArray = Utils.android.collections.stringSetToStringArray(hashSet);
```
```TypeScript
const hashSet = new java.util.HashSet();
const string1 = new java.lang.String("item1");
const string2 = new java.lang.String("item2");
const string3 = new java.lang.String("item3");
    
hashSet.add(string1);
hashSet.add(string2);
hashSet.add(string3);

var stringArray = Utils.android.collections.stringSetToStringArray(hashSet);
```

#### getDrawableId() function

Returns the drawable id from a given resource name

```JavaScript
var drawableId = Utils.android.resources.getDrawableId("icon");
```
```TypeScript
const drawableId: number = Utils.android.resources.getDrawableId("icon");
```

#### getStringId() function

Returns the id of the string from the resources, while using its `name`

```JavaScript
var stringId = Utils.android.resources.getStringId("resource_string_name");
```
```TypeScript
const stringId: string = Utils.android.resources.getStringId("resource_string_name");
```

#### getId() function

Returns the id from a resource, while passing string with resource type and name. eg: `:drawable/<resource_name>`, `:string/<resource_name>`

```JavaScript
var id = Utils.android.resources.getId("resource_name");
```
```TypeScript
const id: number = Utils.android.resources.getId("resource_name");
```

#### getPalleteColor() function

Returns a color from the current theme using the resource color name.

```JavaScript
var context = Utils.android.getApplicationContext();
var currentThemeColor = Utils.android.resources.getPalleteColor("resource_color_name", context);
```
```TypeScript
const context = Utils.android.getApplicationContext();
const currentThemeColor: number = Utils.android.resources.getPalleteColor("resource_color_name", context);
```

### iOS

#### jsArrayToNSArray() function

Converts a JavaScript array to a [NSArray](https://developer.apple.com/library/ios/documentation/Cocoa/Reference/Foundation/Classes/NSArray_Class/)

```JavaScript
var jsArray = ["item1", "item2", "item3"];
var nsArray = Utils.ios.collections.jsArrayToNSArray(jsArray);
```
```TypeScript
const jsArray: Array<string> = ["item1", "item2", "item3"];
const nsArray = Utils.ios.collections.jsArrayToNSArray(jsArray);
```

#### nsArrayToJSArray() function

Converts a NSArray to a JavaScript array.

```JavaScript
var nsArray = new NSArray(["item1", "item2", "item3"]);
var jsArray = Utils.ios.collections.nsArrayToJSArray(nsArray);
```
```TypeScript
const nsArray = new NSArray(["item1", "item2", "item3"]);
const jsArray: Array<any> = Utils.ios.collections.nsArrayToJSArray(nsArray);
```

#### MajorVersion() function

Returns a `number` with the iOS device major version(eg 8.1 will return 8). 

```JavaScript
console.log("iOS MajorVersion "+ Utils.ios.MajorVersion);
```
```TypeScript
console.log("iOS MajorVersion "+ Utils.ios.MajorVersion);
```

#### openFile() function

Opens file with associated application, while using file path.

```JavaScript
Utils.ios.openFile(<file_path>);
```
```TypeScript
Utils.ios.openFile(<file_path>);
```
