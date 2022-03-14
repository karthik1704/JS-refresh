# ES6 Modules

- Modules stored in files, **exaclty one module per file.**

|                        | ES6 Module              |        Script |
| :--------------------: | :---------------------- | ------------: |
| **Top-level varibles** | Scoped to module        |        Global |
|    **Default mode**    | strict mode             | "Sloppy" mode |
|   **Top-level this**   | undefined               |        window |
| **Import and exports** | Yes                     |            No |
|    **HTML linking**    | \<script type="module"> |      <script> |
|  **File downloading**  | Async                   |          Sync |

## How ES6 modules are imported

- Modules are **imported synchoronusly**
- Possible thanks to top-level ("static") imports, which
  make **imports known before execution**
- This makes **bundling** and **dead code elimination** possible

## Modern and clean code

### Readable code

- Write code so that **other** can understand it
- write code so that **you** can understand it in 1 year
- Avoid too "clever" and overcomplicated solutions
- use descriptive variable names: **what they contain**
- use descriptive function name: **what they do**

### General

- Use DRY
- Don't pollute global namespace, encapsulate instead
- Don't use **var**
- use strong type checks (=== and !==)

### Functions

- Generally, funtions should do **only one thing**
- Don't use more than 3 function parameters
- use default parameters whenever possible
- Generally, return same data type as received
- Use arrow funtions when they make code more readable

### OOP

- use ES6 classes
- Encapsulate data and **don't mutate ** it from outside the class
- Implement method chaining
- Do **not** use arrow functions as methods (in regular objects)

### Avoid Nested Code

- Use early **return** (guard classes)
- Use ternary or logical operators instead if
- Use multiple **if** instead of **if/else-if**
- Avoid **for** loops , use array methods instead
- Avoid callback based asynchronous APIs

### Async Code
- Consume promises with async/await for best readability
- Whenever Possible, run promises in **parallel** (Promise.all)
- Handle errors and promise rejections