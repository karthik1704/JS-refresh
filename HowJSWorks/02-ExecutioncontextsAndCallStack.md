# Execution Context and The Call Stack

- **Execution Context**  - it's abstract , environment in which a piece of JS is executed. Stores all the necessary information for some code to be executed.
- When code complied and ready to execute , it's enter Execution Context,
    
    - first creation  of exactly one  **global execution context** -  Default context, created for code that is not inside any funtions (for top-level code like globally declared variables, function??)
    - execution  of top-level code(inside global EC)
    - then Execution of functions and waiting for callbacks. **one execution context per functions** - For each function call , a new executin context is created. (it's contains all neccessary information about funtion to run) it's all make call stack.

- Inside Execution Context,
    
    - Variable Environment
        
        - let, const and var declarations
        - Functions
        - arguments object
    - Scope chain 

        - it's consists Reference of the variables outside of current funtions 
    - *this* keyword
- this 3  generated during "creation phase" , right before execution
- execution context of arrow functions does not contain arguments object and this keyword. instead they get from closet/parent regular functions. 


## Call Stack
- The place where execution contexts get stacked on top of each other, to keep track of where we are in the execution.
- execution context when finish running it's removed from  stack, execution go back to previous execution context.