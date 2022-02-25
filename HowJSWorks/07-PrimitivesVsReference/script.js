/*
| Identifier | Address | Value |
| :--------: | :-----: | ----- |
|    age     |   001   | 30    |
|   oldAge   |   002   | 30    |

- \* age variable equal to 001 (memory address) not value (30) directly
*/
// Permitives
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

// reference

/*
 * me and friend points to the same memory address , 
that memory address value point to the heap memory address

 * so two variable address to the exact same value  , changing one
varible affect both

*/

const me = {
  name: "karthi",
  age: 26,
};

const friend = me;

friend.age = 27;

console.log("Friend: ", friend);
console.log("Me: ", me);

// Primitive types
let lastName = "Williams";

let oldLastName = lastName;

lastName = "Davis";

console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = "Davis";

console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

// Copying Objects

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2); // it's shallow copy , only copy top level , not deep level
jessicaCopy.lastName = "Davis";
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("Jhon");

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);

