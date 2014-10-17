---
nav-title: "Class ui/frame.AndroidFrame"
title: "Class ui/frame.AndroidFrame"
description: "Class ui/frame.AndroidFrame"
---
## Object: "ui/frame".AndroidFrame  
_Extends:_ [_Observable_](../../data/observable/Observable.md)  
Represents the Android-specific Frame object, aggregated within the common Frame one.
In Android there are two types of navigation - using new Activity instances or using Fragments within the main Activity.
To start a new Activity, a new Frame instance should be created and navigated to the desired Page.

##### Properties
 - **layout** - _ViewGroup_.    
  Gets the native android.view.ViewGroup instance that represents the layout part of the Frame.
 - **activity** - _Activity_.    
  Gets the native android.app.Activity instance associated with this Frame. In case of nested Frame objects, this property points to the activity of the root Frame.
 - **currentActivity** - _Activity_.    
  Gets the current (foreground) activity for the application. This property will recursively traverse all existing Frame objects and check for own Activity property.
 - **actionBar** - _ActionBar_.    
  Gets the actionBar property of the currentActivity.
 - **showActionBar** - _Boolean_.    
  Determines whether the Activity associated with this Frame will display an action bar or not.

##### Functions
 - **onActivityRequested(** intent _Intent_ **)** _Object_  
     A function called by the Runtime whenever a new Activity is about to be opened.
   - **intent** - _Intent_  
     The native android.content.Intent object passed to the Activity's onCreate method.
   - _**return**_ - _Object_