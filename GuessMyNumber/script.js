'use strict';
// selecting element in js
/* 
    DOM - Document Object Model 
        - Structured representation of HTML Documents . 
        - allows JS access HTML elements and styles to manipulate them.

    - DOM automatically create by browser as soon as HTML page loads (Tree structure way)
        - DOM always start DOCUMENT element (Document is spl object , we have access via JS)
            - this document object is entry point to the DOM
*/

/* 
    - DOM Methods and Properties for DOM manipulation is NOT Part Of JavaScript

    - DOM Methods and Properties is belongs to WEB APIs (it's browser implements , that's we can access via JS)
    - WEB APIs (DOM, Timers, Fetch, etc... )
*/

/*
console.log(document.querySelector('.message').textContent)

console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value); // get or set input value use value property

document.querySelector('.guess').value=23;
*/

const getSecretNumber = ()=>Math.trunc(Math.random() * 20) + 1;

let secretNumber = getSecretNumber();
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function(score){
    document.querySelector('.score').textContent = score;
}

// event listener
/*
   - addEventListener('event name', function) is  method listen for event to happen
   - it's take two args , event name (click, doubleClick, ), fuction (we don't call this funtion, 
   JS engine call this function as soon as event triggers)
*/
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('No Number!');
  } else if (guess > 20) {
    displayMessage('Enter Number Between 1 and 20');
  } else if (guess === secretNumber) {
    // Showing secret number and message
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number! 🎉🎉');

    // Setting HighScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Adding win styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'; // it's set as inline style
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High! ' : 'Too Low!');
      score--;
      displayScore(score);
    } else {
        displayScore(0);
      document.querySelector('.number').textContent = secretNumber;
      displayMessage('You loose 😭');
    }
  }

  //   if (score <= 0) {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.number').textContent = secretNumber;
  //     document.querySelector('.message').textContent = 'You loose 😭';
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = getSecretNumber();
  score = 20;

  displayMessage('Start guessig...');
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
