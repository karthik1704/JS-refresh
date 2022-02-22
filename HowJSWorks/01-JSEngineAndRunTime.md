# The JS Engine and Runtime

- **JS Engine** is Program that **executes** JS code
- every browser has their own JS engine
    - Chromium Based , NodeJs, Deno  (V8 JS Engine)
    - Firefox (Spidermonkey JS Engine)
    - etc
- any JS engine contains 
    - Call Stack - (our code executed using something called Execution context)
    - Heap - (unstrctured memory bool , where objects are stored)

- **Complilation** - entire code coverted into machine code at once , and written in binary file that can be executed by a computer
- **Interpretation** - Interpreter runs through the source code and executes it line by line
- JS is used be purly interpreted language (it's  much much slower than complied languages)
- Now JS engine used Mix between ** Complilation and Interpretation** is called JIT.
- **JIT** - Entire code is converted into machine  code at once , then executed immediately.

- When JS code enter the JS Engine , 
    - **Parse the code** ( read the code ) - parse into data structure called **AST (Abstract Syntax Tree)** 
        
        - it's works  first split into  each line code inot pieces meaning full to language (like const , funtions) then saving all the pieces in tree structure way . 
        - it's all so checks syntax error . 
        - then this tree used to generate machine code.

    -  **Complilation** - it's  take generate **AST** convert into  machine code.(JIT)
    - **Execution** - the complied machine code excuted right away. (Happens in Stack)

- **Optimaization**  JS Engine has some clever optimaization, 

    - JS engine first generate **unoptimaized** machine code in beginning just so it can execute fast as possible
    - then in background this code optimaized and re-compiled during already running program execution.
    - this makes modern JS engine so fast (like v8)
    - it's all happens in JS engine's special threads that we can't access from code. (it's completely spared from the main thread)

## JS Runtime 

- Runtime is container including all the things that we need to use JS (browser, nodejs , deno, etc)
- Browser Runtime contains,
    - **JS engine** (it's like heart,JS engine alone not enough)
    - **Web APIs**- (DOM, Timers, Fetch API , etc) - it's provided functionalites to the engine, accessible on window object
    - **Callback Queue** -( typical JS Runtime ) it's a data structure, that contains all the callback functions ready executed.(like addEventListener, )

        - when  event happens  **event loop** take callback funtion in callback queue put then into **call stack** then get executed.

- Node Runtime contains,
    - JS engine
    - Callback Queue
    - C++ bindings & Thread Pool
    - nodejs don't have web APIs , nodejs  not a browser.