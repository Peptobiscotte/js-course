'use strict'

// CODING CHALLENGE #1

// const checkDogs = function (arr1, arr2) {
//   arr1 = arr1.slice(1, 3)
//   const dogsArr = arr1.concat(arr2)

//   dogsArr.forEach(function (age, i) {
//     if (age >= 3) {
//       console.log(`Dog ${i + 1} is adult 🐕 and ${age} years old`)
//     } else if (age === 1) {
//       console.log(`Dog ${i + 1} is a puppy 🐶 and ${age} year old`)
//     } else {
//       console.log(`Dog ${i + 1} is a puppy 🐶 and ${age} years old`)
//     }
//   })
// }

// const julia = [3, 5, 2, 12, 7]
// const kate = [4, 1, 15, 8, 3]

// checkDogs(julia, kate)

// CODING CHALLENGE #2

// const dogAge1 = [5, 2, 4, 1, 15, 8, 3]
// const dogAge2 = [16, 6, 10, 5, 6, 1, 4]

// // const calcAverageHumanAge = function (ages) {
// //   const agesHuman = ages.map(function (age) {
// //     if (age <= 2) {
// //       return age * 2
// //     } else {
// //       return age * 4 + 16
// //     }
// //   })
// //   return agesHuman // pourquoi on met le return ici?
// // }

// // console.log(calcAverageHumanAge(dogAge1))

// const calcAverageHumanAge = function (ages) {
//   const agesHuman = ages.map(age => age <= 2 ? age * 2 : age * 4 + 16)
//     .filter(function (age) {
//       return age >= 18
//     })
//   const sumAges = agesHuman.reduce(function (acc, age) {
//     return acc + age
//   }, 0)
//   return sumAges / agesHuman.length
// }
// console.log(calcAverageHumanAge(dogAge1))

// CODING CHALLENGE # 3

// const dogAge1 = [5, 2, 4, 1, 15, 8, 3]
// const dogAge2 = [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = ages => ages
//   .map(age => age <= 2 ? age * 2 : age * 4 + 16)
//   .filter(age => age >= 18)
//   .reduce((acc, age, i, arr) => acc + age / arr.length, 0) // penser à inclure la variable array dans la methode reduce pour pouvoir calculer le sum (utile quand on fait une arrow function)

// console.log(calcAverageHumanAge(dogAge1))
