---
title: Provide the Source
page_title: RadDataForm Provide the Source | Progress NativeScript UI Documentation
description: A getting started page of RadDataForm for NativeScript. This article explains what are the steps to create a RadDataForm instance from scratch and provide the source object that will be edited
slug: dataform-start-source-angular
tags: raddataform, gettingstarted, dataform, source, angular, nativescript, professional, ui
position: 0
publish: true
---

# RadDataForm - Provide the Source

This article will guide you through the process of adding a {% typedoc_link classes:RadDataForm %} instance to a page in a {N} + Angular application and using it to edit the properties of a business object.

* [Create the Source Object](#create-the-source-object)
* [Add RadDataForm to the Page](#add-raddataform-to-the-page)
* [References](#references)

## Create the Source Object

In order to use `RadDataForm` to edit an object, we need to have the object that we will edit. In this example, we will create a class `Person`, pass an instance of this class to `RadDataForm` and then we will be able to edit the person's properties. 

#### Example 1: Declare the object that we will use as a source for RadDataForm

<snippet id='angular-dataform-person'/>

## Installation
Run the following command to add the plugin to your application:

```
tns plugin add nativescript-ui-dataform
```

## Add RadDataForm to the Page

Before proceeding, make sure that the {% typedoc_link classes:NativeScriptUIDataFormModule %} from the *nativescript-ui-dataform* plugin has been imported in an `ngModule` in your app as explained [here]({% slug getting-started-angular %}).

After that simply add the {% typedoc_link classes:RadDataForm %} tag to the HTML and set its {% typedoc_link classes:RadDataForm,member:source%} accordingly:

#### Example 2: Add RadDataForm to a page

<snippet id='angular-dataform-getting-started-html'/>

Note the [data binding](https://docs.nativescript.org/angular/core-concepts/angular-data-binding.html) of the `source` property of `RadDataForm` to the `person` property of our component. Let's add this property in the `@Component` '.ts' file and initialize it in the `ngOnInit` method:

#### Example 3: Define the property used for binding

<snippet id='angular-dataform-getting-started-context'/>

If you run the application now, you should see the default editor for each property of the provided source object.

#### Figure 1: The basic RadDataForm on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Getting-Started-Android](../../../img/ns_ui/dataform-start-source-android.png "DataForm in Android") ![NativeScriptUI-DataForm-Getting-Started-iOS](../../../img/ns_ui/dataform-start-source-ios.png "DataForm in iOS")

Our next step is to adjust the editors that are used for each of the source object's properties. [Here]({% slug dataform-start-properties-angular %})'s how.

## References

Want to see these scenarios in action?
Check our [SDK Examples for Angular](https://github.com/telerik/nativescript-ui-samples-angular) repo on GitHub. You will find these and many other practical examples with NativeScript UI.

* [Getting Started Example](https://github.com/telerik/nativescript-ui-samples-angular/tree/master/dataform/app/examples/getting-started)
* [Getting Started JSON Example](https://github.com/telerik/nativescript-ui-samples-angular/tree/master/dataform/app/examples/getting-started-json)

Related articles you might find useful:

* [Describe the Properties]({% slug dataform-start-properties-angular %})
* [Get the Result]({% slug dataform-start-result-angular %})
* [Editors List]({% slug dataform-editors-list-angular %})
