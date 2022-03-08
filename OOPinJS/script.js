'use strict';

/*
//////////////////////////////////////////////////
// Constructor Functions
// Arrow functions not work as function constrctor
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this
  // this.calcAge = function(){
  //     console.log(2037 - this.birthYear);
  // }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1. New {} (empty object) is  created
// 2. function is called , this(this keyword)  = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Static Methods
// Static Methods can't be inherited , only accisible via namespace (Person)
Person.hey = function () {
  console.log('Hey There');
  console.log(this);
};
Person.hey();

// Prototypes

// Each and every function in JS automatically has  a property called prototype

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';

console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species')); // Prototype Property so false

/////////////////////
// Prototypal  Inheritance on Built-in Objects

console.log(jonas.__proto__); // Person.prototype
console.log(jonas.__proto__.__proto__); // Object.prototype
console.log(jonas.__proto__.__proto__.__proto__); // null, Object.prototype is top of  the Prototype Chain

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [8, 3, 5, 6, 6, 3, 6, 7, 9, 8, 2]; // new Array === []

console.log(arr.__proto__); // Array.prototype
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__); // Object.prototype

// This is not a good idea , adding custom method to built-in array or object constructor
// Don't write like this.
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir((x) => x + 1);

////////////////////////////////////////////////////
// ES6 Classes

// class expression
// const personCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance Methods
  //  Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  // Getter and setter
  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name}  is not full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static methods
  static hey() {
    console.log('Hey There');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT Hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

////////////////////////////////
// Setter and Getters

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // write like a property

account.latest = 50; // set a value like a property
console.log(account.movements);

//////////////////////////////////////////////
// Object.create
// Prototypal inheritance (there)
// No prototype properties
// No constructor functions
// No new keyword
// use Object.create to manullay set any other object

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

////////////////////////////////////////
// Inheritance Between "Classes"
// Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.clacAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking Prototype
// add this before adding any methods to prototype, otherwise  student.prototype overwrite
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.clacAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


// Inheritance - ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance Methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  // Getter and setter
  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name}  is not full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static methods
  static hey() {
    console.log('Hey There');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      } `
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();



// Inheritance : Object.create()

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);

jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();



// ES6 class Example
// Escapsulation : Protected Methods and Properties
// Truly Private Fields and Methods

// Public Fields
// Private Fields
// Public methods
// Private methods

// (there is also static version of those 4)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private Fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected Property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an accout, ${owner}`);
  }

  // 3) Public Methods

  // Public Interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this
  }

  requestLoan(val) {
    if (this._approvelLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  
  }

  static helper(){
    console.log('Here to  Help');
  }

  // 4) Private Methods
  // #approvelLoan(val) {
  _approvelLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1.getMovements());

console.log(acc1);

// console.log(acc1.#pin);
// console.log(acc1.#movements);
// acc1.#approvelLoan(1000)

Account.helper();

////////////////////////
// Chaining Methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

*/

/*

///////////////////////////////////////////////////////
// Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at  ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();

mercedes.brake();
mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.accelerate();



// Challenge #2

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at  ${this.speed} km/h`);
  }

  brake() {
    this.speed += 10;
    console.log(`${this.make} is going at  ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(mile){
      this.speed = mile * 1.6;
  }

}

const ford = new Car('Ford', 120);

ford.accelerate()
ford.accelerate()
ford.accelerate()
ford.accelerate()
ford.brake()
ford.brake()
ford.brake()
console.log(ford.speedUS);
ford.speedUS = 40;
console.log(ford.speedUS);
console.log(ford.speed);



// Chellenge #3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at  ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const ElectricCar = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

ElectricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;

  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

// ElectricCar.prototype.constructor = ElectricCar

const tesla = new ElectricCar('Tesla', 120, 23);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();

console.log(tesla);
*/

// Challenge #4

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at  ${this.speed} km/h`);
  }

  brake() {
    this.speed += 10;
    console.log(`${this.make} is going at  ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(mile){
      this.speed = mile * 1.6;
  }

}

class EV extends CarCl{
  #charge
  constructor(make, speed, charge){
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery  (chargeTo) {
    this.#charge = chargeTo;
    return this;
  };
  
  accelerate () {
    this.speed += 20;
    this.#charge--;
  
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}`
    );
    return this;
  };

}

const rivian = new EV('Rivian', 120, 23);

rivian.accelerate().chargeBattery(90).brake().accelerate().accelerate()