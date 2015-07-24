---
nav-title: "fetch How-To"
title: "How-To"
description: "Examples for using fetch"
---
# Fetch module
Using fetch methods requires to load "fetch" module.
``` JavaScript
var fetch = require("fetch");
```
### Get Response from URL
``` JavaScript
fetchModule.fetch("https://httpbin.org/get").then(function (r) {
    // Argument (r) is Response!
}, function (e) {
    // Argument (e) is Error!
});
```
### Get string from URL
``` JavaScript
fetchModule.fetch("https://httpbin.org/get").then(function (response) { return response.text(); }).then(function (r) {
    // Argument (r) is string!
}, function (e) {
    // Argument (e) is Error!
});
```
### Get JSON from URL
``` JavaScript
fetchModule.fetch("https://httpbin.org/get").then(function (response) { return response.json(); }).then(function (r) {
    // Argument (r) is JSON object!
}, function (e) {
    // Argument (e) is Error!
});
```
### Get Blob from URL
``` JavaScript
fetchModule.fetch("https://httpbin.org/get").then(response => { return response.blob(); }).then(function (r) {
    // Argument (r) is Blob object!
}, function (e) {
        // Argument (e) is Error!
    });
```
### Get ArrayBuffer from URL
``` JavaScript
fetchModule.fetch("https://httpbin.org/get").then(response => { return response.arrayBuffer(); }).then(function (r) {
    // Argument (r) is ArrayBuffer object!
}, function (e) {
        // Argument (e) is Error!
    });
```
### Get FormData from URL
``` JavaScript
fetchModule.fetch("https://httpbin.org/get").then(response => { return response.formData(); }).then(function (r) {
    // Argument (r) is FormData object!
}, function (e) {
        // Argument (e) is Error!
    });
```
### Get Response status
``` fetch
fetchModule.fetch("https://httpbin.org/get").then(function (response) {
    // Argument (response) is Response!
    var statusCode = response.status;
}, function (e) {
    // Argument (e) is Error!
});
```
### Get response headers
``` JavaScript
fetchModule.fetch("https://httpbin.org/get").then(function (response) {
    // Argument (response) is Response!
    var all = response.headers.getAll();
}, function (e) {
    // Argument (e) is Error!
});
```
### Post JSON
``` JavaScript
fetchModule.fetch("https://httpbin.org/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ MyVariableOne: "ValueOne", MyVariableTwo: "ValueTwo" })
}).then(function (r) { return r.json(); }).then(function (r) {
    console.log(result);
}, function (e) {
    console.log("Error occurred " + e);
});
```
