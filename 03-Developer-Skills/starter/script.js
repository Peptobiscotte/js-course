// Remember, we're gonna use strict mode in all scripts now!
'use strict'

// const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
// const temperature2 = [5, -1, 9, 18]
// calculate the temperature amplitude

// 1) Understanding the problem
// what is temp amplitude? A: Difference between highest and lowest temp.
// how to compute the max and min temp?
// what is a sensor error and what to do when one occurs

// 2) Divide and conquer the problem into sub-problems
// How to ignore errors (errors sont des string et le reste des numbers on peut ignorer les strings)
// How to find Max and Min temp in the array
// Substract min from max (amplitude) and return it

// const calcTempAmp = function (arr, arr2) {
//   arr = arr.concat(arr2)
//   console.log(arr)
//   let max = arr[0]
//   let min = arr[0]

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number') { continue }

//     if (arr[i] > max) {
//       max = arr[i]
//     }
//     if (arr[i] < min) {
//       min = arr[i]
//     }
//   }
//   return `'The temperature amplitude is ${max - min}'`
// }

// console.log(calcTempAmp(temperature, temperature2))

// // it should receive  two arrays not just one.

// // 1) Just merge two arrays
// // 2) How to merge two arrays -> on declare 2 variables dans la fonction
// // puis 1ere ligne on merge les 2 arrays avec la fonction concat.

// COURSE 61 Debugging

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // 3) fix the bug

//     value: Number(prompt('Degree celsius : '))

//   }
//   // 2) find the bug

//   //   console.warn(measurement.value) // autres types de commandes de consoles (affiche un warning ou une error)
//   //   console.error(measurement.value)
//   console.table(measurement)

//   const kelvin = measurement.value + 273
//   return kelvin
// }

// // 1) identify the bug (it returns 10273 if we enter 10)

// console.log(measureKelvin())

// const calcTempAmpBug = function (arr, arr2) {
//   arr = arr.concat(arr2)
//   console.log(arr)
//   let max = 0
//   let min = 0 // le pb est la

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number') { continue }

//     if (arr[i] > max) {
//       max = arr[i]
//     }
//     if (arr[i] < min) {
//       min = arr[i]
//     }
//   }
//   console.log(max, min)
//   return `'The temperature amplitude is ${max - min}'`
// }

// const amplitudeBug = calcTempAmpBug([3, 5, 1], [9, 4, 5])
// console.log(amplitudeBug)

// CODING CHALLENGE # 1

// const data1 = [17, 21, 23]
// const data2 = [12, 5, -5, 0, 4]

// // const printForecast = function (arr) {
// //   const arrayJoined = arr.map(function (value, i) {
// //     arr.join(`℃ in ${[i] + 1} days ... `)
// //     return value
// //   })
// //   console.log(arrayJoined) // FONCTIONNE PAS
// // }

// const printForecast = function (arr) {
//   let output = ''

//   for (let i = 0; i < arr.length; i++) {
//     output += `... ${arr[i]}℃ in ${[i + 1]} days `
//   }
//   console.log(output + '...') // si on veut 3 points a la fin de l'output comme on ne pouvait pas les mettre dans le template litteral (sinon il les aurait repeat 3 x)
// }

// printForecast(data1)

// // console.log('----BREAK----')
// // printForecast(data2)
