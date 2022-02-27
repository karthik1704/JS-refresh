# Data

- From the program itself : Data written directly in source code (eg: status messages)
- From the Ui : Data input from the user or data written in DOM 
- From external sources: Data fetched for example from web API

 - Collection of Data -> Data structure -> if Simple List (Arrays or sets) or if Key/Value parirs(Object or Maps)
 
 **Other Built-in:**
 - WeakMap
 - WeakSet

 **Non-Built in:**
 - Stacks
 - Queues
 - Linked Lists
 - Trees 
 - Hash Tables
---

## Arrays
- Use when you need **ordered** list of values (might contain duplicates)
- Use when you need to **manipulate** data

## Sets
- Use when you need to work with **unique** values
- Use when **high-performance** is *really* important
- use to ** remove duplicates** from arrays

## Objects
- More "traditional" key/value store ("abused" objects)
- Easier to write and access values with . and  []
- **use**
    - when you need to include **functions**(methods)
    - when working with JSON (can convert to map)
## Maps
- Better Performance
- Keys can have **any** data type
- Easy to iterate
- Easy to compute size
- **use**
    - when you simply need to map key to values
    - when you need keys that are **not** strings
