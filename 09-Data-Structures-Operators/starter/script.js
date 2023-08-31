'use strict'

// Data needed for a later exercise
const flights =
  // eslint-disable-next-line max-len
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

// Data needed for first part of the section

const weekdays = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun']

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22
  },
  [weekdays[4]]: {
    open: 11,
    close: 23
  },
  [weekdays[5]]: { // on peut compute les property names.
    open: 0, // Open 24 hours
    close: 24
  }
}

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 Enhanced object literal
  openingHours, // on copie direct l'objet openingHours

  order (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order is: ${this.starterMenu[starterIndex]},\
 ${this.mainMenu[mainIndex]}, it will be delivered to ${address} at ${time}`)
  },

  orderPasta: function (ingr1, ingr2, ingr3) {
    console.log(`Here is your pasta with ${ingr1}, ${ingr2}, ${ingr3}.`)
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  }
}

// restaurant.orderPizza('mushroom', 'onion', 'pepperoni') // le premier ingr
// est une sttring et les autres sont rangés dans un array.

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 23',
//   mainIndex: 2,
//   starterIndex: 2
// })

// const ingredients = [prompt('Ingredient 1'), prompt('Ingredient 2,'),
//   prompt('Ingredient 3')]
// console.log(ingredients)

// restaurant.orderPasta(...ingredients)

// COURSE 104 destructuring Objects

// const { name, openingHours, categories } = restaurant // on doit donner le nom de la propriété.
// console.log(name, openingHours, categories) // du coup la variable aura le nom de la propriété

// // pour spécifier un nom de variable différent on fait:

// const {
//   name: restaurantName,
//   openingHours: hours, categories: tags
// } = restaurant

// console.log(restaurantName, hours, tags)

// // Default values

// const { menu = [], starterMenu: starters = [] } = restaurant // on peut aussi mettre des default values si la propriété n'existe pas
// console.log(menu, starters) // on voit que menu est vide mais starters est l'array de startermenu

// // Mutating variables

// let a = 111
// let b = 999
// const obj = { a: 23, b: 7, c: 14 }; // ici encore le ; est indispensable
// ({ a, b } = obj) // on doit utiliser des parentheses car si on utilise {} direct, js ne prend pas de =.

// console.log(a, b)

// // Nested objects

// const { fri: { open, close } } = openingHours // syntaxe pour obj dans obj
// console.log(open, close)

// COURSE 103 Destructuring arrays

// destructuring is a way to break array into small variables

// const array = [2, 3, 4]
// const a = array[0]
// const b = array[1]
// const c = array[2]

// console.log(a, b, c) // bad way to do it

// const [x, y, z] = array // on destructure l'array ici
// console.log(x, y, z) // easy way

// // Exemple du restaurant

// let [main, , secondary] = restaurant.categories // en laissant un trou dans l'array de destruction on skip un element de l'array a destructurer
// console.log(main, secondary); // si on met pas le ; ici ça ne fonctionne pas.
// [main, secondary] = [secondary, main]
// console.log(main, secondary)

// // notre function nous return un array et on le split en deux valeurs
// const [starter, mainCourse] = restaurant.order(2, 0)
// console.log(starter, mainCourse)

// // Nested array (array inside array)

// const nested = [2, 4, [5, 6]]
// const [val1, , val3] = nested
// console.log(val1, val3) // ici ça retourne 2 et un array contenant [5 et 6]

// const [vald1, vald2, [vald3, vald4]] = nested
// console.log(vald1, vald2, vald3, vald4) // ici ça retourne chaque valeur séparée.

// // Default values

// const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p, q, r) // r a pris la default value de 1

// COURSE 104 destructuring Objects (en haut)

// COURSE 105 The Spread Operator

// const arr = [7, 8, 9]
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]] // on veut un nouvel array contenant l'ancien + nouvelles valeurs
// console.log(badNewArray) // bad way

// const newArray = [1, 2, ...arr] // le spread operator (...) étend l'array en ses valeurs uniques.
// console.log(newArray)
// console.log(...newArray) // voir resultat ici

// // dans le contexte du restaurant
// // on veut créer un nouveau menu contenant l'ancien et un nuovel element:

// const newMenu = [...restaurant.mainMenu, 'Gnocchi']
// console.log(newMenu) // contient l'ancien menu + gnocchi

// // Copy arrays

// const mainMenuCopy = [...restaurant.mainMenu]
// console.log(mainMenuCopy)

// const menu = [...mainMenuCopy, ...restaurant.starterMenu]
// console.log(menu)

// // le spread operator ne fonctionne pas que sur les arrays mais sur tous les
// // "iterables" qui sont : strings, arrays, maps, sets mais pas sur les objets.

// const str = 'Maxime'
// const letters = [...str, ' ', 'M']
// console.log(letters)

// On Objects

// const newRestaurant = {
//   ...restaurant,
//   foundedIn: 1998,
//   founder: 'pepe'
// }
// console.log(newRestaurant)

// // on peut aussi créer des shallow copy :
// const restaurantCopy = { ...restaurant }

// COURSE 106 rest pattern

// Spread op (... on th right side of =)
// const arr = [1, 2, ...[3, 4]]
// console.log(arr) // expand l'array 3,4 dans le premier

// // Rest pattern, (... on the left side of =)
// const [a, b, ...others] = [1, 2, 3, 4, 5]
// console.log(a, b, others) // crée un array contenant 3,4,5

// const [pizza, , risotto, ...otherFood] =
// [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood) // does not include skipped elements.
// // le rest element doit toujours etre le dernier car il collecte tout ce qui reste.

// // in Objects
// const { sat, ...weekdays } = restaurant.openingHours
// console.log(weekdays)

// // in Functions
// const add = function (...numbers) { // ... en argument permet de faire passer n'importe quelle
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i]
//   console.log(sum)
// }
// // nombre d'arguments dans la fonction (et les arrange en arrays)
// // ne pas confondre avec le spread, ici on compresse en un array la ou on etend un array en valeurs uniques avec le spread.
// add(2, 3)
// add(2, 3, 4)
// add(2, 3, 4, 5)

// const x = [23, 5, 7]
// add(...x)

// COURSE 107 Short circuit && || operators

// they can use any data type, return any data type,
// can use short circuit evalutation

// si la première value est 'truthy', returns la premier value (short circuit)
// console.log(3 || 'Max') // la seconde ne sera pas évaluée
// console.log('' || 'Max')
// console.log(true || 0)
// console.log(undefined || null || 0) // si tout est falsy, returns la dernière
// console.log(undefined || 0 || 'hello' || 23) // 'hello' est la 1ere truthy value
// // elle cause le short circuit

// restaurant.numGuests = 23
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
// // console.log(guests1) // on check si numGuests est une propriété existante de
// // restaurant, si non on la set à 10

// const guests2 = restaurant.numGuests || 10
// console.log(guests2) // js check si restaurant.numGuests est true (si la propriété existe)
// sinon elle le set sur 10

// AND operator &&

// console.log(0 && 'Max') // short circuit a la 1ere falsy value et la return
// console.log('Max' && 7) // sinon return la dernière
// console.log('Max' && 7 && 0 && 'hello') // on voit le shortcircuit

// // practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach')
// }// si la method existe, on l'appelle

// restaurant.orderPizza && restaurant.orderPizza('egg', 'bacon')
// // pareil mais comprendre : si la première value (rest.ordPizza) est falsy
// // court circuite et arrête là, sinon continue et applique la dernière value.

// COURSE 108 Nullish Coalescing operator

// restaurant.numGuests = 0

// const guests = restaurant.numGuests || 10 // ici on veut set sur 10 uniquement si la propriété n'existe pas mais elle existe et est set sur 0 donc le || operator la considère falsy
// console.log(guests)// donc il lit la seconde propriété.

// // pour contrer ce pb on utilise le nullish ??

// const guestsNullish = restaurant.numGuests ?? 10
// console.log(guestsNullish) // il considère comme falsy uniquement null et undefined
// // ce qui permet de fonctionner avec 0 comme valeur.
// // 0 et '' sont des truthy values dans ce cas

// COURSE 109 Logical assignment operators

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0 // 20
// }

// const rest2 = {
//   name: 'la Piazza',
//   owner: 'Giovanni Rossi'
// }

// // OR assignment operator
// // rest1.numGuests ||= 10 // si le premier est vrai shortcircuit
// rest2.numGuests ||= 10 // si le premier est faux, passe à la suite

// // ?? assignment operator
// rest1.numGuests ??= 10 // fonctionne pareil mais enleve 0 et '' des falsy

// // &&= assignment operator
// rest2.owner &&= '<ANONYMOUS>' // meme logique.

// console.log(rest1)
// console.log(rest2)

// CODING CHALLENGE # 1

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski'
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze'
//     ]
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5
//   }
// }

// // 1

// const players1 = [...game.players[0]]
// const players2 = [...game.players[1]]
// // const [player1, player2] = game.players

// // 2

// const gk = players1[0]
// // const fieldPlayers = players1.slice(1) // array method (mieux)
// const [, ...fieldPlayers] = players1 // bof
// console.log(fieldPlayers)

// // 3

// // const allPlayers = players1.concat(players2) // pareil mais mieux ?
// const allPlayers = [...players1, ...players2]
// console.log(allPlayers)

// // 4

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(players1Final)

// // 5

// const team1 = game.odds.team1
// const team2 = game.odds.team2
// const draw = game.odds.x

// // 6

// const printGoals = function (...players) {
//   players.forEach(function (name) {
//     console.log(name)
//   })
//   console.log(players.length)
// }

// printGoals('José', 'Martino', 'Sardoche', 'Paxit')

// // 7

// team1 < team2 && console.log(`${game.team1} better odds`)
// team2 < team1 && console.log(`${game.team2} better odds`)

// COURSE 111 FOR OF LOOP

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// // for (const item of menu) console.log(item)
// // loop tout le menu et donne accès a chaque itération à un element de l'array
// // on accede à cet element en declarant une variable avant le of.

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`)
// }
// // on peut acceder a l'index grace a la method entries.
// // chaque élement est alors stocké dans un array contenant index puis elem.
// // on peut accéder à l'index grace à item[0] et a l'elem grace a item[1]

// console.log('----Destructured----')

// for (const [i, elem] of menu.entries()) {
//   console.log(`${i + 1}: ${elem}`) // on destructure l'array pour avoir chaque element stocké dans une variable.
// }

// COURSE 112 Enhanced Object Litterals
// about computing property names and different syntax for objects

// COURSE 113 Optionnal chaining

// // on veut checker les heures d'ouverture le lundi mais on sait pas si elles
// // existent

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open)
// }

// // with optionnal chaining
// console.log(restaurant.openingHours.mon?.open)
// // si la propriété avant le ? exist, continue le chaining, sinon retourne ud

// // pratique pour utiliser les API quand on ne sait pas si une propriété
// // existe ou non.

// // example

// const days = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun']

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ??
//   'closed'
//   console.log(`on ${day} we open at ${open}`)
// }
// // permet de checker si le day existe dans l'objet openingHours
// // si il n'existe pas return false, passe a la deuxieme valeur apres ??

// // Fonctionne aussi sur les methods

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist')
// // meme fonctionnement

// // Fonctionne sur les arrays

// const users = [{ name: 'Max', id: '666' }]
// console.log(users[0]?.name ?? 'user no exist')
// // si il n'y a rien en users[0] on ne fait rien sinon on retourne le nom

// COURSE 114 Looping Objects

// Property Names
// for (const day of Object.keys(openingHours)) {
//   console.log(day)
// }

// const properties = Object.keys(openingHours)
// console.log(properties) // Object.keys crée un array contenant les propriétés de l'objet
// // on peut utiliser cet array par la suite.
// console.log(`We are open ${properties.length} days`)

// // Property Values

// const values = Object.values(openingHours)
// console.log(values)

// // Entire object

// const entries = Object.entries(openingHours)
// console.log(entries)

// for (const [key, { open, close }] of entries) { // on deconstruit l'array ici
//   // console.log(x) // remarquer comment est construit l'array resultant
//   console.log(`On ${key} we open at ${open} and close at ${close}`)
// }

// CODING CHALLENGE # 2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski'
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze'
//     ]
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5
//   }
// }

// // 1

// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`)
// }

// // 2
// let sum = 0
// for (const [, odd] of Object.entries(game.odds)) {
//   sum += odd / Object.entries(game.odds).length
// }
// console.log(sum)

// // 3

// console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`)
// console.log(`Odd of draw ${game.odds.x}`)
// console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`)

// // 4

// const scorers = {

// }

// COURSE 116 SETS
