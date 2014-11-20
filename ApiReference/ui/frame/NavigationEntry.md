---
nav-title: "Class ui/frame.NavigationEntry"
title: "Class ui/frame.NavigationEntry"
description: "Class ui/frame.NavigationEntry"
---
## Object: "ui/frame".NavigationEntry  
Represents an entry in the back stack of a Frame object.

##### Properties
 - **moduleName** - _(optional)_ - _String_.    
  The name of the module containing the Page instance to load. Optional.
 - **page** - _(optional)_ - [_Page_](../../ui/page/Page.md).    
  The Page instance to load. Optional.
 - **create** - _(optional)_ - _Function_() [_Page_](../../ui/page/Page.md).    
  A function used to create the Page instance. Optional.
 - **context** - _(optional)_ - _Object_.    
  An object passed to the onNavigatedTo callback of the Page. Typically this is used to pass some data among pages. Optional.
 - **tag** - _(optional)_ - _String_.    
  Tag associated with the entry.
 - **resolvedPage** - _(optional)_ - [_Page_](../../ui/page/Page.md).    
  Stores the resolved page instance.
 - **animated** - _(optional)_ - _Boolean_.    
  True to navigate to the new Page using animated transitions, false otherwise.