---
nav-title: "Class utils/containers.ArraySortHelper"
title: "Class utils/containers.ArraySortHelper"
description: "Class utils/containers.ArraySortHelper"
---
## Class: "utils/containers".ArraySortHelper  
Helper class used to sort arrays.

##### Static Functions
 - **sort(** keys _Array_..., index _Number_, length _Number_, compareFn _Function_... **)**    
     _Types Parameters:_ _**T**_  
     Sorts an array using a comparer function to order elements.
   - **keys** - _Array_ of _T_  
     - The array which will be sorted.
   - **index** - _Number_  
     - Starting index for sorting
   - **length** - _Number_  
     - How many items to sort.
   - **compareFn** - _Function_(a _T_, b _T_) _Number_  
     - A function that compares two array members.