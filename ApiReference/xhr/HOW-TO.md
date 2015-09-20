---
nav-title: "xhr How-To"
title: "How-To"
description: "Examples for using xhr"
---
### Check readyState
``` JavaScript
var xhr = new XMLHttpRequest();
TKUnit.assert(xhr.readyState === 0, "xhr.readyState should be UNSENT!");
xhr.onreadystatechange = function () {
    var state = xhr.readyState;
};
xhr.open("GET", "https://httpbin.org/get");
xhr.send();
```
### Send/receive headers
``` JavaScript
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://httpbin.org/get");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState > 1) {
        var contentTypeHeader = xhr.getResponseHeader("Content-Type");
### Send/receive JSON
``` JavaScript
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://httpbin.org/post");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState > 3) {
        var result = JSON.parse(xhr.responseText);
        var valueOne = result["json"]["MyVariableOne"];
### Send/receive FormData
``` JavaScript
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://httpbin.org/post");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.onreadystatechange = function () {
    if (xhr.readyState > 3) {
        var result = JSON.parse(xhr.responseText);
        var valueOne = result["form"]["MyVariableOne"];
### Abort request
``` JavaScript
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://httpbin.org/post");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({ MyVariableOne: "ValueOne", MyVariableTwo: "ValueTwo" }));
xhr.abort();
```
