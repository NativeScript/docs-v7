---
nav-title: "C Enums"
title: "C Enums"
description: "Describes how enumerated types are exposed."
position: 6
---

# Enums

Enumeration types are exposed as objects with the name of the `enum`. If the enum is typedef-ed immediately after its declaration, the name of the typedef is used instead of the original enum name. For example, given the following definitions:

```objective-c
typedef enum my_enum_name {
    MFMailComposeResultCancelled,
    MFMailComposeResultSaved,
    MFMailComposeResultSent,
    MFMailComposeResultFailed
} MyEnumName;
```
The name of the enum will be `MyEnumName`.

Each enum object has **two properties** for every enum member - one is the full member name and the other is the short member name (the short member name is also used in swift to expose NS_ENUM and NS_OPTIONS enumerations). The short member names are generated from the full member names by removing the common prefix at the beginning.
> **Full member names are deprecated and will be removed in future versions, so it is not recommended to use them.**

All enum members are also exposed as global variables (as properties of the global object). So you can use an enum member in three different ways.

For example, given the following definitions:
```objective-c
enum MFMailComposeResult {
    MFMailComposeResultCancelled,
    MFMailComposeResultSaved,
    MFMailComposeResultSent,
    MFMailComposeResultFailed
};

typedef NS_ENUM(NSInteger, NSFormattingUnitStyle) {
    NSFormattingUnitStyleShort = 1,
    NSFormattingUnitStyleMedium,
    NSFormattingUnitStyleLong
};

typedef NS_OPTIONS(NSUInteger, NSLinguisticTaggerOptions) {
    NSLinguisticTaggerOmitWords         = 1 << 0,
    NSLinguisticTaggerOmitPunctuation   = 1 << 1,
    NSLinguisticTaggerOmitWhitespace    = 1 << 2,
    NSLinguisticTaggerOmitOther         = 1 << 3,
    NSLinguisticTaggerJoinNames         = 1 << 4
};
```
You can use them from JavaScript in the following way:
```javascript
console.log(MFMailComposeResult.MFMailComposeResultSent); // 2 DEPRECATED
console.log(MFMailComposeResult.Sent); // 2
console.log(MFMailComposeResultSent); // 2

console.log(NSFormattingUnitStyle.NSFormattingUnitStyleMedium); // 2 DEPRECATED
console.log(NSFormattingUnitStyle.Medium); // 2
console.log(NSFormattingUnitStyleMedium); // 2

console.log(NSLinguisticTaggerOptions.NSLinguisticTaggerOmitWhitespace); // 4 DEPRECATED
console.log(NSLinguisticTaggerOptions.OmitWhitespace); // 4
console.log(NSLinguisticTaggerOmitWhitespace); // 4
```

You can also go from a numeric value to the full member name of that value in the enum:
```javascript
console.log(MFMailComposeResult[2]); // logs "MFMailComposeResultSent", but in the future the code will log "Sent" (the short name of the member)
```

> In the future, when full member names are removed the enum object indexer will return the short name of the member.

> **NOTE:** Values that fall out of the `int32_t` range are not supported. See [limitations](../Limitations.md) for details.
