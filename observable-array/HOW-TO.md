---
nav-title: "observable-array How-To"
title: "observable-array How-To"
description: "Examples for using observable-array"
---
# Observable Array module
``` JavaScript
var observableArray = require("observable-array");
```
### Create ObservableArray from array.
``` JavaScript
var sa = [1, 2, 3];
var array = new observableArrayDef.ObservableArray(sa);

```
### Create ObservableArray from arguments.
``` JavaScript
var array = new observableArrayDef.ObservableArray(1, 2, 3);

```
### Create ObservableArray with specific length.
``` JavaScript
var array = new observableArrayDef.ObservableArray(100);

```
### Get item at specified index using getItem(index) method.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
var firstItem = array.getItem(0);
var secondItem = array.getItem(1);
var thirdItem = array.getItem(2);

```
### Set item at specified index using setItem(index, item) method.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
array.setItem(1, 5);

```
### Use concat() method to combine ObservableArray with array.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
var result = array.concat([4, 5, 6]);

```
### Use concat() method to append array to ObservableArray and handle "change" event.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);

array.on(observableArrayDef.knownEvents.change, function (args) {
    // Argument (args) is ChangedData<T>.
    // args.eventName is "change".
    // args.action is "add".
    // args.index is equal to the array length.
    // args.removed.length is 0.
    // args.addedCount is equal to number of added items.
});

array.concat([4, 5, 6]);

```
### Use join() method to convert ObservableArray to comma separated string.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
var result = array.join();

```
### Use join(separator) method to convert ObservableArray to string separated with specified separator.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
var result = array.join(".");

```
### Use pop() method to remove the last element.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
var result = array.pop();

```
### Handle "change" event to know more info about the change after calling pop() method.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
var index = array.length - 1;

array.on("change", function (args) {
    // Argument (args) is ChangedData<T>.
    // args.eventName is "change".
    // args.action is "delete".
    // args.index is equal to the array length - 1.
    // args.removed.length is 1.
    // args.addedCount is 0.
});

array.pop();

```
### Use push() method to add single element to the array.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
var result = array.push(4);

```
### Handle "change" event to know more info about the change after calling push() method with single element.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
array.on("change", function (args) {
    // Argument (args) is ChangedData<T>.
    // args.eventName is "change".
    // args.action is "add".
    // args.index is equal to the array length.
    // args.removed.length is 0.
    // args.addedCount is 1.
});

array.push(4);

```
### Use push() method to add multiple elements to the array.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
var result = array.push(4, 5, 6);

```
### Handle "change" event to know more info about the change after calling push() method with multiple elements.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
array.on("change", function (args) {
    // Argument (args) is ChangedData<T>.
    // args.eventName is "change".
    // args.action is "add".
    // args.index is equal to the array length.
    // args.removed.length is 0.
    // args.addedCount is equal to the number of added items.
});

array.push(4, 5, 6);

```
### Use push() method to add multiple elements from source array to the ObservableArray.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
var result = array.push([4, 5, 6]);

```
### Handle "change" event to know more info about the change after calling push() method with multiple elements from source array.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
array.on("change", function (args) {
    // Argument (args) is ChangedData<T>.
    // args.eventName is "change".
    // args.action is "add".
    // args.index is equal to the array length.
    // args.removed.length is 0.
    // args.addedCount is equal to the number of added items.
});

array.push([4, 5, 6]);

```
### Use reverse() method to reverse the elements order of the ObservableArray.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
var result = array.reverse();

```
### Use shift() method to remove the first element of the array.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
var result = array.shift();

```
### Handle "change" event to know more info about the change after calling shift() method.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);

array.on("change", function (args) {
    // Argument (args) is ChangedData<T>.
    // args.eventName is "change".
    // args.action is "delete".
    // args.index is 0.
    // args.removed.length is 1.
    // args.addedCount is 0.
});

array.shift();

```
### Use slice() method to return array with all ObservableArray elements.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
var result = array.slice();

```
### Use slice(star, end) method to return section of the array.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3, 4, 5]);
var result = array.slice(2, 4);

```
### Use sort() method to sort the array.
``` JavaScript
var array = new observableArrayDef.ObservableArray([3, 2, 1]);
var result = array.sort();

```
### Use sort(compareFunction) method to sort the array with your own comparing logic.
``` JavaScript
var array = new observableArrayDef.ObservableArray([10, 100, 1]);
var result = array.sort(function (a, b) {
    return a - b;
});

```
### Use splice(start, deleteCount) method to delete elements in the array.
``` JavaScript
var array = new observableArrayDef.ObservableArray(["one", "two", "three"]);
var result = array.splice(1, 2);

```
### Handle "change" event to know more info about the change after calling splice(start, deleteCount) method.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);

array.on("change", function (args) {
    // Argument (args) is ChangedData<T>.
    // args.eventName is "change".
    // args.action is "splice".
    // args.index is the start index.
    // args.removed.length is equal to the number of deleted items.
    // args.addedCount is 0.
});

array.splice(1, 2);

```
### Use splice(start, deleteCount, ...arguments) method to remove and insert elements in the array.
``` JavaScript
var array = new observableArrayDef.ObservableArray(["one", "two", "three"]);
var result = array.splice(1, 2, "six", "seven");

```
### Handle "change" event to know more info about the change after calling splice(start, deleteCount, ...arguments) method.
``` JavaScript
var array = new observableArrayDef.ObservableArray(["one", "two", "three"]);

array.on("change", function (args) {
    // Argument (args) is ChangedData<T>.
    // args.eventName is "change".
    // args.action is "splice".
    // args.index is the start index.
    // args.removed.length is equal to the number of deleted items.
    // args.addedCount is equal to the delta between number of inserted items and number of deleted items but not less than 0.
});

array.splice(1, 2, "six", "seven", "eight");

```
### Use unshift(item1, item2... itemN) method to insert elements from the start of the array.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
var result = array.unshift(4, 5);

```
### Handle "change" event to know more info about the change after calling unshift(item1, item2... itemN) method.
``` JavaScript
var array = new observableArrayDef.ObservableArray([1, 2, 3]);
array.on("change", function (args) {
    // Argument (args) is ChangedData<T>.
    // args.eventName is "change".
    // args.action is "add".
    // args.index is 0.
    // args.removed.length is 0.
    // args.addedCount is equal to the number of inserted items.
});

array.unshift(4, 5);

```
### Use indexOf(item) method to get the index of the desired item in the array.
``` JavaScript
var array = new observableArrayDef.ObservableArray(["one", "two", "three"]);
var result = array.indexOf("two");

```
### Use indexOf(item, fromIndex) method to get the index of the desired item in the array starting from specified index.
``` JavaScript
var array = new observableArrayDef.ObservableArray(["one", "two", "three"]);
var result = array.indexOf("two", 2);

```
### Use lastIndexOf(item) method to get the last index of the desired item in the array.
``` JavaScript
var result = array.lastIndexOf("two");

```
### Use lastIndexOf(item, fromIndex) method to get the last index of the desired item in the array starting from specified index.
``` JavaScript
var array = new observableArrayDef.ObservableArray(["one", "two", "two", "one", "three"]);
var result = array.lastIndexOf("two", 1);

```
