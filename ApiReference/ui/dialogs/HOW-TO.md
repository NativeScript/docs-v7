---
nav-title: "dialogs How-To"
title: "How-To"
description: "Examples for using dialogs"
---
# Dialogs
Displaying dialogs requires the "ui/dialogs" module.
``` JavaScript
var dialogs = require("ui/dialogs");
```
### Action
``` JavaScript
var options = {
    title: "Race Selection",
    message: "Choose your race",
    cancelButtonText: "Cancel",
    actions: ["Human", "Elf", "Dwarf", "Orc"]
};
dialogs.action(options).then(function (result) {
    console.log(result);
});
```
### Confirm
``` JavaScript
var options = {
    title: "Race Selection",
    message: "Are you sure you want to be an Elf?",
    okButtonText: "Yes",
    cancelButtonText: "No",
    neutralButtonText: "Cancel"
};
dialogs.confirm(options).then(function (result) {
    // result can be true/false/undefined
    console.log(result);
});
```
### Alert
``` JavaScript
var options = {
    title: "Race Selection",
    message: "Race Chosen: Elf",
    okButtonText: "OK"
};
dialogs.alert(options).then(function () {
    console.log("Race Chosen!");
});
```
### Login
``` JavaScript
var options = {
    title: "Login",
    message: "Login",
    username: "john_doe",
    password: ""
};
dialogs.login(options).then(function (loginResult) {
    // true or false.
    console.log(loginResult.result);
});
```
### Prompt
``` JavaScript
var options = {
    title: "Name",
    defaultText: "Enter your name",
    inputType: dialogs.inputType.text
};
dialogs.prompt(options).then(function (result) {
    console.log("Hello, " + result.text);
});
```
