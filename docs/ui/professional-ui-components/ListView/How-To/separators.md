---
title: Item Separators
page_title: How to RadListView Item separators | Progress NativeScript UI Documentation
description: This article describes how Item Separators are implemented with RadListView.
slug: listview-howto-separators
tags: radlistview, separators
position: 1
publish: true
previous_url: controls/listview/how-to/separators
---
# Item separators: Introduction
This tutorial describes how to add separators between the items in RadListView.

Item separators are lines displayed between the items to better designate the bounds each item occupies within the scrollable list. Item separators are currently not supported as an out-of-the-box feature by RadListView but there is an easy way to implement this behavior which is described in this article.

# Implementing item separators in RadListView

1. Create a page in your NativeScript application and put a {% typedoc_link classes:RadListView %} instance bound to a source of data items:

	```XML
    	<Page loaded="onPageLoaded" xmlns:lv="component/listview" xmlns="http://www.nativescript.org/tns.xsd">
        	{% raw %}<lv:RadListView items="{{ dataItems }}" >{% endraw %}
            	<lv:RadListView.listViewLayout>
                	<lv:ListViewLinearLayout scrollDirection="Vertical"/>
          	  </lv:RadListView.listViewLayout>
           	 <lv:RadListView.itemTemplate>
           	     <StackLayout orientation="vertical">
           	         {% raw %}<Label fontSize="20" text="{{ itemName }}"/>{% endraw %}
           	         {% raw %}<Label fontSize="14" text="{{ itemDescription }}" textWrap="true"/>{% endraw %}
           	     </StackLayout>
           	 </lv:RadListView.itemTemplate>
        	</lv:RadListView>
   		</Page>
    ```

    In this particular case, we have a template which has a `StackLayout` as a root panel containing two labels.

2. Add a new `StackLayout` instance in your template and make its height be 2 pixels as shown below:

	```XML
    	<lv:RadListView.itemTemplate>
       		 <StackLayout orientation="vertical">
       		     {% raw %}<Label fontSize="20" text="{{ itemName }}"/>{% endraw %}
       		     {% raw %}<Label fontSize="14" text="{{ itemDescription }}" textWrap="true"/>{% endraw %}
       		     <StackLayout height="2" backgroundColor="Black"/>
       		 </StackLayout>
    	</lv:RadListView.itemTemplate>
	```

3. Run your application. The result should be as the following screenshot demonstrates:

	![TelerikUI-RadListView-Getting-Started](../../../img/ns_ui/list-view-howto-separators_1.png "iOS")

# Conclusion
Item separators are easily implementable in {% typedoc_link classes:RadListView %} by adding an element within your template with the corresponding dimensions and color. Separation between items in {% typedoc_link classes:RadListView %} can also be implemented by using a margin as demonstrated below:

```XML
    <lv:RadListView.itemTemplate>
        <StackLayout>
            <StackLayout orientation="vertical" marginBottom="2">
                {% raw %}<Label fontSize="20" text="{{ itemName }}"/>{% endraw %}
                {% raw %}<Label fontSize="14" text="{{ itemDescription }}" textWrap="true"/>{% endraw %}
            </StackLayout>
        </StackLayout>
    </lv:RadListView.itemTemplate>
```
