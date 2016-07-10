---
title: Using formatted string
description: How to Use the FormattedString Class in an Angular App
position: 2
slug: formatted-string
previous_url: /formatted-string
environment: angular
---

# How to use the FormattedString class in text

NativeScript has a special class called [FormattedString](http://docs.nativescript.org/api-reference/classes/_text_formatted_string_.formattedstring.html) to support various text transformations and decorations. The `FormattedString` class can be used with all text-related components including Label, TextView, TextField and even Button. Using `FormattedString` within an NativeScript-Angular app requires using a special syntax because of how Angular views get added to the native visual tree. Here’s what the correct syntax looks like:

```HTML
<Label>
    <FormattedString>
        <Span text="some text" fontAttributes="Bold"></Span>
    </FormattedString>
</Label>
```

This syntax differs from the FormattedString’s full syntax, shown below, which does not work in Angular apps:

```HTML
<Label>
    <Label.FormattedText>
        <FormattedString>
            <FormattedString.Spans>
                <Span text="some text" fontAttributes="Bold"></Span>
            </FormattedString.Spans>
        </FormattedString>
    </Label.FormattedText>
</Label>
```

> Both syntaxes are supported in NativeScript applications that do not use Angular, so using the short one is a safe bet.
