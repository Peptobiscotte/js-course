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

const dogAge1 = [5, 2, 4, 1, 15, 8, 3]
const dogAge2 = [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => age <= 2 ? age * 2 : age * 4 + 16)
  // finir le challenge en utilisant filter pour 2) et reduce pour 3)
}

console.log(calcAverageHumanAge(dogAge1))
