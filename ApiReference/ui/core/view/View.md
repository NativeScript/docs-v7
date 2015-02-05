---
nav-title: "Class ui/core/view.View"
title: "Class ui/core/view.View"
description: "Class ui/core/view.View"
---
## Class: "ui/core/view".View  
_Inherits:_ [_ProxyObject_](../../../ui/core/proxy/ProxyObject.md)  
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
 - **margin** - [_Thickness_](../../../utils/geometry/Thickness.md).    
  Gets or sets the margin of this view within its parent.
 - **visibility** - _String_.    
  Gets or sets the visibility of the view.
 - **isEnabled** - _Boolean_.    
  Gets or sets a value indicating whether the the view is enabled. This affects the appearance of the view.
 - **isUserInteractionEnabled** - _Boolean_.    
  Gets or sets a value indicating whether the user can interact with the view. This does not affect the appearance of the view.
 - **id** - _String_.    
  Gets or sets the id for this view.
 - **cssClass** - _String_.    
  Gets or sets the CSS class for this view.
 - **style** - [_Style_](../../../ui/styling/Style.md).    
  Gets the style object associated to this view.
 - **parent** - [_View_](../../../ui/core/view/View.md).    
  Gets the View instance that parents this view. This property is read-only.
 - **clipToBounds** - _Boolean_.    
  Gets or sets whether children are clipped or not to bounds of this view.
 - **cssType** - _String_.
 - **visualState** - _String_.
 - **isLoaded** - _Boolean_.
 - **_domId** - _Number_.
 - **_cssClasses** - _Array_ of _String_.
 - **_isAddedToNativeVisualTree** - _Boolean_.
 - **_childrenCount** - _Number_.
 - **_context** - _Object_.
 - **_nativeView** - _Object_.
 - **_isVisible** - _Boolean_.

##### Instance Functions
 - **measure(** availableSize [_Size_](../../../utils/geometry/Size.md), options? _Object_ **)** [_Size_](../../../utils/geometry/Size.md)
   - **availableSize** - [_Size_](../../../utils/geometry/Size.md)
   - **options** - _(optional)_ - _Object_
   - _**return**_ - [_Size_](../../../utils/geometry/Size.md)
 - **arrange(** finalRect [_Rect_](../../../utils/geometry/Rect.md), options? _Object_ **)**
   - **finalRect** - [_Rect_](../../../utils/geometry/Rect.md)
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
 - **_onAttached(** context _Object_ **)**
   - **context** - _Object_
 - **_onContextChanged()**
 - **_onDetached(** force? _Boolean_ **)**
   - **force** - _(optional)_ - _Boolean_
 - **_createUI()**
 - **_getMeasureSpec(** length _Number_, horizontal _Boolean_ **)** _Number_
   - **length** - _Number_
   - **horizontal** - _Boolean_
   - _**return**_ - _Number_
 - **_prepareNativeView(** view _UIView_ **)**
   - **view** - _UIView_
 - **_onSubviewDesiredSizeChanged()**
 - **_checkMetadataOnPropertyChanged(** metadata [_PropertyMetadata_](../../../ui/core/dependency-observable/PropertyMetadata.md) **)**
   - **metadata** - [_PropertyMetadata_](../../../ui/core/dependency-observable/PropertyMetadata.md)
 - **_measureOverride(** availableSize [_Size_](../../../utils/geometry/Size.md), options? _Object_ **)** [_Size_](../../../utils/geometry/Size.md)
   - **availableSize** - [_Size_](../../../utils/geometry/Size.md)
   - **options** - _(optional)_ - _Object_
   - _**return**_ - [_Size_](../../../utils/geometry/Size.md)
 - **_arrangeOverride(** finalSize [_Size_](../../../utils/geometry/Size.md), options? _Object_ **)**
   - **finalSize** - [_Size_](../../../utils/geometry/Size.md)
   - **options** - _(optional)_ - _Object_
 - **_measureNativeView(** availableSize [_Size_](../../../utils/geometry/Size.md), options? _Object_ **)** [_Size_](../../../utils/geometry/Size.md)
   - **availableSize** - [_Size_](../../../utils/geometry/Size.md)
   - **options** - _(optional)_ - _Object_
   - _**return**_ - [_Size_](../../../utils/geometry/Size.md)
 - **_invalidateMeasure()**
 - **_invalidateArrange()**
 - **_updateLayout()**
 - **_goToVisualState(** state _String_ **)**
   - **state** - _String_
 - **_setBounds(** rect [_Rect_](../../../utils/geometry/Rect.md) **)**
   - **rect** - [_Rect_](../../../utils/geometry/Rect.md)
 - **_getBounds()** [_Rect_](../../../utils/geometry/Rect.md)
   - _**return**_ - [_Rect_](../../../utils/geometry/Rect.md)
 - **_getDesiredSize()** [_Size_](../../../utils/geometry/Size.md)
   - _**return**_ - [_Size_](../../../utils/geometry/Size.md)