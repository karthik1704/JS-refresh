'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2022-02-25T14:18:46.235Z',
    '2022-02-28T16:33:06.386Z',
    '2022-03-01T14:43:26.374Z',
    '2022-03-03T18:49:59.371Z',
    '2022-03-04T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2022-02-25T14:18:46.235Z',
    '2022-02-28T16:33:06.386Z',
    '2022-03-03T14:43:26.374Z',
    '2022-03-04T18:49:59.371Z',
    '2022-03-05T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayPassed = calcDaysPassed(new Date(), date);

  // console.log(dayPassed);

  if (dayPassed === 0) return 'Today';
  if (dayPassed === 1) return 'Yesterday';
  if (dayPassed <= 7) return `${dayPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();

  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and logout user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrese 1s
    time--;
  };

  // Set time to 5 min
  let time = 120;

  // call timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// Fake Always Logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    const locale = navigator.language;
    console.log(locale);

    // labelDate.textContent = new Intl.DateTimeFormat('ta-IN', options).format(now);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, '0');
    // const min = `${now.getMinutes()}`.padStart(2, '0');
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogoutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset the Timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);

      // Add Loan Date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
    // Reset the Timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*

// Numbers
// all numbers is floating point
// 64 base 2 - binary

console.log(23 === 23.0);

// base10 - 0 to 9  1/10 = 0.1  3/10 = 3.333333333(infinity)
// binary base2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // false , but should be true , but js works that way

// conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10)); // start with letter not work

console.log(Number.parseInt(' 2.5rem'));
console.log(Number.parseFloat('   2.5rem'));

console.log(parseFloat('   2.5rem')); // old , use with Number

// NaN
// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// isFinite
// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

// isInteger
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));



/////////////////////////////////////////////////////////
// Math and Rounding

// Roots
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3)); // qupic root

// Max
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

// Min
console.log(Math.max(5, 18, 23, 11, 2));

// constants
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 --> 0...(max - min) --> min -- max
console.log(randomInt(10,20));

// Rounding Integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

// Compare floor vs trunc
console.log(Math.trunc(-23.3)); // - 23
console.log(Math.floor(-23.3)); // - 24


// Rounding decimals
console.log((2.7).toFixed(0));// returns string  // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35
console.log(+(2.345).toFixed(2)); // 2.35



//////////////////////////////
// The Reminder Operator

console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 8 = 2  * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, idx) => {
    if (idx % 2 === 0) row.style.backgroundColor = 'orangered';
    if(idx %  3 === 0) row.style.backgroundColor = 'blue'
  });
});



///////////////////////////////////////////////////////
// Numeric Separators

//  287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415
console.log(PI);

console.log(Number('2300_00'));
console.log(parseInt('2300_00'));



////////////////////////////////////////
// BigInt (ES2020)
// 9007199254740991 - limit of js representing number
// Math functions don't work

console.log(2 ** 53 - 1); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(845083498507723738473894380459n); // adding n end number convert to bigInt
console.log(BigInt(84508349850772373));

// Operations
console.log(10000n + 10000n);
console.log(
  38409384839830489238534085943850438509n * 859043850984305435840580438534n
);

const huge = 30835743750384534059094395430n;
const num = 23;
// console.log(huge * num); // BigInt with regular number operations don't work
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15); //true
console.log(20n === 20); //flase , because type coherions
console.log(typeof 20n);

console.log(huge + 'is REALLy big');

// Divisions
console.log(14n / 3n);



////////////////////////////////////////////////
// Date and Time

// Create a date
const now = new Date();
console.log(now);

console.log(new Date('Mar 05 2022 11:37:43'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5)); // month 0 based
console.log(new Date(2037, 10, 31));

console.log(new Date(0)); // computer time start date
console.log(new Date(3 * 24 * 60 * 60 * 1000));



// Methods

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // don't use getYear()
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay()); // day of week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // since 1970

console.log(new Date(2142237180000));


console.log(Date.now())

future.setFullYear(2040)
console.log(future);



////////////////////////////////////////////////////////////
// Operations with Date

const future = new Date(2037, 10, 19, 15, 23);
console.log(Number(future));
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));

console.log(days1);



/////////////////////////////////////////////////
// Internationalizing Dates (INTL)

// Exprimenting with INTL API
const now = new Date();
labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now);
// labelDate.textContent = new Intl.DateTimeFormat('ar-SY').format(now);
// labelDate.textContent = new Intl.DateTimeFormat('ar-GB').format(now);


const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long'
};
const locale = navigator.language;
console.log(locale);

// labelDate.textContent = new Intl.DateTimeFormat('ta-IN', options).format(now);
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);



///////////////////////////////////////
// INTL - Numbers

const num = 3884764.23;

const options = {
  style: 'currency', // unit, percent , currency
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false
};

console.log('US:       ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:  ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:    ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  `Browser:  ${navigator.language}`,
  new Intl.NumberFormat(navigator.language, options).format(num)
);



//////////////////////////////////////////////////
// Timers : setTimeOut(), SetInterval()

const ingredients = ['Ovlive', 'Spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) =>
    console.log(`Here is your Pizza with ${ing1} and ${ing2} 🍕🍕`),
  3000,
  ...ingredients
);

console.log('waiting...');

if (ingredients.includes('Spinach')) clearTimeout(pizzaTimer);

// SetInterval

const time = setInterval(() => {
  const now = new Date();
  // const hour = now.getHours();
  //   const min = now.getMinutes();
  //   const sec = now.getSeconds();

  console.log(
    new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(now)
  );
}, 1000);

clearInterval(time);

*/
