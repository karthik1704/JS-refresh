'use strict';

// Default Parameters
/*
const bookings = []

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers){

    // Old Way ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
}

createBooking('LH123',)
createBooking('LH123', 2, 800)
createBooking('LH1234', 2)
createBooking('LH1234', 5)


createBooking('LH123', undefined, 1000)

console.log(bookings)

// Value vs Reference
// JS don't have pass in by reference , only have pass in by value


const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 23435446566
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999'; // Primitive
    passenger.name = 'Mr. '+ passenger.name; // Reference
    if(passenger.passport === 23435446566) {
        alert('Check in')
    }else {
        alert('Wrong passport')
    }
}

// checkIn(flight, jonas)

// console.log(flight, jonas) // LH234 {name: 'Mr. Jonas Schmedtmann', passport: 23435446566} // object is reference so value changed

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000000000)
}

newPassport(jonas);
checkIn(flight, jonas)
// console.log(jonas);



////////////////////////////////////////////////
// Callback functions

const oneWord = function(str){
    return str.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function (str){
    const [first, ...other] = str.split(' ');

    return [first.toUpperCase(), ...other].join(' ') 
}

// High order functions
const transformer = function (str, fn){
    console.log(str);
    console.log(`Transformed string: ${fn(str)}`)

    console.log(`Transformed by: ${fn.name}`); // function property
}

transformer('JavaScript is the best', upperFirstWord)
transformer('JavaScript is the best', oneWord)


// JS uses callbacks all the time
const high5 = function(){
    console.log('👋');
}
document.body.addEventListener('click',  high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);



////////////////////////////
// Functions Returning Functions


const greet = function(greeting){

    return function(name){
        console.log(`${greeting} ${name}`)
    }
}

const  greeterHey = greet('Hey')

greeterHey('Jonas')
greeterHey('Steven')

greet('Hello')('Jonas');

// Arrow Function returns function
const greetArr = (greeting)=>(name)=>console.log(`${greeting} ${name}`);
const  greeterHey1 = greetArr('Hey')
greeterHey1('Jonas')
greeterHey1('Steven')
greetArr('Hello')('Jonas');


/////////////////////////////////////////////
// The call and apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Jonas');
lufthansa.book(635, 'Smith');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah'); thorws error, because it's dont know this (this is undefined in regular functions)

// Call Method
book.call(eurowings, 23, 'Sarah');
console.log(eurowings)

book.call(lufthansa, 239, 'Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'Lx',
    bookings: [],
}

book.call(swiss, 583, 'Mary Cooper')
console.log(swiss);

// Apply method

const flightData = [583, 'George']
book.apply(swiss, flightData)
console.log(swiss);

book.call(swiss, ...flightData);



///////////////////////////////////////////////
// The bind method
// this don't call a function , it's return a new function with this bound.

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('jonas')
bookEW23('Martha')



// With Event Listensers

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this)

    this.planes++;
    console.log(this.planes);
}


document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))


// Partial application

const addTax = (rate, value) => value + value * rate

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));



const addTaxRate = (rate)=>(value) => value + value * rate;

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));



////////////////////////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

const runOnce = function(){
    console.log('This will never run again');
}

runOnce();

//IIFE
(function(){
    console.log('This will never run again');
})();

(()=>console.log('This will never run again'))();




///////////////////////////////////////////////
// Closures
// A function has access to the variable environment (VE) of the execution context in which it was created
// **Closure:** VE attached to the function, exactly as it was at the time and place the function was created
// Priority over scope chain
const secureBooking = function(){
    let passengerCount = 0;

    return function(){ // birth place
        passengerCount ++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking(); // Function executed , and out from call stack (execution context)

booker(); // but it's still increase passengercount variable
booker();
booker();


console.dir(booker);



let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function(){
  const b = 777;
  f = function () {
    console.log(b * 2);
  };

}

g();
f();
console.dir(f)


// Re-assigning f function
h();
f();
console.dir(f)

// Example 2

const boardPassengers = function(n, wait){
  const perGroup = n / 3;

  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups , each with ${perGroup} passengers`);
  }, wait*1000)

  console.log(`Will start boarding in ${wait} seconds`);
}


const perGroup = 1000;
boardPassengers(180, 3);

*/

/*
//////////////////////////////////////////
// Coding Challenge #1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  displayResult(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}.`);
    } else if (type === 'array') {
      console.log(this.answers);
    }
  },
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question}\n${this.options.join(
        '\n'
      )} \n (Write option number)
      `)
    );

    if (typeof answer === 'number' && answer < this.options.length) {
      this.answers[answer]++;
    }
    this.displayResult();
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 2, 3] }, 'string');
poll.displayResult.call({ answers: [1,2,3,4,5,6] });
*/

/////////////////
// Chaellange #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
  
})();
