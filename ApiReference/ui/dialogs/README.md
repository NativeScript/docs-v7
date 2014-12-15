---
nav-title: "Class ui/dialogs"
title: "Class ui/dialogs"
description: "Class ui/dialogs"
---
# Module: "ui/dialogs"

``` JavaScript
// To import the "ui/dialogs" module:
var uidialogs = require("ui/dialogs");
```

Class | Description
------|------------
[Dialog](../../ui/dialogs/Dialog.md) | 

Object | Description
------|------------
[DialogOptions](../../ui/dialogs/DialogOptions.md) | Provides options for the dialog.
[AlertOptions](../../ui/dialogs/AlertOptions.md) | Provides options for the alert.
[DialogButtonsOptions](../../ui/dialogs/DialogButtonsOptions.md) | Provides options for the confirm dialog.
[PromptOptions](../../ui/dialogs/PromptOptions.md) | Provides options for the prompt dialog.
[PromptResult](../../ui/dialogs/PromptResult.md) | Provides result data from the prompt dialog.
[LoginResult](../../ui/dialogs/LoginResult.md) | Provides result data from the login dialog.

Namespace | Description
------|------------
[inputType](../../ui/dialogs/inputType/) | Defines the input type for prompt dialog.

##### Functions
 - **alert(** message _String_, options? [_AlertOptions_](../../ui/dialogs/AlertOptions.md) **)** _Promise_  
     The alert() method displays an alert box with a specified message.
   - **message** - _String_  
     Specifies the text to display in the alert box.
   - **options** - _(optional)_ - [_AlertOptions_](../../ui/dialogs/AlertOptions.md)  
     Specifies the options for the alert box. Optional.
   - _**return**_ - _Promise_
 - **confirm(** message _String_, options? [_DialogButtonsOptions_](../../ui/dialogs/DialogButtonsOptions.md) **)** _Promise_...  
     The confirm() method displays a dialog box with a specified message.
   - **message** - _String_  
     Specifies the text to display in the confirm box.
   - **options** - _(optional)_ - [_DialogButtonsOptions_](../../ui/dialogs/DialogButtonsOptions.md)  
     Specifies the options for the confirm box. Optional.
   - _**return**_ - _Promise_ of _Boolean_
 - **prompt(** message _String_, defaultText? _String_, options? [_PromptOptions_](../../ui/dialogs/PromptOptions.md) **)** _Promise_...  
     The prompt() method displays a dialog box that prompts the visitor for input.
   - **message** - _String_  
     The text to display in the dialog box.
   - **defaultText** - _(optional)_ - _String_  
     The default text to display in the input box.
   - **options** - _(optional)_ - [_PromptOptions_](../../ui/dialogs/PromptOptions.md)  
     The options for the dialog box. Optional.
   - _**return**_ - _Promise_ of [_PromptResult_](../../ui/dialogs/PromptResult.md)
 - **login(** message _String_, userName? _String_, password? _String_, options? [_DialogButtonsOptions_](../../ui/dialogs/DialogButtonsOptions.md) **)** _Promise_...  
     The login() method displays a login dialog box that prompts the visitor for user name and password.
   - **message** - _String_  
     The text to display in the dialog box.
   - **userName** - _(optional)_ - _String_  
     The default text to display in the user name input box.
   - **password** - _(optional)_ - _String_  
     The default text to display in the password input box.
   - **options** - _(optional)_ - [_DialogButtonsOptions_](../../ui/dialogs/DialogButtonsOptions.md)  
     The options for the dialog box. Optional.
   - _**return**_ - _Promise_ of [_LoginResult_](../../ui/dialogs/LoginResult.md)