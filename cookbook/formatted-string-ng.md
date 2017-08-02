---
title: Using formatted string
description: How to use the FormattedString class in an Angular App
position: 2
slug: formatted-string
previous_url: /formatted-string
environment: angular
---

# How to use the FormattedString class in text

NativeScript has a special class called [FormattedString](http://docs.nativescript.org/api-reference/classes/_text_formatted_string_.formattedstring.html) to support various text transformations and decorations. The `FormattedString` class can be used with all text-related components like Label, TextView, TextField and even Button. Using `FormattedString` within an NativeScript-Angular app requires using a special syntax because of how Angular views get added to the native visual tree. Here’s what the correct syntax looks like:

```HTML
<Label>
    <FormattedString>
        <Span text="some content" fontWeight="Bold"></Span>
    </FormattedString>
</Label>
```

This syntax differs from the FormattedString’s full syntax used in NativeScript Core, shown below, which does not work in Angular apps:

```HTML
<Label>
    <Label.formattedText>
        <FormattedString>
            <FormattedString.spans>
                <Span text="some " fontWeight="Bold"></Span>
                <Span text="content"></Span>
            </FormattedString.spans>
        </FormattedString>
    </Label.formattedText>
</Label>
```
