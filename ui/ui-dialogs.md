---
title: Dialogs
description: Learn how to create alerts, confirmations, prompts, logins and other dialogs in your NativeScript apps.
position: 7
slug: dialogs
previous_url: /ui-dialogs
---

# User Interface Dialogs

NativeScript lets you create dialogs in your app in a manner similar to the web browser. You can create alerts, confirmations, prompts, logins and dialogs that require action.

* [Alert](#alert)
* [Confirm](#confirm)
* [Prompt](#prompt)
* [Login](#login)
* [Action](#action)
{% angular %}* [Custom dialog](#custom-dialog)
  * [Showing custom dialog](#showing-custom-dialog)
  * [Passing parameters](#passing-parameters)
  * [Returning a result](#returning-a-result)
{% endangular %}

> You can call dialog functions with parameters similar to the web browser API or the `options` object. All dialog functions return a `Promise` object. **In both iOS and Android, dialogs will not block your code execution!**

## Alert

**Web browser style**

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

**Using an options object**

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

## Confirm

**Web browser style**

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

**Using an options object**

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

> The dialog result argument is boolean. The result is __true__ if the dialog is closed with the OK button. The result is __false__ if closed with the Cancel button. The result is undefined if closed with a neutral button.

## Prompt

**Web browser style**

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

**Using an options object**

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
> The dialog result argument is an object with two properties: result and text (entered text). The result property is __true__ if the dialog is closed with the OK button, __false__ if closed with the Cancel button or undefined if closed with a neutral button.

## Login

**Web browser style**

```JavaScript
var dialogs = require("ui/dialogs");
// User name and password arguments are optional.
dialogs.login("Your message", "User name label text", "Password label text").then(function (r) {
  console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
});
```
```TypeScript
import dialogs = require("ui/dialogs");
// User name and password arguments are optional.
dialogs.login("Your message", "User name label text", "Password label text").then(r => {
  console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
});
```

**Using an options object**

```JavaScript
var dialogs = require("ui/dialogs");
dialogs.login({
  title: "Your title",
  message: "Your message",
  okButtonText: "Your button text",
  cancelButtonText: "Cancel button text",
  neutralButtonText: "Neutral button text",
  userName: "User name label text",
  password: "Password label text"
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
  cancelButtonText: "Cancel button text",
  neutralButtonText: "Neutral button text",
  userName: "User name label text",
  password: "Password label text"
}).then(r => {
  console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
});
```

> The dialog result argument is an object with three properties: result, userName and password (entered user name and password). The result property is __true__ if the dialog is closed with the OK button, __false__ if closed with the Cancel button or undefined if closed with a neutral button.

## Action

**Web browser style**

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

**Using an options object**

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
{% angular %}
## Custom dialog

You can also create dialogs with custom content. All the needed types live inside the `nativescript-angular/modal-dialog` module.

### Showing custom dialog

Start by getting a reference to `ModalDialogService` by injecting it in your component:

``` TypeScript
import {ModalDialogService, ModalDialogOptions, ModalDialogHost} from "nativescript-angular/modal-dialog";

@Component({
    // ...
    providers: [ModalDialogService],
})
export class CustomDialogTest {
    public result: string;
    constructor(private modalService: ModalDialogService) { }
    ...
}
```
Ignore the `result` field for now&mdash;we will use it later on.

Make sure you have added `modal-dialog-host` somewhere inside the your component template. If you skip it&mdash;you will get an exception when trying to show the dialog.

``` TypeScript
@Component({
    directives: [ModalDialogHost],
    template: `
    <StackLayout modal-dialog-host>
        <Button text="show" (tap)="show()"></Button>
        <Label [text]="'RESULT: ' + result"></Label>
    </StackLayout>`,
    // ...
})
```

Call the `showModal` method of the dialog service passing the type of the component that should be loaded in the dialog:

``` TypeScript
public show() {
    this.modalService.showModal(DialogContent, {});
}
```

### Passing parameters

You can pass parameters to the dialog component when calling the `showModal` method. You can also specify if the dialog should be shown full screen.

``` TypeScript
var options: ModalDialogOptions = {
    context: { promptMsg: "This is the prompt message!" },
    fullscreen: true
};

this.modal.showModal(DialogContent, options)
```

> **TIP:** By design on iPhone, a modal page appears only in full screen.

Inside the `DialogContent`, you can get the parameters by injecting a `ModalDialogParams`:

``` Typescript
import {Component} from '@angular/core';
import {ModalDialogParams} from "nativescript-angular/modal-dialog";

@Component({
    selector: 'modal-content',
    template: `
    <StackLayout margin="24" horizontalAlignment="center" verticalAlignment="center">
        <Label [text]="prompt"></Label>
        <StackLayout orientation="horizontal" marginTop="12">
            <Button text="ok" (tap)="close('OK')"></Button>
            <Button text="cancel" (tap)="close('Cancel')"></Button>
        </StackLayout>
    </StackLayout>
    `
})
export class DialogContent {
    public prompt: string;
    constructor(private params: ModalDialogParams) {
        this.prompt = params.context.promptMsg;
    }

    public close(res: string) {
        // ...
    }
}
```

The `params.context` is the same object as `options.context` passed to the `showModal` method.

### Returning a result

To close the dialog, call the `closeCallback` function of the dialog params. 

```
public close(result: string) {
    this.params.closeCallback(result);
}
```

Note that the `showModal` function actually returns a promise that is resolved when the dialog closes. The value you pass to the `closeCallback` will be the value returned by the promise. 
Let's modify the `show` function in the main component so that it shows the result when the dialog closes:

``` TypeScript
public show(fullscreen: boolean) {
    var options: ModalDialogOptions = {
        context: { promptMsg: "This is the prompt message!" },
        fullscreen: true
    };

    this.modal.showModal(DialogContent, options)
        .then((dialogResult: string) => { this.result = dialogResult; })
}
```
{% endangular %}
