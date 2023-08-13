'use strict'
// COURSE 32 activating strict mode

// const private = 1; // le strict mode nous previent que private est reserved donc il faut pas l'utiliser comme nom de variable

// // COURSE 33 Functions

// function logger() {
//     console.log("My name Jeff")
// }
// // pour appeler la fonction on ecrit :
// logger();

// function fruitProcessor(pommes, oranges) {
//     console.log(pommes, oranges)
//     const juice = `Jus de ${pommes} pommes et ${oranges} oranges. 🧃`;
//     return juice;
// }

// const jusPomme = fruitProcessor(5, 0);
// console.log(jusPomme)
// const jusOrange = fruitProcessor(0, 5);
// console.log(jusOrange)
// const jusMix = fruitProcessor(2, 2);
// console.log(jusMix)

//
// function describeCountry(country, population, capitalCity) {
//     const countryData =
//         `${country} has ${population} people and its capital is ${capitalCity}`
//     return countryData;
// }

// const countryFr = describeCountry("France", 70000000, "Paris")
// console.log(countryFr)
// const countryDe = describeCountry("Germany", 80000000, "Berlin")
// console.log(countryDe)

// COURSE 34 Functions Declarations vs Functions expressions

// function calculAge(birthyear) {
//     // const age = 2023 - 1995;
//     // return age; // pas besoin de store la const age on peut simplement ecrire:
//     return 2023 - birthyear;
// } // ceci est une fonction declaration une des particularites est qu'lle peut etre appelee avant d'etre declaree

// const age1 = calculAge(1995);
// console.log(age1);

// // en dessous une fonction expression on ne donne pas de nom a la fonction mais on la store dans une const - on est obliges de la declarer avant de l'appeler ce qui peut rendre le code plus propre si on declare toutes les fonctions au top du code avant le reste.
// const calcAge2 = function (birthyear) {
//     return 2023 - birthyear;
// }

// const age2 = calcAge2(1995);
// console.log(age2)

//
// // assignement declaration :
// function percentageOfWorld1(population) {
//     return (population / 7900000000) * 100;
// }
// const china = percentageOfWorld1(1412000000)
// const india = percentageOfWorld1(1408000000)
// const france = percentageOfWorld1(67000000)

// console.log(china, india, france)

//
// //assignement expression :
// const percentageOfWorld2 = function (population) {
//     return (population / 79000000000) * 100;
// }
// const china2 = percentageOfWorld2(14120000000)
// const india2 = percentageOfWorld2(14080000000)
// const france2 = percentageOfWorld2(67000000)

// console.log(china2, india2, france2)

// COURSE 35 arrow functions

// //arrow function :
// const calcAge3 = birthYear => 2023 - birthYear; // fomre la plus concise on a pas besoin de {} ni de return, le return est implicite
// //utile pour les functions courtes avec une seule variable
// const age3 = calcAge3(1995)
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years. 😭`; // ici on utilise {} et return car on a plusieurs lignes de code.
// }
// const maxRetirement = yearsUntilRetirement(1995, "Paxit")
// const dadRetirement = yearsUntilRetirement(1967, "Eric")
// console.log(maxRetirement, dadRetirement)

// //asignement

// const percentageOfWorld3 = population => (population / 7900000000) * 100
// console.log(percentageOfWorld3(1412000000)) // on aurait aussi pu store la variable china dans laquelle on rentre la function avec la valeur population associee a la chine :
// const chinaPercentagePop = percentageOfWorld3(1412000000)
// console.log(chinaPercentagePop);

// COURSE 36 Functions calling others
// function cutFruitPieces (fruit) {
//   return fruit * 4
// }

// const fruitProcessor = function (pommes, oranges) {
//   const pommesPieces = cutFruitPieces(pommes)
//   const orangesPieces = cutFruitPieces(oranges)// ici on appelle la fonction du dessus dans la seconde fonction.

//   const juice = `Jus de ${pommesPieces} morceaux de pommes et ${orangesPieces} morceaux d'oranges. 🧃 uh uh\
//  uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh uh `
//   return juice
// }
// console.log(fruitProcessor(2, 3))

//
// // assignement

// const percentageTotalPop = function (populationSpe) {
//     return (populationSpe / 7900000000) * 100
// }
// const describePopulation = function (country, population) {
//     const percentagePop = percentageTotalPop(population)
//     const resultPop = `${country} has ${population} people which is about ${percentagePop} of the world`
//     return resultPop;
// }
// console.log(describePopulation("China", 1441000000))

// COURSE 37 reviewing functions

// const calcAgeMan = function (birthYear) {
//     return 2023 - birthYear;
// }
// const AlexIsPd = function (firstName) {
//     if (firstName === "Alex") {
//         const resultAlex = `${firstName}("nom d'oiseau")`
//         return resultAlex;
//     } else {
//         return firstName;
//     }
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAgeMan(birthYear);
//     const alexVar = AlexIsPd(firstName);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(retirement)
//         return `${firstName, alexVar} retires in ${retirement} years. 😭`;
//     } else {
//         console.log(retirement)
//         return `${firstName} is already retired`
//     }

//
// }
// console.log(yearsUntilRetirement(1995, "Alex"))

// COURSE 38 Coding challenge # 1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let scoreDolphins = calcAverage(44, 23, 71)
// let scoreKoalas = calcAverage(65, 54, 49)
// console.log(scoreDolphins, scoreKoalas)

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log("no winner")
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas)
// checkWinner(100, 200)

// scoreDolphins = calcAverage(85, 54, 41)
// scoreKoalas = calcAverage(23, 34, 27)
// console.log(scoreDolphins, scoreKoalas)

// checkWinner(scoreDolphins, scoreKoalas)

// COURSE 39 intro to arrays

// const friend1 = 'Jeff'
// const friend2 = 'Peter'
// const friend3 = 'Steven'
// chiant de les rentrer un par un donc on utilise un type de data storage qui s'appelle Array:

// const friends = ['Jeff', 'Peter', 'Steven']
// console.log(friends)
// // autre manière de decla un array:

// const y = new Array(1991, 1995, 1999, 2000)
// console.log(y)

// console.log(friends[0])// permet d'utiliser un element de la liste(0 est le premier)
// console.log(friends.length)// shows nb of elements in the array
// console.log(friends[friends.length - 1])// comme c'est en base zero le nombre d'elem -1 ressort le dernier de la liste

// friends[1] = 'Pilat' // remplace le deuxieme ami de la liste, meme si friends est store dans une const on peut changer les values car un array n'est pas une primitive value.(seules les primitives peuvent pas etre changées)
// console.log(friends)
// // friends = ['Max', 'Josh'] ça cree une erreur, on ne peut pas changer entierement la const.

// const firstName = 'Max'
// const me = [firstName, 'Moons', 2023 - 1995, friends] // on peut store des expressions à l'intérieur.
// console.log(me)

// // exercise

// const calcAge = function (birthyear) {
//   return 2023 - birthyear
// }
// const years = [1995, 1991, 1994, 2000]
// console.log(calcAge(years)) // retourne un NaN car la fonction attend une seule value

// const age = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[2])
// const ageLast = calcAge(years[years.length - 1])
// console.log(age, age2, age3, ageLast)
// // pour store les values dans un nouvel array on peut y metter les nouvelles const ou directement les function calls car elles return une value

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])] // etc, etc...
// console.log(ages)

// assignment

// const populations = [60000000, 50000000, 40000000, 70000000]
// console.log(populations.length === 4)

// const percentageTotalPop = function (populationSpe) {
//   return (populationSpe / 7900000000) * 100
// }
// const percentagesPop = [
//   percentageTotalPop(populations[0]),
//   percentageTotalPop(populations[1]),
//   percentageTotalPop(populations[2]),
//   percentageTotalPop(populations[populations.length - 1])]

// console.log(percentagesPop)

// COURSE 40 Basic Array operations

// const friends = ['Mike', 'Peter', 'Joss']

// friends.push('Pilat')// add element at the end
// console.log(friends)

// friends.unshift('Jamon')// add element at the beginning
// console.log(friends)
// // les deux sont des fonctions (ou array methods ici) donc elles return sth, ici la length of the array.

// const popped = friends.pop()// delete last elem and returns the removed element
// console.log(friends)
// console.log(popped)

// const shifted = friends.shift()// delete first elem and returns it
// console.log(friends)
// console.log(shifted)

// console.log(friends.indexOf('Joss'))// donne la position de l'elem demandé
// console.log(friends.indexOf('Bob'))// retourne -1 si l'elem demandé n'est pas dans l'array

// console.log(friends.includes('Joss'))// retourne true si dans l'array
// console.log(friends.includes('Bob'))// retourne false si non existant
// // ici la fonction utilise une strict equality(===) donc elle ne fait pas de type coercion(le number 23 n'est pas égal à la string '23')
// // comme la fonction includes return un boolean on peut l'inserer dans un bloc de condition:

// if (friends.includes('Joss')) {
//   console.log("T'es le pote de Joss")
// } else {
//   console.log("T'es pas son pote")
// }

// // assignment

// const neighbourCountries = ['Belgium', 'Switzerland', 'Italy']
// neighbourCountries.push('Utopia')
// neighbourCountries.pop()
// console.log(neighbourCountries)

// if (!neighbourCountries.includes('Germany')) {
//   console.log('Germany is not your neighbour')
// }

// neighbourCountries[neighbourCountries.indexOf('Italy')] = 'Italia'
// console.log(neighbourCountries)

// Coding challenge # 2

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15
//   } else {
//     return bill * 0.2
//   }
// }

// // la condition if/else de cette fonction aurait pu etre ecrite avec un ternary operator:

// // calcTip = function (bill) {
// //   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// // }

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips)
// // eslint-disable-next-line max-len
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(total)

// COURSE 42 Intro to Objects

// const Max = {
//   firstName: 'Max',
//   lastName: 'Moons',
//   age: 2023 - 1995,
//   job: ['musician', 'dev']
// }
// console.log(Max.job[0])
// // assignment
// const myCountry = {
//   country: 'France',
//   capital: 'Paris',
//   language: 'French',
//   population: 70000000,
//   neighbours: ['Belgium', 'Germany', 'Switzerland', 'Italy', 'Spain']
// }
// console.log(myCountry)
// console.log(myCountry.neighbours[1])

// COURSE 43 Dot vs Bracket notation

// const Max = {
//   firstName: 'Max',
//   lastName: 'Moons',
//   age: 2023 - 1995,
//   job: ['musician', 'dev'],
//   friends: ['Bibi', 'Doudou', 'Kikougno']
// }

// const nameKey = 'Name'
// console.log(Max.lastName)
// console.log(Max['first' + nameKey]) // la bracket notation permet de faire des operations dans l'appel de l'element.
// console.log(Max['last' + nameKey])

// const interest = prompt('Select one: firstName, lastName, age, job.') // prompt est une fonction qui retourne ce que l'utilisateur écrit dans le pop up.
// console.log(interest)
// // console.log(Max[interest]) // on aurait pas pu appeler la const interest avec la dot notation, on a besoin de la bracket notation ici

// if (Max[interest]) {
//   console.log(Max[interest])
// } else {
//   console.log('Wrong')
// }

// Max.location = 'France' // on peut rajouter des infos à l'objet de cette maniere.
// Max.hairColor = 'black'
// console.log(Max)

// // const choseBetween = prompt('Chose what you want')
// // Max.Choice = choseBetween // on peut rajouter un element a la liste basé sur l'input de l'utilisateur

// console.log(`${Max.firstName} has ${Max.friends.length} friends and his \
// best friend is called ${Max.friends[0]}`)

// assignment

// const myCountry = {
//   country: 'France',
//   capital: 'Paris',
//   language: 'French',
//   population: 70000000,
//   neighbours: ['Belgium', 'Germany', 'Switzerland', 'Italy', 'Spain']
// }
// myCountry.population = 72000000

// console.log(`${myCountry.country} has ${myCountry.population}\
//  ${myCountry.language} speaking people, ${myCountry.neighbours.length}\
//   neighbours and a capital called ${myCountry.capital}`)

// COURSE 44 Objects methods

// const max = {
//   firstName: 'Max',
//   lastName: 'Moons',
//   birthyear: 1995,
//   job: 'musician',
//   friends: ['Ilan', 'Tom', 'Bastien'],
//   hasDriversLicense: false,
//   // calcAge: function (birthyear) { // la syntaxe de la fonction change un peu car maintenant c'est une valeur de l'objet 'max', on doit utiliser une fonction expression
//   //   return 2023 - 1995 // une fonction dans un objet est appelée une method
//   // },

//   calcAge2: function () {
//     this.age = 2023 - this.birthyear // on store le resultat de la fonction dans l'objet directement en utilisant this.
//     return this.age // ici en utilisant 'this' on a pas besoin de definir de variable a la fonction, elle va prendre les variables directement dans l'objet.
//   }, // on pourrait utiliser jonas.birthyear mais ça casse le DRY principle et ça casserait la fonction si on change le nom de la const par exemple.

//   getSummary: function () {
//     this.summary = `${this.firstName} is a ${this.calcAge2()} years old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.` // pour inserer une decision if/else dans cette string template litteral on utilise un ternary operator ? :
//     return this.summary
//   }
// }

// console.log(max.calcAge(max.birthyear))
// console.log(max.calcAge2())
// console.log(max.age)
// console.log(max) // ici on voit que 'age' a été défini dans l'objet max.

// challenge
// console.log(max.getSummary())
// console.log(max)

// assignment

// const myCountry = {
//   country: 'France',
//   capital: 'Paris',
//   language: 'French',
//   population: 70000000,
//   neighbours: ['Belgium', 'Germany', 'Switzerland', 'Italy', 'Spain'],

//   describe: function () {
//     return `${this.country} has ${this.population} ${this.language}\
//  speaking people and ${this.neighbours.length} neighbours.`
//   },

//   isIsland: function () {
//     this.Island = this.neighbours.length === 0
//     return this.Island
//   }
// }
// console.log(myCountry.isIsland())
// console.log(myCountry.describe())
// console.log(myCountry)

// Coding Challenge # 3

// const mark = {
//   firstName: 'Mark',
//   lastName: 'Miller',
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.BMI = this.mass / (this.height ** 2)
//     return this.BMI
//   }
// }
// const john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.BMI = this.mass / (this.height ** 2)
//     return this.BMI
//   }
// }

// mark.calcBMI()
// john.calcBMI()

// console.log(mark, john)
// if (mark.BMI > john.BMI) {
//   console.log(`${mark.firstName}'s BMI(${mark.BMI}) is higher than\
//  ${john.firstName}'s (${john.BMI}).`)
// } else {
//   console.log(`${john.firstName}'s BMI(${john.BMI}) is higher than\
//   ${mark.firstName}'s (${mark.BMI}).`)
// }

// COURSE 46 Iteration the for loop

// console.log('Repetition 1 🏋️‍♂️')
// console.log('Repetition 2 🏋️‍♂️')
// console.log('Repetition 3 🏋️‍♂️')
// console.log('Repetition 4 🏋️‍♂️')
// console.log('Repetition 5 🏋️‍♂️')
// console.log('Repetition 6 🏋️‍♂️')

// for (let rep = 1; rep <= 6; rep++) { // 1ere partie on declare la valeur qui bouge et son etat de base
//   console.log(`'Repetition ${rep} 🏋️‍♂️'`) // 2eme partie on declare la condition qui fait s'arreter la boucle
// } // 3eme partie on declare ce que l'on fait a la fin de chaque boucle.

// assignment

// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting, ${50 - voter} left`)
// }

// COURSE 47 looping arrays

// const maxArray = [
//   'Max',
//   'Moons',
//   2023 - 1995,
//   'musician',
//   ['Ilan', 'Tom', 'Bastien'],
//   true
// ]

// const types = [] // ici on cree un array vide qu'on remplira avec les resultats de la loop.

// // console.log(maxArray[0])
// // console.log(maxArray[1]) // pour console log tous les elements d'un array sans loop

// for (let i = 0; i < maxArray.length; i++) { // on part de 0 et on va jusqu'a <5 car en array le premier de la liste est 0 pas 1
//   console.log(maxArray[i], typeof maxArray[i])
//   //   types[i] = typeof maxArray[i]
//   types.push(typeof maxArray[i]) // meme utilité qu'au dessus
// }

// console.log(types)

// const years = [1995, 2000, 1991, 1967]
// const ages = []

// for (let i = 0; i < years.length; i++) {
// //   console.log(2023 - years[i])
//   //   ages[i] = 2023 - years[i]
//   ages.push(2023 - years[i])
// }

// console.log(ages)

// continue and break

// console.log('continue with strings')
// for (let i = 0; i < maxArray.length; i++) {
//   if (typeof maxArray[i] !== 'string') continue // comprendre: si le type de value n'est pas une string, passe au suivant, ce qui aura pour effet d'appliquer le resultat de la loop (ici un console.log) uniquement sur les strings.
//   console.log(maxArray[i], typeof maxArray[i])
// }

// console.log('break with number')
// for (let i = 0; i < maxArray.length; i++) {
//   if (typeof maxArray[i] === 'number') break // comprendre: si le type de value est un number, mets fin a la boucle.
//   console.log(maxArray[i], typeof maxArray[i])
// }

// assignment

// const populations = [60000000, 50000000, 40000000, 70000000]

// const percentageTotalPop = function (populationSpe) {
//   return (populationSpe / 7900000000) * 100
// }
// const percentages2 = []

// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageTotalPop(populations[i]))
// }

// console.log(percentages2)

// COURSE 48 Loop back and loop in loop

// const maxArray = [
//   'Max',
//   'Moons',
//   2023 - 1995,
//   'musician',
//   ['Ilan', 'Tom', 'Bastien'],
//   true
// ]

// for (let i = maxArray.length - 1; i >= 0; i--) {
//   console.log(i, maxArray[i])
// }
// // on veut faire 5 rep de 3 exercices differents :

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`----Starting exercise ${exercise}`)

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Weight lift rep ${rep}`)
//   }
// }
// assignment

// const listOfNeighbours = [
//   ['Canada', 'Mexico'],
//   ['Spain'],
//   ['Norway', 'Sweden', 'Russia']
// ]

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbours: ${listOfNeighbours[i][j]}`)
//   }
// }

// COURSE While Loop

// for (let rep = 1; rep <= 6; rep++) {
//   console.log(`'Repetition ${rep} 🏋️‍♂️'`)
// }
// pour faire ça avec une boucle while on declare la variable rep avant

// let rep2 = 1
// while (rep2 <= 6) {
//   console.log(`'Repetition ${rep2} 🏋️‍♂️'`)
//   rep2++
// }

// let dice = Math.trunc(Math.random() * 6) + 1

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`)
//   dice = Math.trunc(Math.random() * 6) + 1
//   if (dice === 6) { console.log(`You rolled a ${dice}, Gz!`) }
// }

// assignment

// const populations = [60000000, 50000000, 40000000, 70000000]
// const percentageTotalPop = function (populationSpe) {
//   return (populationSpe / 7900000000) * 100
// }
// const percentages2 = []
// let i = 0

// while (i < populations.length) {
//   const perc = percentageTotalPop(populations[i])
//   percentages2.push(perc)
//   i++
// }
// console.log(percentages2)

// Coding challenge # 4

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15
  } else {
    return bill * 0.2
  }
}

const bills = [
  22,
  295,
  176,
  440,
  37,
  105,
  10,
  1100,
  86,
  52
]

const tips = []
const total = []

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]))
  total.push(bills[i] + calcTip(bills[i]))
}
console.log(tips)
console.log(total)

let sum = 0
const calcAverage = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

console.log(calcAverage(total))
