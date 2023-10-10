/* eslint-disable max-len */
'use strict'

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

/// ////////////////////////////////////
// [(Object.keys(data.languages))[0]]

const renderCountry = function (data, className = '') {
  // const lang = data.languages[(Object.keys(data.languages))[0]]
  // console.log(lang)
  // const cur = (Object.keys(data.currencies))

  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M</p>
    <p class="country__row"><span>🗣️</span>${data.languages[(Object.keys(data.languages))[0]]}</p>
    <p class="country__row"><span>💰</span>${Object.keys(data.currencies)}</p>
  </div>
</article>`

  countriesContainer.insertAdjacentHTML('beforeend', html)
  countriesContainer.style.opacity = 1
}

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country one
//   const request = new XMLHttpRequest()
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
//   request.send()

//   request.addEventListener('load', function () {
//     //   console.log(this.responseText) // le resultat de la requete en JSON

//     const [data] = JSON.parse(this.responseText)
//     console.log(data) // le resultat de la requete converti en objet JS

//     // render country one
//     renderCountry(data)

//     // get neighbour country 2
//     const neighbour = data.borders[0]

//     if (!neighbour) return

//     const request2 = new XMLHttpRequest()
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`)
//     request2.send()

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText)
//       console.log(data2)

//       // render country two
//       renderCountry(data2, 'neighbour')
//     })
//   })
// }

// getCountryAndNeighbour('usa')

// const request = new XMLHttpRequest()
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`)

// const request = fetch('https://restcountries.com/v3.1/name/portugal')
// console.log(request)

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response)
//       return response.json()
//     }).then(function (data) {
//       console.log(data)
//       renderCountry(data[0])
//     })
// }

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0])
      const neighbour = data[0].borders[0]

      if (!neighbour) return
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
}

getCountryData('portugal')
