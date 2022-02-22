const markMass = 95;
const markHeight = 1.88;

const jhonMass = 85;
const jhonHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const jhonBMI = jhonMass / jhonHeight ** 2;

const markHigherBMI = markBMI > jhonBMI;

if (markBMI > jhonBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than Jhon's (${jhonBMI})!`);
} else {
  console.log(`Jhon's BMI (${jhonBMI}) is higher than  Mark's (${markBMI})!`);
}
console.log(markHigherBMI);

const mark = {
  fullName: "Mark Miller",
  height: 1.69,
  mass: 78,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const jhon = {
  fullName: "Jhon Smith",
  height: 1.95,
  mass: 92,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(
  mark.calcBMI() > jhon.calcBMI()
    ? `${mark.fullName}'s BMI (${mark.bmi}) higher than ${jhon.fullName}'s BMI (${jhon.bmi})`
    : `${jhon.fullName}'s BMI (${jhon.bmi}) higher than ${mark.fullName}'s BMI (${mark.bmi})`
);
