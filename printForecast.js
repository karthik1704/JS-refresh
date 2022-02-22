const temperatures = [17, 21, 23];

// Understanding the problem
// - Array transfromed to string , separated by ...
// - wired celsis symbol?
// - what is the X days? answer: index + 1

// Breaking up into sub-problems

// - tranform array into string
// - Transfrom each element to string
// - Strings needs to contain day (index + 1).
// - Add ... between element and start and end of string

const printForecast = function (arr) {
  let str = "... ";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} C in ${i + 1} days ... `;
  }
  console.log(str);
};

printForecast(temperatures);
printForecast([12, 5, -5, 0, 4]);
