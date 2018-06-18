---
nav-title: "C Functions"
title: "C Functions"
description: "Describes how C functions are exposed."
position: 4
---

# C Functions
C functions are exposed in the JavaScript context as JavaScript functions.
Consider the following C declarations:
```objective-c
// UIGraphics.h
CGContextRef UIGraphicsGetCurrentContext();

// CGContext.h
void CGContextAddArc(CGContextRef c, CGFloat x, CGFloat y,
  CGFloat radius, CGFloat startAngle, CGFloat endAngle, int clockwise);

void CGContextFillPath(CGContextRef c);
```

You can use these C functions from JavaScript:
```javascript
var MyControl = UIControl.extend({
    // ...
    drawRect: function (rect) {
        var ctx = UIGraphicsGetCurrentContext();
        this.dotBackgroundColor.setFill();
        CGContextAddArc(ctx, this.xCenter, this.yCenter, this.maxRadius, 0, Math.PI * 2, 0);
        CGContextFillPath(ctx);
    }
});
```

For more information about function arguments see:
 * [Marshalling](../Marshalling.md)
 * [C Pointers](C-Pointers.md)

## Variadic Functions are not Available
All variadic C functions are not available:
```objective-c
int fprintf(FILE *, const char *, ...);
```

All C functions with `va_list` parameter are not available:
```objective-c
CF_EXPORT
CFStringRef CFStringCreateWithFormatAndArguments(CFAllocatorRef alloc, CFDictionaryRef formatOptions, CFStringRef format, va_list arguments) CF_FORMAT_FUNCTION(3,0);
```

## Inline Functions are not Available
Inline functions are not available at runtime. Consider the following:
```objective-c
NS_INLINE MKCoordinateSpan MKCoordinateSpanMake(CLLocationDegrees latitudeDelta, CLLocationDegrees longitudeDelta)
{
    MKCoordinateSpan span;
    span.latitudeDelta = latitudeDelta;
    span.longitudeDelta = longitudeDelta;
    return span;
}
```

Invocations of `MKCoordinateSpanMake` in Objective-C will inline the function body in-place of the invocation. The native library that is produced however may not have a `MKCoordinateSpanMake` symbol. Such functions are not exposed in the JavaScript.

There are exceptions, we have written by hand, for convenience:
 * `CGPointMake`
 * `CGRectMake`
 * `CGSizeMake`
 * `UIEdgeInsetsMake`
 * `NSMakeRange`

These 5 functions can be used from JavaScript.
