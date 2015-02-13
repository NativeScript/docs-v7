---
nav-title: "Interface ui/frame.AndroidFrame"
title: "Interface ui/frame.AndroidFrame"
description: "Interface ui/frame.AndroidFrame"
---
## Object: "ui/frame".AndroidFrame  
_Extends:_ [_Observable_](../../data/observable/Observable.md)  
Represents the Android-specific Frame object, aggregated within the common Frame one.
In Android there are two types of navigation - using new Activity instances or using Fragments within the main Activity.
To start a new Activity, a new Frame instance should be created and navigated to the desired Page.

##### Properties
 - **rootViewGroup** - _Object_.    
  Gets the native [android ViewGroup](http://developer.android.com/reference/android/view/ViewGroup.html) instance that represents the root layout part of the Frame.
 - **activity** - _Object_.    
  Gets the native [android Activity](http://developer.android.com/reference/android/app/Activity.html) instance associated with this Frame. In case of nested Frame objects, this property points to the activity of the root Frame.
 - **currentActivity** - _Object_.    
  Gets the current (foreground) activity for the application. This property will recursively traverse all existing Frame objects and check for own Activity property.
 - **actionBar** - _Object_.    
  Gets the actionBar property of the currentActivity.
 - **showActionBar** - _Boolean_.    
  Determines whether the Activity associated with this Frame will display an action bar or not.
 - **cachePagesOnNavigate** - _Boolean_.    
  Gets or sets whether the page UI will be cached when navigating away from the page.

##### Functions
 - **onActivityRequested(** intent _Object_ **)** _Object_  
     A function called by the Runtime whenever a new Activity is about to be opened.
   - **intent** - _Object_  
     The native [android Intent](http://developer.android.com/reference/android/content/Intent.html) object passed to the Activity's onCreate method.
   - _**return**_ - _Object_