---
title: Icon Fonts
description: Learn how to use icon fonts to display icons instead of using images.
position: 160
slug: icon-fonts
previous_url: /icon-fonts
---

# Icon Fonts
While bitmap images are great, they present challenges in designing mobile applications. Images increase the size of the application if they are embedded in it. If not, they require additional http requests in order to be fetched. Images consume memory. Furthermore, bitmap images do not scale well. If scaled up, they will lose quality. If scaled down, they will waste space. On the other hand, fonts scale well, do not require additional http requests for each glyph and do not increase memory usage significantly. Icon fonts are fonts that contain icons instead of alphabet characters and can be used insteas of images in mobile applications. 

# Using Icon Fonts in NativeScript
Choose or generate an icon font that best matches your needs. Two popular icon fonts are [IcoMoon](https://icomoon.io/) and [Font Awesome](https://fortawesome.github.io/Font-Awesome/). Once you have downloaded the icon font to your machine, locate the [TrueType](https://en.wikipedia.org/wiki/TrueType) font file with extension **.ttf**. In your NativeScript application **app** folder create a folder called **fonts** and place the **.ttf** there. Follow the instructions on the icon font webpage to determine the hex codes of each font glyph, i.e. icon. Add a **Label** component to your NativeScript app and bind the Label's **text** property to a one-letter string generated from the character code of the icon you want to show, i.e. `String.fromCharCode(0xe903)`. Do not forget to set the Label's **font-family** to the name of your font either through CSS, XML or code-behind.

## Icon Font
![icomoon](../img/modules/icon-fonts/icomoon.png "Icomoon")

## Fonts Folder
![icon-fonts](../img/modules/icon-fonts/fonts-folder.png "Fonts Folder")

## The Code
{% nativescript %}
``` CSS
.icon {
   font-family: 'icomoon';
   font-size: 48;
}
```
``` XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded">
  <ListView items="{{ glyphs }}">
        <ListView.itemTemplate>
            <StackLayout orientation="horizontal">
                <Label text="{{ icon }}" class="icon"/>
                <Label text="{{ code }}" />
            </StackLayout>
        </ListView.itemTemplate>
    </ListView>
</Page>
```
``` JavaScript
"use strict";
var observable = require("data/observable");
function pageLoaded(args) {
    var page = args.object;
    var viewModel = new observable.Observable();
    var glyphs = new Array();
    var charCode = 0xe903;
    for (; charCode <= 0xeaea; charCode++) {
        var glyph = new observable.Observable();
        glyph.set("icon", String.fromCharCode(charCode));
        glyph.set("code", charCode.toString(16));
        glyphs.push(glyph);
    }
    viewModel.set("glyphs", glyphs);
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=main-page.js.map
```
``` TypeScript
import observable = require("data/observable");
import pages = require("ui/page");

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    var viewModel = new observable.Observable();
    var glyphs = new Array<observable.Observable>();
    var charCode = 0xe903;
    for(; charCode <= 0xeaea; charCode++){
        var glyph = new observable.Observable();
        glyph.set("icon", String.fromCharCode(charCode));
        glyph.set("code", charCode.toString(16));
        glyphs.push(glyph);  
    }
    viewModel.set("glyphs", glyphs)
    page.bindingContext = viewModel;
}
```
{% endnativescript %}
{% angular %}
<snippet id='icon-font-sample'/>  
{% endangular %}

And the result is: 

![sample-app](../img/modules/icon-fonts/sample-app.png "Sample App")

{% nativescript %}
Here you can find the complete sample: [Icon Font Sample Application](https://github.com/NativeScript/icon-fonts)
{% endnativescript %}
