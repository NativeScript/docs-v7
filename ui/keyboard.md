---
title: Keyboard
description: Learn how to configure the soft keyboard when entering text in a TextField or TextView.
position: 12
slug: keyboard
previous_url: /keyboard
---

# Keyboard Type
All widgets that inherit from [`EditableTextBase`]({{site.baseurl}}/ApiReference/ui/editable-text-base/EditableTextBase.md), i.e. [`TextField`]({{site.baseurl}}/ApiReference/ui/text-field/TextField.md) and [`TextField`]({{site.baseurl}}/ApiReference/ui/text-view/TextView.md), have a **keyboardType** property which gets or sets the soft keyboard type that will be shown while in edit mode. Possible values are contained in the [`KeyboardType`]({{site.baseurl}}/ApiReference/ui/enums/KeyboardType/README.html) enumeration.

- datetime
 - Android: [TYPE_CLASS_DATETIME](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_DATETIME) | [TYPE_DATETIME_VARIATION_NORMAL](http://developer.android.com/reference/android/text/InputType.html#TYPE_DATETIME_VARIATION_NORMAL)
 - iOS:  [UIKeyboardTypeNumbersAndPunctuation](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
 - ![datetime](../img/modules/keyboard/datetime.png "datetime")
- phone
 - Android: [TYPE_CLASS_PHONE](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_PHONE)
 - iOS:  [UIKeyboardTypePhonePad](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
 - ![phone](../img/modules/keyboard/phone.png "phone")
- number
 - Android: [TYPE_CLASS_NUMBER](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_NUMBER) | [TYPE_NUMBER_VARIATION_NORMAL](http://developer.android.com/intl/es/reference/android/text/InputType.html#TYPE_NUMBER_VARIATION_NORMAL) | [TYPE_NUMBER_FLAG_SIGNED](http://developer.android.com/reference/android/text/InputType.html#TYPE_NUMBER_FLAG_SIGNED) | [TYPE_NUMBER_FLAG_DECIMAL](http://developer.android.com/reference/android/text/InputType.html#TYPE_NUMBER_FLAG_DECIMAL)
 - iOS:  [UIKeyboardTypeNumbersAndPunctuation](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
 - ![number](../img/modules/keyboard/number.png "number")
- url
 - Android: [TYPE_CLASS_TEXT](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_TEXT) | [TYPE_TEXT_VARIATION_URI](http://developer.android.com/reference/android/text/InputType.html#TYPE_TEXT_VARIATION_URI)
 - iOS:  [UIKeyboardTypeURL](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
 - ![url](../img/modules/keyboard/url.png "url")
- email
 - Android: [TYPE_CLASS_TEXT](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_TEXT) | [TYPE_TEXT_VARIATION_EMAIL_ADDRESS](http://developer.android.com/reference/android/text/InputType.html#TYPE_TEXT_VARIATION_EMAIL_ADDRESS)
 - iOS:  [UIKeyboardTypeEmailAddress](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
 - ![email]({{site.baseurl}}/img/modules/keyboard/email.png "email")

# Return Key Type
All widgets that inherit from [`EditableTextBase`]({{site.baseurl}}/ApiReference/ui/editable-text-base/EditableTextBase.md), i.e. [`TextField`]({{site.baseurl}}/ApiReference/ui/text-field/TextField.md) and [`TextField`]({{site.baseurl}}/ApiReference/ui/text-view/TextView.md), have a **returnKeyType** property which gets or sets the soft keyboard return key type. Possible values are contained in the [`ReturnKeyType`]({{site.baseurl}}/ApiReference/ui/enums/ReturnKeyType/README.html) enumeration.

- done
 - Android: [IME_ACTION_DONE](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_DONE)
 - iOS: [UIReturnKeyDone](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
 - ![done](../img/modules/keyboard/done.png "done")
- next
 - Android: [IME_ACTION_NEXT](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_NEXT)
 - iOS: [UIReturnKeyNext](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
 - ![next](../img/modules/keyboard/next.png "next")
- go
 - Android: [IME_ACTION_GO](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_GO)
 - iOS: [UIReturnKeyGo](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
 - ![go](../img/modules/keyboard/go.png "go")
- search
 - Android: [IME_ACTION_SEARCH](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_SEARCH)
 - iOS: [UIReturnKeySearch](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
 - ![search](../img/modules/keyboard/search.png "search")
- send
 - Android: [IME_ACTION_SEND](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_SEND)
 - iOS: [UIReturnKeySend](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
 - ![send](../img/modules/keyboard/send.png "send")
