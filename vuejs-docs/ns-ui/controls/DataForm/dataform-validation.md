---
title: Validation
page_title: RadDataForm Validation | Progress NativeScript UI Documentation
description: This article explains how to use the validation in RadDataForm for NativeScript.
slug: dataform-validation-overview-vue
tags: raddataform, validation, dataform, vue
position: 0
publish: true
---

# RadDataForm: Validation Overview

If you followed the [getting started]({% slug dataform-gettingstarted-vue %} "RadDataForm getting started") section, you now know how to edit an object's properties with `RadDataForm` for NativeScript. Sometimes you may need to validate if the user's input follows some requirements - for example, not leave an empty field in a registration form or provide a valid email. This article will present you the validation feature in {% typedoc_link classes:RadDataForm %} and show you how you can use the existing validators and create custom ones.

* [JSON Metadata](#json-metadata)
* [Validators List](#validators-list)
* [Validation Modes](#validation-modes)
* [Validation Events](#validation-events)
* [Custom Validation](#custom-validation)
* [References](#references)

#### Figure 1: How validated field looks on Android (left) and iOS (right)

![NativeScriptUI-DataForm-Validation-Android](/controls/NativeScript/DataForm/images/dataform-validation-overview-android.png "Validation in DataForm in Android") ![NativeScriptUI-DataForm-Validation-iOS](/controls/NativeScript/DataForm/images/dataform-validation-overview-ios.png "Validation in DataForm in iOS")

## JSON Metadata

You can declare the validators in the JSON Metadata through the `validators` key. The value of the validators should be an array of validators, where each validator is an object that has a `name` and optionally `params`. The `params`, if present, is another object containing key value pairs, where the keys are the properties of the validator. Here's an example:

#### Example: How to add validators with JSON for a property

```
import * as frameModule from 'tns-core-modules/ui/frame';
import { RegisteringUser } from '../data';

export default {
  template: `
  <Page>
    <StackLayout>
      <RadDataForm
        ref="dataform"
        :source="person"
        :metadata="personMetadata">
      </RadDataForm>
      <Label :text="text"
             textWrap="true"
             margin="12"
             android:color="#C73339"
             ios:color="red"
             horizontalAlignment="center"></Label>
      <Button
        text="Login"
        margin="12"
        horizontalAlignment="stretch"
        @tap="onTap()"></Button>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      title: description,
      person: {
        name: 'John',
        age: 23,
        email: 'john@company.com'
      },
      personMetadata: {
        'isReadOnly': false,
        'commitMode': 'Immediate',
        'validationMode': 'Immediate',
        'propertyAnnotations':
        [
          {
            'name': 'email',
            'displayName': 'E-Mail',
            'index': 1,
            'editor': 'Email',
            'validators': [{
              'name': 'RegEx',
              'params': {
                'regEx': '^[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}\\@telerik.com$',
                'errorMessage': 'Please provide your @telerik.com email.'
              }
            }]
          },
          {
            'name': 'age',
            'displayName': 'Age',
            'index': 2,
            'validators': [
              {
                'name': 'RangeValidator',
                'params': {
                  'minimum': 1,
                  'maximum': 100,
                  'errorMessage': 'Age must be between 1-100.',
                }
              },
            ],
          }
        ]
      }
    };
  }
};

```

## Validators List

[This article]({% slug dataform-validation-list-angular %} "RadDataForm validators") contains the list with all built-in validators that you can use with {% typedoc_link classes:RadDataForm %} for NativeScript.

## Validation Modes

You can choose when the validation of the changes happens by changing the data form's {% typedoc_link classes:RadDataForm,member:validationMode %} property.

```
import { ValidationMode } from 'nativescript-ui-dataform';

export default {
  template: `
  <Page>
    <ActionBar>
      <ActionItem text="Immediate" android.position="popup" @tap="onImmediateTap"></ActionItem>
      <ActionItem text="OnLostFocus" android.position="popup" @tap="onOnLostFocusTap"></ActionItem>
      <ActionItem text="Manual" android.position="popup" @tap="onManualTap"></ActionItem>
    </ActionBar>
    <StackLayout>
      <RadDataForm
        ref="dataform"
        :source="person"
        :metadata="personMetadata"
        :validationMode="validationMode"
        commitMode="Manual">
      </RadDataForm>
      <Button
        text="Validate manually"
        horizontalAlignment="stretch"
        @tap="onValidateTap()"></Button>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      text: '',
      validationMode: ValidationMode.Immediate,
      person: {
        username: '',
        password: '',
      },
      personMetadata: {
        'isReadOnly': false,
        'propertyAnnotations':
        [
          {
            'name': 'username',
            'displayName': 'Nick',
            'index': 0,
            'validators': [
              { 'name': 'NonEmpty' },
              { 'name': 'MaximumLength', 'params': { 'length': 10 } }
            ]
          },
          {
            'name': 'password',
            'displayName': 'Password',
            'index': 2,
            'validators': [
              {
                'name': 'NonEmpty',
              }
            ]
          },
        ]
      }
    };
  },
  methods: {
    onImmediateTap() {
      this.validationMode = ValidationMode.Immediate;
    },
    onOnLostFocusTap() {
      this.validationMode = ValidationMode.OnLostFocus;
    },
    onManualTap() {
      this.validationMode = ValidationMode.Manual;
    },
    onValidateTap() {
      this.$refs.dataform.validateAll()
        .then(result => {
          console.log(`Validation result: ${result}`);
        });
    },
  }
};
```

You can read more about the different modes in [this article]({% slug dataform-validation-modes-angular %} "RadDataForm validation modes").

## Validation Events

You can use the validation events to get notified when {% typedoc_link classes:RadDataForm %} validates its fields. You can also use these events for manual and/or asynchronous validation.

```
import * as frameModule from 'tns-core-modules/ui/frame';
import { ValidationMode } from 'nativescript-ui-dataform';
import { BaseUser } from '../data';

const description = 'Validation Events';

export default {
  name: 'ValidationEvents',
  description: description,
  template: `
  <Page>
    <StackLayout>
      <RadDataForm
        ref="dataform"
        :source="person"
        :metadata="personMetadata"
        @propertyValidate="onPropertyValidate"
        @propertyValidated="onPropertyValidated">
      </RadDataForm>
      <Label :text="text"
             textWrap="true"
             margin="12"
             android:color="#C73339"
             ios:color="red"
             horizontalAlignment="center"></Label>
    </StackLayout>
  </Page>
  `,
  data () {
    return {
      person: {
        password: '',
        password2: '',
      },
      personMetadata: {
        'isReadOnly': false,
        'commitMode': 'Immediate',
        'validationMode': 'Immediate',
        'propertyAnnotations':
        [
          {
            'name': 'password',
            'displayName': 'Password',
            'index': 0,
            'validators': [
              {
                'name': 'NonEmpty',
              },
            ]
          },
          {
            'name': 'password2',
            'displayName': 'Repeat Password',
            'index': 1,
            'validators': [
              {
                'name': 'NonEmpty',
              },
            ]
          },
        ]
      }
    };
  },
  methods: {
    onPropertyValidate(args) {
      let validationResult = true;

      if (args.propertyName === 'password2') {
          const dataForm = args.object;
          const password1 = dataForm.getPropertyByName('password');
          const password2 = args.entityProperty;
          if (password1.valueCandidate !== password2.valueCandidate) {
              password2.errorMessage = 'Passwords do not match.';
              validationResult = false;
          }
      }
      args.returnValue = validationResult;
    },
    onPropertyValidated({ object, propertyName, entityProperty }) {
      const validatedValue = entityProperty.valueCandidate;
      const validationResult = entityProperty.isValid;

      console.log(`Validated!
        PropertyName: ${propertyName}
        Value: ${validatedValue}
        Result: ${validationResult}`);
    },
  }
};
```

You can read more about the validation events in [this article]({% slug dataform-validation-events-angular %} "RadDataForm validation events").

## References

Related articles you might find useful:

* [**Validators List**]({% slug dataform-validation-list-angular %})
* [**Validation Modes**]({% slug dataform-validation-modes-angular %})
