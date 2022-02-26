'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

////////////////////////////////////////////////////////////////////////////////////////
// Enhanced Object Literals (ES6)

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// ES6 compute property name

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours:openingHours, // before ES6
  // ES6
  openingHours,
  // ES6 new method syntax
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

///////////////////////////////////////////////////////
// MAPS (Data structure) (ES6)
// key value pair
// key can be any type
const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'We are close :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;

 console.log( rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest.size);
// rest.clear();

// using array as map property

// this won't work because heap memory
// rest.set([1,2], 'Test')
// console.log(rest);
// console.log(rest.get([1,2]));

// this work  , because stack points to same  heap  memory
const arr = [1,2]
rest.set(arr, 'Test')
console.log(rest.get(arr));


rest.set(document.querySelector('h1'), "heading")

console.log(rest);
console.log(rest.get(document.querySelector('h1')));

/*
///////////////////////////////////////////////////////
// SETS (Data structure) (ES6)
// Unique values , no dublicates
// you can't retrive value for set.

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

console.log(new Set('jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set('jonas').size)



///////////////////////////////////////////////////
// Looping Objects : object keys , values , end entries

// Property names (keys)
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days : `;

for(const day of properties) {
  openStr += `${day} , `
};

console.log(openStr)

// Property values
const values = Object.values(openingHours)
console.log(values);

// Entries object
const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`)
}




///////////////////////////////////////////////////////
// Optional Chaining (ES 2020)
// OLD
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// ES 2020
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log( `On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist')
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist')

// Arrays
const users = [{name: 'jonas', email: 'hello@jonas.io'}];

console.log(users[0]?.name ?? 'User array empty')



//////////////////////////////////////
// Looping Arrays: The For-OF Loop (ES6)

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]

for (const item of menu) console.log(item);

for (const [i, el]  of menu.entries()) console.log(`${i+1} ${el}`);  // getting index 

// console.log([...menu.entries()]);





//////////////////////////////////////////
// Logical Assignment Operators (ES2021)

const rest1 = {
  name: 'capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Givanni Rossi',
};

// before ES2021 OR assignment oprator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// // after ES2021 OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// After ES2021 Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// Before ES2021 AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// After ES2021 AND assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);



///////////////////////////////////////////////////
// Nullish Coalescing Operator (??) (ES2020)
// Nullish : null , undefined (NOT 0 or '' )

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guessCorrect = restaurant.numGuests ?? 10;
console.log(guessCorrect);



///////////////////////////////////////
// Short Circuiting (&& and ||)
// use Ant data type, return any data type, short circuting
console.log(3 || 'jonas'); // 3 , first one is truthly then return first value or second value
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-------------AND-----------');

console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas

console.log('Hello' && 23 && null && 'Jonas');

if(restaurant.orderPizza){
  restaurant.orderPizza('Cheese', 'Cheese')
}

restaurant.orderPizza && restaurant.orderPizza('Cheese', 'Olive', 'onion')




////////////////////////////////////////////////////////////////////////////
// Rest Pattrens and parameters -collect multiple valules put them into new Array (opposite to spread)
// Rest element must be last element and  only one restElement

// 1) Destructring
// SPREAD , becaue on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST , because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(sum);
};

add(2, 4, 4);
add(5, 3, 2, 2);
add(8, 2, 5, 6, 9, 9, 2);

const x = [23,5,6]

add(...x) //spread

restaurant.orderPizza('Cheese', 'chicken', 'corn')



//////////////////////////////////////////////////
// Spread Operator - Building on arry or passing arguments in function (Multiple values expect by comma)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...arr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array

const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy

// Join 2 Arrays or more

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables : arrays, set, Maps, strings. but not objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! ingredients 1?"),
//   prompt("Let's make pasta! ingredients 2?"),
//   prompt("Let's make pasta! ingredients 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients)

// ES2018 (ES9) Support objects

const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'}
console.log(newRestaurant);

const restaurantCopy = {...restaurant} // Shallow copy
restaurantCopy.name= 'Ristorante Roma'
console.log(restaurantCopy.name);
console.log(restaurant.name);



///////////////////////////////////////////////////////////////////////////////////////////////
// Object Destructuring

restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 1,
});

restaurant.orderDelivery({
  address: 'via del sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

console.log(a, b);

// Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);


////////////////////////////////////////

// Array 
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variables

// const temp = main;
// main = secondary;
// secondary=temp;

// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested array destructuring

const nested = [2, 4, [5, 6]];

const [i, , [ j, k]] = nested;

console.log(i, j, k);


// Default values

 const [p=1, q=1, r=1]= [8,9]

 console.log(p, q, r);

*/

/*
//////////////////////////////////////////////
// Coding Challenge

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/////////////////////////////////////////
// Challenge 2

for (const [i, playerName] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${playerName}`);

let totalOdds = 0;
for (const values of Object.values(game.odds)) {
  totalOdds += values;
}
// const avg = totalOdds / 3;
const avg = totalOdds / Object.values(game.odds).length;
console.log(avg);

for (const [key, value] of Object.entries(game.odds)) {
  console.log(`Odd of victory  ${game[key] ?? 'draw'} : ${value}`);
}

const scorers = {};
// Solution
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// Mine
for (const playerName of game.scored) {
  scorers[playerName] = (scorers[playerName] ?? 0) + 1;
}
console.log(scorers);

/////////////////////////////////////
// Challenge 1

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;

const printGoals = function (...players) {
  // console.log(...players);
  for (let i = 0; i < players.length; i++) console.log(players[i]);
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

const winningTeam = (team1 < team2 && 'Team 1 wins') || 'Team2 wins';

console.log(winningTeam);

*/
