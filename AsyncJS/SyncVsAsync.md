# Sync Vs. Async

- **Thread of execution** - Part of execution context that actully executes the code in computer's cpu

## Synchronous Code

- Most code is **synchronous**
- Synchronous code is **executed line by line**
- Each line of code **waits** for previous line to finish

- (cons) - Long-running operations **block** code execution

## Asynchronous Code

- Asynchronous code is executed \*\*after a task that runs in the "background" finishes
- Async code is **non-blocking**
- Execution doesn't wait for an async task to finish its work
- Callback fn alone do **NOT** make code asynchronous

- Not all callBack fn() is Async (some async and some not you need to know which it's is)

## AJAX

- **Asynchronous JavaScript And XML** - Allows us to communicate with remote web servers in an
  **asynchronous way**. with AJAX calls , we can **request data** from web servers dynamically.

## API

- **Application Programming Interface** - Piece of software that can be used by another piece of software,
  in order to allow **applications to talk to each other**
- There are be many types of API's in web development
  - DOM API
  - Geolocation API
  - Own Class API(we write classes)
  - "Online" API - Application running on a server , that recevies requests for data , and sends data back as response.

- We can build our own web API's (require back-end development, e.g with node.js) or use **3rd-party** APIs


## Promises (ES6)
- **Promise** - An object that is used as a placeholder for the future result of an asynchronous operation
- A container for an asynchronously delivered value
- A container for a future value

- we no longer to rely on events and callbacks passed into asynchronous functions to handle asynchoronus results
- Instead of nesting callbacks, we can **chain promises** for a sequence of asynchronous operations: **escaping callback hell**.

### Lifecylce
  - Pending - Before the future value is available
  - Settled - Asynchronous task **has finished**
    - Fulfilled - Success ! data available
    - Rejected - Error / Fail 
  - We are able **handle** these different states in our code!
  

## Async Behind scenes : The Event Loop

- Async task run in web APIs environment (not in callStack , if callstack then task block code to run until task finish)
- once async task done in Web API then the async task linking call function add to callback queue
- callback queue is ordered list (all the callback in line to be executed)

- event loop check call stack empty or not, if empty then event loop move call back fn to callstack to executed.(this called event loop tick)
- event loop decides when each call back is executed: orchestration 

### With promises

- callback registed with promise not going to callback queue when task complete
- call with promises have spl queue microtasks queue
- **microtasks queue** have priority than callback queue
- when callstack empty event loop check micro task first (run all of them)then call back queue
  