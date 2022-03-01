# First-Class and Higher-Order Functions

## First-Class Functions
- JS treats functins as **first-class citizens**
- This means that functins are **simply values**
- Functions are just another **"type" of object**
- Store functions in **variables or properties**
- Pass functions as arguments to **OTHER functions**
- Return functions **From functions**
- Call method **on functions**

## High-Order Functions
- A function that **receives** another function as an argument , that **returns** a new function , or **both**
- This is only possible because of **first-class functions**

```js
const greet = ()=> console.log('Hey Jonas')
btnClose.addEventListener('click', greet)
```

```js
function count(){
    let counter = 0;
    return function(){
        counter ++;
    }
}
```


