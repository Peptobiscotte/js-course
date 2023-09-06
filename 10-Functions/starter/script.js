'use strict'

// COURSE 128 Default parameters

// const bookings = []

// const createBooking = function (flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   }
//   console.log(booking)
//   bookings.push(booking)
// }

// createBooking('LH123')
// // comme on a pas donné de parametres pour numPassengers et price on utilise
// // les default parameters insérés en argument de la fonction .
// createBooking('LH123', 2)
// // on peut inserer une operation et compute a l'interieur des arguments, ici on
// // définit le prix par defaut de 199 * numpassenger.

// COURSE 129 Passing arguments

// const flight = 'LH234'
// const max = {
//   name: 'Max Moons',
//   passport: 321654987
// }

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999'
//   passenger.name = 'Mr.' + passenger.name

//   if (passenger.passport === 321654987) {
//     alert('Check in')
//   } else {
//     alert('Wrong Passport')
//   }
// }

// checkIn(flight, max)
// console.log(flight) // le flight  number n'a pas changé car c'est une primitive value
// // donc la fonction utilise une copie, l'original ne sera pas modif
// console.log(max) // quand on passe l'objet dans la function, on passe sa reference
// // dans le memory heap, donc modifier la copie modifiera aussi l'originale.

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000)
// }
// newPassport(max)
// checkIn(flight, max)

// COURSE 130 First class and high order functions

// les fonctions sont un type d'objet, les objets sont des values donc les fonctions
// aussi

// COURSE 131 Callback functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase()
// }

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ')
//   return [first.toUpperCase(), ...others].join(' ')
// }

// // higher order function (takes a function as an argument)
// const transformer = function (str, fn) {
//   console.log(`Original string : ${str}`)
//   console.log(`Transformed string : ${fn(str)}`)
//   console.log(`Transformed by : ${fn.name}`) // method appliquée aux fonctions
// }

// transformer('Javascript is cool!', upperFirstWord)
// console.log('----Other Function----')
// transformer('Javascript is cool!', oneWord)

// const high5 = function () {
//   console.log('🗿')
// }

// document.body.addEventListener('click', high5)

// // grace aux callback functions on permet un certain niveau d'abstraction, on
// // cache les details de certaines parties du code parce qu'on s'en fout
// // on délègue certaines fonctionnalités a d'autres fonctions.

// COURSE 132 functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`)
//   }
// }

// const greeterHey = greet('hey')
// greeterHey('Max')

// greet('hello')('Max') // on peut syntax comme ça etant donné que le premier call
// // de fonction return une fonction dont l'argument sera en 2 eme pos

// const greetArrow = greeting => name => console.log(`${greeting} ${name}`)
// greetArrow('ahoy')('Captain')
// // syntax pour une arrow function qui return une fonction, on voit que le premier
// // argument return directement le 2eme qui lui return le resultat de la fonction

// COURSE 133 call and apply method

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book (flightNum, name) {
//     console.log(`${name} booked a seat on ${this.airline} \
// flight ${this.iataCode}${flightNum}`)
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNum}`, name
//     })
//   }
// }

// console.log(lufthansa)

// lufthansa.book(239, 'Max Moons')
// lufthansa.book(666, 'Baphomet')

// const euroWings = {
//   airline: 'eurowings',
//   iataCode: 'EW',
//   bookings: []

// }

// // on veut la fonction book dans le second objet donc on la store dans une const:
// const book = lufthansa.book

// // mais maintenant si on l'appelle simplement, le this keyword pointe sur rien
// // comme on a deja vu.

// // CALL METHOD
// book.call(euroWings, 717, 'Tintin') // le premier argument de .call method est
// // l'ndroit ou l'on veut que this pointe
// book.call(lufthansa, 239, 'Pilat')

// console.log(lufthansa)

// const swiss = {
//   airline: 'Swiss air line',
//   iataCode: 'LX',
//   bookings: []
// }

// book.call(swiss, 583, 'Max Moons')

// // APPLY METHOD

// const flightData = [583, 'Pilat']
// book.apply(swiss, flightData) // apply fait comme call mais prend en second argument
// // un array (qui passera en arguments de la function)
// // on peut faire ça simplement avec .call en utilisant le spread op:
// book.call(euroWings, ...flightData)

// // COURSE 134 the BIND method

// // avec .bind on crée une nouvelle fonction(qu'on store dans une variable) dans
// // laquelle this est toujours set sur l'argument (ici euroWings)

// const bookEW = book.bind(euroWings)
// bookEW(999, 'Natas')

// // on peut aussi rajouter d'autres arguments que le this keyword a Bind, notamment
// // pour fixer un des arguments de la fonction.

// const bookEW111 = book.bind(euroWings, 111) // cette fonction n'a besoin de recevoir
// // qu'un nom en argument, le flightNum étant fixe.
// bookEW111('Kipetchi')

// // WITH EVENT LISTENERS

// lufthansa.planes = 300
// lufthansa.buyPlane = function () {
//   console.log(this)
//   this.planes++
//   console.log(this.planes)
// }
// lufthansa.buyPlane()

// // document.querySelector('.buy') // dans une eventHandler function le this keyword pointe sur l'element selectionné (ici .buy)
// //   .addEventListener('click', lufthansa.buyPlane)

// document.querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)) // pour set le
//   // this keyword sur autre chose que l'élement, on va utiliser la method bind

// // PARTIAL APPLICATION

// const addTax = (rate, value) => value + value * rate
// console.log(addTax(0.1, 100))

// const addTVA = addTax.bind(null, 0.23) // premier arg est null car c'est censé etre
// // le this keyword mais il n'y en a pas dans notre fonction donc on met null.
// // le second va fixer la valeur 0.23 pour la fonction, on pourra desormais faire
// // un call de addTVA avec une seul argument etant la valeur

// console.log(addTVA(100))

// CODING CHALLENGE #1

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),

//   registerNewAnswer () {
//     const userInput = window.prompt(`${this.question}\n
// ${this.options[0]}\n
// ${this.options[1]}\n
// ${this.options[2]}\n
// ${this.options[3]}\n`)
//     if (userInput >= 0 && userInput <= 3) {
//       this.answers[userInput] = this.answers[userInput] + 1
//     } else {
//       console.log('Wrong answer')
//     }
//     this.displayResults(this.answers)
//   },

//   displayResults (type) {
//     if (typeof type === 'object') {
//       console.log(type)
//     } else {
//       console.log(`Poll results are: ${type.split(', ')}`)
//     }
//   }
// }

// document.querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll))

// poll.displayResults('1, 5, 3, 9, 6, 1')
