/* eslint-disable max-len */
'use strict'

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

/// ////////////////////////////////////

const getCountryData = function (country) {
  const request = new XMLHttpRequest()
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
  request.send()

  request.addEventListener('load', function () {
    //   console.log(this.responseText) // le resultat de la requete en JSON

    const [data] = JSON.parse(this.responseText)
    console.log(data) // le resultat de la requete converti en objet JS

    // Access object values
    const lang = data.languages[(Object.keys(data.languages))[0]]
    const cur = (Object.keys(data.currencies))

    const html = `<article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M</p>
    <p class="country__row"><span>🗣️</span>${lang}</p>
    <p class="country__row"><span>💰</span>${cur}</p>
  </div>
</article>`

    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1
  })
}

getCountryData('micronesia')
getCountryData('usa')
getCountryData('sweden')
