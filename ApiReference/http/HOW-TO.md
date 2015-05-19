---
nav-title: "http How-To"
title: "How-To"
description: "Examples for using http"
---
# Http module
Using http methods requires to load "http" module.
``` JavaScript
var http = require("http");
```
### Get string from URL
``` JavaScript
http.getString("https://httpbin.org/get").then(function (r) {
    // Argument (r) is string!
}, function (e) {
    // Argument (e) is Error!
});
```
### Get JSON from URL
``` JavaScript
http.getJSON("https://httpbin.org/get").then(function (r) {
    // Argument (r) is JSON!
}, function (e) {
    // Argument (e) is Error!
    console.log(e);
});
```
### Get Image from URL
``` JavaScript
http.getImage("http://www.google.com/images/errors/logo_sm_2.png").then(function (r) {
    // Argument (r) is Image!
}, function (e) {
    // Argument (e) is Error!
});
```
### Get response status code
``` JavaScript
http.request({ url: "https://httpbin.org/get", method: "GET" }).then(function (response) {
    // Argument (response) is HttpResponse!
    var statusCode = response.statusCode;
}, function (e) {
    // Argument (e) is Error!
});
```
### Get response headers
``` JavaScript
http.request({ url: "https://httpbin.org/get", method: "GET" }).then(function (response) {
    // Argument (response) is HttpResponse!
    for (var header in response.headers) {
       console.log(header + ":" + response.headers[header]);
    }
}, function (e) {
    // Argument (e) is Error!
});
```
### Get response content
``` JavaScript
http.request({ url: "https://httpbin.org/get", method: "GET" }).then(function (response) {
    // Argument (response) is HttpResponse!
    // Content property of the response is HttpContent!
    var str = response.content.toString();
    var obj = response.content.toJSON();
    var img = response.content.toImage();
}, function (e) {
    // Argument (e) is Error!
});
```
### Post JSON
``` JavaScript
var result;
http.request({
    url: "https://httpbin.org/post",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    content: JSON.stringify({ MyVariableOne: "ValueOne", MyVariableTwo: "ValueTwo" })
}).then(function (response) {
    result = response.content.toJSON();
    console.log(result);
}, function (e) {
    console.log("Error occurred " + e);
});
```
