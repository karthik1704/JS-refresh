# The This Keyword

- **this keyword/variable** - Special variable that is created for every execution context(every function). Takes the value of (point to) the **\*owner\***  of the function in which the this keyword is used.
- *this* is **Not static**- it depends on how the function is called, and its value  is only assigned when the **function is actually called**

**Method** 👉 this = \<Object that is calling the method \>

**Simple  function call** 👉 this = undefined (only in strict mode, otherwise window obj/global obj display)

**Arrow functions** 👉 this = \<this of surrounding function (lexical this) \>
    
- Arrow functions don't get own **this**
- it borrowed from surrounding functions / parent function (its called lexical this keyword)

**Event listener** 👉 this = \<DOM element that the handler is attached to \>

> **this** does **NOT** point to the function itself, and also NOT the variable environment!