---
title: Header and footer
page_title: RadListView Header and Footer | Progress NativeScript UI Documentation
description: This article explains how header and footer are configured in RadListView and Angular.
slug: listview-header-footer-angular
tags: listview, header, footer, angular
position: 12
publish: true
---

# Overview
Header and Footer are a special kind of elements that are displayed at the beginning and at the end of the scrollable data list. They are part of the core functionality of `RadListView` and are exposed through two separate directives. This article explains how Header and Footer are defined on {% typedoc_link classes:RadListViewComponent %}  with Angular.

# Defining Header and Footer
Defining a list header or list footer on {% typedoc_link classes:RadListViewComponent %}  via Angular is done easily with the corresponding directives:

- {% typedoc_link classes:ListViewHeaderDirective %} - used with the `tkListViewHeader` selector
- {% typedoc_link classes:ListViewFooterDirective %} - used with the `tkListViewFooter` selector

The following code snippet demonstrates a sample scenario in which a header and a footer are defined on a `RadListView` instance:

<snippet id='angular-listview-header-footer'/>

The HTML snippet is then used in context with the following component to display a list with a header and a footer:

<snippet id='angular-listview-header-footer-component'/>
