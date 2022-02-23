# Hoisting and The TDZ:

- **Hoisting** - Makes some types of variables accessible/usable in the code before they are actually declared. (variables lifted to the top of their scope).

- Before execution , code is scanned for variable declarations, and for each variable , a new property is created in the **variable environment object**.

---

|                               |             Hosisted?              |          Initial Value |  Scope   |
| :---------------------------- | :--------------------------------: | ---------------------: | :------: |
| function declarations         |                Yes                 |        Actual Function |  Block   |
| var variables                 |                Yes                 |              undefined | Function |
| let and const variables       |                No\*                | \<Uninitialized>\, TDZ |  Block   |
| function expression and arrow | Depends if using var or let/ const |

- \* let and const variables hosited technically . but not in practice
- TDZ -Temporal Dead Zone

## Temporal Dead Zone , Let and Const
- ??
- **Makes it easier to avoid and catch errors**: accessing variables before declaration is bad paratice and should be avoided;
- Makes const variables actually work


## Why Hoisting
- Using functions before actual declaration
- var hositing is just a byproduct
