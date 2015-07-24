---
nav-title: "ActionBar How-To"
title: "How-To"
description: "Examples for using ActionBar"
---
# ActionBar
Using a ActionBar requires the action-bar module.
``` JavaScript
var actionBarModule = require("ui/action-bar");
```

## Setting Title and Icon
```XML
<Page>
  <Page.actionBar>
    {%raw%}<ActionBar title="{{ title }}" android.icon="res://ic_test"/>{%endraw%}
  </Page.actionBar>
  ...
</Page>
```
The icon can only be set in Android platform. Following the design guides it is automatically hidden in Lollipop versions (API level >= 20). You explicitly control its visibility with the `android.iconVisibility' property.


## Setting Custom Title View 
```XML
<Page loaded="pageLoaded">
  <Page.actionBar>
    <ActionBar title="Title">
      <ActionBar.titleView>
        <StackLayout orientation="horizontal">
          <Button text="1st" />
          <Button text="2nd" />
          <Button text="3rd" />
        </StackLayout>
      </ActionBar.titleView>
    </ActionBar>
  </Page.actionBar>
  ...
</Page>
```

## Setting Action Items
```XML
<Page>
  <Page.actionBar>
    <ActionBar title="Title">
      <ActionBar.actionItems>
        <ActionItem text="left"  ios.position="left"/>
        <ActionItem text="right" ios.position="right"/>
        <ActionItem text="pop"   ios.position="right"  android.position="popup"/>
      </ActionBar.actionItems>
    </ActionBar>
  </Page.actionBar>
  ...
</Page>
```

The position option is platform specific. The available values are as follows:
* **Android** - `actionBar`, `actionBarIfRoom` and `popup`. The default is `actionBar`.
* **iOS** - `left` and `right`. The default is `left`.

## Setting Navigation Button
```XML
<Page>
  <Page.actionBar>
    <ActionBar title="Title">
      <NavigationButton text="go back"/>
    </ActionBar>
  ...
</Page>
```

