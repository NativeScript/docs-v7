---
nav-title: "Class ui/core/view.View"
title: "Class ui/core/view.View"
description: "Class ui/core/view.View"
---
## Class: "ui/core/view".View  
_Inherits:_ [_ProxyObject_](../../../ui/core/proxy/ProxyObject.md)  
_Conform to:_ [_ApplyXmlAttributes_](../../../ui/core/view/ApplyXmlAttributes.md)  
This class is the base class for all UI components. 
A View occupies a rectangular area on the screen and is responsible for drawing and layouting of all UI components within. 

##### Static Properties
 - **idProperty** - [_Property_](../../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the id property of each View.
 - **cssClassProperty** - [_Property_](../../../ui/core/dependency-observable/Property.md).    
  Represents the observable property backing the cssClass property of each View.
 - **isEnabledProperty** - [_Property_](../../../ui/core/dependency-observable/Property.md).
 - **isUserInteractionEnabledProperty** - [_Property_](../../../ui/core/dependency-observable/Property.md).

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
 - **width** - _Number_.    
  Gets or sets the desired width of the view.
 - **height** - _Number_.    
  Gets or sets the desired height of the view.
 - **minWidth** - _Number_.    
  Gets or sets the minimum width the view may grow to.
 - **minHeight** - _Number_.    
  Gets or sets the minimum height the view may grow to.
 - **horizontalAlignment** - _String_.    
  Gets or sets the alignment of this view within its parent along the Horizontal axis.
 - **verticalAlignment** - _String_.    
  Gets or sets the alignment of this view within its parent along the Vertical axis.
 - **marginLeft** - _Number_.    
  Specifies extra space on the left side of this view.
 - **marginTop** - _Number_.    
  Specifies extra space on the top side of this view.
 - **marginRight** - _Number_.    
  Specifies extra space on the right side of this view.
 - **marginBottom** - _Number_.    
  Specifies extra space on the bottom side of this view.
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
 - **isLayoutValid** - _Boolean_.    
  Gets is layout is valid. This is read-only property.
 - **cssType** - _String_.
 - **visualState** - _String_.
 - **isLoaded** - _Boolean_.

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
 - **observe(** type _Number_, callback _Function_... **)** [_GesturesObserver_](../../../ui/gestures/GesturesObserver.md)
   - **type** - _Number_
   - **callback** - _Function_(args [_GestureEventData_](../../../ui/gestures/GestureEventData.md))
   - _**return**_ - [_GesturesObserver_](../../../ui/gestures/GesturesObserver.md)
 - **onLoaded()**
 - **onUnloaded()**
 - **applyXmlAttribute(** attributeName _String_, attrValue _Object_ **)** _Boolean_  
     Called for every attribute in xml declaration. <... fontAttributes="bold" ../>
   - **attributeName** - _String_  
     - the name of the attribute (fontAttributes)
   - **attrValue** - _Object_  
     - the value of the attribute (bold)
Should return true if this attribute is handled and there is no need default handler to process it.
   - _**return**_ - _Boolean_