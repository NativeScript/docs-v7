---
nav-title: "UI Dialogs"
title: "UI Dialogs"
description: "NativeScript Documentation: UI Dialogs"
position: 101
---

# UI Dialogs
### How it works?
You can show native platform dialogs using API similar to the web browser. For example:
```JavaScript
var dialogs = require("ui/dialogs");
dialogs.alert("Your message");
```
```TypeScript
import dialogs = require("ui/dialogs");
dialogs.alert("Your message");
```
Available dialogs are: **alert**, **confirm**, **prompt**, **login** and **action**.

*__Important__: Dialog functions can be called with parameters similar to the web browser API or options object. All dialog functions will return Promise<T>!*

### Alert
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
OR
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
OR
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
*__Important__: Dialog result argument is boolean. True if the dialog is closed with OK button, false if closed with Cancel button, undefined if closed with neutral button.*

### Prompt
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
OR
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
*__Important__: Dialog result argument is object with two properties: result and text (entered text). Result property is true if the dialog is closed with OK button, false if closed with Cancel button, undefined if closed with neutral button.*

### Login
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
OR
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
*__Important__: Dialog result argument is object with three properties: result, userName and password (entered user name and password). Result property is true if the dialog is closed with OK button, false if closed with Cancel button, undefined if closed with neutral button.*

### Action
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
OR
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
*__Important__: Dialog result argument is string (clicked option text or cancel button text).*

