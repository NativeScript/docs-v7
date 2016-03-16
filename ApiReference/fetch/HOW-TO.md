---
nav-title: "fetch How-To"
title: "How-To"
description: "Examples for using fetch"
---
### Get Response from URL
``` JavaScript
fetch("https://httpbin.org/get").then(function (r) {
    // Argument (r) is Response!
}, function (e) {
    // Argument (e) is Error!
});
```
### Get string from URL
``` JavaScript
fetch("https://httpbin.org/get").then(function (response) { return response.text(); }).then(function (r) {
    // Argument (r) is string!
}, function (e) {
    // Argument (e) is Error!
});
```
### Get JSON from URL
``` JavaScript
fetch("https://httpbin.org/get").then(function (response) { return response.json(); }).then(function (r) {
    // Argument (r) is JSON object!
}, function (e) {
    // Argument (e) is Error!
});
```
### Get FormData from URL
``` JavaScript
fetch("https://httpbin.org/get").then(function (response) { return response.formData(); }).then(function (r) {
    // Argument (r) is FormData object!
}, function (e) {
    // Argument (e) is Error!
});
```
### Get Response status
``` JavaScript
fetch("https://httpbin.org/get").then(function (response) {
    // Argument (response) is Response!
    var statusCode = response.status;
}, function (e) {
    // Argument (e) is Error!
});
```
### Get response headers
``` JavaScript
fetch("https://httpbin.org/get").then(function (response) {
    // Argument (response) is Response!
    var all = response.headers.getAll();
}, function (e) {
    // Argument (e) is Error!
});
```
### Post JSON
``` JavaScript
fetch("https://httpbin.org/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ MyVariableOne: "ValueOne", MyVariableTwo: "ValueTwo" })
}).then(function (r) { return r.json(); }).then(function (r) {
    console.log(result);
}, function (e) {
    console.log("Error occurred " + e);
});
```
