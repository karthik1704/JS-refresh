# Declarative and Fuctional JS Principles

- Two funamentally different ways of writing code (paradigms)
  - Imperative
  - Declarative

## Imperative

- Programmer explains **"How to do things"**
- We explain the computer \*every single step it has to follow to achieve result

```js
const arr = [2, 4, 6, 8];
const doubled = [];
for (let i = 0; i < arr.length; i++) doubled[i] = arr[i] * 2;
```

## Declarative

- Programmer tells **"WHAT do do**
- We simply describe the way the computer should achieve the result
- The **HOW** (step-by-step instructions) gets abstracted away

```js
const arr = [2, 4, 6, 8];
const doubled = arr.map((n) => n * 2);
```

## FunctionalProgramming

- **Declarative** progarmming paradigm
- Based on the idea of writing software by combining many **pure functions** , avoiding **side effects** and **mutating** data.

- **Side effect** - Modification (mutation) of any data **outside** of the function (mutating external variables, logging to console,  writing to DOM , etc.)

- **Pure Functions** - Function without side effects. Does not depend on external variable. **Given the same inputs, always returns the same outputs.

- **Immutability** - State(data) is **never** modified! Instead , state is **Copied** and the copy is mutated and returned.

### Functional Programming Techniques

- Try to avoid data mutations
- Use built-in methods that don't produce side effects
- Do data transformations with methods such as **.map(), .filter()** and **.reduce()**
- Try to avoid side effects in functions : this is of course not always possible!.

### Declarative Syntax

- Use array and object destructuring
- Use the spread operator (...)
- Use the ternary (conditinal) operator
- Use template literals
