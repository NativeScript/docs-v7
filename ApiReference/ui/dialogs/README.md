---
nav-title: "Module ui/dialogs"
title: "Module ui/dialogs"
description: "Module ui/dialogs"
---
# Module: "ui/dialogs"

``` JavaScript
// To import the "ui/dialogs" module:
var uidialogs = require("ui/dialogs");
```

Object | Description
------|------------
[ActionOptions](../../ui/dialogs/ActionOptions.md) | Provides options for the dialog.
[DialogOptions](../../ui/dialogs/DialogOptions.md) | Provides options for the dialog.
[AlertOptions](../../ui/dialogs/AlertOptions.md) | Provides options for the alert.
[ConfirmOptions](../../ui/dialogs/ConfirmOptions.md) | Provides options for the confirm dialog.
[PromptOptions](../../ui/dialogs/PromptOptions.md) | Provides options for the prompt dialog.
[LoginOptions](../../ui/dialogs/LoginOptions.md) | Provides options for the login dialog.
[PromptResult](../../ui/dialogs/PromptResult.md) | Provides result data from the prompt dialog.
[LoginResult](../../ui/dialogs/LoginResult.md) | Provides result data from the login dialog.

Namespace | Description
------|------------
[inputType](../../ui/dialogs/inputType/) | Defines the input type for prompt dialog.

##### Functions
 - **alert(** message _String_ **)** _Promise_  
     The alert() method displays an alert box with a specified message.
   - **message** - _String_  
     Specifies the text to display in the alert box.
   - _**return**_ - _Promise_
 - **alert(** options [_AlertOptions_](../../ui/dialogs/AlertOptions.md) **)** _Promise_  
     The alert() method displays an alert box with a specified message.
   - **options** - [_AlertOptions_](../../ui/dialogs/AlertOptions.md)  
     Specifies the options for the alert box.
   - _**return**_ - _Promise_
 - **confirm(** message _String_ **)** _Promise_...  
     The confirm() method displays a dialog box with a specified message.
   - **message** - _String_  
     Specifies the text to display in the confirm box.
   - _**return**_ - _Promise_ of _Boolean_
 - **confirm(** options [_ConfirmOptions_](../../ui/dialogs/ConfirmOptions.md) **)** _Promise_...  
     The confirm() method displays a dialog box with a specified message.
   - **options** - [_ConfirmOptions_](../../ui/dialogs/ConfirmOptions.md)  
     Specifies the options for the confirm box.
   - _**return**_ - _Promise_ of _Boolean_
 - **prompt(** message _String_, defaultText? _String_ **)** _Promise_...  
     The prompt() method displays a dialog box that prompts the visitor for input.
   - **message** - _String_  
     The text to display in the dialog box.
   - **defaultText** - _(optional)_ - _String_  
     The default text to display in the input box. Optional.
   - _**return**_ - _Promise_ of [_PromptResult_](../../ui/dialogs/PromptResult.md)
 - **prompt(** options [_PromptOptions_](../../ui/dialogs/PromptOptions.md) **)** _Promise_...  
     The prompt() method displays a dialog box that prompts the visitor for input.
   - **options** - [_PromptOptions_](../../ui/dialogs/PromptOptions.md)  
     The options for the dialog box. 
   - _**return**_ - _Promise_ of [_PromptResult_](../../ui/dialogs/PromptResult.md)
 - **login(** message _String_, userName? _String_, password? _String_ **)** _Promise_...  
     The login() method displays a login dialog box that prompts the visitor for user name and password.
   - **message** - _String_  
     The text to display in the dialog box.
   - **userName** - _(optional)_ - _String_  
     The default text to display in the user name input box. Optional.
   - **password** - _(optional)_ - _String_  
     The default text to display in the password input box. Optional.
   - _**return**_ - _Promise_ of [_LoginResult_](../../ui/dialogs/LoginResult.md)
 - **login(** options [_LoginOptions_](../../ui/dialogs/LoginOptions.md) **)** _Promise_...  
     The login() method displays a login dialog box that prompts the visitor for user name and password.
   - **options** - [_LoginOptions_](../../ui/dialogs/LoginOptions.md)  
     The options for the dialog box. 
   - _**return**_ - _Promise_ of [_LoginResult_](../../ui/dialogs/LoginResult.md)
 - **action(** message _String_, cancelButtonText _String_, actions __... **)** _Promise_...  
     The action() method displays a action box that prompts the visitor to choose some action.
   - **message** - _String_  
     The text to display in the dialog box.
   - **cancelButtonText** - _String_  
     The text to display in the cancel button.
   - **actions** - __ of _String_  
     List of available actions.
   - _**return**_ - _Promise_ of _String_
 - **action(** options [_ActionOptions_](../../ui/dialogs/ActionOptions.md) **)** _Promise_...  
     The action() method displays a action box that prompts the visitor to choose some action.
   - **options** - [_ActionOptions_](../../ui/dialogs/ActionOptions.md)  
     The options for the dialog box. 
   - _**return**_ - _Promise_ of _String_