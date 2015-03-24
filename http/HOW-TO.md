# Http module
``` JavaScript
var http = require("http");
```
### Get string from URL
``` JavaScript
http.getString("http://httpbin.org/get").then(function (r) {
    // Argument (r) is string!
}).fail(function (e) {
    // Argument (e) is Error!
    console.log(e);
});

```
### Get JSON from URL
``` JavaScript
http.getJSON("http://httpbin.org/get").then(function (r) {
    // Argument (r) is JSON!
}).fail(function (e) {
    // Argument (e) is Error!
    console.log(e);
});

```
### Get Image from URL
``` JavaScript
http.getImage("http://www.google.com/images/errors/logo_sm_2.png").then(function (r) {
    // Argument (r) is Image!
}).fail(function (e) {
    // Argument (e) is Error!
    console.log(e);
});

```
### Get response status code
``` JavaScript
http.request({ url: "http://httpbin.org/get", method: "GET" }).then(function (response) {
    // Argument (response) is HttpResponse!
    var statusCode = response.statusCode;

}).fail(function (e) {
    // Argument (e) is Error!
    console.log(e);
});

```
### Get response headers
``` JavaScript
http.request({ url: "http://httpbin.org/get", method: "GET" }).then(function (response) {
    for (var header in response.headers) {
        console.log(header + ":" + response.headers[header]);
    }

}).fail(function (e) {
    // Argument (e) is Error!
    console.log(e);
});

```
### Get response content
``` JavaScript
http.request({ url: "http://httpbin.org/get", method: "GET" }).then(function (response) {
    // Argument (response) is HttpResponse!
    // Content property of the response is HttpContent!
    var str = response.content.toString();
    var obj = response.content.toJSON();
    var img = response.content.toImage();

}).fail(function (e) {
    // Argument (e) is Error!
    console.log(e);
});

```

### POST JSON
``` JavaScript
http.request({
    url: "http://httpbin.org/post",
    method: "POST",
    content: JSON.stringify({
        sammpleJSONData: {
           string1: "1",
           string2: "2",
        }
    }),
    headers: {
        "Content-Type": "application/json"
    }
}).then(function (response) {
    console.log(response);
});
```
