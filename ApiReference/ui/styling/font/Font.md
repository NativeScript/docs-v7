---
nav-title: "Class ui/styling/font.Font"
title: "Class ui/styling/font.Font"
description: "Class ui/styling/font.Font"
---
## Class: "ui/styling/font".Font

##### Static Properties
 - **default** - [_Font_](../../../ui/styling/font/Font.md).

##### Static Functions
 - **equals(** value1 [_Font_](../../../ui/styling/font/Font.md), value2 [_Font_](../../../ui/styling/font/Font.md) **)** _Boolean_
   - **value1** - [_Font_](../../../ui/styling/font/Font.md)
   - **value2** - [_Font_](../../../ui/styling/font/Font.md)
   - _**return**_ - _Boolean_
 - **parse(** cssValue _String_ **)** [_Font_](../../../ui/styling/font/Font.md)
   - **cssValue** - _String_
   - _**return**_ - [_Font_](../../../ui/styling/font/Font.md)

##### Instance Properties
 - **fontFamily** - _String_.
 - **fontStyle** - _String_.
 - **fontWeight** - _String_.
 - **fontSize** - _Number_.
 - **isBold** - _Boolean_.
 - **isItalic** - _Boolean_.

##### Instance Functions
 - **getAndroidTypeface()** _Object_
   - _**return**_ - _Object_
 - **getUIFont(** defaultFont _Object_ **)** _Object_
   - **defaultFont** - _Object_
   - _**return**_ - _Object_
 - **withFontFamily(** family _String_ **)** [_Font_](../../../ui/styling/font/Font.md)
   - **family** - _String_
   - _**return**_ - [_Font_](../../../ui/styling/font/Font.md)
 - **withFontStyle(** style _String_ **)** [_Font_](../../../ui/styling/font/Font.md)
   - **style** - _String_
   - _**return**_ - [_Font_](../../../ui/styling/font/Font.md)
 - **withFontWeight(** weight _String_ **)** [_Font_](../../../ui/styling/font/Font.md)
   - **weight** - _String_
   - _**return**_ - [_Font_](../../../ui/styling/font/Font.md)
 - **withFontSize(** size _Number_ **)** [_Font_](../../../ui/styling/font/Font.md)
   - **size** - _Number_
   - _**return**_ - [_Font_](../../../ui/styling/font/Font.md)