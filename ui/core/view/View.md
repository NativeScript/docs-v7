---
nav-title: "Class ui/core/view.View"
title: "Class ui/core/view.View"
description: "Class ui/core/view.View"
---
## Class: "ui/core/view".View  
_Inherits:_ _Object_  
This class is the base class for all UI components. 
A View occupies a rectangular area on the screen and is responsible for drawing (measure and arrange) of all UI components within. 

##### Instance Properties
 - **width** - _Number_.    
  Gets or sets the width of the view.
 - **height** - _Number_.    
  Gets or sets the height of the view.
 - **maxWidth** - _Number_.    
  Gets or sets the maximum width the view may grow to.
 - **maxHeight** - _Number_.    
  Gets or sets the maximum height the view may grow to.
 - **minWidth** - _Number_.    
  Gets or sets the minimum width the view may grow to.
 - **minHeight** - _Number_.    
  Gets or sets the minimum height the view may grow to.
 - **horizontalAlignment** - _String_.    
  Gets or sets the alignment of this view within its parent along the Horizontal axis.
 - **verticalAlignment** - _String_.    
  Gets or sets the alignment of this view within its parent along the Vertical axis.
 - **margin** - _Object_.    
  Gets or sets the margin of this view within its parent.
 - **isVisible** - _Boolean_.
 - **style** - _Object_.
 - **cssClass** - _String_.
 - **cssType** - _String_.
 - **visualState** - _String_.
 - **id** - _String_.
 - **parent** - [_View_](../../../ui/core/view/View.md).
 - **isLoaded** - _Boolean_.
 - **_domId** - _Number_.
 - **_isAddedToNativeVisualTree** - _Boolean_.
 - **_childrenCount** - _Number_.
 - **_context** - _Context_.
 - **_nativeView** - _Object_.

##### Instance Functions
 - **measure(** availableSize _Object_, options? _Object_ **)** _Object_
   - **availableSize** - _Object_
   - **options** - _(optional)_ - _Object_
   - _**return**_ - _Object_
 - **arrange(** finalRect _Object_, options? _Object_ **)**
   - **finalRect** - _Object_
   - **options** - _(optional)_ - _Object_
 - **observe(** type _Number_, callback _Function_... **)** [_GesturesObserver_](../../../ui/gestures/GesturesObserver.md)
   - **type** - _Number_
   - **callback** - _Function_(args [_GestureEventData_](../../../ui/gestures/GestureEventData.md))
   - _**return**_ - [_GesturesObserver_](../../../ui/gestures/GesturesObserver.md)
 - **onLoaded()**
 - **onUnloaded()**
 - **_addView(** view [_View_](../../../ui/core/view/View.md) **)**
   - **view** - [_View_](../../../ui/core/view/View.md)
 - **_removeView(** view [_View_](../../../ui/core/view/View.md) **)**
   - **view** - [_View_](../../../ui/core/view/View.md)
 - **_addViewToNativeVisualTree(** view [_View_](../../../ui/core/view/View.md) **)** _Boolean_  
     Performs the core logic of adding a child view to the native visual tree. Returns true if the view's native representation has been successfully added, false otherwise.
   - **view** - [_View_](../../../ui/core/view/View.md)
   - _**return**_ - _Boolean_
 - **_removeViewFromNativeVisualTree(** view [_View_](../../../ui/core/view/View.md) **)**
   - **view** - [_View_](../../../ui/core/view/View.md)
 - **_eachChildView(** callback _Function_... **)**
   - **callback** - _Function_(child [_View_](../../../ui/core/view/View.md)) _Boolean_
 - **_onAttached(** context _Context_ **)**
   - **context** - _Context_
 - **_onContextChanged()**
 - **_onDetached(** force? _Boolean_ **)**
   - **force** - _(optional)_ - _Boolean_
 - **_createUI()**
 - **_getMeasureSpec(** length _Number_, spec? _Object_ **)** _Number_
   - **length** - _Number_
   - **spec** - _(optional)_ - _Object_
   - _**return**_ - _Number_
 - **_measureOverride(** availableSize _Object_, options? _Object_ **)** _Object_
   - **availableSize** - _Object_
   - **options** - _(optional)_ - _Object_
   - _**return**_ - _Object_
 - **_arrangeOverride(** finalSize _Object_, options? _Object_ **)**
   - **finalSize** - _Object_
   - **options** - _(optional)_ - _Object_
 - **_measureNativeView(** availableSize _Object_, options? _Object_ **)** _Object_
   - **availableSize** - _Object_
   - **options** - _(optional)_ - _Object_
   - _**return**_ - _Object_
 - **_invalidateMeasure()**
 - **_invalidateArrange()**
 - **_updateLayout()**
 - **_goToVisualState(** state _String_ **)**
   - **state** - _String_
 - **_setBounds(** rect _Object_ **)**
   - **rect** - _Object_
 - **_getBounds()** _Object_
   - _**return**_ - _Object_