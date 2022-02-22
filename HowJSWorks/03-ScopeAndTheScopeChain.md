# Scope And The Scope Chain

- **Scoping** - How out program's variables are organized and accessed. "where do variables live ?" or "Where can we access a certain variable, and Where not?"
- JS uses **Lexical Scoping** - Scoping is controlled by placement of functions  and blocks in the code.

- **Scope** - Space or environment in which a certain variable is declared  (variable environment in case of functions). 
- There is,
    
    - **Global scope**

        - Outside of any function or block
        - accessible everywhere
    - **Function scope**

        - Variables are accessible only inside functions, NOT outside
        - also called local scope
    - **Block scope**

        - Introduced in ES6
        - example (if block, for loop block , etc)
        - Variables are accessible only inside block (only let and const variables, but var is function scoped)
        - functions are also block scoped(only in strict mode)

- **Scope of variable** - Region of our code where a certain variable can be accessed.

## Scope Chain

- Scope has access to variables from all outer scopes / parent scopes.
- so scope chain is loopup variable in outside scopes until its find that variable or throws error. (it's only works down to up variable lookup.(child to parent way) )
- variable not copied to one scope to another