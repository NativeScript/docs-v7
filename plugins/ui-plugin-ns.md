---
title: Building Simple UI Plugin using {N} Core Modules
description: 
position: 10
slug: ui-plugin-ns
environment: nativescript
---

# Creating a plugin 
First things first - you start off from a regular plugin. You can use the [NativeScript plugin seed repo](https://github.com/NativeScript/nativescript-plugin-seed).

# Add UI bits

When writing a plugin that shows some UI, you can take different paths. One of the easiest of them is to use {N} means to biuld the UI, i.e. no calls to native APIs. Thus you can sometimes avoid platform specific files (like \*.ios.ts, \*.android.ts ...). 
Let's say you want to build a simple meme generator component with 3 properties, which you can use like:

```
    <ui:Meme imageSource="~/images/nativescript.png" topText="ROCK" bottomText="ROLL" />
```

...and when used in an app it looks like:

http://jmp.sh/7VQqWde

You need 2 files in that do the job:
- **meme.ts** (properties, logic, loads the UI)
- **meme.xml** (UI, bindings)

In **meme.ts**, you need to declare a class with the name of the UI element that will be used in the app:

```
export class Meme extends GridLayout {
    constructor() {
        super();

        let innerComponent = builder.load(__dirname + '/meme.xml') as View;
        innerComponent.bindingContext = this;

        this.addChild(innerComponent);
    }
}
```

As you see, in the constructor, we load the UI from the **meme.xml** and set its **bindingContext** to **this**, so that we can bind the XML to the properties:
```
<GridLayout rows="auto,*, auto"> 
    <Label row="0" text="{{ topText }}" fontSize="64" textWrap="true" 
        horizontalAlignment="center" verticalAlignment="top"></Label>
        
    <Image rowSpan="3" src="{{ imageSource }}" verticalAlignment="stretch"></Image>

    <Label row="2" text="{{ bottomText }}" fontSize="64" textWrap="true" 
        horizontalAlignment="center" verticalAlignment="bottom"></Label>
</GridLayout>
```

For more details and the full source code of the described meme sample, check the [NativeScript ui-plugin sample repo](https://github.com/NativeScript/nativescript-ui-plugin). 

##  Angular Wrapper

Having your UI plugin developed successfully you could easily make it Angular compatible following the steps described in [Supporting Angular in UI Plugins article](https://github.com/NativeScript/docs/blob/tachev/angular-compatible-plugin/plugins/angular-plugin.md).
