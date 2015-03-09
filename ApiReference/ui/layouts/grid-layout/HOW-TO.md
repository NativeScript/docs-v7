---
nav-title: "grid-layout How-To"
title: "How-To"
description: "Examples for using grid-layout"
---
## GridLayout sample
### Create GridLayout with 3 columns - 80px, *, auto size and 2 rows - 100px and auto size
### Create grid layout with an xml declaration
``` XML
<GridLayout columns="80, *, auto" rows="auto, *" >
 <Button col="0" />
 <Button col="1" />
 <Button col="2" />
// by default column and row are set to 0
 <Button row="1" colSpan="3" />
</GridLayout>
```
