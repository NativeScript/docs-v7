---
nav-title: "WebView How-To"
title: "How-To"
description: "Examples for using WebView"
---
# WebView
Using a WebView requires the web-view module.
``` JavaScript
var webViewModule = require("ui/web-view");
```
### Declaring a WebView.
``` XML
 <Page>
      {%raw%}<WebView src="{{ someUrl | pathToLocalFile | htmlString }}" />{%endraw%}
 </Page>
```
### Creating a WebView
``` JavaScript
var webView = new webViewModule.WebView();
```
### Using WebView
``` JavaScript
webView.on(webViewModule.WebView.loadFinishedEvent, function (args) {
    var message;
    if (!args.error) {
        message = "WebView finished loading " + args.url;
    }
    else {
        message = "Error loading " + args.url + ": " + args.error;
    }
});
webView.url = "https://github.com/";
```
### Using WebView
``` JavaScript
webView.on(webViewModule.WebView.loadFinishedEvent, function (args) {
    var message;
    if (!args.error) {
        message = "WebView finished loading " + args.url;
    }
    else {
        message = "Error loading " + args.url + ": " + args.error;
    }
});
webView.src = "~/ui/web-view/test.html";
```
### Using WebView
``` JavaScript
webView.on(webViewModule.WebView.loadFinishedEvent, function (args) {
    var message;
    if (!args.error) {
        message = "WebView finished loading " + args.url;
    }
    else {
        message = "Error loading " + args.url + ": " + args.error;
    }
});
webView.src = '<!DOCTYPE html><html><head><title>MyTitle</title><meta charset="utf-8" /></head><body><span style="color:red">TestÖ</span></body></html>';
```
