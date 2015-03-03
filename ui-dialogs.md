---
nav-title: User Interface Dialogs
title: Dialogs
description: Learn how to create alerts, confirmations, prompts, logins and other dialogs in your NativeScript apps.
position: 9
---

# User Interface Dialogs

NativeScript lets you create dialogs in your app in a manner similar to the web browser. You can create alerts, confirmations, prompts, logins and dialogs that require action.

* [Alert](#alert)
* [Confirm](#confirm)
* [Prompt](#prompt)
* [Login](#login)
* [Action](#action)

> You can call dialog functions with parameters similar to the web browser API or the `options` object. All dialog functions return a `Promise` object.

### Alert

**Web-Browser Style** 

```JavaScript
var dialogs = require("ui/dialogs");
dialogs.alert("Your message").then(function() {
  console.log("Dialog closed!");
});
```
```TypeScript
import dialogs = require("ui/dialogs");
dialogs.alert("Your message").then(()=> {
  console.log("Dialog closed!");
});
```

**Using an Options Object**

```JavaScript
var dialogs = require("ui/dialogs");
dialogs.alert({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your button text"
}).then(function () {
  console.log("Dialog closed!");
});
```
```TypeScript
import dialogs = require("ui/dialogs");
dialogs.alert({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your button text"
}).then(()=> {
  console.log("Dialog closed!");
});
```

### Confirm

**Web-Browser Style**

```JavaScript
var dialogs = require("ui/dialogs");
dialogs.confirm("Your message").then(function (result) {
  console.log("Dialog result: " + result);
});
```
```TypeScript
import dialogs = require("ui/dialogs");
dialogs.confirm("Your message").then(result => {
  console.log("Dialog result: " + result);
});
```

**Using an Options Object**

```JavaScript
var dialogs = require("ui/dialogs");
dialogs.confirm({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your button text",
  cancelButtonText: "Cancel text",
  neutralButtonText: "Neutral text"
}).then(function (result) {
  // result argument is boolean
  console.log("Dialog result: " + result);
});
```
```TypeScript
import dialogs = require("ui/dialogs");
dialogs.confirm({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your button text",
  cancelButtonText: "Cancel text",
  neutralButtonText: "Neutral text"
}).then(result => {
  // result argument is boolean
  console.log("Dialog result: " + result);
});
```

> The dialog result argument is boolean. The result is true if the dialog is closed with the OK button. The result is false if closed with the Cancel button. The result is undefined if closed with a neutral button.

### Prompt

**Web-Browser Style**

```JavaScript
var dialogs = require("ui/dialogs");
// Second argument is optional.
dialogs.prompt("Your message", "Default text").then(function (r) {
  console.log("Dialog result: " + r.result + ", text: " + r.text);
});
```
```TypeScript
import dialogs = require("ui/dialogs");
// Second argument is optional.
dialogs.prompt("Your message", "Default text").then(r => {
  console.log("Dialog result: " + r.result + ", text: " + r.text);
});
```

**Using an Options Object**

```JavaScript
var dialogs = require("ui/dialogs");
// inputType property can be dialogs.inputType.password or dialogs.inputType.text.
dialogs.prompt({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your button text",
  cancelButtonText: "Cancel text",
  neutralButtonText: "Neutral text",
  defaultText: "Default text",
  inputType: dialogs.inputType.password
}).then(function (r) {
  console.log("Dialog result: " + r.result + ", text: " + r.text);
});
```
```TypeScript
import dialogs = require("ui/dialogs");
// inputType property can be dialogs.inputType.password or dialogs.inputType.text.
dialogs.prompt({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your button text",
  cancelButtonText: "Cancel text",
  neutralButtonText: "Neutral text",
  defaultText: "Default text",
  inputType: dialogs.inputType.password
}).then(r => {
  console.log("Dialog result: " + r.result + ", text: " + r.text);
});
```
> The dialog result argument is an object with two properties: result and text (entered text). The result property is true if the dialog is closed with the OK button, false if closed with the Cancel button or undefined if closed with a neutral button.

### Login

**Web-Browser Style**

```JavaScript
var dialogs = require("ui/dialogs");
// User name and password arguments are optional.
dialogs.login("Your message", "User name", "Password").then(function (r) {
  console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
});
```
```TypeScript
import dialogs = require("ui/dialogs");
// User name and password arguments are optional.
dialogs.login("Your message", "User name", "Password").then(r => {
  console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
});
```

**Using an Options Object**

```JavaScript
var dialogs = require("ui/dialogs");
dialogs.login({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your button text",
  cancelButtonText: "Cancel text",
  neutralButtonText: "Neutral text",
  userName: "User name",
  password: "Password"
}).then(function (r) {
  console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
});
```
```TypeScript
import dialogs = require("ui/dialogs");
dialogs.login({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your button text",
  cancelButtonText: "Cancel text",
  neutralButtonText: "Neutral text",
  userName: "User name",
  password: "Password"
}).then(r => {
  console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
});
```

> The dialog result argument is an object with three properties: result, userName and password (entered user name and password). The result property is true if the dialog is closed with the OK button, false if closed with the Cancel button or undefined if closed with a neutral button.

### Action

**Web-Browser Style**

```JavaScript
var dialogs = require("ui/dialogs");
dialogs.action("Your message", "Cancel button text", ["Option1", "Option2"]).then(function (result) {
  console.log("Dialog result: " + result)
});
```
```TypeScript
import dialogs = require("ui/dialogs");
dialogs.action("Your message", "Cancel button text", ["Option1", "Option2"]).then(result => {
  console.log("Dialog result: " + result)
});
```

**Using an Options Object**

```JavaScript
var dialogs = require("ui/dialogs");
dialogs.action({
  message: "Your message",
  cancelButtonText: "Cancel text",
  actions: ["Option1", "Option2"]
}).then(function (result) {
  console.log("Dialog result: " + result)
});
```
```TypeScript
import dialogs = require("ui/dialogs");
dialogs.action({
  message: "Your message",
  cancelButtonText: "Cancel text",
  actions: ["Option1", "Option2"]
}).then(result => {
  console.log("Dialog result: " + result)
});
```
> The dialog result argument is a string (the text of the clicked option or the text of the cancel button).
