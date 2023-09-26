'use strict'

// prettier-ignore
const months = ['January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December']

const form = document.querySelector('.form')
const containerWorkouts = document.querySelector('.workouts')
const inputType = document.querySelector('.form__input--type')
const inputDistance = document.querySelector('.form__input--distance')
const inputDuration = document.querySelector('.form__input--duration')
const inputCadence = document.querySelector('.form__input--cadence')
const inputElevation = document.querySelector('.form__input--elevation')

let map, mapEvent

// fonction qui donne la position de l'user
// la fonction prend 2 callbacks en argument, le premier en cas de reussite de geoloc, le second en cas d'échec
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    const { latitude } = position.coords
    const { longitude } = position.coords
    // console.log(`https://www.google.fr/maps/@${latitude},${longitude}`)

    const coords = [latitude, longitude]

    map = L.map('map').setView(coords, 13)

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      // eslint-disable-next-line max-len
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    map.on('click', function (mapE) {
      mapEvent = mapE
      form.classList.remove('hidden')
      inputDistance.focus()
    })
  },
  function () {
    alert('Could not get your position')
  })
}

form.addEventListener('submit', function (e) {
  e.preventDefault()

  // Clear input fields
  // eslint-disable-next-line max-len
  inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''

  // Display Marker
  const { lat, lng } = mapEvent.latlng

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(L.popup({
      maxWidth: 250,
      minwidth: 100,
      autoClose: false,
      closeOnClick: false,
      className: 'running-popup'
    }))
    .setPopupContent('Workout')
    .openPopup()
})

inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
})
