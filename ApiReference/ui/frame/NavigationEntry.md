---
nav-title: "Object ui/frame.NavigationEntry"
title: "Object ui/frame.NavigationEntry"
description: "Object ui/frame.NavigationEntry"
---
## Object: "ui/frame".NavigationEntry  
Represents an entry in passed to navigate method.

##### Properties
 - **moduleName** - _(optional)_ - _String_.    
  The name of the module containing the Page instance to load. Optional.
 - **create** - _(optional)_ - _Function_() [_Page_](../../ui/page/Page.md).    
  A function used to create the Page instance. Optional.
 - **context** - _(optional)_ - _Object_.    
  An object passed to the onNavigatedTo callback of the Page. Typically this is used to pass some data among pages. Optional.
 - **animated** - _(optional)_ - _Boolean_.    
  True to navigate to the new Page using animated transitions, false otherwise.
 - **backstackVisible** - _(optional)_ - _Boolean_.    
  True to record the navigation in the backstack, false otherwise. 
If the parameter is set to false then the Page will be displayed but once navigated from it will not be able to be navigated back to.
 - **clearHistory** - _(optional)_ - _Boolean_.    
  True to clear the navigation history, false otherwise. Very useful when navigating away from login pages.