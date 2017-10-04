---
title: List View
description: NativeScript for Angular Documentation - Using List View
position: 70
slug: listview
previous_url: /listview
environment: angular
--- 

# List View

Using a `ListView` control inside Angular app requires some special attention due to the complexity of the NativeScript control like custom item template, bindings and so on. 

In this article we will cover the following topics:

* [Using the ListView Component](#using-the-listview-component)
* [Customizing the ListView](#customizing-the-listview)
* [Using an Item Template](#using-an-item-template)
* [Using Multiple Item Templates](#using-multiple-item-templates)
* [Using Async Pipe](#using-async-pipe)
* [Using Load More Items](#load-more-items)

## Using the ListView Component

NativeScript-angular plugin provides a custom Angular component which simplifies the way native ListView should be used. Following is an example of how to add ListView to your page (with some clarifications later):

```XML
// list-test.html
<ListView [items]="myItems" (itemTap)="onItemTap($event)">
    <ng-template let-item="item" let-i="index" let-odd="odd" let-even="even">
        <StackLayout [class.odd]="odd" [class.even]="even">
            <Label [text]='"index: " + i'></Label>
            <Label [text]='"[" + item.id +"] " + item.name'></Label>
        </StackLayout>
    </ng-template>
</ListView>
```
```TypeScript
import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

class DataItem {
    constructor(public id: number, public name: string) { }
}

@Component({
    selector: 'list-test',
    styleUrls: ['list-test.css'],
    templateUrl: 'list-test.html',
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
	background-color: red;
}

.even {
	background-color: blue;
}
```

As shown there is nothing complex in a way ListView component is used, but some points need clarifications.

* items - The `items` property is bound in a standard way to a ordinary JavaScript Array. Since the JavaScript Array object does not have observable or change notifications capabilities, supporting such a scenario counts on Angular's change detection mechanism for notification that something has changed. Be aware that the process of checking that anything is changed within an Array could take a lot of time on large arrays (including a memory issue) leading to a possible performance issue. So consider using another kind of source with large collections. A great example of this kind of data source is the NativeScript ObservableArray.

* template - The template tag is used to define a template which will be used for the User Interface of every ListView item. As shown there are some standard Angular optional variables marked with `let-` that are preset for every data item:
  * `let-item` - the data item itself.
  * `let-i` - the index of the data item (inside data source)
  * `let-odd` - represents if the index of the data item is an odd number
  * `let-even` - represents if the index of the data item is an even number
  * Inside the actual template it is shown how to use these variables.

* itemTap event - `itemTap` event is an event that comes from the NativeScript ListView (the underlying control behind the NativeScript-Angular ListView component). There is nothing special here—just a normal one-way to source binding with a corresponding function `onItemTap` inside the code-behind file.

This is a typical usage of the ListView component, however if the business case requires it, there are a few options for customizations.

## Customizing the ListView

The most common customization of ListView control is customizing the item template. Everything inside the `<template>` tag will be used as the item template and will be generated for each item. Another possible customization is connected with the creation of a different item. Usually with a pure NativeScript application, the `itemLoading` event could be used to accomplish this customization. Unfortunately this event cannot be used with a NativeScript-Angular app, since the NativeScript-Angular plugin uses this event to create an Angular view which will be inserted into the Angular virtual dom. However, the NativeScript-Angular ListView component provides an option to customize the created Angular view before adding it to the visual tree. This option is available via the `setupItemView` event. Here is a small example how to use this event:

```XML
<GridLayout rows="*">
    <ListView [items]="myItems" (setupItemView)="onSetupItemView($event)">
        <ng-template let-item="item" let-i="index" let-third="third">
            <StackLayout [class.third]="third">
                <Label [text]='"index: " + i'></Label>
                <Label [text]='"[" + item.id +"] " + item.name'></Label>
            </StackLayout>
        </ng-template>
    </ListView>
</GridLayout>
```
```TypeScript
import {SetupItemViewArgs} from "nativescript-angular/directives";

...

onSetupItemView(args: SetupItemViewArgs) {
	args.view.context.third = (args.index % 3 === 0);
}
```

In order to see the result just add `third` css class in app.css or in styles of your custom component:

```
.third {
	background-color: lime;
}
```

And the result is:

![list-view-customization](../img/angular/list-view-setupItemView.png "list-view-customization")

## Using an Item Template

Another popular scenario is using a separate component for the ListView template. Using a custom control within a ListView actually is very simple.

```TypeScript
@Component({
    selector: 'item-component',
    template: `
        <StackLayout>
            <Label *ngFor="let element of data.list" [text]="element.text"></Label>
        </StackLayout>
    `
})
export class ItemComponent {
    @Input() data: any;
    constructor() { }
}

@Component({
    selector: 'list-test',
    template: `
        <GridLayout rows="*">
            <ListView [items]="myItems">
                <ng-template let-item="item">
                    <item-component [data]="item"></item-component>
                </ng-template>
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

As shown, just create a custom component and add it to the directives of the host component. Another interesting part is how `data` is passed to the child control (via @Input decorator).

## Using Multiple Item Templates

There are scenarios when you want to use different item templates based on the type of the current item (or some other condition). Here is how to do that:

1. Define a list view with multiple templates, giving each one of them a key using the `nsTemplateKey` directive.
2. Set the `itemTemplateSelector` callback for the `ListView`. This is a function that will be called when each item is rendered and should return the name of the template that should be used for it.

{%snippet list-view-template-selector%}

The `itemTemplateSelector` property of the `ListView` is **not** an event. It is just a property that accepts a callback function, so the regular property binding syntax (`[itemTemplateSelector]="callbackFn`) is used to bind it to a function in the component. The `itemTemplateSelector` is not implemented as an `EventEmitter` for performance reasons - firing events triggers angular change detection. Doing this for each shown item is not necessary, given that the template selector callback should not have side effects.

Using different item templates for different item types is much more performant than having an `*ngIf` or `ngSwitch` inside a single template. This is because the actual views used for the different templates are recycled and reused for each template key. When using `*ngIf`, the actual views are created only after the context (the data-item) for the element is known so there is no way for the `ListView` component to reuse them.

## Using Async Pipe

Generally according to Angular documentation, a pipe is a simple display-value transformation that can be declared in HTML. A pipe takes an input and transforms it to a desired output. One of the built-in Angular pipes is very commonly used with ListView like controls. This is the `async` pipe. The input of this pipe is either `Promise<Array>` or `Observable<Array>` (Observable actually stands for [RxJS.Observable](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md). This pipe subscribes to the observable and returns the value inside it as property value. Following is a simple example of using async pipe with NativeScript-Angular ListView.

```TypeScript
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable as RxObservable } from 'rxjs/Observable';

export class DataItem {
    constructor(public id: number, public name: string) { }
}

@Component({
    selector: 'list-test-async',
    template: `
    <GridLayout>
        <ListView [items]="myItems | async">
            <ng-template let-item="item" let-i="index" let-odd="odd" let-even="even">
                <StackLayout [class.odd]="odd" [class.even]="even">
                    <Label [text]='"index: " + item.name'></Label>
                </StackLayout>
            </ng-template>
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

## Load More Items

The built-in [loadMoreItemsEvent](http://docs.nativescript.org/api-reference/classes/_ui_list_view_.listview.html#loadmoreitemsevent) can be used to implement infinite scrolling in your application. Infinite scrolling allows you to load content on demand without the need for pagination.

```HTML
// list-test.html
<ListView [items]="myItems" (loadMoreItems)="loadMoreItems()">
    <ng-template let-item="item" let-i="index">
        <Label [text]="item"></Label>
    </ng-template>
</ListView>
```
```TypeScript
import { Component } from '@angular/core';
import { EventData } from 'data/observable';

@Component({
    selector: 'list-test',
    styleUrls: ['list-test.css'],
    template: 'list-test.html'
})
export class ListTest {
    public myItems: string[] = [];
    public counter = 0;

    constructor() {
        this.myItems = [];
        for (var i = 0; i < 50; i++) {
            this.myItems.push("data item " + i);
            this.counter = i;
        }
    }

    loadMoreItems() {
        // Load more items here.
        this.myItems.push("data item " + this.counter)
        this.counter += 1;
    }
}
```
