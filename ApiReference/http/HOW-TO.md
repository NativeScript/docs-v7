---
nav-title: "http How-To"
title: "http How-To"
description: "Examples for using http"
---
# Http module
``` JavaScript
var http = require("http");
```
### Get string from URL
``` JavaScript
http.getString("https://httpbin.org/get").then(function (r) {
    // Argument (r) is string!
}, function (e) {
    // Argument (e) is Error!
    done(e);
});
```
### Get JSON from URL
``` JavaScript
http.getJSON("https://httpbin.org/get").then(function (r) {
    // Argument (r) is JSON!
}, function (e) {
    // Argument (e) is Error!
    console.log(e);
    done(e);
});
```
### Get Image from URL
``` JavaScript
http.getImage("http://www.google.com/images/errors/logo_sm_2.png").then(function (r) {
    // Argument (r) is Image!
}, function (e) {
    // Argument (e) is Error!
    done(e);
});
```
### Get response status code
``` JavaScript
http.request({ url: "https://httpbin.org/get", method: "GET" }).then(function (response) {
    // Argument (response) is HttpResponse!
    var statusCode = response.statusCode;
}, function (e) {
    // Argument (e) is Error!
    done(e);
});
```
### Get response headers
``` JavaScript
http.request({ url: "https://httpbin.org/get", method: "GET" }).then(function (response) {
    for (var header in response.headers) {
        console.log(header + ":" + response.headers[header]);
    }
}, function (e) {
    // Argument (e) is Error!
    done(e);
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
    done(e);
});
```
