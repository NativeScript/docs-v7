---
nav-title: "WebView How-To"
title: "WebView How-To"
description: "Examples for using WebView"
---
# WebView
Using a WebView requires the web-view module.
``` JavaScript
var webViewModule = require("ui/web-view");
```
## Creating a WebView
``` JavaScript
var webView = new webViewModule.WebView();
```
## Using WebView,
``` JavaScript
webView.on(webViewModule.knownEvents.finished, function (args) {
    var message;
    if (!args.error) {
        message = "WebView finished loading " + args.url;
    }
    else {
        message = "Error loading " + args.url + ": " + args.error;
    }
    console.log(message);
});
webView.url = "https://httpbin.org/html";
```
