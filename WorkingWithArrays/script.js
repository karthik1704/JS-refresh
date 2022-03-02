'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, idx) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      idx + 1
    } ${type}</div>
            <div class="movements__date">3 days ago</div>
            <div class="movements__value">${mov}€</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function ({ movements, interestRate }) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
};

createUsername(accounts); // stw

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcPrintBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display Ui and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }!`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // Update Ui
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);

    // UpdateUI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const accountIdx = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(accountIdx, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // shollow copy
console.log([...arr]);

// SPLICE - mutates original array (delete one or more element in array)
// console.log(arr.splice(2));
arr.splice(-1)
arr.splice(1, 2);
console.log(arr)


// REVERSE - mutates
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse())
console.log(arr2); 

// CONCAT
const letters = arr.concat(arr2)
console.log(letters);
console.log([...arr, ...arr2]);

//Join - returns string
console.log(letters.join('-'))



////////////////////////////////////////////////
// at method (ES2022)

const arr = [23,11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// Getting Last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-2));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));



/////////////////////////////////////
// Looping Arrays: For each

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements){
for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${index + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---------For Each---------------');
// continue and break not work on forEach
movements.forEach(function (mov, idx, arr) {
  if (mov > 0) {
    console.log(`Movement ${idx + 1} You deposited ${mov}`);
  } else {
    console.log(`Movement ${idx + 1} You withdrew ${Math.abs(mov)}`);
  }
});


// ForEach with Map and Set

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);

currenciesUnique.forEach(function(value, _, set){
    console.log(`${value}: ${value}`);
})



/////////////////////////////////////////////
// Map method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUSD = movements.map((mov) => mov * eurToUsd);
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}

const movementsDesc = movements.map(
  (mov, idx) =>
    `Movement ${idx + 1} You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDesc);


//////////////////////////////////////////////////
// The Filter Method

const deposits = movements.filter((mov) => mov > 0);
const withdrawals = movements.filter((mov) => mov < 0);

// const deposits =movements.filter(function(mov ){
//   return mov > 0;
// })

console.log(movements);
console.log(deposits);
console.log(withdrawals);

const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);


///////////////////////////////////////////////////
// The Reduce method

console.log(movements);

// accumulator -> snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(acc);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;

console.log(balance2);


// Maximum Value 

const max = movements.reduce((acc , mov )=>{
  if(acc > mov){
    return acc
  } else {
    return mov
  }
}, movements[0])


console.log(max);



////////////////////////////////////////////
// Method Chaining

const eurToUsd = 1.1;

// Pipeline
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  // .map((mov, i, arr) => {
  //   console.log(arr);
  //   return mov * eurToUsd;
  // })
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);


/////////////////////////////////////////////
// Find method
// only elements , not array

const firstWithdrawal =  movements.find((mov)=> mov < 0) ;// if ture , return first finding element

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find((acc)=> acc.owner === 'Jessica Davis')
console.log(account);

let acc = {};
for (const ac of accounts ){
  if (ac.owner === 'Jessica Davis'){
    acc = ac;
    
  }
}
console.log(acc);


/////////////////////////////////////////////
// FindIndex method
// returns index value

const accountIdx = accounts.findIndex(
  (acc) => acc.username === currentAccount.username
);

*/

//////////////////////////////////////////////////
// Some and every method
console.log(movements);
// Equality
console.log(movements.includes(-130));

// Condition
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

// Every
// every items in array pass condition then returns true
console.log(movements.every((mov)=>mov>0));
console.log(account4.movements.every(mov=>mov>0));


// Separate callback

const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

/*
//////////////////////////////
// Chanllenge #1

const checkDogs = function(dogsJulia, dogsKate){
  // const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  // const dogs = [...dogsJuliaCorrected, ...dogsKate];
  const dogs = dogsJuliaCorrected.concat(dogsKate);

  // console.log(dogs);
  dogs.forEach((dog, idx)=>{
    if(dog>=3){
      console.log(`Dog number ${idx + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${idx + 1} is still a puppy 🐶`);
    }
  })
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs( [9, 16, 6, 8, 3],  [10, 5, 6, 1, 4]);

// Challenge #2

const calcAverageHumanAge = function (ages) {
  const dogsHumanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(dogsHumanAge);

  const adultDogs = dogsHumanAge.filter((age) => age >= 18);
  console.log(adultDogs);

  // const avgAdultDogsHumanAge =
  //   adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
  // console.log(avgAdultDogsHumanAge);

  // 2 3 . (2+3) / 2 = 2.5 === 2/2 + 3/2 = 2.5
  const avgAdultDogsHumanAge = adultDogs.reduce(
    (acc, age, _, arr) => acc + age / arr.length,
    0
  );
  console.log(avgAdultDogsHumanAge);

  return avgAdultDogsHumanAge;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);


////////////////////////////////////
// Challenge #3

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0); // 2 3 . (2+3) / 2 = 2.5 === 2/2 + 3/2 = 2.5

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

*/
