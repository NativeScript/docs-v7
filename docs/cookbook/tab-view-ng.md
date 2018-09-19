---
title: Tab View
description: Learn how to use TabView class in an Angular app
position: 5
slug: tabview
previous_url: /tabview
environment: angular
---

# Tab View

Using a `TabView` inside an Angular app requires some special attention about how to provide title, iconSource and content (view) of the TabItem. In a pure NativeScript application, `TabView` has an items property which could be set via XML to an array of TabViewItems (basically, an array of objects with `title` and `view` properties). However, NativeScript-Angular does not support nested properties in its HTML template, so adding `TabViewItem` to TabView is a little bit different. NativeScript-Angular provides a custom Angular directive that simplifies the way native `TabView` should be used. The following example shows how to add a `TabView` to your page (with some clarifications later):

```XML
<!-- tab-view-test.html -->
<TabView>
    <StackLayout *tabItem="{title: 'Profile', iconSource: '~/icon.png'}" >
        <ListView [items]="items">
            <ng-template let-item="item">
                <Label [text]="item.itemDesc"></Label>
            </ng-template>
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
import { Component } from "@angular/core";

export class DataItem {
    constructor(public itemDesc: string) {}
}

@Component({
	selector: "tab-view-test",
	templateUrl: "tab-view-test.html"
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

* tabItem:  The TabView directive uses a JSON object to transfer properties to the native object. Actually, `TabViewItem` is a pretty simple object with just `title`, `iconSource` and `view` properties. Since `title` and `iconSource` are usually represented as text, TabView directive uses a small JSON object (`{title: 'Profile', iconSource: '~/icon.png'}`) to define these properties easily in HTML. View, however, is not so simple, therefore as TabViewItem. View TabView directive uses the tag where `tabItem` attribute is set.
<Comment: The text in the previous sentence, TabViewItem. View TabView is incorrect, but any changes I make to it may change the meaning. The commas I added are correct, so please keep those.>

This is a typical usage of the TabView directive; however, if further customization is required, there are a few options available.

### Customizing Tab View

The most common customization of TabView is customizing the background color of the selected tab item to use something other than the first tab item for start up. <Comment: Please review my changes to the previous sentence to verify I did not create a technical error.> The following example shows how to achieve that with a few modifications to the previous example.

```XML
<!-- tab-view-test.html -->
<TabView selectedIndex="1" selectedColor="#FF0000">
    <StackLayout *tabItem="{title: 'Profile', iconSource: '~/icon.png'}" >
        <ListView [items]="items">
            <ng-template let-item="item">
                <Label [text]="item.itemDesc"></Label>
            </ng-template>
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

The result is a TabView that selects the second tab at start up and uses the color red for the selected tab.

### Binding (Two-way) TabView selectedIndex

You can use the NativeScript-Angular TabView `selectedIndex` property in two-way binding scenarios. Using this kind of binding is relatively simple. Just use the standard `ngModel` syntax to a data model property (for the sake of example, the TabViewTest class is used as binding context) and set the data model property `tabSelectedIndex` to the desired value. <Comment: Please review my changes to the previous sentence to verify I did not create a technical error. I think there is a word missing in the phrase, "syntax to a data model property".>

```XML
<!-- tab-view-test.html -->
<TabView [(ngModel)]="tabSelectedIndex" selectedColor="#FF0000">
    <StackLayout *tabItem="{title: 'Profile', iconSource: '~/icon.png'}" >
        <ListView [items]="items">
            <ng-template let-item="item">
            	<Label [text]="item.itemDesc"></Label>
            </ng-template>
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
import { Component } from "@angular/core";

export class DataItem {
    constructor(public itemDesc: string) {}
}

@Component({
	selector: "tab-view-test",
	templateUrl: "tab-view-test.html"
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
