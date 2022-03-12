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
    // console.log(res);

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



////////////////////////////////////////
// Promisifying Geolocatin API

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => resolve(position),
    //     (err) => reject(console.error(err))
    //   );
    //

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
  getPosition().then(pos=>{
    const {latitude:lat, longitude:lng} = pos.coords;
    return fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    )
  })
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with API ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
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

btn.addEventListener('click', whereAmI);
*/

/* 

////////////////////////////////////////////////////
// Challenge #2
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};


const imgContainer = document.querySelector('.images')

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', () => reject(new Error('Image Not Found')));
  });
};

let currentImg;

createImage('./img/img-1.jpg')
  .then((img) => {
    currentImg =img
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then((img) => {
    currentImg = img
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-3.jpg');
  })
  .then((img) => {
    currentImg =img
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch((err) => console.error(err.message));


/////////////////////////////////////////////
// Async / Await (ES2017) - Consuming promises
// Try Catch
// Returning Values from Async functions

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geo Location
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse Geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );

    if (!resGeo.ok)
      throw new Error(` Problem getting location data ${resGeo.status}`);

    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
    );
    if (!res.ok)
      throw new Error(` Problem getting country data ${resGeo.status}`);

    const data = await res.json();

    renderCountry(data[0]);

    return `2: You are in ${dataGeo.address.county}, ${dataGeo.address.country}`;
  } catch (err) {
    console.error(err);
    renderError(`${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log('1: Will get Location');
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then((city) => console.log(city))
//   .catch((err) => console.error(err.message))
//   .finally(() => console.log('3:Finished getting Location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3:Finished getting Location');
})();

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch(err){
//   alert(err.message)
// }



////////////////////////////////
// Running Promise Parallel

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      await getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      await getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      await getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania');



// Other Promise Combinators : race, allSettled and any

// Promise.race - takes array , return who settled first

(async function () {
  const res = await Promise.race([
    await getJSON(`https://restcountries.com/v3.1/name/italy`),
    await getJSON(`https://restcountries.com/v3.1/name/egypt`),
    await getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);

  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v3.1/name/india`), timeout(5)])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err));

// Promise.allSettled (ES2020) takes array of promise, return array of settled promises
Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('ERRor'),
  Promise.resolve('Another success'),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promise.any [ES2021] takes in array of promises, return first fullfilled promise , and ingore rejected promises

Promise.any([
  Promise.resolve('success'),
  Promise.reject('ERRor'),
  Promise.resolve('Another success'),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
*/

///////////////////////////////////////////////
// Challenge #3
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', () => reject(new Error('Image Not Found')));
  });
};

let currentImg;

const loadNPause = async function () {
  try {
    // const img1 = await createImage('img/img-1.jpg');
    let img = await createImage('img/img-1.jpg');
    console.log(img1);
    // currentImg = img1;
    await wait(2);
    img.style.display = 'none';

    img = await createImage('img/img-2.jpg');
    // currentImg = img2;
    await wait(2);
    img.style.display = 'none';

    img = await createImage('img/img-3.jpg');
    // currentImg = img3;
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = await Promise.all(imgArr.map(async (img) => await createImage(img)));
    // console.log(imgs);
    imgs.forEach((img) => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
// createImage('./img/img-1.jpg')
//   .then((img) => {
//     currentImg =img
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('./img/img-2.jpg');
//   })
//   .then((img) => {
//     currentImg = img
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('./img/img-3.jpg');
//   })
//   .then((img) => {
//     currentImg =img
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch((err) => console.error(err.message));
