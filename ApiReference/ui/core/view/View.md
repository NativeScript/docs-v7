---
nav-title: "Class ui/core/view.View"
title: "Class ui/core/view.View"
description: "Class ui/core/view.View"
---
## Class: "ui/core/view".View  
_Inherits:_ [_ProxyObject_](../../../ui/core/proxy/ProxyObject.md)  
_Conform to:_ [_ApplyXmlAttributes_](../../../ui/core/view/ApplyXmlAttributes.md)  
This class is the base class for all UI components.
A View occupies a rectangular area on the screen and is responsible for drawing and laying out of all UI components within. 

##### Static Properties
 - **loadedEvent** - _String_.    
  String value used when hooking to loaded event.
 - **unloadedEvent** - _String_.    
  String value used when hooking to unloaded event.
 - **idProperty** - [_Property_](../../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the id property of each View.
 - **cssClassProperty** - [_Property_](../../../ui/core/dependency-observable/Property.md).    
  [Deprecated. Please use className instead.] Represents the observable property backing the cssClass property of each View.
 - **classNameProperty** - [_Property_](../../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the className property of each View.
 - **isEnabledProperty** - [_Property_](../../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the isEnabled property of each View.
 - **isUserInteractionEnabledProperty** - [_Property_](../../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the isUserInteractionEnabled property of each View.

##### Static Functions
 - **measureChild(** parent [_View_](../../../ui/core/view/View.md), child [_View_](../../../ui/core/view/View.md), widthMeasureSpec _Number_, heightMeasureSpec _Number_ **)** {}...
   - **parent** - [_View_](../../../ui/core/view/View.md)
   - **child** - [_View_](../../../ui/core/view/View.md)
   - **widthMeasureSpec** - _Number_
   - **heightMeasureSpec** - _Number_
   - _**return**_ - { measuredWidth: _Number_, measuredHeight: _Number_ }
 - **layoutChild(** parent [_View_](../../../ui/core/view/View.md), child [_View_](../../../ui/core/view/View.md), left _Number_, top _Number_, right _Number_, bottom _Number_ **)**
   - **parent** - [_View_](../../../ui/core/view/View.md)
   - **child** - [_View_](../../../ui/core/view/View.md)
   - **left** - _Number_
   - **top** - _Number_
   - **right** - _Number_
   - **bottom** - _Number_
 - **resolveSizeAndState(** size _Number_, specSize _Number_, specMode _Number_, childMeasuredState _Number_ **)** _Number_  
     Utility to reconcile a desired size and state, with constraints imposed
by a MeasureSpec.  Will take the desired size, unless a different size
is imposed by the constraints.  The returned value is a compound integer,
with the resolved size in the {@link #MEASURED_SIZE_MASK} bits and
optionally the bit {@link #MEASURED_STATE_TOO_SMALL} set if the resulting
size is smaller than the size the view wants to be.
   - **size** - _Number_
   - **specSize** - _Number_
   - **specMode** - _Number_
   - **childMeasuredState** - _Number_
   - _**return**_ - _Number_

##### Instance Properties
 - **borderRadius** - _Number_.    
  Gets or sets the corner radius of the view.
 - **borderWidth** - _Number_.    
  Gets or sets the border width of the view.
 - **borderColor** - [_Color_](../../../color/Color.md).    
  Gets or sets the border color of the view.
 - **color** - [_Color_](../../../color/Color.md).    
  Gets or sets the color of the view.
 - **backgroundColor** - [_Color_](../../../color/Color.md).    
  Gets or sets the background color of the view.
 - **backgroundImage** - _String_.    
  Gets or sets the background image of the view.
 - **minWidth** - _Number_.    
  Gets or sets the minimum width the view may grow to.
 - **minHeight** - _Number_.    
  Gets or sets the minimum height the view may grow to.
 - **width** - _Number_.    
  Gets or sets the desired width of the view.
 - **height** - _Number_.    
  Gets or sets the desired height of the view.
 - **margin** - _String_.    
  Gets or sets margin style property.
 - **marginLeft** - _Number_.    
  Specifies extra space on the left side of this view.
 - **marginTop** - _Number_.    
  Specifies extra space on the top side of this view.
 - **marginRight** - _Number_.    
  Specifies extra space on the right side of this view.
 - **marginBottom** - _Number_.    
  Specifies extra space on the bottom side of this view.
 - **horizontalAlignment** - _String_.    
  Gets or sets the alignment of this view within its parent along the Horizontal axis.
 - **verticalAlignment** - _String_.    
  Gets or sets the alignment of this view within its parent along the Vertical axis.
 - **visibility** - _String_.    
  Gets or sets the visibility of the view.
 - **opacity** - _Number_.    
  Gets or sets the opacity style property.
 - **translateX** - _Number_.    
  Gets or sets the translateX affine transform of the view.
 - **translateY** - _Number_.    
  Gets or sets the translateY affine transform of the view.
 - **scaleX** - _Number_.    
  Gets or sets the scaleX affine transform of the view.
 - **scaleY** - _Number_.    
  Gets or sets the scaleY affine transform of the view.
 - **rotate** - _Number_.    
  Gets or sets the rotate affine transform of the view.
 - **isEnabled** - _Boolean_.    
  Gets or sets a value indicating whether the the view is enabled. This affects the appearance of the view.
 - **isUserInteractionEnabled** - _Boolean_.    
  Gets or sets a value indicating whether the user can interact with the view. This does not affect the appearance of the view.
 - **id** - _String_.    
  Gets or sets the id for this view.
 - **cssClass** - _String_.    
  [Deprecated. Please use className instead.] Gets or sets the CSS class for this view.
 - **className** - _String_.    
  Gets or sets the CSS class name for this view.
 - **style** - [_Style_](../../../ui/styling/Style.md).    
  Gets the style object associated to this view.
 - **parent** - [_View_](../../../ui/core/view/View.md).    
  Gets the View instance that parents this view. This property is read-only.
 - **isLayoutValid** - _Boolean_.    
  Gets is layout is valid. This is a read-only property.
 - **cssType** - _String_.
 - **visualState** - _String_.
 - **page** - [_View_](../../../ui/core/view/View.md).    
  Gets owner page. This is a read-only property.
 - **isLoaded** - _Boolean_.
 - **_context** - _Object_.
 - **_gestureObservers** - _Object_.
 - **_domId** - _Number_.
 - **_cssClasses** - __ of _String_.
 - **_isAddedToNativeVisualTree** - _Boolean_.
 - **_childrenCount** - _Number_.
 - **_nativeView** - _Object_.
 - **_isVisible** - _Boolean_.

##### Instance Functions
 - **measure(** widthMeasureSpec _Number_, heightMeasureSpec _Number_ **)**  
     This is called to find out how big a view should be. The parent supplies constraint information in the width and height parameters.
The actual measurement work of a view is performed in onMeasure(int, int), called by this method. Therefore, only onMeasure(int, int) can and must be overridden by subclasses.
   - **widthMeasureSpec** - _Number_  
     Horizontal space requirements as imposed by the parent
   - **heightMeasureSpec** - _Number_  
     Vertical space requirements as imposed by the parent
 - **layout(** left _Number_, top _Number_, right _Number_, bottom _Number_ **)**  
     Assign a size and position to a view and all of its descendants
This is the second phase of the layout mechanism. (The first is measuring). In this phase, each parent calls layout on all of its children to position them. This is typically done using the child measurements that were stored in the measure pass().
Derived classes should not override this method. Derived classes with children should override onLayout. In that method, they should call layout on each of their children.
   - **left** - _Number_
   - **top** - _Number_
   - **right** - _Number_
   - **bottom** - _Number_
 - **getMeasuredWidth()** _Number_  
     Returns the raw width component.
   - _**return**_ - _Number_
 - **getMeasuredHeight()** _Number_  
     Returns the raw height component.
   - _**return**_ - _Number_
 - **requestLayout()**  
     Call this when something has changed which has invalidated the layout of this view. This will schedule a layout pass of the view tree.
 - **onMeasure(** widthMeasureSpec _Number_, heightMeasureSpec _Number_ **)**  
     Measure the view and its content to determine the measured width and the measured height. This method is invoked by measure(int, int) and should be overriden by subclasses to provide accurate and efficient measurement of their contents.
When overriding this method, you must call setMeasuredDimension(int, int) to store the measured width and height of this view. Failure to do so will trigger an exception, thrown by measure(int, int).
   - **widthMeasureSpec** - _Number_  
     horizontal space requirements as imposed by the parent. The requirements are encoded with View.MeasureSpec.
   - **heightMeasureSpec** - _Number_  
     vertical space requirements as imposed by the parent. The requirements are encoded with View.MeasureSpec.
 - **onLayout(** left _Number_, top _Number_, right _Number_, bottom _Number_ **)**  
     Called from layout when this view should assign a size and position to each of its children. Derived classes with children should override this method and call layout on each of their children.
   - **left** - _Number_  
     Left position, relative to parent
   - **top** - _Number_  
     Top position, relative to parent
   - **right** - _Number_  
     Right position, relative to parent
   - **bottom** - _Number_  
     Bottom position, relative to parent
 - **setMeasuredDimension(** measuredWidth _Number_, measuredHeight _Number_ **)**  
     This method must be called by onMeasure(int, int) to store the measured width and measured height. Failing to do so will trigger an exception at measurement time.
   - **measuredWidth** - _Number_  
     The measured width of this view. May be a complex bit mask as defined by MEASURED_SIZE_MASK and MEASURED_STATE_TOO_SMALL.
   - **measuredHeight** - _Number_  
     The measured height of this view. May be a complex bit mask as defined by MEASURED_SIZE_MASK and MEASURED_STATE_TOO_SMALL.
 - **layoutNativeView(** left _Number_, top _Number_, right _Number_, bottom _Number_ **)**
   - **left** - _Number_
   - **top** - _Number_
   - **right** - _Number_
   - **bottom** - _Number_
 - **getViewById(** id _String_ **)** _T_    
     _Types Parameters:_ _**T**_  
     Returns the child view with the specified id.
   - **id** - _String_
   - _**return**_ - _T_
 - **focus()** _Boolean_  
     Tries to focus the view.
Returns a value indicating whether this view or one of its descendants actually took focus.
   - _**return**_ - _Boolean_
 - **setInlineStyle(** style _String_ **)**  
     Sets in-line CSS string as style.
   - **style** - _String_  
     - In-line CSS string.
 - **getGestureObservers(** type [_GestureTypes_](../../../ui/gestures/GestureTypes.md) **)** __...
   - **type** - [_GestureTypes_](../../../ui/gestures/GestureTypes.md)
   - _**return**_ - __ of [_GesturesObserver_](../../../ui/gestures/GesturesObserver.md)
 - **observe(** type [_GestureTypes_](../../../ui/gestures/GestureTypes.md), callback _Function_..., thisArg? _Object_ **)**  
     [Deprecated. Please use the on() instead.] Adds a gesture observer.
   - **type** - [_GestureTypes_](../../../ui/gestures/GestureTypes.md)  
     - Type of the gesture.
   - **callback** - _Function_(args [_GestureEventData_](../../../ui/gestures/GestureEventData.md))  
     - A function that will be executed when gesture is received.
   - **thisArg** - _(optional)_ - _Object_  
     - An optional parameter which will be used as `this` context for callback execution.
 - **on(** eventNames _String_, gestures, GestureTypes, callback _Function_..., thisArg? _Object_ **)**  
     A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
   - **eventNames** - _String_  
     - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change") or you can use gesture types.
   - **gestures**
   - **GestureTypes**
   - **callback** - _Function_(data [_EventData_](../../../data/observable/EventData.md))  
     - Callback function which will be executed when event is raised.
   - **thisArg** - _(optional)_ - _Object_  
     - An optional parameter which will be used as `this` context for callback execution.
 - **off(** eventNames _String_, gestures, GestureTypes, callback? _Object_, thisArg? _Object_ **)**  
     Removes listener(s) for the specified event name.
   - **eventNames** - _String_  
     Comma delimited names of the events or gesture types the specified listener is associated with.
   - **gestures**
   - **GestureTypes**
   - **callback** - _(optional)_ - _Object_  
     An optional parameter pointing to a specific listener. If not defined, all listeners for the event names will be removed.
   - **thisArg** - _(optional)_ - _Object_  
     An optional parameter which when set will be used to refine search of the correct callback which will be removed as event listener.
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when a loaded event occurs.
   - **event**
   - **callback** - _Function_(args [_EventData_](../../../data/observable/EventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **on(** event , callback _Function_..., thisArg? _Object_ **)**  
     Raised when an unloaded event occurs.
   - **event**
   - **callback** - _Function_(args [_EventData_](../../../data/observable/EventData.md))
   - **thisArg** - _(optional)_ - _Object_
 - **animate(** options [_AnimationDefinition_](../../../ui/animation/AnimationDefinition.md) **)** _Promise_
   - **options** - [_AnimationDefinition_](../../../ui/animation/AnimationDefinition.md)
   - _**return**_ - _Promise_
 - **createAnimation(** options [_AnimationDefinition_](../../../ui/animation/AnimationDefinition.md) **)** [_Animation_](../../../ui/animation/Animation.md)
   - **options** - [_AnimationDefinition_](../../../ui/animation/AnimationDefinition.md)
   - _**return**_ - [_Animation_](../../../ui/animation/Animation.md)
 - **onLoaded()**
 - **onUnloaded()**
 - **_addView(** view [_View_](../../../ui/core/view/View.md), atIndex? _Number_ **)**
   - **view** - [_View_](../../../ui/core/view/View.md)
   - **atIndex** - _(optional)_ - _Number_
 - **_propagateInheritableProperties(** view [_View_](../../../ui/core/view/View.md) **)**
   - **view** - [_View_](../../../ui/core/view/View.md)
 - **_inheritProperties(** parentView [_View_](../../../ui/core/view/View.md) **)**
   - **parentView** - [_View_](../../../ui/core/view/View.md)
 - **_removeView(** view [_View_](../../../ui/core/view/View.md) **)**
   - **view** - [_View_](../../../ui/core/view/View.md)
 - **_applyXmlAttribute(** attribute _String_, value _Object_ **)** _Boolean_
   - **attribute** - _String_
   - **value** - _Object_
   - _**return**_ - _Boolean_
 - **_isInheritedChange()** _Boolean_
   - _**return**_ - _Boolean_
 - **_addViewToNativeVisualTree(** view [_View_](../../../ui/core/view/View.md), atIndex? _Number_ **)** _Boolean_  
     Performs the core logic of adding a child view to the native visual tree. Returns true if the view's native representation has been successfully added, false otherwise.
   - **view** - [_View_](../../../ui/core/view/View.md)
   - **atIndex** - _(optional)_ - _Number_
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
 - **_shouldApplyStyleHandlers()**
 - **_checkMetadataOnPropertyChanged(** metadata [_PropertyMetadata_](../../../ui/core/dependency-observable/PropertyMetadata.md) **)**
   - **metadata** - [_PropertyMetadata_](../../../ui/core/dependency-observable/PropertyMetadata.md)
 - **_updateLayout()**
 - **_setCurrentMeasureSpecs(** widthMeasureSpec _Number_, heightMeasureSpec _Number_ **)** _Boolean_  
     Called by measure method to cache measureSpecs.
   - **widthMeasureSpec** - _Number_
   - **heightMeasureSpec** - _Number_
   - _**return**_ - _Boolean_
 - **_setCurrentLayoutBounds(** left _Number_, top _Number_, right _Number_, bottom _Number_ **)**  
     Called by layout method to cache view bounds.
   - **left** - _Number_
   - **top** - _Number_
   - **right** - _Number_
   - **bottom** - _Number_
 - **_getCurrentLayoutBounds()** {}...  
     Return view bounds.
   - _**return**_ - { left: _Number_, top: _Number_, right: _Number_, bottom: _Number_ }
 - **_goToVisualState(** state _String_ **)**
   - **state** - _String_
 - **_setNativeViewFrame(** nativeView _Object_, frame _Object_ **)**
   - **nativeView** - _Object_
   - **frame** - _Object_
