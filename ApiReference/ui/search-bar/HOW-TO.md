---
nav-title: "search-bar How-To"
title: "How-To"
description: "Examples for using search-bar"
---
# SearchBar
Using the SearchBar requires the "ui/search-bar" module.
``` JavaScript
var searchBarModule = require("ui/search-bar");
```
### Creating a SearchBar
``` JavaScript
var searchBar = new searchBarModule.SearchBar();
```
### Searching
``` JavaScript
var searchBar = new searchBarModule.SearchBar();
searchBar.on(searchBarModule.SearchBar.submitEvent, function (args) {
    console.log("Search for " + args.object.text);
});
searchBar.on(searchBarModule.SearchBar.clearEvent, function (args) {
    console.log("Clear");
});
```
