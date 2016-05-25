---
title: Tab View
description: NativeScript for Angular Documentation - Using Tab View
position: 5
slug: tabview
previous_url: /tabview
environment: angular
--- 

# Tab View

Using a `TabView` inside Angular 2 app requires some special attention how to provide title, iconSource and content (view) of the TabItem. In a pure NativeScript application `TabView` has an items property which could be set via XML to an array of TabViewItems (basically an array of objects with `title` and `view` properties). However NativeScript-angular does not support nested properties in its html template, so adding `TabViewItem` to TabView is a little bit different. NativeScript-angular provides a custom Angular 2 directive which simplifies the way native TabView should be used. Following is an example of how to add TabView to your page (with some clarifications later):

```XML
// tab-view-test.html
<TabView>
    <StackLayout *tabItem="{title: 'Profile', iconSource: '~/icon.png'}" >
        <ListView [items]='items'>
            <template let-item='item'>
                <Label [text]='item.itemDesc' ></Label>
            </template>
        </ListView>
    </StackLayout>
    <StackLayout *tabItem="{title: 'Stats'}">
        <Label text="Second tab item"></Label>
    </StackLayout>
    <StackLayout *tabItem="{title: 'Settings'}">
        <Label text="Third tab item"></Label>
    </StackLayout>
</TabView>
```
```TypeScript
import {Component, ElementRef} from 'angular2/core';

export class DataItem {
    constructor(public itemDesc: string) {}
}

@Component({
	selector: 'tab-view-test',
	templateUrl: 'tab-view-test.html' 
})
export class TabViewTest {
    public items: Array<DataItem>;
    
    constructor() {
        this.items = new Array<DataItem>();
        for (let i = 0; i < 5; i++) {
            this.items.push(new DataItem("item " + i));
        }
    }
}
```

* tabItem - TabView directive uses a JSON object to transfer properties to the native object. Actually `TabViewItem` is a pretty simple object with just `title`, `iconSource` and `view` properties. Since `title` and `iconSource` are usually represented as text TabView directive uses a small JSON object (`{title: 'Profile', iconSource: '~/icon.png'}`) to define these properties easily in html. View however is not so simple therefore as TabViewItem.View TabView directive uses the tag where `tabItem` attribute is set.

This is a typical usage of the TabView directive however if business case requires there are a few options for customizations.

### Customizing Tab View

The most common customization of TabView is customizing the background color of the selected tab item and using some other than first tab item for start up. Following is how to achive that by little modifications to the previous example.
```XML
// tab-view-test.html
<TabView selectedIndex="1" selectedColor="#FF0000">
    <StackLayout *tabItem="{title: 'Profile', iconSource: '~/icon.png'}" >
        <ListView [items]='items'>
            <template let-item='item'>
                <Label [text]='item.itemDesc' ></Label>
            </template>
        </ListView>
    </StackLayout>
    <StackLayout *tabItem="{title: 'Stats'}">
        <Label text="Second tab item"></Label>
    </StackLayout>
    <StackLayout *tabItem="{title: 'Settings'}">
        <Label text="Third tab item"></Label>
    </StackLayout>
</TabView>
```

And result is a TabView which selects second tab at start up and uses red color for color of the selected tab.

### Binding (Two-way) TabView selectedIndex

NativeScript-angular TabView `selectedIndex` property can be used in a two-way binding scenarios and using this kind of binding is relative simple. Just use standard `ngModel` syntax to a data model property (for the sake of example TabViewTest class is used as binding context) and set data model property `tabSelectedIndex` to desired value.
 
```XML
// tab-view-test.html
<TabView [(ngModel)]="tabSelectedIndex" selectedColor="#FF0000">
    <StackLayout *tabItem="{title: 'Profile', iconSource: '~/icon.png'}" >
        <ListView [items]='items'>
            <template let-item='item'>
            	<Label [text]='item.itemDesc' ></Label>
            </template>
        </ListView>
    </StackLayout>
    <StackLayout *tabItem="{title: 'Stats'}">
    	<Label text="Second tab item"></Label>
    </StackLayout>
    <StackLayout *tabItem="{title: 'Settings'}">
    	<Label text="Third tab item"></Label>
    </StackLayout>
</TabView>
```
```TypeScript
import {Component, ElementRef} from 'angular2/core';

export class DataItem {
    constructor(public itemDesc: string) {}
}

@Component({
	selector: 'tab-view-test',
	templateUrl: 'tab-view-test.html' 
})
export class TabViewTest {
    public items: Array<DataItem>;
    public tabSelectedIndex: number;
    
    constructor() {
    	this.tabSelectedIndex = 1;
        this.items = new Array<DataItem>();
        for (let i = 0; i < 5; i++) {
            this.items.push(new DataItem("item " + i));
        }
    }
}
```