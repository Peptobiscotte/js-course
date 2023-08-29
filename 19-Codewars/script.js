'use strict'

// function squareSum (...numbers) {
//   const flat = numbers.flat()
//   const squared = flat.map(function (number) {
//     return number ** 2
//   })
//   const sum = squared.reduce((acc, value) => acc + value, 0)
//   return sum
// }

// const test = squareSum([1, 2, 2], 50)
// console.log(test)

// function positiveSum (...arr) {
//   const flat = arr.flat()
//   const filtered = flat.filter(number => number > 0)
//   const sum = filtered.reduce((acc, number) => acc + number, 0)
//   return sum
// }

// const test = positiveSum([], 0)
// console.log(test)

// function countPositivesSumNegatives (arr) {
//   let final = [0, 0]
//   const emptyArr = []
//   if (arr === null) {
//     return emptyArr
//   } else if (arr.length === 0 || arr.toString() === '0,0') {
//     return emptyArr
//   }

//   const positive = arr.filter(value => value > 0)
//   const count = positive.length

//   const negative = arr.filter(value => value < 0)
//     .reduce((acc, value) => acc + value, 0)

//   final = [count, negative]
//   return final
// }

// const result = countPositivesSumNegatives(null)
// console.log(result) // // a refactoriser

// function fakeBin (x) {
//   const split = x.split('')
//   const nbArray = split.map(Number)
//   const tri = nbArray.map(value => value >= 5 ? 1 : 0)
//   const joinStr = tri.join('')
//   return joinStr // fonctionnel à refactoriser
// }

// const test = fakeBin('45385593107843568')
// console.log(test)

// function fakeBin2 (x) { // refactorisé
//   return x.split('').map(Number).map(value => value >= 5 ? 1 : 0).join('')
// }

// const test2 = fakeBin2('45385593107843568')
// console.log(test2)

// function maps (x) {
//   return x.map(value => value * 2)
// }

// const test = maps([1, 2, 3])
// console.log(test)

// function stringToArray (string) {
//   return string.split(' ')
// }

// const test = stringToArray('hello world')
// console.log(test)

// function sumMix (x) {
//   const allNumb = x.map(function (e) {
//     if (typeof e === 'string') { e = Number(e) }
//     return e
//   })
//   const answer = allNumb.reduce((acc, n) => acc + n, 0) // fonctionnel à refactor
//   return answer
// }

// const test = sumMix([9, 3, '7', '3'])
// console.log(test)

// function sumMix2 (x) {
//   return x.map(e => typeof e === 'string' ? Number(e) : e)
//     .reduce((acc, n) => acc + n, 0)
// }

// const test2 = sumMix2([9, 3, '7', '3'])
// console.log(test2)

// function simpleMultiplication (number) {
//   return number % 2 === 0 ? number * 8 : number * 9
// }
// const test = simpleMultiplication(3)
// console.log(test)

// function areYouPlayingBanjo (name) {
//   return name.toLowerCase()[0] === 'r' ? name + ' plays banjo' : name + ' does not play banjo'
// }

// const test = areYouPlayingBanjo('max')
// console.log(test)

// function countBy (x, n) {
//   const z = []
//   for (let i = 1; i <= n; i++) {
//     z.push(x * i)
//   }
//   return z
// }
// const test = countBy(5, 10)
// console.log(test)

// function lovefunc (flower1, flower2) {
//   return (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
//   (flower1 % 2 !== 0 && flower2 % 2 === 0)
// }

// function lovefunc2 (flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2
// }

// const test = lovefunc(1, 5)
// console.log(test)

// function getGrade (s1, s2, s3) {
//   const sum = (s1 + s2 + s3) / 3
//   if (sum <= 100 && sum >= 90) {
//     return 'A'
//   } else if (sum < 90 && sum >= 80) {
//     return 'B'
//   } else if (sum < 80 && sum >= 70) {
//     return 'C'
//   } else if (sum < 70 && sum >= 60) {
//     return 'D'
//   } else if (sum < 60 && sum >= 0) {
//     return 'F'
//   }
// }
// const test = getGrade(58, 59, 60)
// console.log(test)

// const summation = function (num) {
//   let sum = 0
//   for (let i = 0; i <= num; i++) {
//     sum += i
//   }
//   return sum
// }

// const tset = summation()
// console.log(tset)

// function makeUpperCase (str) {
//   return str.toUpperCase()
// }

// const test = makeUpperCase('')
// console.log(test)

// function check (a, x) {
//   return a.includes(x)
// }

// const test = check(['what', 'a', 'great', 'kata'], 'kat')
// console.log(test)

// function invert (array) {
//   return array.map(value => -value)
// }

// const test = invert([])
// console.log(test)

// function feast (beast, dish) {
//   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
// }

// const test = feast('chickadee', 'chocolate cake')
// console.log(test)

// function countSheeps (arrayOfSheep) {
//   return arrayOfSheep.filter(sheep => sheep === true)
//     .reduce((a, b) => a + b, 0)
// }

// const test = countSheeps([true, true, true, false,
//   true, true, true, true,
//   true, false, true, false,
//   true, false, false, true,
//   true, true, true, true,
//   false, false, true, true])
// console.log(test)

// function nbYear (p0, percent, aug, p) {
//   let n = 0
//   const percentD = percent / 100
//   while (p0 < p) {
//     p0 += Math.floor((p0 * percentD) + aug)
//     n++
//   }
//   return n
// }

// const test = nbYear(1000, 2.0, 50, 1214)
// // const test = nbYear(1000, 2.0, 50, 1214)
// console.log(test)
