/*
// Import Module
// import {
//   addToCart,
//   totalPrice as price,
//   tq,
// } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('Bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('Pizza', 2);
add('Bread', 5);
add('apples', 4);

console.log(cart);


///////////////////////////////////
// Top-Level Await
// Only works in modules
// This blocks execution context (warning)
console.log('Start Fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await res.json()
console.log(data);
console.log('Something');



const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost =  getLastPost();
console.log(lastPost);

// Not very clean
lastPost.then(last=> console.log(last))

const lastPost2 = await getLastPost()
console.log(lastPost2);



// Module Pattern

const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ 
      product,
      quantity,
    });

    console.log(`${quantity} ${product} added to cart (shipping cost is ${shoppingCost})`);
  };
  
  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} order form supplier`);
  };

  return {
      addToCart,
      cart,
      totalPrice,
      totalQuantity
  }

})();

ShoppingCart2.addToCart('apple', 4)
ShoppingCart2.addToCart('Pizza', 2)

console.log(ShoppingCart2);
console.log(ShoppingCart2.shoppingCost);
console.dir(ShoppingCart2);



////////////////////
// Common JS Modules

// export 
export.addToCart = function (product, quantity) {
    cart.push({ 
      product,
      quantity,
    });

    console.log(`${quantity} ${product} added to cart (shipping cost is ${shoppingCost})`);
};

// import
const {addToCart} = require('./shoppingCart.js')

*/

