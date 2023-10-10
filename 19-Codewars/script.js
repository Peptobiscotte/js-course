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

// function findNeedle (haystack) {
//   const position = haystack.indexOf('needle')
//   return `found the ${haystack[position]} at position ${position}`
// }

// // eslint-disable-next-line max-len
// findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false])

// function findShort (s) {
//   const arr = s.split(' ')
//   let shortWord = arr[0]
//   arr.map(function (word) {
//     if (word.length < shortWord.length) {
//       shortWord = word
//     }
//     return shortWord
//   })
//   return shortWord.length
// }

// const test = findShort('bitcoin take over the world maybe who knows perhaps')
// console.log(test)

// function litres (time) {
//   return Math.floor(time / 2)
// }

// function solution (str) {
//   const splitted = str.split('')
//     .reverse()
//     .join('')
//   return splitted
// }

// const test = solution('hello')
// console.log(test)

// const solution2 = (str) => str.split('').reverse().join('')
// const test2 = solution2('hello')
// console.log(test2)

// function DNAStrand (dna) {
//   const split = dna.split('')
//   const reverse = split.map(function (letter) {
//     if (letter === 'A') {
//       letter = 'T'
//     } else if (letter === 'T') {
//       letter = 'A'
//     } else if (letter === 'G') {
//       letter = 'C'
//     } else if (letter === 'C') {
//       letter = 'G'
//     }
//     return letter
//   })
//   return reverse.join('')
// }

// const test = DNAStrand('ATGC')
// console.log(test)

// function paperwork (n, m) {
//   return n < 0 || m < 0 ? 0 : n * m
// }

// const test = paperwork(5, -5)
// console.log(test)

// function accum (s) {
//   const arr = s.split('')
//   console.log(arr)
// }

// const test = accum('abcd')
// console.log(test)

// function solution (str, ending) {
//   if (ending === '') {
//     return true
//   } else {
//     const slicing = str.slice(-ending.length)
//     return slicing === ending
//   }
// }

// const test = solution('abcde', '')
// console.log(test)

// function openOrSenior (data) {
//   const check = data.map(function (arr, i) {
//     if (arr[0] >= 55 && arr[1] > 7) {
//       arr = 'Senior'
//     } else {
//       arr = 'Open'
//     }
//     return arr
//   })
//   return check
// }

// const test = openOrSenior([[45, 12], [55, 21]])
// console.log(test)

// function findSmallestInt (args) {
//   let smallest = args[0]
//   args.map(function (age) {
//     if (age < smallest) {
//       smallest = age
//     }
//     return smallest
//   })
//   return smallest
// }

// const test = findSmallestInt([78, 56, 232, 12, 8])
// console.log(test)

// // class SmallestIntegerFinder {
// //     findSmallestInt(args) {
// //         let smallest = args[0]
// //         args.map(function (age) {
// //           if (age < smallest) {
// //             smallest = age
// //           }
// //           return smallest
// //         })
// //         return smallest
// //     }
// //   }

// function longest (s1, s2) {
//   const str = [s1, s2].join('').split('').sort()
//   return [...new Set(str)].join('')
// }

// const test = longest('aretheyhere', 'yestheyarehere')
// console.log(test)

// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return 'Draw!'
//   } else if ((p1 === 'scissors' && p2 === 'paper') ||
//   (p1 === 'paper' && p2 === 'rock') || (p1 === 'rock' && p2 === 'scissors')) {
//     return 'Player 1 won!'
//   } else {
//     return 'Player 2 won!'
//   }
// }

// const test = rps('rock', 'scissors')
// console.log(test)

// function isIsogram (str) {
//   const lowerC = str.toLowerCase()
//   let testDouble = ''
//   let isTrue = true
//   lowerC.split('')
//     .map(function (letter) {
//       if (letter !== testDouble) {
//         testDouble = letter
//         console.log(testDouble)
//       } else if (letter === testDouble) {
//         isTrue = false
//       }
//       return letter
//     })
//   return isTrue
// }

// const test = isIsogram('abaa')
// console.log(test)

// function basicOp (operation, value1, value2) {
//   switch (operation) {
//     case '+': return value1 + value2
//     case '-': return value1 - value2
//     case '*': return value1 * value2
//     case '/': return value1 / value2
//   }
// }

// const test = basicOp('+', 4, 7)
// console.log(test)

// const binaryArrayToNumber = arr => {
//   return arr.reverse()
//     .map((bit, i) => Math.pow(2, i) * bit)
//     .reduce((acc, value) => acc + value, 0)
// }

// const test = binaryArrayToNumber([1, 1, 1, 1, 0, 1, 1, 0])
// console.log(test)

// function bmi (weight, height) {
//   const bmi2 = weight / height ** 2
//   if (bmi2 <= 18.5) {
//     return 'Underweight'
//   } else if (bmi2 <= 25.0) {
//     return 'Normal'
//   } else if (bmi2 <= 30) {
//     return 'Overweight'
//   } else if (bmi2 > 30) {
//     return 'Obese'
//   }
// }

// const test = bmi(80, 1.80)
// console.log(test)

// const booleanToString = (b) => String(b)

// const opposite = (number) => -number

// function towerBuilder (nFloors) {
//   const arr = []
//   const star = '*'
//   for (let i = 0; i < nFloors; i++) {
//     arr.push(star.repeat((i * 2) + 1))
//   }
//   console.log(arr)
// //   const lastArrLength = arr.slice(-1).join('').length
// //   const padded = arr.map(function (str) {
// //     str.padStart(lastArrLength / 2).padEnd(lastArrLength / 2)
// //     return str
// //   })
// //   console.log(padded)
// }
// const test = towerBuilder(3)
// console.log(test)

// const findAverage = (array) => array.length === 0
//   ? 0
//   : array.reduce((acc, value) => acc + value, 0) /
// array.length

// const test = findAverage([])
// console.log(test)

// function isValidWalk (walk) {
//   let part1 = []
//   let part2 = []

//   const reverse = {
//     n: 's',
//     s: 'n',
//     e: 'w',
//     w: 'e'
//   }

//   if (walk.length === 10) {
//     part2 = walk.splice(5, 9)
//     part1 = walk.splice(0, 5)
//   } else {
//     return false
//   }
//   const part2rev = part2.reverse()

//   const part2transformed = part2rev.map(function (value) {
//     return reverse[value]
//   })

//   for (let i = 0; i < part1.length; i++) {
//     if (part1[i] !== part2transformed[i]) {
//       return false
//     }
//   }
//   return true
// }

// function isValidWalk (walk) {
//   const walkObj = {
//     n: 0,
//     s: 0,
//     e: 0,
//     w: 0
//   }

//   if (walk.length !== 10) {
//     return false
//   } else {
//     walk.forEach(value => walkObj[value]++)
//   }
//   if (walkObj.n === walkObj.s && walkObj.e === walkObj.w) {
//     return true
//   } else {
//     return false
//   }
// }
// // const part2transformed = part2.map(function (value) {
// //   return reverse[value]
// // })

// // const compte1 = {}
// // part1.forEach(function (value) {
// //   if (!compte1[value]) {
// //     compte1[value] = 1
// //   } else {
// //     compte1[value]++
// //   }
// // })
// // const compte2 = {}
// // part2transformed.forEach(function (value) {
// //   if (!compte2[value]) {
// //     compte2[value] = 1
// //   } else {
// //     compte2[value]++
// //   }
// // })
// // console.log(compte1, compte2)

// // if (compte1.n === compte2.n && compte1.s === compte2.s &&
// //     compte1.w === compte2.w && compte1.e === compte2.e) {
// //   return true
// // } else {
// //   return false
// // }

// const test = isValidWalk(['n', 'e', 'n', 'w', 'n', 's', 's', 's', 's', 'n'])
// console.log(test)

// function duplicateEncode (word) {
//   const setWord = new Set(word.split(''))
//   return setWord

// //   return word.split('').map(function (letter) {
// //     return letter.replace(letter, '(')
// //   })
// }

// const test = duplicateEncode('dini')
// console.log(test)

// function filterList (l) {
//   return l.filter(value => typeof value === 'number')
// }

// function squareDigits (num) {
//   return +num.toString().split('').map(n => n ** 2).join('')
// }

// const test = squareDigits(3212)
// console.log(test)

// const boolToWord = (bool) => bool ? 'Yes' : 'No'

// const test = boolToWord(false)
// console.log(test)

// function findOdd (A) {
//   const compte = {}
//   A.forEach(n => {
//     if (compte[n]) {
//       compte[n]++
//     } else {
//       compte[n] = 1
//     }
//   })
//   const key = Object.entries(compte)
//   let odd
//   key.forEach(function (value) {
//     if ((value[1]) % 2 === 1) { odd = Number(value[0]) }
//   })
//   return odd
// }

// const test = findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])
// console.log(test)

// function reverseWords (str) {
//   return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
// }

// const test = reverseWords('apple pear')
// console.log(test)

// function smash (words) {
//   return words.join(' ')
// }

// const test = smash(['hello', 'world'])
// console.log(test)

// function sumTwoSmallestNumbers (numbers) {
//   return numbers.sort((a, b) => a - b)
//     .slice(0, 2)
//     .reduce((acc, x) => acc + x, 0)
// }

function solution (string) {
  const upp = string.match(/[A-Z]/g)
  console.log(upp[0])
  return string.split('C')
}

const test = solution('camelCasingTrue')
console.log(test)
