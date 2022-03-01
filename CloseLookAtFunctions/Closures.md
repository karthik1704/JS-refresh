# Closures
- A closure is the closed-over **variable-environment** of the execution context **in which a function was created**, even **after** thet execution context is gone;

- (less formal) A closure gives a function access to all the variable **of its parent function**, even **after** that parent function has returned. The function keeps a **reference** to its outer scope, which **preserves** the scope chain throughout time.

- A Closure makes sure that a  function doesn't loose connection to variables that existed at the function's birth place;

- A function has access to the variable environment (VE) of the execution context in which it was created
- **Closure:** VE attached to the function, exactly as it was at the time and place the function was created
- **Priority** over scope chain

- We **do NOT** have to manually create closures, this is JS feature that happens automatically
- We can't even access closed-over variables explicitly. 
- A closure is **NOT** a tangible JS object.