# OOP

- Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects
- We use objects to **model** (describe) real-world or abstract features
- Object may contain data (properties) and code (methods). By using objects, we pack **data and the corresponding behavior** into one block;
- In OPP, objects are **self-contained** pieces/blocks of code
- Object are **building blocks** of applications , and interact with one another
- Interactions happen through a **public interface** (API): methods that the code **outside** of the object can access and use to communicate with the object;
- OOP was developed with the goal of **organizing** code, to make it **more flexible and easier to maintain** (avoid "spaghetti code").

## Classes and Instances

- Classes (Traditional OOP)
  - Like a blueprint from which we can create new objects(Instances)

## OPP Principles

- 4 Fundamantal OOP Principles
  - Abstraction
  - Encapsulation
  - Inheritance
  - Polymorphism

### Abstraction

- Ignoring or hiding details that **don't matter**, allowing us to get an overview perpective of the thing we're implementing, instead of messing with details that don't really matter to our implementation.

### Encapsulation

- Keeping properties and methods **private** inside the class, so they are **not accessible from outside the class**. Some methods can be **exposed** as a public interface (API).
- Prevents external code from accidentally manipulating internal properties/state

### Inheritance

- Making all properties and methods of a certain class **available to a child class**, forming a hierarchical relationship between classes. This allows us to **reuse common logic** and to model real-world relationships.


### Polymorphism
- A child class can **overwrite** a method it inherited from a parent class [it's more complex that that, but enough  for our purposes]

## OOP with JS

- Objects are **linked** to a prototype object
- **Prototypal Inheritance** (different from class inheritance): The prototype contains methods (behavior) that are **accessible to all objects linked to that prototype.** ((object)instance inherited from a class (??) )
- Behavior is **delegated** to the  linked prototype object

### 3 ways of Implementing Prototypal Inheritance in JS

- Constructor functions
- ES6 classes
- Object.create()

#### Constructor functions
- Technique  to create object from  a function
- This is how built-in objects like Arrays , Maps  or Sets are actully implemented

#### ES6 Classes
- Modern alternative to constructor function syntax
- "Syntactic  sugar": behind the scenes, ES6 classes work **exactly** like constructor functions
- ES6 classes do **NOT** behave like classes in "Classical OOP"

#### Object.create()
- The easiest and most straightforward way of linking an object to a prototype object
- but not much used like other ways

## Prototype chain
- Series of links between objects, liked through prototype (\__proto__)  
- Similar to the scope chain