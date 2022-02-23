"use strict";
// var firstName = 'Matilda'

const jonas = {
  firstName: "jonas",
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    //solution 1 - ES5
    // const self = this; // self or that

    // const isMillenial = function(){
    //     console.log(self);
    //     console.log(self.year >= 1981 && self.year <=1996);
    // }

    // isMillenial();

    // solution 2  ES6

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  // Never  ever use arrow funtion as a method.
  greet: () => console.log(`Hey ${this.firstName}`), // Hey Matilda/undifined
};

jonas.greet();
jonas.calcAge();

// arguments keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

const addArrow = (a, b) => {
  console.log(arguments); // arrow funtions does not have arguments keyword. so error throw.
 return a + b;
}

addExpr(2,2);
addExpr(2,2, 4,9);

addArrow(3,3)

