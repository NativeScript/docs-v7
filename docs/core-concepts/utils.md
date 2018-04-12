---
title: Utils
description: Utils/Utils module
position: 120
slug: utils
---

# Utils

To use the functionality provided by the `utils/utils` module, first require/import the module:

```JavaScript
var utilsModule = require("tns-core-modules/utils/utils");
```
```TypeScript
import * as utils from "utils/utils";
```

### isFileOrResourcePath() function

Verify if the specified `path` points to a resource or a local file. The function returns a boolean value of:

- `true` - if the path has a valid path structure
- `false` - if the path is not a file path 

```JavaScript
var path = "res://icon";
var value = utilsModule.isFileOrResourcePath(path);
```
```TypeScript
const path: string  = "res://icon";
const value: boolean = utils.isFileOrResourcePath(path);
```

### isDataURI() function

Checks if the specified URI is a [data URI](http://en.wikipedia.org/wiki/Data_URI_scheme).

- Returns `true` if the string is data URL, otherwise `false`

```JavaScript
var url = "<url>";
var value = utilsModule.isDataURI(url);
```
```TypeScript
const url: string = "<url>"; 
const value:boolean = utils.isDataURI(url);
```

### openUrl() function

Open an URL on device with the default browser

```JavaScript
utilsModule.openUrl("https://docs.nativescript.org/core-concepts/utils")
```
```TypeScript
utils.openUrl("https://docs.nativescript.org/core-concepts/utils")
```


### escapeRegexSymbols() function

 Escapes special regex symbols (., *, ^, $, etc.) in string in order to create a valid regex from it.

 ```JavaScript
var samplestring = "All of these should be escaped: ^ $ * ";
var newString = utilsModule.escapeRegexSymbols(samplestring);
```
```TypeScript
var samplestring: string = "All of these should be escaped: ^ $ * ";
var newString: string = utils.escapeRegexSymbols(samplestring);
```

### convertString() function

Converts a string value to a number or boolean;

 ```JavaScript
var stringToBoolean = "true";
var booleanValue = utilsModule.convertString(stringToBoolean);

var stringToNumber = "23";
var numberValue = utilsModule.convertString(stringToNumber);
```
```TypeScript
const stringToBoolean :string = "true";
const booleanValue :boolean = utils.convertString(stringToBoolean);

const stringToNumber: string = "23";
const numberValue :number = utils.convertString(stringToNumber);
```
### getDisplayDensity() function

Returns the display density of the device.

```JavaScript
var displayDensity = utilsModule.layout.getDisplayDensity();
```
```TypeScript
const displayDensity = utils.layout.getDisplayDensity();
```

### toDevicePixels() function

Converts value from device independent pixels to device pixels.

```JavaScript
var devicePixels = utilsModule.layout.toDevicePixels(<dip>);
```
```TypeScript
const devicePixels = utils.layout.toDevicePixels(<dip>);
```

### toDeviceIndependentPixels() function

Convert value to device independent pixels.

```JavaScript
var deviceIndependentPixels = utilsModule.layout.toDeviceIndependentPixels(<px>);
```
```TypeScript
const deviceIndependentPixels = utils.layout.toDeviceIndependentPixels(<px>);
```

### round() method

Rounds value used in layout.

```JavaScript
var value = utilsModule.layout.round(<number_value>);
```
```TypeScript
var value = utils.layout.round(<number_value>);
```
> If we set `123.56px` as a input the returned value will be `124px`. 

## Platform specific methods

### Android

#### getApplication() function

Returns an instance of native Android application The returned value will be of type [`android.app.Application`](https://developer.android.com/reference/android/app/Application.html).

 ```JavaScript
var application = utilsModule.ad.getApplication();
```
```TypeScript
const application = utils.ad.getApplication();
```

#### getApplicationContext() function

Returns the Android application context. The returned value will be of type [`android.content.Context`](https://developer.android.com/reference/android/content/Context.html).

 ```JavaScript
var context = utilsModule.ad.getApplicationContext();
```
```TypeScript
const context = utils.ad.getApplicationContext();
```

#### getInputMethodManager() function

Returns an instance of native Android input method manager. The returned value will be an 
[`android.view.inputmethod.InputMethodManager`](https://developer.android.com/reference/android/view/inputmethod/InputMethodManager.html)

 ```JavaScript
var inputMethodManager = utilsModule.ad.getInputMethodManager();
```
```TypeScript
const inputMethodManager = utils.ad.getInputMethodManager();
```

#### showSoftInput() function

Show keyboard for a specific element.

 ```XML
<TextField id="textfieldid" hint="Target field" />
<Button text="Show keyboard" tap="showKeyboard" class="btn btn-primary btn-active"/>
```
```JavaScript
function showKeyboard(args) {
    var button = args.object;
    var page = button.page;
    var textfield = page.getViewById("textfieldid");
    utilsModule.ad.showSoftInput(textfield.android);
}
exports.showKeyboard = showKeyboard;
```
```TypeScript
import { Page } from 'ui/page';
import { TextField } from "ui/text-field";
import { Button } from "ui/button"

export function showKeyboard(args:EventData){
    var button: Button = <Button>args.object;
    var page: Page = <Page>button.page;
    var textfield: TextField = <TextField> page.getViewById("textfieldid");
    utils.ad.showSoftInput(textfield.android);
}
```

#### dismissSoftInput() function

Hides the soft input method, usually a soft keyboard.

 ```XML
<TextField id="textfieldid" hint="Target field" />
<Button text="Hide keyboard" tap="dismissSoftInput" class="btn btn-primary btn-active"/>
```
```JavaScript
function dismissSoftInput(args) {
    utilsModule.ad.dismissSoftInput();
}
exports.dismissSoftInput = dismissSoftInput;
```
```TypeScript
export function dismissSoftInput(args: EventData){
    utils.ad.dismissSoftInput();
}
```

#### stringArrayToStringSet() function

Converts a string array into a String [hash set](http://developer.android.com/reference/java/util/HashSet.html).

```JavaScript
var stringArr = ["a", "b", "c"]
var stringSet = utilsModule.ad.collections.stringArrayToStringSet(stringArr);
```
```TypeScript
const stringArr = ["a", "b", "c"]
const stringSet = utils.ad.collections.stringArrayToStringSet(stringArr);
```

#### stringSetToStringArray() function

Converts a string hash set into array of strings

```JavaScript
var hashset = new java.util.HashSet();
var string1 = new java.lang.String("item1");
var string2 = new java.lang.String("item2");
var string3 = new java.lang.String("item3");
    
hashset.add(string1);
hashset.add(string2);
hashset.add(string3);

var stringArray = utilsModule.ad.collections.stringSetToStringArray(hashset);
```
```TypeScript
const hashset = new java.util.HashSet();
const string1 = new java.lang.String("item1");
const string2 = new java.lang.String("item2");
const string3 = new java.lang.String("item3");
    
hashset.add(string1);
hashset.add(string2);
hashset.add(string3);

var stringArray = utils.ad.collections.stringSetToStringArray(hashset);
```

#### getDrawableId() function

Returns the drawable id from a given resource name

```JavaScript
var drawableId = utilsModule.ad.resources.getDrawableId("icon");
```
```TypeScript
const drawableId:number = utils.ad.resources.getDrawableId("icon");
```

#### getStringId() function

Returns the id of the string from the resources, while using its `name`

```JavaScript
var stringId = utilsModule.ad.resources.getStringId("resource_string_name");
```
```TypeScript
const stringId: string = utils.ad.resources.getStringId("resource_string_name");
```

#### getId() function

Returns the id from a resource, while passing string with resource type and name. eg: `:drawable/<resource_name>`, `:string/<resource_name>`

```JavaScript
var id = utilsModule.ad.resources.getId("resource_name");
```
```TypeScript
const id: number = utils.ad.resources.getId("resource_name");
```

#### getPalleteColor() function

Returns a color from the current theme using the resource color name.

```JavaScript
var context = utilsModule.ad.getApplicationContext();
var currentThemeColor = utilsModule.ad.resources.getPalleteColor("resource_color_name", context);
```
```TypeScript
const context = utils.ad.getApplicationContext();
const currentThemeColor: number = utils.ad.resources.getPalleteColor("resource_color_name", context);
```

### iOS

#### jsArrayToNSArray() function

Converts a JavaScript array to a [NSArray](https://developer.apple.com/library/ios/documentation/Cocoa/Reference/Foundation/Classes/NSArray_Class/)

```JavaScript
var jsArray = ["item1", "item2", "item3"];
var nsarray = utilsModule.ios.collections.jsArrayToNSArray(jsArray);
```
```TypeScript
const jsArray:Array<string> = ["item1", "item2", "item3"];
const nsarray = utils.ios.collections.jsArrayToNSArray(jsArray);
```

#### nsArrayToJSArray() function

Converts a NSArray to a JavaScript array.

```JavaScript
var nsarray = new NSArray(["item1", "item2", "item3"]);
var jsarray = utilsModule.ios.collections.nsArrayToJSArray(nsarray);
```
```TypeScript
const nsarray = new NSArray(["item1", "item2", "item3"]);
const jsarray: Array<any> = utils.ios.collections.nsArrayToJSArray(nsarray);
```

#### isLandscape() function

Returns `true` if current orientation is Landscape.
 
```JavaScript
var value = utilsModule.ios.isLandscape();
```
```TypeScript
const value: boolean = utils.ios.isLandscape()
```

#### MajorVersion() function

Returns a `number` with the iOS device major version(eg 8.1 will return 8). 

```JavaScript
console.log("iOS MajorVersion "+ utilsModule.ios.MajorVersion);
```
```TypeScript
console.log("iOS MajorVersion "+ utils.ios.MajorVersion);
```

#### openFile() function

Opens file with associated application, while using file path.

```JavaScript
utilsModule.ios.openFile(<file_path>);
```
```TypeScript
utils.ios.openFile(<file_path>);
```
