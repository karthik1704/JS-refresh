'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
              <h3 class="country__name">${data.name.common}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} people</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[Object.keys(data.languages)[0]]
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[Object.keys(data.currencies)[0]].name
              }</p>
          </div>
      </article>
      `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*
///////////////////////////////////////
// XMLHttpRequest

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  // console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
    <article class="country">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[Object.keys(data.languages)[0]]
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[Object.keys(data.currencies)[0]].name
            }</p>
        </div>
    </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('India');
getCountryData('America');
getCountryData('portugal');
*/

///////////////////////////////////////////////
// Callback Hell

/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  // console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country 2
    const [neighbour] = data.borders;

    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');

setTimeout(() => {
  console.log('1 sec passed');
  setTimeout(() => {
    console.log('2 sec passed');
    setTimeout(() => {
      console.log('3 sec passed');
      setTimeout(() => {
        console.log('4 sec passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

*/

////////////////////////////////
// Promises and Fetch API
// Handling Rejected Promises

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(res){
//         console.log(res);
//         return res.json();
//     }).then(function(data){
//         console.log(data);
//         renderCountry(data[0])
//     })

// }

const getJSON = function (url, error = 'Something went wrong!') {
  return fetch(url).then((res) => {
    console.log(res);

    if (!res.ok) throw new Error(`${error} (${res.status})`);
    return res.json();
  });
};

// const getCountryData = function (country) {
//   // country 1

//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((res) => {
//       console.log(res);

//       if (!res.ok) throw new Error(`${error} (${res.status})`);
//       return res.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       //   const neighbour = data[0].borders[0];
//       const neighbour = 'dfkjd';
//       if (!neighbour) return;

//       // Country1
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(
//       (res) => {
//         if (!res.ok) throw new Error(`Country not found (${res.status})`);

//         return res.json();
//       }
//       //   (err) => alert(err)
//     )
//     .then((data) => renderCountry(data[0], 'neighbour'))
//     .catch((err) => {
//       console.error(`${err} 🎆🎇`);
//       renderError(`Something went wrong ${err.message}.  Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

/*
const getCountryData = function (country) {
  // country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country Not Found')
    .then((data) => {
      renderCountry(data[0]);
      const [neighbour] = data[0].borders ?? '';
      //   const neighbour = 'dfkjd';
      if (!neighbour) throw new Error('No neighbour');

      // Country1
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then((data) => renderCountry(data[0], 'neighbour'))
    .catch((err) => {
      console.error(`${err} 🎆🎇`);
      renderError(`Something went wrong ${err.message}.  Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

getCountryData('australia');
*/

/*

//////////////////////////////////////////////////////////
// Challenge #1

const whereAmI = function (lat, lng) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with API ${res.status}`);
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      console.log(`You are in ${data.address.city}, ${data.address.country}`);
      return fetch(
        `https://restcountries.com/v3.1/name/${data.address.country}`
      );
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then((data) => {
      renderCountry(data[0]);
      // countriesContainer.style.opacity = 1;
    })
    .catch((err) => console.error(err.message));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);



///////////////////////////////////////////////////////
// Event Loop in Practice

console.log('test start');
setTimeout(() => console.log('0 sec timer'), 0);

Promise.resolve('Resolved Promise1').then((res) => console.log(res));

Promise.resolve('Resolved Promise 2').then((res) => {
  for (let i = 0; i < 1000000; i++) {} //100000000
  console.log(res);
});

console.log('test end');
*/

///////////////////////////////////////////////////////////
// Promises

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN');
    } else {
      reject(new Error('You lost your money'));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promsifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('I waited for 1 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 second');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 second');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 second');
    return wait(4);
  });

Promise.resolve('abc').then((x) => console.log(x));
Promise.reject(new Error('Problem!')).catch((x) => console.log(x));
