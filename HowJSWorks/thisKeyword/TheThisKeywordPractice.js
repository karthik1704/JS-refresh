'use strict'
console.log(this);

const calcAge  = function(birthYear){
    console.log(2037-birthYear);
    console.log(this);
}

calcAge(1995)

const calcAgeArrow  = (birthYear) => {
    console.log(2037-birthYear);
    console.log(this);
}

calcAgeArrow(1995)

const jonas = {
    birthYear: 1995, 
    calcAge: function(){
        console.log(this);
        console.log(2037-this.birthYear);
    }
}

jonas.calcAge()


const matilda = {
    birthYear: 2017,

}

matilda.calcAge = jonas.calcAge;

matilda.calcAge();

const f = jonas.calcAge;

f();