'use strict'

/// //////////////////////////////////////////////
/// //////////////////////////////////////////////
// BANKIST APP

/// //////////////////////////////////////////////
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
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2023-09-10T23:36:17.929Z',
    '2023-09-14T10:51:36.790Z'
  ],
  currency: 'EUR',
  locale: 'pt-PT' // de-DE
}

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z'
  ],
  currency: 'USD',
  locale: 'en-US'
}

const accounts = [account1, account2]

/// //////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome')
const labelDate = document.querySelector('.date')
const labelBalance = document.querySelector('.balance__value')
const labelSumIn = document.querySelector('.summary__value--in')
const labelSumOut = document.querySelector('.summary__value--out')
const labelSumInterest = document.querySelector('.summary__value--interest')
const labelTimer = document.querySelector('.timer')

const containerApp = document.querySelector('.app')
const containerMovements = document.querySelector('.movements')

const btnLogin = document.querySelector('.login__btn')
const btnTransfer = document.querySelector('.form__btn--transfer')
const btnLoan = document.querySelector('.form__btn--loan')
const btnClose = document.querySelector('.form__btn--close')
const btnSort = document.querySelector('.btn--sort')

const inputLoginUsername = document.querySelector('.login__input--user')
const inputLoginPin = document.querySelector('.login__input--pin')
const inputTransferTo = document.querySelector('.form__input--to')
const inputTransferAmount = document.querySelector('.form__input--amount')
const inputLoanAmount = document.querySelector('.form__input--loan-amount')
const inputCloseUsername = document.querySelector('.form__input--user')
const inputClosePin = document.querySelector('.form__input--pin')

/// //////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24))

  const daysPassed = calcDaysPassed(new Date(), date)

  if (daysPassed === 0) return 'Today'
  if (daysPassed === 1) return 'Yesterday'
  if (daysPassed <= 7) return `${daysPassed} days ago`

  return new Intl.DateTimeFormat(locale).format(date)
}

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(value)
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = ''

  const movs = sort
    ? acc.movements
      .slice()
      .sort((a, b) => a - b)
    : acc.movements

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const date = new Date(acc.movementsDates[i])
    const displayDate = formatMovementDate(date, acc.locale)

    const formattedMov = formatCur(mov, acc.locale, acc.currency)

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `

    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency)
}

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency)

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency)

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1
    })
    .reduce((acc, int) => acc + int, 0)
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency)
}

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('')
  })
}
createUsernames(accounts)

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc)

  // Display balance
  calcDisplayBalance(acc)

  // Display summary
  calcDisplaySummary(acc)
}

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0)
    const sec = String(time % 60).padStart(2, 0)

    // In each call, print remaining time to UI
    labelTimer.textContent = `${min}:${sec}`

    // Decrease 1s

    // When time is at 0, stop timer, log out user
    if (time === 0) {
      clearInterval(timer)
      labelWelcome.textContent = 'Log in to get started'
      containerApp.style.opacity = 0
    }
    time--
  }

  // Setting time to 5 min
  let time = 10
  // Call the timer every second
  tick()
  const timer = setInterval(tick, 1000)
  return timer
}

/// ////////////////////////////////////
// Event handlers
let currentAccount, timer

// FAKE LOGGED IN
// currentAccount = account1
// updateUI(currentAccount)
// containerApp.style.opacity = 100

// we want dd//mm//yyyy

const now = new Date()
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', // can be numeric or two digits too
  year: 'numeric',
  weekday: 'long' // can be short or narrow
}

const locale = navigator.language

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now)

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault()

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  )
  console.log(currentAccount)

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`
    containerApp.style.opacity = 100

    // Create current date
    const now = new Date()
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric', // can be numeric or two digits too or long
      year: 'numeric'
      // weekday: 'long' // can be short or narrow or long
    }

    // const locale = navigator.language

    labelDate.textContent =
    new Intl.DateTimeFormat(currentAccount.locale, options).format(now)
    // const day = `${now.getDate()}`.padStart(2, 0)
    // const month = `${now.getMonth() + 1}`.padStart(2, 0) // rajoute un 0 avant le mois si il a que un chiffre
    // const year = now.getFullYear()
    // const hour = `${now.getHours()}`.padStart(2, 0)
    // const minutes = `${now.getMinutes()}`.padStart(2, 0)

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ''
    inputLoginPin.blur()

    // Timer
    if (timer) clearInterval(timer)
    timer = startLogOutTimer()

    // Update UI
    updateUI(currentAccount)
  }
})

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault()
  const amount = +inputTransferAmount.value
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  )
  inputTransferAmount.value = inputTransferTo.value = ''

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount)
    receiverAcc.movements.push(amount)

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString())
    receiverAcc.movementsDates.push(new Date().toISOString())

    // Update UI
    updateUI(currentAccount)
  }
})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault()

  const amount = Math.floor(inputLoanAmount.value)

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount)

      // Add date
      currentAccount.movementsDates.push(new Date().toISOString())

      // Update UI
      updateUI(currentAccount)
    }, 2500)
  }
  inputLoanAmount.value = ''
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault()

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    )
    console.log(index)
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1)

    // Hide UI
    containerApp.style.opacity = 0
  }

  inputCloseUsername.value = inputClosePin.value = ''
})

let sorted = false
btnSort.addEventListener('click', function (e) {
  e.preventDefault()
  displayMovements(currentAccount.movements, !sorted)
  sorted = !sorted
})

/// //////////////////////////////////////////////
/// //////////////////////////////////////////////
// LECTURES

// COURSE 170 converting and checking numbers

// console.log(23 === 23.000)
// console.log(0.1 + 0.2) // JS stocke les numbers en binaire c'est pour ça qu'il ya des resultats
// // chelous ds fois

// // conversion
// console.log(Number('23'))
// console.log(+('23')) // fait la conversion en number comme si on avait écrit Number()

// // parsing
// console.log(Number.parseInt('30px')) // arrive à trouver le number dedans et le filtre
// console.log(Number.parseInt('px30'))
// // check if a number
// console.log(Number.isNaN('20')) // teste si c'est un nombre ou pas
// console.log(Number.isFinite('20')) // teste si c'est un nombre et si il est fini

// COURSE 171 Math and rounding

// console.log(Math.sqrt(25))
// console.log(Math.max(5, 18, '23', 11))

// console.log(Math.PI) // Pi

// console.log(Math.trunc(Math.random() * 6) + 1) // donne 0 à 5

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min
// console.log(randomInt(10, 20))

// // rounding integers
// console.log(Math.trunc(666.6))
// console.log(Math.round(666.1))
// console.log(Math.round(665.8))

// console.log(Math.ceil(12.2))
// console.log(Math.floor(12.9))

// // rounding decimals
// console.log((2.7).toFixed(0))
// console.log((2.345).toFixed(2))

// COURSE 172 The Remainder Operator

// console.log(5 % 2) // comprendre qu'on fait une division et qu'on garde que l'entier =>
// // 5/2 = 2.5 mais on garde 2 donc il reste 1 a la fin (5 = 2 * 2 + 1)
// // utilse pour savoir si un nombre est pair ou impair
// // si x % 2 = 0 il est pair si x % 2 = 1 il est impair

// console.log(8 % 3) // => 2 car 8/3 = 2.6666 on garde le 2, on multiplie par 3 et il reste 2

// const isEven = n => n % 2 === 0
// console.log(isEven(3))
// console.log(isEven(8))

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'yellow'
//     if (i % 3 === 0) row.style.backgroundColor = 'purple'
//   }) // colore en jaune un row sur 2 (uniquement les rows dont l'index est pair)
// }) // colore en violet un row sur 3

// COURSE 173 Numeric separator

// // on ecrirait normalement 287,460,000,000
// const diameter = 287_460_000_000
// console.log(diameter) // l'engine ignore '_' on l'utilise pour aider la lecture du nombre

// const priceCents = 345_99
// const transferFee = 15_00
// // on ne peut pas le placer avant le nombre ou a coté d'un point décimal.

// console.log(Number('230_000')) // => ne fonctionne pas sur une string qu'on veut convertir

// COURSE 174 BigInt

// console.log(2 ** 53 - 1)
// console.log(Number.MAX_SAFE_INTEGER) // il s'agit du plus grand nombre que JS est capable de representer

// // BigInt stands for Big Integers

// console.log(4954954954954954954954954954954n) // ajouter le n a la fin transforme le nombre en
// // Big Int comme si on faisait ça :
// console.log(BigInt(495495495495495)) // éviter d'utiliser le constructor BigInt sur de trop gros
// // nombres plutot utiliser le n

// // Operations

// console.log(10000n + 10000n)
// // on peut faire des operations mais on ne peut pas mixer un number classique avec un BigInt
// const huge = 6565656556565656565656565n
// const num = 66

// console.log(huge * BigInt(num)) // on doit convertir num en BigInt avant de faire l'opération

// // Exceptions

// console.log(20n > 15) // fonctionne sans le BigInt
// console.log(20n === 20) // ne fonctionne pas car === ne convertit pas le type de primitive, et
// // BigInt a un autre type que Number, avec le loose operator ça fonctionne
// // console.log(20n == 20)

// console.log(huge + ' is huge') // fait la conversion en str

// // Divisions
// console.log(10n / 3n) // coupe la décimale comme le ferait .trunc car les BigInt sont entiers.

// COURSE 175 Creating Dates

// Create a date
// const now = new Date()
// console.log(now)

// console.log(new Date('Sep 15 2023 14:32:16'))
// console.log(new Date('December 24, 2015'))

// console.log(new Date(account1.movementsDates[0]))

// console.log(new Date(2023, 5, 30, 15, 21, 3)) // on voit ici qu'on peut rentrer toutes les données
// // une par une (année mois jour puis heure minute seconde) mais le mois est zero based donc 5
// // est le mois de juin

// console.log(new Date(0)) // on peut indiquer la date de création de l'Unix Time la valeur passée
// // en argument est en millisecondes apres la création

// console.log(new Date(3 * 24 * 60 * 60 * 1000)) // conversion de jours en millisecondes
// // ici on a donc 3 jours apres le debut de l'Unix Time

// Working With Dates
// const future = new Date(2066, 5, 30, 14, 22)
// console.log(future)

// console.log(future.getFullYear())
// console.log(future.getMonth()) // +1 pour le vrai mois
// console.log(future.getDate()) // le chiffre du jour du mois
// console.log(future.getDay()) // le chiffre du jour de la semaine (3 = mercredi)
// console.log(future.getHours())
// console.log(future.getMinutes())
// console.log(future.getSeconds())

// console.log(future.toISOString()) // donne une string en standard ISO

// console.log(future.getTime()) // renvoie le timestamp (temps passé depuis UnixTime en ms) ici
// // 3045126120000

// console.log(new Date(3045126120000)) // => on voit que la date est la bonne si on rentre

// console.log(Date.now()) // donne le timestamp actuel

// future.setFullYear(2033)
// console.log(future) // on change l'année de la variable future existe aussi avec month, date, day...

// COURSE 177 operations with dates

// const future = new Date(2037, 10, 19, 15, 23)
// console.log(+future) // nous donne le timestamp en ms

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)

// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4))
// console.log(days1)

// COURSE 178 internationalizing dates

// COURSE 179 Internationalizing numbers

// const num = 626265656.65
// const optionsNum = {
//   style: 'currency', // unit(km/h, celsius...) percent, currency
//   unit: 'celsius',
//   currency: 'EUR',
//   useGrouping: false // enleve les separators des nombres
// }

// console.log('US', new Intl.NumberFormat('en-US', optionsNum).format(num))
// console.log('Germany', new Intl.NumberFormat('de-DE', optionsNum).format(num))
// console.log('Syria', new Intl.NumberFormat('ar-SY', optionsNum).format(num))
// console.log('FR', new Intl.NumberFormat('fr-FR', optionsNum).format(num))
// console.log('Locale', new Intl.NumberFormat(navigator.language).format(num))

// COURSE 180 Timers

// const ingredients = ['olives', 'spinach']

// const pizzaTimer = setTimeout((ing1, ing2) =>
//   console.log(`Here is your Pizza 🍕 with ${ing1} and ${ing2}`)
// , 3000, ...ingredients)
// // function qui prend en premier argument une callback et en second le temps en ms avant d'executer
// // la fonction, apres le delai d'execution on peut utiliser d'autres arguments qui seront
// // les arguments de la callback function

// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer)
// // permet de couper le timer si la condition est remplie, pour ça on rentre la variable contenant
// // le timer en argument de clearTimeout

// // SET INTERVAL
// // setInterval(function () {
// //   const now = new Date()
// //   console.log(now)
// // }, 1000)

// COURSE 181 implementing timer
