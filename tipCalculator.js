// const bill = 275;
// const bill = 40;
const bill = 430;

const tip = bill >= 50 && bill <= 300 ? (15 * bill) / 100 : (20 * bill) / 100; // bill * 0.15 : bill * .20

console.log(`The bill is ${bill} , the tip is ${tip} and total ${bill + tip}`);

// const calcTip = (bill)=> bill >=50 && bill <=300 ? (15 * bill) / 100   :  (20 * bill) / 100;

// console.log(calcTip(100));

// const bills= [125, 555, 14];
// console.log(bills);

// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[bills.length-1]) ];
// console.log(tips)

// const total = [bills[0]+tips[0],bills[1]+tips[1],bills[bills.length-1]+tips[tips.length-1]]
// console.log(total)

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? (15 * bill) / 100 : (20 * bill) / 100;

for (i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(tips, totals)

function calcAverage(arr) {
    let sum=0;
    for (let i=0; i<arr.length; i++){
        sum += arr[i];
    } 
    return sum/arr.length;
}

console.log(calcAverage(totals));