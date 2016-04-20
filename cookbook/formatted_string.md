---
title: Using formatted string
description: How to use formatted-string in Angular App
position: 2
slug: formatted-string
previous_url: /formatted-string
environment: angular
---

# How to use formatted string in text

NativeScript has a special class called [FormattedString](http://docs.nativescript.org/ApiReference/text/formatted-string/FormattedString) to support varios text transformations and decorations. `FormattedString` could be used with all text related components like Label, TextView, TextField and even Button. Using `FormattedString` within an NativeScript-Angular requires using short-hand syntax instead of full syntax due to some specifics while creating Angular views and adding them to native visual tree. So the correct syntax should be:

```HTML
<Label>
	<FormattedString>
    	<Span text="some text" fontAttributes="Bold"></Span>
    </FormattedString>
</Label>
```

instead of full syntax:

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

> Both syntaxes are supported by pure NativeScript application, so using the short one is a safe bet.