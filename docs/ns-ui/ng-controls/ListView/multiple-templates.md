---
title: Item Templates
page_title: RadListView Item Templates | Progress NativeScript UI Documentation
description: This article discusses the item templates feature of RadListView.
slug: listview-multiple-templates-angular
tags: radlistview, multiple, template, templates, angular
position: 6
publish: true
---

# RadListView: Item template/templates
By default when using the {% typedoc_link classes:RadListView %} in order for the items from its data source to be visualized all that you need to do is declare your own {% typedoc_link classes:RadListView,member:itemTemplate%} and set it to the desired UI View. This will make sure that each of the business objects of the passed to the {% typedoc_link classes:RadListView,member:items%} property are visualized using that template, but there are scenarios where you may want to use different template for specific business objects (different sections, important business objects, more detailed objects etc.). IN such scenarios the the {% typedoc_link classes:RadListView,member:itemTemplates%} can be used.

## Using multiple item templates
In order to setup the {% typedoc_link classes:RadListView %} to use different templates for its items representation you will need to:
- Create a function or pass a string representation of a "property" by which the template for each business object will be determined. This is done by setting the {% typedoc_link classes:RadListView,member:itemTemplateSelector%} property
- Create multiple separate `ng-template`, add them to the {% typedoc_link classes:RadListView,member:itemTemplates%} collection property and set their `tkTemplateKey` to the desired unique template identifier. The `tkTemplateKey` is a custom directive and is what will be used to do the comparison in the {% typedoc_link classes:RadListView,member:itemTemplateSelector%} 

#### Example 1: Setting up `itemTemplateSelector` and `itemTemplates`

In the code snippets bellow we are declaring multiple `<ng-template></ng-template>` instances in the HTML. After that we are creating a function in our Angular `Component` that simply returns the property of the business object that will be used to determine the template of its item representation and finally we are binding that function to the {% typedoc_link classes:RadListView,member:itemTemplateSelector%}  property:

<snippet id='listview-multiple-templates-angular-html'/>
<snippet id='listview-multiple-templates-angular'/>
<snippet id='listview-multiple-templates-angular-css'/>

#### Figure 1: RadListView with multiple item templates:
![RadListView: Multiple item templates](/controls/NativeScript/ListView/Images/list-view-multiple-templates-ios.png "iOS")  ![RadListView: Multiple item templates](/controls/NativeScript/ListView/Images/list-view-multiple-templates-android.png "Android")

## References
Want to see this scenario in action?
Check our SDK examples repo on GitHub. You will find this and many other practical examples with NativeScript UI.

* [Multiple Item Templates Example](https://github.com/telerik/nativescript-ui-samples-angular/tree/master/listview/app/examples/multiple-templates)

