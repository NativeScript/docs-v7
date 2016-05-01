---
title: List View
description: NativeScript for Angular Documentation - Using List View
position: 6
slug: listview
previous_url: /listview
environment: angular
--- 

# List View

Using a `ListView` control inside Angular 2 app requires some special attention due to the complexity of the NativeScript control like custom item template, bindings and so on. NativeScript-angular plugin provides a custom Angular 2 component which simplifies the way native ListView should be used. Following is an example of how to add ListView to your page (with some clarifications later):

```XML
// list-test.html
<ListView [items]="myItems" (itemTap)="onItemTap($event)">
    <template #item="item" #i="index" #odd="odd" #even="even">
        <StackLayout [class.odd]="odd" [class.even]="even">
            <Label [text]='"index: " + i'></Label>
            <Label [text]='"[" + item.id +"] " + item.name'></Label>
        </StackLayout>
    </template>
</ListView>
```
```TypeScript
import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';

class DataItem {
    constructor(public id: number, public name: string) { }
}

@Component({
    selector: 'list-test',
    styleUrls: ['list-test.css'],
    template: 'list-test.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTest {
    public myItems: Array<DataItem>;
    private counter: number;

    constructor() {
        this.myItems = [];
        this.counter = 0;
        for (var i = 0; i < 50; i++) {
            this.myItems.push(new DataItem(i, "data item " + i));
            this.counter = i;
        }
    }

    public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }
}
```
```CSS
// list-test.css
.odd {
	background-color: "red";
}

.even {
	background-color: "blue";
}
```

As shown there is nothing complex in a way ListView component is used, but some points need clarifications.

* items - `Items` property is bound in a standard way to a ordinary JavaScript Array. Since the JavaScript Array object does not have observable or change notifications capabilities supporting such scenario counts on Angular 2 change detection mechanism for notification that something is changed. Be aware that the process of checking that anything is changed within an Array could take a lot of time on large arrays (including a memory issue) leading to a possible performance issue. So consider using another kind of source with large collections. A great example of such kind of data source is NativeScript ObservableArray.

* template - The template tag is used to define a template which will be used for the User Interface of every ListView item. As shown there are some standard Angular 2 optional variables marked with `#` that are preset for every data item:
  * #item - item it is the data item itself.
  * #i - its the index of the data item (inside data source)
  * #odd - represents if index of data item is an odd number
  * #even - represents if index of data item is an even number
  * Inside the actual template it is shown how to use these variables.

* itemTap event - `itemTap` event is an event that comes from NativeScript ListView (the underlying control behind NativeScript-Angular ListView component). There is nothing special just a normal one-way to source binding with a corresponding function `onItemTap` inside code-behind file.

This is a typical usage of the ListView component however if business case requires there are a few options for customizations.

### Customizing List View

The most common customization of ListView control is customizing the item template. Everything inside `<template>` tag will be used as item template and will be generated for each item. Another possible customization is connected with creation of a different item. Usually with a pure NativeScript application `itemLoading` event could be used to accomplish such customization. Unfortunately this event cannot be used with NativeScript-Angular 2 app, since NativeScript-Angular plugin uses this event to create Angular2 view which will be inserted into Angular2 virtual dom. However NativeScript-Angular ListView component provides an option to customize the created Angular2 view before adding it to visual tree. This option is available via `setupItemView` event. Here is a small example how to use this event:

```XML
<GridLayout rows="*">
    <ListView [items]="myItems" (setupItemView)="onSetupItemView($event)">
        <template #item="item" #i="index" #third="third">
            <StackLayout [class.third]="third">
                <Label [text]='"index: " + i'></Label>
                <Label [text]='"[" + item.id +"] " + item.name'></Label>
            </StackLayout>
        </template>
    </ListView>
</GridLayout>
```
```TypeScript
import {SetupItemViewArgs} from "nativescript-angular/directives";

...

onSetupItemView(args: SetupItemViewArgs) {
	args.view.setLocal('third', (args.index % 3 === 0));
}
```

In order to see the result just add `third` css class in app.css or in styles of your custom component:

```
.third {
	background-color: lime;
}
```

And result is:

![list-view-customization](../img/angular/list-view-setupItemView.png "list-view-customization")

### Using an item template

Another popular scenario is using a separate control for the ListView template. Using a custom control within a ListView actually is very simple.

```TypeScript
@Component({
    selector: 'item-component',
    template: `
        <StackLayout>
            <Label *ngFor="#element of data.list" [text]="element.text"></Label>
        </StackLayout>
    `
})
export class ItemComponent {
    @Input() data: any;
    constructor() { }
}

@Component({
    selector: 'list-test',
    directives: [ItemComponent],
    template: `
        <GridLayout rows="*">
            <ListView [items]="myItems">
                <template #item="item">
                    <item-component [data]="item"></item-component>
                </template>
            </ListView>
        </GridLayout>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTest {
    public myItems: Array<any>;
    private counter: number;

    constructor() {
        var list = [{"text": "a"}, {"text": "b"}];
        var list1 = [{"text": "c"}, {"text": "d"}];
        this.myItems = [{"list": list}, {"list": list1}];
    }
}
```

As shown just creating a custom component and add it to directives of the host component. Another interesting part is how `data` is passed to the child control (via @Input decorator).

### Using async pipe

Generally according to Angular documentation pipe is a simple display-value transformation that can be declared in HTML. Pipe takes an input and transforms it to a desired output. One of the built-in Angular pipes is very commonly used with ListView like controls. This is the `async` pipe. The input of this pipe is either `Promise<Array>` or `Observable<Array>` (Observable actually stands for [RxJS.Observable](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md). What this pipe do is to subscribe for the observable and return the value inside it as property value. Following is a simple example of using async pipe with NativeScript-Angular ListView.

```TypeScript
import { Component, Input, ChangeDetectionStrategy } from 'angular2/core';
import { Observable as RxObservable } from 'rxjs/Observable';

export class DataItem {
    constructor(public id: number, public name: string) { }
}

@Component({
    selector: 'list-test-async',
    template: `
    <GridLayout>
        <ListView [items]="myItems | async">
            <template #item="item" #i="index" #odd="odd" #even="even">
                <StackLayout [class.odd]="odd" [class.even]="even">
                    <Label [text]='"index: " + item.name'></Label>
                </StackLayout>
            </template>
        </ListView>
    </GridLayout>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTestAsync {
    public myItems: RxObservable<Array<DataItem>>;

    constructor() {
        var items = [];
        for (var i = 0; i < 3; i++) {
            items.push(new DataItem(i, "data item " + i));
        }
        
        var subscr;
        this.myItems = RxObservable.create(subscriber => {
            subscr = subscriber;
            subscriber.next(items);
            return function () {
                console.log("Unsubscribe called!!!");
            }
        });

        let counter = 2;
        let intervalId = setInterval(() => {
            counter++;
            items.push(new DataItem(counter, "data item " + counter));
            subscr.next(items);
        }, 1000);
        
        setTimeout(() => {
            clearInterval(intervalId);
        }, 15000);
    }
}
```