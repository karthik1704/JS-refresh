'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnShowModal = document.querySelector('.show-modal'); // if multiple matches only first element return
// console.log(btnShowModal);
const btnShowModal = document.querySelectorAll('.show-modal'); // it returns multiple elements as (NodeList Array)
console.log(btnShowModal);

const showModal = function () {
  // classList remove and add / manipulate css classes
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden'); // overlay.style.display = 'block' ; it's do same but use classlist for manipulation of css
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', showModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// KeyPress event
// Keyboard event are global , so we have to use document to addEventListener
// keydown, keyup, keypress (3 types of keyboard events)
// when event happens JS created event obj contain information about event
// we can use event obj via adding parameter (e or event / any name)
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
