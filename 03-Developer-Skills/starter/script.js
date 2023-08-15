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
