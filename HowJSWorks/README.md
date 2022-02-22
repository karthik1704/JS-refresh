# How JS Works Behind
JavaScript is ,
- High Level
- Prototype-Based object-oriented
- Multi-paradigm
- Interpreted or JIT(Just-in-Time compiled)
- Dyamic
- Single threaded
- **Garbage-Collected** Programming Language with **First-Class Functions** and a **Non-Blocking event loop ** concurrency model 🤯😵(?? *WTF*)

## High-Level 

Any programs needs system resources , but High-Level language (like JS, Python) is do this automatically , we don't need to manually ask / assign system resoures.  but comes with cons High-level languages not as fast as low level languages (like c).

## Garbage-Collected
 it's basically algoritham in JS engine, which automatically removes unused objects from system resources.
so we don't do it in manually.

## Interpreted or JIT(Just-in-Time compiled)
- JS in Interpretered or JIT language
- system only understand machine code (0,1)
- so we writting js is abstractin of (0 and 1's) , JS engine convert into machine code using Interpreter/JIT

## Multi-Paradigm
- it's make JS popular
- **Paradigm** - An approach and mindset of structuring code , which will direct your coding style and technique. (Imperative vs Declarative)
- 3 types (JS have all three , some language have one or two)
    - Procedural Programming (very linear way , some functions)
    - Object-Oriented programming(OOP)(classes)
    -  Functional Programming (FP) (Functions)

## Prototype-Based object-oriented
- JS is OOP nature is prototype-based object-orientd approch
- all most **everything in JS is object** (expect Primitive value (number, string, etc.))
- array is object

## First-Class Functions
- In a language with first-class functions , **functions are simply treated as variables**. 
- We can pass them into other functions , and return them from functions

## Dynamic
- JS is dynamically-typed languages (loosly typed language)
- There is no data type definitions when declare variables, etc
- Types becomes known at runtime
- Data type of variable is  automatically changed (when value changed data type change in runtime)
 
## Single Threaded and Non-blocking event loop concurreny model
- JS is runs on single thread
- **concurreny model** - how the JS engine handles multiple tasks happening at the same time. (we need this because JS is single thread, so  it can only do one thing at a time).
- if long-running task running (like fetching data form server) then it's block single thread(because thread do one job at a time). because of this other code don't run, so  we want non-blocking behavior
- do achive non-block behavior by using an **event-loop** - takes long running tasks, executes them in the **background** , then puts them back  in the main thread once they are finished.

