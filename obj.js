const jonas = {
  firstName: "jonas",
  lastName: "shmt",
  birthYear: 1991,
  job: "teacher",
  friends: ["Micheal", "Jhon"],
  hasDriverLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear
    return this.age
  },
  getSummary: function(){
      return  `${this.firstName} is ${this.calcAge()}-years old ${this.job}, and he has ${
        this.hasDriverLicense ? "a" : "no"
      } driver license.`
  }
};

console.log(
  `${jonas.firstName} has ${jonas.friends.length} , and best friend is called ${jonas.friends[0]}`
);
jonas.calcAge()
console.log(
 jonas.getSummary()
);
