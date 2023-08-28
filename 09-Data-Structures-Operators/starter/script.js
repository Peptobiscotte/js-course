'use strict'

// Data needed for a later exercise
const flights =
  // eslint-disable-next-line max-len
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24
    }
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order is: ${this.starterMenu[starterIndex]},\
 ${this.mainMenu[mainIndex]}, it will be delivered to ${address} at ${time}`)
  },

  orderPasta: function (ingr1, ingr2, ingr3) {
    console.log(`Here is your pasta with ${ingr1}, ${ingr2}, ${ingr3}.`)
  }
}
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
