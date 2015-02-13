---
nav-title: "search-bar How-To"
title: "search-bar How-To"
description: "Examples for using search-bar"
---
# SearchBar
Using the SearchBar requires the "ui/search-bar" module.
``` JavaScript
var searchBarModule = require("ui/search-bar");
```
### Searching
``` JavaScript
var searchBar = new searchBarModule.SearchBar();
searchBar.on(searchBarModule.knownEvents.submit, function (args) {
    console.log("Search for " + args.object.text);
});
searchBar.on(searchBarModule.knownEvents.clear, function (args) {
    console.log("Clear");
});
```
