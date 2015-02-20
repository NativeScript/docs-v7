---
nav-title: "Class ui/page.Page"
title: "Class ui/page.Page"
description: "Class ui/page.Page"
---
## Class: "ui/page".Page  
_Inherits:_ [_ContentView_](../../ui/content-view/ContentView.md)  
Represents a logical unit for navigation (inside Frame).

##### Instance Properties
 - **css** - _String_.    
  A valid css string which will be applied for all nested UI components (based on css rules).
 - **navigationContext** - _Object_.    
  A property that is used to pass a data from another page (while navigate to).
 - **frame** - [_Frame_](../../ui/frame/Frame.md).    
  Gets the Frame object controlling this instance.

##### Instance Functions
 - **addCss(** cssString _String_ **)**  
     Adds a new values to current css.
   - **cssString** - _String_  
     - A valid css which will be added to current css. 
 - **addCssFile(** cssFileName _String_, isAbsolutePath? _Boolean_ **)**  
     Adds the content of the file to the current css.
   - **cssFileName** - _String_  
     - A valid file name which contains a valid css.
   - **isAbsolutePath** - _(optional)_ - _Boolean_  
     - Indicates if a specified cssFileName is absolute or start from the application root.
 - **onNavigatingTo(** context _Object_ **)**  
     A method called before navigating to the page.
   - **context** - _Object_  
     - The data passed to the page through the NavigationEntry.context property.
 - **onNavigatedTo(** context _Object_ **)**  
     A method called after navigated to the page.
   - **context** - _Object_  
     - The data passed to the page through the NavigationEntry.context property.
 - **onNavigatingFrom()**  
     A method called before navigating from the page.
 - **onNavigatedFrom(** isBackNavigation _Boolean_ **)**  
     A method called after navigated from the page.
   - **isBackNavigation** - _Boolean_  
     - True if the Page is being navigated from using the Frame.goBack() method, false otherwise.
 - **_getStyleScope()** _Object_
   - _**return**_ - _Object_
 - **on(** event _String_, callback _Function_... **)**
   - **event** - _String_
   - **callback** - _Function_(data [_EventData_](../../data/observable/EventData.md))
 - **on(** event , callback _Function_... **)**  
     Raised when navigation to the page is finished.
   - **event**
   - **callback** - _Function_(args [_NavigatedData_](../../ui/page/NavigatedData.md))